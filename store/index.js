export const state = () => ({
    window: {
        device: {
            desktop: null,
            mac: null,
            windows: null,
            device: null,
            ios: null,
            droid: null,
            tablet: null,
            ipad: null,
            droidTablet: null,
            phone: null,
            iphone: null,
            droidPhone: null
        },
        navigator: {
            chrome: null,
            firefox: null,
            safari: null,
            opera: null,
            edge: null,
            ie: null
        },
        aspect: {
            horizontal: null,
            vertical: null,
            square: null
        },
        scroll: {},
        mouse: {},
        cookies: {
            accepted: undefined,
            subtitles: false,
            voices: false,
            musics: false,
            language: 'fr'
        }
    },
    pages: {},
    components: {
        header: {},
        footer: {}
    },
    loader: {
        ressourcesNumber: 0,
        ressourcesURL: []
    },
    isSoundEnabled: true,
    recursive: {
        index: {
            sound: {
                testimony: 0,
                ambient: 0,
                noise: 0
            }
        }
    },
    isParamsOpen: false,
})

export const getters = {
    getImage(state, url) {
        return url;
    },
}

export const mutations = {
    // RECURSIVE
    addIndexSoundTestimony(state) {
        state.recursive.index.sound.testimony += 1;
    },
    addIndexSoundAmbient(state) {
        state.recursive.index.sound.ambient += 1;
    },
    addIndexSoundNoise(state) {
        state.recursive.index.sound.noise += 1;
    },
    // LOADER
    setRessourcesNumber(state, { value }) {
        state.loader.ressourcesNumber = value;
    },
    addRessourcesURL(state, { value }) {
        state.loader.ressourcesURL.push(value);
    },
    // COOKIES
    setCookie(state, { name, value }) {
        if (state.window.cookies.accepted !== false) {
            state.window.cookies[name] = value;
            // ---
            let expires = "";
            let days = 365;
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = `${name}=${value.toString() || ""}${expires}; path=/`;
        }
    },
    getCookie(state, { name }) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                state.window.cookies[name] = c.substring(nameEQ.length,c.length);
                // state.window.cookies[name] = undefined;
                // return c.substring(nameEQ.length,c.length);
            }
        }
        return null;
    },
    eraseCookie(state, { name }) {  
        state.window.cookies[name] = undefined;
        // ---
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    },
    // SETTER
    toggleSound(state) {
        state.isSoundEnabled = !state.isSoundEnabled;
        localStorage.setItem('isSoundEnabled', state.isSoundEnabled);
    },
    toggleParams(state) {
        state.isParamsOpen = !state.isParamsOpen;
        localStorage.setItem('isParamsOpen', state.isParamsOpen);
    },
    initializeSound(state) {
        // const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled'));
        const isSoundEnabled = true;
        if(!isSoundEnabled) {
          state.isSoundEnabled = false;
          localStorage.setItem("isSoundEnabled", false);
        } else if(isSoundEnabled) {
          state.isSoundEnabled = true;
          localStorage.setItem("isSoundEnabled", true);
        } else {
          state.isSoundEnabled = true;
          localStorage.setItem("isSoundEnabled", true);
        }
      },
    // CONTROL
    controlDevice(state) {
        const ua = navigator.userAgent.toLowerCase();
        const p = navigator.platform.toLowerCase();
        state.window.device.droidPhone = /android.*mobile/.test(ua);
        state.window.device.droidTablet = !state.window.device.droidPhone && (/android/i).test(ua);
        state.window.device.droid = state.window.device.droidPhone || state.window.device.droidTablet;
        state.window.device.ios = (/ip(hone|od|ad)/i).test(ua) && !window.MSStream;
        state.window.device.iphone = (/iphone/i).test(ua) && state.window.device.ios;
        state.window.device.ipad = (/ipad/i).test(ua) && state.window.device.ios;
        state.window.device.tablet = state.window.device.droidTablet || state.window.device.ipad;
        state.window.device.phone = state.window.device.droidPhone || (state.window.device.ios && !state.window.device.ipad);
        state.window.device.device = state.window.device.phone || state.window.device.tablet;
        state.window.device.desktop = !state.window.device.phone && !state.window.device.tablet;
        state.window.device.mac = /mac/i.test(p) && state.window.device.desktop;
        state.window.device.windows = /win/i.test(p) && state.window.device.desktop;
        for (const property in state.window.device) {
            document.body.classList.toggle(`is-${property}`, state.window.device[property]);
        }
    },
    controlNavigator(state) {
        const ua = navigator.userAgent.toLowerCase();
        const av = navigator.appVersion.toLowerCase();
        state.window.navigator.firefox = ua.indexOf('firefox') > -1;
        state.window.navigator.safari = !!ua.match(/version\/[\d\.]+.*safari/);
        state.window.navigator.opera = ua.indexOf('opr') > -1;
        state.window.navigator.ie = av.indexOf('msie') > -1 || av.indexOf('edge') > -1;
        state.window.navigator.edge = ua.indexOf('edge') > -1;
        state.window.navigator.chrome = window.chrome !== null && window.chrome !== undefined && navigator.vendor.toLowerCase() == 'google inc.' && !state.window.navigator.opera && !state.window.navigator.edge;
        for (const property in state.window.navigator) {
            document.body.classList.toggle(`is-${property}`, state.window.navigator[property]);
        }
    },
    controlAspect(state) {
        const aspect = window.innerWidth - window.innerHeight;
        state.window.aspect.horizontal = aspect > 0;
        state.window.aspect.vertical = aspect < 0;
        state.window.aspect.square = aspect == 0;
        for (const property in state.window.aspect) {
            document.body.classList.toggle(`is-${property}`, state.window.aspect[property]);
        }
    }
}