import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default (context, inject) => {
    gsap.registerPlugin(ScrollTrigger);
    inject('gsap', gsap);
}