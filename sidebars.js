module.exports = {
  '📌site': [
    'README',
    {
      type: "category",
      label: "搭建知识库",
      collapsed: true,
      items: [
        'site/about-build',
        'site/about-deploy',
        'site/about-write',
      ],
    }
  ],

  '⌨️programming': [
    // C/C++
    {
      type: 'category',
      label: 'C/C++',
      link: {
        type: 'generated-index',
        slug: '/category/C-C_plus_plus',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "面对对象",
          collapsed: true,
          // link: {
          //   type: 'doc',
          //   id: 'cc/cc-classes-and-objects',
          // },
          items: [
            'computer/programming/cc/cc-classes-and-objects',
            'computer/programming/cc/cc-classes-and-objects-2',
            'computer/programming/cc/cc-generic-and-template',
            'computer/programming/cc/cc-generic-and-template-2',
            'computer/programming/cc/cc-classes-virtual-function',
          ],
        },
        {
          type: "category",
          label: "C++11",
          collapsed: true,
          items: [
            'computer/programming/cc/cc-11-unified-init',
            'computer/programming/cc/cc-11-auto',
            'computer/programming/cc/cc-11-nullptr',
            'computer/programming/cc/cc-11-using',
            'computer/programming/cc/cc-11-new-for',
            'computer/programming/cc/cc-11-auto-ptr',
            'computer/programming/cc/cc-11-lambda',
            'computer/programming/cc/cc-11-files-and-exceptions',
            'computer/programming/cc/cc-11-scope-enum',
          ],
        },
        {
          type: "category",
          label: "More Effective C++",
          collapsed: true,
          items: [
            'computer/programming/cc/effective_cc/distinguish-pointers-reference',
          ],
        },
        {
          type: "category",
          label: "boost",
          collapsed: true,
          items: [
            'computer/programming/cc/cc-boost-install',
          ],
        },
        // {
        //   type: "category",
        //   label: "C++20",
        //   collapsed: true,
        //   items: [
            
        //   ],
        // },
      ],
    },
    // Python
    {
      type: 'category',
      label: 'Python',
      link: {
        type: 'generated-index',
        slug: '/category/py',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Package",
          collapsed: true,
          items: [
            'computer/programming/py/python-serial',
          ],
        },
      ],
    },
    // Data Structures
    {
      type: 'category',
      label: 'Data Structures',
      link: {
        type: 'generated-index',
        slug: '/category/data-structures',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "大话数据结构读书笔记",
          collapsed: true,
          items: [
            'computer/programming/data-structures/大话数据结构/data-structures-introduction',
            {
              type: "category",
              label: "第二章 算法",
              collapsed: true,
              items: [
                'computer/programming/data-structures/大话数据结构/data-structures-algorithm',
                'computer/programming/data-structures/大话数据结构/data-structures-algorithm-2',
              ],
            },
  
            {
              type: "category",
              label: "第三章 线性表",
              collapsed: true,
              items: [
                'computer/programming/data-structures/大话数据结构/data-structures-list',
              ],
            },
          ],
        },
  
        {
          type: "category",
          label: "🗡剑指Offer笔记",
          collapsed: true,
          items: [
            'computer/programming/data-structures/剑指offer/常见数据结构',
            'computer/programming/data-structures/剑指offer/赋值运算符函数',
          ],
        },
      ],
    },
    // Design Pattern
    {
      type: 'category',
      label: 'Design Pattern',
      link: {
        type: 'generated-index',
        slug: '/category/design-pattern',
      },
      collapsed: true,
      items: [
        'computer/programming/design-pattern/design-pattern-UML-class-diagram',
        // {
        //   type: "category",
        //   label: "",
        //   collapsed: true,
        //   items: [
            
        //   ],
        // },
      ],
    },
    // // Matlab
    // {
    //   type: 'category',
    //   label: 'Matlab',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "category",
    //       label: "install",
    //       collapsed: true,
    //       items: [

    //       ],
    //     },
    //   ],
    // },
    // ios
    {
      type: 'category',
      label: 'ios',
      link: {
        type: 'generated-index',
        slug: '/category/ios',
      },
      collapsed: true,
      items: [
        'computer/programming/ios/ios-about-xcode',
        'computer/programming/ios/ios-reference-data',
        {
          type: "category",
          label: "swift",
          collapsed: true,
          items: [
            'computer/programming/ios/swift/swift-optional',
          ],
        },
        {
          type: "category",
          label: "swiftUI",
          collapsed: true,
          items: [
            'computer/programming/ios/swiftUI/swiftUI-show-web-pages',
            'computer/programming/ios/swiftUI/swiftUI-screen-shot',
            'computer/programming/ios/swiftUI/swiftUI-ReplayKit'
          ],
        },
        // {
        //   type: "category",
        //   label: "Project",
        //   collapsed: true,
        //   items: [
            
        //   ],
        // },
      ],
    },
    // IDE
    {
      type: 'category',
      label: 'IDE',
      link: {
        type: 'generated-index',
        slug: '/category/ide',
      },
      collapsed: true,
      items: [
        'computer/programming/IDE/vscode/about-vscode'
      ],
    },
  ],

  '👀CV': [
    // OpenCV
    {
      type: 'category',
      label: 'OpenCV',
      link: {
        type: 'generated-index',
        slug: '/category/OpenCV',
      },
      collapsed: true,
      items: [
        'computer/cv/opencv/about-opencv',
        {
          type: "category",
          label: "install",
          collapsed: true,
          items: [
            'computer/cv/opencv/opencv-install-cpu',
            'computer/cv/opencv/opencv-install-gpu',
          ],
        },
        'computer/cv/opencv/opencv-pixel-connect',
        {
          type: "category",
          label: "常用方法",
          collapsed: true,
          items: [
            'computer/cv/opencv/opencv-waitKey',
            'computer/cv/opencv/opencv-roi',
            'computer/cv/opencv/opencv-hough-transform',
          ],
        },
        {
          type: "category",
          label: "OpenCV tutorials",
          collapsed: true,
          items: [
              'computer/cv/opencv/opencv-equalizeHist',
          ],
        },
        {
          type: "category",
          label: "OpenCV DNN",
          collapsed: true,
          items: [
              'computer/cv/opencv/dnn/opencv-dnn-yolov4',
          ],
        },
        {
          type: "category",
          label: "OpenCV Demo",
          collapsed: true,
          items: [
              'computer/cv/opencv/demo/车道线检测/opencv-lane-detect',
          ],
        },
      ],
    },
    // note
    {
      type: 'category',
      label: 'ML & DL',
      link: {
        type: 'generated-index',
        slug: '/category/ml-dl',
      },
      collapsed: true,
      items: [
        'computer/cv/ml-dl/note/about-AI',
        {
          type: "category",
          label: "机器学习",
          collapsed: true,
          items: [
            'computer/cv/ml-dl/note/ml/机器学习的基本概念',
            'computer/cv/ml-dl/note/ml/机器学习的三个基本要素',
            'computer/cv/ml-dl/note/ml/线性回归',
          ],
        },
      ],
    },
    // PyTorch
    {
      type: 'category',
      label: 'PyTorch',
      link: {
        type: 'generated-index',
        slug: '/category/PyTorch',
      },
      collapsed: true,
      items: [
        'computer/cv/ml-dl/pytorch/about-pytorch',
        'computer/cv/ml-dl/pytorch/pytorch-install',
        // {
        //   type: "category",
        //   label: " ",
        //   collapsed: true,
        //   items: [
          
        //   ],
        // },
      ],
    },
    // YOLO
    {
      type: 'category',
      label: 'YOLO',
      link: {
        type: 'generated-index',
        slug: '/category/YOLO',
      },
      collapsed: true,
      items: [
        'computer/cv/ml-dl/yolo/yolov5-start',
        'computer/cv/ml-dl/yolo/yolov5-train',
        'computer/cv/ml-dl/yolo/yolov5-训练自建数据集',
      ],
    },
    
    // Point Cloud
    {
      type: 'category',
      label: 'Point Cloud',
      link: {
        type: 'generated-index',
        slug: '/category/Point-Cloud',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "PCL",
          collapsed: true,
          items: [
            'computer/cv/point-cloud/PCL/pcl-install',
            'computer/cv/point-cloud/PCL/pcl-visualizer'
          ],
        },
        {
          type: "category",
          label: "Open3D",
          collapsed: true,
          items: [
            'computer/cv/point-cloud/Open3D/open3d-install',
          ],
        },
      ],
    },
  ],

  '🎖️robot': [
    //
    {
      type: 'category',
      label: 'ROS',
      link: {
        type: 'generated-index',
        slug: '/category/ROS',
      },
      collapsed: true,
      items: [
        'computer/robot/ros/ros-install',
        {
          type: "category",
          label: "入门",
          collapsed: true,
          items: [
            'computer/robot/ros/ros-core-concepts',
            'computer/robot/ros/ros-workspace-and-pkg',
            'computer/robot/ros/ros-vscode',
            'computer/robot/ros/ros-publisher',
            'computer/robot/ros/ros-subscriber',
            'computer/robot/ros/ros-callback',
            'computer/robot/ros/ros-topic-话题消息定义与使用',
            'computer/robot/ros/ros-launch',
          ],
        },
        {
          type: "category",
          label: "ros-pcl",
          collapsed: true,
          items: [
            'computer/robot/ros/ros-point-cloud/ros-bag-to-pcd',
            'computer/robot/ros/ros-point-cloud/ros-rosbag-play-rviz',
            'computer/robot/ros/ros-point-cloud/ros-pcl-topic',
          ],
        },
        {
          type: "category",
          label: "point-cloud-segmentation",
          collapsed: true,
          items: [
            'computer/robot/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern',
            'computer/robot/ros/ros-point-cloud/segmentation/ros-point_cloud_object_segemntation_references',
            'computer/robot/ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation',
          ],
        },
      ],
    },
    // RC & RM
    {
      type: 'category',
      label: 'RC & RM',
      link: {
        type: 'generated-index',
        slug: '/category/RC-RM',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "RoboCon",
          collapsed: true,
          items: [
            'computer/robot/robocon/about-rc',
          ],
        },
        {
          type: "category",
          label: "RoboMaster",
          collapsed: true,
          items: [
            'computer/robot/robomaster/about-rm',
            'computer/robot/robomaster/visual-group-learning-suggestions',
            'computer/robot/robomaster/rm-2018-buff-simulation',
            //'computer/robot/robomaster/rm-2019-armor',
            //'computer/robot/robomaster/rm-2020-engineering',
          ],
        },
      ],
    },
  ],

  'life': [
    {
      type: 'category',
      label: "🎮 就知道玩",
      link: {
        type: 'generated-index',
        slug: '/category/just-paly',
      },
      collapsed: true,
      items: [
        'life/play/go-out-and-play',
      ],
    },
    {
      type: 'category',
      label: "🍻 就知道吃",
      link: {
        type: 'generated-index',
        slug: '/category/just-eat',
      },
      collapsed: true,
      items: [
        'life/foods/always-eating',
      ],
    },
  ],

  '💯studio': [
    {
      type: 'category',
      label: "summary",
      link: {
        type: 'generated-index',
        slug: '/category/summary',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "3D打印延时摄影",
          collapsed: true,
          items: [
            'studio/summary/3D打印延时摄影/octoprint-octolapse-auto-snapshot',
            'studio/summary/3D打印延时摄影/raspberry-pi-octoprint',
            'studio/summary/3D打印延时摄影/gphoto2-get-capture',
          ],
        },
        {
          type: "category",
          label: "猫粮机",
          collapsed: true,
          items: [
            'studio/summary/猫粮机/Cat-food-machine-based-on-MegFLow',
            'studio/summary/猫粮机/Cat-food-machine-based-on-MegFLow_02',
          ],
        },
      ],
    },
  ],
 
  '🖥️PC': [
    {
      type: 'category',
      label: "devices",
      link: {
        type: 'generated-index',
        slug: '/category/devices',
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Jeston-Nano",
          collapsed: true,
          items: [
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-start',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-stats',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-archiconda',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-install-pytorch',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-install-opencv',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-gpio',
            'computer/pc/devices/nvidia/jeston-nano/jetson-nano-megflow-megengine',
          ],
        },
      ],
    },
  ],
};
  