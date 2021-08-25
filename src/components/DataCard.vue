<template>
  <div class="box data-box" :style="{ background: color }">
    <div class="ff-medium data-title">{{ title }}</div>
    <img class="data-img" :src="require(`@/assets/images/${logo}`)" alt="" />
    <div class="ff-bold data-value">{{ $formatNumber(value) }}</div>
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
    logo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.data-box {
  display: flex;
  align-items: center;
  padding: 14px 20px !important;
  justify-content: space-between;

  .data-title {
    font-size: 20px;
  }

  .data-img {
    margin: 0 10px;
  }

  .data-value {
    white-space: nowrap;
    font-size: 48px;
    text-align: end;
  }

  @media (max-width: 2500px) {
    .data-title {
      font-size: 19px;
    }

    .data-value {
      font-size: 36px;
    }
  }
  @media (max-width: 2000px) {
    flex-wrap: wrap !important;
    .data-img {
      margin: 0;
    }
    .data-title {
      font-size: 18px;
    }

    .data-value {
      font-size: 28px;
    }
  }
  @media (max-width: 1500px) {
    .data-title {
      font-size: 16px;
    }

    .data-value {
      font-size: 22px;
    }
  }
}
</style>
