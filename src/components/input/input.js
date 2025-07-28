import { LitElement, html, css } from 'lit';
import { spread } from '@open-wc/lit-helpers';

class Input extends LitElement {
  static styles = css`
    .input-box {
      position: relative;
      width: 350px;
    }
    .input-box input {
      width: 100%;
      padding: 10px;
      border: 1.5px solid #e0e0e0;
      border-radius: 10px;
      background: #fff;
      font-size: 1rem;
      font-family: 'Inter', Arial, sans-serif;
      color: #4d4d4d;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    .input-box input::placeholder {
      color: #bdbdbd;
    }
    .input-box input:focus {
      border-color: #ff6600;
    }
    .icon-slot {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      pointer-events: none;
    }
  `;

  static properties = {
    value: { type: String, reflect: true },
    placeholder: { type: String },
    type: { type: String },
    name: { type: String },
    inputProps: { type: Object },
  };

  constructor() {
    super();
    this.value = '';
    this.placeholder = '';
    this.type = 'text';
    this.name = '';
    this.inputProps = {};
  }

  handleInput(e) {
    const newValue = e.target.value;
    this.value = newValue;
    this.dispatchEvent(
      new CustomEvent('input-changed', {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="input-box">
        <input
          .value=${this.value}
          .placeholder=${this.placeholder}
          .type=${this.type}
          .name=${this.name}
          @input=${this.handleInput}
          ...=${spread(this.inputProps)}
        />
        <span class="icon-slot">
          <slot name="icon"></slot>
        </span>
      </div>
    `;
  }
}

customElements.define('input-component', Input);
