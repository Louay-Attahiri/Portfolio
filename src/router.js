import { createRouter, createWebHistory } from 'vue-router'
import home from './pages/Home.vue'
import about from './pages/About.vue' 
import projects from './pages/Project.vue' 
import contact from './pages/Contact.vue' 

const routes = [
{path: '/', component: home},
{path: '/over', component: about},
{path: '/projecten', component: projects},
{path: '/contact', component: contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;