<template>
  <div class="info-card" :style="`background-color: ${color}`">
    <h4 class="ff-medium card-title">{{ title }}</h4>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-title {
    font-size: 18px;
    width: 75%;
  }

  .card-content {
    margin-top: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 36px;
    }
  }

  @media (max-width: 2500px) {
    .card-title {
      font-size: 16px;
    }

    .card-content {
      span {
        font-size: 24px;
      }

      img {
        width: 26px;
      }
    }
  }

  @media (max-width: 2000px) {
    .card-title {
      font-size: 14px;
    }

    .card-content {
      span {
        font-size: 16px;
      }

      img {
        width: 18px;
      }
    }
  }
}
</style>
