<template>
  <div class="detail" v-if="post">
    <h2>글 상세 보기</h2>
    <p><strong>작성자:</strong>{{ post.writer }}</p>
    <p><strong>제목:</strong> {{ post.title }}</p>
    <p><strong>내용:</strong> {{ post.content }}</p>

    <button @click="deletePost">삭제</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["postDetail"]),
    post() {
      return this.postDetail;
    },
  },
  methods: {
    deletePost() {
      if (confirm("정말 삭제하시겠습니까?")) {
        this.$emit("delete-post", this.post.id);
      }
    },
  },
};
</script>

<style scoped>
.detail {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
button:hover {
  background-color: #369870;
}
</style>
