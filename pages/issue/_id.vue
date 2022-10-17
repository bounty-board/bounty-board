<template>
  <div>Current Bounty: {{ bounty }}</div>
</template>
<script>
export default {
  data() {
    return {
      bounty: {},
    };
  },
  async fetch() {
    const { id } = this.$route.params;

    this.bounty = await this.$http.$get(`/api/web3/issue/bounty/${id}`);
  },
};
</script>
