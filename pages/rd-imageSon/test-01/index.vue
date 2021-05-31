<template>
  <main class="imageSon">
    <o-scroller class="scroller1">
      <o-sound :options="{
        sound: {
          name: '1'
        }
      }">
        <img src="~/assets/images/1.png" alt="Image">
      </o-sound>
    </o-scroller>
    <o-scroller class="scroller2">
      <o-sound :options="{
        sound: {
          name: '2'
        }
      }">
        <img src="~/assets/images/2.png" alt="Image">
      </o-sound>
    </o-scroller>
  </main>
</template>

<script>
export default {
  mounted() {
  }
};
</script>

<style lang="scss">
.imageSon {
  height: 300vh;
  .scroller1 {
    position: absolute;
    top: 100%; left: 0;
  }
  .scroller2 {
    position: absolute;
    top: 120%; left: 0;
  }
  img {
    display: block;
    width: 20vw;
    height: auto;
  }
}
</style>
