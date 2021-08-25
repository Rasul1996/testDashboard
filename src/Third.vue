<template>
  <div>
    <div class="box">
      <div class="box-title">{{ $t("EGovernmentServices") }}</div>
    </div>

    <div class="mt-1">
      <IdentificationSystem />
    </div>
    <div class="mt-1">
      <DataTable :items="items" />
    </div>
    <div class="mt-1">
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
          value: 1321,
          percent: 78,
        },
        {
          id: 2,
          key: this.$i18n.t("bukhara"),
          value: 4432,
          percent: 67,
        },
        {
          id: 3,
          key: this.$i18n.t("jizzakh"),
          value: 655,
          percent: 56,
        },
        {
          id: 4,
          key: this.$i18n.t("kashkadarya"),
          value: 1321,
          percent: 39,
        },
        {
          id: 5,
          key: this.$i18n.t("navoiy"),
          value: 4431,
          percent: 29,
        },
        {
          id: 6,
          key: this.$i18n.t("namangan"),
          value: 6535,
          percent: 35,
        },
        {
          id: 7,
          key: this.$i18n.t("samarkand"),
          value: 655,
          percent: 31,
        },
        {
          id: 8,
          key: this.$i18n.t("surkhandarya"),
          value: 315,
          percent: 28,
        },
        {
          id: 9,
          key: this.$i18n.t("sirdarya"),
          value: 255,
          percent: 25,
        },
      ],
    };
  },
};
</script>
