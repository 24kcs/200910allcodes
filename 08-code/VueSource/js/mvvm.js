// MVVM的构造函数,options是一个参数,存储的是new MVVM的时候传入的配置对象的地址
function MVVM(options) {
    // options----配置对象直接保存到了$options属性中(存储的是地址)
    // $options是一个属性,
    // this是MVVM的实例对象,由于js是一门动态类型的语言,对象没有这个属性,点了,就有了
    this.$options = options || {};
    // data是变量(外部不能访问),和_data属性中都存储了$options属性中的data属性的地址
    var data = this._data = this.$options.data;
    // 先把当前的MVVM的实例对象保存到me变量中
    var me = this;

    // 实现数据代理的原理代码
    // data中所有的属性进行遍历操作, key----msg属性
    Object.keys(data).forEach(function(key) {
        // me-----MVVM的实例对象-----vm
        // 真真的开始实现数据代理了
        me._proxyData(key);
    });

    this._initComputed();
    // 开始数据劫持----劫持之后,data中的每个属性都有一个dep对象(id,subs数组)
    observe(data, this);




    // 模版解析操作----html中的内容要进行翻译成页面中真实的效果
    // options.el -----#app   如果#app没有,则把body当成html的容器传递进去
    // 同时也传入了this---vm 
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
    // 实现数据代理的真正的原理代码
    // key----msg属性, setter和getter此次没有传递任何数据,为undefined
    _proxyData: function(key, setter, getter) {
        // this----->vm
        // me----->vm
        var me = this;
        // 向vm实例对象中添加了msg属性------>此时实现了数据代理
        setter = setter || 
        Object.defineProperty(me, key, {
            // 新添加的这个属性不能被删除
            configurable: false,
            // 该属性可以被枚举遍历出来-需要转成数组后-forEach可以遍历(for-in)
            enumerable: true,
            // 重写get方法,外部只要是通过vm.msg,或者vm['msg']就会自动的进入到get方法内部
            get: function proxyGetter() {
                // 外部通过vm.msg的时候,获取的是_data对象中的msg属性的值
                return me._data[key];
            },
            // 重写set方法,外部只要是通过vm.msg=值, 或者vm['msg']=值,就会自动的进入到set方法内部
            set: function proxySetter(newVal) {
                // newVal就是新赋的值
                // me--->this--->vm
                // vm._data['msg']=新值
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};