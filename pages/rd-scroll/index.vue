<template>
  <div>
    <div class="chapter">
      <o-scroller class="image image-1">
        <img src="~/assets/images/janitta/1.png" alt=""/>
      </o-scroller>
      <o-scroller class="image image-2">
        <img src="~/assets/images/janitta/2.png" alt=""/>
      </o-scroller>
      <o-scroller class="image image-3">
        <img src="~/assets/images/janitta/3.png" alt=""/>
      </o-scroller>
      <o-scroller class="image image-4">
        <img src="~/assets/images/janitta/4.png" alt=""/>
      </o-scroller>
      <o-scroller class="image image-5">
        <img src="~/assets/images/janitta/5.png" alt=""/>
      </o-scroller>
      <o-scroller class="sound sound-1">
        <o-sound :options="{ sound: { name: '1' } }"></o-sound>
      </o-scroller>
      <o-scroller class="sound sound-2">
        <o-sound :options="{ sound: { name: '2' } }"></o-sound>
      </o-scroller>
      <o-scroller class="sound sound-3">
        <o-sound :options="{ sound: { name: '3' } }"></o-sound>
      </o-scroller>
      <o-scroller class="sound sound-4">
        <o-sound :options="{ sound: { name: '4' } }"></o-sound>
      </o-scroller>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('click', ()=>{
      this.$store.commit('setLoading', !this.$store.state.loading);
    })
    // this.$gsap.to(window, {duration: 20, scrollTo:"#end"});
  }
}
</script>


<style lang="css">

footer{
  padding: 12.5vw 6.25vw;
}

footer p {
  font-size: 5vw;
  color: #000000;
}

.image {
  position: absolute;
}
.image-1 {
  top: 1110.8px;
  left: 0;
  width: 360px;
  height: 578px;
}
.image-2 {
  top: 1347.75px;
  left: -45px;
  width: 325.87px;
  height: 524.92px;
}
.image-3 {
  top: 1722.14px;
  left: 0px;
  width: 300px;
  height: 570px;
}
.image-4 {
  top: 2312px;
  left: 0px;
  width: 300px;
  height: 625px;
}
.image-5 {
  top: 2859px;
  left: 0px;
  width: 300px;
  height: 585.28px;
}

.sound {
  position: absolute;
  border: solid blue 1px;
  z-index: 1;
}
.sound-1 {
  top: 1190px;
  left: 0;
  width: 300px;
  height: 299px;
}
.sound-2 {
  top: 1976px;
  left: 0px;
  width: 300px;
  height: 299px;
}
.sound-3 {
  top: 2487px;
  left: 0px;
  width: 300px;
  height: 299px;
}
.sound-4 {
  top: 2868px;
  left: 0px;
  width: 300px;
  height: 299px;
}

.chapter {
  height: calc(585.28px + 2859px);
}
</style>
