import Vue from 'vue'
import Router from 'vue-router'
import Form_01 from './component/form_01.vue'
import Form_02 from './component/form_02.vue'
import Form_03 from './component/form_03.vue'
import Form_end from './component/form_end.vue'


Vue.use(Router)

const routes = [
  { path: '/form_01', component: Form_01 },
  { path: '/form_02', component: Form_02 },
  { path: '/form_03', component: Form_03 },
  { path: '/form_end', component: Form_end }
]

export default new Router ({
  mode: 'history',
  routes
})
