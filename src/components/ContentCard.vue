<template>
  <div class="box content-box" :style="{ background: backgroundColor }">
    <div class="content-title">{{ title }}</div>
    <div class="content-value">{{ $formatNumber(value) }}</div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "var(--secondary)"
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
  width: 100%;
  display: flex;
  align-items: center;


  .content-title {
    width: 50%;
    font-size: 1.2rem;
    font-family: "inter" !important;
  }

  .content-value {
    width: 50%;
    font-size: 3rem;
    color: var(--white);
    font-family: "inter-bold" !important;
    text-align: end;
  }
}
</style>
