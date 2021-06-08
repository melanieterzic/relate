import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

export default (context, inject) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap['ScrollTrigger'] = ScrollTrigger;
    gsap.registerPlugin(ScrollToPlugin);
    gsap['ScrollTrigger'] = ScrollToPlugin;
    inject('gsap', gsap);
}