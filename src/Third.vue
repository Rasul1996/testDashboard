<template>
  <div>
    <div class="box">
      <h3 class="box-title">{{ $t("oneId") }}</h3>
    </div>

    <div class="mt-1">
      <IdentificationSystem />
    </div>
    <div class="mt-1">
      <DataTable :items="items" :title="$t('countByRegion')" />
    </div>
    <div style="margin-top: 35px">
      <IntegrationPlatform />
    </div>
  </div>
</template>

<script>
import IdentificationSystem from "@/components/IdentificationSystem/index.vue";
import IntegrationPlatform from "@/components/IntegrationPlatform/index.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    IdentificationSystem,
    IntegrationPlatform,
    DataTable,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          key: this.$i18n.t("andijan"),
          value: 54656,
          percent: (54656 / 160_000) * 100,
        },
        {
          id: 2,
          key: this.$i18n.t("bukhara"),
          value: 50032,
          percent: (50032 / 160_000) * 100,
        },
        {
          id: 3,
          key: this.$i18n.t("jizzakh"),
          value: 32515,
          percent: (32515 / 160_000) * 100,
        },
        {
          id: 4,
          key: this.$i18n.t("kashkadarya"),
          value: 32515,
          percent: (32515 / 160_000) * 100,
        },
        {
          id: 5,
          key: this.$i18n.t("navoiy"),
          value: 32088,
          percent: (32088 / 160_000) * 100,
        },
        {
          id: 6,
          key: this.$i18n.t("namangan"),
          value: 51011,
          percent: (51011 / 160_000) * 100,
        },
        {
          id: 7,
          key: this.$i18n.t("samarkand"),
          value: 66050,
          percent: (66050 / 160_000) * 100,
        },
        {
          id: 8,
          key: this.$i18n.t("surkhandarya"),
          value: 31307,
          percent: (31307 / 160_000) * 100,
        },
        {
          id: 9,
          key: this.$i18n.t("sirdarya"),
          value: 23020,
          percent: (23020 / 160_000) * 100,
        },
        {
          id: 10,
          key: this.$i18n.t("tashkent"),
          value: 152665,
          percent: (152665 / 160_000) * 100,
        },
        {
          id: 11,
          key: this.$i18n.t("tashkentVil"),
          value: 79660,
          percent: (79660 / 160_000) * 100,
        },
      ],
    };
  },
};
</script>
