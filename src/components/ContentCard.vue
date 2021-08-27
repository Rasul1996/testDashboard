<template>
  <div class="box content-box" :style="{ background: color }">
    <span class="ff-medium">{{ title }}</span>
    <h3 class="ff-bold">{{ $formatNumber(value) }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "var(--secondary)",
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    width: 55%;
    font-size: 20px;
  }

  h3 {
    width: 45%;
    text-align: end;
    font-size: 42px;
  }

  // MEDIA
  @media (max-width: 2500px) {
    span {
      width: 52% !important;
      font-size: 18px;
    }

    h3 {
      width: 47% !important;
      font-size: 32px;
    }
  }

  @media (max-width: 2000px) {
    span {
      width: 54%;
      font-size: 17px;
    }

    h3 {
      width: 45%;
      font-size: 26px;
    }
  }

  @media (max-width: 1500px) {
    span {
      width: 44%;
      font-size: 16px;
    }

    h3 {
      width: 55%;
      font-size: 22px;
    }
  }
}
</style>
