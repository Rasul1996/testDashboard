<template>
  <div class="flex gap">
    <ContentCard :title="$t('totalNumberApp')" :value="2412314" />
    <ContentCard :title="$t('totalNumberUsers')" :value="16441" />
  </div>
  <div class="flex gap mt-1">
    <GraphCard
      :title="$t('claimsbelonging')"
      :firstKey="$t('phisicallyPersons')"
      :firstValue="1923321"
      :secondKey="$t('legalEntities')"
      :secondValue="327764"
      firstColor="#F17459"
      secondColor="#51D7E0"
      :id="1"
      style="width: 50%"
    />
    <GraphCard
      :title="$t('generalStatisticsUsers')"
      :firstKey="$t('male')"
      :firstValue="9321"
      :secondKey="$t('female')"
      :secondValue="7764"
      firstColor="#5DCAED"
      secondColor="#FC4788"
      :id="2"
      style="width: 50%"
    />
  </div>
  <div class="flex mt-1" style="gap: 4px">
    <ContentCard
      :value="321"
      color="rgba(89, 153, 241, 0.5)"
      :title="$t('numberServicesImplemented')"
    />
    <ContentCard
      :title="$t('numberNewService')"
      color="rgba(82, 190, 128, 0.5)"
      :value="3"
    />
    <ContentCard
      color="rgba(175, 116, 230, 0.5  )"
      :title="$t('numberMobileServiceEPIGU')"
      :value="314"
    />
  </div>
</template>

<script>
import GraphCard from "../GraphCard.vue";
import ContentCard from "../ContentCard.vue";

export default {
  components: {
    GraphCard,
    ContentCard,
  },
};
</script>
