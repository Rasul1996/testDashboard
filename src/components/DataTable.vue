<template>
  <div class="box">
    <div class="box-title" style="font-size: 20px">
      {{ title }}
    </div>
    <div class="swiper target77">
      <ul class="swiper-wrapper data-table" style="margin-top: 18px">
        <li class="swiper-slide" v-for="item of items" :key="item.id">
          <span class="item-key">{{ item.key }}</span>
          <div class="item-progress">
            <div
              :style="`width: ${item.percent}%`"
              style="height: 8px"
              class="data-progress"
            ></div>
          </div>
          <span class="item-value" style="text-align: end">{{
            item.value
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.initSwiper1();
  },
  methods: {
    initSwiper1() {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(".target77", {
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
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  min-height: 378px;
  .data-item {
    .data-progress {
      background-image: linear-gradient(
        to right,
        rgba(93, 202, 237, 0.2),
        #5dcaed
      );
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 16px;
    &:nth-child(odd) {
      background-color: var(--primary);
    }

    .item-key {
      width: 20%;
    }

    .item-progress {
      width: 70%;
    }

    .item-value {
      width: 10%;
    }

    @media (max-width: 2700px) {
      .item-key {
        width: 25%;
      }

      .item-progress {
        width: 65%;
      }

      .item-value {
        width: 10%;
      }
    }

    @media (max-width: 2500px) {
      .item-key {
        width: 30%;
      }

      .item-progress {
        width: 60%;
      }

      .item-value {
        width: 10%;
      }
    }

    @media (max-width: 2000px) {
      .item-key {
        width: 33%;
      }

      .item-progress {
        width: 57%;
      }

      .item-value {
        width: 10%;
      }
    }
  }
}
</style>
