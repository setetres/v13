<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  head() {
    return {
      title: 'Sete Três — v13',
    }
  },
  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
