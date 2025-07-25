import { fixture, expect, html } from '@open-wc/testing';
import './navbar.js';

suite('Navbar', () => {
  test('navbar is defined and renders navigation links', async () => {
    const el = await fixture(html`<navbar-component></navbar-component>`);
    expect(el).to.exist;

    const nav = el.shadowRoot.querySelector('nav.navbar');
    expect(nav).to.exist;
    
    const links = el.shadowRoot.querySelectorAll('a.navbar__link');
    expect(links.length).to.equal(2);
    expect(links[0].getAttribute('href')).to.equal('/employees');
    expect(links[0].textContent).to.include('Employees');
    expect(links[1].getAttribute('href')).to.equal('/add');
    expect(links[1].textContent).to.include('Add New');
  });

  test('navbar has a language switcher', async () => {
    const el = await fixture(html`<navbar-component></navbar-component>`);
    const langDiv = el.shadowRoot.querySelector('.navbar__lang');
    expect(langDiv).to.exist;
    const img = langDiv.querySelector('img');
    expect(img).to.exist;
    expect(img.getAttribute('alt')).to.include('Türkçe');
  });
});