<template>
  <div class="box" style="min-height: 347px">
    <tabs v-model="selectedTab" class="tabs">
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
