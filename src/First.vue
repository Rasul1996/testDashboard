<template>
  <section>
    <div class="box">
      <h3 class="box-title">{{ $t("digitalUZB") }}</h3>
    </div>
    <div class="mt-1">
      <DigitalTransforms />
    </div>
    <div class="mt-3">
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
