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
      <a-switchButton  :m="toto" :isActive="this.$store.state.isSoundEnabled"/>
      <p>Music</p>
      <a-switchButton :isActive="false"/>
      <p>Subtitles</p>
      <a-switchButton :isActive="false"/>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    toto(){
      this.$store.commit("toggleSound");
    }
  }
}
</script>

<style lang="scss">
.settings {
  position: absolute;
  font-family: "Source Sans Pro", sans-serif;
  width: 100vw!important;
  height: 100vh!important;
  margin-top:-30px;
  margin-left:-30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  color: #292A2E;
  background:white;
  z-index:99;

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
