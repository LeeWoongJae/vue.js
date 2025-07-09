<template>
  <h3>자식 컴포넌트</h3>
  <button type="button" @click="childFnc" ref="btn">Click</button>
</template>
<script>
export default {
  methods: {
    childFnc() {
      console.log("부모컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>
