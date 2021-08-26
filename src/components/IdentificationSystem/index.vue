<template>
  <div>
    <div class="flex gap">
      <ContentCard
        class="w-50"
        :title="$t('totalNumberUsers')"
        :value="2412314"
      />
      <ContentCard
        class="w-50"
        :title="$t('numberUsersToday')"
        :value="16441"
      />
    </div>

    <div class="flex gap mt-1">
      <GraphCard
        class="w-50"
        :title="$t('femaleMaleRatio')"
        :firstKey="$t('male')"
        :firstValue="9321"
        :secondKey="$t('female')"
        :secondValue="7764"
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
};
</script>
