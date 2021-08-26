<template>
  <div
    class="sub-info-card flex justify-between align-center"
    :style="`background-color: ${color}`"
  >
    <div class="lhs flex align-center" style="width: 90%">
      <div class="sub-index ff-open-sans-bold" style="width: 10%">
        {{ index }}
      </div>
      <div class="sub-title ff-open-sans" style="width: 90%" :title="title">
        {{ title }}
      </div>
    </div>
    <div class="sub-info ff-open-sans-bold" style="width: 10%">
      {{ $formatNumber(info) }}
    </div>
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

  .sub-title {
    text-overflow: ellipsis;
    overflow: hidden;
    height: 1.2em;
    white-space: nowrap;
  }

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
