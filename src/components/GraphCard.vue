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
    <template v-if="isCanvasReady && !nextCanvas">
      <div
        class="rhs"
        :style="`width: ${canvasWidth}; height: ${canvasHeight}`"
      >
        <canvas :id="`pie-chart${id}`"></canvas>
      </div>
    </template>
    <template v-else>
      <div class="rhs">
        <canvas width="180px" height="180px" :id="`pie-chart${id}`"></canvas>
      </div>
    </template>
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
    if (window.innerWidth < 2400 && window.innerWidth >= 2000) {
      this.canvasWidth = "241px";
      this.canvasHeight = "auto";
    } else if (window.innerWidth >= 2400 && window.innerWidth < 2750) {
      this.canvasWidth = "300px";
      this.canvasHeight = "auto";
    } else {
      this.nextCanvas = true;
    }

    this.isCanvasReady = true;

    this.$nextTick(() => {
      this.setupChart();
    });
  },

  data() {
    return {
      isCanvasReady: false,
      canvasWidth: "211px",
      canvasHeight: "auto",
      nextCanvas: false,
    };
  },

  methods: {
    setupChart() {
      Chart.defaults.global.legend.display = false;
      // eslint-disable-next-line no-unused-vars
      const chart = new Chart(document.getElementById(`pie-chart${this.id}`), {
        type: "pie",
        data: {
          labels: [this.firstKey, this.secondKey],
          datasets: [
            {
              backgroundColor: [this.firstColor, this.secondColor],
              data: [this.firstValue, this.secondValue],
            },
          ],
        },
      });

      // chart.resize(130, 130)
    },
  },
};
</script>

<style lang="scss" scoped>
.graph-card {
  display: flex;
  max-width: 100%;
  .lhs {
    width: 50%;
    .title {
      font-size: 20px;
      color: var(--white);
      font-family: "inter-bold" !important;
    }

    .info-key {
      font-size: 18px;
      color: var(--white);
      font-family: "open-sans-bold" !important;
    }

    .info-value {
      font-size: 48px;
      font-family: "open-sans-bold" !important;
    }

    @media (max-width: 2500px) {
      .title {
        font-size: 19px;
      }

      .info-key {
        font-size: 17px;
      }

      .info-value {
        font-size: 36px;
      }
    }
    @media (max-width: 2000px) {
      .title {
        font-size: 18px;
      }

      .info-key {
        font-size: 16px;
      }

      .info-value {
        font-size: 28px;
      }
    }
    @media (max-width: 1500px) {
      .title {
        font-size: 16px;
      }

      .info-key {
        font-size: 15px;
      }

      .info-value {
        font-size: 22px;
      }
    }
  }

  .rhs {
    width: 50%;
  }

  // @media (max-width: 2000px) {
  //   flex-direction: column;

  //   .lhs,
  //   .rhs {
  //     width: 100%;
  //   }
  // }
}
</style>
