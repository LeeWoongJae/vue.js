<template>
  <h3>v-if 와 v-show의 차이점 알기</h3>
  <p v-if="isIfToggle">v-if를 사용하여 나타내기</p>
  <button @click="toggleIf">v-if 토글</button>
  <p v-show="isShow">v-show를 사용하여 나타내기&nbsp;{{ isShow }}</p>
  <button @click="toggleShow">v-show 토글</button>
  <!-- v-if는 초기에 영역을 차지하지 않지만 true값이 되면 그때 생성 -->
  <!-- v-show는 영역이 차지하면서 보이거나 보이지 않거나 하는 강제 자리 차지-->
</template>

<script>
export default {
  data() {
    return {
      isIfToggle: true,
      isShow: true,
    };
  },
  methods: {
    toggleIf() {
      if (this.isIfToggle) {
        this.isIfToggle = false;
      } else {
        this.isIfToggle = true;
      }
    },
    toggleShow() {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
};
</script>
<style></style>
