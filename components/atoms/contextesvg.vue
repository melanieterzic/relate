<template>
  <div class="frise" id="frise">
    <p class="text11" @click="ChangeText()">{{ mots[i] }}</p>
    <svg
      id="svg"
      height="11682"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 371 11682"
    >
      <path
        class="theLine"
        d="M 237.734 1
              C 252.067 81.3333 264.735 131 202.734 248
              C 148.83 349.722 147.734 512.5 182.234 581
              C 216.734 649.5 291.235 752.5 202.734 764 
              C 157.747 769.846 91.512 736.775 47.2334 808 
              C 4.40591 876.891 -24.7666 977 56.234 1049
              C 137.235 1121 240.489 1126.5 314.233 1049
              C 384.71 974.934 359.233 830.5 314.233 785.5
              C 269.234 740.5 111.44 733.334 50.734 823.5
              C 9.1282 885.297 -0.76569 947.5 56.234 1023.5
              C 113.234 1099.5 239.067 1070.62 253.482 1108
              C 262.234 1130.69 195.734 1154.5 195.734 1217.5
              C 195.734 1299.5 314.233 1457 297.733 1535
              C 281.233 1613 139.734 1894 227.734 1982
              C 315.734 2070 20.6256 2342.89 153.734 2476
              C 310.734 2633 -29.2664 3036 58.7336 3060
              C 146.734 3084 104.496 3398.47 144.734 3609
              C 180.285 3795.01 122.392 3965.45 104.734 4154
              C 91.0737 4299.86 215.734 4409.5 215.734 4556
              C 215.734 4701 125.734 4662 175.734 4891
              C 225.734 5120 121.396 5242.81 118.734 5470
              C 115.711 5727.91 324.833 5962.48 147.734 6150
              C 11.7337 6294 358.26 6421.16 270.733 6578
              C 236.949 6638.54 147.734 6738.67 147.734 6808
              C 147.734 6962 151.88 7522.57 201.735 7658
              C 335.735 8022 76.7347 8274 141.735 8496
              C 206.735 8718 283.106 9125.15 164.596 9144
              C 86.0369 9156.5 126.515 9172.21 151.735 9228
              C 85.7347 9302 277.734 9702 277.734 9856
              C 277.734 10010.3 23.7347 10517 164.735 10658
              C 305.735 10799 204.734 11186 240.734 11266
              C 276.734 11346 276.527 11316.4 302.735 11352
              C 343.635 11407.6 347.362 11435 349.734 11504
              C 351.61 11558.5 369.407 11558.5 329.734 11596
              C 306.102 11618.3 272.611 11631.7 240.734 11638
              C 182.608 11649.5 154.914 11638.6 99.7348 11617
              C 60.9964 11601.8 30.8736 11603.8 9.73485 11568
              C -18.6673 11519.9 30.8644 11429.7 35.734 11374
              C 41.0806 11312.9 12.0039 11319.9 57.734 11279
              C 90.8923 11249.3 125.253 11256.7 169.734 11258
              C 217.836 11259.4 228.108 11294.7 267.735 11322
              C 299.232 11343.7 317.3 11353.5 335.734 11387
              C 368.473 11446.5 376.953 11492.8 361.734 11559
              C 348.093 11618.3 315.452 11636.3 261.734 11665
              C 210.746 11692.2 177.553 11680.1 123.735 11659
              C 49.1675 11629.8 13.1822 11525.6 4.73405 11446
              C -1.97566 11382.8 13.5215 11337.7 57.734 11292"
        fill="none"
        stroke="white"
        stroke-width="3px"
      />

      <circle class="ball ball01" r="8" cx="237" cy="0"></circle>
      <circle class="ball ball02" r="10" cx="270" cy="1620"></circle>
      <circle class="ball ball03" r="8" cx="160" cy="2750"></circle>
      <circle class="ball ball04" r="8" cx="278" cy="9852"></circle>
      <circle class="ball ball05" r="8" cx="237" cy="10842"></circle>

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
      <text class="text07" x="200" y="9860">2012</text>

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
      .to(".text03", {}, 6)
      .to(".ball02, .text04", {}, 13)
      .to(".text05", {}, 17.5)
      .to(".text06", {}, 18)
      .to(".ball03, .text07, .text08", {}, 22)
      .to(".text09, .text10", {}, 32)
      .to(".text11", {}, 32)
      .to(".text12, .text13", {}, 49)
      .to(".text14", {}, 53)
      .to(".text15", {}, 3.9)
      .to(".text16", {}, 4.2)
      .to(".ball04, .text17", {}, 4.5)
      .to(".ball05,.text18", {}, 5);

    const action = this.$gsap
      .timeline({
        defaults: { duration: 100, ease: "none" },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top 85%",
          end: "bottom center",
        },
      })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(".theLine", { y: "=1920", duration: 0.0001 }, 0)
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bayon&family=Source+Sans+Pro:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap");

.frise {
  margin: 0;
  svg {
    position: relative;
    max-width: 600px;
    overflow: visible;
    margin-top: 20vh;
  }

  .ball {
    fill: #faf2ed;
    visibility: hidden;
  }

  .line {
    fill: none;
    stroke: #faf2ed;
    stroke-width: 2px;
  }
  text {
    fill: #faf2ed;
    font-size: 22px;
    visibility: hidden;
  }
  .text01 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
  }

  .text02 {
    font-family: "Source Sans Pro";
    font-weight: 400;
  }
  .text03 {
    font-family: "Volkhov", serif;
  }
  .text05 {
    font-family: "Poppins";
    font-weight: 600;
    fill: #0f0e21;
    transform: rotate(-5.33deg);
  }
  .text06 {
    font-family: "Poppins";
    font-weight: 700;
    fill: #faf2ed;
    font-size: 45px;
    transform: rotate(-5.33deg);
  }
  .text07 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 22px;
  }
  .text08 {
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 16px;
  }
  .text09 {
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: 34px;
    fill: #f8957e;
  }
  .text10 {
    font-weight: bold;
  }
  .text11 {
    z-index: 9;
    position: absolute;
    margin-top: 0;
    top: 5950px;
    text-align: center;
    font-size: 34px;
    // text-decoration: none;
    width: 100%;
    padding: 5px 40px;
    color: #faf2ed;
    // background: none;
  }
  .text12 {
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: 32px;
    fill: #f8957e;
  }
  .text13 {
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: 32px;
  }
  .text14 {
    font-family: "Volkhov", serif;
    font-size: 17px;
    fill: #0e0d22;
  }
  .text15 {
    font-family: "Volkhov", serif;
    font-size: 40px;
    fill: #0e0d22;
  }
  .text16 {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 22px;
  }
  .text17 {
    font-family: "Poppins";
    font-weight: 600;
    fill: #0f0e21;
    transform: rotate(-8.65deg);
  }
  .text18 {
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-weight: 400;
    transform: rotate(-2.29deg);
  }
  .rectangle {
    transform: rotate(-5.33deg);
  }
  .rectangle2 {
    transform: rotate(-8.65deg);
  }
  .rotate-image {
    transform: rotate(-4.8deg);
  }
}
</style>
