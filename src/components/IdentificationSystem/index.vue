<template>
  <div>
    <div class="flex gap">
      <ContentCard
        class="w-50"
        :title="$t('totalNumberUsers')"
        :value="allUsersCount"
      />
      <ContentCard
        class="w-50"
        :title="$t('numberUsersToday')"
        :value="$store.state.oneIdUserCountToday"
      />
    </div>

    <div class="flex gap mt-1">
      <GraphCard
        class="w-50"
        :title="$t('generalStatisticsUsers')"
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
  data() {
    return {
      allUsersCount: 1361613
    }
  },
  mounted() {
    setInterval(() => {
      
    }, 5555)
  }
};
</script>
