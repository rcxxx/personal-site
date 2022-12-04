"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9617],{68994:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=l(87462),n=(l(67294),l(3905));l(44212);const i={id:"ros-publisher",title:"ROS\u53d1\u5e03\u8005 Publisher \u7684\u7f16\u7a0b\u5b9e\u73b0",sidebar_label:"Publisher"},a=void 0,s={unversionedId:"computer/robot/ros/ros-publisher",id:"computer/robot/ros/ros-publisher",title:"ROS\u53d1\u5e03\u8005 Publisher \u7684\u7f16\u7a0b\u5b9e\u73b0",description:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09",source:"@site/docs/computer/robot/ros/ros-publisher.md",sourceDirName:"computer/robot/ros",slug:"/computer/robot/ros/ros-publisher",permalink:"/personal-site/docs/computer/robot/ros/ros-publisher",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-publisher.md",tags:[],version:"current",frontMatter:{id:"ros-publisher",title:"ROS\u53d1\u5e03\u8005 Publisher \u7684\u7f16\u7a0b\u5b9e\u73b0",sidebar_label:"Publisher"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"ROS & VSCode",permalink:"/personal-site/docs/computer/robot/ros/ros-vscode"},next:{title:"Subscriber",permalink:"/personal-site/docs/computer/robot/ros/ros-subscriber"}},p={},o=[{value:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09",id:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005-publisher",level:2},{value:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a Publisher",id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a-publisher",level:2},{value:"\u7f16\u7a0b\u5b9e\u73b0",id:"\u7f16\u7a0b\u5b9e\u73b0",level:2},{value:"\u6e90\u6587\u4ef6",id:"\u6e90\u6587\u4ef6",level:3},{value:"\u914d\u7f6e <code>CMakeList.txt</code>",id:"\u914d\u7f6e-cmakelisttxt",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:o};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005-publisher"},"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09"),(0,n.kt)("p",null,"\u53d1\u5e03 ",(0,n.kt)("inlineCode",{parentName:"p"},"publish")," \u662f\u6307\u5c06\u6570\u636e\u53d1\u5e03\u5230\u67d0\u4e2a\u8bdd\u9898\u4e2d"),(0,n.kt)("p",null,"\u4e3a\u4e86\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\u53d1\u5e03\u64cd\u4f5c\u3002\u53d1\u5e03\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},"publisher")," \u5fc5\u987b\u5728\u8282\u70b9\u7ba1\u7406\u5668\u4e0a\u6ce8\u518c\u81ea\u5df1\u7684\u8bdd\u9898\u7b49\u591a\u79cd\u4fe1\u606f"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"publisher")," \u7684\u5de5\u4f5c\u8fc7\u7a0b\u5982\u4e0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5411\u8282\u70b9\u7ba1\u7406\u5668\u6ce8\u518c\u8282\u70b9")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u544a\u8bc9\u7ba1\u7406\u5668\u8981\u5411\u54ea\u4e2a\u8bdd\u9898\u53d1\u5e03\u6570\u636e")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8282\u70b9\u8fd0\u884c\u65f6\u91c7\u96c6\u6570\u636e\uff0c\u7136\u540e\u53d1\u5e03\u5230\u8fd9\u4e2a\u8bdd\u9898"))),(0,n.kt)("h2",{id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a-publisher"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a Publisher"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316 ROS \u8282\u70b9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5411 ",(0,n.kt)("inlineCode",{parentName:"p"},"ROS Master")," \u6ce8\u518c\u8282\u70b9\u4fe1\u606f\uff0c\u5305\u62ec\u53d1\u5e03\u7684\u8bdd\u9898\u540d\u548c\u8bdd\u9898\u4e2d\u7684\u6d88\u606f\u7c7b\u578b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u6d88\u606f\u6570\u636e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6309\u7167\u4e00\u5b9a\u9891\u7387\u5faa\u73af\u53d1\u5e03\u6d88\u606f"))),(0,n.kt)("h2",{id:"\u7f16\u7a0b\u5b9e\u73b0"},"\u7f16\u7a0b\u5b9e\u73b0"),(0,n.kt)("p",null,"\u521b\u5efa\u529f\u80fd\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/src\ncatkin_create_pkg learning_topic roscpp rospy std_msgs geometry_msgs turtlesim\n")),(0,n.kt)("h3",{id:"\u6e90\u6587\u4ef6"},"\u6e90\u6587\u4ef6"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"learning_topic")," \u529f\u80fd\u5305\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e2d\u65b0\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"velocity_publisher.cpp")," \u6587\u4ef6"),(0,n.kt)("p",null,"\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"p"},"velocity_publisher.cpp"),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/**\n * @file velocity_publisher.cpp\n * @brief \u8be5\u4f8b\u7a0b\u5c06\u53d1\u5e03 turtle1/cmd_vel \u8bdd\u9898\uff0c\u6d88\u606f\u7c7b\u578b geometry_msgs::Twist\n */\n\n#include <ros/ros.h>\n#include <geometry_msgs/Twist.h>\n\nint main(int argc, char **argv) {\n    // ROS \u8282\u70b9\u521d\u59cb\u5316\n    ros::init(argc, argv, "velocity_publisher")\n\n    // \u521b\u5efa\u8282\u70b9\u53e5\u67c4\n    ros::NodeHandle node;\n\n    // \u521b\u5efa\u4e00\u4e2a publisher \u6ce8\u518c\n    // \u53d1\u5e03\u540d\u4e3a /turtle1/cmd_vel \u7684 topic\n    // \u6d88\u606f\u7c7b\u578b\u4e3a geometry_msgs::Twist\n    // \u961f\u5217\u957f\u5ea6\u662f 10\n    ros::Publisher turtle_vel_pub = node.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel"\uff0c10)\n\n    // \u8bbe\u7f6e\u5faa\u73af\u7684\u9891\u7387\n    ros::Rate loop_rate(10);\n\n    int count = 0;\n    while (ros::ok())\n    {\n        // \u521d\u59cb\u5316 geometry_msgs::Twist \u7c7b\u578b\u7684\u6d88\u606f\n        geometry_msgs::Twist vel_msg;\n        vel_msg.linear.x = 0.5;\n        vel_msg.angular.z = 0.2;\n\n        // \u53d1\u5e03\u6d88\u606f\n        turtle_vel_pub.publish(vel_msg);\n        ROS_INFO("Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]", vel_msg.linear.x, vel_msg.angular.z)\n\n        // \u6309\u7167\u5faa\u73af\u9891\u7387\u5ef6\u65f6\n        loop_rate.sleep();\n    }\n    \n    return 0;\n}\n')),(0,n.kt)("h3",{id:"\u914d\u7f6e-cmakelisttxt"},"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"h3"},"CMakeList.txt")),(0,n.kt)("p",null,"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"CMakeList.txt")," \u4e2d\u7684\u7f16\u8bd1\u89c4\u5219\uff0c\u5728\u6587\u4ef6\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," \u90e8\u5206\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,n.kt)("admonition",{title:"\ud83d\udca1",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"CMakeList.txt")," \u6587\u4ef6\u4e2d\u6709\u5f88\u8be6\u7ec6\u7684\u6ce8\u91ca\uff0c\u4ed4\u7ec6\u9605\u8bfb\u80fd\u4e86\u89e3\u7f16\u8bd1\u662f\u5982\u4f55\u5b9e\u73b0\u7684")),(0,n.kt)("p",null,"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"velocity_publisher.cpp")," \u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-CMakeList"},"add_executable(velocity_publisher src/velocity_publisher.cpp)\n")),(0,n.kt)("p",null,"\u5c06\u53ef\u6267\u884c\u6587\u4ef6\u4e0e\u4e00\u4e9b\u5e93\u8fdb\u884c\u94fe\u63a5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-CMakeList"},"target_link_libraries(velocity_publisher ${catkin_LIBRARIES})\n")),(0,n.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\ncatkin_make\nsource ~/catkin_ws/devel/setup.bash\n")),(0,n.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\nroscore\n")),(0,n.kt)("p",null,"\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u8282\u70b9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rosrun turtlesim turtlesim_node\n")),(0,n.kt)("p",null,"\u540c\u6837\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"velocity_publisher")," \u53d1\u5e03\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\nsource devel/setup.bash\nrosrun learning_topic velocity_publisher\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5c0f\u6d77\u9f9f\u6309\u7167\u4e00\u5b9a\u7684\u89d2\u5ea6\u4e0e\u901f\u5ea6\u8fd0\u52a8"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/jiejiemcu/article/details/105349782"},"ROS\u5165\u95e8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1zt411G7Vn?p=5"},"\u53e4\u6708\u5c45\u7684\u89c6\u9891\u6559\u7a0b"))))}c.isMDXComponent=!0}}]);