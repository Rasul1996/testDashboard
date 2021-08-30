<template>
  <div>
    <div class="flex gap">
      <ContentCard
        :id="101"
        class="w-50"
        :title="$t('totalNumberUsers')"
        :value="$store.state.allUsers"
      />
      <ContentCard
        :id="102"
        class="w-50"
        :title="$t('numberUsersToday')"
        :value="$store.state.newUsers"
      />
    </div>

    <div class="flex gap mt-1">
      <GraphCard
        class="w-50"
        :firstKey="$t('male')"
        :firstValue="$store.getters.getMaleUsers"
        :secondKey="$t('female')"
        :secondValue="$store.getters.getFemaleUsers"
        firstColor="#5DCAED"
        secondColor="#FC4788"
        :id="3"
      />

      <SampleCard class="w-50" />
    </div>
  </div>
</template>

<script>
import ContentCard from "../ContentCard.vue";
import GraphCard from "../GraphCard.vue";
import SampleCard from "./SampleCard.vue";

export default {
  components: {
    ContentCard,
    GraphCard,
    SampleCard,
  },
  mounted() {
    setInterval(() => {
      const value = this.$randomInteger(1, 3);

      this.$store.commit("SET_NEW_USERS", value);
    }, 5 * 1000);
  },
};
</script>
