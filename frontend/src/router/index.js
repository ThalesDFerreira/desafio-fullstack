import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue';
import HomeView from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }, // Adicione uma meta informando que a rota requer autenticação
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      // Se a rota requer autenticação e não há token, redirecione para a página de login
      next({ name: 'Login' });
    } else {
      next(); // O usuário está autenticado, prossiga para a rota
    }
  } else {
    next(); // A rota não requer autenticação
  }
});

export default router;
