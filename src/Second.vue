<template>
  <div>
    <div class="box">
      <div class="box-title">Электронные государственные услуги</div>
    </div>

    <div class="mt-1">
      <EService />
    </div>
  </div>
</template>

<script>
import EService from "@/components/EService/index.vue";

export default {
  components: {
    EService,
  },
};
</script>

<style lang="scss" scoped></style>
