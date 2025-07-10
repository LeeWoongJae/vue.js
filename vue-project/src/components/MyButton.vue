<template>
  <!-- <h3>Mybutton.vue</h3> -->
  <button @click="handleClick">{{ label }}</button>
</template>
<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      this.$emit("my-event", this.label + "을 전달");
    },
  },
};
</script>
<style>
button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: auto;
}
</style>
