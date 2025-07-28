import { LitElement, html, css } from 'lit';
import { spread } from '@open-wc/lit-helpers';
import { classMap } from 'lit-html/directives/class-map.js';

class Button extends LitElement {
  static styles = css`
    button {
      padding: 0.75rem 1rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      width: 100%;
      font-weight: 600;
    }
    .primary {
      background-color: var(--primary-color);
      color: #fff;
    }
    .secondary {
      background-color: transparent;
      border: 1px solid #525099;
      color: #525099;
    }
  `;

  static properties = {
    label: { type: String },
    variant: { type: String },
    type: { type: String },
    name: { type: String },
  };

  render() {
    return html`
      <button
        ...=${spread(this.buttonProps)}
        class=${classMap({
          primary: this.variant === 'primary',
          secondary: this.variant === 'secondary',
        })}
        name=${this.name}
        type=${this.type || 'button'}
      >
        ${this.label}
      </button>
    `;
  }
}

customElements.define('button-component', Button);
