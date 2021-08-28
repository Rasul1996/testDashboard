<template>
  <div class="box" style="min-height: 347px" v-if="false">
    <tabs v-model="selectedTab">
      <tab
        class="tab"
        v-for="tab in tabs"
        :key="`tab${tab.value}`"
        :val="tab.valye"
        :label="tab.label"
        :indicator="true"
      />
    </tabs>
    <tab-panels v-model="selectedTab" :animate="true">
      <tab-panel :val="1">
        <GovOrg />
      </tab-panel>
      <tab-panel :val="2">
        <EconomicOrg />
      </tab-panel>
    </tab-panels>
  </div>
  <test />
</template>

<script>
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";
import { reactive, toRefs } from "vue";
import test from "./test.vue";

import GovOrg from "./GovOrg.vue";
import EconomicOrg from "./EconomicOrg.vue";

const tabs = [
  {
    value: 1,
    label: "Давлат ўрганлари",
  },
  {
    value: 2,
    label: "Хўжалик ўрганлари",
  },
];

export default {
  components: {
    test,
    GovOrg,
    EconomicOrg,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const state = reactive({
      selectedTab: 2,
    });
    return {
      tabs,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.tab {
  padding: 10px 20px;
}
</style>
