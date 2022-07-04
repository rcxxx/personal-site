"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7458],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68003:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"ros-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS melodic",sidebar_label:"install"},i=void 0,p={unversionedId:"computer/robot/ros/ros-install",id:"computer/robot/ros/ros-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS melodic",description:"\u7528Anaconda\u521b\u5efa\u4e00\u4e2apython\u7684\u865a\u62df\u73af\u5883",source:"@site/docs/computer/robot/ros/ros-melodic-install.md",sourceDirName:"computer/robot/ros",slug:"/computer/robot/ros/ros-install",permalink:"/personal-site/docs/computer/robot/ros/ros-install",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-melodic-install.md",tags:[],version:"current",frontMatter:{id:"ros-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS melodic",sidebar_label:"install"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"ROS",permalink:"/personal-site/docs/category/ROS"},next:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/personal-site/docs/computer/robot/ros/ros-core-concepts"}},c={},u=[{value:"\u7528Anaconda\u521b\u5efa\u4e00\u4e2apython\u7684\u865a\u62df\u73af\u5883",id:"\u7528anaconda\u521b\u5efa\u4e00\u4e2apython\u7684\u865a\u62df\u73af\u5883",level:2},{value:"\u5b89\u88c5 ros melodic",id:"\u5b89\u88c5-ros-melodic",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u542f\u52a8 ros master",id:"\u542f\u52a8-ros-master",level:3},{value:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u5668",id:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u5668",level:3},{value:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u63a7\u5236\u8282\u70b9",id:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u63a7\u5236\u8282\u70b9",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7528anaconda\u521b\u5efa\u4e00\u4e2apython\u7684\u865a\u62df\u73af\u5883"},"\u7528Anaconda\u521b\u5efa\u4e00\u4e2apython\u7684\u865a\u62df\u73af\u5883"),(0,o.kt)("p",null,"ros \u6240\u4f9d\u8d56\u7684 python \u7248\u672c\u4e3a python2.7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n ros-melodic python=2.7\nsource activate ros-melodic\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5-ros-melodic"},"\u5b89\u88c5 ros melodic"),(0,o.kt)("p",null,"\u5c06 ros \u6dfb\u52a0\u81f3\u8f6f\u4ef6\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'\n")),(0,o.kt)("p",null,"\u6dfb\u52a0\u79d8\u94a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654\n")),(0,o.kt)("p",null,"\u66f4\u65b0\u8f6f\u4ef6\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,o.kt)("p",null,"\u5b89\u88c5 ros"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ros-melodic-desktop-full\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u53ea\u662f\u60f3\u66f4\u6539\u5f53\u524d\u7ec8\u7aef\u7684\u73af\u5883\uff0c\u5219\u53ef\u4ee5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/ros/melodic/setup.bash\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u4f1a\u5c06\u6240\u5f00\u542f\u7684\u865a\u62df\u73af\u5883\u5173\u95ed\u6389\uff0c\u91cd\u542f\u5f00\u542f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source activate ros-melodic\n")))),(0,o.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u548c\u8f6f\u4ef6\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential\n")),(0,o.kt)("p",null,"\u521d\u59cb\u5316 rosdep"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python-rosdep\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6267\u884c\u521d\u59cb\u5316")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rosdep init\nrosdep update\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udcbb")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u8fc7\u7a0b\u5efa\u8bae\u5f00\u542f\u79d1\u5b66\u4e0a\u7f51"))),(0,o.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u8fd0\u884c"),(0,o.kt)("h3",{id:"\u542f\u52a8-ros-master"},"\u542f\u52a8 ros master"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"roscore\n")),(0,o.kt)("h3",{id:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u5668"},"\u542f\u52a8\u5c0f\u6d77\u9f9f\u4eff\u771f\u5668"),(0,o.kt)("p",null,"\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u6fc0\u6d3b\u5bf9\u5e94\u73af\u5883\u540e\u5f00\u542f\u4eff\u771f\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source activate ros-melodic\nrosrun turtlesim turtlesim_node\n")),(0,o.kt)("p",null,"\u4f1a\u51fa\u73b0\u4e00\u53ea\u5c0f\u6d77\u9f9f\u5728\u832b\u832b\u7684\u5927\u6d77\u91cc\ud83d\udc22"),(0,o.kt)("h3",{id:"\u542f\u52a8\u5c0f\u6d77\u9f9f\u63a7\u5236\u8282\u70b9"},"\u542f\u52a8\u5c0f\u6d77\u9f9f\u63a7\u5236\u8282\u70b9"),(0,o.kt)("p",null,"\u540c\u6837\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\uff0c\u6fc0\u6d3b\u5bf9\u5e94\u73af\u5883"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source activate ros-melodic\nrosrun turtlesim turtle_teleop_key\n")),(0,o.kt)("p",null,"\u6839\u636e\u7ec8\u7aef\u4e2d\u7684\u63d0\u793a\uff0c\u53ef\u4ee5\u7528\u4e0a\u4e0b\u5de6\u53f3\u63a7\u5236\u5c0f\u6d77\u9f9f\u7684\u79fb\u52a8"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\u7684\u8bdd\uff0c ros \u5c31\u5b89\u88c5\u6210\u529f\u4e86"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"http://wiki.ros.org/melodic/Installation/Ubuntu"},"ros\u5b98\u65b9wiki"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.bilibili.com/video/BV1zt411G7Vn?p=5"},"\u53e4\u6708\u5c45\u7684\u89c6\u9891\u6559\u7a0b")))))}d.isMDXComponent=!0}}]);