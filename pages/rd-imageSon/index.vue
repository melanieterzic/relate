<template>
  <main class="imageSon">
    <div class="list">
      <h3>Test 01</h3>
      <p>Container avec le son qui commence en bas de la page et fini en haut de la page.</p>
      <ul>
        <li>
          <nuxt-link to="/rd-imageSon/problem-01">Problem 01 🔗</nuxt-link>
          <br>
          <p>Si les espacements entre les containers sont trop petits, les sons liés se lancent en même temps car le container suivant passe le marker start avant que le container courrant n'est passé le marker de end.</p>
        </li>
        <li>
          <nuxt-link to="/rd-imageSon/solution-01">Solution 01 🔗</nuxt-link>
          <br>
          <p>Espacer les containers d'au moins l'espace entre les markers.</p>
        </li>
      </ul>
    </div>
    <div class="list">
      <h3>Test 02</h3>
      <p>Container avec le son qui commence en bas de la page et fini en bas du container.</p>
      <ul>
        <li>
          <nuxt-link to="/rd-imageSon/problem-02">Problem 02-01 🔗</nuxt-link>
          <br>
          <p>Si le container est trop petit, le son n'aura pas le temps d'être lu en entier.</p>
        </li>
        <li>
          <nuxt-link to="/rd-imageSon/solution-02-01">Solution 02-01 🔗</nuxt-link>
          <br>
          <p>Donner une taille minimum au containers.</p>
        </li>
        <li>
          <nuxt-link to="/rd-imageSon/problem-02">Problem 02-02 🔗</nuxt-link>
          <br>
          <p>Si le container est trop petit, le container sera à peine arrivé au milieu de l'écran le temps de passer le marker de end.</p>
        </li>
        <li>
          <nuxt-link to="/rd-imageSon/solution-02-02">Solution 02-02 🔗</nuxt-link>
          <br>
          <p>Remonter les markers au centre (Attention ! Ça lancera les sons qu'une fois que le container arrivera au centre de l'écran.</p>
        </li>
      </ul>
    </div>
    <div class="list">
      <h3>Test 03</h3>
      <p>Container avec le son qui recommence à partir du haut du container en bas de la page.</p>
      <ul>
        <li>
          <nuxt-link to="/rd-imageSon/problem-03">Problem 03 🔗</nuxt-link>
          <br>
          <p>Si le container est trop long, il faudra remonter tout le container avant de pouvoir relire le son.</p>
        </li>
        <li>
          <nuxt-link to="/rd-imageSon/solution-03">Solution 03 🔗</nuxt-link>
          <br>
          <p>Relire le son à partir du bas du container lorsqu'on remonte dans l'histoire.</p>
        </li>
      </ul>
    </div>
    <!-- <nuxt-link to="/rd-imageSon/test-01">Test-01 : </br>Container qui commence en bas de la page et fini en haut de la page </br>problème : si les container sont trop petits les sons ce lance en même temps.</br>Solution : Espacer les container entre eux au minimum de l'espace des markers </nuxt-link>
    <nuxt-link to="/rd-imageSon/test-02">Test-02 : Illu qui commence en bas de la page et fini en bas de l'illu (problème : si une illu est trop petite le son fini plus vite alors que l'illu est à peine au milieu de la page)</nuxt-link>
    <nuxt-link to="/rd-imageSon/test-03">Test-03 : Container à taille fixe qui commence en bas de la page et fini en bas du container (problème : si un container est trop petit le son fini plus vite alors que le container est à peine au milieu de la page)</nuxt-link> -->
  </main>
</template>

<script>
export default {
  mounted() {
  }
};
</script>

<style lang="css">
.imageSon h3 {
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
}
.imageSon p {
  margin-bottom: 10px;
}
.imageSon li {
  margin-bottom: 5px;
}
.imageSon a {
  text-decoration: underline;
}
.imageSon .list {
  display: block;
  margin-bottom: 20px;
}
</style>
