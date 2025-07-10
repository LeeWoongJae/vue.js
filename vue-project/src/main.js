import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
createApp(App).use(router).use(store).mount("#app"); // id가 #app인index.html 태그에 "./App.vue"를 참고한 App 인스턴스 생성
