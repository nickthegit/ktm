<template>
  <header :class="{navOpen: isActive}">
    <a href="/" class="brand">
      <img src="/ktm-fabrication-logo-v2a-white.png" alt="ktm fabrication Logo">
    </a>
    <nav>
      <ul id="navMenu">
        <li @click="toggleNav">
          <a data-scroll href="#home">Home</a>
        </li>
        <li @click="toggleNav">
          <a data-scroll href="#about">About</a>
        </li>
        <li @click="toggleNav">
          <a data-scroll href="#gallery">Gallery</a>
        </li>
        <li @click="toggleNav">
          <a data-scroll href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <button
      class="hamburger hamburger--collapse"
      :class="{isActive: isActive}"
      @click="toggleNav"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
      this.$emit("navState", this.isActive);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/base/_variables.scss";
@import "~/assets/scss/base/_mediaquery.scss";

header {
  width: 100%;
  height: $headerHeight;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: $headerHeight / 8;
  box-sizing: border-box;
  background: rgba($black, 0.1);
}
nav {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 2;
  transition: all 0.2s ease-out;
  li {
    display: inline-block;
    padding: 10px;
    margin: 0 10px;
    font-size: 20px;
    &.active {
      font-weight: 800;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
}
.brand {
  position: absolute;
  left: 20px;
  top: 50%;
  width: auto;
  height: $headerHeight / 1.4;
  transform: translateY(-50%);
  z-index: 3;
  img {
    height: 100%;
    width: auto;
  }
}
$hamburger-padding-x: 0;
$hamburger-padding-y: 0;
$hamburger-layer-width: 45px;
$hamburger-layer-height: 3px;
$hamburger-layer-spacing: 8px;
$hamburger-layer-color: #fff;
$hamburger-layer-border-radius: 0;
$hamburger-hover-opacity: 0.7;
$hamburger-hover-transition-duration: 0.15s;
$hamburger-hover-transition-timing-function: linear;
@import "~/assets/scss/components/hamburgers/hamburgers.scss";
.hamburger {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  height: 45px;
  width: 45px;
  border: none;
  z-index: 4;
  display: none;
}
@include breakpoint(mobile) {
  nav {
    transform: translateY(0%);
    transform: translateX(100%);
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba($black, 0.8);
    #navMenu {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    li {
      display: block;
      font-size: 4.5vh;
      padding: 20px;
    }
  }
  .hamburger {
    display: block;
  }
  .navOpen {
    nav {
      transform: translateX(0%);
    }
  }
}
</style>
