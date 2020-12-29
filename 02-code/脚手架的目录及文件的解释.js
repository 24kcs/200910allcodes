/**
 * 
 * 通过下载脚手架2.x工具,下载Vue的项目的流程
 * 1. 下载安装脚手架2.x工具
 * npm install -g vue-cli
 * 2. 查看vue 的版本
 *  vue -V
 * 3. 初始化Vue项目
 * vue init webpack 项目名字app
 * 切换到项目的目录
 * cd app
 * 运行项目
 * npm run dev
 * 
 * 如果当前脚手架的版本是3.x或者4.x的,此时是无法使用脚手架2.x的命令下载vue项目的
 * 安装一个桥接工具
 * npm install -g @vue/cli-init
 * 
 * 项目中各个目录及部分文件的作用:
 * 
 * build目录内部配置webpack的
 * config目录中的index.js可以设置项目运行后是否以自动的方式打开浏览器展示
 * node_modules目录---各个包
 * src目录项目的主入口目录
 * static目录 存放index.html文件所需要的静态资源(图片/样式文件)
 * .babelrc 文件,配置babel的
 * .eslintignore 内部可以配置eslint语法检查忽略什么样的文件
 * .eslintrc 文件内部可以一个一个配置eslint语法检查忽略信息
 * index.html文件,最终书写的内容都会放在该文件的id为app的div中
 * 
 * config目录index.js文件中  18行代码 位置   autoOpenBrowser: true, 浏览器自动打开项目
 * 
 * 运行项目
 * npm run dev 或者  npm start
 * 打包项目
 * npm run build  最终会产生一个dist目录----->将来这个目录会给运维的同事,然后上线
 * 
 * 
 * 
 * 
 */