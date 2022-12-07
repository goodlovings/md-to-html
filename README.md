# md-to-web

将 markdown 转化为 html。
不用区分前端框架（如：react、vue、vue3、vanilla 等），适用于所有的能够使用 js/ts 的环境！

## 安装

```javascript
// npm
npm install md-to-web

//yarn
yarn add md-to-web
```

## 使用

提供如下方法：

- 1、mdToHtml：将 **markdown** 字符串转化为 **html** 格式文本
- 2、mdRender：接收 **dom** 到 id，将 **markdown** 字符串转化为 **html** 格式文本，并渲染到指定 id 的 dom 上；

```javascript
import { mdToHtml, mdRender } from "md-to-web";

let html = mdToHtml("# 一级标题"); // 输出：<h1>一级标题</h1>

mdRender("markdown_id", "# 一级标题"); // =>页面id为markdown_id元素渲染子节点<h1>一级标题</h1>
```

## 类型

```javascript
export declare function mdToHtml(mdstr: string): string;

export declare function mdRender(id: string, mdstr: string): void;
```
