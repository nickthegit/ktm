<template>
  <div class="services__grid-wrapper contained">
    <article class="services">
      <h2>
        <b>Gallery</b>
        <br>TOP QUALITY WORK AT COMPETITIVE PRICES AND ALWAYS MEETING THE CUSTOMERS DEMANDS
      </h2>
      <!-- <h2>{{ mappedServices }}</h2> -->
    </article>
    <aside class="gallery">
      <main>
        <swiper :images="galleryImages"/>
      </main>
    </aside>
  </div>
</template>

<script>
import swiper from "./swiper.vue";
export default {
  name: "services",
  components: {
    swiper
  },
  data() {
    return {
      services: [
        "Drainage",
        "Concreting",
        "Resin Bound Surfacing",
        "Tarmacking",
        "Driveways and Trackways",
        "Foundations Excavations etc",
        "Landscaping",
        "Bulk Excavations"
      ],
      galleryImages: [
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849550/ktm/img_1011.jpg",
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849603/ktm/img_0933.jpg",
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849665/ktm/img_0848.png",
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849617/ktm/img_0929.jpg",
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849560/ktm/img_1134.jpg",
        "https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849584/ktm/img_0957.png"
      ]
    };
  },
  computed: {
    mappedServices: function() {
      var services = this.services;
      var servicesArray = services.map(function(personObj) {
        if (services[services.length - 1] == personObj) {
          return personObj;
        } else if (services[services.length - 2] == personObj) {
          return personObj + " &";
        } else {
          return personObj + ",";
        }
      });
      return servicesArray.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/base/_variables.scss";
@import "~/assets/scss/base/_mediaquery.scss";

.services__grid-wrapper {
  // background: darkkhaki;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: $headerHeight fit-content(30%) fit-content(30%) auto;
  overflow: hidden;
}
article {
  // background: hotpink;
  grid-column: 2 / 8;
  grid-row: 3 / 4;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  h2 {
    font-size: 3vh;
    line-height: 3.4vh;
    display: block;
    padding-bottom: 10px;
    display: inline-block;
    b {
      font-weight: 600;
    }
  }
}
// 16:9 1920x1080
aside {
  grid-column: 2 / 8;
  grid-row: 4 / 5;
  position: relative;
  align-self: center;
  main {
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
  }
}
@include breakpoint(tablet-mobile) {
  article {
    padding: 60px;
    grid-column: 1 / 9;
  }
  aside {
    grid-column: 1 / 9;
  }
}
@include breakpoint(mobile) {
  article {
    padding: 40px;
    h2 {
      font-size: 20px;
      line-height: 23px;
    }
  }
}
</style>
