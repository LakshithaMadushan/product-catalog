import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('toDollor', (value) => {
	return '$' + value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
