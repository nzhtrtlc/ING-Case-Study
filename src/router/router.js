import { Router } from '@vaadin/router';

// Route'ların render edileceği ana element (örn. <main id="outlet"></main>)
const outlet = document.getElementById('outlet');

const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/employees', component: 'employee-list' },
  { path: '/add', component: 'employee-form' },
]);
