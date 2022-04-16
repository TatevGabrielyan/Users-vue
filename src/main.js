import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import Login from './components/Login.vue';
import Users from './components/Users.vue';
import User from './components/User.vue';

import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css';
import BootstrapVue from "bootstrap-vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faLock, faEdit, faSearch, faSort)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("en", en);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(BootstrapVue);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueSweetalert2, options)

const routes = [
  {
	name: 'Login',
	path: '/',
	component: Login
  },
  {
    name: 'Users',
    path: '/Users',
    component: Users
    },
    {
      name: 'User',
      path: '/User',
      component: User
      },
];

const router = new VueRouter({mode: 'history', routes});
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
