<template>
  <div>
    <section>
      <ContentCard :title="$t('totalByTerritories')" :value="1421" />
      <ByRegions style="margin-top: 12px" />
    </section>

    <section class="mt-1">
      <ContentCard :title="$t('totalNumberByDeppartment')" :value="483" />
      <ByDepartments style="margin-top: 12px" />
    </section>
  </div>
</template>

<script>
import ByRegions from "./ByRegions.vue";
import ByDepartments from "./ByDepartments.vue";
import ContentCard from "@/components/ContentCard.vue";
export default {
  components: {
    ByRegions,
    ByDepartments,
    ContentCard,
  },
};
</script>
