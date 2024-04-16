import {createWebHistory, createRouter} from 'vue-router'

import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;