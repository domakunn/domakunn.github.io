import {createRouter, createWebHistory} from 'vue-router'

// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // routes: [
    //     {
    //         path: '/',
    //         name: 'dressUp',
    //         component: () => import('../views/DressUp.vue')
    //     },
    // ]
})

export default router
