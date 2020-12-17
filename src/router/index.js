import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const PageA = {
  template: '<div>Page A</div>'
}

const PageB = {
  template: '<div>Page B</div>'
}

const routes = [
  { path: '/a', component: PageA},
  { path: '/b', component: PageB},
]

const router = new VueRouter({
  routes
})
export default router;
