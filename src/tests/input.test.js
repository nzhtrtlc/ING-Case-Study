import { fixture, expect, html, oneEvent } from '@open-wc/testing';
import '../components/_common/input/input.js';

describe('InputComponent', () => {
  it('renders input in control slot', async () => {
    const el = await fixture(html`
      <input-component>
        <input slot="control" type="text" />
      </input-component>
    `);
    const input = el.querySelector('input[slot="control"]');
    expect(input).to.exist;
  });

  it('updates value on input', async () => {
    const el = await fixture(html`
      <input-component>
        <input slot="control" type="text" />
      </input-component>
    `);
    const input = el.querySelector('input[slot="control"]');
    input.value = 'test';
    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    expect(el.value).to.equal('test');
  });

  it('dispatches input-changed event', async () => {
    const el = await fixture(html`
      <input-component>
        <input slot="control" type="text" />
      </input-component>
    `);
    const input = el.querySelector('input[slot="control"]');
    setTimeout(() => {
      input.value = 'hello';
      input.dispatchEvent(
        new Event('input', { bubbles: true, composed: true })
      );
    });
    const event = await oneEvent(el, 'input-changed');
    expect(event.detail.value).to.equal('hello');
  });

  it('renders icon in icon slot', async () => {
    const el = await fixture(html`
      <input-component>
        <input slot="control" type="text" />
        <span slot="icon">test</span>
      </input-component>
    `);
    const icon = el.querySelector('span[slot="icon"]');
    expect(icon).to.exist;
    expect(icon.textContent).to.include('test');
  });

  it('renders label in label slot', async () => {
    const el = await fixture(html`
      <input-component>
        <span slot="label">Name</span>
        <input slot="control" type="text" />
      </input-component>
    `);
    const label = el.querySelector('span[slot="label"]');
    expect(label).to.exist;
    expect(label.textContent).to.include('Name');
  });
});
