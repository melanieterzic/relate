<template>
  <main>
    <!-- <div v-for="subtitles in fr" :key="subtitles.son"></div> -->
  </main>
</template>

<script>
import subtitles from "~/assets/datas/Jane-sub.json";

export default {
  data() {
    return {
      fr: subtitles.fr,
      audio: null,
      //subtitles: en.subtitles
    };
  },
  mounted() {
    const indexSon = 0;
    const currentTime = 1;
    const sousTitre = subtitles.fr[indexSon];
    for (let i = 0; i < sousTitre.length; i++) {
      let phrase = sousTitre[i];
      if (phrase.start <= currentTime && phrase.end > currentTime) {
        console.log(phrase.text);
      }
    }
  },
};
</script>

<style lang="css"></style>
