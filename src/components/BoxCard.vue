<template>
  <div class="box">
    <h3 class="box-title">{{ title }}</h3>
    <div class="box-value" style="margin-top: 13px">
      {{ $formatNumber(value) }}
    </div>
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
