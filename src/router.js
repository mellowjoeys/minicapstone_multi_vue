import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import SecondTest from './views/SecondTest.vue'
import ProductsIndex from './views/ProductsIndex.vue'
import ProductsNew from './views/ProductsNew.vue'
import ProductsShow from './views/ProductsShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: ProductsIndex },
    { path: '/test', name: 'test', component: Test },
    { path: '/secondTest', name: 'secondTest', component: SecondTest },
    {path: '/products', name: 'products-index', component: ProductsIndex},
    {path: '/products/new', name: 'products-new', component: ProductsNew},
    {path: '/products/:id', name: 'products-show', component: ProductsShow}
  ]
})
