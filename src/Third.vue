<template>
  <div>
    <div class="box">
      <div class="box-title">Электронные государственные услуги</div>
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
          key: "Андижанская",
          value: 1321,
          percent: 78,
        },
        {
          id: 2,
          key: "Бухарская",
          value: 4432,
          percent: 67,
        },
        {
          id: 3,
          key: "Джизакская",
          value: 655,
          percent: 56,
        },
        {
          id: 4,
          key: "Кашкадарьинская",
          value: 1321,
          percent: 39,
        },
        {
          id: 5,
          key: "Навоийская",
          value: 4431,
          percent: 29,
        },
        {
          id: 6,
          key: "Наманганская",
          value: 6535,
          percent: 35,
        },
        {
          id: 7,
          key: "Самаркандская",
          value: 655,
          percent: 31,
        },
        {
          id: 8,
          key: "Сурхандарьинская",
          value: 315,
          percent: 28,
        },
        {
          id: 9,
          key: "Сырдарьинская",
          value: 255,
          percent: 25,
        },
      ],
    };
  },
};
</script>
