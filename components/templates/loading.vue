<template lang="html">
  <div v-if="$store.state.loader.isLoading" class="loading-page">
    <p>Loading ...</p>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #0F0E21;
  color: #FFF;
  z-index: 999999;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style>


<!-- <template lang="html">
  <div v-if="loading" class="loading-page">
    <p>Loading ...</p>
  </div>
</template>

<script>  
export default {
  data() {
    return {
      ressourceLoaded: 0,
      errors: [],
      status: 0,
      loading: false
    }
  },
  mounted() {
  },
  methods: {
    loadRessources() {
      this.$store.state.loader.ressourcesURL.forEach(url => {
        this.loadImage(url);
      });
    },
    loadImage(url) {
      this.$data.loading = true;
      const img = new Image();
      img.src = url;
      img.onload = () => {
        this.$data.ressourceLoaded++;
        this.checkLoaded();
      };
      img.addEventListener("error", (e) => {
        this.$store.commit('setRessourcesNumber', { value: this.$store.state.loader.ressourcesNumber - 1 });
        this.$data.errors.push([url, e]);
        this.checkLoaded();
      });
      return img;
    },
    checkLoaded() {
      if(!this.$data.loading) return null;
      this.$data.status = (this.$data.ressourceLoaded) / (this.$store.state.loader.ressourcesNumber + this.$data.errors.length);
      console.log(this.$data.status * 100);
      if(this.$data.ressourceLoaded + this.$data.errors.length >= this.$store.state.loader.ressourcesNumber) {
        this.$store.commit('setRessourcesNumber', { value: 0 });
        this.$data.ressourceLoaded = 0;
        this.$data.loading = false;
      }
    }
  },
  watch: {
    "$store.state.loader.ressourcesURL": function () {
      if (this.$store.state.loader.ressourcesNumber === this.$store.state.loader.ressourcesURL.length) {
        this.loadRessources();
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  z-index: 999999;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style> -->

<!-- <template lang="html">
  <div v-if="loading" class="loading-page">
    <p>Loading ...</p>
  </div>
</template>

<script>  
export default {
  data() {
    return {
      ressourceURL: [],
      ressourceNumber: 0,
      ressourceLoaded: 0,
      errors: [],
      status: 0,
      loading: false
    }
  },
  mounted() {
    // this.loadContent();
  },
  methods: {
    loadContent() {
      this.$data.ressourceNumber = this.$data.ressourceURL.length;
      this.$data.ressourceURL.forEach(url => {
        this.loadImage(url);
      });
    },
    loadImage(url) {
      this.$data.loading = true;
      const img = new Image();
      img.src = url;
      this.$data.resNumber++;
      img.onload = () => {
        this.$data.ressourceLoaded++;
        this.checkLoaded();
      };
      img.addEventListener("error", (e) => {
        this.$data.ressourceNumber--;
        this.$data.errors.push([url, e]);
        this.checkLoaded();
      });
      return img;
    },
    checkLoaded() {
      if(!this.$data.loading) return null;
      this.$data.status = (this.$data.ressourceLoaded) / (this.$data.ressourceNumber + this.$data.errors.length);
      console.log(this.$data.status * 100);
      if(this.$data.ressourceLoaded + this.$data.errors.length >= this.$data.ressourceNumber) {
        this.$data.ressourceNumber = 0;
        this.$data.ressourceLoaded = 0;
        this.$data.loading = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  z-index: 999999;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style>-->

<!-- <template lang="html">
  <div v-if="$store.state.loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ressourceLoaded: 0,
      errors: [],
      status: 0,
      loading: false,
    };
  },
  mounted() {},
  methods: {
    loadRessources() {
      this.$store.state.loader.ressourcesURL.forEach((url) => {
        this.loadImage(url);
      });
    },
    loadImage(url) {
      this.$data.loading = true;
      const img = new Image();
      img.src = url;
      img.onload = () => {
        this.$data.ressourceLoaded++;
        this.checkLoaded();
      };
      img.addEventListener("error", (e) => {
        this.$store.commit("setRessourcesNumber", {
          value: this.$store.state.loader.ressourcesNumber - 1,
        });
        this.$data.errors.push([url, e]);
        this.checkLoaded();
      });
      return img;
    },
    checkLoaded() {
      if (!this.$data.loading) return null;
      this.$data.status =
        this.$data.ressourceLoaded /
        (this.$store.state.loader.ressourcesNumber + this.$data.errors.length);
      console.log(this.$data.status * 100);
      if (
        this.$data.ressourceLoaded + this.$data.errors.length >=
        this.$store.state.loader.ressourcesNumber
      ) {
        this.$store.commit("setRessourcesNumber", { value: 0 });
        this.$data.ressourceLoaded = 0;
        this.$data.loading = false;
      }
    },
  },
  watch: {
    "$store.state.loader.ressourcesURL": function () {
      if (
        this.$store.state.loader.ressourcesNumber ===
        this.$store.state.loader.ressourcesURL.length
      ) {
        this.loadRessources();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  z-index: 999999;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style>

<!-- <template lang="html">
  <div v-if="loading" class="loading-page">
    <p>Loading ...</p>
  </div>
</template>
<script>  
export default {
  data() {
    return {
      ressourceURL: [],
      ressourceNumber: 0,
      ressourceLoaded: 0,
      errors: [],
      status: 0,
      loading: false
    }
  },
  mounted() {
    // this.loadContent();
  },
  methods: {
    loadContent() {
      this.$data.ressourceNumber = this.$data.ressourceURL.length;
      this.$data.ressourceURL.forEach(url => {
        this.loadImage(url);
      });
    },
    loadImage(url) {
      this.$data.loading = true;
      const img = new Image();
      img.src = url;
      this.$data.resNumber++;
      img.onload = () => {
        this.$data.ressourceLoaded++;
        this.checkLoaded();
      };
      img.addEventListener("error", (e) => {
        this.$data.ressourceNumber--;
        this.$data.errors.push([url, e]);
        this.checkLoaded();
      });
      return img;
    },
    checkLoaded() {
      if(!this.$data.loading) return null;
      this.$data.status = (this.$data.ressourceLoaded) / (this.$data.ressourceNumber + this.$data.errors.length);
      console.log(this.$data.status * 100);
      if(this.$data.ressourceLoaded + this.$data.errors.length >= this.$data.ressourceNumber) {
        this.$data.ressourceNumber = 0;
        this.$data.ressourceLoaded = 0;
        this.$data.loading = false;
      }
    }
  }
}
</script>
<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  z-index: 999999;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style>-->

<!-- <template lang="html">
  <div v-if="$store.state.loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>
<script>  
import { mapMutations } from 'vuex'
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      // this.$store.state.loading = false
    })
  },
  methods: {
    ...mapMutations([
      'setLoading'
    ]),
    start() {
      this.setLoading(true);
      // this.loading = true
    },
    finish() {
      this.setLoading(false);
      setTimeout(() => this.$store.state.loading = false, 1000)
    }
  }
}
</script>
<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  z-index: 99;
  &.remove {
    opacity: 0;
    transition: opacity 1s linear;
    p {
      display: none;
    }
  }
}
</style>
-->
