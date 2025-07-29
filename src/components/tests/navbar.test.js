import { fixture, expect, html } from '@open-wc/testing';
import '../navbar/navbar';

describe('Navbar', () => {
  it('is defined and renders navigation links', async () => {
    const el = await fixture(html`<navbar-component></navbar-component>`);
    expect(el).to.exist;

    const nav = el.shadowRoot.querySelector('nav.navbar');
    expect(nav).to.exist;

    const links = el.shadowRoot.querySelectorAll('a.navbar__link');
    expect(links.length).to.equal(2);
    expect(links[0].getAttribute('href')).to.equal('/employees');
    expect(links[0].textContent).to.include('Employees');
    expect(links[1].getAttribute('href')).to.equal('/add-edit-employee');
    expect(links[1].textContent).to.include('Add New');
  });

  it('should display language switcher', async () => {
    const el = await fixture(
      html`<navbar-component .showLangDropdown=${true}></navbar-component>`
    );
    const langDiv = el.shadowRoot.querySelector('.lang-dropdown');
    expect(langDiv).to.exist;
  });
  it('should hide language switcher', async () => {
    const el = await fixture(
      html`<navbar-component .showLangDropdown=${false}></navbar-component>`
    );
    const langDiv = el.shadowRoot.querySelector('.lang-dropdown');
    expect(langDiv).to.not.exist;
  });
});
