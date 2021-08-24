<template>
  <div style="padding: 36px">
    <BaseHeader />
    <div class="boxes">
      <FirstSide class="first-side" />
      <div>s</div>
      <div>s</div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import FirstSide from "./First.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
    FirstSide,
  },
};
</script>

<style lang="scss" scoped>
.boxes {
  margin-top: 1em;
  display: flex;

  .first-side {
    width: 30%;
  }
}
</style>
