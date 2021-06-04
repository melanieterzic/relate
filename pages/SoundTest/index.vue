<template>
  <main>
    <div class="storyJ">
      <div class="box a">a</div>
      <div class="box b">b
        <div v-for="subtitles in fr" :key="subtitles.son">
          <p>{{ subtitles.one }}</p>
        </div>
      </div>
      <div class="box c">c</div>
    </div>
  </main>
</template>

<script>
import subtitles from '~/assets/datas/Jane-sub.json';

export default {
		data() {
			return {
				fr: subtitles.fr,
        audio: null,
        //subtitles: en.subtitles
			};
		},
    mounted() {
    this.$store.commit("initializeSound");
    this.temoignage = new Audio(require("~/assets/sounds/1.wav"));
    this.$gsap.to(".b", {
      scrollTrigger: {
        trigger: ".b",
        start: "20px 80%",
        end: "bottom 100px",
        toggleActions: "restart pause reverse pause",
        onEnter: () => {
          this.temoignage.play();
        },
        
      },
      x: 100,
    });
  },
    computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    },
}
}
</script>

<style lang="scss">
.storyJ {
  height: 3000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.box {
  width: 50px;
  height: 50px;
  text-align: center;
}

.a {
  background: red;
}

.b {
  background: blue;
}

.c {
  background: green;
}
</style>
