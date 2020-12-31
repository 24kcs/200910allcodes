<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List :todos="todos" />
      <Footer :todos="todos" :isCheckAll="isCheckAll">
        <label slot="left">
          <input type="checkbox" v-model="isAllCheck" />
        </label>
        <span slot="center">
          <span>已完成{{ count }}</span> / 全部{{ todos.length }}
        </span>
        <button slot="right" class="btn btn-danger">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>
<script>
// 引入Header组件
import Header from './components/Header'
// 引入List组件
import List from './components/List'
// 引入Footer组件
import Footer from './components/Footer'

// 引入PubSub插件
import PubSub from 'pubsub-js'
import storage from './utils/storage'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      // todos: [
      //   { id: 1, title: '奔驰', isCompleted: false },
      //   { id: 2, title: '宝马', isCompleted: true },
      //   { id: 3, title: '拖拉机', isCompleted: false },
      // ],
      // todos: JSON.parse(localStorage.getItem('todos_key')||'[]')
      todos:storage.getTodos()
    }
  },
  methods: {
    // 添加todo的一个方法
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 删除todo的一个方法
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    // 切换选中效果
    toggleTodo(todo) {
      todo.isCompleted = !todo.isCompleted
    },
    // 是否全选(全选/全不选)
    isCheckAll(isCompleted) {
      this.todos.forEach((item) => {
        item.isCompleted = isCompleted
      })
    },
  },
  // 页面渲染完毕的生命周期
  mounted() {
    // msg---消息名字,deleteTodo
    // data----发布消息的时候传入的数据
    this.token = PubSub.subscribe('deleteTodo', (msg, index) => {
      // 调用当前组件的自己的方法
      this.deleteTodo(index)
    })

    // 通过事件总线绑定事件
    this.$bus.$on('toggleTodo', (todo) => {
      this.toggleTodo(todo)
    })
    // console.log(this)

    // console.log(this.__proto__.__proto__===Vue.prototype)
  },
  beforeDestroy() {
    // 取消消息订阅
    PubSub.unsubscribe(this.token)
    // 解绑全局事件总线的相关事件'
    // 解绑所有的事件
    this.$bus.$off()
  },
  computed: {
    count() {
      return this.todos.reduce(
        (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
        0
      )
    },
    isAllCheck: {
      get() {
        return this.todos.length > 0 && this.count === this.todos.length
      },
      set(val) {
        this.isCheckAll(val)
      },
    },
  },
  watch: {
    todos:{
      // 深层次监视
      deep:true,
      // handler:function(val){
      //   // 只要是数据变化了,那么就把数据缓存到浏览器中
      //   // localStorage.setItem('todos_key',JSON.stringify(val))
      //   storage.setTodos(val)
      // }
      handler: storage.setTodos
    }
  }
}
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
