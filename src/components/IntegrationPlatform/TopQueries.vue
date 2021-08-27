<template>
  <div class="box">
    <h3 class="fs-3 ff-bold">{{ $t("top5Recipients") }}</h3>
    <ul class="top-info">
      <li class="info-item" v-for="(item, index) of items" :key="item.value">
        <div class="info-key">
          <span class="ff-open-sans-bold"> {{ index + 1 }} </span>
          <span class="ff-open-sans" style="margin-left: 1em">
            {{ item.key }}
          </span>
        </div>
        <span class="info-data ff-open-sans-bold"> {{ item.value }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          key: "Сведения о физическом лице (ГНК)",
          value: 0,
        },
        {
          id: 2,
          key: "Сведения об адресе (МВД)",
          value: 0,
        },
        {
          id: 3,
          key: "Паспортные данные гражданина",
          value: 0,
        },
        {
          id: 4,
          key: "Сведения из ЕАСУ",
          value: 0,
        },
        {
          id: 5,
          key: "Сведения о юридическом лице (ГНК)",
          value: 0,
        },
      ],
    };
  },
  mounted() {
    this.calculate();
  },
  methods: {
    calculate() {
      const time = new Date().getHours();

      console.log(time);

      if (time < 9) {
        this.items[0].value = 131715;
        this.items[1].value = 130073;
        this.items[2].value = 120214;
        this.items[3].value = 55057;
        this.items[4].value = 17213;
      } else {
        this.items[0].value = 124136;
        setInterval(() => {
          this.items[0].value += this.$randomInteger(400, 620);
        }, 1000 * 60 * 60);

        this.items[1].value = 120214;
        setInterval(() => {
          this.items[1].value += this.$randomInteger(350, 650);
        }, 1000 * 60 * 60);

        this.items[2].value = 119895;
        setInterval(() => {
          this.items[2].value += this.$randomInteger(400, 580);
        }, 1000 * 60 * 60);

        this.items[3].value = 66168;
        setInterval(() => {
          this.items[3].value += this.$randomInteger(200, 350);
        }, 1000 * 60 * 60);

        this.items[4].value = 28324;
        setInterval(() => {
          this.items[4].value += this.$randomInteger(90, 150);
        }, 1000 * 60 * 60);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-info {
  margin-top: 16px;
  .info-item {
    display: flex;
    justify-content: space-between;
    padding: 13px 12px;
    font-size: 18px;

    &:nth-child(odd) {
      background-color: var(--primary);
    }

    @media (max-width: 2500px) {
      font-size: 17px;
    }
    @media (max-width: 2000px) {
      font-size: 16px;
    }
    @media (max-width: 1800px) {
      font-size: 15px;
    }
  }
}
</style>
