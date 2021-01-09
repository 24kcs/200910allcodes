function Watcher(vm, expOrFn, cb) {
    // expOrFn----msg表达式或者可能是一个函数
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    // 用来存储dep的id和这个dep对象
    this.depIds = {};
    // 判断当前的表达式是不是一个函数
    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        // getter中存储的就是函数
        this.getter = this.parseGetter(expOrFn.trim());
    }
    // 获取当前这个表达式的值
    this.value = this.get();
}

Watcher.prototype = {
    constructor: Watcher,
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },

    // 建立dep对象和watcher对象的关系
    addDep: function(dep) {
       // 先判断wacher对象中的depIds对象中是否有当前的dep的id
        if (!this.depIds.hasOwnProperty(dep.id)) {
            // watcher对象中没有个这个dep,开始建立关系
            // this----watcher对象
            // 把watcher对象添加到dep对象中的subs数组中
            dep.addSub(this);
            // 把dep的id和对应的这个dep对象,以键值对的方式添加到当前的watcher对象中的depIds对象中
            this.depIds[dep.id] = dep;
        }
    },
    get: function() {
        // 先保存当前的watcher对象
        Dep.target = this;
        var value = this.getter.call(this.vm, this.vm);
        // 当dep和watcher关系建立清空之前存储的watcher
        Dep.target = null;
        // 返回对应的表达式的值
        return value;
    },

    parseGetter: function(exp) {
        if (/[^\w.$]/.test(exp)) return; 
        // 如果html模版中有: obj.name
        // exps是数组,红就会存储[obj,name]

        // 此时['msg']
        var exps = exp.split('.');

        return function(obj) {
            // obj---vm对象
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                // obj = vm [exps[0]]
                // obj = vm['msg']
                // obj 中最终存储的是msg属性的值
                // vm.msg
                obj = obj[exps[i]];
            }
            // 返回msg属性的值
            return obj;
        }
    }
};