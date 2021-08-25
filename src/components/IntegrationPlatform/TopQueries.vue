<template>
  <div class="box">
    <h3 class="fs-3 ff-bold">{{ $t("top5Recipients") }}</h3>
    <ul class="top-info">
      <li class="info-item" v-for="(item, index) of items" :key="item.id">
        <div class="info-key">
          <span class="ff-open-sans-bold"> {{ index + 1 }} </span>
          <span class="ff-open-sans" style="margin-left: 1em">
            {{ item.key }}
          </span>
        </div>
        <span class="info-data ff-open-sans-bold"> {{ item.value }} </span>
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
    font-size: 18px;

    &:nth-child(odd) {
      background-color: var(--primary);
    }

    @media (max-width: 2500px) {
      font-size: 17px;
    }
    @media (max-width: 2000px) {
      font-size: 16px;
    }
    @media (max-width: 1800px) {
      font-size: 15px;
    }
  }
}
</style>
