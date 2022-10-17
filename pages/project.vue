<template>
  <div></div>
</template>

<script>
export default {
  name: 'ProjectPage',
  async fetch() {
    const { data } = await this.$http.$get(
      '/api/issues?repo=vuejs/vue&owner=vuejs'
    );
    this.projects = data;
  },
};
</script>
