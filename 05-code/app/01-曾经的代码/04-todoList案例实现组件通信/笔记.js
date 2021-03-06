/**
 * 
 * 面试题:谈谈你对组件通信的理解(Vue/React)
 * 组件通信:组件和组件之间传递信息数据
 * 组件的关系: 父子关系(直接/间接)/兄弟关系
 * 组件通信的方式:
 * 1. props:父子组件通信/子父组件通信
 * 2. 自定义事件:父子组件通信/子父组件通信   $emit() 分发事件
 * 3. (全局)事件总线:可以实现任意组件的通信
 * 4. PubSub(不属于Vue,但是在Vue中也可以使用),可以实现任意组件的通信
 * 5. 插槽(普通插槽/具名插槽:插槽有名字/作用域插槽)
 * .... 一共将近10来个(高级)
 * 
 * 
 * 
 */

 // 原型: 原型是对象,prototype是显示原型,__proto__隐式原型
 // prototype显示原型对象,是浏览器的标准属性,给程序员使用的
 // __proto__是隐式原型,是浏览器的非标准属性,给浏览器使用的
 /**
  * 原型是什么时候产生的!
  * prototype是函数定义的时候产生的
  * __proto__是实例化对象的时候产生的
  * 原型的作用:
  * 节省内存空间,实现数据共享,可以实现面向对象的继承
  * 
  * 
  * 
  * 
  * 函数定义 是怎么回事? 函数声明或者定义后,js引擎在解析js代码的时候,已经确定了全局作用域,--->预解析(函数的声明的提升---函数定义的代码就执行了)--->全局执行上下文环境
  * 
  * 
  * 
  * 
  */
 // 什么是原型
 // 原型是什么 

 // 对象:




 function f1 (num){
   console.log(num)
 }
 function f2(num){
   console.log(num)
 }
// 输出num的数据
 var f3 =function(num){
  f1(num)
 }
 var f3 = f1
 f3(10)

 var f4 = f1

 f4(10)
 f1(10)