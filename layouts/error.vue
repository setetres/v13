<template>
  <div class="application">
    <h2 v-if="error.statusCode === 404">Not found</h2>
    <h2 v-else>An error occurred</h2>
    <small>
      <nuxt-link to="/" class="link"> Go back </nuxt-link>
    </small>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
