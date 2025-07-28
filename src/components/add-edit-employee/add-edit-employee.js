import { LitElement, html, css } from 'lit';
import '../button/button.js';

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
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    console.log('formDataObject', formDataObject);
  }

  render() {
    return html`
      <div class="add-edit-employee">
        <div class="header">
          <h2>Add Employee</h2>
        </div>
        <form class="form" @submit=${this.handleSubmit}>
          <input name="firstName" type="text" placeholder="First Name" value="John" />
          <input name="lastName" type="text" placeholder="Last Name" value="Doe" />
          <input
            name="dateOfEmployment"
            type="text"
            placeholder="Date of Employment"
            value="2022-01-01"
          />
          <input name="dateOfBirth" type="text" placeholder="Date of Birth" value="1990-01-01" />
          <input name="phone" type="text" placeholder="Phone" value="+90 555 123 45 67" />
          <input name="email" type="text" placeholder="Email" value="john.doe@example.com" />
          <input name="department" type="text" placeholder="Department" value="IT" />
          <input name="position" type="text" placeholder="Position" value="Senior" />
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
