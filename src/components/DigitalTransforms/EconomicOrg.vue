<template>
  <div>
    <div class="info-cards">
      <InfoCard
        class="single-card"
        :title="$t('implemented')"
        :info="195"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('during')"
        :info="228"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('notStarted')"
        :info="23"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>
    <div class="sub-info-cards">
      <p style="text-align: center; font-size: 20px" class="mt-2">
        Давлат ва хўжалик органларининг рақамлаштириш рейтинги
      </p>

      <div class="swiper target5 mt-2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of active" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="item.label"
              :info="item.value"
              :color="`rgba(82, 190, 128, 0.${
                10 - Math.round(item.value / 10)
              })`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target6" style="margin-top: 2px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of warning" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.label}`"
              :info="item.value"
              :color="`rgba( 247, 220, 111 , 0.${
                10 - Math.round(item.value / 10)
              })`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target4" style="margin-top: 2px">
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
    </div>
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
      warning: ratings.filter((item) => !item.status),
    };
  },
  mounted() {
    this.initSwiper1();
    this.initSwiper2();
    this.initSwiper3();
  },
  methods: {
    initSwiper1() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target5", {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
      });
    },
    initSwiper2() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target4", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
      });
    },
    initSwiper3() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target6", {
        slidesPerView: 2,
        direction: "vertical",
        slidesPerGroup: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 7500,
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
    margin-top: 5px;
  }
}
</style>
