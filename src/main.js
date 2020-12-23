import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "@/components/Home";
import HappyNewYear from "@/components/HappyNewYear";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
    path: '/',
    component: Home
      },
    {
      path: '/happy-new-year',
      component: HappyNewYear
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
