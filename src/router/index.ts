import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "Home" */ '../page/Home.vue');

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	}
];

export default createRouter({ history: createWebHashHistory(), routes });
