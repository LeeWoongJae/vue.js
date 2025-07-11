<template>
  <div class="list">
    <h2>글 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a href="#" @click.prevent="select(post)">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
  methods: {
    select(post) {
      this.$emit("select-post", post);
    },
  },
};
</script>

<style scoped>
.list {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
a {
  color: #333;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
