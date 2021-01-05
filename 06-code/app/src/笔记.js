/**
 * 
 * Vuex的使用思路及注意事项
 * 
 * 什么情况下会使用Vuex
 * 任意组件之间通信可以使用Vuex(如果组件很多,或者状态数据也很多,需要进行统一的管理)
 * 
 * 1. 组件中获取Vuex的状态数据
 *  this.$store.state.xxx
 *  ...mapState(['xxx'])
 * 2. 组件中如何提交mutation
 *  this.$store.commit('某个mutation的type')
 *  ...mapMutations(['某个mutation的type']) 这个代码一般会放在methods对象中
 * 3. 组件中如何提交action
 *  this.$store.dispatch('某个action的名字')
 *  ...mapActions(['某个action的名字'])  这个代码一般会放在methods对象中
 * 4. 组件中如何获取vuex中的计算属性
 *  this.$store.getters.xxx
 *  ...mapGetters(['xxx'])
 * 
 * 总结:
 * mutations中的每个mutation一般都是同步的代码(不建议放入异步操作的代码)
 * actions中的每个action一般可以是同步也可以是异步的代码(和后台会进行交互)
 * devTools工具(Vue在浏览器中的插件) 中可以查看每一次的mutation的提交
 * 
 * 谈谈Vuex的理解
 * 是一个对象,用来管理状态数据,是一种集中式管理状态数据的模式
 * 当中有state/mutations/actions/getters
 * state:包含了多个状态数据的对象
 * mutations:包含了多个直接修改状态数据的方法的对象
 * actions:包含了多个间接修改状态数据的方法的对象
 * getters:包含了多个状态数据的计算属性的get方法的对象
 * 如果项目涉及到了任意组件的通信,此时可以使用Vuex,当然也可以使用事件总线
 * 区别:一个集中到了Vue中,一个是本质通过原型来实现
 * 原型----->闭包---->作用域--->执行上下文环境----预解析---->递归---深拷贝
 * 严格模式--->es6,7,8,9,10,11
 * ... 箭头函数,promise....js异步操作---单线程---事件轮询机制
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */