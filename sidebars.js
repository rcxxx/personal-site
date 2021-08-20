module.exports = {
  readme: [
    'README',
    {
      type: "category",
      label: "搭建知识库",
      collapsed: true,
      items: [
        'about-build',
        'about-deploy',
        'about-write',
      ],
    }
  ],

  '💻': {
    "C/C++": [
      {
        type: "category",
        label: "面对对象",
        collapsed: true,
        items: [
          'cc/cc-classes-and-objects',
          'cc/cc-classes-and-objects-2',
          'cc/cc-generic-and-template',
          'cc/cc-generic-and-template-2',
          'cc/cc-classes-virtual-function',
        ],
      },
      
      {
        type: "category",
        label: "C++11",
        collapsed: true,
        items: [
          'cc/cc-11-unified-init',
          'cc/cc-11-auto',
          'cc/cc-11-nullptr',
          'cc/cc-11-using',
          'cc/cc-11-new-for',
          'cc/cc-11-auto-ptr',
          'cc/cc-11-lambda',
          'cc/cc-11-files-and-exceptions',
          'cc/cc-11-scope-enum',
        ],
      },

      {
        type: "category",
        label: "More Effective C++",
        collapsed: true,
        items: [
          'cc/effective_cc/distinguish-pointers-reference',
        ],
      },
      
      {
        type: "category",
        label: "boost",
        collapsed: true,
        items: [
          'cc/cc-boost-install',
        ],
      },
      
      {
        type: "category",
        label: "C++20",
        collapsed: true,
        items: [
          
        ],
      },

    ], 

    Python: [

    ], 

    "数据结构与算法": [
      {
        type: "category",
        label: "大话数据结构读书笔记",
        collapsed: true,
        items: [
          
          'data-structures/大话数据结构/data-structures-introduction',
          {
            type: "category",
            label: "第二章 算法",
            collapsed: true,
            items: [
              'data-structures/大话数据结构/data-structures-algorithm',
              'data-structures/大话数据结构/data-structures-algorithm-2',
            ],
          },

          {
            type: "category",
            label: "第三章 线性表",
            collapsed: true,
            items: [
              'data-structures/大话数据结构/data-structures-list',
            ],
          },
          
          
          
        ],
      },

      {
        type: "category",
        label: "🗡剑指Offer笔记",
        collapsed: true,
        items: [
          'data-structures/剑指offer/常见数据结构',
          'data-structures/剑指offer/赋值运算符函数',
        ],
      },

    ], 

    "设计模式": [
      'design-pattern/design-pattern-UML-class-diagram',
      // {
      //   type: "category",
      //   label: "",
      //   collapsed: true,
      //   items: [
          
      //   ],
      // },
    ], 

    Matlab: [
      // {
      //   type: "category",
      //   label: "install",
      //   collapsed: true,
      //   items: [
          
      //   ],
      // },
    ],

    "ios": [
      'ios/ios-about-xcode',
      'ios/ios-reference-data',
      {
        type: "category",
        label: "swift",
        collapsed: true,
        items: [
          'ios/swift/swift-optional',
        ],
      },

      {
        type: "category",
        label: "swiftUI",
        collapsed: true,
        items: [
          'ios/swiftUI/swiftUI-show-web-pages',
          'ios/swiftUI/swiftUI-screen-shot',
          'ios/swiftUI/swiftUI-ReplayKit'
        ],
      },

      {
        type: "category",
        label: "Project",
        collapsed: true,
        items: [
          
        ],
      },
    ],

    "开发环境配置": [
      'tutorials/about-vscode'
    ],

  },

  'Open-source-library': {
    OpenCV: [
      'opencv/about-opencv',
      {
        type: "category",
        label: "install",
        collapsed: true,
        items: [
          'opencv/opencv-install-cpu',
          'opencv/opencv-install-gpu',
        ],
      },
      'opencv/opencv-pixel-connect',
      {
        type: "category",
        label: "常用方法",
        collapsed: true,
        items: [
          'opencv/opencv-roi',
          'opencv/opencv-hough-transform',
        ],
      },
      
      {
        type: "category",
        label: "OpenCV tutorials",
        collapsed: true,
        items: [
            'opencv/opencv-equalizeHist',
        ],
      },
      
      {
        type: "category",
        label: "OpenCV DNN",
        collapsed: true,
        items: [
            'opencv/dnn/opencv-dnn-yolov4',
        ],
      },

    ],

    TensorFlow: [

    ],
    
    PyTorch: [
      'pytorch/about-pytorch',
      'pytorch/pytorch-install',
      // {
      //   type: "category",
      //   label: " ",
      //   collapsed: true,
      //   items: [
        
      //   ],
      // },

    ],

    yolo: [
      'yolo/yolov5-start',
      'yolo/yolov5-train',
      'yolo/yolov5-训练自建数据集',
    ],
  },

  'ML & DL':[
    'AI/about-AI',
    {
      type: "category",
      label: "机器学习",
      collapsed: true,
      items: [
        'AI/机器学习/机器学习的基本概念',
        'AI/机器学习/机器学习的三个基本要素',
        'AI/机器学习/线性回归',
      ],
    },

    {
      type: "category",
      label: "深度学习",
      collapsed: true,
      items: [
        
      ],
    },
  ],

  '👽robot': {
    ROS: [
      'ros/ros-install',
      
      {
        type: "category",
        label: "入门",
        collapsed: true,
        items: [
          'ros/ros-core-concepts',
          'ros/ros-workspace-and-pkg',
          'ros/ros-vscode',
          'ros/ros-publisher',
          'ros/ros-subscriber',
          'ros/ros-callback',
          'ros/ros-topic-话题消息定义与使用',
          'ros/ros-launch',
        ],
      },
      
      {
        type: "category",
        label: "ros-pcl",
        collapsed: true,
        items: [
          'ros/ros-point-cloud/ros-bag-to-pcd',
          'ros/ros-point-cloud/ros-rosbag-play-rviz',
          'ros/ros-point-cloud/ros-pcl-topic',
        ],
      },

      {
        type: "category",
        label: "point-cloud-segmentation",
        collapsed: true,
        items: [
          'ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern',
          'ros/ros-point-cloud/segmentation/ros-point_cloud_object_segemntation_references',
          'ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation',
        ],
      },

    ],
  },

  'Point Cloud':{
    'PCL': [
      'point-cloud/PCL/pcl-install',
      
      {
        type: "category",
        label: "learn",
        collapsed: true,
        items: [
          'point-cloud/PCL/pcl-visualizer'
        ],
      },
      
    ],

    'Open3D': [
      'point-cloud/Open3D/open3d-install',
      
      {
        type: "category",
        label: "",
        collapsed: true,
        items: [

        ],
      },
      
    ],
  },

  'RC & RM': {
    RoboCon: [
      'robocon/about-rc',
      {
        type: "category",
        label: "所努力的",
        collapsed: true,
        items: [

        ],
      },

      {
        type: "category",
        label: "有趣的小插曲",
        collapsed: true,
        items: [
          
        ],
      },
        
    ],

    RoboMaster: [
      'robomaster/about-rm',
      'robomaster/visual-group-learning-suggestions',
      {
        type: "category",
        label: "所努力的",
        collapsed: true,
        items: [
          'robomaster/rm-2018-buff-simulation',
        //'robomaster/rm-2019-armor',
        //'robomaster/rm-2020-engineering',
        ],
      },

      {
        type: "category",
        label: "有趣的小插曲",
        collapsed: true,
        items: [

        ],
      },
        
    ],
  },

  "🎮":[
    {
      type: "category",
      label: "就知道玩",
      collapsed: true,
      items: [
        
      ],
    },
  ],

  "🍻":[
    'life/foods/always-eating',
    {
      type: "category",
      label: "就知道吃",
      collapsed: true,
      items: [
        
      ],
    },
  ],

  'Project': {

    "无人驾驶": [
      {
        type: "category",
        label: "车道线检测",
        collapsed: true,
        items: [
          'project/车道线检测/about-lane-detection',
          'project/车道线检测/opencv-lane-detect',
          
        ],
      },

      {
        type: "category",
        label: "待填坑",
        collapsed: true,
        items: [
          
        ],
      },
        
    ],
  },

  '毕设': [
    {
      type: "category",
      label: "毕业设计",
      collapsed: true,
      items: [
        'project/毕业设计/graduation-project',
        'project/毕业设计/graduation-project-work-list',
      ],
    },
  ],

  '奇怪的知识': [
    {
      type: "category",
      label: "奇怪的编程知识",
      collapsed: true,
      items: [
        'Useless-knowledge/about-code/ascii-art',
      ],
    },
  ],
};
  