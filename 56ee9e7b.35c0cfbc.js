(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{165:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return O}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},b=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,O=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return t?o.a.createElement(O,a(a({ref:r},p),{},{components:t})):o.a.createElement(O,a({ref:r},p))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(165)),i={id:"ros-pcl-topic",title:"ROS \u53d1\u5e03\u548c\u8ba2\u9605 pcl \u8bdd\u9898\u6d88\u606f",sidebar_label:"pcl-topic"},a={unversionedId:"ros/ros-point-cloud/ros-pcl-topic",id:"ros/ros-point-cloud/ros-pcl-topic",isDocsHomePage:!1,title:"ROS \u53d1\u5e03\u548c\u8ba2\u9605 pcl \u8bdd\u9898\u6d88\u606f",description:"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b",source:"@site/docs/ros/ros-point-cloud/pcl-subscriber.md",slug:"/ros/ros-point-cloud/ros-pcl-topic",permalink:"/docs/docs/ros/ros-point-cloud/ros-pcl-topic",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-point-cloud/pcl-subscriber.md",version:"current",sidebar_label:"pcl-topic",sidebar:"\ud83d\udc7drobot",previous:{title:"\u5728 rviz \u4e2d\u53ef\u89c6\u5316 rosbag \u6570\u636e",permalink:"/docs/docs/ros/ros-point-cloud/ros-rosbag-play-rviz"}},l=[{value:"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b",id:"pcl-\u5728-ros-\u4e2d\u7684\u6570\u636e\u7c7b\u578b",children:[{value:"\u521b\u5efa\u529f\u80fd\u5305",id:"\u521b\u5efa\u529f\u80fd\u5305",children:[]},{value:"\u521b\u5efa <code>publisher</code>",id:"\u521b\u5efa-publisher",children:[]},{value:"\u521b\u5efa <code>subscriber</code>",id:"\u521b\u5efa-subscriber",children:[]}]},{value:"reference",id:"reference",children:[]}],p={toc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"pcl-\u5728-ros-\u4e2d\u7684\u6570\u636e\u7c7b\u578b"},"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Overview"},"PCL Overview \u2014\u2014 ROS Wiki"))),Object(c.b)("p",null,"\u5148\u5728\u6b64\u94fe\u63a5\u4e2d\u5bf9\u6240\u9700\u8981\u7684\u6570\u636e\u7c7b\u578b\u7a0d\u4f5c\u4e86\u89e3"),Object(c.b)("h3",{id:"\u521b\u5efa\u529f\u80fd\u5305"},"\u521b\u5efa\u529f\u80fd\u5305"),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"ros")," \u5de5\u4f5c\u7a7a\u95f4\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u529f\u80fd\u5305 ",Object(c.b)("inlineCode",{parentName:"p"},"pcl_test")),Object(c.b)("p",null,"\u8be5\u529f\u80fd\u5305\u6709\u56db\u4e2a\u4f9d\u8d56\u9879 ",Object(c.b)("inlineCode",{parentName:"p"},"pcl_conversions  pcl_ros  roscpp  sensor_msgs")," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"cd src/\ncatkin_create_pkg pcl_test pcl_conversions pcl_ros roscpp sensor_msgs\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u529f\u80fd\u5305")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"cd ..\ncatkin_make\n")),Object(c.b)("h3",{id:"\u521b\u5efa-publisher"},"\u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"h3"},"publisher")),Object(c.b)("h3",{id:"\u521b\u5efa-subscriber"},"\u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"h3"},"subscriber")),Object(c.b)("h2",{id:"reference"},"reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://dabit-industries.github.io/turtlebot2-tutorials/13-ROSPCL.html"},"PCL with ROS using C++ \u2014\u2014 turtlebot2-tutorials")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Overview"},"PCL Overview \u2014\u2014 ROS Wiki")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://answers.ros.org/question/325030/how-to-read-a-point-cloud-pcd-file-and-send-it-to-a-rosbag/"},"How to read a point cloud (.pcd) file and send it to a rosbag")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Tutorials"},"How to use a PCL tutorial in ROS \u2014\u2014 ROS Wiki")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.guyuehome.com/25024"},"ROS\u7cfb\u7edf\u5b66\u4e6011---\u70b9\u4e91\u6570\u636e\u7684\u53d1\u9001\u548c\u63a5\u6536")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1692529"},"ROS\u4e0ePCL\u4e2d\u70b9\u4e91\u6570\u636e\u4e4b\u95f4\u7684\u8f6c\u6362")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1477011"},"\u5982\u4f55\u5728ROS\u4e2d\u4f7f\u7528PCL\u2014\u6570\u636e\u683c\u5f0f\uff081\uff09"))))}s.isMDXComponent=!0}}]);