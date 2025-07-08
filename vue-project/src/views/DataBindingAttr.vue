<template>
  <h3>DatabindingAttr.vue</h3>
  <p>attribute 바인딩하기.</p>
  <!-- Event => v-on:(event_name) / Attribute => v-bind:(attr_name) -->
  <img v-bind:src="imgSrc" :width="imgWidth" />
  <p><input type="number" :step="widVal" v-on:click="changeImg" /></p>
  <p>
    <input type="text" name="" v-model="msg" /><button
      :disabled="msg == '' ? true : false"
      v-on:click="alertfnc"
    >
      button
    </button>
  </p>
  <h3 :class="classAry">홍길동</h3>
  <p><button v-on:click="toggleFnc">toggleBtn</button></p>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWidth: "200px",
      widVal: 100,
      btnShow: false,
      msg: "",
      "text-red": "text-red",
      active: "active",

      classAry: ["text-red", "active"],
    };
  },
  methods: {
    alertfnc() {
      alert(this.msg);
    },
    showfnc() {
      console.log(this.msg);
    },
    toggleFnc() {
      console.log(this);
      if (this.classAry.includes("text-red")) {
        this.classAry = ["active"];
      } else {
        this.classAry = ["text-red", "active"];
      }
    },
    changeImg() {
      console.log(this.imgWidth);
      this.imgWidth = parseInt(this.imgWidth + this.widVal);
    },
  },
  mounted() {
    console.log(this); // 이때의 this는 위에 정의된 data영역
    this.msg = "kildong-hong";
    this.imgWidth = "350px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
.active {
  background-color: antiquewhite;
}
</style>
