<template>
  <div>
    <section>
      <ContentCard :title="$t('totalByTerritories')" :value="1641" />
      <ByRegions class="mt-1" />
    </section>

    <section class="mt-1">
      <ContentCard :title="$t('totalDepartment')" :value="483" />
      <ByDepartments class="mt-1" />
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
