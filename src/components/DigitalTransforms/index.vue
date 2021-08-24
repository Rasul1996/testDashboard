<template>
  <ByRegions />
  <ByDepartments style="margin-top: 0.5em" />
</template>

<script>
import ByRegions from "./ByRegions.vue";
import ByDepartments from "./ByDepartments.vue";
export default {
  components: {
    ByRegions,
    ByDepartments,
  },
};
</script>
