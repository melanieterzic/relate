<template>
  <t-home :api="api" />
</template>

<script>
export default {
  async asyncData({ app, $api }) {
    return await $api.get(app.context.route.name);
  },
};
</script>

<style lang="scss"></style>
