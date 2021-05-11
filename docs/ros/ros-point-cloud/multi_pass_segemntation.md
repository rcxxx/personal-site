---
id: ros-multi_pass_segemntation
title: ' '
sidebar_label: Multi Pass Segemntation
---

# 有关一篇论文的复现工作
论文地址：
- [Fast Multi-Pass 3D Point Segmentation Based on a Structured Mesh Graph for Ground Vehicles](https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles)

## `III PROPOSED METHOD`

### `A. Intrinsic Velodyne Pattern`
**velodyne lidar sensor**

`velodyne` 是一个 `激光雷达` 厂商，感兴趣的话可以去了解

文中所使用的传感器是 **[`velodyne HDL-64E`](https://velodynelidar.com/products/hdl-64e/)** ，在官网上有给出该传感器的一些参数（如下图），后续将会用到

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne-HDL-64E-parameters.png)

 文中提到，由于传感器的固有模式，传感器需要有不一样的俯仰角，最终传感器获取到的数据会出现下面这样的情况

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/paper-figure-01.png)

这样理解可能不太直观，在大佬的引导下，在 `Rviz` 里查看了一个 `Velodyne` 传感器获取到的点云数据，大概长这样

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view.png)

观察图中的点云我们能够发现，在传感器 $0\degree$ 的位置附近，能够发现点云数据出现了一个锯齿状的断层，我在下面的图中标记出来这部分断层

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view_edit.png)

看起来就跟论文中图一样，到此才直观的理解了论文中这部分内容的意思

### C. Mesh graph construction
这部分的工作是直接从传感器数据构建一个无序的网格图，根据文中的内容，将会根据传感器的固定参数，以及传感器测量得到的参数，构建一个以 N4 邻域为参考的二维图像，通过同一束激光的连续测量值来创建水平边缘，通过所有波束和对应的参考波束之间的静态角度差来确定垂直边缘

想要直接获取到雷达的原始数据进行处理比较困难，选择将雷达数据转换为点云数据后，再映射到 `range Image` 中处理。

## reference

- [一种基于激光雷达硬件结构的障碍物聚类分割方法](https://zhuanlan.zhihu.com/p/333670101)
- [Fast Multi-Pass 3D Point Segmentation Based on a Structured Mesh Graph for Ground Vehicles](https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles)