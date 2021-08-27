<template>
  <div class="box">
    <div class="info-cards">
      <InfoCard
        class="single-card"
        :title="$t('implemented')"
        info="197"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('during')"
        info="154"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('notStarted')"
        info="132"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>
    <div class="swiper target3" style="margin-top: 1em">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of active" :key="item.id">
          <SubInfoCard
            class="single-sub-card"
            :index="item.id"
            :title="item.label"
            :info="item.value"
            :color="`rgba(82, 190, 128, 0.${10 - Math.round(item.value / 10)})`"
          />
        </div>
      </div>
    </div>
    <div class="swiper target4" style="margin-top: 10px">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of danger" :key="item.id">
          <SubInfoCard
            class="single-sub-card"
            :index="item.id"
            :title="item.label"
            :info="item.value"
            :color="`rgba(239, 121, 121, 0.${
              10 - Math.round(item.value / 10)
            })`"
          />
        </div>
      </div>
    </div>
    <div class="sub-info-cards"></div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import SubInfoCard from "@/components/SubInfoCard.vue";

import ratings from "@/ratings.json";
/* eslint-disable no-undef */
export default {
  components: {
    InfoCard,
    SubInfoCard,
  },
  data() {
    return {
      active: ratings.filter((item) => item.status === 1),
      danger: ratings.filter((item) => item.status === 3),
    };
  },
  mounted() {
    this.initSwiper1();
    this.initSwiper2();
  },
  methods: {
    initSwiper1() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target3", {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        // Optional parameters
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 7500,
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
    initSwiper2() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target4", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        // Optional parameters
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 7500,
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
  },
};
</script>

<style scoped>
.swiper {
  height: 90px;
}
</style>

<style lang="scss" scoped>
.box-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  .single-card {
    flex-grow: 1;
    width: 30%;
  }
}

.sub-info-cards {
  .single-sub-card {
    margin-top: 5px;
  }
}
</style>
