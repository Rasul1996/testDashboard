<template>
  <div class="box sample-box">
    <div class="sample-info">
      <p class="sample-key">
        {{ $t("numberIdPersonalAccount") }}
      </p>
      <p class="sample-value">413 244</p>
    </div>
    <div class="sample-logo">
      <img style="width: 100%" src="@/assets/images/OneID.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sample-box {
  display: flex;
  justify-content: space-between;

  .sample-info {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .sample-key {
      font-family: "inter-bold" !important;
      font-size: 1.25rem;
      line-height: 25px;
    }

    .sample-value {
      font-family: "inter-bold" !important;
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  .sample-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
