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
      console.log("test");
      this.$store.commit("toggleSound");
    }
  }
}
</script>

<style lang="scss">

.settings {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  margin-top:-30px;
  margin-left:-30px;
  background:white;
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  color: #292A2E;  
  z-index:1;
  
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
