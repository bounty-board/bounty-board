<template>
  <div>
    <text-field v-model="username" label="Username" />
    <v-btn @click="addToBlockchain">Add to Blockchain</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    addToBlockchain() {
      this.$store.dispatch('addUser', this.username);
    },
  },
};
</script>
