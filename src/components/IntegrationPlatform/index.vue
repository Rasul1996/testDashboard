<template>
  <div>
    <div class="box">
      <div class="box-title">Межведомственная интеграционная платформа</div>
    </div>

    <div class="flex mt-1">
      <div style="width: 31%; margin-right: 5px">
        <BoxCard title="Количество запросов за сегодня" value="412 314" />
        <BoxCard
          class="mt-1"
          title="Количество запросов за вчера"
          value="512 314"
        />
      </div>
      <div style="width: 69%">
        <TopQueries :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import BoxCard from "../BoxCard.vue";
import TopQueries from "./TopQueries.vue";

export default {
  components: {
    BoxCard,
    TopQueries,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          key: "Справка о трудоустройстве (Министерство труда)",
          value: 1321,
        },
        {
          id: 2,
          key: "Информация по фирме (Министерство внешних эконо",
          value: 4432,
        },
        {
          id: 3,
          key: "Уточнение информации (Государственный комитет по ",
          value: 655,
        },
        {
          id: 4,
          key: "Информация по фирме (Министерство внешних эконо",
          value: 4432,
        },
        {
          id: 5,
          key: "Уточнение информации (Государственный комитет по ",
          value: 655,
        },
      ],
    };
  },
};
</script>
