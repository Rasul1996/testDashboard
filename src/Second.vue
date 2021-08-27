<template>
  <div>
    <div class="box">
      <h3 class="box-title">{{ $t("EGovernmentServices") }}</h3>
    </div>

    <div class="mt-1">
      <EService />
    </div>

    <div class="mt-1">
      <DataTable :items="items" :title="$t('numberStatementsRegion')" />
    </div>

    <div class="box mt-3">
      <h3 class="box-title">{{ $t("EGovernmentProject") }}</h3>
    </div>

    <div class="flex mt-1">
      <DataCard
        class="w-50"
        :title="$t('numberOpenDataSets')"
        logo="Group.svg"
        :value="650"
        color="#3D61A0"
      />
      <DataCard
        class="w-50"
        style="margin-left: 4px"
        :title="$t('numberClassifierSets')"
        logo="Sign.svg"
        color="#4B689C"
        :value="53"
      />
    </div>

    <div class="box mt-1">
      <div style="font-size: 16px">
        {{ $t("unified") }}
      </div>
      <div class="info-cards">
        <InfoCard
          class="single-card"
          :title="$t('passportProject')"
          :info="41"
          icon="LOGO 2.svg"
          color="#585E92"
        />
        <InfoCard
          class="single-card"
          :title="$t('passportLook')"
          :info="13"
          icon="Time.svg"
          color="rgba(245, 173, 110, 0.5)"
        />
        <InfoCard
          class="single-card"
          :title="$t('passportFor')"
          :info="121"
          icon="check.svg"
          color="rgba(82, 190, 128, 0.5)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EService from "@/components/EService/index.vue";
import InfoCard from "@/components/InfoCard.vue";
import DataCard from "@/components/DataCard.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    EService,
    InfoCard,
    DataCard,
    DataTable,
  },
  data() {
    return {
      biggest: 65_000,
      items: [
        {
          id: 1,
          key: this.$i18n.t("andijan"),
          value: 23179,
          percent: (23179 / 65_000) * 100,
        },
        {
          id: 2,
          key: this.$i18n.t("bukhara"),
          value: 27362,
          percent: (27362 / 65_000) * 100,
        },
        {
          id: 3,
          key: this.$i18n.t("jizzakh"),
          value: 15559,
          percent: (15559 / 65_000) * 100,
        },
        {
          id: 4,
          key: this.$i18n.t("kashkadarya"),
          value: 23530,
          percent: (23530 / 65_000) * 100,
        },
        {
          id: 5,
          key: this.$i18n.t("navoiy"),
          value: 11943,
          percent: (11943 / 65_000) * 100,
        },
        {
          id: 6,
          key: this.$i18n.t("namangan"),
          value: 23401,
          percent: (23401 / 65_000) * 100,
        },
        {
          id: 7,
          key: this.$i18n.t("samarkand"),
          value: 44470,
          percent: (44470 / 65_000) * 100,
        },
        // {
        //   id: 8,
        //   key: this.$i18n.t("surkhandarya"),
        //   value: 10230,
        //   percent: (10230 / 65_000) * 100,
        // },
        // {
        //   id: 9,
        //   key: this.$i18n.t("sirdarya"),
        //   value: 5098,
        //   percent: (5098 / 65_000) * 100,
        // },
        // {
        //   id: 10,
        //   key: this.$i18n.t("tashkent"),
        //   value: 62570,
        //   percent: (62570 / 65_000) * 100,
        //   hidden: true,
        // },
        // {
        //   id: 11,
        //   key: this.$i18n.t("fergana"),
        //   value: 22362,
        //   percent: (22362 / 65_000) * 100,
        //   hidden: true,
        // },
        // {
        //   id: 12,
        //   key: this.$i18n.t("khorezm"),
        //   value: 34512,
        //   percent: (34512 / 65_000) * 100,
        //   hidden: true,
        // },
        // {
        //   id: 13,
        //   key: this.$i18n.t("Karak"),
        //   value: 17446,
        //   percent: (17446 / 65_000) * 100,
        //   hidden: true,
        // },
        // {
        //   id: 14,
        //   key: this.$i18n.t("tashkentVil"),
        //   value: 79660,
        //   percent: (79660 / 160_000) * 100,
        // },
      ],
    };
  },
  watch: {
    "$store.state.lastUpdateValue": function (value) {
      const index = this.$randomInteger(0, 12);
      this.biggest += value;
      this.items[index].value += value;
      this.items[index].percent =
        (this.items[index].value / this.biggest) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-cards {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  color: var(--white);
  .single-card {
    flex-grow: 1;
    width: 30%;
  }
}
</style>
