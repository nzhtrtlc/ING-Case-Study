import './components/navbar/navbar.js';
import './router/router.js';
import { employeeStore } from './store/employee.js';

employeeStore.getState().loadEmployees();
