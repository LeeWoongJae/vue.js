<template>
  <div class="app">
    <h1>📝 게시판 프로젝트</h1>
    <div class="layout">
      <PostForm
        @add-post="addPost"
        @update-post="updatePost"
        :edit-target="selectedPost"
        @cancel-edit="cancelEdit"
      />
      <PostList @select-post="selectPost" ref="postList" />
      <PostDetail
        v-if="selectedPost"
        @delete-post="deletePost"
        @edit-post="editPost"
      />
    </div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import PostDetail from "./components/PostDetail.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    PostDetail,
  },
  computed: {
    ...mapState(["selectedPost"]),
  },
  provide() {
    return {
      refresh: this.refresh,
    };
  },
  methods: {
    addPost(post) {
      this.$store.commit("ADD_POST", post);
    },
    updatePost(post) {
      this.$store.commit("UPDATE_POST", post);
      this.refresh();
    },
    deletePost(postId) {
      this.$store.commit("DELETE_POST", postId);
      this.refresh();
    },
    selectPost(post) {
      this.$store.commit("SET_SELECTED_POST", post);
    },
    editPost(post) {
      this.selectPost(post);
    },
    cancelEdit() {
      this.refresh();
    },
    refresh() {
      console.log("부모가 제공하는 메서드 호출됨");
      this.$store.commit("SET_SELECTED_POST", null);
    },
  },
};
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  font-family: "Segoe UI", sans-serif;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
