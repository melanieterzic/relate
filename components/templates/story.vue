<template>
    <o-recursive :datas="story" />
</template>

<script>
export default {
    props: {
        story: { required: true }
    },
    mounted() {
        console.log(this.$createElement)
    }
}
</script>

<style lang="scss">
.t-story {}
</style>