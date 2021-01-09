// 构造函数
// el---->#app要么就是body 
// vm ------vm实例对象
function Compile(el, vm) {
    // 值把当前的vm实例对象存储到了this(----->编译的实例对象)的$vm属性中了
    this.$vm = vm;
    // 根据传递进来的选择器来获取html的容器对象div(id为app的div)
    // $el---->div容器
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    // 判断当前的容器div是否存在
    if (this.$el) {
        // 把div传入到node2Fragment方法中
        // $fragment就是文档碎片对象
        this.$fragment = this.node2Fragment(this.$el);
        // 模版解析开始
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    constructor: Compile,
    // 根据div把div中所有的子节点全部的放在文档碎片对象中,最终返回文本碎片对象
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            child;
        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        // 返回文档碎片对象
        return fragment;
    },
    // 开始模版解析,init这个方法本身并没有实现解析的操作,而是内部调用了一个解析模版的方法
    init: function() {
        // 该方法中才是真正的模版解析,传入的是文档碎片对象
        this.compileElement(this.$fragment);
    },
    // 真正的模版解析的方法,el-----文档碎片对象
    compileElement: function(el) {
        // 从文档碎片对象中取出所有的子节点
        var childNodes = el.childNodes,
            me = this;  // this----编译的实例对象
        // childNodes是所有的子节点组成的一个伪数组, 需要转真数组进行遍历
        // node ----每个子节点
        [].slice.call(childNodes).forEach(function(node) {
            // 获取节点的文本内容
            var text = node.textContent;
            // 插值的正则表达式 .*   msg
            var reg = /\{\{(.*)\}\}/;
            // 判断当前的节点是不是标签
            if (me.isElementNode(node)) {
                // 如果是标签,那么要对标签中的属性进行解析-----暂时不分析
                me.compile(node);

                // 判断当前的节点是不是文本节点,并且,该节点要和插值语法的正则表达式匹配
            } else if (me.isTextNode(node) && reg.test(text)) {
                // RegExp.$1 ----正则表达式中第一组----'msg'
                // node-----'{{msg}}'
                // 对插值语法进行解析
                me.compileText(node, RegExp.$1.trim());
            }

            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        // node----button按钮
        // nodeAttrs-----按钮中所有的属性
        // me----this----编译的实例对象
        var nodeAttrs = node.attributes,
            me = this;
        // 把nodeAttrs伪数组转真数组
        [].slice.call(nodeAttrs).forEach(function(attr) {
            // attr-----每一个属性  v-on:click="showName"
            //  attr.name  -------  v-on:click
            var attrName = attr.name;
            // 判断当前的v-on:click 是不是指令(依据就是   是不是 以v-开头的属性)
            if (me.isDirective(attrName)) {
                // exp ----showName 表达式
                var exp = attr.value;
                // dir -------on:click
                var dir = attrName.substring(2);
                // 判断当前的指令是不是事件指令
                if (me.isEventDirective(dir)) {
                    // node---button
                    // me.$vm---vm
                    // exp -----showName
                    // dir------on:click
                    compileUtil.eventHandler(node, me.$vm, exp, dir);

                    // 普通指令
                } else {
                    // dir ----text
                    // node----p
                    // exp ----msg
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }
                // 把node----button标签中所有的Vue相关的指令属性移除(每次遍历的时候干掉一个指令属性)
                node.removeAttribute(attrName);
            }
        });
    },
    // 进行插值语法的解析操作 
    // node-----'{{msg}}'
    // exp-----msg
    compileText: function(node, exp) {
        // node----{{msg}} 
        // this.$vm----vm对象
        // exp-----msg
        compileUtil.text(node, this.$vm, exp);
    },
    // 判断当前的属性是不是指令,依据是v-开头
    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },
    // 判断当前的这个指令是不是事件指令,依据是on开头
    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },
    // 根据节点判断当前的节点是不是标签节点
    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合----编译工具对象
var compileUtil = {
    // node----{{msg}}
    // vm
    // exp-----msg
    text: function(node, vm, exp) {
        // 'text'----标识
        this.bind(node, vm, exp, 'text');
    },

    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },

    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },
    // node----{{msg}}
    // vm
    // exp-----msg
    // dir-----text
    bind: function(node, vm, exp, dir) {
        // dir----'text'
        // dir+'Updater'-----'textUpdater'
        // updater----对象
        // updater['textUpdater']----函数
        var updaterFn = updater[dir + 'Updater'];
        // updaterFn-----textUpdater方法
        // this----当前的compileUtil的实例对象,调用的是>getVMVal()方法
        // vm----vm  exp-----msg
        // this._getVMVal(vm, exp)------根据vm获取msg表达式的值
        // 调用------textUpdater('{{msg}}','绣花枕头')
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    // node----button
    // vm
    // exp----showName表达式
    // dir -------on:click
    eventHandler: function(node, vm, exp, dir) {
        // eventType----click
        // 通过vm找到内部的methods对象,里面找showName函数,保存到fn中
        var eventType = dir.split(':')[1],
            fn = vm.$options.methods && vm.$options.methods[exp];

        // 判断click事件类型和showName是否都存在
        if (eventType && fn) {
            // 为button按钮绑定click事件,对应的回调就是showName
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },
    // 根据vm 获取msg表达式的值
    _getVMVal: function(vm, exp) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k) {
            val = val[k];
        });
        // 放回的是msg属性的值
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};

// 解析的对象
var updater = {
    // 把插值语法的这个字符串表达式替换成msg属性的值
    // {{msg}}----最终变成了   绣花枕头   的内容
    // v-text的最终的解析,插值语法也走这里
    textUpdater: function(node, value) {
        // node----'{{msg}}'.textContent = '绣花枕头'
        // 绣花枕头
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    // v-html的最终的解析
    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};