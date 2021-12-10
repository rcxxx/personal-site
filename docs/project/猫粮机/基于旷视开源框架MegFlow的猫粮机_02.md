---
id: Cat-food-machine-based-on-MegFLow_02
title: 基于旷视开源框架MegFlow的猫粮机(2)
sidebar_label: 猫粮机(2)
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import BVideo from "@site/src/components/BVideo";

<BrowserWindow>

### 视频演示

<BVideo src="" bsrc=""/>

### 项目地址
- [rcxxx/MegFlow —— cat_feeders](https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders)

</BrowserWindow>

## 新环境的配置
由于想让猫粮机长时间工作，不能只将程序跑在工作用的电脑上

我们选择 `Nvidia Jetson Nano` 作为猫粮机的运算平台，它体积够小，刚好能放入猫粮机内，执行这样需求较低的计算任务算力也足够

由于 `Nano` 是 `aarch64` 架构的，所以需要重新配置一下相关环境
- `MegFlow` 需要安装 `aarch64` 版本的 `.whl`
- `MegEngine` 也需要安装 `aarch64` 版本的 `.whl`

详细的安装过程放在这里👇
- **[Jetson Nano Install MegFlow && MegEngine](./../../nvidia/jeston-nano/jetson-nano-MegFlow-MegEngine.md)**

## 猫粮机的功能控制

考虑到猫猫的健康，需要时长调整它们的进食量，瘦的要多吃点，胖的要少吃点······

考虑到投喂的参数是变化的，所以准备增加一个串口屏来实时调整相应的投喂参数，比如投喂量，投喂次数，时间间隔等参数

大致控制逻辑如下

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/MegFlow-Cat_feeder/%E7%8C%AB%E7%B2%AE%E6%9C%BA%E5%96%82%E9%A3%9F%E6%9C%BA%E5%88%B6.png)


