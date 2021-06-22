<template>
    <div class="t-story">
        <button v-bind:class="changeStyle()" @click="modal = !modal">
            <img :src="[modal ? close : burger]" />
        </button>
        <o-settings v-if="modal"></o-settings>
        <img class="sound-marker" src="~/assets/images/icon-sound.svg" alt="Icon marker sound">
        <o-recursive :datas="story" />
    </div>
</template>

<script>
export default {
    props: {
        story: { required: true }
    },
    data() {
        return {
            modal: false,
            burger: require("~/assets/images/settings_white.svg"),
            close: require("~/assets/images/white_close.svg"),
        };
    },
    mounted() {
        this.$nuxt.$on("update", this.update);
    },
    methods: {
        changeStyle() {
        if (this.$data.modal) {
            return "img-settings-close";
        }
        if (!this.$data.modal) {
            return "img-settings";
        }
        },
        update() {
        if (this.$data.modal) {
            document.querySelector("html").style.overflow = "hidden";
        }
        if (!this.$data.modal) {
            document.querySelector("html").style.overflow = "auto";
        }
        },
    },
}
</script>

<style lang="scss">
.sound-marker {
    position: fixed;
    top: 85%; left: 0;
    transform: translate3d(0, -50%, 0);
    z-index: 99; 
}
.t-story {
    overflow: hidden;
    .img-settings {
      position: fixed;
      right: -8px;
      z-index: 10;
      margin-top: 34px;
      text-decoration: none;
      border: none;
      background: none;
      //z-index: 3;
    }
    .img-settings-close {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 13;
      text-decoration: none;
      border: none;
      background: none;
    }
    .img-cross {
      position: absolute;
      right: 0;
      margin-right: 50px;
      margin-top: 30px;
    }
    .img-arrow {
      position: absolute;
      right: 0;
      margin-top: 30%;
      margin-right: 10%;
    }
    .contexte-info {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 400;
      font-size: 14px;
      line-height: 17.6px;
      height: 200px;
    }
}
</style>
