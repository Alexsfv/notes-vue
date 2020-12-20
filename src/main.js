import Vue from 'vue'
import App from './App.vue'
import AIcon from 'ant-design-vue/lib/icon'
import ARadioButton from 'ant-design-vue/lib/radio/RadioButton'
import ARadioGroup from 'ant-design-vue/lib/radio/Group'
import './assets/scss/main.scss'
import 'ant-design-vue/dist/antd.css'

Vue.component(AIcon.name, AIcon)
Vue.component(ARadioButton.name, ARadioButton)
Vue.component(ARadioGroup.name, ARadioGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
