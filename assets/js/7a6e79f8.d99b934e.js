"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2797],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1571:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],p={id:"ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",sidebar_label:"extract pcd file in bag"},i=void 0,s={unversionedId:"computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",id:"computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",description:"ROS bag",source:"@site/docs/computer/robot/ros/ros-point-cloud/bag_to_pcd.md",sourceDirName:"computer/robot/ros/ros-point-cloud",slug:"/computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",permalink:"/personal-site/docs/computer/robot/ros/ros-point-cloud/ros-bag-to-pcd",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-point-cloud/bag_to_pcd.md",tags:[],version:"current",frontMatter:{id:"ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",sidebar_label:"extract pcd file in bag"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"Launch",permalink:"/personal-site/docs/computer/robot/ros/ros-launch"},next:{title:"rosbag\u53ef\u89c6\u5316",permalink:"/personal-site/docs/computer/robot/ros/ros-point-cloud/ros-rosbag-play-rviz"}},c={},u=[{value:"ROS bag",id:"ros-bag",level:2},{value:"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e",id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e",level:2},{value:"reference",id:"reference",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ros-bag"},"ROS bag"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4ecb\u7ecd \u2014\u2014 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://wiki.ros.org/rosbag/"},"rosbag - ROS Wiki"))),(0,a.kt)("li",{parentName:"ul"},"\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4f7f\u7528 \u2014\u2014 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b")))),(0,a.kt)("h2",{id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e"},"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e"),(0,a.kt)("p",null,"\u5148\u67e5\u770b\u4e00\u4e0b\u9700\u8981\u89e3\u6790\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bag\u5305")," \u4e2d\u7684\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rosbag info <filename>.bag\n")),(0,a.kt)("p",null,"\u6211\u7528\u6765\u6d4b\u8bd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bag\u5305")," \u8f93\u51fa\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/ros-info-bag.png",alt:null})),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"topics")," \u90e8\u5206\u53ef\u4ee5\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"velodyne_points     108 msgs    : sensor_msgs/PointCloud2")," \u8fd9\u6837\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PointCloud2")," \u6d88\u606f\u7c7b\u578b\uff0c\u5c31\u662f\u6211\u4eec\u60f3\u8981\u89e3\u6790\u7684\u70b9\u4e91\u6570\u636e"),(0,a.kt)("p",null,"\u89e3\u6790\u547d\u4ee4\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd <filename>.bag <topics/> <save_path>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<filename>.bag")," \u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"bag\u5305")," \u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<topics/>")," \u9700\u8981\u89e3\u6790\u7684\u8282\u70b9\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<save_path>")," \u5b58\u50a8\u8def\u5f84")),(0,a.kt)("p",null,"\u4f8b\u5982\u6211\u81ea\u5df1\u7684\u89e3\u6790\u547d\u4ee4\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd test.bag velodyne_points test_pcd\n")),(0,a.kt)("p",null,"\u89e3\u6790\u5b8c\u6210\u540e\u7ec8\u7aef\u663e\u793a\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/bag_to_pcd.png",alt:null})),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pcl_viewer")," \u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"pcd")," \u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pcl_viewer <filename>.pcd\n")),(0,a.kt)("p",null,"\u9884\u89c8\u7ed3\u679c\n",(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/pcl_viewer.png",alt:null})),(0,a.kt)("h2",{id:"reference"},"reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/KYJL888/article/details/103118213?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242"},"[\u5b66\u4e60\u70b9\u4e91]ROS\u4e2d\u89e3\u6790bag\u5305\u4e2d\u7684\u70b9\u4e91\u6587\u4ef6\u5230pcd\u683c\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"ROS \u673a\u5668\u4eba\u6280\u672f - rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b\uff01")))))}d.isMDXComponent=!0}}]);