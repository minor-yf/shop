import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vue-awesome 图标库
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon)

//iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// mock 模拟数据
require('./mock.js')

// 插件省，市，区
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
