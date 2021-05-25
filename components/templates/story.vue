<template>
    <o-recursive :datas="story" />
</template>

<script>
export default {
    props: {
        story: { required: true }
    }
}
</script>

<style lang="scss">
.t-story {}
</style>