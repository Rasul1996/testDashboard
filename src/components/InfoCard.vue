<template>
  <div class="info-card" :style="`background-color: ${color}`">
    <h4 class="card-title">{{ title }}</h4>
    <div class="card-content">
      <span>{{ info }}</span>
      <img :src="require(`@/assets/images/${icon}`)" alt="" />
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
    info: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
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
.info-card {
  padding: 12px;
  border-radius: 8px;

  .card-title {
    font-family: "open-sans" !important;
  }

  .card-content {
    margin-top: 0.7em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3rem;
  }
}
</style>
