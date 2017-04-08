import Home from '../components/Home/Home.vue';

// Auth components
import Login from '../components/Auth/Login.vue';
import Logout from '../components/Auth/Logout.vue';
import Register from '../components/Auth/Register.vue';

// Dashboard components
import Dashboard from '../components/Dashboard/Main.vue';
import Settings from '../components/Dashboard/Settings.vue';

// User components
import User from '../components/User/Main.vue';

// Project components
import Project from '../components/Project/Main.vue';

// Customer components
import Customer from '../components/Customer/Main.vue';

// Errors
import PageNotFound from '../components/Error/PageNotFound.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/users', name: 'users', component: User },
  { path: '/projects', name: 'projects', component: Project },
  { path: '/customers', name: 'customers', component: Customer },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/logout', name: 'logout', component: Logout },
  { path: '*', component: PageNotFound }
];

export default routes;
