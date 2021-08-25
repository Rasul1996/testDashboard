<template>
  <div>
    <div class="flex gap">
      <ContentCard :title="$t('totalNumberUsers')" :value="2412314" />
      <ContentCard :title="$t('numberUsersToday')" :value="16441" />
    </div>

    <div class="flex gap mt-1">
      <GraphCard
        :title="$t('femaleMaleRatio')"
        :firstKey="$t('male')"
        :firstValue="9321"
        :secondKey="$t('female')"
        :secondValue="7764"
        firstColor="#5DCAED"
        secondColor="#FC4788"
        :id="3"
        style="width: 50%"
      />

      <SampleCard style="width: 50%" />
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
