import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default (context, inject) => {
    gsap.registerPlugin(ScrollTrigger);
<<<<<<< HEAD
=======
    gsap['ScrollTrigger'] = ScrollTrigger;
>>>>>>> origin/rd-integrationPrototype
    inject('gsap', gsap);
}