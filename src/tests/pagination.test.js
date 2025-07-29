import { fixture, expect, html, oneEvent } from '@open-wc/testing';
import '../components/pagination/pagination.js';

describe('Pagination', () => {
  it('renders correct number of page buttons', async () => {
    const data = Array.from({ length: 25 }, (_, i) => i + 1);
    const el = await fixture(html`
      <pagination-component .data=${data} .pageSize=${5}></pagination-component>
    `);
    const buttons = el.shadowRoot.querySelectorAll('.page-buttons button');
    // 25/5 = 5 pages
    expect(buttons.length).to.equal(5);
  });

  it('disables prev button on first page', async () => {
    const data = Array.from({ length: 10 }, (_, i) => i + 1);
    const el = await fixture(html`
      <pagination-component .data=${data} .pageSize=${5}></pagination-component>
    `);
    const prevBtn = el.shadowRoot.querySelector('button');
    expect(prevBtn.disabled).to.be.true;
  });

  it('disables next button on last page', async () => {
    const data = Array.from({ length: 10 }, (_, i) => i + 1);
    const el = await fixture(html`
      <pagination-component
        .data=${data}
        .pageSize=${5}
        .currentPage=${2}
      ></pagination-component>
    `);
    const btns = el.shadowRoot.querySelectorAll('button');
    const nextBtn = btns[btns.length - 1];
    expect(nextBtn.disabled).to.be.true;
  });

  it('emits onPageChange event when page changes', async () => {
    const data = Array.from({ length: 15 }, (_, i) => i + 1);
    const el = await fixture(html`
      <pagination-component .data=${data} .pageSize=${5}></pagination-component>
    `);
    const page2Btn = el.shadowRoot.querySelectorAll('.page-buttons button')[1];
    setTimeout(() => page2Btn.click());
    const event = await oneEvent(el, 'onPageChange');
    expect(event.detail.page).to.equal(2);
  });
});
