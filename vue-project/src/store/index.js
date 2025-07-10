//src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue학습", chk: false },
      { id: 2, name: "TV시청", chk: false },
      { id: 3, name: "밥먹기", chk: false },
      { id: 4, name: "독서하기", chk: false },
    ],
    title: "안녕,세상아",
  },
  getters: {
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    // 기능 구현
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id;
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
