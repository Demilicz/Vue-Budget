<template>
      <div class="budget-list-wrap">
        <ElCard>
          {{sort}}
          <el-button-group>
            <el-button type="primary" icon="el-icon-top"  @click="target='INCOME'">Income</el-button>
            <el-button type="primary" icon="el-icon-bottom" @click="target='OUTCOME'">Outcome</el-button>
            <el-button type="primary" icon="el-icon-check"  @click="target='ALL'">All</el-button>
          </el-button-group>
        </ElCard>
        <ElCard  :header="header">
          <div>
            <el-dialog
            title="Warning"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
              <span>Are you sure you want to delete this item?</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDialog(false)">Cancel</el-button>
                <el-button type="primary" @click="onDeleteItem(newId)">Confirm</el-button>
              </span>
            </el-dialog>
          </div>
      <BudgetListItems @deleteItem="onDeleteItem" @wiewDialog="onDialogShow" :target="target" :list="list" :centerDialogVisible="centerDialogVisible"/>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItems from "@/components/BudgetListItems";
import { mapGetters } from 'vuex';


export default {
  name: "BudgetList",
  data: () => ({
    sort: "Show :",
    header: "Budget List",
    centerDialogVisible: false,
    newId: "Some id",
    target: "All"
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
      this.$delete(this.listToDo, id);
      this.cancelDialog(false);
    },
    onDialogShow(visible , id ){
      this.centerDialogVisible = visible;
      this.newId = id;
    },
    cancelDialog(bool){
      this.centerDialogVisible = bool;
    },
   },
   computed:{
     ...mapGetters('listItems', ['listToDo']),
   }
  }


</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>