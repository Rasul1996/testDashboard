<template>
  <div class="box">
    <h3 class="box-title">Единый биллинг</h3>
  </div>

  <div class="box-cards">
    <BoxCard
      class="single-box-card"
      title="Общее количество транзакций"
      :value="2412314"
    />
    <BoxCard
      class="single-box-card"
      title="Общее сумма транзакций"
      :value="4212314"
    />
    <BoxCard
      class="single-box-card"
      title="Количество транзакций сегодня"
      :value="54314"
    />
    <BoxCard
      class="single-box-card"
      title="Сумма транзакций сегодня"
      :value="31544"
    />
  </div>
</template>

<script>
import BoxCard from "./BoxCard.vue";
export default {
  components: {
    BoxCard,
  },
};
</script>

<style lang="scss" scoped>
.box-cards {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .single-box-card {
    flex-grow: 1;
    width: 40%;
  }
}
</style>
