<template>
  <div class="info-card" :style="`background-color: ${color}`">
    <h4 class="ff-medium" style="font-size: 20px; width: 75%">{{ title }}</h4>
    <div class="card-content">
      <span class="ff-bold">{{ info }}</span>
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

  .card-content {
    margin-top: 0.7em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 48px;
    }

    @media (max-width: 2500px) {
      span {
        font-size: 36px;
      }

      img {
        width: 70px;
      }
    }

    @media (max-width: 2000px) {
      flex-wrap: wrap;
      span {
        font-size: 28px;
      }

      img {
        width: 65px;
      }
    }

    @media (max-width: 1500px) {
      span {
        font-size: 22px;
      }

      img {
        width: 60px;
      }
    }
  }
}
</style>
