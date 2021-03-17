<template>
  <div>
    <div>
      <label for="add">Add new item: </label>
      <input v-model="text" id="add">
      <button @click="addItem">Add</button>
    </div>
    <div v-if="error" class="error">
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      text: '',
      error: '',
    }
  },
  methods: {
    addItem() {
      api.store({ text: this.text, done: false })
        .then(result => { this.$emit('add') })
        .catch(error => { this.error = error.response.data.errors.text[0]})
    },
  },
  emits: ['add']
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>