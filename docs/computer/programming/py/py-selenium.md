---
id: python-selenium
title: ''
sidebar_label: Selenium
---

## Python Selenium 操作浏览器

### 选择浏览器

这里我选择使用 `Google Chrome` 浏览器

#### 确认浏览器版本以及下载驱动

浏览器导航栏输入 `Chrome://version` 获取浏览器版本

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/auto-like/chrome-version.png)

例如我的浏览器版本为 `104.0.5112.101`

- 下载对应浏览器版本驱动，**[下载地址](https://registry.npmmirror.com/binary.html?path=chromedriver/)**

下载后解压到对应工作路径

### 安装 Selenium

``` shell
pip install selenium
```

### 测试安装

- 使用 `webdriver` 打开指定 `url`

``` py
from selenium import webdriver

driver = webdriver.Chrome("./chromedriver") # 这里将 chromedriver 放在相同路径

driver.get("http://www.baidu.com")

```

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/auto-like/webdriver.Chrome-run.png)





## 参考
- **[Selenium with Python](https://selenium-python.readthedocs.io/index.html)**
- **[Selenium Python 教程](https://zhuanlan.zhihu.com/p/111859925)**