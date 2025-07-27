import { LitElement, html, css } from 'lit';

class Input extends LitElement {
  static styles = css`
    .search-box {
      position: relative;
      width: 350px;
    }

    .search-box input[type='text'] {
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

    .search-box input[type='text']::placeholder {
      color: #bdbdbd;
    }

    .search-box input[type='text']:focus {
      border-color: #ff6600;
    }

    .search-icon {
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
  };

  constructor() {
    super();
    this.value = this.value || '';
  }

  handleInput(e) {
    const newValue = e.target.value;
    this.value = newValue;

    this.dispatchEvent(
      new CustomEvent('search-changed', {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="search-box">
        <input
          type="text"
          placeholder="Ara..."
          .value=${this.value}
          @input=${this.handleInput}
        />
        <span class="search-icon">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#ff6600"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
        </span>
      </div>
    `;
  }
}

customElements.define('input-component', Input);
