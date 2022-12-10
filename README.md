# md-to-web

将 markdown 转化为 html。
不用区分前端框架（如：react、vue、vue3、vanilla 等），适用于所有的能够使用 js/ts 的环境！

## 安装

### npm 方式

```javascript
// npm
npm install md-to-web@latest

//yarn
yarn add md-to-web@latest
```

### cdn 方式

```javascript
// umdjs
<script src="https://cdn.jsdelivr.net/npm/md-to-web@latest/dist/mtw.umd.js"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <script src="https://cdn.jsdelivr.net/npm/md-to-web@latest/dist/mtw.umd.js"></script>
    <title></title>
    <style>
      #app {
        height: 100px;
        width: 800px;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script>
    mtw.mdRender("app", "## 测试标题", "fancy");
  </script>
</html>
```

## 使用

提供如下方法：

### 1、mdToHtml

将 **markdown** 字符串转化为 **html** 格式文本

| 参数  | 必须 | 类型   | 描述                   |
| ----- | ---- | ------ | ---------------------- |
| mdstr | ✅   | string | 传入的 markdown 字符串 |

### 2、mdRender

接收 **dom** 到 id，将 **markdown** 字符串转化为 **html** 格式文本，并渲染到指定 id 的 dom 上；

| 参数  | 必须 | 类型   | 描述                           |
| ----- | ---- | ------ | ------------------------------ |
| id    | ✅   | string | 将转化的内容渲染到 id 的元素上 |
| mdstr | ✅   | string | 传入的 markdown 字符串         |
| theme |      | string | 渲染内容到主题样式             |

> **theme 提供的样式：**
> channing-cyan,
> condensed-night-purple,
> cyanosis,
> fancy,
> github,
> hydrogen,
> juejin,
> smartblue,
> greenwillow,
> v-green,
> vue-pro,
> healer-readable,
> mk-cute,
> jzman,
> geek-black,
> awesome-green,
> qklhk-chocolate,
> orange,
> scrolls-light,
> simplicity-green,
> arknights,
> vuepress,
> Chinese-red,
> nico,
> devui-blue

### 3、setCatalog

根据 **markdown_id** 渲染节点内容生成目录数据，并渲染在 **catalog_id** 的 dom 上，第三个参数 true 表示点击目录定位到 md 内容位置
| 参数 | 必须 | 类型 | 描述 |
| ----- | ---- | ---- | ------------------------------ |
| sourceId | ✅ | string | 需要进行生成目录的 markdownid 的元素 |
| targetId | ✅ | string | 生成目录渲染的 catalogid|
| isClickAnchor | |boolean | md 内容是否可以点击目录进行定位，默认 true |

## 实例

```javascript
import { mdToHtml, mdRender } from "md-to-web";

// 输出：<h1>一级标题</h1>
let html = mdToHtml("# 一级标题");

// 页面id为markdown_id元素渲染子节点<h1>一级标题</h1>， "fancy"为markdown内容的主题样式
mdRender("markdown_id", "# 一级标题", "fancy");

// 根据markdown渲染节点内容生成目录数据，并渲染在catalog_id的dom上，第三个参数 true 表示点击目录项定位到md内容位置
setCatalog("markdown_id", "catalog_id", true);
```
