<template>
  <div class="box graph-card">
    <div class="lhs">
      <p class="title">{{ title }}</p>
      <div style="margin-top: 16px">
        <p class="info-key">{{ firstKey }}</p>
        <p class="info-value" :style="`color: ${firstColor}`">
          {{ $formatNumber(firstValue) }}
        </p>
      </div>
      <div style="margin-top: 10px">
        <p class="info-key">{{ secondKey }}</p>
        <p class="info-value" :style="`color: ${secondColor}`">
          {{ $formatNumber(secondValue) }}
        </p>
      </div>
    </div>
    <div class="rhs">
      <canvas :id="`pie-chart${id}`" width="180px" height="180px"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    id: {
      type: Number,
      default: Date.now(),
    },
    title: {
      type: String,
      required: true,
    },
    firstKey: {
      type: String,
      required: true,
    },
    firstValue: {
      type: Number,
      required: true,
    },
    secondKey: {
      type: String,
      required: true,
    },
    secondValue: {
      type: Number,
      required: true,
    },

    firstColor: {
      type: String,
      required: true,
    },
    secondColor: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.setupChart();
  },

  methods: {
    setupChart() {
      new Chart(document.getElementById(`pie-chart${this.id}`), {
        type: "pie",
        data: {
          datasets: [
            {
              backgroundColor: [this.firstColor, this.secondColor],
              data: [37, 63],
            },
          ],
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.graph-card {
  display: flex;
  .lhs {
    width: 50%;
    .title {
      font-size: 1.25rem;
      color: var(--white);
      font-family: "inter-bold" !important;
    }

    .info-key {
      font-size: 1.125rem;
      color: var(--white);
      font-family: "open-sans-bold" !important;
    }

    .info-value {
      font-size: 3rem;
      font-family: "open-sans-bold" !important;
    }
  }

  .rhs {
    width: 50%;
  }
}
</style>
