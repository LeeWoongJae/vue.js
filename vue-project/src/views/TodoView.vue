<template>
  <h3>TodoList</h3>
  <div id="myDIV" class="header">
    <h2 style="margin: 5px">My To Do List</h2>
    <input type="text" id="myInput" v-model="newTodo" placeholder="Title..." />
    <span @click="newElement" class="addBtn">Add</span>
  </div>

  <ul id="myUL">
    <li
      :key="todo.id"
      v-for="todo in todoList"
      @click="toggleElement(todo.id)"
      :class="{ checked: todo.chk }"
    >
      {{ todo.name }}
      <span class="close" @click.stop="deleteTodo(todo.id)">X</span>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todoList: [
        // { id: 1, name: "숨쉬기", chk: false },
        // { id: 2, name: "물마시기", chk: false },
        // { id: 3, name: "잠자기", chk: false },
        // { id: 4, name: "밥먹기", chk: false },
        // { id: 5, name: "게임하기", chk: false },
        // { id: 6, name: "OTT시청", chk: false },
      ],
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/todoList",
    }).then((result) => {
      console.log(result.data);
      this.todoList = result.data;
    });
  },
  methods: {
    newElement() {
      if (document.querySelector("#myInput").value == "") {
        alert("할 일을 입력해주세요");
      } else {
        let cnt = this.todoList[this.todoList.length - 1].id;
        this.todoList.push({ id: cnt + 1, name: this.newTodo, chk: false });
      }
    },
    toggleElement(num) {
      for (let item of this.todoList) {
        if (item.id == num) {
          item.chk = !item.chk;
        }
      }
    },
    deleteTodo(num) {
      console.log(this);
      axios({
        method: "delete",
        url: "http://localhost:3000/todo/" + num,
      })
        .then((result) => {
          console.log(result.data);
          if (result.data.errno) {
            alert("처리 실패");
            return;
          } else {
            this.todoList = this.todoList.filter((item) => item.id != num); // == 조건에 맞는 데이터 배열만 남기고 새로 배열을 만들어줌
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
