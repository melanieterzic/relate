<template>
  <div :class="namePage()" class="page">
    <!-- <o-header/> -->
    <nuxt/>
    <!-- <o-footer/> -->
    <o-cookies/>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["controlDevice", "controlNavigator", "controlAspect"]),
    _initControls() {
      this.controlDevice();
      this.controlNavigator();
      this.controlAspect();
    },
    _initEvents() {
      window.addEventListener("resize", this._onResize);
      window.addEventListener("scroll", this._onScroll);
    },
    _initUpdate() {
      this._onUpdate();
    },
    _removeEvents() {
      window.removeEventListener("resize", this._onResize);
      window.removeEventListener("scroll", this._onScroll);
    },
    _removeUpdate() {
      window.cancelAnimationFrame(this._onUpdate);
    },
    _onResize() {
      this.$nuxt.$emit("resize");
      this.controlAspect();
    },
    _onScroll() {
      this.$nuxt.$emit("scroll");
    },
    _onUpdate() {
      window.requestAnimationFrame(this._onUpdate);
      this.$nuxt.$emit("update");
    },
    namePage() {
      let page = this.$route.name == "index" ? "home" : this.$route.name;
      return `p-${page}`;
    },
  },
  mounted() {
    this._initControls();
    this._initEvents();
    this._initUpdate();
  },
  destroyed() {
    this._removeEvents();
    this._removeUpdate();
  },
};
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
