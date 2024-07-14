<template>
  <main class="imageSon">
    <o-scroller class="scroller1" :options="{
        scroll: {
          end: 'bottom 85%'
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
          end: 'bottom 85%'
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

<style lang="css">
.imageSon {
  height: 300vh;
}

.imageSon .scroller1 {
  position: absolute;
  top: 100vh;
  left: 0;
}

.imageSon .scroller1 .container {
  background: blue;
}

.imageSon .scroller2 {
  position: absolute;
  top: 200vh;
  left: 0;
}

.imageSon .scroller2 .container {
  background: orange;
}

.imageSon .container {
  display: block;
  width: 100vw;
  height: 70vh;
}
</style>
