import { LitElement, html, css } from 'lit';
import { t } from '../../localization/i18n.js';
import { flagTR, flagEN } from '../svgs/flags.js';
import { appStore } from '../../store/app.js';

export class Navbar extends LitElement {
  static properties = {
    showLangDropdown: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.showLangDropdown = false;
  }

  static styles = css`

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding-left: .5rem;
      padding-right: .5rem;
    }

    .navbar__logo {
      width: 50px;
    }

    .navbar__brand {
      font-size: 15px;
      font-weight: 600;
    }

    .navbar__lang {
      display: flex;
      cursor: pointer;
    } 

    .navbar__left {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--text-color);
    }
    .navbar__menu {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .navbar__link {
      display: flex;
    }
    img {
      width: 24px;
    }
    ul {
     list-style: none;
    }
     ul li a {
      color: var(--primary-color);
      text-decoration: none;
     }
      .navbar__link  {
      color: var(--secondary-color);
      }
      .navbar__link.active{
        color: var(--primary-color);
      }
  .lang-dropdown {
    position: absolute;
    top: 110%;
    right: 0;
    background: white;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    z-index: 100;
    min-width: 100px;
    border-radius: 4px;
  }
  .lang-dropdown div {
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .lang-dropdown div:hover {
    background: #f5f5f5;
  }
  }`;

  getLang() {
    return document.documentElement.lang;
  }

  toggleLangDropdown(e) {
    e.stopPropagation();
    this.showLangDropdown = !this.showLangDropdown;
  }

  setLang(lang) {
    document.documentElement.lang = lang;
    this.showLangDropdown = false;
    appStore.getState().setAppLang(lang);
    window.location.reload();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      'click',
      (this._closeDropdown = () => {
        if (this.showLangDropdown) {
          this.showLangDropdown = false;
          this.requestUpdate();
        }
      })
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._closeDropdown);
  }

  render() {
    return html`
      <nav class="navbar" aria-label="Main Navigation">
        <a href="/" class="navbar__left">
          <img
            src="/public/assets/images/ing_tr.png"
            alt="ING Logo"
            class="navbar__logo"
          />
          <span class="navbar__brand">ING</span>
        </div>
        <ul class="navbar__menu">
          <li>
            <a href="/employees" class="navbar__link active">
              <i class="ri-user-3-line"></i>
              ${t('employees')}
            </a>
          </li>
          <li>
            <a href="/add-edit-employee" class="navbar__link">
              <i class="ri-add-line">+</i>
              ${t('addNew')}
            </a>
          </li>
          <li style="position:relative;">
  <div
    class="navbar__lang"
    aria-label="Change Language"
    @click=${this.toggleLangDropdown}
    tabindex="0"
    aria-haspopup="listbox"
    aria-expanded="${this.showLangDropdown}"
  >
    ${this.getLang() === 'tr' ? flagTR() : flagEN()}
  </div>
  ${
    this.showLangDropdown
      ? html`
          <div class="lang-dropdown" @click=${(e) => e.stopPropagation()}>
            ${this.getLang() === 'tr'
              ? html`<div @click=${() => this.setLang('en')}>
                  ${flagEN()} English
                </div>`
              : html`<div @click=${() => this.setLang('tr')}>
                  ${flagTR()} Türkçe
                </div>`}
          </div>
        `
      : ''
  }
</li>
        </ul>
      </nav>
    `;
  }
}

window.customElements.define('navbar-component', Navbar);
