<template>
  <div>
    <div class="box">
      <h3 class="box-title">
        {{ $t("interdepartmentalIntegrationPlatform") }}
      </h3>
    </div>

    <div class="flex mt-1">
      <div style="width: 31%; margin-right: 5px">
        <BoxCard
          ref="box-88"
          :id="77"
          :title="$t('numberResponces')"
          :value="todayQuery"
        />
        <BoxCard
          style="margin-top: 4px"
          :id="88"
          :title="$t('numberResponcesYesterday')"
          :value="yesterdayQuery"
        />
      </div>
      <div style="width: 69%">
        <TopQueries ref="topQuery" />
      </div>
    </div>
  </div>
</template>

<script>
import BoxCard from "../BoxCard.vue";
import TopQueries from "./TopQueries.vue";

export default {
  components: {
    BoxCard,
    TopQueries,
  },
  data() {
    return {
      todayQuery: 856349,
      yesterdayQuery: 7601322,
      queryValue: 0,
    };
  },
  mounted() {
    this.calculateTodayQuery();
  },
  methods: {
    calculateTodayQuery() {
      const time = new Date().getHours();

      if (time < 9) {
        this.todayQuery = 856349;
      } else {
        this.queryValue = Math.round((this.yesterdayQuery / 24) * time);
        this.$refs["box-88"]?.countUp?.update(this.queryValue);

        setInterval(() => {
          const value = this.$randomInteger(2000, 3300);
          this.queryValue += value;
          this.$refs["box-88"]?.countUp?.update(this.queryValue);

          const index = this.$randomInteger(0, 7);
          if (index <= 4) {
            this.$refs["topQuery"].items[index].value += value;
          }
        }, 5 * 1000);
      }
    },
  },
};
</script>
