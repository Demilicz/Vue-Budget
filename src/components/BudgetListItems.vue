<template>
  <div class="list-items">
      <template v-if="!isEmpty">
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
          <span class="budget-comment">{{ item.comment }}</span>
          <span class="budget-value" :class="item.type === 'INCOME'? 'green':'red'" >{{ item.value }}
            <i v-if="item.type === 'INCOME'" class="el-icon-top" dir="ltr"></i>
            <i v-else class="el-icon-bottom"></i>
          </span>
          <ElButton type="danger" size="mini" @click="wiewDialog(true, item.id)">Delete</ElButton>
        </div>
      </template>
        <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
  </div>
</template>
<script>
export default {
  name: "BudgetListItems",
  props: {
    list: {
      type: Object,
      default: () => ({})
    },
    centerDialogVisible:{
      type: Boolean,
      default: false,
      required: true
    }
  },
  data: () => ({
    emptyTitle: "Empty List",
  }),
  computed: {
  isEmpty() {
    return !Object.keys(this.list).length;
    }
  },

  methods: {

    wiewDialog(visible, id) {
      this.$emit("wiewDialog",visible, id);
    },

  }
}
</script>

<style scoped>
  .list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.green {
  color:green;
}
.red {
  color: red;
}
</style>