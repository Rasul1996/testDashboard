<template>
  <div>
    <div class="box">
      <div class="box-title">Электронные государственные услуги</div>
    </div>

    <div class="mt-1">
      <EService />
    </div>

    <div class="box mt-1">
      <div class="box-title">Электрон ҳукумат лойиҳалари</div>
    </div>

    <div class="box mt-1">
      <div class="box-title">Электрон ҳукумат лойиҳаларининг ягона реестри</div>
    </div>
    <div class="info-cards">
      <InfoCard
        class="single-card"
        title="Реализовано"
        info="783"
        icon="LOGO 2.svg"
        color="#585E92"
      />
      <InfoCard
        class="single-card"
        title="В процессе"
        info="112"
        icon="Time.svg"
        color="#F5AD6E"
      />
      <InfoCard
        class="single-card"
        title="Не начато"
        info="526"
        icon="check.svg"
        color="#52BE80"
      />
    </div>
  </div>
</template>

<script>
import EService from "@/components/EService/index.vue";
import InfoCard from "@/components/InfoCard.vue";

export default {
  components: {
    EService,
    InfoCard,
  },
};
</script>

<style lang="scss" scoped>
.info-cards {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  color: var(--white);
  .single-card {
    flex-grow: 1;
    width: 30%;
  }
}
</style>
