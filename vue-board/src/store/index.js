import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    selectedPost: null,
  },
  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    SET_SELECTED_POST(state, post) {
      state.selectedPost = post;
    },
    UPDATE_POST(state, updatedPost) {
      const index = state.posts.findIndex((p) => p.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
      }
    },
    DELETE_POST(state, postId) {
      state.posts = state.posts.filter((p) => p.id !== postId);
      if (state.selectedPost && state.selectedPost.id === postId) {
        state.selectedPost = null;
      }
    },
  },
  getters: {
    allPosts: (state) => state.posts,
    postDetail: (state) => state.selectedPost,
  },
});
