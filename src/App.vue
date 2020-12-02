<template>
  <div id="app">
  <Form @submitForm="onFormSubmit" />
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
  data: () => ({
    // list: {
    //   1: {
    //     type: "INCOME",
    //     value: 100,
    //     comment: "Some comment",
    //     id: 1
    //   },
    //   2: {
    //     type: "OUTCOME",
    //     value: -50,
    //     comment: "Some outcome comment",
    //     id: 2
    //   }
    // },


  }),
  computed: {
    ...mapGetters('listItems', ['listToDo']),
    totalBalance() {
      return Object.values(this.listToDo).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },

  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.listToDo, newObj.id, newObj);
    }
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
