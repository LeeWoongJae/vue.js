import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App).use(router).mixin(mixins).mount("#app");

window.Kakao.init("37b548a64b68b2b42e499b393948f069");
