(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(177)),c={id:"ros-bag-to-pcd",title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",sidebar_label:"extract pcd file in bag"},l={unversionedId:"ros/ros-point-cloud/ros-bag-to-pcd",id:"ros/ros-point-cloud/ros-bag-to-pcd",isDocsHomePage:!1,title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",description:"ROS bag",source:"@site/docs/ros/ros-point-cloud/bag_to_pcd.md",slug:"/ros/ros-point-cloud/ros-bag-to-pcd",permalink:"/docs/docs/ros/ros-point-cloud/ros-bag-to-pcd",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-point-cloud/bag_to_pcd.md",version:"current",sidebar_label:"extract pcd file in bag",sidebar:"\ud83d\udc7drobot",previous:{title:" ",permalink:"/docs/docs/ros/ros-launch"},next:{title:"\u5728 rviz \u4e2d\u53ef\u89c6\u5316 rosbag \u6570\u636e",permalink:"/docs/docs/ros/ros-point-cloud/ros-rosbag-play-rviz"}},b=[{value:"ROS bag",id:"ros-bag",children:[]},{value:"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e",id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e",children:[]},{value:"reference",id:"reference",children:[]}],i={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ros-bag"},"ROS bag"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6709\u5173 ",Object(o.b)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4ecb\u7ecd \u2014\u2014 ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"http://wiki.ros.org/rosbag/"},"rosbag - ROS Wiki"))),Object(o.b)("li",{parentName:"ul"},"\u6709\u5173 ",Object(o.b)("inlineCode",{parentName:"li"},"rosbag")," \u7684\u4f7f\u7528 \u2014\u2014 ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b")))),Object(o.b)("h2",{id:"rosbag-\u89e3\u6790\u70b9\u4e91\u6570\u636e"},"rosbag \u89e3\u6790\u70b9\u4e91\u6570\u636e"),Object(o.b)("p",null,"\u5148\u67e5\u770b\u4e00\u4e0b\u9700\u8981\u89e3\u6790\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"bag\u5305")," \u4e2d\u7684\u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"rosbag info <filename>.bag\n")),Object(o.b)("p",null,"\u6211\u7528\u6765\u6d4b\u8bd5\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"bag\u5305")," \u8f93\u51fa\u5982\u4e0b"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/ros-info-bag.png",alt:null})),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"topics")," \u90e8\u5206\u53ef\u4ee5\u627e\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"velodyne_points     108 msgs    : sensor_msgs/PointCloud2")," \u8fd9\u6837\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"PointCloud2")," \u6d88\u606f\u7c7b\u578b\uff0c\u5c31\u662f\u6211\u4eec\u60f3\u8981\u89e3\u6790\u7684\u70b9\u4e91\u6570\u636e"),Object(o.b)("p",null,"\u89e3\u6790\u547d\u4ee4\u5982\u4e0b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd <filename>.bag <topics/> <save_path>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<filename>.bag")," \u4f60\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"bag\u5305")," \u540d\u5b57"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<topics/>")," \u9700\u8981\u89e3\u6790\u7684\u8282\u70b9\u540d\u79f0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<save_path>")," \u5b58\u50a8\u8def\u5f84")),Object(o.b)("p",null,"\u4f8b\u5982\u6211\u81ea\u5df1\u7684\u89e3\u6790\u547d\u4ee4\u4e3a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"rosrun pcl_ros bag_to_pcd test.bag velodyne_points test_pcd\n")),Object(o.b)("p",null,"\u89e3\u6790\u5b8c\u6210\u540e\u7ec8\u7aef\u663e\u793a\u5982\u4e0b"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/bag_to_pcd.png",alt:null})),Object(o.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"pcl_viewer")," \u67e5\u770b ",Object(o.b)("inlineCode",{parentName:"p"},"pcd")," \u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"pcl_viewer <filename>.pcd\n")),Object(o.b)("p",null,"\u9884\u89c8\u7ed3\u679c\n",Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/pcl_viewer.png",alt:null})),Object(o.b)("h2",{id:"reference"},"reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://blog.csdn.net/KYJL888/article/details/103118213?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242"},"[\u5b66\u4e60\u70b9\u4e91]ROS\u4e2d\u89e3\u6790bag\u5305\u4e2d\u7684\u70b9\u4e91\u6587\u4ef6\u5230pcd\u683c\u5f0f"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/151444739"},"ROS \u673a\u5668\u4eba\u6280\u672f - rosbag \u8be6\u7ec6\u4f7f\u7528\u6559\u7a0b\uff01")))))}p.isMDXComponent=!0}}]);