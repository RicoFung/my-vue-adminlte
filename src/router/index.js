/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/login',
		component: () => import('@/views/Login.vue')
	},
	{
		path: '/',
		component: () => import('@/views/Main.vue'),
		children: [
			{
				path: '/home',
				component: () => import('@/views/Home.vue')
			},
			{
				path: '/about',
				component: () => import('@/views/About.vue')
			},
			{
				path: '/test/testa',
				component: () => import('@/views/test/TestA.vue')
			},
			{
				path: '/test/testb',
				component: () => import('@/views/test/TestB.vue')
			}
		]
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
