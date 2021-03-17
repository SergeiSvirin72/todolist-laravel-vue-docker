<template>
  <div>
    <h3>To-Do List</h3>
    <FilterTodoList :filterProp.sync="filter"></FilterTodoList>

    <TodoItem v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @delete="deleteItem"
      @update="updateItem"></TodoItem>

    <AddTodoItem @add="addItem"></AddTodoItem>
  </div>
</template>

<script>
import api from '@/api'
import TodoItem from '@/components/TodoItem.vue'
import AddTodoItem from '@/components/AddTodoItem.vue'
import FilterTodoList from '@/components/FilterTodoList.vue'

export default {
  components: { TodoItem, AddTodoItem, FilterTodoList },
  data() {
    return {
      todos: [],
      filter: '',
    };
  },
  methods: {
    getItems() {
      api.index()
        .then(result => { this.todos = result.data })
        .catch(error => { console.log(error) })
    },
    addItem() {
      this.getItems()
      this.filter = ''
    },
    deleteItem() {
      this.getItems()
    },
    updateItem() {
      this.getItems()
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(todo => todo.text.toLowerCase().startsWith(this.filter.toLowerCase()))
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>