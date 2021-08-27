<template>
  <div class="box" style="min-height: 347px">
    <div class="info-cards">
      <InfoCard
        class="single-card"
        :title="$t('implemented')"
        info="783"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('during')"
        info="112"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('notStarted')"
        info="526"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>
    <div class="sub-info-cards mt-2">
      <div class="swiper target1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of activeItems" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.region} ${item.district}`"
              :info="item.rating"
              :color="`rgba(82, 190, 128, 0.${
                10 - Math.round(item.rating / 10)
              })`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target2" style="margin-top: 2px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of dangerItems" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.region} ${item.district}`"
              :info="item.rating"
              :color="`rgba(239, 121, 121, 0.${
                10 - Math.round(item.rating / 10)
              })`"
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.initSwiper();
      this.initSwiper2();
    }, 200);

    console.log(this.activeItems);
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target1", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    },
    initSwiper2() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target2", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
    margin-top: 4px;
  }
}
</style>
