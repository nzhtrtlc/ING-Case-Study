import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');

const router = new Router(outlet);

const loadEmployeeList = () => import('../components/list-employees/list-employees.js');
const loadAddEmployee = () => import('../components/add-employee/add-employee.js');

router.setRoutes([
  {
    path: '/',
    component: 'list-employees',
    action: loadEmployeeList,
  },
  {
    path: '/employees',
    component: 'list-employees',
    action: loadEmployeeList
  },
  {
    path: '/add-employee',
    action: loadAddEmployee,
    component: 'add-employee',
  },
]);
