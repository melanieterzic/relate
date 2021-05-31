<template>
  <div :class="$options._componentTag" class="component organism">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
  },
  data() {
    return {
      sound: {
        element: null
      }
    }
  },
  mounted() {
    // Sound
    console.log(this.$parent)
    if (this.$children.length === 1) {
      if (this.$children[0].$options._componentTag === "o-sound") {
        this.$data.sound.element = this.$children[0];
  // ---
    this.$el.addEventListener('click', ()=>{ 
      console.log('user interact'); 
  // ---
        this.$data.sound.element.setPlaying(true);
  // ---
    })
  // ---
        this.$gsap.to(this.$el, {
          scrollTrigger: {
            trigger: this.$el,
            start: 'top 85%',
            end: 'bottom 85%',
            markers: true,
            onEnter: () => {
              this.$data.sound.element.setPlaying(true);
            },
            onLeave: () => { 
              this.$data.sound.element.setPlaying(false);
            },
            onLeaveBack: () => { 
              this.$data.sound.element.setPlaying(false);
            }
          }
        });
      }
    }
  }
}
</script>

<style lang="scss">
.o-scroller {
  display: table-cell;
}
</style>
