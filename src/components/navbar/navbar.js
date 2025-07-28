import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
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
  }`;

  render() {
    return html`
      <nav class="navbar" aria-label="Main Navigation">
        <div class="navbar__left">
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
              Employees
            </a>
          </li>
          <li>
            <a href="/add-edit-employee" class="navbar__link">
              <i class="ri-add-line">+</i>
              <span>Add New</span>
            </a>
          </li>
          <li>
            <div class="navbar__lang" aria-label="Change Language">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
                alt="Türkçe"
              />
            </div>
          </li>
        </ul>
      </nav>
    `;
  }
}

window.customElements.define('navbar-component', Navbar);
