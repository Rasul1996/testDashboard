<template>
  <div
    class="sub-info-card flex justify-between align-center"
    :style="`background-color: ${color}`"
  >
    <div class="lhs flex align-center">
      <span class="sub-index ff-open-sans-bold">{{ index }}</span>
      <span class="sub-title ff-open-sans">{{ title }}</span>
    </div>
    <span class="sub-info ff-open-sans-bold">{{ $formatNumber(info) }}</span>
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
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 8px;

  .lhs {
    span:last-child {
      margin-left: 35px;
    }
  }

  @media (max-width: 2700px) {
    font-size: 17px;

    .lhs {
      span:last-child {
        margin-left: 31px;
      }
    }
  }

  @media (max-width: 2500px) {
    font-size: 17px;

    .lhs {
      span:last-child {
        margin-left: 26px;
      }
    }
  }

  @media (max-width: 2000px) {
    font-size: 16px;

    .lhs {
      span:last-child {
        margin-left: 24px;
      }
    }
  }

  @media (max-width: 1800px) {
    font-size: 15px;

    .lhs {
      span:last-child {
        margin-left: 20px;
      }
    }
  }
}
</style>
