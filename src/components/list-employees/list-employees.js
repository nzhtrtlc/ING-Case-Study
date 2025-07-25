import { LitElement, html } from 'lit';

class ListEmployees extends LitElement {
    render() {
        return html`
            <h1>Employee List</h1>
        `;
    }
}

customElements.define('list-employees', ListEmployees);