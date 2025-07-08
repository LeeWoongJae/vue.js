import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app"); // id가 #app인index.html 태그에 "./App.vue"를 참고한 App 인스턴스 생성
