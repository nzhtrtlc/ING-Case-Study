import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../button/button.js';
import '../input/input.js';
import { employeeStore } from '../../store/employee.js';
import { DMYtoIso, isoToDMY } from '../../utils/date.js';
import { Router } from '@vaadin/router';
import { t } from '../../localization/i18n.js';
import { showDialog } from '../_common/dialog/dialog.js';

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
      gap: 2rem;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    input-component {
      width: 100%;
      min-width: 0; /* Grid overflow'u önlemek için */
    }

    .form input:not([slot='control']) {
      display: none;
    }

    .actions {
      display: flex;
      justify-content: center;
      grid-column: 1 / -1;
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
    }

    button-component {
      width: 200px;
      flex-shrink: 0;
    }

    @media (max-width: 991.98px) {
      .form {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        padding: 1.5rem;
      }
    }

    @media (max-width: 575.98px) {
      .form {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
      }

      button-component {
        width: 100%;
      }

      .actions {
        flex-direction: column;
        align-items: center;
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
    window.addEventListener('popstate', this.handleUrlChange);
    this.#checkEmployeeFromUrl();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.handleUrlChange);
  }

  #reloadPage(url) {
    if (url) {
      window.location.replace(url);
    } else {
      window.location.reload();
    }
  }

  getIdParam() {
    return new URLSearchParams(window.location.search).get('id');
  }

  firstUpdated() {
    const employeeId = this.getIdParam();
    if (employeeId) {
      this.title = t('editEmployee');
      this.employee = employeeStore
        .getState()
        .employees.find((employee) => employee.id === employeeId);
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
        const name = input.name;
        const dateObject = data[name];
        if (dateObject) {
          data[name] = isoToDMY(dateObject);
        }
      });
    return data;
  }

  handleUrlChange = () => {
    this.#checkEmployeeFromUrl();
  };

  #checkEmployeeFromUrl() {
    const employeeId = this.getIdParam();

    if (employeeId) {
      this.isEditing = true;
      this.employee = employeeStore
        .getState()
        .employees.find((employee) => employee.id === employeeId);
    } else {
      this.isEditing = false;
      this.employee = null;
    }

    this.requestUpdate();
  }

  async updateEmployee() {
    const confirm = await showDialog({
      title: t('updateEmployeeTitle'),
      message: t('areYouSureYouWantToUpdateThisEmployee'),
      confirmText: t('update'),
      cancelText: t('no'),
    });
    if (confirm) {
      const updatedEmployeeData = this.getFormData();
      employeeStore.getState().updateEmployee(updatedEmployeeData);
    }
  }

  async addEmployee(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector('form');
    form.requestSubmit();
    if (form.checkValidity()) {
      const confirm = await showDialog({
        title: t('addEmployee'),
        message: t('areYouSureYouWantToAddThisEmployee'),
        confirmText: t('save'),
        cancelText: t('no'),
      });
      if (confirm) {
        const formData = new FormData(form);
        const formObjectWithoutId = Object.fromEntries(
          formData.entries().filter(([key, _]) => key !== 'id')
        );
        employeeStore.getState().addEmployee(formObjectWithoutId);
        this.#reloadPage('/add-edit-employee');
      }
    }
  }

  #handleCancel() {
    Router.go('/employees');
  }

  render() {
    return html`
      <div class="add-edit-employee">
        <div class="header">
          <h2>${this.isEditing ? t('editEmployee') : t('addEmployee')}</h2>
        </div>
        <form class="form" @submit=${(e) => e.preventDefault()}>
          <input-component>
            <label slot="label">${t('firstName')}</label>
            <input
              required
              slot="control"
              type="text"
              name="firstName"
              placeholder="${t('firstName')}"
              value=${this.employee?.firstName || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('lastName')}</label>
            <input
              required
              slot="control"
              type="text"
              name="lastName"
              placeholder="${t('lastName')}"
              value=${this.employee?.lastName || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('dateOfEmployment')}</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfEmployment"
              value=${ifDefined(DMYtoIso(this.employee?.dateOfEmployment))}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('dateOfBirth')}</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfBirth"
              placeholder="${t('dateOfBirth')}"
              value=${ifDefined(DMYtoIso(this.employee?.dateOfBirth))}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('phone')}</label>
            <input
              required
              slot="control"
              type="tel"
              name="phone"
              placeholder="${t('phone')}"
              value=${this.employee?.phone || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('email')}</label>
            <input
              required
              slot="control"
              type="email"
              name="email"
              placeholder="${t('email')}"
              value=${this.employee?.email || ''}
            />
          </input-component>
          <input-component>
            <label slot="label">${t('department')}</label>
            <select
              required
              slot="control"
              type="text"
              name="department"
              placeholder="${t('department')}"
              .value=${this.employee?.department || ''}
            >
              <option value="">${t('selectDepartment')}</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Analytics">Analytics</option>
            </select>
          </input-component>
          <input-component>
            <label slot="label">${t('position')}</label>
            <select
              required
              slot="control"
              type="select"
              name="position"
              placeholder="${t('position')}"
              .value=${this.employee?.position || ''}
            >
              <option value="">${t('selectPosition')}</option>
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
              label=${this.isEditing ? t('update') : t('save')}
              variant="primary"
              type="button"
              @click=${this.isEditing ? this.updateEmployee : this.addEmployee}
            ></button-component>
            <button-component
              name="cancel"
              label=${t('cancel')}
              variant="secondary"
              @click=${this.#handleCancel}
            ></button-component>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('add-edit-employee', AddEditEmployee);
