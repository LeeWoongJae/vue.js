<template>
  <div class="middle-component">
    <h3>MiddleComponentView.vue(중간 컴포넌트)</h3>
    <GrandChildComponent />
  </div>
</template>

<script>
import GrandChildComponent from "./child/GrandChildComponent.vue";
export default {
  components: {
    GrandChildComponent,
  },
};
</script>
<style scoped>
.middle-component {
  border: 1px solid red;
  padding: 3px;
}
</style>
