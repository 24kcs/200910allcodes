<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.13="add"
      v-model="title"
    />
  </div>
</template>
<script>
export default {
  name: 'Header',
  // 接收
  // props: {
  //   addTodo: {
  //     type: Function,
  //     required: true, // 必须的
  //   },
  // },
  data() {
    return {
      title: '', // 收集文本框中输入的数据的
    }
  },
  methods: {
    // 添加数据的方法
    add() {
      const { title } = this
      if (title.trim()) {
        const todo = {
          id: Date.now(),
          title,
          isCompleted: false,
        }
        // this.addTodo(todo)
        // 分发传递进来的事件
        // 参数1:事件类型
        // 参数2:该事件对应的回调函数中需要的参数数据
        this.$emit('addTodo',todo)
        // 清空文本框
        this.title = ''
      }
    },
  },
}
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
