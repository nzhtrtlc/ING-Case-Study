import { LitElement, html, css } from 'lit';
import { employeeStore } from '../../store/employee.js';
import { Router } from '@vaadin/router';
import { showDialog } from '../_common/dialog/dialog.js';
import { iconSearch } from '../svgs/other_icons.js';
import { t } from '../../localization/i18n.js';

export class GridComponent extends LitElement {
  static properties = {
    data: { type: Array },
    pagedRows: { state: true },
    pageSize: { type: Number },
    currentPage: { type: Number },
    searchValue: { type: String }
  };

  static styles = css`
    .employee-card-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;
      padding: 0.5rem 0;
    }

    .employee-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      width: 100%;
      background-color: #fff;
      border-radius: 0.7rem;
      box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.08);
      padding: 1rem;
      box-sizing: border-box;
    }

    .employee-field {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .label {
      color: #b3ada7;
      font-size: 0.9rem;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0.3rem;
    }

    .value {
      color: #222;
      font-size: 1rem;
      font-weight: 600;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .employee-actions {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin-top: 1rem;
    }

    .edit-btn,
    .delete-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.6rem 1rem;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      width: 100%;
    }

    .edit-btn {
      background: #5b53a6;
      color: #fff;
    }

    .delete-btn {
      background: #ff6200;
      color: #fff;
    }

    .edit-btn:hover {
      background: #473e8f;
    }

    .delete-btn:hover {
      background: #e65100;
    }

    @media (min-width: 768px) {
      .employee-card-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .employee-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 1.5rem;
        padding: 1.5rem;
      }

      .employee-actions {
        flex-direction: row;
        gap: 1rem;
      }

      .edit-btn,
      .delete-btn {
        width: auto;
        flex: 1;
        font-size: 1rem;
        padding: 0.6rem 1.3rem;
      }

      .label {
        font-size: 0.95rem;
      }

      .value {
        font-size: 1.1rem;
      }
    }

    @media (min-width: 1200px) {
      .employee-card-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
      }

      .employee-grid {
        gap: 1.2rem 2rem;
        padding: 1.5rem 1.2rem;
      }
    }

    @media (min-width: 1400px) {
      .employee-card-list {
        gap: 3rem;
      }
    }

    @media (max-width: 480px) {
      .employee-card-list {
        padding: 0.25rem 0;
        gap: 1rem;
      }

      .employee-grid {
        padding: 0.8rem;
        gap: 0.8rem;
      }

      .label {
        font-size: 0.85rem;
      }

      .value {
        font-size: 0.95rem;
      }

      .edit-btn,
      .delete-btn {
        font-size: 0.85rem;
        padding: 0.5rem 0.8rem;
      }
    }
  `;

  constructor() {
    super();
    this.data = [];
    this.pageSize = 5;
    this.currentPage = 1;
    this.pagedRows = [];
  }
  updated(changed) {
    if (
      changed.has('data') ||
      changed.has('pageSize') ||
      changed.has('currentPage')
    ) {
      this.#syncPagedRows();
    }
  }

  handlePageChange(e) {
    this.currentPage = e.detail.page;
  }

  editEmployee(employee) {
    Router.go(`/add-edit-employee?id=${employee.id}`);
  }

  async removeEmployee(employee) {
    const confirm = await showDialog({
      title: 'Delete Employee',
      message: `Are you sure you want to delete this employee? ${employee.firstName} ${employee.lastName}`,
      confirmText: 'Yes, Delete',
      cancelText: 'No',
    });
    if (confirm) {
      employeeStore.getState().removeEmployee(employee.id);
    }
  }

  get filteredData() {
    if (!this.searchValue) return this.data;
    const searchValue = this.searchValue.toLowerCase();
    return this.data.filter(employee => Object.values(employee)
      .some(value => value.toString().toLowerCase().includes(searchValue)));
  }

  handleSearch(e) {
    this.searchValue = e.target.value;
    this.currentPage = 1;
    this.#syncPagedRows();
  }

  #syncPagedRows() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedRows = this.filteredData.slice(start, start + this.pageSize);
  }

  #renderEmployee(e) {
    return html`
      <div class="employee-grid">
        <div class="employee-field">
          <span class="label">First Name:</span>
          <span class="value">${e.firstName || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Last Name:</span>
          <span class="value">${e.lastName || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Date of Employment:</span>
          <span class="value">${e.dateOfEmployment || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Date of Birth:</span>
          <span class="value">${e.dateOfBirth || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Phone</span>
          <span class="value">${e.phone || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Email</span>
          <span class="value">${e.email || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Department</span>
          <span class="value">${e.department || ''}</span>
        </div>
        <div class="employee-field">
          <span class="label">Position</span>
          <span class="value">${e.position || ''}</span>
        </div>
        <div class="employee-actions">
          <button @click=${() => this.editEmployee(e)} class="edit-btn">
            <span class="icon">✏️</span> Edit
          </button>
          <button @click=${() => this.removeEmployee(e)} class="delete-btn">
            <span class="icon">🗑️</span> Delete
          </button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
    <input-component .placeholder=${'Search'} .value=${this.searchValue} @onChange=${this.handleSearch}>
      <input slot='control' 
      type="text"
        placeholder="Search..."
        .value=${this.searchValue || ''}
        @input=${this.handleSearch}
      />  
      ${iconSearch()}
    </input-component>
      <div class="employee-card-list">
        ${this.pagedRows.length
        ? this.pagedRows.map((employee) => this.#renderEmployee(employee))
        : html`<div class="no-data"> ${t('noData')}</div>`}
      </div>
      <pagination-component
        .data=${this.filteredData}
        .pageSize=${this.pageSize}
        .currentPage=${this.currentPage}
        @onPageChange=${this.handlePageChange}
      ></pagination-component>
    `;
  }
}

customElements.define('grid-component', GridComponent);
