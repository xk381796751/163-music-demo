# 仿网易云音乐
包含PC端的后台歌曲管理页面（admin 页面）

## 在线预览
[移动端-客户端](https://xk381796751.github.io/163-music-demo/src/index.html)

注：上传歌曲功能需在本地启动server.js，并添加qiniu-key.json文件(存歌的数据库的key，未上传到github)，在后台管理页面上传歌曲封面时，图片尺寸需为1:1(即正方形)。

## 本地预览
1. npm i -g http-server
2. http-server -c-1
3. node server 8888
4. 浏览器打开 http://127.0.0.1:8080/src/admin.html

## 技术栈
该项目包括PC端后台管理页面 以及 移动端首页和歌曲播放页面，项目主要涉及到的技术有：

- HTML5：根据 HTML 最新标准使用具有语义化的标签
- CSS3：根据 CSS 语言最新版本为元素设置正确的样式
- jQuery：原生 JS 的封装库，更加便捷的操作 DOM 以及调用 JS API
- MVC：即 Model、View、Controller，一种软件设计模式，面向对象编程
- EventHub：事件中心提供模块间的通信方法
- LeanCloud：提供一站式后端云服务，作为歌曲信息存储的后台云服务器
- 七牛云：国内领先的企业级云服务商，作为歌曲文件存储的后台云服务器
