<template>
  <div class="total-value green" v-if="total > 0">Balance: {{ total }}</div>
  <div class="total-value red" v-else-if="total < 0">Balance: {{ total }}</div>
  <div class="total-value" v-else>Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.green {
  color:green;
}
.red {
  color: red;
}
</style>