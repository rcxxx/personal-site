---
id: opencv-lane-detect
title: OpenCV 实现简单车道线检测
sidebar_label: 图像处理方法
---

## 读取图像
直接读取图像并转为灰度图像

``` cpp
Mat gray_img;
cvtColor(src_img, gray_img, COLOR_BGR2GRAY);

imshow("src_img", src_img);
```

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-src.png)

## 提取边缘
**使用 `Canny` 边缘检测方法提取边缘**

由于车道线与周围路边有很鲜明的对比，属于强边缘，可以适当提高 canny 算子的阈值，排除掉大部分的干扰

``` cpp
Mat edge_img;
Canny(gray_img, edge_img, 133, 400);    // 设置较高的阈值 只保留较强的边缘

imshow("edge_img", edge_img);
```

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-edge.png)

## 设置 ROI 区域

当车辆行驶在道路中时，车道线所处的位置其实是相对固定的，所以可以对图像设置感兴趣区域，进一步排除噪声

设置图像掩码 `mask` 区域

``` cpp
// 设置梯形区域的四个顶点，用来填充图像
vector<vector<Point> > roi_points{{Point(0, src_img.rows),
                Point(src_img.cols * 0.5 - src_img.cols * 0.02, src_img.rows * 0.5),
                Point(src_img.cols * 0.5 + src_img.cols * 0.02,src_img.rows * 0.5),
                Point(src_img.cols, src_img.rows)}};
Mat mask_img = Mat::zeros(Size(src_img.cols, src_img.rows), CV_8UC1);
fillPoly(mask_img, roi_points, Scalar(255));    // 多边形区域填充

imshow("mask_img", mask_img);
```

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-mask.png)

将 `mask` 与 边缘图进行与运算，得出 ROI 区域的边缘图像

``` cpp
Mat bin_img;
bitwise_and(edge_img, mask_img, bin_img);

imshow("bin_img", bin_img);
```

![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-bin.png)


## 霍夫变换提取直线


## 参考
- **[Lane Detection with Deep Learning (Part 1)](https://towardsdatascience.com/lane-detection-with-deep-learning-part-1-9e096f3320b7)**
- **[Simple Lane Detection with OpenCV](https://medium.com/@mrhwick/simple-lane-detection-with-opencv-bfeb6ae54ec0)**
- **[Finding Lane Lines — Simple Pipeline For Lane Detection.](https://towardsdatascience.com/finding-lane-lines-simple-pipeline-for-lane-detection-d02b62e7572b)**
- **[Building a lane detection system using Python 3 and OpenCV](https://medium.com/@galen.ballew/opencv-lanedetection-419361364fc0)**
- **[Tutorial: Build a lane detector](https://towardsdatascience.com/tutorial-build-a-lane-detector-679fd8953132)**