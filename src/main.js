import Vue from 'vue'
import App from './App.vue'

import {MessageBox,Message} from 'element-ui';

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this  //安装全局事件总线,$bus就是当前的vm
  }
}).$mount('#app')
