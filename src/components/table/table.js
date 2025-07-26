import { LitElement, html, css } from 'lit';

class Table extends LitElement {

  static properties = {
    data: { type: Array },
    columns: { type: Array },
    pageSize: { type: Number },
    currentPage: { type: Number },
  }

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
    th {
      color: var(--secondary-color);
      font-size: .80rem;
      padding: 1.5rem;
    }
    tr td{
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
        padding-top: .5rem;
        padding-bottom: 1.5rem;
    }
    .pagination button {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }
    .pagination .active{
      font-weight: 600;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 50%;
      padding: .3rem .6rem;
    }

  `;

  constructor() {
    super();
    this.data = [];
    this.columns = [];
    this.pageSize = 5;
    this.currentPage = 1;
  }

  get pagedData() {
    // calculate start and end index of data prop to render paginated data.
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  get totalPages() {
    // calculate total pages.
    return Math.ceil(this.data.length / this.pageSize);
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

    const firstRange = currentPage < maxVisiblePages; //
    const lastRange = (totalPageCount - currentPage) < maxVisiblePages;

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
        <table>
            <thead>
                <tr>
                    ${this.columns.map(column => html`<th>${column.label}</th>`)}
                </tr>
            </thead>
            <tbody>
                ${this.pagedData.map(row => html`<tr>
                    ${this.columns.map(column => column.render ? column.render(row) : html`<td>${row[column.key]}</td>`)}
                </tr>`)}
            </tbody>
    </table>
    <div class="pagination">
      <button
        ?disabled=${this.currentPage === 1}
        @click=${() => this.goToPage(this.currentPage - 1)}
      >Prev</button>
      ${this.paginationButtons.map(page =>
      page === '...'
        ? html`<span class="ellipsis">...</span>`
        : html`
        <button
          class=${this.currentPage === page ? 'active' : ''}
          @click=${() => this.goToPage(page)}
        >${page}</button>
      `
    )}
      <button
        ?disabled=${this.currentPage === this.totalPages}
        @click=${() => this.goToPage(this.currentPage + 1)}
      >Next</button>
    </div>
    `;
  }
}

customElements.define('table-component', Table);