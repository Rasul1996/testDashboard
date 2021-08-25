<template>
  <div class="box">
    <h3 class="fs-3 ff-bold" style="font-size: 20px">
      {{ $t("numberStatementsRegion") }}
    </h3>
    <ul class="data-table">
      <li class="data-item" v-for="item of items" :key="item.id">
        <span class="item-key">{{ item.key }}</span>
        <div class="item-progress">
          <div
            :style="`width: ${item.percent}%`"
            style="height: 8px"
            class="data-progress"
          ></div>
        </div>
        <span class="item-value" style="text-align: end">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  margin-top: 1.1em;

  .data-item {
    .data-progress {
      background-image: linear-gradient(
        to right,
        rgba(93, 202, 237, 0.2),
        #5dcaed
      );
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    &:nth-child(odd) {
      background-color: var(--primary);
    }

    .item-key {
      width: 20%;
    }

    .item-progress {
      width: 70%;
    }

    .item-value {
      width: 10%;
    }

    @media (max-width: 2700px) {
      .item-key {
        width: 25%;
      }

      .item-progress {
        width: 65%;
      }

      .item-value {
        width: 10%;
      }
    }

    @media (max-width: 2500px) {
      .item-key {
        width: 30%;
      }

      .item-progress {
        width: 60%;
      }

      .item-value {
        width: 10%;
      }
    }

    @media (max-width: 2000px) {
      .item-key {
        width: 33%;
      }

      .item-progress {
        width: 57%;
      }

      .item-value {
        width: 10%;
      }
    }
  }
}
</style>
