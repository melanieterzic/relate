import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

export default (context, inject) => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
    gsap['ScrollTrigger'] = ScrollTrigger;
    gsap['MotionPathPlugin'] = MotionPathPlugin;
    gsap['DrawSVGPlugin'] = DrawSVGPlugin;
    inject('gsap', gsap);
}