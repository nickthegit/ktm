<template>
  <div class="contact-wrapper">
    <!-- <section class="form-wrap">
      <form
        name="ktm-contact"
        method="POST"
        netlify-honeypot="bot-field"
        action="/thanks.html"
        netlify
      >
        <input type="hidden" name="form-name" value="ktm-contact">
        <p class="hidden-input">
          <label>Don’t fill this out if you're human:
            <input name="bot-field">
          </label>
        </p>
        <label>Name:
          <input type="text" name="name" required>
        </label>
        <label>Email:
          <input type="email" name="email">
        </label>
        <label>Telephone:
          <input type="tel" name="tel">
        </label>
        <label>Location:
          <input type="text" name="location">
        </label>
        <label>Description of work:
          <textarea name="message"></textarea>
        </label>
        <div data-netlify-recaptcha></div>
        <button class="btn" type="submit">SEND</button>
      </form>
    </section>-->
    <section class="contact-wrap">
      <div>
        <h1>Contact Info</h1>
        <a href="tel:01963363822">01963 363822</a>
        <a href="mailto:Ktmfabrications@Gmail.Com">ktmfabrications@gmail.com</a>
        <address>Gibbs Marsh Trading Estate,
          <br>Henstridge, Somerset BA8 0TN
        </address>
        <a
          href="https://www.google.co.uk/maps/place/K+T+M+Fabrications/@50.981629,-2.3587669,15z/data=!4m5!3m4!1s0x0:0x5d1757aa6c9029e3!8m2!3d50.981629!4d-2.3587669"
          style="text-decoration: underline;"
        >Map</a>
        <!-- <h1>Follow Us</h1>
        <a href="https://www.facebook.com/tompaulleygroundworks/">
          <svg viewBox="0 0 24 24">
            <path
              d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.5v-9.3H9.7v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1V7h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.6h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3"
            ></path>
          </svg>
        </a>-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss">
@import "~/assets/scss/base/_variables.scss";
@import "~/assets/scss/base/_mediaquery.scss";

.hidden-input {
  display: none;
}

.contact-wrapper {
  // padding-top: $headerHeight;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
}
.contact-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  box-sizing: border-box;
  div {
    width: 100%;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 10px 0;
  }
  h2,
  a,
  address {
    font-size: 20px;
    line-height: 24px;
    display: block;
    padding: 10px 0;
    text-decoration: none;
  }
  //   a {
  //     width: 40px;
  //     height: 40px;
  //     display: block;
  //   }
  svg {
    width: 100%;
    fill: white;
  }
}
// .form-wrap {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   max-width: 720px;
//   grid-column: 1 / 2;
//   grid-row: 1 / 2;
//   justify-self: end;
//   display: flex;
//   align-items: center;
//   text-align: left;
//   justify-content: flex-end;
//   box-sizing: border-box;
//   padding: 40px;
// }
// form {
//   display: inline-block;
//   max-width: 720px;
// }
// label {
//   display: block;
//   width: 100%;
//   padding: 5px 0;
// }
// input,
// textarea {
//   margin: 5px 0;
//   display: block;
//   width: 100%;
//   min-width: 500px;
//   max-width: 720px;
//   padding: 10px;
//   border: none;
//   box-sizing: border-box;
//   font-size: 16px;
//   background: transparent;
//   border-bottom: 2px solid $white;
//   color: $white;
//   @include breakpoint(tablet) {
//     min-width: 300px;
//   }
// }
// .btn {
//   display: block;
//   padding: 10px;
//   font-size: 16px;
//   font-weight: 600;
//   border: none;
//   background: #008cba;
//   color: $white;
//   width: 100%;
//   max-width: 280px;
//   min-width: 140px;
//   position: absolute;
//   right: 40px;
//   margin-top: 20px;
// }
@include breakpoint(mobile) {
  .contact-wrapper {
    padding: 40px 0;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
  .contact-wrap {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 40px;
    height: auto;
    position: relative;
  }
  .form-wrap {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: auto;
    position: relative;
    justify-content: center;
  }
  form {
    width: 100%;
  }
  input,
  textarea {
    min-width: 100%;
    width: 100%;
  }
}
</style>
