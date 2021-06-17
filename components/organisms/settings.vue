<template>
  <div class="settings">
    <h3>STORY</h3>
    <h4>Balancing two cultures</h4>
    <h3>EPISODES</h3>
    <img src="~/assets/images/ligne.svg" />
    <h1>How do you want <br />to live the story?</h1>
    <div class="settings-switches">
      <div class="settings-langages">
        <h4>Language</h4>
        <p class="sub-lang">Written content & subtitles</p>
      </div>
      <a-datalist />
      <p>Voices</p>
      <a-switchButton :m="toto" :isActive="this.$store.state.isSoundEnabled" />
      <p>Sound</p>
      <a-switchButton :isActive="false" />
      <p>Subtitles</p>
      <a-switchButton :isActive="false" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toto() {
      console.log("test");
      this.$store.commit("toggleSound");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bayon&family=Source+Sans+Pro:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap");
.settings {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #0f0e21;
  font-family: "Source Sans Pro";
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-content: space-around;
  color: #faf2ed;
  z-index: 5;
  padding: 0;
  margin: 0;
  h1 {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    line-height: 25px;
    margin-top: 15%;
    width: 100%;
    padding: 0px 80px;
  }

  h1:before {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #faf2ed;
    width: 25%;
    left: 0;
    margin-top: 25px;
  }

  h1:after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #faf2ed;
    width: 25%;
    right: 0;
  }

  h3 {
    padding: 25px 35px 0px;
    font-size: 14px;
    font-weight: 400;
  }

  h4 {
    padding: 5px 35px 20px;
    font-size: 16px;
    font-weight: 700;
  }

  svg {
    margin-top: 22%;
    position: relative;
    width: 100%;
  }

  img {
    padding: 15px 35px;
  }

  .img-titre {
    margin-top: 10%;
  }
}
.settings-langages {
  h4 {
    padding: 0px;
    font-weight: 600;
    font-size: 18px;
  }

  .sub-lang {
    margin-top: 8px;
    padding: 0px;
    font-size: 14px;
    width: 64%;
    font-weight: 400;
    line-height: 16px;
  }
}

.settings-switches {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 30px;
  width: 100%;
  margin-top: 20%;
  justify-items: center;
  justify-content: center;
  p {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    justify-self: stretch;
  }
}
</style>
