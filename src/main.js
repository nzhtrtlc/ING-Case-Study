import './components/navbar/navbar.js';
import './router/router.js';
import { employeeStore } from './store/employee.js';
import { appStore } from './store/app';

console.log(appStore);

employeeStore.getState().loadEmployees();
const appLang = appStore.getState().appLang;

document.querySelector('html').lang = appLang;
