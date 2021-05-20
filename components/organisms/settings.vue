<template>
  <main class="settings">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <h1>How do you want to live the story ?</h1>
    <div class="settings-switches">
      <p>Voices</p>
      <Bouton />
      <p>Sound</p>
      <Bouton />
      <p>Subtitles</p>
      <Bouton />
      <p>Motion</p>
      <Bouton />
    </div>
  </main>
</template>

<script>
import Bouton from "~/components/atoms/switchButton.vue";
export default {
  components: {
    Bouton,
  },
};
</script>

<style lang="scss">
.settings {
  position: absolute;
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  color: #fff0e8;
  background: #292a2e;

  h1 {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    height: 20%;
    padding: 0px 80px;
  }
}

.settings-switches {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 15px;
  width: 100%;
  justify-items: center;

  p {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
