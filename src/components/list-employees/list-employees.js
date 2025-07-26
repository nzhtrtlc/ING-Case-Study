import {LitElement, html, css} from 'lit';
import '../table/table.js';
import employeeData from '../../../public/assets/employees_dummy.js';

class ListEmployees extends LitElement {
  static styles = css`
    h2 {
      color: var(--primary-color);
    }
    .actions {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  `;

  get columns() {
    return [
      {key: 'firstName', label: 'First Name'},
      {key: 'lastName', label: 'Last Name'},
      {key: 'dateOfEmployment', label: 'Date of Employment'},
      {key: 'dateOfBirth', label: 'Date of Birth'},
      {key: 'phone', label: 'Phone'},
      {key: 'email', label: 'Email'},
      {key: 'department', label: 'Department'},
      {key: 'position', label: 'Position'},
      {
        key: 'actions',
        label: 'Actions',
        render: (row) => html`
          <td>
            <div class="actions">
              <img
                width="20"
                height="20"
                src="/public/assets/icons/edit_icon.svg"
                @click=${() => alert('Edit ' + row.firstName)}
              />
              <img
                width="20"
                height="20"
                src="/public/assets/icons/trash_icon.svg"
                @click=${() => alert('Delete ' + row.position)}
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
        <h2>Employee List</h2>
        <table-component
          .data=${employeeData}
          .columns=${this.columns}
          .pageSize=${7}
        ></table-component>
      </div>
    `;
  }
}

customElements.define('list-employees', ListEmployees);
