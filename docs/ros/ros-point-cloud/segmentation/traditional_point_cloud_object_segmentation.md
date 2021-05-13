---
id: ros-traditional_point_cloud_object_segmentation
title: Traditional Point Cloud Object Segmentation
sidebar_label: Segmentation
---

## 传统方法实现点云分割
参考 **`Fast range image-based segmentation of sparse 3D laser scans for online operation` [(pdf)](https://www.researchgate.net/publication/311758635_Fast_range_image-based_segmentation_of_sparse_3D_laser_scans_for_online_operation)** 中的方法在 `range image` 中实现目标分割

## 复现过程
- 构建 `range image`

文中直接从 `velodyne` 传感器的数据构建 `range image`，但是我能使用的数据是已经转换为 `sensor_msgs/pointcloud2` 的点云数据，所以这里要从点云数据中构建 `range image`

首先要知道所使用传感器的一些参数，测试代数据包所使用的传感器是 **[`velodyne HDL-64E`](https://velodynelidar.com/products/hdl-64e/)** ，在官网上有给出该传感器的一些参数（如下图），后续将会用到

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne-HDL-64E-parameters.png)

将点云数据转换到 `range image` 的方法参考了这个仓库中的方法
- **`GitHub repository` 📦 :[versatran01/cloud2range](https://github.com/versatran01/cloud2range)**

需要用到的参数如下
``` cpp
/*-- range image shape 4500x64 --*/
int n_beams_        = 64;
int range_img_cols_ = 4500;   // 360 / 0.08

double min_range_   = 0.0;
double max_range_   = 120.0;

double min_angle_   = -(26.9*0.5);  // -1/2 Vertical FOV
double max_angle_   =  (26.9*0.5);  //  1/2 Vertical FOV

double angular_resolution_h_ = 0.08;   // azimuth
double angular_resolution_v_ = 0.4;    // altitude
```

通过点云中每个点的位置信息 $(x,y,z)$ 可以求出每个点相对于传感器的位置在 `range image` 中的对应点

- 计算点 $p$ 的 $arctan(\frac{z}{\sqrt{x^2 + y^2}})$ 可以求出 $p$ 相对于 xy 平面的角度，即垂直方向的角度
- 点 $p$ 的 $arctan(\frac{y}{x})$ 则表示水平方向的角度，这里要把角度转换到 $[0, 2\pi]$ 之间，即当 $y<0$ 的时 $angle = angle + 2\pi$
- 计算点到传感器的距离 $range = \sqrt{x^2 + y^2 + z^2}$



## references

