<template>
  <div class="frise" id="frise">
    <p class="text11" @click="ChangeText()">{{ mots[i] }}</p>
    <svg
      id="svg"
      height="11682"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 371 11828"
    >
      <path
        class="theLine"
        d="M238.734 1C253.067 81.3333 265.735 131 203.735 248C149.83 349.722 148.734 512.5 183.234 581"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine2"
        d="M183.234 581C217.734 649.5 292.235 752.5 203.734 764C158.747 769.846 92.5118 736.775 48.2332 808C5.40568 876.891 -23.7668 977 57.2337 1049C138.234 1121 241.488 1126.5 315.233 1049C385.709 974.934 360.233 830.5 315.233 785.5C270.233 740.5 112.44 733.334 51.7337 823.5C10.128 885.297 0.234077 947.5 57.2337 1023.5C114.233 1099.5 240.066 1070.62 254.482 1108C263.233 1130.69 196.734 1154.5 196.734 1217.5"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine3"
        d="M196.733 1218C196.733 1300 315.233 1457.5 298.732 1535.5C282.232 1613.5 140.733 1894.5 228.733 1982.5C316.733 2070.5 21.6248 2343.39 154.733 2476.5C311.733 2633.5 -28.2671 3036.5 59.7329 3060.5"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine4"
        d="M58 3060C146 3084 106.496 3399.47 146.734 3610C182.285 3796.01 124.392 3966.45 106.734 4155C93.0737 4300.86 217.734 4410.5 217.734 4557"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine5"
        d="M217.733 4552C217.733 4697 127.733 4658 177.733 4887C227.733 5116 123.396 5238.81 120.733 5466C117.71 5723.91 326.832 5958.48 149.733 6146C13.733 6290 360.26 6417.16 272.732 6574"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine6"
        d="M272.659 6574C238.875 6634.54 149.66 6734.67 149.66 6804C149.66 6958 153.806 7518.57 203.661 7654C337.661 8018 78.6608 8270 143.661 8492C208.661 8714 285.032 9121.15 166.522 9140"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine7"
        d="M166.499 9140C87.9405 9152.5 130.92 9168.21 156.14 9224C90.1395 9298 282.139 9698 282.139 9852C282.139 10006.3 28.1395 10513 169.14 10654C310.14 10795 209.138 11182 245.139 11262"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <path
        class="theLine8"
        d="M244.5 11260.5C280.5 11340.5 276.527 11314.4 302.735 11350C343.635 11405.6 347.362 11433 349.734 11502C351.61 11556.5 369.407 11556.5 329.734 11594C306.102 11616.3 272.611 11629.7 240.734 11636C182.608 11647.5 154.914 11636.6 99.7348 11615C60.9964 11599.8 30.8736 11601.8 9.73485 11566C-18.6673 11517.9 30.8644 11427.7 35.734 11372C41.0806 11310.9 12.0039 11317.9 57.734 11277C90.8923 11247.3 125.253 11254.7 169.734 11256C217.836 11257.4 228.108 11292.7 267.735 11320C299.232 11341.7 317.3 11351.5 335.734 11385C368.473 11444.5 376.953 11490.8 361.734 11557C348.093 11616.3 315.452 11634.3 261.734 11663C210.746 11690.2 177.553 11678.1 123.735 11657C49.1675 11627.8 13.1822 11523.6 4.73405 11444C-1.97566 11380.8 13.5215 11335.7 57.734 11290"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />
      <circle class="ball ball01" r="8" cx="237" cy="0"></circle>
      <circle class="ball ball02" r="10" cx="270" cy="1620"></circle>
      <circle class="ball ball03" r="8" cx="160" cy="2750"></circle>
      <circle class="ball ball04" r="8" cx="282" cy="9852"></circle>
      <circle class="ball ball05" r="8" cx="242" cy="10842"></circle>

      <image xlink:href="~/assets/images/ct1.png" y="2850" x="-10" />
      <image
        xlink:href="~/assets/images/ct2.png"
        width="380px"
        x="0"
        y="3900"
      />
      <image xlink:href="~/assets/images/ct3.png" x="80" y="6830" />
      <image
        xlink:href="~/assets/images/ct4.png"
        width="380px"
        x="0"
        y="9950"
      />

      <rect x="100" y="250" width="400" height="120" fill="#0f0e21" />
      <rect x="100" y="2130" width="400" height="180" fill="#0f0e21" />
      <rect
        class="rectangle"
        x="-120"
        y="2170"
        width="180"
        height="41"
        fill="#faf2ed"
      />

      <rect x="100" y="3624" width="400" height="280" fill="#0f0e21" />
      <rect x="100" y="4913" width="400" height="230" fill="#0f0e21" />
      <rect x="100" y="5729" width="400" height="160" fill="#0f0e21" />
      <rect
        class="position"
        x="100"
        y="6291"
        width="400"
        height="160"
        fill="#0f0e21"
      />
      <rect x="100" y="7630" width="400" height="160" fill="#F8957E" />
      <rect x="100" y="8480" width="400" height="160" fill="#0f0e21" />
      <rect x="100" y="9080" width="400" height="160" fill="#0f0e21" />
      <rect
        class="rectangle2"
        x="-1185"
        y="9000"
        width="65"
        height="41"
        fill="#faf2ed"
      />

      <rect
        x="20"
        y="6880"
        width="255"
        height="153"
        fill="#F8957E
