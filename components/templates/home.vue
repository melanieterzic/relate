<template>
    <main :class="$options._componentTag" class="component template">
        <div class="container c-home">
        </div>
    </main>
</template>

<script>
export default {
    props: {
        api: { required: true }
    }
}
</script>

<style lang="scss">
.t-home {}
</style>