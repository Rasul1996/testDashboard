<template>
  <div class="box">
    <h3 class="box-title">{{ title }}</h3>
    <p class="box-value" style="margin-top: 1em">{{ $formatNumber(value) }}</p>
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

<style></style>
