<template>
  <li
    @mouseenter="handleMouse(true)"
    @mouseleave="handleMouse(false)"
    :style="{ color: myColor, backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">
      删除
    </button>
  </li>
</template>
<script>
export default {
  name: 'Item',
  props: {
    // 限制当前接收的父级组件传递过来的数据的类型
    todo: Object,
    deleteTodo: Function,
    index: Number,
    toggleTodo:Function
  },
  data() {
    return {
      myColor: 'black', // 字体颜色
      bgColor: 'white', // 背景色
      isShow: false, // 删除按钮是否显示
    }
  },
  methods: {
    handleMouse(flag) {
      // 鼠标进入
      if (flag) {
        this.myColor = 'green'
        this.bgColor = 'pink'
        this.isShow = true
      } else {
        // 鼠标离开
        this.myColor = 'black'
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    delTodo() {
      if (window.confirm('您确定要删除该数据吗')) {
        this.deleteTodo(this.index)
      }
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.todo.isCompleted
      },
      set() {
        // console.log('要修改选中效果')
        this.toggleTodo(this.todo)
      },
    },
  },
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
