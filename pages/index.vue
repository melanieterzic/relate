<template>
  <main>
  <nuxt-link to="/rd-integrationprototype">
  <span>PLAY</span>
  </nuxt-link>
  <t-home :api="api" />
  </main>
</template>

<script>
export default {
  async asyncData({ app, $api }) {
    return await $api.get(app.context.route.name);
  },
};
</script>

<style lang="scss">
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
