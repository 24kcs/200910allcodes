import Vue from 'vue';
// 引入部分组件
import {
  MessageBox,
  Message
} from 'element-ui';


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;