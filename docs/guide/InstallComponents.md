# 一、插件
新建插件项目first-component => 在components目录里新建目录HelloWorld，在里面新建HelloWorld.js和HelloWorld.vue
=>HelloWorld.js
```
import HelloWorld from './HelloWorld.vue'
const VueHello = {
    install: function(Vue) {
        Vue.component('vue-hello', HelloWorld);
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    VueHello.install(window.Vue)
}
export default VueHello;
```
```
<template>
    <div id="append">这是一个模板插件</div>
</template>
<script>
    export default {
        name: "HelloWorld",
        props: {},
    }
</script>
```
```
import Vue from 'vue'
import App from './App.vue'
import VueHello from './components/HelloWorld/HelloWorld'

Vue.config.productionTip = false;
Vue.use(VueHello);

new Vue({
    render: h => h(App),
}).$mount('#app');
```