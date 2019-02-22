<template>
  <div id="app">
    <navigation/>
    <div>
      <div class="bkg-fixed">
        <div class="blurs"></div>
        <div class="mainBkg"></div>
        <div class="overlay"></div>
      </div>
      <section class="section hero">
        <a id="home"></a>
        <div class="home-wrapper">
          <h1 class="rellax" data-rellax-speed="4">{{ hero.title }}</h1>
          <h2 class="rellax" data-rellax-speed="5">{{ hero.strapline }}</h2>
        </div>
      </section>

      <section id="about" class="section about">
        <a id="about"></a>
        <div class="about__copy-wrap">
          <h4>Whet we do</h4>
          <h2>OUR CE APPROVED, HIGHLY SKILLED TEAM ARE EXPERTS IN STEEL FABRICATION, ENGINEERING AND PLASMA CUTTING.</h2>
          <p>Welcome to KTM Fabrications, based in Henstridge, Somerset, our area of expertise include: Fabricators, Welders , Airless Painting, Plasma Cutting, General Metal Work & Steel Frame Buildings.</p>
        </div>
        <div class="about__icons-wrap">
          <div
            class="icon"
            style="background-image: url('https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_200/v1550849846/ktm/mask.png');"
          ></div>
          <div
            class="icon"
            style="background-image: url('https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_200/v1550849828/ktm/flame.png');"
          ></div>
          <div
            class="icon"
            style="background-image: url('https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_200/v1550849813/ktm/temp.png');"
          ></div>
          <div
            class="icon"
            style="background-image: url('https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_200/v1550849787/ktm/flamebound.png');"
          ></div>
        </div>
      </section>

      <section id="gallery" class="section services">
        <a id="gallery"></a>
        <services/>
      </section>

      <section id="contact" class="section">
        <a id="contact"></a>
        <contact/>
      </section>
    </div>
  </div>
</template>

<script>
import navigation from "~/components/navigation.vue";
import services from "~/components/services.vue";
import contact from "~/components/contact.vue";

import TweenMax from "gsap";

export default {
  name: "app",
  components: {
    navigation,
    services,
    contact
  },
  data() {
    return {
      hero: {
        image:
          "https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_1920,h_1080/v1550849428/ktm/ktm-header.jpg",
        title: "KTM WELDING & FABRICATIONS",
        strapline: "Steel Fabrication & CNC Plasma Cutting"
      }
    };
  },
  mounted() {
    if (process.browser) {
      // Rellax
      var Rellax = require("rellax");
      var rellax = new Rellax(".rellax");
      // Waypoints
      require("waypoints/lib/noframework.waypoints.min");
      var waypointToServices = new Waypoint({
        element: document.getElementById("about"),
        handler: function(direction) {
          if (direction == "down") {
            TweenMax.to(".mainBkg", 0.5, { autoAlpha: 0 });
            TweenMax.to(".blurs", 0.1, { autoAlpha: 0 });
          } else {
            TweenMax.to(".mainBkg", 0.5, { autoAlpha: 1 });
            TweenMax.to(".blurs", 0.5, { autoAlpha: 1 });
          }
        },
        offset: "35%"
      });
      var waypointToServices = new Waypoint({
        element: document.getElementById("gallery"),
        handler: function(direction) {
          if (direction == "down") {
            TweenMax.to(".blurs", 0.5, { autoAlpha: 1 });
          } else {
            TweenMax.to(".blurs", 0.5, { autoAlpha: 0 });
          }
        },
        offset: "35%"
      });
      var waypointToContact = new Waypoint({
        element: document.getElementById("contact"),
        handler: function(direction) {
          if (direction == "down") {
            TweenMax.to(".blurs", 0.5, { autoAlpha: 0 });
          } else {
            TweenMax.to(".blurs", 0.5, { autoAlpha: 1 });
          }
        },
        offset: "30%"
      });
      // Smooth scroll
      var SmoothScroll = require("smooth-scroll");
      var scroll = new SmoothScroll('a[href*="#"]');
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/base/_variables.scss";
@import "~/assets/scss/base/_reset.scss";
@import "~/assets/scss/elements/_structure.scss";
@import "~/assets/scss/base/_mediaquery.scss";

.bkg-fixed {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -2;
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .overlay {
    background: rgba($black, 0.3);
    z-index: 10;
  }
  .mainBkg {
    background-image: url("https://res.cloudinary.com/nickjohn/image/upload/c_fill,q_auto,w_1920,h_1080/v1550849428/ktm/ktm-header.jpg");
    z-index: 5;
  }
}

section {
  &.section {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
}

.hero {
  position: relative;
  .home-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 44px;
    line-height: 50px;
    font-weight: 400;
    letter-spacing: 5px;
    width: 100%;
    max-width: 1000px;
    padding-top: 40px;
    position: relative;
    z-index: 1;
  }
  h2 {
    font-size: 28px;
    line-height: 34px;
    font-weight: 200;
    width: 100%;
    max-width: 800px;
    position: relative;
    z-index: 1;
  }
  img {
    height: 32%;
    width: auto;
    position: relative;
    z-index: 2;
  }
  @include breakpoint(mobile) {
    h1 {
      font-size: 28px;
      line-height: 34px;
    }
    h2 {
      padding-top: 20px;
      font-size: 24px;
      line-height: 28px;
    }
    img {
      width: 50%;
      height: auto;
    }
  }
}

.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 40px;
  h4 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    color: $primary;
  }
  h2 {
    padding: 10px 0;
    font-size: 28px;
    line-height: 34px;
    font-weight: 200;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    // font-weight: 200;
  }
  &__copy-wrap {
    max-width: 700px;
  }
  &__icons-wrap {
    max-width: 700px;
    width: 100%;
    display: grid;
    grid-template: auto / 25% 25% 25% 25%;
    padding: 20px 0;
    .icon {
      width: 80%;
      margin: 0 auto;
      height: 0;
      position: relative;
      padding-bottom: 100%;
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>


