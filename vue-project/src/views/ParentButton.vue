<template>
  <h3>ParentButton.vue</h3>
  <MyButton @my-event="eventClick" label="확인" />
  <MyButton @my-event="eventClick" label="취소" />
  <MyButton />
</template>
<script>
import MyButton from "../components/MyButton.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  components: {
    MyButton,
  },
  methods: {
    eventClick(str) {
      this.msg = str;
      console.log(this.msg);
    },
  },
};
</script>
<style scoped>
h3 {
  color: #333;
}
</style>
