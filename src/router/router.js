import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');

const router = new Router(outlet);

const loadEmployeeList = () =>
  import('../components/list-employees/list-employees.js');
const loadAddEditEmployee = () =>
  import('../components/add-edit-employee/add-edit-employee.js');

router.setRoutes([
  {
    path: '/',
    component: 'list-employees',
    action: loadEmployeeList(),
  },
  {
    path: '/employees',
    component: 'list-employees',
    action: loadEmployeeList(),
  },
  {
    path: '/add-edit-employee',
    action: loadAddEditEmployee,
    component: 'add-edit-employee',
  },
]);

export { router };
