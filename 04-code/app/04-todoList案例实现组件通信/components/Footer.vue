<template>
  <div class="todo-footer">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </div>
</template>
<script>
export default {
  name: 'Footer',
  // props: {
  //   todos: Array,
  //   isCheckAll:Function
  // },
  // computed: {
  //   count() {
  //     return this.todos.reduce(
  //       (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
  //       0
  //     )
  //   },
  //   isAllCheck: {
  //     get() {
  //       return this.todos.length > 0 && this.count === this.todos.length
  //     },
  //     set(val) {
  //       this.isCheckAll(val)
  //     },
  //   },
  // },
}
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
