<template>
  <li>
    {{ text }}
    <button @click="itemDelete">삭제</button>
  </li>
</template>

<script>
export default {
  props: {
    index: Number,
    text: String
  },
  name: "ListItem",
  methods: {
    itemDelete() {
      this.$emit("delete", this.index);
    }
  }
};
</script>

<style scoped>

</style>