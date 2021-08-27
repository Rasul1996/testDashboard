<template>
  <div style="padding: 36px">
    <BaseHeader />
    <div class="boxes" style="margin-top: 45px">
      <FirstSide class="first-side" />
      <SecondSide class="second-side" />
      <ThirdSide class="third-side" />
    </div>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import FirstSide from "./First.vue";
import SecondSide from "./Second.vue";
import ThirdSide from "./Third.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
    FirstSide,
    SecondSide,
    ThirdSide,
  },
};
</script>

<style lang="scss" scoped>
.boxes {
  margin-top: 1em;
  display: flex;
  justify-content: space-between;

  .first-side {
    width: 25%;
  }

  .second-side {
    width: 37%;
  }

  .third-side {
    width: 37%;
  }
}
</style>
