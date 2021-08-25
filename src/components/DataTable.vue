<template>
  <div class="box">
    <div class="box-title" style="font-size: 20px">
      {{ $t('numberStatementsRegion') }}
    </div>
    <ul class="data-table">
      <li class="data-item" v-for="item of items" :key="item.id">
        <span style="width: 20%">{{ item.key }}</span>
        <div style="width: 70%">
          <div
            :style="`width: ${item.percent}%`"
            style="height: 8px"
            class="data-progress"
          ></div>
        </div>
        <span style="width: 10%; text-align: end">{{ item.value }}</span>
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
  }
}
</style>
