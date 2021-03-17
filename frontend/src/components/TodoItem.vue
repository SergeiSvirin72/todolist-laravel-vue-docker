<template>
  <div>
    <input type="checkbox" @change="updateItem" v-model="done">
    <span :class="{ strike: done }">{{ todo.text }}</span>
    <a href="#" @click.prevent="deleteItem">[x]</a>
  </div>
</template>

<script>
import api from '@/api'

export default {
  props: { todo: Object },
  data() {
    return {
      done: this.todo.done
    }
  },
  methods: {
    deleteItem() {
      api.destroy(this.todo.id)
        .then(result => { this.$emit('delete') })
    },
    updateItem() {
      api.update(this.todo.id, { done: this.done })
        .then(result => { this.$emit('update') })
    }
  },
  emits: ['delete', 'update']
}
</script>

<style scoped>
  .strike {
    text-decoration: line-through;
  }
</style>