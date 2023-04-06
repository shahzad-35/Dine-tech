import Home from './components/HomeComponent.vue';
import Signup from './components/SignUp.vue';
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router