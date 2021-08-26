<template>
  <header class="base-header">
    <div class="header-logo">
      <img src="@/assets/images/logo.svg" alt="" />
      <span>{{ $t("EGovernmentCenter") }}</span>
    </div>
    <div class="header-date">
      <div class="date-time">{{ time }}</div>
      <div class="date-seperator"></div>
      <div class="date-day">{{ date }}</div>
    </div>
    <div class="header-target">
      <img src="@/assets/images/Union.svg" alt="" />
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const time = ref("");
    const date = ref("");

    function calculateTime() {
      const currentDate = new Date();

      let hours = currentDate.getHours(); // 0 - 23
      let minutes = currentDate.getMinutes(); // 0 - 59

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      time.value = `${hours}:${minutes}`;
    }

    function calculateDate() {
      const currentDate = new Date();

      const day = currentDate.getDate();

      const MONTHS = [
        "Январь ",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      const month = MONTHS[currentDate.getMonth()];

      date.value = `${day} ${month}`;
    }

    onMounted(() => {
      setInterval(calculateTime, 1000);
      setInterval(calculateDate, 1000);
    });

    return {
      time,
      date,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .header-logo {
    display: flex;
    align-items: center;
    max-width: 30%;
    span {
      font-family: "inter-bold" !important;
      font-size: 26px;
      height: auto;
      color: var(--white);
      margin-left: 20px;
    }
  }

  .header-date {
    color: var(--white);
    font-size: var(--header-text-size);
    text-align: center;
    white-space: nowrap;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    .date-seperator {
      width: 40px;
      height: 2px;
      background: gray;
      margin: 0 16px;
    }
  }

  .header-target {
    img {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 2700px) {
      width: 333px;
    }

    @media (max-width: 2500px) {
      width: 300px;
    }
  }
}
</style>
