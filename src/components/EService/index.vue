<template>
  <div class="flex gap">
    <ContentCard title="Общее количество заявок" :value="2412314" />
    <ContentCard title="Общее количество пользователей" :value="16441" />
  </div>
  <div class="flex gap mt-1">
    <GraphCard
      title="Принадлежность заявок"
      firstKey="Физ. лица"
      :firstValue="1923321"
      secondKey="Юр. лица"
      :secondValue="327764"
      firstColor="#F17459"
      secondColor="#51D7E0"
      :id="1"
      style="width: 50%"
    />
    <GraphCard
      title="Гендерная статистика пользователей"
      firstKey="Мужчин"
      :firstValue="9321"
      secondKey="Женщин"
      :secondValue="7764"
      firstColor="#5DCAED"
      secondColor="#FC4788"
      :id="2"
      style="width: 50%"
    />
  </div>
</template>

<script>
import GraphCard from "../GraphCard.vue";
import ContentCard from "../ContentCard.vue"

export default {
  components: {
    GraphCard,
    ContentCard
  },
};
</script>

