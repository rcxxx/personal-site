"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2797],{31571:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var a=o(87462),r=(o(67294),o(3905));o(44212);const n={id:"ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",sidebar_label:"extract pcd file in bag"},l=void 0,s={unversionedId:"computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",id:"computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",description:"ROS bag",source:"@site/docs/computer/robot/ros/ros-point-cloud/bag_to_pcd.md",sourceDirName:"computer/robot/ros/ros-point-cloud",slug:"/computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",permalink:"/personal-site/docs/computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-point-cloud/bag_to_pcd.md",tags:[],version:"current",frontMatter:{id:"ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",sidebar_label:"extract pcd file in bag"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"Launch",permalink:"/personal-site/docs/computer/robot/ros/ros-launch"},next:{title:"rosbag\u53ef\u89c6\u5316",permalink:"/personal-site/docs/computer/robot/ros/ros-point-cloud/ros-rosbag-play-rviz"}},p={},i=[{value:"ROS bag",id:"ros-bag",level:2},{value:"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e",id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e",level:2},{value:"reference",id:"reference",level:2}],c={toc:i};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ros-bag"},"ROS bag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4ecb\u7ecd \u2014\u2014 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://wiki.ros.org/rosbag/"},"rosbag - ROS Wiki"))),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4f7f\u7528 \u2014\u2014 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b")))),(0,r.kt)("h2",{id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e"},"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e"),(0,r.kt)("p",null,"\u5148\u67e5\u770b\u4e00\u4e0b\u9700\u8981\u89e3\u6790\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bag\u5305")," \u4e2d\u7684\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rosbag info <filename>.bag\n")),(0,r.kt)("p",null,"\u6211\u7528\u6765\u6d4b\u8bd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bag\u5305")," \u8f93\u51fa\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/ros-info-bag.png",alt:null})),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"topics")," \u90e8\u5206\u53ef\u4ee5\u627e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"velodyne_points     108 msgs    : sensor_msgs/PointCloud2")," \u8fd9\u6837\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PointCloud2")," \u6d88\u606f\u7c7b\u578b\uff0c\u5c31\u662f\u6211\u4eec\u60f3\u8981\u89e3\u6790\u7684\u70b9\u4e91\u6570\u636e"),(0,r.kt)("p",null,"\u89e3\u6790\u547d\u4ee4\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd <filename>.bag <topics/> <save_path>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<filename>.bag")," \u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"bag\u5305")," \u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<topics/>")," \u9700\u8981\u89e3\u6790\u7684\u8282\u70b9\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<save_path>")," \u5b58\u50a8\u8def\u5f84")),(0,r.kt)("p",null,"\u4f8b\u5982\u6211\u81ea\u5df1\u7684\u89e3\u6790\u547d\u4ee4\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd test.bag velodyne_points test_pcd\n")),(0,r.kt)("p",null,"\u89e3\u6790\u5b8c\u6210\u540e\u7ec8\u7aef\u663e\u793a\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/bag_to_pcd.png",alt:null})),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pcl_viewer")," \u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"pcd")," \u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pcl_viewer <filename>.pcd\n")),(0,r.kt)("p",null,"\u9884\u89c8\u7ed3\u679c\n",(0,r.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/pcl_viewer.png",alt:null})),(0,r.kt)("h2",{id:"reference"},"reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/KYJL888/article/details/103118213?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242"},"[\u5b66\u4e60\u70b9\u4e91]ROS\u4e2d\u89e3\u6790bag\u5305\u4e2d\u7684\u70b9\u4e91\u6587\u4ef6\u5230pcd\u683c\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"ROS \u673a\u5668\u4eba\u6280\u672f - rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b\uff01")))))}u.isMDXComponent=!0}}]);