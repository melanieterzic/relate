<template>
<main 
        v-if="datas.tag === 'main'"
        :style="`
            position: relative;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            background-color: rgb(${datas.backgroundColor ? datas.backgroundColor.r : 255}, ${datas.backgroundColor ? datas.backgroundColor.g : 255}, ${datas.backgroundColor ? datas.backgroundColor.b : 255});
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </main>
    <section 
        v-else-if="datas.tag === 'section'"
        :style="`
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            background-color: rgb(${datas.backgroundColor ? datas.backgroundColor.r : 255}, ${datas.backgroundColor ? datas.backgroundColor.g : 255}, ${datas.backgroundColor ? datas.backgroundColor.b : 255});
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </section>
    <div 
        v-else-if="datas.tag === 'div'" 
        :class="datas.name" class="container"
        :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            background-color: rgb(${datas.backgroundColor ? datas.backgroundColor.r : 255}, ${datas.backgroundColor ? datas.backgroundColor.g : 255}, ${datas.backgroundColor ? datas.backgroundColor.b : 255});
        `"
    >
        <o-recursive :datas="data" v-for="(data, index) in datas.children" :key="index" />
    </div>
    <h2 
        v-else-if="datas.tag === 'h2'"
        :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            color: rgb(${datas.color.r}, ${datas.color.g}, ${datas.color.b});
            font-size: ${fontSize}vw;
            font-family: ${datas.fontFamily};
            font-weight: ${datas.fontWeight};
            letter-spacing: ${letterSpacing}vw;
            line-height: ${lineHeight}vw;
            text-align: ${datas.textAlign};
            opacity: ${datas.opacity};
        `"
    >{{ datas.characters }}</h2>
    <p 
        v-else-if="datas.tag === 'p'"
        :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            color: rgb(${datas.color.r}, ${datas.color.g}, ${datas.color.b});
            font-size: ${fontSize}vw;
            font-family: ${datas.fontFamily};
            font-weight: ${datas.fontWeight};
            letter-spacing: ${letterSpacing}vw;
            line-height: ${lineHeight}vw;
            text-align: ${datas.textAlign};
            opacity: ${datas.opacity};
        `"
    >{{ datas.characters }}</p>
    <img 
        v-else-if="datas.tag === 'img' || datas.tag === 'svg'" :src="url"
        :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
        `"
    />
</template>

<script>
export default {
    head() {
        const fontFamily = this.$props.datas.fontFamily
        if (fontFamily) {
            return {
                link: [
                    { rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, '+')}` }
                ]
            }
        } else {
            return {}
        }
    },
    props: {
        datas: { required: true }
    },
    data() {
        return {
            defaultWidth: 300,
            defaultHeight: 2160,
            url: undefined,
            fontSize: undefined,
            letterSpacing: undefined,
            lineHeight: undefined,
            bounding: {
                width: {
                    ratio: undefined,
                    pixel: undefined,
                    percent: undefined
                },
                height: {
                    ratio: undefined,
                    pixel: undefined,
                    percent: undefined
                },
                x: {
                    ratio: undefined,
                    pixel: undefined,
                    percent: undefined
                },
                y: {
                    ratio: undefined,
                    pixel: undefined,
                    percent: undefined
                }
            } 
        }
    },
    methods: {
        setUrlImg() {
            let bytes = this.$props.datas.bytes; 
            const format = this.$props.datas.format;

            bytes = Uint8Array.from(Object.values(bytes));
            if (format === "svg") {
                this.$data.url = URL.createObjectURL(
                    new Blob([bytes.buffer], { type: `image/svg+xml` })
                ); 
            } else {
                this.$data.url = URL.createObjectURL(
                    new Blob([bytes.buffer], { type: `image/${format}` })
                ); 
            }
        },
        setFontSize() {
            this.$data.fontSize = this.getPercentResizeValue(this.$props.datas.fontSize);
        },
        setLetterSpacing() {
            const value = this.$props.datas.letterSpacing;
            if (value.includes('%')) {
                let rebalancing = 12.666 * parseInt(value.split('%')[0]) / 100;
                this.$data.letterSpacing = rebalancing;
            } else if (value.includes('px')) {
                let rebalancing = parseInt(value.split('px')[0]);
                this.$data.letterSpacing = this.getPercentResizeValue(rebalancing);
            }  
        },
        setLineHeight() {
            const value = this.$props.datas.lineHeight;
            if (value.includes('%')) {
                let rebalancing = 35.9375 * parseInt(value.split('%')[0]) / 100;
                this.$data.lineHeight = rebalancing;
            } else if (value.includes('px')) {
                let rebalancing = parseInt(value.split('px')[0]) + 40;
                this.$data.lineHeight = this.getPercentResizeValue(rebalancing);
            }  
        },
        getPixelResizeValue(value) {
            let low1 = 0;
            let high1 = this.$data.defaultWidth;
            let low2 = 0;
            let high2 = window.innerWidth;

            return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        },
        getRatioResizeValue(oldValue, newValue) {
            return newValue / oldValue;
        },
        getPercentResizeValue(value) {
            return value * 100 / this.$data.defaultWidth;
        },
        setBounding() {
            let width = this.$props.datas.width;
            let height = this.$props.datas.height;
            let x = this.$props.datas.position.x;
            let y = this.$props.datas.position.y;

            this.bounding.width.pixel = this.getPixelResizeValue(width);
            this.bounding.width.ratio = this.getRatioResizeValue(width, this.bounding.width.pixel);
            this.bounding.width.percent = this.getPercentResizeValue(width);

            this.bounding.height.pixel = this.getPixelResizeValue(height);
            this.bounding.height.ratio = this.getRatioResizeValue(height, this.bounding.height.pixel);
            this.bounding.height.percent = this.getPercentResizeValue(height);

            this.bounding.x.pixel = this.getPixelResizeValue(x);
            this.bounding.x.ratio = this.getRatioResizeValue(x, this.bounding.x.pixel);
            this.bounding.x.percent = this.getPercentResizeValue(x);

            this.bounding.y.pixel = this.getPixelResizeValue(y);
            this.bounding.y.ratio = this.getRatioResizeValue(y, this.bounding.y.pixel);
            this.bounding.y.percent = this.getPercentResizeValue(y);
        }
    },  
    mounted() {
        this.setBounding();
        if (this.$props.datas.tag === 'img' || this.$props.datas.tag === 'svg') {
            this.setUrlImg();
        }
        if (this.$props.datas.tag === 'h2' || this.$props.datas.tag === 'p') {
            this.setFontSize();
            this.setLetterSpacing();
            this.setLineHeight();
        }
    }
}
</script>

<style lang="scss">
    .container {
        & > * {
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
        }
    }
</style>