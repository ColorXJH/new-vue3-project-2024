import './assets/main.css'
//声明导出
import { createApp } from 'vue'
//默认导出
import Apps from './App.vue'
//挂在dom元素
//createApp(Apps).mount('span')
//挂载css选择器字符串
createApp(Apps).mount('#app')



/*import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
// 创建 Vue 应用
createApp({
  data() {
    return {
      count: '0'
    };
  }
}).mount('#app');*/

