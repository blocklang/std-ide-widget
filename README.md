# std-ide-widget

[![npm version](https://badge.fury.io/js/std-ide-widget.svg)](https://badge.fury.io/js/std-ide-widget)

IDE 版 UI 组件，是 BlockLang 标准库。

注意：**当前仅支持基于类的部件，不支持基于函数的部件**。

约定

1. 引用 [std-widget-web](https://github.com/blocklang/std-widget-web.git) 中的对应组件后，在默认名称后面加上 `Base`，如：

   ```ts
   import PageBase from 'std-widget-web/Page';
   ```

## Widgets

* [Page](./src/page/README.md)

## Build

本项目使用 dojo 的 `cli-build-widget` 命令构建。

```sh
dojo build widget --mode dist --target lib

# 或
npm run build:widget
```
