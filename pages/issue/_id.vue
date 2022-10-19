<template>
  <div>
    <span>Current Bounty: {{ bounty }} - {{ contractAddress }}</span>
    <button @click="addBounty">Add Bounty</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bounty: null,
      contractAddress: null,

      value: 100,
    };
  },
  methods: {
    async addBounty() {
      try {
        await this.$addBounty(this.contractAddress, this.value);
      } catch (e) {
        console.log(e);
      }
    },
  },
  async fetch() {
    this.$setProjectAddress('0x0a7314dE431F3b2B374741A9cBB20FE97dF3F55B');
    const { id } = this.$route.params;

    this.contractAddress = await this.$getIssueAddress(id);
    this.bounty = await this.$getBounty(this.contractAddress);
  },
};
</script>
