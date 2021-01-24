import Vue from 'vue';
import AddressModelTemplate from './index.vue';
// 产生了一个组件的构造函数
const AddressModel = Vue.extend(AddressModelTemplate);

const address = {
    // 存储的是真实的DOM对象
    el: null,
    // 用来存储组件的实例对象
    addressModel: null,
    // 构造器
    constructor: null,
    // 初始化当前组件的实例对象
    init() {
        // 没有这个组件实例对象则创建,并复用
        if (!this.addressModel) {
            // 此时组件实例对象已经创建了,但是没有生成真实的DOM
            this.constructor = new AddressModel();
            // 挂载生成真实的DOM
            this.addressModel = this.constructor.$mount();
            // 取出真实的DOM单独的保存起来
            this.el = this.addressModel.$el;
        }

       this.mount();
    },
    // 把真实DOM插入到body中
    mount() {
        document.body.appendChild(this.el);
    },
    // 卸载该组件
    unmount() {
        document.body.removeChild(this.el);
    },
    // 直接清除所有的表单的数据
    clear() {
        Object.assign(this.addressModel.$data.addressInfo, this.addressModel.$options.data().addressInfo)
    }
}
// 设置回调函数,允许传入回调函数-----确定按钮的回调
Object.defineProperty(address, 'confirm', {
    configurable: false,
    enumerable: true,
    set(value) {
        this.addressModel.$off('confirm', this.addressModel._confirm);
        this.addressModel._confirm = value;
        this.addressModel.$on('confirm', value);
    },
    get() {
        return this.addressModel._confirm;
    }
})
// 取消按钮
Object.defineProperty(address, 'cancel', {
    configurable: false,
    enumerable: true,
    set(value) {
        this.addressModel.$off('cancel', this.addressModel._cancel);
        this.addressModel._cancel = value;
        this.addressModel.$on('cancel', value);
    },
    get() {
        return this.addressModel._cancel;
    }
})
// 向组件内部传入props数据
Object.defineProperty(address, 'formData', {
    configurable: false,
    enumerable: true,
    set(value) {
        this.addressModel.$props.formData = value;
    },
    get() {
        return this.addressModel.$props.formData;
    }
})
// 全局,注册该组件了
Vue.prototype.$address = function () {
    address.init();
    return address;
}