<template>
  <div class="box">
    <div class="box-info">
      <h3 class="box-title">Общее количество по территориям</h3>
      <span class="bold">1641</span>
    </div>
    <div class="info-cards" style="margin-top: 1.2em">
      <InfoCard
        class="single-card"
        title="Реализовано"
        info="783"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        class="single-card"
        title="В процессе"
        info="112"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        class="single-card"
        title="Не начато"
        info="526"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>
    <div class="sub-info-cards">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="1"
              title="Ташкентсткая область"
              :info="21331"
              color="rgba(82, 190, 128, 0.5)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="2"
              title="Бухарская область"
              :info="52342"
              color="rgba(82, 190, 128, 0.25)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="3"
              title="Ташкентсткая область"
              :info="4421"
              color="rgba(239, 121, 121, 0.25)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="4"
              title="Бухарская область"
              :info="3231"
              color="rgba(239, 121, 121, 0.5)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="1"
              title="Ташкентсткая область"
              :info="21331"
              color="rgba(82, 190, 128, 0.5)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="2"
              title="Бухарская область"
              :info="52342"
              color="rgba(82, 190, 128, 0.25)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="3"
              title="Ташкентсткая область"
              :info="4421"
              color="rgba(239, 121, 121, 0.25)"
            />
          </div>
          <div class="swiper-slide">
            <SubInfoCard
              class="single-sub-card"
              :index="4"
              title="Бухарская область"
              :info="3231"
              color="rgba(239, 121, 121, 0.5)"
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
export default {
  components: {
    InfoCard,
    SubInfoCard,
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(".swiper", {
      slidesPerView: 4,
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

<style scoped>
.swiper {
  height: 210px;
}
</style>

<style lang="scss" scoped>
.box-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 3rem;
  }
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
