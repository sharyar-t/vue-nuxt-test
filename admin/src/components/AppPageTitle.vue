<template>
  <div class="app-title">
    <div>
      <h1 class="text-h4 mb-2">{{ title }}</h1>
      <p class="text-body-2 text--secondary mb-0">{{ subtitle }}</p>
    </div>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style scoped>
.app-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 20px;
  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
