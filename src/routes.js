import Home from './components/HomeComponent.vue';
import Signup from './components/SignUp.vue';
import Login from './components/LoginComponent.vue';
import AddResturant from './components/AddResturant.vue';
import UpdateResturant from './components/UpdateResturant.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Signup',
        component: Signup,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add Resturant',
        component: AddResturant,
        path: '/add-resturant'
    },
    {
        name: 'Update Resturant',
        component: UpdateResturant,
        path: '/update-resturant/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router