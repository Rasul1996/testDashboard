<template>
  <div class="box">
    <h3 class="box-title">{{ $t("unifiedBilling") }}</h3>
  </div>

  <div class="box-cards">
    <BoxCard
      class="single-box-card"
      :title="$t('totalCountTransactions')"
      :value="2412314"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('numberTransactionsToday')"
      :value="4212314"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('totalAmountTransactions')"
      :value="54314"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('amountTransactionsToday')"
      :value="31544"
    />
  </div>
</template>

<script>
import BoxCard from "../BoxCard.vue";
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
