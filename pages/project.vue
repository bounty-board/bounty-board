<template>
  <div>
    <div v-for="issue in project">
      <nuxt-link :to="`/issue/${issue.id}`">
        <div class="issue">
          <div class="issue__title">
            {{ issue.title }}
          </div>
        </div>
      </nuxt-link>
    </div>
      <!-- {{ issue.title }}
      {{ issue.id }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      project: {},
      bounty: 0,
    };
  },
  async fetch() {
    const { data } = await this.$http.$get(
      '/api/issues?repo=bounty-board&owner=bounty-board'
    );

    this.project = data;

    // const { data2 } = await this.$http.$get(`/api/web3/issue/bounty}`);
  },
};
</script>
