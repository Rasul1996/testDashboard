<template>
  <div class="sub-info-card" :style="`background-color: ${color}`">
    <div class="lhs">
      <span class="sub-index">{{ index }}</span>
      <span class="sub-title">{{ title }}</span>
    </div>
    <span class="sub-info">{{ $formatNumber(info) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-info-card {
  padding: 15px 10px;
  border-radius: 8px;

  font-size: 1.15rem;

  .sub-index,
  .sub-info {
    font-family: "open-sans-bold" !important;
  }

  .sub-title {
    font-family: "open-sans" !important;
    margin-left: 3rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
