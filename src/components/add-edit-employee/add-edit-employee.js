import { LitElement, html } from 'lit';

class AddEmployee extends LitElement {
  render() {
    return html` <h1>Add Employee</h1> `;
  }
}

customElements.define('add-employee', AddEmployee);
