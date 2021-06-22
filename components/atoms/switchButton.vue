<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <p class="p-checkbox">off</p>
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox" :checked="isActive" />
        <div class="slider round"></div>
      </label>
      <p class="p-checkbox">on</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
    };
  },
  mounted() {
    // console.log(this.$props.m);
  },

  props: {
    m: { required: false },
    isActive: { required: true },
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
      if (this.$props.m) {
        this.$props.m();
      }
    },
  },
};
</script>

<style lang="scss">
.panel-body {
  display: inline-flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 23px;
  font-family: "Source Sans Pro", sans-serif;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: none;
  border: 2px solid #faf2ed;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 4px;
  bottom: 3px;
  background-color: #faf2ed;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #0f0e21;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0f0e21;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.p-checkbox {
  font-size: 12px !important;
  font-weight: 400 !important;
  text-transform: uppercase;
  padding: 0px 8px;
}
</style>
