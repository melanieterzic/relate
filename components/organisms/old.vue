<template>
<main 
        v-if="datas.tag === 'main'"
        :style="`
            position: relative;
            width: ${datas.width}px;
            height: ${datas.height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </main>
    <section 
        v-else-if="datas.tag === 'section'"
        :style="`
            position: absolute;
            width: ${datas.width}px;
            height: ${datas.height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </section>
    <div 
        v-else-if="datas.tag === 'div'" 
        :class="datas.name"
        :style="`
            position: absolute;
            width: ${datas.width}px;
            height: ${datas.height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </div>
    <h2 
        v-else-if="datas.tag === 'h2'"
        :style="`
            position: absolute;
            top: 0px;
            left: 0px;
            width: ${datas.width}px;
            height: ${datas.height}px;
        `"
    >{{ datas.characters }}</h2>
    <p 
        v-else-if="datas.tag === 'p'"
        :style="`
            position: absolute;
            top: 0px;
            left: 0px;
            width: ${datas.width}px;
            height: ${datas.height}px;
        `"
    >{{ datas.characters }}</p>
    <img 
        v-else-if="datas.tag === 'img'" :src="url"
        :style="`
            position: absolute;
            top: 0px;
            left: 0px;
            width: ${datas.width}px;
            height: ${datas.height}px;
            transform: translate3D(${x}px, ${y}px, 0) scale3D(${width/datas.width}, ${width/datas.width}, ${width/datas.width});
            transform-origin: top left;
        `"
    />
    <!-- <main 
        v-if="datas.tag === 'main'"
        :style="`
            position: relative;
            width: ${width}px;
            height: ${height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </main>
    <section 
        v-else-if="datas.tag === 'section'"
        :style="`
            position: absolute;
            width: ${width}px;
            height: ${height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </section>
    <div 
        v-else-if="datas.tag === 'div'" 
        :class="datas.name"
        :style="`
            position: absolute;
            width: ${width}px;
            height: ${height}px;
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </div>
    <h2 
        v-else-if="datas.tag === 'h2'"
        :style="`
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: ${width}px;
            height: ${height}px;
        `"
    >{{ datas.characters }}</h2>
    <p 
        v-else-if="datas.tag === 'p'"
        :style="`
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: ${width}px;
            height: ${height}px;
        `"
    >{{ datas.characters }}</p>
    <img 
        v-else-if="datas.tag === 'img'" :src="url"
        :style="`
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: ${width}px;
            height: ${height}px;
        `"
    /> -->
    <!-- <svg 
        v-else-if="datas.tag === 'svg'" 
        v-html="datas.content"
        :width="datas.width"
        :height="datas.height"
        :viewBox="`0 0 ${datas.width} ${datas.height}`"
        :style="`
            position: absolute;
            top: ${datas.position.y}px;
            left: ${datas.position.x}px;
            transform: scale3d(${width * 1 / 300}, ${width * 1 / 300}, ${width * 1 / 300});
        `"
    ></svg> -->
</template>

<script>
export default {
    props: {
        datas: { required: true }
    },
    data() {
        return {
            url: undefined,
            defaultWidth: 300,
            bounding: {
                width: {
                    ratio: undefined,
                    pixel: undefined,
                    pourcent: undefined
                },
                height: {
                    ratio: undefined,
                    pixel: undefined,
                    pourcent: undefined
                },
                x: {
                    ratio: undefined,
                    pixel: undefined,
                    pourcent: undefined
                },
                y: {
                    ratio: undefined,
                    pixel: undefined,
                    pourcent: undefined
                }
            } 
        }
    },
    methods: {
        getUrlImg(bytes, format) {
            bytes = Uint8Array.from(Object.values(bytes));
            return URL.createObjectURL(
                new Blob([bytes.buffer], { type: `image/${format}` })
            ); 
        },
        // getResizeValue(value) {
        //     let low1 = 0;
        //     let high1 = this.$data.defaultWidth;
        //     let low2 = 0;
        //     let high2 = window.innerWidth;
        //     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        // },
        // getPixelResizeValue(value) {
        //     let low1 = 0;
        //     let high1 = this.$data.defaultWidth;
        //     let low2 = 0;
        //     let high2 = window.innerWidth;
        //     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        // },
        // getPixelResizeValue(value) {
        //     let low1 = 0;
        //     let high1 = this.$data.defaultWidth;
        //     let low2 = 0;
        //     let high2 = window.innerWidth;
        //     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        // },
        // getPixelResizeValueByWidth(value, oldWidth, newWidth) {
        //     return value * newWidth / oldWidth;
        // },
        // getBounding(datas) {
        //     const width = {
        //         pixel: getPixelResizeValue(datas.width),
        //         ratio: getRatioResizeValue(datas.width),
        //         percent: getPercentResizeValue(datas.width)
        //     };
        //     const height = {
        //         ratio: getRatioResizeValueByWidth(datas.height, datas.width, width.ratio),
        //         pixel: getPixelResizeValueByWidth(datas.height, datas.width, width.ratio),
        //         percent: getPercentResizeValueByWidth(datas.height, datas.width, width.ratio)
        //     };
        //     const x = {
        //         ratio: getRatioResizeValue(datas.position.x),
        //         pixel: getPixelResizeValue(datas.position.x),
        //         percent: getPercentResizeValue(datas.position.x)
        //     };
        //     const y = {
        //         ratio: getRatioResizeValueByWidth(datas.position.y),
        //         pixel: getPixelResizeValueByWidth(datas.position.y),
        //         percent: getPercentResizeValueByWidth(datas.position.y)
        //     };
        //     const bounding = {
        //         width: width,
        //         height: height,
        //         x: x,
        //         y: y
        //     };
        //     return bounding;
        // }
        // getXPourcent(x) {
        //     return window.innerWidth * (x * 1 / 300)
        // },
        // getYPourcent(y, x) {
        //     return y * this.$data.width / x
        // },
        // getWidthPourcent(width) {
        //     return window.innerWidth * (width * 1 / 300)
        // },
        // getHeightPourcent(height, width) {
        //     return height * this.$data.width / width
        // }
    },  
    mounted() {
        if (this.$props.datas.tag === 'img') {
            this.$data.url = this.getUrlImg(this.$props.datas.bytes, this.$props.datas.format);
        }
        this.$data.x = this.getResizeValue(this.$props.datas.position.x)
        this.$data.y = this.getResizeValue(this.$props.datas.position.y)
        this.$data.height = this.getResizeValue(this.$props.datas.height)
        this.$data.width = this.getResizeValue(this.$props.datas.width)
        window.addEventListener('resize', ()=>{
            this.$data.x = this.getResizeValue(this.$props.datas.position.x)
            this.$data.y = this.getResizeValue(this.$props.datas.position.y)
            this.$data.height = this.getResizeValue(this.$props.datas.height)
            this.$data.width = this.getResizeValue(this.$props.datas.width)
        })
        // this.$data.x = this.getWidthPourcent(this.$props.datas.position.x)
        // this.$data.y = this.getWidthPourcent(this.$props.datas.position.y, this.$props.datas.position.x)
        // this.$data.height = this.getHeightPourcent(this.$props.datas.height, this.$props.datas.width)
        // this.$data.width = this.getWidthPourcent(this.$props.datas.width)
        // this.$data.height = this.getHeightPourcent(this.$props.datas.height, this.$props.datas.width)
        // window.addEventListener('resize', ()=>{
        //     this.$data.x = this.getWidthPourcent(this.$props.datas.position.x)
        //     this.$data.y = this.getWidthPourcent(this.$props.datas.position.y, this.$props.datas.position.x)
        //     this.$data.width = this.getWidthPourcent(this.$props.datas.width)
        //     this.$data.height = this.getHeightPourcent(this.$props.datas.height, this.$props.datas.width)
        // })
    }
}
</script>

<style lang="scss">
.o-header {}
</style>