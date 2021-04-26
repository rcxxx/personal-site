--- 
id: ros-pcl-topic
title: ROS 发布和订阅 pcl 话题消息
sidebar_label: pcl-topic
---

## PCL 在 ros 中的数据类型
- [PCL Overview —— ROS Wiki](http://wiki.ros.org/pcl/Overview)

先在此链接中对所需要的数据类型稍作了解


### 创建功能包
在 `ros` 工作空间的 `src/` 目录下创建一个功能包 `pcl_test`

该功能包有四个依赖项 `pcl_conversions  pcl_ros  roscpp  sensor_msgs` 

```
cd src/
catkin_create_pkg pcl_test pcl_conversions pcl_ros roscpp sensor_msgs
```

- 编译功能包

```
cd ..
catkin_make
```

### 创建 `publisher`

### 创建 `subscriber`

## reference
- [PCL with ROS using C++ —— turtlebot2-tutorials](https://dabit-industries.github.io/turtlebot2-tutorials/13-ROSPCL.html)
- [PCL Overview —— ROS Wiki](http://wiki.ros.org/pcl/Overview)
- [How to read a point cloud (.pcd) file and send it to a rosbag](https://answers.ros.org/question/325030/how-to-read-a-point-cloud-pcd-file-and-send-it-to-a-rosbag/)
- [How to use a PCL tutorial in ROS —— ROS Wiki](http://wiki.ros.org/pcl/Tutorials)
- [ROS系统学习11---点云数据的发送和接收](https://www.guyuehome.com/25024)
- [ROS与PCL中点云数据之间的转换](https://cloud.tencent.com/developer/article/1692529)
- [如何在ROS中使用PCL—数据格式（1）](https://cloud.tencent.com/developer/article/1477011)
