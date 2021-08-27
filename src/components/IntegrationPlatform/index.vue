<template>
  <div>
    <div class="box">
      <h3 class="box-title">
        {{ $t("interdepartmentalIntegrationPlatform") }}
      </h3>
    </div>

    <div class="flex mt-1">
      <div style="width: 31%; margin-right: 5px">
        <BoxCard :id="77" :title="$t('numberResponces')" :value="todayQuery" />
        <BoxCard
          :id="88"
          class="mt-1"
          :title="$t('numberResponcesYesterday')"
          :value="yesterdayQuery"
        />
      </div>
      <div style="width: 69%">
        <TopQueries />
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
      todayQuery: 0,
      yesterdayQuery: 7601322,
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
        this.todayQuery = Math.round((this.yesterdayQuery / 24) * time);

        setInterval(() => {
          this.todayQuery += this.$randomInteger(2000, 3300);
        }, 15000);
      }
    },
  },
};
</script>
