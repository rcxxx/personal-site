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

    数据结构与算法: [
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
          
        ],
      },

      {
        type: "category",
        label: "swiftUI",
        collapsed: true,
        items: [
          'ios/swiftUI/swiftUI-show-web-pages',
          'ios/swiftUI/swiftUI-screen-shot',
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
          'ros/ros-topic-话题消息定义与使用',
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

  '🎮': {

  },

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
};
  