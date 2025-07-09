<template>
  <h3>부모컴포넌트(ParentComponent)</h3>
  <p class="parent-component">{{ msg }}</p>
  <child-component v-on:send-message="sendMsg" ref="child-comp" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  data() {
    return {
      msg: "홍길동",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    sendMsg(data) {
      console.log("전달받은 데이터 : " + data);
    },
  },
};
</script>
<style></style>
