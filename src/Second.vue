<template>
  <div>
    <div class="box">
      <div class="box-title">Электронные государственные услуги</div>
    </div>

    <div class="mt-1">
      <EService />
    </div>

    <div class="mt-1">
      <DataTable :items="items" />
    </div>

    <div class="box mt-1">
      <div class="box-title">Проекты электронного правительства</div>
    </div>

    <div class="flex mt-1">
      <DataCard
        title="Количество наборов открытых данных"
        logo="Group.svg"
        :value="2412314"
        color="#3D61A0"
      />
      <DataCard
        style="margin-left: 4px"
        title="Количество наборов классификаторов"
        logo="Sign.svg"
        color="#4B689C"
        :value="4314"
      />
    </div>

    <div class="box mt-1">
      <div style="font-size: 20px">
        Единый реестр проектов электронного правительства
      </div>
      <div class="info-cards">
        <InfoCard
          class="single-card"
          title="Реализовано"
          :info="783"
          icon="LOGO 2.svg"
          color="#585E92"
        />
        <InfoCard
          class="single-card"
          title="В процессе"
          :info="112"
          icon="Time.svg"
          color="rgba(245, 173, 110, 0.5)"
        />
        <InfoCard
          class="single-card"
          title="Не начато"
          :info="526"
          icon="check.svg"
          color="rgba(82, 190, 128, 0.5)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EService from "@/components/EService/index.vue";
import InfoCard from "@/components/InfoCard.vue";
import DataCard from "@/components/DataCard.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    EService,
    InfoCard,
    DataCard,
    DataTable,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          key: "Андижанская",
          value: 1321,
          percent: 78,
        },
        {
          id: 2,
          key: "Бухарская",
          value: 4432,
          percent: 67,
        },
        {
          id: 3,
          key: "Джизакская",
          value: 655,
          percent: 56,
        },
        {
          id: 4,
          key: "Кашкадарьинская",
          value: 1321,
          percent: 39,
        },
        {
          id: 5,
          key: "Навоийская",
          value: 4431,
          percent: 29,
        },
        {
          id: 6,
          key: "Наманганская",
          value: 6535,
          percent: 35,
        },
        {
          id: 7,
          key: "Самаркандская",
          value: 655,
          percent: 32,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info-cards {
  margin-top: 15px;
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
