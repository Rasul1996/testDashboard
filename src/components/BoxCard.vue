<template>
  <div class="box box-card">
    <span class="ff-medium">{{ title }}</span>
    <h3 class="ff-bold mt-2">
      {{ $formatNumber(value) }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  span {
    font-size: 20px;
  }

  h3 {
    font-size: 48px;
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
