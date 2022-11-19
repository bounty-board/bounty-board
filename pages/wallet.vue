<template>
  <div>
    <input class="text-black" v-model="username" label="Username" />
    <button @click="addToBlockchain">Add to Blockchain</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'bryt12',
    };
  },
  methods: {
    addToBlockchain() {
      this.$addUser(this.username);
    },
  },
};
</script>
