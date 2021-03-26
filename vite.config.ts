import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		legacy({
			targets: ['defaults', 'ie >= 11']
		})
	],
	server: {
		proxy: {
			'/api': {
				target: 'http://172.17.9.33:5000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	resolve: {
		alias: {
			'/@/': '/src/'
		}
	}
});
