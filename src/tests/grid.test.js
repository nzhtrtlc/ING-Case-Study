import { fixture, expect, html } from '@open-wc/testing';
import '../components/list-employees/grid.js';

describe('GridComponent', () => {
  const data = [
    { firstName: 'Ali', lastName: 'Veli', email: 'ali@veli.com' },
    { firstName: 'Ayşe', lastName: 'Fatma', email: 'ayse@fatma.com' },
    { firstName: 'John', lastName: 'Doe', email: 'john@doe.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@smith.com' },
  ];

  it('renders correct number of cards', async () => {
    const el = await fixture(html`
      <grid-component .data=${data} .pageSize=${4}></grid-component>
    `);
    const cards = el.shadowRoot.querySelectorAll('.employee-grid');
    expect(cards.length).to.equal(4);
  });

  it('paginates cards', async () => {
    const el = await fixture(html`
      <grid-component .data=${data} .pageSize=${2}></grid-component>
    `);
    
    // first page
    let cards = el.shadowRoot.querySelectorAll('.employee-grid');
    expect(cards.length).to.equal(2);

    // navigate second page
    el.currentPage = 2;

    cards = el.shadowRoot.querySelectorAll('.employee-grid');
    expect(cards.length).to.equal(2);
  });

  it('filters cards by search', async () => {
    const el = await fixture(html`
      <grid-component .data=${data} .pageSize=${4} .searchValue=${'john'}></grid-component>
    `);
    const cards = el.shadowRoot.querySelectorAll('.employee-grid');

    expect(cards.length).to.equal(1);
    expect(cards[0].textContent.toLowerCase()).to.include('john');
  });

  it('shows no data message when filtered empty', async () => {
    const el = await fixture(html`
      <grid-component .data=${data} .pageSize=${4} .searchValue=${'nonexistent'}></grid-component>
    `);
    const cards = el.shadowRoot.querySelectorAll('.employee-grid');
    expect(cards.length).to.equal(0);
    expect(el.shadowRoot.textContent.toLowerCase()).to.include('no data found');
  });
});
