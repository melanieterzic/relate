import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default (context, inject) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap['ScrollTrigger'] = ScrollTrigger;
    inject('gsap', gsap);
}