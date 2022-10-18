<template>
  <div>
    <span>Current Bounty: {{ bounty }} - {{ address }}</span>
    <button @click="addBounty">Add Bounty</button>
    <p>{{ coinbase }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Web3 from 'web3';

import issueAbi from '~/assets/abi/Issue.json';

export default {
  data() {
    return {
      bounty: {},
      address: '',

      web3: null,
      coinbase: null,
    };
  },
  async mounted() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.send('eth_requestAccounts');
      this.web3 = new Web3(window.ethereum);

      // const networkId = await this.web3.eth.net.getId();
      this.coinbase = await this.web3.eth.getCoinbase();
      // const balance = await this.web3.eth.getBalance(coinbase);
      // this.address = this.web3.eth.accounts[0];
    }
  },
  methods: {
    async addBounty() {
      try {
        const issue = new this.web3.eth.Contract(issueAbi.abi, this.address);
        issue.methods.addBounty(100).send({ from: this.coinbase, value: 100 });
      } catch (e) {
        console.log(e);
      }

      // const { id } = this.$route.params;
      // console.log(this.web3.coinbase);
      // const { data } = await this.$http.$post(`/api/web3/issue/bounty/${id}`, {
      //   bounty: 100,
      //   coinbase: this.web3.coinbase,
      // });
      // console.log(data);
    },
  },
  async fetch() {
    const { id } = this.$route.params;

    const data = await this.$http.$get(`/api/web3/issue/bounty/${id}`);
    this.bounty = data.bounty;
    this.address = data.address;
  },
};
</script>
