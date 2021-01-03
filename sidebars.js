module.exports = {
  someSidebar: {
    关于: [
      'README'
    ],
    
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

    数据结构: [
      'data-structures/data-structures-introduction',
      'data-structures/data-structures-algorithm',
      'data-structures/data-structures-algorithm-2',

      {
        type: "category",
        label: "刷题笔记",
        collapsed: true,
        items: [
          
        ],
      },

    ], 

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
        ],
      },
      
    ],

    TensorFlow: [

    ],
    
    PyTorch: [
      'pytorch/pytorch-install',
      // {
      //   type: "category",
      //   label: " ",
      //   collapsed: true,
      //   items: [
        
      //   ],
      // },

    ],

    ROS: [
      'ros/ros-install',
      {
        type: "category",
        label: "入门",
        collapsed: true,
        items: [
          'ros/ros-core-concepts',
          'ros/ros-workspace-and-pkg',
          'ros/ros-publisher',
          'ros/ros-subscriber',
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

    搭建知识库: [
      'about-build',
      'about-deploy',
      'about-write',
    ],
  },
};
  