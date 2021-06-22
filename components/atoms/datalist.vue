<template>
  <div class="select-wrapper">
    <select name="languages" id="language-choice" class="langue">
      <option value="Français">Français</option>
      <option value="English">English</option>
      <option value="Español">Español</option>
    </select>
  </div>
</template>

<style lang="scss">
.langue {
  background: #0f0e21 !important;
  border: 2px solid #faf2ed;
  border-radius: 34px;
  width: 120px;
  height: 30px;
  color: #faf2ed;
  padding: 0px 15px;
}

.select-wrapper {
  position: relative;
  display: inline-block;
}
.select-wrapper:after {
  content: "\2228";
  color: white;
  right: 14px;
  top: 4px;
  height: 26px;
  padding: 2px 0px 0px 8px;
  position: absolute;
  pointer-events: none;
}

select {
  -webkit-appearance: none;
}
</style>
