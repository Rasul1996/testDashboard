<template>
  <div>
    <div class="box">
      <div class="box-title">{{ $t("EGovernmentServices") }}</div>
    </div>

    <div class="mt-1">
      <EService />
    </div>

    <div class="mt-1">
      <DataTable :items="items" />
    </div>

    <div class="box mt-1">
      <div class="box-title">{{ $t("EGovernmentProject") }}</div>
    </div>

    <div class="flex mt-1">
      <DataCard
        :title="$t('numberOpenDataSets')"
        logo="Group.svg"
        :value="2412314"
        color="#3D61A0"
      />
      <DataCard
        style="margin-left: 4px"
        :title="$t('numberClassifierSets')"
        logo="Sign.svg"
        color="#4B689C"
        :value="4314"
      />
    </div>

    <div class="box mt-1">
      <div style="font-size: 20px">
        {{ $t("unifiedRegisterEG") }}
      </div>
      <div class="info-cards">
        <InfoCard
          class="single-card"
          :title="$t('implemented')"
          :info="783"
          icon="LOGO 2.svg"
          color="#585E92"
        />
        <InfoCard
          class="single-card"
          :title="$t('during')"
          :info="112"
          icon="Time.svg"
          color="rgba(245, 173, 110, 0.5)"
        />
        <InfoCard
          class="single-card"
          :title="$t('notStarted')"
          :info="526"
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
          key: this.$i18n.t('navoiy'),
          value: 4431,
          percent: 29,
        },
        {
          id: 6,
          key: this.$i18n.t('namangan'),
          value: 6535,
          percent: 35,
        },
        {
          id: 7,
          key: this.$i18n.t('samarkand'),
          value: 655,
          percent: 32,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info-cards {
  margin-top: 15px;
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
