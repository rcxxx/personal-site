(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(199)),i=["components"],c={id:"ros-publisher",title:"ROS\u53d1\u5e03\u8005 Publisher \u7684\u7f16\u7a0b\u5b9e\u73b0",sidebar_label:"Publisher"},b={unversionedId:"ros/ros-publisher",id:"ros/ros-publisher",isDocsHomePage:!1,title:"ROS\u53d1\u5e03\u8005 Publisher \u7684\u7f16\u7a0b\u5b9e\u73b0",description:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09",source:"@site/docs/ros/ros-publisher.md",slug:"/ros/ros-publisher",permalink:"/personal-site/docs/ros/ros-publisher",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-publisher.md",version:"current",sidebar_label:"Publisher",sidebar:"\ud83d\udc7drobot",previous:{title:"\u4f7f\u7528VSCode \u8fdb\u884c ROS \u5f00\u53d1",permalink:"/personal-site/docs/ros/ros-vscode"},next:{title:"ROS\u8ba2\u9605\u8005 Subscriber \u7684\u7f16\u7a0b\u5b9e\u73b0",permalink:"/personal-site/docs/ros/ros-subscriber"}},s=[{value:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09",id:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005-\uff08publisher\uff09",children:[]},{value:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a Publisher",id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a-publisher",children:[]},{value:"\u7f16\u7a0b\u5b9e\u73b0",id:"\u7f16\u7a0b\u5b9e\u73b0",children:[{value:"\u6e90\u6587\u4ef6",id:"\u6e90\u6587\u4ef6",children:[]},{value:"\u914d\u7f6e <code>CMakeList.txt</code>",id:"\u914d\u7f6e-cmakelisttxt",children:[]},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],o={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005-\uff08publisher\uff09"},"\u4ec0\u4e48\u662f\u53d1\u5e03\u8005 \uff08Publisher\uff09"),Object(l.b)("p",null,"\u53d1\u5e03 ",Object(l.b)("inlineCode",{parentName:"p"},"publish")," \u662f\u6307\u5c06\u6570\u636e\u53d1\u5e03\u5230\u67d0\u4e2a\u8bdd\u9898\u4e2d"),Object(l.b)("p",null,"\u4e3a\u4e86\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\u53d1\u5e03\u64cd\u4f5c\u3002\u53d1\u5e03\u8005 ",Object(l.b)("inlineCode",{parentName:"p"},"publisher")," \u5fc5\u987b\u5728\u8282\u70b9\u7ba1\u7406\u5668\u4e0a\u6ce8\u518c\u81ea\u5df1\u7684\u8bdd\u9898\u7b49\u591a\u79cd\u4fe1\u606f"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"publisher")," \u7684\u5de5\u4f5c\u8fc7\u7a0b\u5982\u4e0b"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u5411\u8282\u70b9\u7ba1\u7406\u5668\u6ce8\u518c\u8282\u70b9")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u544a\u8bc9\u7ba1\u7406\u5668\u8981\u5411\u54ea\u4e2a\u8bdd\u9898\u53d1\u5e03\u6570\u636e")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u8282\u70b9\u8fd0\u884c\u65f6\u91c7\u96c6\u6570\u636e\uff0c\u7136\u540e\u53d1\u5e03\u5230\u8fd9\u4e2a\u8bdd\u9898"))),Object(l.b)("h2",{id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a-publisher"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a Publisher"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u521d\u59cb\u5316 ROS \u8282\u70b9")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5411 ",Object(l.b)("inlineCode",{parentName:"p"},"ROS Master")," \u6ce8\u518c\u8282\u70b9\u4fe1\u606f\uff0c\u5305\u62ec\u53d1\u5e03\u7684\u8bdd\u9898\u540d\u548c\u8bdd\u9898\u4e2d\u7684\u6d88\u606f\u7c7b\u578b")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u521b\u5efa\u6d88\u606f\u6570\u636e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6309\u7167\u4e00\u5b9a\u9891\u7387\u5faa\u73af\u53d1\u5e03\u6d88\u606f"))),Object(l.b)("h2",{id:"\u7f16\u7a0b\u5b9e\u73b0"},"\u7f16\u7a0b\u5b9e\u73b0"),Object(l.b)("p",null,"\u521b\u5efa\u529f\u80fd\u5305"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/src\ncatkin_create_pkg learning_topic roscpp rospy std_msgs geometry_msgs turtlesim\n")),Object(l.b)("h3",{id:"\u6e90\u6587\u4ef6"},"\u6e90\u6587\u4ef6"),Object(l.b)("p",null,"\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"learning_topic")," \u529f\u80fd\u5305\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e2d\u65b0\u5efa ",Object(l.b)("inlineCode",{parentName:"p"},"velocity_publisher.cpp")," \u6587\u4ef6"),Object(l.b)("p",null,"\u7f16\u8f91 ",Object(l.b)("inlineCode",{parentName:"p"},"velocity_publisher.cpp"),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'/**\n * @file velocity_publisher.cpp\n * @brief \u8be5\u4f8b\u7a0b\u5c06\u53d1\u5e03 turtle1/cmd_vel \u8bdd\u9898\uff0c\u6d88\u606f\u7c7b\u578b geometry_msgs::Twist\n */\n\n#include <ros/ros.h>\n#include <geometry_msgs/Twist.h>\n\nint main(int argc, char **argv) {\n    // ROS \u8282\u70b9\u521d\u59cb\u5316\n    ros::init(argc, argv, "velocity_publisher")\n\n    // \u521b\u5efa\u8282\u70b9\u53e5\u67c4\n    ros::NodeHandle node;\n\n    // \u521b\u5efa\u4e00\u4e2a publisher \u6ce8\u518c\n    // \u53d1\u5e03\u540d\u4e3a /turtle1/cmd_vel \u7684 topic\n    // \u6d88\u606f\u7c7b\u578b\u4e3a geometry_msgs::Twist\n    // \u961f\u5217\u957f\u5ea6\u662f 10\n    ros::Publisher turtle_vel_pub = node.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel"\uff0c10)\n\n    // \u8bbe\u7f6e\u5faa\u73af\u7684\u9891\u7387\n    ros::Rate loop_rate(10);\n\n    int count = 0;\n    while (ros::ok())\n    {\n        // \u521d\u59cb\u5316 geometry_msgs::Twist \u7c7b\u578b\u7684\u6d88\u606f\n        geometry_msgs::Twist vel_msg;\n        vel_msg.linear.x = 0.5;\n        vel_msg.angular.z = 0.2;\n\n        // \u53d1\u5e03\u6d88\u606f\n        turtle_vel_pub.publish(vel_msg);\n        ROS_INFO("Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]", vel_msg.linear.x, vel_msg.angular.z)\n\n        // \u6309\u7167\u5faa\u73af\u9891\u7387\u5ef6\u65f6\n        loop_rate.sleep();\n    }\n    \n    return 0;\n}\n')),Object(l.b)("h3",{id:"\u914d\u7f6e-cmakelisttxt"},"\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"h3"},"CMakeList.txt")),Object(l.b)("p",null,"\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"CMakeList.txt")," \u4e2d\u7684\u7f16\u8bd1\u89c4\u5219\uff0c\u5728\u6587\u4ef6\u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"build")," \u90e8\u5206\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ud83d\udca1")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"CMakeList.txt")," \u6587\u4ef6\u4e2d\u6709\u5f88\u8be6\u7ec6\u7684\u6ce8\u91ca\uff0c\u4ed4\u7ec6\u9605\u8bfb\u80fd\u4e86\u89e3\u7f16\u8bd1\u662f\u5982\u4f55\u5b9e\u73b0\u7684"))),Object(l.b)("p",null,"\u5c06 ",Object(l.b)("inlineCode",{parentName:"p"},"velocity_publisher.cpp")," \u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-CMakeList"},"add_executable(velocity_publisher src/velocity_publisher.cpp)\n")),Object(l.b)("p",null,"\u5c06\u53ef\u6267\u884c\u6587\u4ef6\u4e0e\u4e00\u4e9b\u5e93\u8fdb\u884c\u94fe\u63a5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-CMakeList"},"target_link_libraries(velocity_publisher ${catkin_LIBRARIES})\n")),Object(l.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\ncatkin_make\nsource ~/catkin_ws/devel/setup.bash\n")),Object(l.b)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\nroscore\n")),Object(l.b)("p",null,"\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u8282\u70b9"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"rosrun turtlesim turtlesim_node\n")),Object(l.b)("p",null,"\u540c\u6837\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u6267\u884c ",Object(l.b)("inlineCode",{parentName:"p"},"velocity_publisher")," \u53d1\u5e03\u547d\u4ee4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\nsource devel/setup.bash\nrosrun learning_topic velocity_publisher\n")),Object(l.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u5c0f\u6d77\u9f9f\u6309\u7167\u4e00\u5b9a\u7684\u89d2\u5ea6\u4e0e\u901f\u5ea6\u8fd0\u52a8"),Object(l.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.csdn.net/jiejiemcu/article/details/105349782"},"ROS\u5165\u95e8")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1zt411G7Vn?p=5"},"\u53e4\u6708\u5c45\u7684\u89c6\u9891\u6559\u7a0b"))))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);