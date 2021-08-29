<template>
  <div class="box" style="min-height: 347px">
    <div class="info-cards">
      <InfoCard
        :id="1"
        class="single-card"
        :title="$t('implemented')"
        :info="1169"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        :id="2"
        class="single-card"
        :title="$t('during')"
        :info="428"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        :id="3"
        class="single-card"
        :title="$t('notStarted')"
        :info="47"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>

    <p style="text-align: center; font-size: 20px" class="mt-2">
      Ҳудудларнинг рақамлаштириш рейтинги
    </p>

    <div class="sub-info-cards mt-2">
      <div class="swiper target1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of activeItems" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.region} ${item.district}`"
              :info="item.rating"
              :color="`rgba(39, 174, 96, 0.75)`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target3" style="margin-top: 5px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of warningItems" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.region} ${item.district}`"
              :info="item.rating"
              :color="`rgba(242, 153, 74, 0.75)`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target2" style="margin-top: 5px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of dangerItems" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.region} ${item.district}`"
              :info="item.rating"
              :color="`rgba(235, 87, 87, 0.75)`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import SubInfoCard from "@/components/SubInfoCard.vue";

  // import { Swiper, SwiperSlide } from 'swiper/vue/swiper.js';

  // Import Swiper styles
  // import 'swiper/css';
/* eslint-disable no-undef */

import regions from "@/regions.json";

export default {
  components: {
    InfoCard,
    SubInfoCard,
  },
  data() {
    return {
      activeItems: regions.filter((item) => item.status === 1),
      dangerItems: regions.filter((item) => item.status === 3),
      warningItems: regions.filter((item) => !item.status),
    };
  },
  mounted() {
    setTimeout(() => {
      this.initSwiper();
      this.initSwiper2();
      this.initSwiper3();
    }, 200);
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target1", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 5,
        loop: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
      });
    },
    initSwiper2() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target2", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 5,
        loop: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
      });
    },
    initSwiper3() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target3", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 5,
        loop: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
      });
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 96px;
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
    margin-top: 4px;
  }
}
</style>
