import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from './stores/auth';
import { isAuthenticated } from './middlewares/auth';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomeView.vue'),
    },
    {
        path: '/registrarse',
        name: 'register',
        component: () => import('./pages/auth/RegisterView.vue'),
    },
    {
        path: '/ingresar',
        name: 'login',
        component: () => import('./pages/auth/LoginView.vue'),
    },
    {
        path: '/proyectos',
        name: 'projects',
        component: () => import('./pages/ProjectsView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useAuthStore();

    store.validateToken();

    if (
        !store.isAuthenticated &&
        !['home', 'register', 'login'].includes(to.name)
    ) {
        next({ name: 'login' });
    }

    if (store.isAuthenticated && ['register', 'login'].includes(to.name)) {
        next({ name: 'home' });
    }

    next();
});

export default router;
