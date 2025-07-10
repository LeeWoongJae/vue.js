<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link>
  </nav>
  <router-view />
  <div class="appUse" v-if="appUse">
    <div>
      <h3>App.js(부모 컴포넌트 - provider)</h3>
      <p>
        제공자이름 : <strong>{{ username }}</strong>
      </p>
      <MiddleComponent></MiddleComponent>
    </div>

    <div>
      <h1>장바구니 예제 (provide/inject)</h1>
      <ProductList />
      <Cart />
    </div>
  </div>
  <!-- 실제 페이지 들이 그려져 나타나는 태그-->
</template>
<script>
import MiddleComponent from "./views/MiddleComponentView.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "",
      appUse: false,
      username: "홍길동",
      cart: [],
    };
  },
  provide() {
    return {
      providerUsername: this.username,
      updateUsername: this.changeUserName,
      cart: this.cart,
      addToCart: this.addToCart,
    };
  },
  components: {
    MiddleComponent,
    ProductList,
    Cart,
  },
  methods: {
    changeUserName(name) {
      this.username = name;
    },
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
