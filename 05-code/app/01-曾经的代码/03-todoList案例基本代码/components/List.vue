<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index" :toggleTodo="toggleTodo" />
  </ul>
</template>
<script>
// 引入Item组件
import Item from './Item'
export default {
  name: 'List',
  components: {
    Item
  },
  props: ['todos','deleteTodo','toggleTodo'],
  // 界面渲染
  // mounted () {
    // this---->当前组件的实例对象----该对象的类型是:VueComponent
    // 组件的实例对象和Vue实际上是继承关系
    // console.log(this)
  // }
}
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
