import { fixture, expect, html } from '@open-wc/testing';
import '../components/_common/button/button';

describe('ButtonComponent', () => {
  it('renders with label', async () => {
    const el = await fixture(
      html`<button-component label="Click Me"></button-component>`
    );
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.textContent).to.include('Click Me');
  });

  it('applies primary variant', async () => {
    const el = await fixture(
      html`<button-component
        label="Primary"
        variant="primary"
      ></button-component>`
    );
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.classList.contains('primary')).to.be.true;
  });

  it('applies secondary variant', async () => {
    const el = await fixture(
      html`<button-component
        label="Secondary"
        variant="secondary"
      ></button-component>`
    );
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.classList.contains('secondary')).to.be.true;
  });

  it('sets type attribute', async () => {
    const el = await fixture(
      html`<button-component label="Submit" type="submit"></button-component>`
    );
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.getAttribute('type')).to.equal('submit');
  });

  it('sets name attribute', async () => {
    const el = await fixture(
      html`<button-component label="Submit" name="btn1"></button-component>`
    );
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.getAttribute('name')).to.equal('btn1');
  });

  it('applies buttonProps to native button', async () => {
    const el = await fixture(
      html`<button-component label="Props"></button-component>`
    );
    el.buttonProps = { 'data-test': 'my-btn', disabled: true };
    await el.updateComplete;
    const btn = el.shadowRoot.querySelector('button');
    expect(btn.getAttribute('data-test')).to.equal('my-btn');
    expect(btn.disabled).to.be.true;
  });
});
