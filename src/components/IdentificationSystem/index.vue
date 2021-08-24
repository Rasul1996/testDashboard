<template>
  <div>
    <div class="flex gap">
      <ContentCard title="Общее количество пользователей" :value="2412314" />
      <ContentCard title="Кол-во пользователей за сегодня" :value="16441" />
    </div>

    <div class="flex gap mt-1">
      <GraphCard
        title="Соотношение женщины/мужчины"
        firstKey="Мужчин"
        :firstValue="9321"
        secondKey="Женщин"
        :secondValue="7764"
        firstColor="#5DCAED"
        secondColor="#FC4788"
        :id="3"
        style="width: 50%"
      />

      <SampleCard style="width: 50%" />
    </div>
  </div>
</template>

<script>
import ContentCard from "../ContentCard.vue";
import GraphCard from "../GraphCard.vue";
import SampleCard from "./SampleCard.vue"

export default {
  components: {
    ContentCard,
    GraphCard,
    SampleCard,
  }
}
</script>
