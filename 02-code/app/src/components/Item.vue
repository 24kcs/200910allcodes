<template>
  <li
    @mouseenter="handleMouse(true)"
    @mouseleave="handleMouse(false)"
    :style="{ color: myColor, backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="todo.isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>
<script>
export default {
  name: 'Item',
  props: {
    // 限制当前接收的父级组件传递过来的数据的类型
    todo: Object,
  },
  data() {
    return {
      myColor: 'black',
      bgColor: 'white',
    }
  },
  methods: {
    handleMouse(flag) {
      // 鼠标进入
      if (flag) {
        this.myColor = 'pink'
        this.bgColor = 'green'
      } else {
        // 鼠标离开
        this.myColor = 'black'
        this.bgColor = 'white'
      }
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
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
