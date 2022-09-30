---
id: python-pynput
title: ''
sidebar_label: pynput
---

## pynput 监听以及操作鼠标键盘

### 安装
``` py
pip install pynput
```
### 文档
- **[pynput Package Documentation](https://pynput.readthedocs.io/en/latest/)**

### pynput.mouse 鼠标子模块

#### 控制鼠标

``` py
from pynput.mouse import Button, Controller

mouse = Controller()

# 读取指针位置
mouse_position = mouse.position

# 设置指针位置 给 mouse.position 赋值
mouse.position = (10, 20)

# 基于当前位置移动指针
mouse.move(5, -5)

# 按下指针
mouse.press(Button.left)

# 释放指针
mouse.release(Button.left)

# 点击指针，第二个参数表示点击几次
mouse.click(Button.left, 2)

# 滑动鼠标滚轮，第二个参数为单位数量
mouse.scroll(0, 2)
```

- Button 分别有 `unknow、left、middle、right` 四个值

**配合 `time` 模块实现长按**

``` py
from pynput.mouse import Button, Controller
import time

mouse = Controller()

mouse.press(Button.left)
time.sleep(8) # 长按的时间
mouse.release(Button.left)
```

**实现点击并拖动**

``` py
from pynput.mouse import Button, Controller
mouse = Controller()

mouse.press(Button.left)
mouse.move(5, -5)
# mouse.position = (10, 20)
mouse.release(Button.left)
```

### pynput.keyboard 键盘子模块



## 参考
- **[pynput-pypi](https://pypi.org/project/pynput/)**
- **[pynput Package Documentation](https://pynput.readthedocs.io/en/latest/)**
- **[python监听、操作键盘鼠标库pynput详细教程](https://blog.csdn.net/u011367482/article/details/106173994)**