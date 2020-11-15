<template>
  <div class="budget-list-wrap">
    <ElCard>
      <span>{{header}}</span>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  data: () => ({
    header: "Budget List",
  }),
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
  font-size: 23px;
}
</style>