<template>
  <h3>Watch View</h3>
  <textarea v-bind:disabled="charfull" v-model="messageContent"></textarea>
  <p>current : {{ charCount }} 자 / 최대 50자</p>
  <p>{{ fbMsg }}</p>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charfull: false,
      fbMsg: "메세지를 입력하세요.",
    };
  },
  watch: {
    messageContent(newVal, oldVal) {
      console.log(newVal + ", " + oldVal);
      this.charCount = newVal.length;
      if (this.charCount == 50) {
        this.charfull = true;
        this.fbMsg = "50자를 채웠습니다.";
      }
    },
  },
};
</script>
<style>
textarea {
  width: 500px;
  height: 100px;
}
</style>
