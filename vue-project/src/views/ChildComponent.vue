<template>
  <h3>자식컴포넌트ChildComponent</h3>
  <p><input type="text" v-model="msg" /></p>
  <button @click="sendMsg">메세지보내기</button>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMsg() {
      this.$emit("send-message", this.msg);
      //this.$parent.sendMsg("Test");

      //this.$parent.msg = this.msg;
      //this.$root.msg = this.msg;
    },
  },
  mounted() {
    console.log(this.$parent);
  },
};
</script>
<style></style>
