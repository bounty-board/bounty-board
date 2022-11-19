<template>
  <div>
    <span>Current Bounty: {{ bounty }} - {{ contractAddress }}</span>
    <button @click="addBounty" v-if="!isNullAddress(contractAddress)">
      Add Bounty
    </button>
    <button @click="createIssue" v-else>Create Issue Smart Contract</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bounty: null,
      contractAddress: null,

      value: 100,
      id: null,
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

    async createIssue() {
      try {
        const contractAddress = await this.$createIssue(this.id);
        this.contractAddress = contractAddress;
      } catch (e) {
        console.log(e);
      }
    },
    isNullAddress(address) {
      return (
        address === '0x0000000000000000000000000000000000000000' ||
        address === null
      );
    },
  },
  mounted() {
    this.$setProjectAddress(process.env.PROJECT_ADDRESS);
  },
  async fetch() {
    console.log(1);
    this.$setProjectAddress(process.env.PROJECT_ADDRESS);
    console.log(2);
    const { id } = this.$route.params;
    console.log(3);
    this.id = id;
    console.log(4);
    this.contractAddress = await this.$getIssueAddress(id);
    console.log(5);
    if (!this.isNullAddress(this.contractAddress)) {
      this.bounty = await this.$getBounty(this.contractAddress);
    }
  },
};
</script>
