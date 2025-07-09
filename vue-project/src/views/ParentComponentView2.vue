<template>
  <h3>부모 컴포넌트</h3>
  <child-component @send-message="sendMsg" ref="child_comp" />
</template>
<script>
import ChildComponent from "./ChildComponent2.vue";
export default {
  components: {
    ChildComponent,
  },
  mounted() {
    this.$refs.child_comp.$refs.btn.click();
  },
};
</script>
