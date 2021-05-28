<template>
    <div :class="$options._componentTag" class="component organism" v-if="showBanner">
        <div class="container c-cookies">
          <button v-on:click="acceptCookies">
            Accepter les cookies
          </button>
          <button v-on:click="refuseCookies">
            Refuser les cookies
          </button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
    }
  }, 
  methods: {
    showBannerCookies() {
      for (const name in this.$store.state.window.cookies) {
        this.$store.commit('getCookie', {name: name});
      }
    },
    acceptCookies() {
      this.$store.commit('setCookie', {name: 'accepted', value: true});
    },
    refuseCookies() {
      this.$store.commit('setCookie', {name: 'accepted', value: false});
    }
  },
  mounted() {
    this.showBannerCookies();
  },
  watch: {
      '$store.state.window.cookies.accepted': function () {
        if (this.$store.state.window.cookies.accepted === undefined) {
          this.$data.showBanner = true;
        } else {
          this.$data.showBanner = false;
        }
        console.log(document.cookie)
      },
      '$store.state.isSoundEnabled': function () {
        this.$store.commit('setCookie', {name: 'voices', value: this.$store.state.isSoundEnabled});
        console.log(document.cookie)
      }
  }
}
</script>

<style lang="scss">
.o-cookies {
  position: fixed;
  left: 0; bottom: 0; 
  width: 100vw;
  padding: 5vw;
  background-color: red;
}
</style>
