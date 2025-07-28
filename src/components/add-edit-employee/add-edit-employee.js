import { LitElement, html, css } from 'lit';
import '../button/button.js';
import '../input/input.js';

class AddEmployee extends LitElement {
  static styles = css`
    h2 {
      color: var(--primary-color);
    }
    .add-edit-employee {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }
    .form input {
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 0.5rem;
      width: calc(100% - 1rem);
    }
    .actions {
      display: flex;
      justify-content: center;
      grid-column: 1 / -1;
      gap: 1rem;
      width: 100%;
    }
    button-component {
      width: 200px;
    }
    @media (max-width: 576px) {
      .form {
        grid-template-columns: 1fr;
      }
    }
  `;

  handleSubmit(e) {
    e.preventDefault();

    const form = this.shadowRoot.querySelector('form');
    form.requestSubmit();
    if (form.checkValidity()) {
      console.log('form is valid');

      const formData = new FormData(form);
      console.log(Object.fromEntries(formData.entries()));
    } else {
      console.log('form is invalid');
      return;
    }
    // console.log('form', form.checkValidity());
  }

  dateIcon = html`
    <svg
      slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#ff6200"
      stroke-width="2"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" fill="none" />
      <path d="M16 3v4M8 3v4M3 9h18" />
      <circle cx="8" cy="13" r="1" />
      <circle cx="12" cy="13" r="1" />
      <circle cx="16" cy="13" r="1" />
    </svg>
  `;

  render() {
    return html`
      <div class="add-edit-employee">
        <div class="header">
          <h2>Add Employee</h2>
        </div>
        <form class="form" @submit=${this.handleSubmit}>
          <input-component>
            <input
              required
              slot="control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value="John"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value="Doe"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="date"
              name="dateOfEmployment"
              placeholder="Date of Employment"
              value="2022-01-01"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value="1990-01-01"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="text"
              name="phone"
              placeholder="Phone"
              value="+90 555 123 45 67"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="email"
              name="email"
              placeholder="Email"
              value="john.doe@example.com"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="text"
              name="department"
              placeholder="Department"
              value="IT"
            />
          </input-component>
          <input-component>
            <input
              required
              slot="control"
              type="text"
              name="position"
              placeholder="Position"
              value="Senior"
            />
          </input-component>
          <div class="actions">
            <button-component
              name="save"
              label="Save"
              variant="primary"
              type="submit"
              @click=${this.handleSubmit}
            ></button-component>
            <button-component
              name="cancel"
              label="Cancel"
              variant="secondary"
            ></button-component>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('add-employee', AddEmployee);
