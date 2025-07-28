import { LitElement, html, css } from 'lit';
import { t } from '../../localization/i18n.js';
import { iconPrev, iconNext } from '../svgs/navigation.js';

class Pagination extends LitElement {
  static styles = css`
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
    .page-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .page-info {
      margin: 0 1rem;
      font-size: 1rem;
      display: none;
    }

    @media (max-width: 576px) {
      .page-buttons {
        display: none;
      }
      .page-info {
        display: block;
      }
    }
  `;

  static properties = {
    data: { type: Array, required: true },
    currentPage: { type: Number },
    pageSize: { type: Number },
  };

  constructor() {
    super();
    this.currentPage = 1;
    this.pageSize = 5;
  }

  #addRange(start, end) {
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page) {
    const pages = this.#calcPages();
    if (page < 1 || page > pages.length) return;
    this.currentPage = page;
    this._dispatch();
  }

  #calcPages() {
    const total = Math.ceil(this.data.length / this.pageSize);
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  _dispatch() {
    const start = (this.currentPage - 1) * this.pageSize;
    const slice = this.data.slice(start, start + this.pageSize);
    this.dispatchEvent(
      new CustomEvent('onPageChange', {
        detail: { page: this.currentPage, pagedData: slice },
      })
    );
  }

  updated(changed) {
    if (
      changed.has('data') ||
      changed.has('currentPage') ||
      changed.has('pageSize')
    ) {
      // data veya page değişince dispatch et
      this._dispatch();
    }
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.dispatchEvent(
      new CustomEvent('onPageChange', {
        detail: {
          pagedData: this.data.slice(start, start + this.pageSize),
        },
      })
    );
    return this.data.slice(start, start + this.pageSize);
  }

  get paginationButtons() {
    const totalPageCount = this.#calcPages().length;
    const currentPage = this.currentPage;
    const maxVisiblePages = 5; // render first 5, inside pagination buttons.

    if (totalPageCount <= maxVisiblePages) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const pages = [];
    const firstRange = currentPage < maxVisiblePages;
    const lastRange = totalPageCount - currentPage < maxVisiblePages;

    if (firstRange) {
      pages.push(...this.#addRange(1, maxVisiblePages));
      pages.push('...');
      pages.push(totalPageCount);
    } else if (lastRange) {
      pages.push(1);
      pages.push('...');
      pages.push(
        ...this.#addRange(totalPageCount - maxVisiblePages + 1, totalPageCount)
      );
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(...this.#addRange(currentPage - 2, currentPage + 2));
      pages.push('...');
      pages.push(totalPageCount);
    }

    return pages;
  }

  render() {
    const paginationButtons = this.paginationButtons;
    const isFirstPage = this.currentPage === 1;
    const isLastPage = this.currentPage === this.#calcPages().length;
    return paginationButtons.length > 1
      ? html`
          <div class="pagination">
            <button
              ?disabled=${isFirstPage}
              @click=${() => this.goToPage(this.currentPage - 1)}
            >
              ${iconPrev(24, isFirstPage ? 'gray' : 'var(--primary-color)')}
            </button>

            <span class="page-info">
              ${t('page')} ${this.currentPage} ${t('of')}
              ${this.#calcPages().length}
            </span>

            <span class="page-buttons">
              ${paginationButtons.map((p) =>
                p === '...'
                  ? html`<span class="ellipsis">…</span>`
                  : html`<button
                      class=${p === this.currentPage ? 'active' : ''}
                      @click=${() => this.goToPage(p)}
                    >
                      ${p}
                    </button>`
              )}
            </span>

            <button
              ?disabled=${isLastPage}
              @click=${() => this.goToPage(this.currentPage + 1)}
            >
              ${iconNext(24, isLastPage ? 'gray' : 'var(--primary-color)')}
            </button>
          </div>
        `
      : null;
  }
}

customElements.define('pagination-component', Pagination);
