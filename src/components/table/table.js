import { LitElement, html, css } from 'lit';
import '../input/input.js';

class Table extends LitElement {
  static properties = {
    data: { type: Array },
    columns: { type: Array },
    pageSize: { type: Number },
    currentPage: { type: Number },
    searchValue: { type: String },
  };

  static styles = css`
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
  }

  connectedCallback() {
    super.connectedCallback();
    const urlParams = new URLSearchParams(window.location.search);
    this.searchValue = urlParams.get('search') || '';
  }

  updateUrl() {
    const params = new URLSearchParams();
    if (this.searchValue) params.set('search', this.searchValue);
    const newUrl =
      window.location.pathname +
      (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState({}, '', newUrl);
  }

  handleSearch(e) {
    this.searchValue = e.detail.value;
    this.currentPage = 1;
    this.updateUrl();
  }

  get filteredData() {
    if (!this.searchValue) return this.data;
    return this.data.filter((item) =>
      this.columns.some((column) => {
        const value = item[column.key];
        return (
          value &&
          value
            .toString()
            .toLowerCase()
            .includes(this.searchValue.toLowerCase())
        );
      })
    );
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  goToPage(page) {
    // currentPage cannot be less than 1 or greater than totalPages.
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
  }

  get paginationButtons() {
    const totalPageCount = this.totalPages;
    const currentPage = this.currentPage;
    const maxVisiblePages = 5; // render first 5, inside pagination buttons.

    if (totalPageCount <= maxVisiblePages) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const pages = [];

    const addRange = (start, end) => {
      for (let i = start; i <= end; i++) pages.push(i);
    };

    const firstRange = currentPage < maxVisiblePages;
    const lastRange = totalPageCount - currentPage < maxVisiblePages;

    if (firstRange) {
      addRange(1, maxVisiblePages);
      pages.push('...');
      pages.push(totalPageCount);
    } else if (lastRange) {
      pages.push(1);
      pages.push('...');
      addRange(totalPageCount - maxVisiblePages + 1, totalPageCount);
    } else {
      pages.push(1);
      pages.push('...');
      addRange(currentPage - 2, currentPage + 2);
      pages.push('...');
      pages.push(totalPageCount);
    }

    return pages;
  }

  render() {
    return html`
      <div class="search-container">
        <input-component
          .value=${this.searchValue}
          @input-changed=${this.handleSearch}
        >
        <svg
        slot="icon"
            width="24"
            height="24"
            fill="none"
            stroke="#ff6600"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
      </input-component>
      </div>
      <table>
        <thead>
          <tr>
            ${this.columns.map(
              (column) => html`<th scope="col">${column.label}</th>`
            )}
          </tr>
        </thead>
        <tbody>
          ${this.pagedData.length > 0
            ? this.pagedData.map(
                (row) => html`<tr>
                  ${this.columns.map((column) =>
                    column.render
                      ? column.render(row)
                      : html`<td>${row[column.key]}</td>`
                  )}
                </tr>`
              )
            : html`<tr>
                <td colspan="${this.columns.length}" class="no-data">
                  No data found
                </td>
              </tr>`}
        </tbody>
      </table>
      ${this.pagedData.length > 1
        ? html`<div class="pagination">
            <button
              ?disabled=${this.currentPage === 1}
              @click=${() => this.goToPage(this.currentPage - 1)}
            >
              Prev
            </button>
            ${this.paginationButtons.map((page) =>
              page === '...'
                ? html`<span class="ellipsis">...</span>`
                : html`
                    <button
                      class=${this.currentPage === page ? 'active' : ''}
                      @click=${() => this.goToPage(page)}
                    >
                      ${page}
                    </button>
                  `
            )}
            <button
              ?disabled=${this.currentPage === this.totalPages}
              @click=${() => this.goToPage(this.currentPage + 1)}
            >
              Next
            </button>
          </div>`
        : null}
    `;
  }
}

customElements.define('table-component', Table);