"
      />

      <!-- TEXTE 1 -->
      <text class="text01" x="80" y="0">1887 → 1954</text>

      <!-- TEXTE 2 -->
      <text class="text02" x="100" y="285" width="100">
        <tspan font-weight="bold">Indochine française,</tspan>
      </text>
      <text class="text02" x="100" y="315">
        <tspan>un ancien empire</tspan>
      </text>
      <text class="text02" x="100" y="345">
        <tspan>coloniale français</tspan>
      </text>

      <!-- TEXTE 3 -->
      <text class="text03" x="120" y="860">
        <tspan font-size="40px">Khmer</tspan>
      </text>
      <text class="text03" x="125" y="890">
        <tspan font-size="14px">Ethnie majoritaire</tspan>
      </text>
      <text class="text03" x="80" y="960">
        <tspan font-size="30px">Khmers Rouges</tspan>
      </text>
      <text class="text03" x="125" y="985">
        <tspan font-size="14px">le parti politique</tspan>
      </text>

      <!-- TEXTE 4 -->
      <text class="text04" x="105" y="1625">1966 → 1969</text>

      <!-- TEXTE 5 -->
      <text class="text05" x="-112" y="2200">de 1970 à 1975.</text>
      <text class="text06" x="-180" y="2270">Guerre Civile</text>

      <!-- TEXTE 6 -->
      <text class="text07" x="90" y="2753">1975</text>
      <text class="text08" x="185" y="2750">À Phnom Penh,</text>
      <text class="text08" x="185" y="2770">capitale du Cambodge</text>

      <!-- TEXTE 7 -->
      <text class="text02" x="90" y="3679">L'un des régimes</text>
      <text class="text09" x="90" y="3720">Les plus violents</text>
      <text class="text02" x="90" y="3755">de la seconde partie</text>
      <text class="text10" x="90" y="3790">du 20ème siècle,</text>
      <text class="text02" x="90" y="3860">avec à sa tête Pol Pot</text>

      <!-- TEXTE 9 -->
      <text class="text13" x="50" y="5780">C'est un système de</text>
      <text class="text12" x="60" y="5820">déshumanisation</text>
      <text class="text13" x="135" y="5860">absolu</text>

      <!-- TEXTE 9 -->
      <text class="text13" x="100" y="6340">Un régime</text>
      <text class="text13" x="100" y="6380">qui repose</text>
      <text class="text13" x="85" y="6420">sur la terreur</text>

      <!-- TEXTE 10 -->
      <text class="text14" x="50" y="6925">En 4 ans environs</text>
      <text class="text15" x="50" y="6970">2 000 000</text>
      <text class="text15" x="50" y="7005">de morts</text>

      <!-- TEXTE 11 -->
      <text class="text14" x="120" y="7670">ce qui représente</text>
      <text class="text15" x="120" y="7720">1/5 de la</text>
      <text class="text15" x="120" y="7755">Population</text>

      <!-- TEXTE 12 -->
      <text class="text16" x="130" y="8530">1979</text>
      <text class="text13" x="80" y="8580">Fin de la dictature</text>
      <text class="text13" x="80" y="8610">de Pol Pot</text>

      <!-- TEXTE 13 -->
      <text class="text17" x="-1175" y="9030">1997</text>
      <text class="text13" x="60" y="9170">Chute du régime</text>
      <text class="text13" x="60" y="9210">des Khmers rouges</text>

      <!-- TEXTE 14 -->
      <text class="text07" x="200" y="9860">2005</text>

      <!-- TEXTE 15 -->
      <text class="text18" x="-350" y="9920">Procès de Douch</text>
      <text class="text18" x="-350" y="9940">suivi partout dans le monde</text>

      <!-- TEXTE 16 -->
      <text class="text07" x="160" y="10850">2018</text>

      <!-- TEXTE 17 -->
      <text class="text06" x="-995" y="11380">Génocide</text>
      <text class="text12" x="60" y="11480">
        <tspan font-size="22px">40 ans après les faits,</tspan>
      </text>
      <text class="text02" x="60" y="11505">
        <tspan font-size="22px">ce terme est enfin utilisé et</tspan>
      </text>
      <text class="text02" x="60" y="11530">
        <tspan font-size="22px" font-weight="bold">
          reconnu par la communauté
        </tspan>
      </text>
      <text class="text02" x="60" y="11555">
        <tspan font-size="22px" font-weight="bold">internationale.</tspan>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mots: [
        "Collectivisation",
        "Camps de travail",
        "Lignes de communication coupées",
        "Plus de traces de modernité",
        "Police politique",
        "Familles séparées",
        "Religions interdites",
        "Minorités décimées",
        "Intellectuel·le·s pourchassé·e·s et exécuté·e·s",
      ],
      i: 0,
    };
  },
  mounted() {
    console.clear();

    this.$gsap.defaults({ ease: "none" });

    this.$gsap.to(".img-settings", {
      scrollTrigger: {
        trigger: ".frise",
        toggleActions: "play none none none",
      },
      x: 15,
      duration: 0.1,
    });

    const tl = this.$gsap
      .timeline({
        defaults: {
          duration: 5,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball01, .text01", {}, 0)
      .to(".text02", {}, 1.5)
      .to(".text03", {}, 4)
      .to(".ball02, .text04", {}, 6)
      .to(".text05", {}, 10)
      .to(".text06", {}, 11)
      .to(".ball03, .text07, .text08", {}, 14)
      .to(".text09, .text10", {}, 18)
      .to(".text11", {}, 25)
      .to(".text12, .text13", {}, 23)
      .to(".text14", {}, 53)
      .to(".text15", {}, 3.9)
      .to(".text16", {}, 4.2)
      .to(".ball04, .text17", {}, 4.5)
      .to(".ball05,.text18", {}, 5);

    const Ligne1 = this.$gsap
      .timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .from(".theLine", { drawSVG: 0, duration: 3, stagger: 0.1 })
      .from(".theLine2", { drawSVG: 0, duration: 3, stagger: 0.1 })
      .from(".theLine3", { drawSVG: 0, duration: 10, stagger: 0.1 })
      .from(".theLine4", { drawSVG: 0, duration: 7, stagger: 0.1 })
      .from(".theLine5", { drawSVG: 0, duration: 9, stagger: 0.1 })
      .from(".theLine6", { drawSVG: 0, duration: 12, stagger: 0.1 })
      .from(".theLine7", { drawSVG: 0, duration: 12, stagger: 0.1 })
      .from(".theLine8", { drawSVG: 0, duration: 1, stagger: 0.1 })
      .add(tl, 0);
  },
  methods: {
    ChangeText() {
      if (this.$data.i < 8) {
        this.$data.i++;
      } else if (this.$data.i >= 8) {
        this.$data.i = 0;
      }
    },
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Bayon&family=Source+Sans+Pro:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap");

.frise {
  margin: 0;
}

.frise svg {
  position: relative;
  max-width: 750px;
  overflow: visible;
  margin-top: 20vh;
}

.frise .ball {
  fill: #faf2ed;
  visibility: hidden;
}

.frise .line {
  fill: none;
  stroke: #faf2ed;
  stroke-width: 2px;
}

.frise text {
  fill: #faf2ed;
  font-size: 22px;
  visibility: hidden;
}

.frise .text01 {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}

.frise .text02 {
  font-family: "Source Sans Pro";
  font-weight: 400;
}

.frise .text03 {
  font-family: "Volkhov", serif;
}

.frise .text05 {
  font-family: "Poppins";
  font-weight: 600;
  fill: #0f0e21;
  transform: rotate(-5.33deg);
}

.frise .text06 {
  font-family: "Poppins";
  font-weight: 700;
  fill: #faf2ed;
  font-size: 45px;
  transform: rotate(-5.33deg);
}

.frise .text07 {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 22px;
}

.frise .text08 {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 16px;
}

.frise .text09 {
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 34px;
  fill: #f8957e;
}

.frise .text10 {
  font-weight: bold;
}

.frise .text11 {
  z-index: 9;
  position: absolute;
  margin-top: 0;
  top: 5950px;
  text-align: center;
  font-size: 34px;
  width: 100%;
  padding: 5px 40px;
  color: #faf2ed;
}

.frise .text12 {
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 32px;
  fill: #f8957e;
}

.frise .text13 {
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 32px;
}

.frise .text14 {
  font-family: "Volkhov", serif;
  font-size: 17px;
  fill: #0e0d22;
}

.frise .text15 {
  font-family: "Volkhov", serif;
  font-size: 40px;
  fill: #0e0d22;
}

.frise .text16 {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 22px;
}

.frise .text17 {
  font-family: "Poppins";
  font-weight: 600;
  fill: #0f0e21;
  transform: rotate(-8.65deg);
}

.frise .text18 {
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: 400;
  transform: rotate(-2.29deg);
}

.frise .rectangle {
  transform: rotate(-5.33deg);
}

.frise .rectangle2 {
  transform: rotate(-8.65deg);
}

.frise .rotate-image {
  transform: rotate(-4.8deg);
}
</style>
