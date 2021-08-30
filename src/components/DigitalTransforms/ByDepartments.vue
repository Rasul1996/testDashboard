<template>
  <div class="box" style="min-height: 347px">
    <div class="info-cards">
      <InfoCard
        class="single-card"
        :title="$t('implemented')"
        :info="195"
        icon="check.svg"
        color="rgba(39, 174, 96, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('during')"
        :info="228"
        icon="Warning.svg"
        color="rgba(242, 153, 74, 0.75)"
      />
      <InfoCard
        class="single-card"
        :title="$t('notStarted')"
        :info="23"
        icon="Time.svg"
        color="rgba(235, 87, 87, 0.75)"
      />
    </div>
    <tabs v-model="selectedTab" class="tabs mt-2">
      <tab
        class="content"
        v-for="(tab, i) in tabs"
        :key="`t${i}`"
        :val="tab.value"
        :label="tab.label"
        :indicator="true"
      />
    </tabs>

    <tab-panels v-model="selectedTab" :animate="true">
      <tab-panel val="A">
        <GovOrg />
      </tab-panel>
      <tab-panel val="B">
        <EconomicOrg />
      </tab-panel>
    </tab-panels>
  </div>
</template>

<script>
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";
import { reactive, toRefs } from "vue";
import GovOrg from "./GovOrg.vue";
import EconomicOrg from "./EconomicOrg.vue";
import InfoCard from "@/components/InfoCard.vue";

const tabs = [
  {
    label: "Давлат oрганлари",
    value: "A",
  },
  {
    label: "Хўжалик oрганлари",
    value: "B",
  },
];

export default {
  components: {
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    GovOrg,
    EconomicOrg,
    InfoCard
  },
  setup() {
    const state = reactive({
      selectedTab: tabs[0],
    });
    return {
      tabs,
      ...toRefs(state),
    };
  },
};
</script>


<style lang="scss" scoped>
.box-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  .single-card {
    flex-grow: 1;
    width: 30%;
  }
}

.sub-info-cards {
  .single-sub-card {
    margin-top: 5px;
  }
}
</style>


<style lang="scss">
.tabs {
  display: flex;

  .content {
    padding: 0;
    border: 0 !important;
    margin: 0;
    cursor: pointer;

    .tab {
      padding: 0 !important;
    }

    &.active {
      color: #5dcaed;
    }

    &:last-child {
      margin-left: 1em;
    }
  }
  margin-bottom: 1em;
}
</style>
