<template>
  <main class="imageSon">
    <o-scroller class="scroller1" :options="{
        scroll: {
          onEnterBack: true,
          end: 'bottom 15%'
        }
      }">
      <o-sound :options="{
        sound: {
          name: '1'
        }
      }">
        <div class="container"></div>
      </o-sound>
    </o-scroller>
    <o-scroller class="scroller2" :options="{
        scroll: {
          onEnterBack: true,
          end: 'bottom 15%'
        }
      }">
      <o-sound :options="{
        sound: {
          name: '2'
        }
      }">
        <div class="container"></div>
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
    top: 100vh; left: 0;
    .container {
      background: blue;
    }
  }
  .scroller2 {
    position: absolute;
    top: 250vh; left: 0;
    .container {
      background: orange;
    }
  }
  .container {
    display: block;
    width: 100vw;
    height: 70vh;
  }
}
</style>
