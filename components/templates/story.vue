<template>
    <o-recursive :datas="story" />
</template>

<script>
export default {
    props: {
        story: { required: true }
<<<<<<< HEAD
=======
    },
    mounted() {
        console.log(this.$createElement)
>>>>>>> origin/rd-integrationPrototype
    }
}
</script>

<style lang="scss">
.t-story {}
</style>