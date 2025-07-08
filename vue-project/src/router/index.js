import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DataBinding from "../views/DataBindingAttr.vue";
// import DataBinding from "../views/EventClick.vue";
import DataBinding from "../views/ShowVue.vue";
const routes = [
  {
    // 고객이 요청하는 것이 많은 페이지면 이곳에 정의
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // 고객이 여러페이지를 하나하나 돌아다니면서 데이터 처리하면 이곳에 정의
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
