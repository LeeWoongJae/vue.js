<template>
  <div class="form">
    <h2>글 {{ editTarget ? "수정" : "등록" }}</h2>
    <input v-model="writer" v-bind:disabled="editTarget" placeholder="작성자" />
    <input v-model="title" placeholder="제목" />
    <textarea v-model="content" placeholder="내용"></textarea>
    <div class="actions">
      <button @click="submit">
        {{ editTarget ? "수정하기" : "등록하기" }}
      </button>
      <button v-if="editTarget" @click="cancelEdit">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editTarget: Object,
  },
  data() {
    return {
      writer: "",
      title: "",
      content: "",
    };
  },
  inject: ["refresh"],
  watch: {
    editTarget: {
      immediate: true,
      handler(post) {
        if (post) {
          this.writer = post.writer;
          this.title = post.title;
          this.content = post.content;
        } else {
          this.writer = "";
          this.title = "";
          this.content = "";
        }
      },
    },
  },
  methods: {
    submit() {
      const post = {
        id: this.editTarget ? this.editTarget.id : Date.now(),
        writer: this.writer,
        title: this.title,
        content: this.content,
      };
      if (this.editTarget) {
        this.$emit("update-post", post);
      } else {
        this.$emit("add-post", post);
      }
      this.writer = "";
      this.title = "";
      this.content = "";
    },
    cancelEdit() {
      this.$emit("cancel-edit");
    },
  },
};
</script>

<style scoped>
.form {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
input,
textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.actions {
  display: flex;
  gap: 10px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #369870;
}
</style>
