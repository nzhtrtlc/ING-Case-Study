import { LitElement, html, css } from 'lit';

export class GridComponent extends LitElement {
  static properties = {
    data: { type: Array },
    pagedRows: { state: true },
    pageSize: { type: Number },
    currentPage: { type: Number },
  };

  static styles = css`
    .employee-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.2rem 2rem;
      width: 100%;
      background-color: #fff;
      border-radius: 0.7rem;
      box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.08);
      padding: 1.5rem 1.2rem 1.2rem 1.2rem;
      box-sizing: border-box;
    }
    .employee-field {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .label {
      color: #b3ada7;
      font-size: 0.95rem;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .value {
      color: #222;
      font-size: 1.1rem;
      font-weight: 600;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    .employee-actions {
      grid-column: 1 / -1;
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      justify-content: flex-start;
    }
    .edit-btn,
    .delete-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.6rem 1.3rem;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
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
    @media (max-width: 600px) {
      .employee-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
        padding: 1rem 0.5rem;
      }
      .employee-actions {
        flex-direction: column;
        gap: 0.7rem;
        margin-top: 0.7rem;
      }

      @media (max-width: 700px) {
        .employee-card-list {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 0.5rem 0;
        }
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
      this._syncPagedRows();
    }
  }

  // Slice data according to current page
  _syncPagedRows() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedRows = this.data.slice(start, start + this.pageSize);
  }

  handlePageChange(e) {
    this.currentPage = e.detail.page;
  }

  editEmployee() {
    // TODO: navigate add-edit-employee
  }

  deleteEmployee() {
    // TODO: Implement delete employee
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
          <button @click=${this.editEmployee} class="edit-btn">
            <span class="icon">✏️</span> Edit
          </button>
          <button @click=${this.deleteEmployee} class="delete-btn">
            <span class="icon">🗑️</span> Delete
          </button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      ${this.pagedRows.map((employee) => this.#renderEmployee(employee))}
      <pagination-component
        .data=${this.data}
        .pageSize=${this.pageSize}
        .currentPage=${this.currentPage}
        @onPageChange=${this.handlePageChange}
      ></pagination-component>
    `;
  }
}

customElements.define('grid-component', GridComponent);
