<template>
      <div class="budget-list-wrap">
        <ElCard :header="header">
          <div>
            <el-dialog
            title="Warning"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
              <span>It should be noted that the content will not be aligned in center by default</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDialog(false)">Cancel</el-button>
                <el-button type="primary" @click="onDeleteItem(newId)">Confirm</el-button>
              </span>
            </el-dialog>
          </div>
      <BudgetListItems @deleteItem="onDeleteItem" @wiewDialog="onDialogShow" :list="list" :centerDialogVisible="centerDialogVisible"/>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItems from "@/components/BudgetListItems";


export default {
  name: "BudgetList",
  data: () => ({
    header: "Budget List",
    centerDialogVisible: false,
    newId: "Some id"
  }),
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  components:{
    BudgetListItems,

  },
  methods:{
    onDeleteItem(id) {
      this.$delete(this.list, id);
      this.cancelDialog(false);
    },
    onDialogShow(visible , id ){
      this.centerDialogVisible = visible;
      this.newId = id;
    },
    cancelDialog(bool){
      this.centerDialogVisible = bool;
    }
  }
}

</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>