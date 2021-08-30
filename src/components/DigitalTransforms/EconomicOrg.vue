<template>
  <div>
    <div class="sub-info-cards">
      <p style="font-size: 20px" class="mt-2">
        Хўжалик органларининг рақамлаштириш рейтинги
      </p>

      <div class="swiper target5 mt-2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of active" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="item.label"
              :info="item.value"
              :color="`rgba(39, 174, 96, 0.75)`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target6" style="margin-top: 5px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of warning" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="`${item.label}`"
              :info="item.value"
              :color="`rgba(242, 153, 74, 0.75)`"
            />
          </div>
        </div>
      </div>
      <div class="swiper target4" style="margin-top: 5px">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of danger" :key="item.id">
            <SubInfoCard
              class="single-sub-card"
              :index="item.id"
              :title="item.label"
              :info="item.value"
              :color="`rgba(235, 87, 87, 0.75)`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubInfoCard from "@/components/SubInfoCard.vue";
import ratings from "@/ecoratings.json";
/* eslint-disable no-undef */
export default {
  components: {

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
        spaceBetween: 5,
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
        spaceBetween: 5,
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
        spaceBetween: 5,
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
