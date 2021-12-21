---
id: ubuntu-18-04-script-sudo
title: ''
sidebar_label: 脚本中使用 sudo
---

### Ubuntu-18.04 脚本中使用 sudo 权限
做了一个项目，要在开机时自动执行程序的运行脚本，在 `shell` 脚本中需要修改串口 `tty` 的执行权限

但是修改执行权限的 `chmod` 指令需要用到 `root` 权限，于是需要在脚本中使用 `sudo` 指令，而超级用户指令需要输入用户密码，有几种方法可以实现

#### `echo` + `sudo -S`

- `echo`
- `sudo -S`

```
echo "password" | sudo -S chmod ...
```
- `"password"` 为你的用户密码

就可以实现 `shell` 脚本中使用 `sudo` 权限