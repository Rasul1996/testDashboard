<template>
  <div class="box">
    <div class="box-title" style="font-size: 20px">
      {{ title }}
    </div>
    <!-- <div class="swiper target1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of sortedItems" :key="item.id">
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div> -->
    <div
      class="swiper mt-1"
      :class="`target${this.id} ${slidesPerView == 10 ? '' : 'swiper-big'}`"
    >
      <ul class="swiper-wrapper data-table" style="margin-top: 18px">
        <li
          class="data-item swiper-slide"
          v-for="item of sortedItems"
          :key="item.id"
        >
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
    slidesPerView: {
      type: Number,
      default: 10,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    sortedItems() {
      const newItems = this.items;
      return newItems.sort((a, b) => {
        return a.percent >= b.percent;
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(`.target${this.id}`, {
        slidesPerView: this.slidesPerView,
        direction: "vertical",
        spaceBetween: 0,
        autoplay: {
          delay: 8000,
          disableOnInteraction: true,
        },
      });
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 610px !important;
}

.swiper-big {
  height: 695px !important;
}

.swiper-wrapper {
  margin-top: 0px !important;
}
</style>

<style lang="scss" scoped>
.data-table {
  min-height: 400px !important;
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
    padding: 0 16px;
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
