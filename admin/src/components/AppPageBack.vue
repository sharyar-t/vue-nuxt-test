<template>
  <AppButton color="primary" plain @click="handleClick">
    <AppIcon left>mdi-arrow-u-right-top</AppIcon>
    <span>Back</span>
  </AppButton>
</template>

<script>
export default {
  props: ['to'],
  methods: {
    handleClick() {
      if (this.to !== undefined) {
        this.$router.push(this.to)
      } else {
        this.$router.back()
      }
    }
  }
}
</script>
