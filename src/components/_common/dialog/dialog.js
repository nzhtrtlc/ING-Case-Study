import { html, LitElement, css } from 'lit';
import '../../button/button.js';
import { iconClose } from '../../svgs/other_icons.js';

class Dialog extends LitElement {
  static properties = {
    title: { type: String },
    message: { type: String },
    confirmText: { type: String },
    cancelText: { type: String },
    open: { type: Boolean, reflect: true },
  };

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      display: none;
    }
    :host([open]) {
      display: flex;
    }
    .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 1rem;
      border-radius: 5px;
      max-width: 90vw;
      width: 430px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .dialog-header {
      display: flex;
      justify-content: space-between;
    }
    .dialog-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--primary-color);
    }
    .dialog-message {
      font-size: 1rem;
      color: #333;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .dialog-footer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .dialog-close {
      cursor: pointer;
    }
    .confirm {
      background: var(--primary-color, #007bff);
      color: #fff;
    }
    .cancel {
      background: #e0e0e0;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.open = false;
    this.title = '';
    this.message = '';
    this.confirmText = 'Confirm';
    this.cancelText = 'Cancel';
  }

  _onConfirm() {
    this.dispatchEvent(
      new CustomEvent('dialog-confirm', { bubbles: true, composed: true })
    );
  }
  _onCancel() {
    this.dispatchEvent(
      new CustomEvent('dialog-cancel', { bubbles: true, composed: true })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._escListener = (e) => {
      if (this.open && (e.key === 'Escape' || e.key === 'Esc')) {
        this._onCancel();
      }
    };
    window.addEventListener('keydown', this._escListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._escListener);
  }

  render() {
    return html`
      <div class="dialog">
        <div class="dialog-header">
          <div class="dialog-title">${this.title}</div>
          <div class="dialog-close" @click=${this._onCancel}>
            ${iconClose(24, 'var(--primary-color)')}
          </div>
        </div>
        <div class="dialog-message">${this.message}</div>
        <div class="dialog-footer">
          <button-component
            @click=${this._onConfirm}
            variant="primary"
            label=${this.confirmText}
          ></button-component>
          <button-component
            @click=${this._onCancel}
            variant="secondary"
            label=${this.cancelText}
          ></button-component>
        </div>
      </div>
    `;
  }
}

customElements.define('dialog-component', Dialog);

export function showDialog({
  title = '',
  message = '',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
} = {}) {
  return new Promise((resolve) => {
    let dialog = document.querySelector('dialog-component');
    if (!dialog) {
      dialog = document.createElement('dialog-component');
      document.body.appendChild(dialog);
    }

    dialog.title = title;
    dialog.message = message;
    dialog.confirmText = confirmText;
    dialog.cancelText = cancelText;
    dialog.open = true;

    const cleanup = () => {
      dialog.open = false;
      dialog.removeEventListener('dialog-confirm', onConfirm);
      dialog.removeEventListener('dialog-cancel', onCancel);
    };
    const onConfirm = () => {
      cleanup();
      resolve(true);
    };
    const onCancel = () => {
      cleanup();
      resolve(false);
    };

    dialog.addEventListener('dialog-confirm', onConfirm);
    dialog.addEventListener('dialog-cancel', onCancel);
  });
}
