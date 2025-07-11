<template>
  <!-- <h3>HeaderLayout.vue</h3> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Soldout</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="page == 'home' ? 'active' : ''"
              @click="setPage('home')"
              to="/"
              >홈</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="page == 'productList' ? 'active' : ''"
              to="/list"
              @click="setPage('productList')"
              >제품리스트</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="page == 'productDetail' ? 'active' : ''"
              @click="setPage('productDetail')"
              to="/productDetail"
              >제품상세페이지</router-link
            >
          </li>
          <li v-if="user.email != undefined" class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="page == 'SalesList' ? 'active' : ''"
              @click="setPage('salesList')"
              to="/salesList"
              >제품등록페이지</router-link
            >
          </li>
          <!-- 로그인, 로그아웃 -->
          <!-- <li v-if="user.email == undefined">
            <button
              class="btn btn-danger"
              type="button"
              v-on:click="kakaoLogin"
            >
              로그인
            </button>
          </li> -->
          <li v-if="user.email == undefined">
            <button
              class="btn btn-danger"
              type="button"
              v-on:click="login(account)"
            >
              로그인
            </button>
          </li>
          <li v-else>
            <button class="btn btn-danger" type="button" v-on:click="logout">
              로그아웃
            </button>
          </li>
        </ul>
        <form action="" class="d-flex">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="form-control me-2"
          />
          <button type="submit" class="btn btn-outline-success">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
/*
 File : Header.vue
 Content : productlist , insert-menu  , routing info setting
 Created : LeeWoongJae
 Date : Jul 10 2025
 */

export default {
  data() {
    return {
      user: { email: "" },
      page: "",
      account: { email: "leewoongjae@yedam.ac", nickname: "wu_zze" },
    };
  },
  methods: {
    setPage() {},

    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile_nickname;
          const email = kakao_account.account_email;
          console.log(nickname, email);
          //this.login(kakao_account);
          alert("로그인 성공");
          this.user = { email: email };
        },
        fail: (err) => {
          console.log(err);
          alert("인증 실패");
        },
      });
    },
    async login(account) {
      await this.$api("/api/signUp", {
        param: [account],
      });
    },
    logout() {
      alert("로그아웃");
      this.user = {};
      this.$router.push({ path: "/list" });
    },
  },
};
</script>
<style></style>
