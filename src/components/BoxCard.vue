<template>
  <div class="box box-card">
    <span class="ff-medium">{{ title }}</span>
    <h3 class="ff-bold mt-2" :id="`number${id}`">
      {{ $formatNumber(value) }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // this.counter(`number${this.id}`, this.value, this.value + 200, 300);
  },
  methods: {
    counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = this.$formatNumber(current);
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  span {
    font-size: 20px;
  }

  h3 {
    font-size: 48px;
  }

  // @MEDIA
  @media (max-width: 2500px) {
    span {
      font-size: 14px;
    }

    h3 {
      font-size: 24px;
    }
  }
}
</style>
