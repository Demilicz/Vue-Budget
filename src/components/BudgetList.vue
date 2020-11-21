<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <BudgetListItems @deleteItem="onDeleteItem" :list="list"/>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItems from "@/components/BudgetListItems";
export default {
  name: "BudgetList",
  data: () => ({
    header: "Budget List",
  }),
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  components:{
    BudgetListItems
  },
  methods:{
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },

  }
}

</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>