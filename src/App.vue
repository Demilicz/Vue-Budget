<template>
  <div id="app">
  <Form />
  <TotalBalance :total="totalBalance" />
  <BudgetList/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  computed: {
    ...mapGetters('listItems', ['listToDo']),
    totalBalance() {
      return Object.values(this.listToDo).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
