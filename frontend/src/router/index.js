import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue';
import HomeView from '../views/Home.vue';

let pathHome = '';
let nameHome = '';
let componentHome = '';

const verifyUserAutenticate = () => {
  const token = localStorage.getItem('token');
  if (token) {
    pathHome = '/home';
    nameHome = 'Home';
    componentHome = HomeView;
  }
};

verifyUserAutenticate();

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: pathHome,
    name: nameHome,
    component: componentHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
