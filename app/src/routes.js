import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from './stores/auth';

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
        path: '/perfil',
        name: 'profile',
        component: () => import('./pages/user/ProfileView.vue'),
    },
    {
        path: '/proyectos',
        component: () => import('./pages/projects/ProjectsView.vue'),
        children: [
            {
                path: '',
                name: 'projects',
                component: () =>
                    import('./pages/projects/ProyectItemsView.vue'),
            },
            {
                path: 'nuevo',
                name: 'new-project',
                component: () => import('./pages/projects/NewProjectView.vue'),
            },
            {
                path: ':id/tareas',
                name: 'todos',
                component: () => import('./pages/projects/TodosView.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useAuthStore();

    store.validateToken();
    // if (
    //     store.isAuthenticated &&
    //     !['home', 'register', 'login'].includes(to.name)
    // ) {
    //     store.validateToken();
    // }

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
