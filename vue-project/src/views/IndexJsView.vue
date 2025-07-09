<template>
  <h3>상위 컴포넌트 = > 하위 컴포넌트(PageTitle)</h3>
  <PageTitle
    :title="titleMsg"
    :likes="likeCnt"
    :isOk="okVal"
    :members="memberList"
  >
    <template v-slot><p>v-slot의 내용입니다</p></template>
    <template #header><p>v-slot의 header 내용입니다</p></template>
    <template #footer><p>v-slot의 footer 내용입니다</p></template>
  </PageTitle>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      titleMsg: "동적인 제목 전달하기.", // -- :title부분이 없어질경우 하위 컴포넌트읜 PageTitle에서 정의해놓은 default titlemsg를 사용
      likeCnt: 3,
      okVal: true,
      memberList: [
        { name: "아버지", age: 63 },
        { name: "어머니", age: 59 },
        { name: "장남", age: 33 },
        { name: "막내", age: 30 },
      ],
    };
  },
};
</script>
<style></style>
