# Todo List (Vue.js)

A simple to-do list application built with Vue.js to manage tasks with dynamic UI updates and reactive state.

## Features

- Display a list of to-do items
- Mark tasks as completed
- Add new to-do items (optional feature)
- Remove existing to-do items (optional feature)
- Reactive UI updates using Vue bindings

## Tech Stack

- Vue.js (via Import Maps)
- JavaScript (ES Modules)
- HTML5 & CSS3
- Bootstrap (optional styling)

## How It Works

- A Vue app is mounted to a DOM element (`#todosContainer`)
- To-do items are stored in the component’s `data`
- The list is rendered dynamically using Vue’s `v-for`
- User interactions trigger methods (e.g., add/remove todos)
- Vue automatically updates the DOM when the state changes

## Setup

```bash
git clone https://github.com/sp1aca9fa/todoListInVue.git
cd todoListInVue
serve
```

Open in your browser:
http://localhost:8000

## Learnings

- Understanding Vue’s reactive data model
- Using directives like v-for, v-model, and v-on
- Handling events and user input in Vue
- Structuring simple frontend apps with a framework

## Notes

This project is a solution to a Le Wagon bootcamp challenge focused on introducing Vue.js fundamentals and reactive UI development.
