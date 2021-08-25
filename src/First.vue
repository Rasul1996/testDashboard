<template>
  <section>
    <div class="box">
      <h3 class="box-title">{{ $t("digitalInfo") }}</h3>
    </div>
    <div style="margin-top: 0.5em">
      <DigitalTransforms />
    </div>
    <div style="margin-top: 2.5em">
      <OneBilling />
    </div>
  </section>
</template>

<script>
import DigitalTransforms from "@/components/DigitalTransforms/index.vue";
import OneBilling from "@/components/OneBilling/index.vue";
export default {
  components: {
    DigitalTransforms,
    OneBilling,
  },
};
</script>
