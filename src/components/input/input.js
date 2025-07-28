import { LitElement, html, css } from 'lit';

class Input extends LitElement {
  static styles = css`
    .input-box {
      position: relative;
      width: 350px;
    }
    ::slotted([slot='control']) {
      width: 100%;
      padding: 10px;
      border: 1.5px solid #e0e0e0;
      border-radius: 10px;
      background: #fff;
      font-size: 1rem;
      color: #4d4d4d;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    ::slotted([slot='control']::placeholder) {
      color: #bdbdbd;
    }
    :host(:focus-within) ::slotted([slot='control']) {
      border-color: #ff6600;
    }
    /* Icon slot */
    .icon-slot {
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      pointer-events: none;
    }
  `;

  static properties = {
    value: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.value = '';
    this._onInput = this._onInput.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('input', this._onInput);
  }

  disconnectedCallback() {
    this.removeEventListener('input', this._onInput);
    super.disconnectedCallback();
  }

  _onInput(e) {
    const target = e.target;
    if (target.slot === 'control' && target instanceof HTMLInputElement) {
      this.value = target.value;
      this.dispatchEvent(
        new CustomEvent('input-changed', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  _wire() {
    const native = this.querySelector('slot[name="control"]');
    native.addEventListener('input', this._onInput.bind(this));
    native.addEventListener('change', this._onChange.bind(this));
  }

  _onChange(e) {
    this.dispatchEvent(
      new CustomEvent('input-change', {
        detail: { value: e.target.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="input-box">
        <slot name="label"></slot>
        <slot name="control"></slot>
        <span class="icon-slot">
          <slot name="icon"></slot>
        </span>
      </div>
    `;
  }
}

customElements.define('input-component', Input);
