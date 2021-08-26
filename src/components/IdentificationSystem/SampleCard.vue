<template>
  <div class="box sample-box">
    <div class="sample-info">
      <p class="sample-key ff-medium">
        {{ $t("numberIdPersonalAccount") }}
      </p>
      <p class="sample-value ff-bold">{{ $formatNumber(413244) }}</p>
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
      font-size: 20px;
    }

    .sample-value {
      font-size: 48px;
    }
  }

  .sample-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 2750px) {
    .sample-info {
      .sample-key {
        font-size: 18px;
      }

      .sample-value {
        font-size: 36px;
      }
    }

    .sample-logo {
      width: 176px;
    }
  }

  @media (max-width: 2250px) {
    .sample-info {
      .sample-key {
        font-size: 16px;
      }

      .sample-value {
        font-size: 28px;
      }
    }

    .sample-logo {
      width: 156px;
    }
  }
}
</style>
