<template>
  <Header />
  <router-view />
  <Footer />
</template>
<!-- index.html 혹은 public/index.html에 추가 -->
<script>
/*
 File : App.vue
 Content : Root component/ Header , Footer , layout 적용
 Created : LeeWoongJae
 Date : Jul 10 2025
 */
import Header from "./layouts/HeaderLayout.vue";
import Footer from "./layouts/FooterLayout.vue";
export default {
  components: {
    Header,
    Footer,
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
