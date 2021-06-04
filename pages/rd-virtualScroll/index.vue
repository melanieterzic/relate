<template>
  <o-locomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      getSpeed: true,
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
  <div class="example vertical">

    <o-scroller data-scroll-section class="scroller1" :options="{
        scroll: {
          end: 'bottom 15%'
        }
      }">
      <o-sound :options="{
        sound: {
          name: '1'
        }
      }">
        <div class="container"></div>
      </o-sound>
    </o-scroller>
    <o-scroller data-scroll-section class="scroller2" :options="{
        scroll: {
          end: 'bottom 15%'
        }
      }">
      <o-sound :options="{
        sound: {
          name: '2'
        }
      }">
        <div class="container"></div>
      </o-sound>
    </o-scroller>
      <footer data-scroll-section>
        <nuxt-link to="/horizontal-scroll/" class="toto">
          Go to Horizontal Scroll
        </nuxt-link>
      </footer>
    </div>
    <!-- <div class="example vertical">
      <header data-scroll-section>
        <h1>
          Vertical<br />
          Scroll
        </h1>
      </header>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
            class="example-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
            data-scroll-trigger
          />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
          <div
            class="example-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
            class="example-big-square"
            data-scroll
            data-scroll-speed="-0.5"
          />
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/horizontal-scroll/" class="toto">
          Go to Horizontal Scroll
        </nuxt-link>
      </footer>
    </div> -->
  </o-locomotiveScroll>
</template>

<script>
export default {
  mounted() {
    this.initScrolltrigger()
    const elements = document.querySelectorAll('[data-scroll-trigger]')
    elements.forEach((element) => this.elementAnimation(element))
  },
  methods: {
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on('scroll', this.$gsap.ScrollTrigger.update);
      this.$gsap.ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
      });
    },
    elementAnimation(element) {
      // this.$gsap.from(element, {
      //   scrollTrigger: {
      //     trigger: element,
      //     scroller: this.$refs.scroller.locomotive.el,
      //     scrub: true,
      //     start: 'top bottom',
      //     end: 'bottom center',
      //   },
      //   scaleX: 0,
      //   ease: 'none',
      // });
    }
  }
}
</script>

<style lang="scss">

.example.horizontal{
  width: 500vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.example.vertical{
  height: 300vh;
  .scroller1 {
    position: absolute;
    top: 100vh; left: 0;
    .container {
      background: blue;
    }
  }
  .scroller2 {
    position: absolute;
    top: 125vh; left: 0;
    .container {
      background: orange;
    }
  }
  .container {
    display: block;
    width: 100vw;
    height: 20vw;
  }
}

header{
  padding: 12.5vw 6.25vw;
  h1{
    font-size: 11vw;
    line-height: 1;
    margin: 0;
    color: #000000;
  }
}

footer{
  padding: 12.5vw 6.25vw;
  p{
    font-size: 5vw;
    color: #000000;
  }
}

.example-content{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.example-big-square{
  width: 50vw;
  padding-top: 50vw;
  background-color: #000;
}

.example-small-square{
  width: 25vw;
  padding-top: 25vw;
  background-color: #000;
}


.example-big-image{
  img{
    width: 100%;
    width: 50vw;
    height: auto;
    display: block;
  }
}

.example.horizontal header{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 12.5vw ;
}

.example.horizontal footer{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 12.5vw ;
}

.example.horizontal .example-section{
  width: 100vw;
}

.example.vertical .example-section, .example.vertical footer {
  padding-top: 50vw;
}

.example-fade-text{
  padding: 12.5vw 6.25vw;
  h2{
    font-size: 5vw;
  }
}
</style>
