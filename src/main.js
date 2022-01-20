import Vue from 'vue';
import router from '@/router';

import VueLoading from 'vue-loading-overlay';
import App from './App.vue';

import 'vue-loading-overlay/dist/vue-loading.css';
import '@/assets/styles/global.css';

const infiniteScroll = require('vue-infinite-scroll');

require('dotenv').config();

Vue.config.productionTip = false;
Vue.use(VueLoading, {
  isFullPage: true,
  container: false,
  loader: 'bars',
  color: '#0c87ca',
  height: 100,
  width: 100,
});
Vue.use(infiniteScroll);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
