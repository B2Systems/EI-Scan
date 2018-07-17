import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element UI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale, size: 'small'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
