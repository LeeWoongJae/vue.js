import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImageInsert from "../views/ImageInsert.vue";
import ProductList from "../views/ProductList.vue";
import SalesList from "../views/SalesList.vue";
import ProductCreate from "../views/ProductCreate.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductUpdate from "../views/ProductUpdate.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/image_insert",
    name: "imageInsert",
    component: ImageInsert,
  },
  {
    path: "/list",
    name: "productList",
    component: ProductList,
  },
  {
    path: "/create",
    name: "productCreate",
    component: ProductCreate,
  },
  {
    path: "/detail",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/update",
    name: "productUpdate",
    component: ProductUpdate,
  },
  {
    path: "/salesList",
    name: "salesList",
    component: SalesList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
