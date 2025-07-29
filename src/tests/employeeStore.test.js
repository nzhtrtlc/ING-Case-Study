import { expect } from '@open-wc/testing';
import { employeeStore } from '../store/employee.js';

describe('EmployeeStore', () => {
  beforeEach(() => {
    employeeStore.setState({ employees: [] });
  });

  it('should add an employee', () => {
    employeeStore.getState().addEmployee({ id: 1, firstName: 'Ali' });
    const employees = employeeStore.getState().employees;
    expect(employees.length).to.equal(1);
    expect(employees[0].firstName).to.equal('Ali');
  });

  it('updates an employee', () => {
    const employee = { id: 1, firstName: 'Ali' };
    employeeStore.getState().addEmployee(employee);
    const readId = employeeStore.getState().employees[0].id;
    employeeStore
      .getState()
      .updateEmployee({ ...employee, id: readId, firstName: 'Veli' });
    const employees = employeeStore.getState().employees;
    expect(employees[0].firstName).to.equal('Veli');
    expect(employees[0].id).to.equal(readId);
  });

  it('removes an employee', () => {
    employeeStore.getState().addEmployee({ firstName: 'Ali' });
    const readId = employeeStore.getState().employees[0].id;
    employeeStore.getState().removeEmployee(readId);
    const employees = employeeStore.getState().employees;
    expect(employees.length).to.equal(0);
  });

  it('loads employees', () => {
    const dummy = [
      { id: 1, firstName: 'Ali' },
      { id: 2, firstName: 'Veli' },
    ];
    // write dummy data to localStorage
    localStorage.setItem(
      'employee-store',
      JSON.stringify({ state: { employees: dummy } })
    );
    employeeStore.getState().loadEmployees();
    const employees = employeeStore.getState().employees;
    expect(employees.length).to.equal(2);
    expect(employees[1].firstName).to.equal('Veli');
  });
});
