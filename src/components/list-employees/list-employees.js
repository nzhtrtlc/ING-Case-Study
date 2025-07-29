import { LitElement, html, css } from 'lit';
import '../table/table.js';
import './grid.js';
import { employeeStore } from '../../store/employee.js';
import { appStore } from '../../store/app.js';
import { t } from '../../localization/i18n.js';
import { iconBlock, iconGrid } from '../svgs/other_icons.js';
import { showDialog } from '../_common/dialog/dialog.js';

class ListEmployees extends LitElement {
  static styles = css`
    h2 {
      color: var(--primary-color);
    }
    .header_right {
      display: flex;
      flex-direction: row;
      margin-right: 1rem;
      gap: 1rem;
    }
    .header_right div {
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .employee-card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .employee-card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
      gap: 2rem;
      width: 100%;
      margin: 0 auto;
      padding: 1rem 0;
    }

    .employee-fade-out {
      opacity: 0;
      transition: opacity 0.3s ease-out;
      pointer-events: none;
    }

    @media (max-width: 575.98px) {
      .employee-card-list {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `;

  static properties = {
    employees: { type: Array, state: true },
    displayMode: { type: String, state: true },
    fadingEmployees: { type: Set, state: true },
  };

  constructor() {
    super();
    this.displayMode = appStore.getState().employeeDisplayMode;
    this.employees = employeeStore.getState().employees;
    this.fadingEmployees = new Set();

    employeeStore.subscribe((state) => {
      this.employees = state.employees;
    });
    appStore.subscribe((state) => {
      this.displayMode = state.employeeDisplayMode;
    });
  }

  async removeEmployee(employee) {
    const confirm = await showDialog({
      title: 'Delete Employee',
      message: `Are you sure you want to delete this employee? ${employee.firstName} ${employee.lastName}`,
      confirmText: 'Yes, Delete',
      cancelText: 'No',
    });
    if (!confirm) {
      return;
    }
    this.fadingEmployees.add(employee.id);
    this.requestUpdate();

    // remove employee from store after animation end.
    setTimeout(() => {
      employeeStore.getState().removeEmployee(employee.id);
      this.fadingEmployees.delete(employee.id);
      this.requestUpdate();
    }, 300);
  }

  changeDisplayMode(mode) {
    appStore.getState().setEmployeeDisplayMode(mode);
    this.displayMode = mode;
  }

  get columns() {
    return [
      { key: 'firstName', label: t('firstName') },
      { key: 'lastName', label: t('lastName') },
      { key: 'dateOfEmployment', label: t('dateOfEmployment') },
      { key: 'dateOfBirth', label: t('dateOfBirth') },
      { key: 'phone', label: t('phone') },
      { key: 'email', label: t('email') },
      { key: 'department', label: t('department') },
      { key: 'position', label: t('position') },
      {
        key: 'actions',
        label: t('actions'),
        render: (row) => html`
          <td>
            <div
              class="actions"
              style="display: flex; flex-direction: row; gap: 1rem;"
            >
              <a
                href="/add-edit-employee?id=${row.id}"
                style="text-decoration: none;"
              >
                <img
                  width="20"
                  height="20"
                  src="/public/assets/icons/edit_icon.svg"
                />
              </a>
              <img
                width="20"
                height="20"
                src="/public/assets/icons/trash_icon.svg"
                @click=${() => this.removeEmployee(row)}
                style="cursor: pointer;"
              />
            </div>
          </td>
        `,
      },
    ];
  }

  render() {
    return html`
      <div>
        <div class="header">
          <h2>${t('employeeList')}</h2>
          <div class="header_right">
            <div @click=${() => this.changeDisplayMode('table')}>
              ${iconBlock(
                30,
                this.displayMode === 'table' ? 'var(--primary-color)' : 'gray'
              )}
            </div>
            <div @click=${() => this.changeDisplayMode('grid')}>
              ${iconGrid(
                30,
                this.displayMode === 'grid' ? 'var(--primary-color)' : 'gray'
              )}
            </div>
          </div>
        </div>
        ${this.displayMode === 'grid'
          ? html` <grid-component .data=${this.employees}></grid-component> `
          : html`<table-component
              .data=${this.employees}
              .columns=${this.columns}
              .fadingItems=${this.fadingEmployees}
            ></table-component>`}
      </div>
    `;
  }
}

customElements.define('list-employees', ListEmployees);
