import { LitElement, html, css } from 'lit';
import '../button/button.js';
import '../input/input.js';
import { employeeStore } from '../../store/employee.js';
import { DMYtoIso, isoToDMY } from '../../utils/date.js';

class AddEditEmployee extends LitElement {
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

  static properties = {
    employee: { type: Object },
    isEditing: { type: Boolean, state: true },
  };


  constructor() {
    super();
    this.employee = null;
    this.isEditing = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // URL değişikliklerini dinle
    window.addEventListener('popstate', this.handleUrlChange);
    // İlk yükleme
    this.checkEmployeeFromUrl();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Event listener'ı temizle
    window.removeEventListener('popstate', this.handleUrlChange);
  }


  getIdParam() {
    return new URLSearchParams(window.location.search).get('id');
  }

  firstUpdated() {
    const employeeId = this.getIdParam();
    if (employeeId) {
      console.log('employeeId', employeeId);
      this.title = 'Edit Employee';
      this.employee = employeeStore
        .getState()
        .employees.find((employee) => employee.id === employeeId);
      console.log('found employee', this.employee);
    }
  }

  getFormData() {
    const form = this.shadowRoot.querySelector('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // find dates and convert to dd-mm-yyyy format.
    Array.from(form.elements)
      .filter((el) => el instanceof HTMLInputElement && el.type === 'date')
      .forEach((input) => {
        console.log('input', input);
        const name = input.name;
        const dateObject = data[name];
        if (dateObject) {
          data[name] = isoToDMY(dateObject);
        }
      });
    return data;
  }

  handleUrlChange = () => {
    this.checkEmployeeFromUrl();
  }

  checkEmployeeFromUrl() {
    const employeeId = this.getIdParam();

    if (employeeId) {
      this.isEditing = true;
      this.employee = employeeStore
        .getState()
        .employees.find((employee) => employee.id === employeeId);
      console.log('Edit mode - found employee:', this.employee);
    } else {
      this.isEditing = false;
      this.employee = null;
      console.log('Add mode');
    }

    this.requestUpdate();
  }

  updateEmployee() {
    const updatedEmployeeData = this.getFormData();
    console.log('updatedEmployeeData', updatedEmployeeData);
    employeeStore.getState().updateEmployee(updatedEmployeeData);
    alert('Employee updated successfully');
  }

  addEmployee(e) {
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
    //employeeStore.getState().addEmployee(employee);
  }

  render() {
    return html`
      <div class="add-edit-employee">
        <div class="header">
          <h2>${this.isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
        </div>
        <form class="form" @submit=${this.handleSubmit}>
          <input-component>
            <label slot="label">First Name</label>
            <input
              required
              slot="control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value=${this.employee?.firstName || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">Last Name</label>
            <input
              required
              slot="control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value=${this.employee?.lastName || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">Date of Employment</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfEmployment"
              placeholder="Date of Employment"
              value=${DMYtoIso(this.employee?.dateOfEmployment)}
            />
          </input-component>
          <input-component>
            <label slot="label">Date of Birth</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value=${DMYtoIso(this.employee?.dateOfBirth)}
            />
          </input-component>
          <input-component>
            <label slot="label">Phone</label>
            <input
              required
              slot="control"
              type="text"
              name="phone"
              placeholder="Phone"
              value=${this.employee?.phone || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">Email</label>
            <input
              required
              slot="control"
              type="email"
              name="email"
              placeholder="Email"
              value=${this.employee?.email || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">Department</label>
            <select
              required
              slot="control"
              type="text"
              name="department"
              placeholder="Department"
              .value=${this.employee?.department || ''}
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Analytics">Analytics</option>
            </select>
          </input-component>
          <input-component>
            <label slot="label">Position</label>
            <select
              required
              slot="control"
              type="select"
              name="position"
              placeholder="Position"
              .value=${this.employee?.position || ''}
            >
              <option value="">Select Position</option>
              <option value="Senior">Senior</option>
              <option value="Medior">Medior</option>
              <option value="Junior">Junior</option>
          </select>
          </input-component>
          <input-component>
            <input
              type="hidden"
              slot="control"
              name="id"
              value=${this.employee?.id || ''}
            />
          </input-component>
          <div class="actions">
            <button-component
              name="save"
              label=${this.isEditing ? 'Update' : 'Save'}
              variant="primary"
              type="submit"
              @click=${this.isEditing ? this.updateEmployee : this.addEmployee}
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

customElements.define('add-edit-employee', AddEditEmployee);
