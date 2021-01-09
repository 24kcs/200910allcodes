// 劫持的构造函数
function Observer(data) {
    // 存储当前的data
    this.data = data;
    // 开始劫持操作
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    // 开始劫持
    walk: function(data) {
        // 保存当前的劫持实例对象
        var me = this;
        // 遍历data对象中所有的属性,key----msg
        Object.keys(data).forEach(function(key) {
            // 开始进行真正的劫持操作
            // key----msg   data[msg]---data.msg---'值'
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        // 真正的劫持操作
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function(data, key, val) {
        // 创建dep对象----只要有一个属性,就创建一个dep对象(id,subs数组)
        var dep = new Dep();
        // 如果当前msg属性的值 还是一个对象的情况下,那么就再次进行劫持(递归操作)
        var childObj = observe(val);
        // 为当前的劫持对象中的data,添加mvvm中的data中的属性(把MVVM中的data属性拿出来添加到劫持对象的data对象中)
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            // 重写了get方法,只要外部访问了vm.msg或者vm['msg']就会先进入到MVVM中的get,然后进入到这个get中
            get: function() {
                // 判断当前的watcher对象是否存在
                if (Dep.target) {
                    // 开始要建立watcher和dep的关系
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};
// 劫持函数
function observe(value, vm) {
    // 如果value没有值,或者value不是对象,就直接返回
    if (!value || typeof value !== 'object') {
        return;
    }
    // value是对象,就创建劫持的实例对象
    return new Observer(value);
};


var uid = 0;

function Dep() {
    // dep的id
    this.id = uid++;
    // dep 对象中的subs数组----专门存储watcher对象的
    this.subs = [];
}

Dep.prototype = {
    // subs数组中添加sub----watcher对象
    addSub: function(sub) {
        this.subs.push(sub);
    },
    // 此时调用watcher对象的addDep方法,把dep添加到watcher中,watcher添加到dep中
    depend: function() {
        // Dep.target---watcher对象
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;