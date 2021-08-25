<template>
  <div class="box data-box" :style="{ background: color }">
    <div class="data-title">{{ title }}</div>
    <img class="data-img" :src="require(`@/assets/images/${logo}`)" alt="" />
    <div class="data-value">{{ $formatNumber(value) }}</div>
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
    font-size: 1.2rem;
    font-family: "inter" !important;
  }

  .data-img {
    margin-right: 20px;
  }

  .data-value {
    white-space: nowrap;
    font-size: 3rem;
    color: var(--white);
    font-family: "inter-bold" !important;
    text-align: end;
  }
}
</style>
