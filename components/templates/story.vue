<template>
    <div>
        <img class="sound-marker" src="~/assets/images/icon-sound.svg" alt="Icon marker sound">
        <o-recursive :datas="story" />
    </div>
</template>

<script>
export default {
    props: {
        story: { required: true }
    }
}
</script>

<style lang="scss">
.sound-marker {
    position: fixed;
    top: 85%; left: 0;
    transform: translate3d(0, -50%, 0);
    z-index: 99; 
}
.t-story {}
</style>
