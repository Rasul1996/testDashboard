<template>
  <div>
    <div class="box">
      <h3 class="box-title">
        {{ $t("interdepartmentalIntegrationPlatform") }}
      </h3>
    </div>

    <div class="flex mt-1">
      <div style="width: 31%; margin-right: 5px">
        <BoxCard :title="$t('numberResponces')" value="412 314" />
        <BoxCard
          class="mt-1"
          :title="$t('numberResponcesYesterday')"
          value="512 314"
        />
      </div>
      <div style="width: 69%">
        <TopQueries :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import BoxCard from "../BoxCard.vue";
import TopQueries from "./TopQueries.vue";

export default {
  components: {
    BoxCard,
    TopQueries,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          key: this.$i18n.t("employementCertificate"),
          value: 1321,
        },
        {
          id: 2,
          key: this.$i18n.t("infoOnFirm"),
          value: 4432,
        },
        {
          id: 3,
          key: this.$i18n.t("certificationInfo"),
          value: 655,
        },
        {
          id: 4,
          key: this.$i18n.t("certificationInfo"),
          value: 4432,
        },
        {
          id: 5,
          key: this.$i18n.t("clarificationInfo"),
          value: 655,
        },
      ],
    };
  },
};
</script>
