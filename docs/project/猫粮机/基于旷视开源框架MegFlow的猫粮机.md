---
id: Cat-food-machine-based-on-MegFLow
title: 基于旷视开源框架MegFlow的猫粮机
sidebar_label: 猫粮机
---

舍友的朋友要把猫咪送过来帮忙照顾几天，这样家里就一下子有了两只猫，投喂两只猫咪的工作量并不是 “x2” 那么简单，所谓懒是科技进步的阶梯，因为懒，所以准备做一个自动投喂的猫粮机，并不是定时定量的自动投喂，那样还需要买一个猫粮机，并且还需要经常设置和修改猫粮机喂食的时间以及数量，并且两只猫的话，就会出现更多的问题

于是我们准备做一个能够知道碗里还有没有猫粮，并且能够认识两只猫咪并进行分别的自动投喂的猫粮机，简单的执行逻辑如下


其他的都比较好办，关键是怎么让猫粮机认识两只猫，根据我最初的想法，可以通过AI算法对两只猫咪进行检测和区分

### `MegFlow`

刚巧，旷视开源的 `MegFlow` 框架可以很轻松的实现猫咪的检测，将整个改造变得很简单
[![](https://github.com/MegEngine/MegFlow/raw/master/logo.png)](https://github.com/MegEngine/MegFlow)

按照 **[文档](https://megflow.readthedocs.io/zh_CN/latest/how-to-build-and-run/run-in-15-minutes.zh.html)** 安装运行环境后，运行下示例程序，结果如下

### 修改源码，自定义功能

接下来要修改一些源码，将原本上传图片或是视屏的服务更改为本地的相机输入

根据文档的教程：**[HOW TO USE —— Config](https://megflow.readthedocs.io/zh_CN/latest/how-to-add-my-service/appendix-A-graph-definition.zh.html)**

修改相应的 `.toml` 文件


## 参考
- [https://github.com/MegEngine/MegFlow](https://github.com/MegEngine/MegFlow)