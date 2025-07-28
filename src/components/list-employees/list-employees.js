import { LitElement, html, css } from 'lit';
import '../table/table.js';
import './grid.js';
import { employeeStore } from '../../store/employee.js';

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

    @media (max-width: 600px) {
      .employee-card-list {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `;

  static properties = {
    employees: { type: Array },
    displayMode: { type: String, state: true },
  };

  constructor() {
    super();
    this.displayMode = '';
    this.employees = employeeStore.getState().employees;
    employeeStore.subscribe((state) => {
      this.employees = state.employees;
    });
  }

  get columns() {
    return [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'dateOfEmployment', label: 'Date of Employment' },
      { key: 'dateOfBirth', label: 'Date of Birth' },
      { key: 'phone', label: 'Phone' },
      { key: 'email', label: 'Email' },
      { key: 'department', label: 'Department' },
      { key: 'position', label: 'Position' },
      {
        key: 'actions',
        label: 'Actions',
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
                @click=${() => alert('Delete ' + row.position)}
                style="cursor: pointer;"
              />
            </div>
          </td>
        `,
      },
    ];
  }

  render() {
    console.log('employees', this.employees);
    return html`
      <div>
        <div class="header">
          <h2>Employee List</h2>
          <div class="header_right">
            <img width="30" src="/public/assets/icons/block_icon.svg" />
            <img width="30" src="/public/assets/icons/grid_icon.svg" />
          </div>
        </div>
        ${this.displayMode === 'grid'
          ? html` <grid-component .data=${this.employees}></grid-component> `
          : html`<table-component
              .data=${this.employees}
              .columns=${this.columns}
            ></table-component>`}
      </div>
    `;
  }
}

customElements.define('list-employees', ListEmployees);
