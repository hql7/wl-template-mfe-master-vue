import Vue from "vue";
import router from "../router";
import store from "../store";
import App from "../App.vue";
Vue.config.productionTip = false;

/**
 * @description 实例化vue，并提供子应用 render函数模式的装载能力
 * @description 如果使用qiankun2.0 版本，只需正常实例化vue即可 不需要存在此render函数
 * @param {Object} param0
 * @description {String} appContent 子应用内容
 * @description {Boolean} loading 是否显示加载动画（需手动实现loading效果）
 * @param {Boolean} notCompatible true则不兼容qiankun1.0 【此参数为示例添加，实际应用自酌】
 */
export default function vueRender() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#main-container");
  return;
}
