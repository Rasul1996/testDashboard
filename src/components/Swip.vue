<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
