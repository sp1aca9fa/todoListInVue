import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: null,
    };
  },
  methods: {
    addTodo() {
      // console.log(this.newTodo);
      if (this.newTodo === "" || this.newTodo === null) return;

      this.todos.push({ title: this.newTodo, done: false });
      // console.log(this.todos);

      this.newTodo = "";
    },

    deleteTodo(title) {
      this.todos = this.todos.filter(todo => todo.title !== title);
    }
  }
}).mount('#todosContainer');
