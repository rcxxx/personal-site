(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=o(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(t),O=a,d=s["".concat(l,".").concat(O)]||s[O]||u[O]||c;return t?r.a.createElement(d,b(b({ref:n},p),{},{components:t})):r.a.createElement(d,b({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=O;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<c;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),c=(t(0),t(114)),l={id:"ros-workspace-and-pkg",title:"\u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305\u7684\u521b\u5efa",sidebar_label:"\u5de5\u4f5c\u7a7a\u95f4 & \u529f\u80fd\u5305"},b={unversionedId:"ros/ros-workspace-and-pkg",id:"ros/ros-workspace-and-pkg",isDocsHomePage:!1,title:"\u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305\u7684\u521b\u5efa",description:"\u5de5\u4f5c\u7a7a\u95f4",source:"@site/docs/ros/ros-\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305.md",slug:"/ros/ros-workspace-and-pkg",permalink:"/docs/docs/ros/ros-workspace-and-pkg",version:"current",sidebar_label:"\u5de5\u4f5c\u7a7a\u95f4 & \u529f\u80fd\u5305"},i=[{value:"\u5de5\u4f5c\u7a7a\u95f4",id:"\u5de5\u4f5c\u7a7a\u95f4",children:[]},{value:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",children:[]},{value:"\u521b\u5efa\u529f\u80fd\u5305",id:"\u521b\u5efa\u529f\u80fd\u5305",children:[]}],p={rightToc:i};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5de5\u4f5c\u7a7a\u95f4"},"\u5de5\u4f5c\u7a7a\u95f4"),Object(c.b)("p",null,"\u4e00\u4e2aROS\u5de5\u4f5c\u7a7a\u95f4\u7684\u7ed3\u6784\u5982\u4e0b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"<workspace>\n    \u251c\u2500\u2500 build\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 devel\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 install\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 ...\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"src/")," \u4ee3\u7801\u7a7a\u95f4\uff0c\u7528\u6765\u653e\u7f6e\u529f\u80fd\u5305\u3001\u529f\u80fd\u5305\u914d\u7f6e\u7b49\u6587\u4ef6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"build/")," \u653e\u7f6e\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u4e2d\u95f4\u6587\u4ef6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"devel/")," \u653e\u7f6e\u7f16\u8bd1\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3001\u5e93\u3001\u811a\u672c\u7b49\uff0c\u6700\u7ec8\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u90fd\u5728\u5176\u4e2d\u8fd0\u884c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"install/")," \u5b89\u88c5\u7a7a\u95f4\uff0c\u7c7b\u4f3c\u4e8e\u5b89\u88c5\u76ee\u5f55\uff0c\u4e0e ",Object(c.b)("inlineCode",{parentName:"li"},"devel/")," \u6709\u91cd\u590d\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"ROS 1")," \u4e2d\u4e0d\u5e38\u7528")),Object(c.b)("h2",{id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"},"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/catkin_ws/src\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"catkin_ws")," \u540d\u79f0\u662f\u81ea\u5df1\u5b9a\u4e49\u7684\uff0c\u4f46 ",Object(c.b)("inlineCode",{parentName:"li"},"/src")," \u662f\u5fc5\u987b\u8981\u521b\u5efa\u7684\u76ee\u5f55")),Object(c.b)("p",null,"\u8fdb\u5165\u76ee\u5f55\u5e76\u521d\u59cb\u5316\u5de5\u4f5c\u7a7a\u95f4"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/catkin_ws/src\ncatkin_init_workspace\n")),Object(c.b)("p",null,"\u73b0\u5728\u5de5\u4f5c\u7a7a\u95f4\u5df2\u7ecf\u521d\u59cb\u5316\u6210\u529f\uff0c\u4f46\u8fd8\u662f\u4e00\u4e2a\u7a7a\u7684\u7a7a\u95f4\uff0c\u8fd8\u9700\u8981\u5bf9\u5de5\u4f5c\u7a7a\u95f4\u8fdb\u884c\u7f16\u8bd1"),Object(c.b)("p",null,"\u8fdb\u5165\u5de5\u4f5c\u7a7a\u95f4\u6839\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/catkin_ws/\ncatkin_make\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8fd9\u91cc\u53ef\u80fd\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898\uff0c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"Anaconda")," \u521b\u5efa\u7684\u865a\u62df\u73af\u5883\u65f6\uff0c\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"li"},"ROS")," \u7684\u65f6\u5019\u53ef\u80fd ",Object(c.b)("inlineCode",{parentName:"li"},"catkin_pkg")," \u662f\u6ca1\u6709\u5b89\u88c5\u7684\uff0c\u5bfc\u81f4\u7f16\u8bd1\u7684\u65f6\u5019\u62a5\u9519",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pip install catkin_pkg")," \u540e\u91cd\u65b0\u7f16\u8bd1\u5373\u53ef")))),Object(c.b)("p",null,"\u751f\u6210\u5b89\u88c5\u7a7a\u95f4 ",Object(c.b)("inlineCode",{parentName:"p"},"/install")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"catkin_make install\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"ROS 1")," \u4e2d ",Object(c.b)("inlineCode",{parentName:"li"},"/install")," \u76ee\u5f55\u4e0e ",Object(c.b)("inlineCode",{parentName:"li"},"devel/")," \u76ee\u5f55\u662f\u6709\u4e00\u5b9a\u91cd\u590d\u7684\uff0c\u4e0d\u5e38\u7528")),Object(c.b)("h2",{id:"\u521b\u5efa\u529f\u80fd\u5305"},"\u521b\u5efa\u529f\u80fd\u5305"),Object(c.b)("p",null,"\u521b\u5efa\u529f\u80fd\u5305\u7684\u547d\u4ee4"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"catkin_create_pkg <package_name> [depend1] [depend2] [depend2]")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"<package_name>")," \u4e3a\u529f\u80fd\u5305\u7684\u540d\u79f0")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"[depend]")," \u4e3a\u4f9d\u8d56\u7684\u9879"))),Object(c.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"test_pkg")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/catkin_ws/src\ncatkin_create_pkg test_pkg std_msgs roscpp rospy\n")),Object(c.b)("p",null,"\u7f16\u8bd1\u529f\u80fd\u5305"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/catkin_ws/\ncatkin_make\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source ~/catkin_ws/devel/setup.bash\n")))}o.isMDXComponent=!0}}]);