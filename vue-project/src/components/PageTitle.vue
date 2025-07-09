<template>
  <slot name="header"></slot>
  <h3>하위컴포넌트(PageTitle)</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p :class="{ 'blue-font': isOk }">환영합니다</p>
  <ul>
    <li :key="i" v-for="(member, i) in members">
      이름 : {{ member.name }} , 나이 : {{ member.age }}
    </li>
  </ul>
  <slot></slot>
  <slot name="footer"></slot>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: true },
    members: {
      type: Array,
      default: () => {
        return [{ name: "삼촌", age: 56 }];
      },
    },
  },
};
</script>
<style scoped>
.blue-font {
  color: blue;
}
</style>
