# gulp-es6-sass-dev
基于gulp的前端静态页面开发工具
# 项目解决的问题
> 完整的前端静态页面以及资源自动化 之前使用过简单的刷新浏览器 sass编译 js压缩 这次研究做了一个功能完善更强大的 包括 <sass编译> <css压缩> <es6编译>
<js依赖打包><js压缩><html模板><图片压缩><雪碧图生成> 通过使用gulp工作流来提高工作效率 减少重复性工作 可以关注核心代码开发
#项目结构 src文件夹中编写自己代码
*   /images 
> 图片资源 里面的sprite文件夹中放图标 可以生成雪碧图 对应文件夹 dist/images/sprite
*   /include 
> html模块文件 不会生成页面 可以在页面中引入
*   /js 
> main.js入口文件 可以使用 AMD CMD语法 通过webpack打包完整js文件 以及压缩
*   /lib 
> 插件文件夹 只会复制到dist目录不会进行编译 比如存放jquery animate.css等第三方库
*   /sass 
> sass源文件 会进行编译 自动补全浏览器前缀压缩
*   /*.html
> 页面文件 可以使用include文件夹中的模板 css js需手动引入 多个文件会生成多个页面在dist目录下
# 运行命令
*   npm install && cnpm install
> 初始化项目依赖文件
*   npm run dev (默认端口为 666 可以在package.json中scripts中修改)
> 执行项目开发命令 会编译src中文件 并运行一个开发环境服务器 包括修改源码自动刷新浏览器 sass编译 js编译 文件复制
*   npm run build
> 生成一次dist编译后的文件 不会打开浏览器

* * *
  测试版本 后续持续优化 有bug可以直接联系作者qq:835854385 飞飞
