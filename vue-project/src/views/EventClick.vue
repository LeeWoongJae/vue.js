<template>
  <h3>Event</h3>
  <p :key="i" v-for="(num, i) in list">
    <button @click="clickFnc(num)">이벤트클릭</button>
  </p>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    clickFnc(num) {
      alert(num + " 클릭 이벤트 실행");
    },
  },
};
</script>
<style scoped></style>
