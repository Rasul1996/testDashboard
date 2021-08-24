<template>
  <div>
    <div class="box">
      <div class="box-title">Электронные государственные услуги</div>
    </div>
    
    <div class="mt-1">
      <IdentificationSystem />
    </div>
  </div>
</template>

<script>
import IdentificationSystem from "@/components/IdentificationSystem/index.vue";

export default {
  components: {
    IdentificationSystem,
  },
};
</script>
