<template>
  <div class="box box-card">
    <span class="ff-medium">{{ title }}</span>
    <h3 class="ff-bold mt-2" :id="`number${id}`">
      {{ $formatNumber(value) }}
    </h3>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countUp: null,
    };
  },
  mounted() {
    this.countUp = new CountUp(`number${this.id}`, this.value, {
      separator: " ",
    });
    this.countUp.start();
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  span {
    font-size: 18px;
  }

  h3 {
    font-size: 36px;
  }

  // @MEDIA
  @media (max-width: 2500px) {
    span {
      font-size: 14px;
    }

    h3 {
      font-size: 24px;
    }
  }
}
</style>
