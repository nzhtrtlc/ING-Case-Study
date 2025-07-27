import { fixture, expect, html } from '@open-wc/testing';
import './table.js';

suite('Table', () => {
  let data, columns, PAGE_SIZE, tableElement;

  beforeEach(async () => {
    data = Array.from({ length: 50 }, (_, i) => ({ name: `person-${i + 1}` }));
    columns = [{ key: 'name', label: 'Name' }];
    PAGE_SIZE = 5;
    tableElement = await fixture(html`
      <table-component
        .data=${data}
        .columns=${columns}
        .pageSize=${PAGE_SIZE}
      ></table-component>
    `);
  });
  test('table is defined and renders data', async () => {
    expect(tableElement).to.exist;
  });

  test('table renders correct rows', async () => {
    let rows = el.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(PAGE_SIZE);
    expect(rows[0].textContent).to.include('person-1');
    expect(rows[1].textContent).to.include('person-2');
  });

  test.skip('table renders correct pagination', async () => {
    const data = Array.from({ length: 50 }, (_, i) => ({
      name: `person-${i + 1}`,
    }));
    const columns = [{ key: 'name', label: 'Name' }];

    const PAGE_SIZE = 5;

    const el = await fixture(html`
      <table-component
        .data=${data}
        .columns=${columns}
        .pageSize=${PAGE_SIZE}
      ></table-component>
    `);

    const paginationButtons =
      el.shadowRoot.querySelectorAll('.pagination button');
    expect(paginationButtons.length).to.equal(10);
  });

  test.skip('search filters table rows', async () => {
    tableElement.searchValue = 'person-2';
    const rows = tableElement.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(1);
    expect(rows[0].textContent).to.include('person-2');
  });
});
