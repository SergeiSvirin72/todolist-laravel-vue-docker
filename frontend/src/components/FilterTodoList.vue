<template>
  <div>
    <label for="filter">Filter items: </label>
    <input v-model="filter" id="filter">
  </div>
</template>

<script>
export default {
  props: ['filterProp'],
  data() {
    return {
      filter: this.filterProp
    }
  },
  watch: {
    filter(newFilter) {
      this.$emit('update:filterProp', newFilter)
    }
  }
}
</script>