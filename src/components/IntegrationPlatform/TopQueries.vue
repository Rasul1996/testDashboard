<template>
  <div class="box">
    <h3 class="box-title">{{ $t("top5Recipients") }}</h3>
    <ul class="top-info">
      <li class="info-item" v-for="(item, index) of items" :key="item.id">
        <div class="info-key">
          <span> {{ index + 1 }} </span>
          <span> {{ item.key }} </span>
        </div>
        <span class="info-data"> {{ item.value }} </span>
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
.top-info {
  margin-top: 1.1em;
  .info-item {
    display: flex;
    justify-content: space-between;
    padding: 13px 12px;
    font-size: 1.1em;

    .info-key {
      span:first-child {
        font-family: "open-sans-bold" !important;
      }
      span:last-child {
        margin-left: 2.225em;
        font-family: "open-sans" !important;
      }
    }

    .info-data {
      font-family: "open-sans-bold" !important;
    }

    &:nth-child(odd) {
      background-color: var(--primary);
    }
  }
}
</style>
