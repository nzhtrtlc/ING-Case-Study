import { LitElement, html, css } from 'lit';
import '../input/input.js';
import '../pagination/pagination.js';
import { t } from '../../localization/i18n.js';
import { iconSearch } from '../svgs/other_icons.js';

class Table extends LitElement {
  static properties = {
    columns: { type: Array },
    data: { type: Array },
    pageSize: { type: Number },
    currentPage: { type: Number },
    searchValue: { type: String },
    pagedRows: { type: Array, state: true },
    fadingItems: { type: Set },
  };

  static styles = css`
    .table-container {
      height: 100%;
      overflow: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    th,
    td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
      white-space: nowrap;
    }
    th {
      color: var(--secondary-color);
      font-size: 0.8rem;
      padding: 1.5rem;
    }
    tr td {
      padding: 1.75rem;
    }
    tr:last-child td {
      border-bottom: none;
    }

    tr.fade-out {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
    .pagination {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
    }
    .pagination button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
    .pagination .active {
      font-weight: 600;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 50%;
      padding: 0.3rem 0.6rem;
    }
    .search-container {
      margin-bottom: 1rem;
    }
    .no-data {
      text-align: center;
      padding: 1.5rem;
      color: #f65656;
    }
  `;

  constructor() {
    super();
    this.data = [];
    this.columns = [];
    this.pageSize = 5;
    this.currentPage = 1;
    this.searchValue = '';
    this.pagedRows = [];
  }
  connectedCallback() {
    super.connectedCallback();
    const params = new URLSearchParams(window.location.search);
    this.searchValue = params.get('search') || '';
    this.currentPage = 1;
    this._syncPagedRows();
  }

  updated(changed) {
    // update pageRows when searchValue, data or currentPage changes.
    if (
      changed.has('searchValue') ||
      changed.has('data') ||
      changed.has('currentPage')
    ) {
      this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
      this._syncPagedRows();
    }
  }

  get filteredData() {
    if (!this.searchValue) return this.data;
    const q = this.searchValue.toLowerCase();
    return this.data.filter((item) =>
      this.columns.some((col) => {
        const v = item[col.key];
        return v != null && v.toString().toLowerCase().includes(q);
      })
    );
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  _syncPagedRows() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedRows = this.filteredData.slice(start, start + this.pageSize);
  }

  handleSearch(e) {
    this.searchValue = e.detail?.value ?? e.target?.value ?? '';
    this.currentPage = 1;

    const params = new URLSearchParams();
    if (this.searchValue) params.set('search', this.searchValue);
    window.history.replaceState(
      {},
      '',
      window.location.pathname + (params.toString() ? `?${params}` : '')
    );
  }

  handlePageChange(e) {
    this.currentPage = e.detail.page;
  }

  render() {
    return html`
      <div class="search-container">
        <input-component>
          <input
            slot="control"
            .value=${this.searchValue}
            @input=${this.handleSearch}
            type="text"
            placeholder="${t('search')}"
          />
          ${iconSearch()}
        </input-component>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              ${this.columns.map(
                (col) => html`<th scope="col">${col.label}</th>`
              )}
            </tr>
          </thead>
          <tbody>
            ${this.pagedRows.length
              ? this.pagedRows.map(
                  (row) => html`<tr
                    class="${this.fadingItems?.has(row.id) ? 'fade-out' : ''}"
                  >
                    ${this.columns.map((col) =>
                      col.render
                        ? col.render(row)
                        : html`<td>${row[col.key]}</td>`
                    )}
                  </tr>`
                )
              : html`<tr>
                  <td colspan="${this.columns.length}" class="no-data">
                    ${t('noData')}
                  </td>
                </tr>`}
          </tbody>
        </table>
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

customElements.define('table-component', Table);
