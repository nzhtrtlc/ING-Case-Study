import { fixture, expect, html } from '@open-wc/testing';
import '../components/_common/table/table';

describe('Table', () => {
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
  it('is defined', async () => {
    expect(tableElement).to.exist;
  });

  it('should render correct rows', async () => {
    let rows = tableElement.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(PAGE_SIZE);
    expect(rows[0].textContent).to.include('person-1');
    expect(rows[1].textContent).to.include('person-2');
  });

  it('should render columns correctly', async () => {
    const columns = [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
    ];
    const data = [
      { firstName: 'Ali', lastName: 'Veli', email: 'ali@veli.com' },
    ];

    const el = await fixture(html`
      <table-component .columns=${columns} .data=${data}></table-component>
    `);

    const ths = el.shadowRoot.querySelectorAll('thead th');

    expect(ths.length).to.equal(columns.length);

    columns.forEach((col, i) => {
      expect(ths[i].textContent.trim()).to.equal(col.label);
    });
  });

  it('search filters table rows', async () => {
    const el = await fixture(html`
      <table-component
        .pageSize=${4}
        .columns=${columns}
        .data=${data}
      ></table-component>
    `);
    el.searchValue = 'person-2';

    await el.updateComplete;
    await el.updateComplete;
    // mandatory: wait for component update

    // alternative solution
    //await new Promise(resolve => setTimeout(resolve, 0));

    const rows = el.shadowRoot.querySelectorAll('tbody tr');
    expect(rows[0].textContent).to.include('person-2');
  });
});
