<template>
  <div class="box">
    <h3 class="box-title">{{ $t("unifiedBilling") }}</h3>
  </div>

  <div class="box-cards">
    <BoxCard
      class="single-box-card"
      :title="$t('totalCountTransactions')"
      :value="allTransaction"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('numberTransactionsToday')"
      :value="todayTransaction"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('totalAmountTransactions')"
      :value="allSoumTransaction"
    />
    <BoxCard
      class="single-box-card"
      :title="$t('amountTransactionsToday')"
      :value="todaySoumTransaction"
    />
  </div>
</template>

<script>
import BoxCard from "../BoxCard.vue";
export default {
  components: {
    BoxCard,
  },
  data() {
    return {
      allTransaction: 12451363,
      allSoumTransaction: 1492885469785,
      todayTransaction: 11556,
      todaySoumTransaction: 156265658,
    };
  },

  mounted() {
    this.calculate();
  },

  methods: {
    calculate() {
      setTimeout(() => {
        const a = this.$randomInteger(10, 20);
        const b = this.$randomInteger(200_000, 800_000);

        this.allTransaction += a;
        this.allSoumTransaction += b;

        this.todayTransaction += a;
        this.todaySoumTransaction += b;
      }, 15000);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-cards {
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .single-box-card {
    flex-grow: 1;
    width: 40%;
  }
}
</style>
