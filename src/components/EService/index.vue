<template>
  <div class="flex gap">
    <ContentCard
      :id="963257"
      ref="content-1"
      class="w-50"
      :title="$t('totalNumberApp')"
      :value="$store.state.allApps"
    />
    <ContentCard
      class="w-50"
      :title="$t('totalNumberUsers')"
      :value="usersCount"
    />
  </div>
  <div class="flex gap mt-1">
    <GraphCard
      class="w-50"
      :firstKey="$t('phisicallyPersons')"
      :firstValue="physicalEntity"
      :secondKey="$t('legalEntities')"
      :secondValue="legalEntity"
      firstColor="#5DCAED"
      secondColor="#FC4788"
      :id="1"
    />
    <GraphCard
      class="w-50"
      :firstKey="$t('male')"
      :firstValue="maleUsers"
      :secondKey="$t('female')"
      :secondValue="femaleUsers"
      firstColor="#5DCAED"
      secondColor="#FC4788"
      :id="2"
    />
  </div>
  <div class="flex mt-1" style="gap: 4px">
    <ContentCard
      class="w-33"
      :value="267"
      color="rgba(89, 153, 241, 0.5)"
      :title="$t('numberServicesImplemented')"
    />
    <ContentCard
      class="w-33"
      :title="$t('numberNewService')"
      color="rgba(82, 190, 128, 0.5)"
      :value="49"
    />
    <ContentCard
      class="w-33"
      color="rgba(175, 116, 230, 0.5  )"
      :title="$t('numberMobileServiceEPIGU')"
      :value="50"
    />
  </div>
</template>

<script>
import GraphCard from "../GraphCard.vue";
import ContentCard from "../ContentCard.vue";

export default {
  components: {
    GraphCard,
    ContentCard,
  },
  data() {
    return {
      allApps: this.$store.state.allApps,
      usersCount: 595000,
    };
  },
  mounted() {
    setInterval(() => {
      const apps = this.$randomInteger(1, 3);

      this.$store.commit("SET_ALL_APPS", apps);
      this.usersCount += this.$randomInteger(1, 3);
    }, 5 * 1111);
  },
  computed: {
    maleUsers() {
      return Math.round((this.usersCount / 100) * 67);
    },
    femaleUsers() {
      return Math.round((this.usersCount / 100) * 33);
    },
    physicalEntity() {
      return Math.round((this.$store.state.allApps / 100) * 92);
    },
    legalEntity() {
      return Math.round((this.$store.state.allApps / 100) * 8);
    },
  },
};
</script>
