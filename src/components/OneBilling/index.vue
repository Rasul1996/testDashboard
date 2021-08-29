<template>
  <div class="box">
    <h3 class="box-title">{{ $t("unifiedBilling") }}</h3>
  </div>

  <div class="box-cards mt-1">
    <BoxCard
      :id="1"
      class="single-box-card"
      :title="$t('totalCountTransactions')"
      :value="allTransaction"
      ref="box-1"
    />
    <BoxCard
      :id="2"
      class="single-box-card"
      :title="$t('numberTransactionsToday')"
      :value="todayTransaction"
      ref="box-2"
    />
    <BoxCard
      :id="3"
      class="single-box-card"
      :title="$t('totalAmountTransactions')"
      :value="allSoumTransaction"
      ref="box-3"
    />
    <BoxCard
      :id="4"
      class="single-box-card"
      :title="$t('amountTransactionsToday')"
      :value="todaySoumTransaction"
      ref="box-4"
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
      setInterval(() => {
        const a = this.$randomInteger(10, 20);
        const b = this.$randomInteger(200_000, 800_000);

        this.allTransaction += a;
        this.allSoumTransaction += b;

        this.todayTransaction += a;
        this.todaySoumTransaction += b;

        this.$refs["box-1"].countUp.update(this.allTransaction);
        this.$refs["box-2"].countUp.update(this.todayTransaction);
        this.$refs["box-3"].countUp.update(this.allSoumTransaction);
        this.$refs["box-4"].countUp.update(this.todaySoumTransaction);
      }, 6 * 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  .single-box-card {
    flex-grow: 1;
    width: 40%;
  }
}
</style>
