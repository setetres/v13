<template>
  <div
    class="
      flex flex-col
      absolute
      font-mono
      uppercase
      font-bold
      text-white text-8xl
      top-2/4
      left-2/4
      transform
      -translate-x-2/4 -translate-y-2/4
      z-10
    "
  >
    Error
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    setTimeout(function () {
      next()
    }, 500)
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: 'Sete Três — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
