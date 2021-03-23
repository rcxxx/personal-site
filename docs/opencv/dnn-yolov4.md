---
id: opencv-dnn-yolov4
title: 使用 CV::DNN 模块读取 YOLO v4 权重进行实时目标检测
sidebar_label: DNN-YOLO v4
---

## 准备工作

使用 DNN 模块需要编译 `opencv_contrib` 

可以参考
- [Install（仅CPU）]


如果需要开启 GPU 加速，可以参考
- [Install（GPU）]

`cmake` 参数应添加下面这些

``` shell
-DWITH_CUDA=ON \
-DOPENCV_DNN_CUDA=ON \
-DENABLE_FAST_MATH=1 \
-DCUDA_FAST_MATH=1 \
-DWITH_CUBLAS=1 \
```

在你有 GPU 的情况下这样可以启用 GPU 加速运算

## DNN模块简单介绍


## 下载文件
先下载 `YOLO v4` 的配置文件和预训练的权重

- [yolov4.cfg](https://raw.githubusercontent.com/AlexeyAB/darknet/master/cfg/yolov4.cfg)
- [yolov4.weights](https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights)

模型配置文件 `yolov4.cfg` 也可以在 `opencv_extra` 的 `testdata/dnn` 目录中找到

然后下载 `coco_classes.txt` 文件，因为预训练的权重使用的是 `coco` 数据集

- [coco_classes.txt](https://github.com/bubbliiiing/yolov4-pytorch/blob/master/model_data/coco_classes.txt)

## 尝试实现



## 参考



- [dnn模块之基于YOLOv3（Tiny）模型的（实时）对象检测](https://blog.csdn.net/weixin_45224869/article/details/106148983)
- [opencv-python dnn模块使用CUDA加速](https://blog.csdn.net/qq_43019451/article/details/105894552)
- [How to run OpenCV DNN on NVidia GPU](https://answers.opencv.org/question/201456/how-to-run-opencv-dnn-on-nvidia-gpu/?answer=201461)
- [How to use OpenCV’s “dnn” module with NVIDIA GPUs, CUDA, and cuDNN](https://www.pyimagesearch.com/2020/02/03/how-to-use-opencvs-dnn-module-with-nvidia-gpus-cuda-and-cudnn/)
- [AlexeyAB/darknet](https://github.com/AlexeyAB/darknet)
- [bubbliiiing/yolov4-pytorch](https://github.com/bubbliiiing/yolov4-pytorch)