<template>
  <div>
    <div class="box">
      <h3 class="box-title">{{ $t("oneId") }}</h3>
    </div>

    <div class="mt-1">
      <IdentificationSystem />
    </div>
    <div class="mt-1">
      <DataTable
        :slidesPerView="14"
        :id="88"
        :items="items"
        :title="$t('countByRegion')"
      />
    </div>
    <div class="mt-3">
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
      array: [
        0, 1, 2, 3, 0, 4, 0, 5, 1, 6, 0, 7, 2, 8, 0, 9, 1, 10, 0, 11, 2, 12, 3,
        13, 1,
      ],
      items: [
        {
          id: 1,
          key: this.$i18n.t("tashkent"),
          value: 152665 + 102_000,
          percent: ((152665 + 102_000) / 270_000) * 100,
        },
        {
          id: 2,
          key: this.$i18n.t("tashkentVil"),
          value: 79660 + 92_000,
          percent: ((79660 + 92_000) / 270_000) * 100,
        },
        {
          id: 3,
          key: this.$i18n.t("samarkand"),
          value: 66050 + 82_000,
          percent: ((66050 + 82_000) / 270_000) * 100,
        },
        {
          id: 4,
          key: this.$i18n.t("fergana"),
          value: 62853 + 71_000,
          percent: ((62853 + 71_000) / 270_000) * 100,
        },
        {
          id: 6,
          key: this.$i18n.t("khorezm"),
          value: 55133 + 61_000,
          percent: ((55133 + 61_000) / 270_000) * 100,
        },
        {
          id: 7,
          key: this.$i18n.t("andijan"),
          value: 54656 + 51_000,
          percent: ((54656 + 51_000) / 270_000) * 100,
        },
        {
          id: 8,
          key: this.$i18n.t("namangan"),
          value: 51011 + 41_009,
          percent: ((51011 + 41_000) / 270_000) * 100,
        },
        {
          id: 9,
          key: this.$i18n.t("bukhara"),
          value: 50032 + 31_000,
          percent: ((50032 + 31_000) / 270_000) * 100,
        },

        {
          id: 5,
          key: this.$i18n.t("kashkadarya"),
          value: 32515 + 21_000,
          percent: ((32515 + 21_000) / 270_000) * 100,
        },
        {
          id: 10,
          key: this.$i18n.t("Karak"),
          value: 52262,
          percent: (52262 / 270_000) * 100,
        },
        {
          id: 11,
          key: this.$i18n.t("jizzakh"),
          value: 32515,
          percent: (32515 / 270_000) * 100,
        },
        {
          id: 12,
          key: this.$i18n.t("navoiy"),
          value: 32088,
          percent: (32088 / 270_000) * 100,
        },
        {
          id: 13,
          key: this.$i18n.t("surkhandarya"),
          value: 31307,
          percent: (31307 / 270_000) * 100,
        },
        {
          id: 14,
          key: this.$i18n.t("sirdarya"),
          value: 23020,
          percent: (23020 / 270_000) * 100,
        },
      ],
    };
  },
  watch: {
    "$store.state.lastNewUserCount": function (value) {
      const index = this.array[this.$randomInteger(0, 24)];

      this.biggest += value;
      this.items[index].value += value;
      this.items[index].percent =
        (this.items[index].value / this.biggest) * 100;
    },
  },
};
</script>
