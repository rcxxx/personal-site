"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9486],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),k=n,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5716:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],p={id:"ros-core-concepts",title:"ROS \u7684\u6838\u5fc3\u6982\u5ff5",sidebar_label:"\u6838\u5fc3\u6982\u5ff5"},o=void 0,c={unversionedId:"computer/robot/ros/ros-core-concepts",id:"computer/robot/ros/ros-core-concepts",title:"ROS \u7684\u6838\u5fc3\u6982\u5ff5",description:"\u8282\u70b9\uff08Node\uff09",source:"@site/docs/computer/robot/ros/ros-\u6838\u5fc3\u6982\u5ff5.md",sourceDirName:"computer/robot/ros",slug:"/computer/robot/ros/ros-core-concepts",permalink:"/personal-site/docs/computer/robot/ros/ros-core-concepts",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-\u6838\u5fc3\u6982\u5ff5.md",tags:[],version:"current",frontMatter:{id:"ros-core-concepts",title:"ROS \u7684\u6838\u5fc3\u6982\u5ff5",sidebar_label:"\u6838\u5fc3\u6982\u5ff5"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"install",permalink:"/personal-site/docs/computer/robot/ros/ros-install"},next:{title:"\u5de5\u4f5c\u7a7a\u95f4 & \u529f\u80fd\u5305",permalink:"/personal-site/docs/computer/robot/ros/ros-workspace-and-pkg"}},u={},m=[{value:"\u8282\u70b9\uff08Node\uff09",id:"\u8282\u70b9node",level:2},{value:"\u8282\u70b9\u7ba1\u7406\u5668\uff08ROS Master\uff09",id:"\u8282\u70b9\u7ba1\u7406\u5668ros-master",level:2},{value:"\u8bdd\u9898\u901a\u4fe1",id:"\u8bdd\u9898\u901a\u4fe1",level:2},{value:"\u8bdd\u9898\uff08Topic\uff09",id:"\u8bdd\u9898topic",level:3},{value:"\u6d88\u606f\uff08Message\uff09",id:"\u6d88\u606fmessage",level:3},{value:"\u53d1\u5e03\u8005\uff08Publisher\uff09",id:"\u53d1\u5e03\u8005publisher",level:3},{value:"\u8ba2\u9605\u8005\uff08Subscriber\uff09",id:"\u8ba2\u9605\u8005subscriber",level:3},{value:"\u670d\u52a1\u901a\u4fe1",id:"\u670d\u52a1\u901a\u4fe1",level:2},{value:"\u670d\u52a1\uff08Service\uff09",id:"\u670d\u52a1service",level:3},{value:"\u8bdd\u9898 &amp; \u670d\u52a1",id:"\u8bdd\u9898--\u670d\u52a1",level:2},{value:"\u53c2\u6570\uff08Parameter\uff09",id:"\u53c2\u6570parameter",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf",id:"\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u529f\u80fd\u5305\uff08Package\uff09",id:"\u529f\u80fd\u5305package",level:3},{value:"\u529f\u80fd\u5305\u6e05\u5355\uff08Package manifest\uff09",id:"\u529f\u80fd\u5305\u6e05\u5355package-manifest",level:3},{value:"\u5143\u529f\u80fd\u5305\uff08Meta Package\uff09",id:"\u5143\u529f\u80fd\u5305meta-package",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:m};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8282\u70b9node"},"\u8282\u70b9\uff08Node\uff09"),(0,l.kt)("p",null,"ROS\u4e2d\u5177\u4f53\u7684\u6267\u884c\u5355\u5143"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u5177\u4f53\u4efb\u52a1\u7684\u8fdb\u7a0b\u3001\u72ec\u7acb\u8fd0\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u540c\u8282\u70b9\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u53ef\u5206\u5e03\u5f0f\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u4e3b\u673a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8282\u70b9\u5728\u7cfb\u7edf\u4e2d\u7684\u540d\u79f0\u5fc5\u987b\u662f\u552f\u4e00\u7684"))),(0,l.kt)("h2",{id:"\u8282\u70b9\u7ba1\u7406\u5668ros-master"},"\u8282\u70b9\u7ba1\u7406\u5668\uff08ROS Master\uff09"),(0,l.kt)("p",null,"ROS\u6240\u6709\u8282\u70b9\u7684\u7ba1\u7406\u8005"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u8282\u70b9\u63d0\u4f9b\u547d\u540d\u548c\u6ce8\u518c\u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8ddf\u8e2a\u548c\u8bb0\u5f55\u8bdd\u9898/\u670d\u52a1\u901a\u4fe1\uff0c\u8f85\u52a9\u8282\u70b9\u76f8\u4e92\u67e5\u627e\u3001\u5efa\u7acb\u94fe\u63a5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u53c2\u6570\u670d\u52a1\u5668\uff0c\u8282\u70b9\u4f7f\u7528\u6b64\u670d\u52a1\u5668\u5b58\u50a8\u548c\u68c0\u7d22\u8fd0\u884c\u65f6\u7684\u53c2\u6570"))),(0,l.kt)("h2",{id:"\u8bdd\u9898\u901a\u4fe1"},"\u8bdd\u9898\u901a\u4fe1"),(0,l.kt)("p",null,"\u8bdd\u9898\u6a21\u578b\uff08\u8ba2\u9605/\u53d1\u5e03\uff09"),(0,l.kt)("h3",{id:"\u8bdd\u9898topic"},"\u8bdd\u9898\uff08Topic\uff09"),(0,l.kt)("p",null,"\u8bdd\u9898\u662fROS\u4e2d\u6570\u636e\u4f20\u8f93\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u672c\u8d28\u4e0a\u662f\u5f02\u6b65\u901a\u8baf\u7684\u673a\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8282\u70b9\u95f4\u7528\u6765\u4f20\u8f93\u6570\u636e\u7684\u91cd\u8981\u603b\u7ebf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u53d1\u5e03/\u8ba2\u9605\u6a21\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4e00\u4e2a\u8282\u70b9\u9700\u8981\u5206\u4eab\u4fe1\u606f\u7684\u65f6\u5019\uff0c\u5b83\u5c31\u4f1a\u53d1\u5e03 ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," \u6d88\u606f\u5230\u5bf9\u5e94\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8bdd\u9898 ",(0,l.kt)("inlineCode",{parentName:"p"},"topic"),"\uff1b\u5f53\u4e00\u4e2a\u8282\u70b9\u60f3\u8981\u63a5\u6536\u4fe1\u606f\u662f\uff0c\u53ef\u4ee5\u53bb\u8ba2\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},"subscribe")," \u6240\u9700\u8981\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8bdd\u9898")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8282\u70b9\u7ba1\u7406\u5668\u786e\u4fdd\u53d1\u5e03\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"publisher")," \u548c\u8ba2\u9605\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"subscriber")," \u4e92\u76f8\u80fd\u627e\u5230\u5bf9\u65b9\uff0c\u6d88\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," \u76f4\u63a5\u4ece\u53d1\u5e03\u8005\u4f20\u5230\u8ba2\u9605\u8005"))))),(0,l.kt)("h3",{id:"\u6d88\u606fmessage"},"\u6d88\u606f\uff08Message\uff09"),(0,l.kt)("p",null,"\u8bdd\u9898\u6240\u4f20\u8f93\u7684\u6570\u636e\u79f0\u4e3a\u6d88\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u606f\u5177\u6709\u4e00\u5b9a\u7684\u7c7b\u578b\u548c\u6570\u636e\u7ed3\u6784\uff0c\u5305\u62ecROS\u63d0\u4f9b\u7684\u6807\u51c6\u7c7b\u578b\u548c\u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7f16\u7a0b\u8bed\u8a00\u65e0\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".msg")," \u6587\u4ef6\u5b9a\u4e49\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7801\u6587\u4ef6"))),(0,l.kt)("h3",{id:"\u53d1\u5e03\u8005publisher"},(0,l.kt)("a",{parentName:"h3",href:"https://sinnammanyo.cn/personal-site/docs/ros/ros-publisher"},"\u53d1\u5e03\u8005\uff08Publisher\uff09")),(0,l.kt)("h3",{id:"\u8ba2\u9605\u8005subscriber"},(0,l.kt)("a",{parentName:"h3",href:"https://sinnammanyo.cn/personal-site/docs/ros/ros-subscriber"},"\u8ba2\u9605\u8005\uff08Subscriber\uff09")),(0,l.kt)("h2",{id:"\u670d\u52a1\u901a\u4fe1"},"\u670d\u52a1\u901a\u4fe1"),(0,l.kt)("p",null,"\u670d\u52a1\u6a21\u578b\uff08\u8bf7\u6c42/\u5e94\u7b54\uff09"),(0,l.kt)("h3",{id:"\u670d\u52a1service"},"\u670d\u52a1\uff08Service\uff09"),(0,l.kt)("p",null,"\u670d\u52a1\u662fROS\u4e2d\u7684\u4e00\u79cd\u540c\u6b65\u901a\u4fe1\u673a\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5ba2\u6237\u7aef/\u670d\u52a1\u5668\uff08C/S\uff09\u6a21\u578b\uff0c\u5ba2\u6237\u7aef\u53d1\u8bf7\u6c42\u6570\u636e\uff0c\u670d\u52a1\u5668\u5b8c\u6210\u5904\u7406\u540e\u8fd4\u56de\u5e94\u7b54\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7f16\u7a0b\u8bed\u8a00\u65e0\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".srv")," \u6587\u4ef6\u5b9a\u4e49\u8bf7\u6c42\u548c\u5e94\u7b54\u6570\u636e\u7ed3\u6784\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7801\u6587\u4ef6"))),(0,l.kt)("h2",{id:"\u8bdd\u9898--\u670d\u52a1"},"\u8bdd\u9898 & \u670d\u52a1"),(0,l.kt)("p",null,"\u8bdd\u9898\u4e0e\u670d\u52a1\u7684\u533a\u522b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"~"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u8bdd\u9898"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u670d\u52a1"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540c\u6b65\u6027"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5f02\u6b65"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u540c\u6b65")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u4fe1\u6a21\u578b"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53d1\u5e03/\u8ba2\u9605"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5ba2\u6237\u7aef/\u670d\u52a1\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e95\u5c42\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ROSTCP/ROSUDP"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ROSTCP/ROSUDP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53cd\u9988\u673a\u5236"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6709")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7f13\u51b2\u533a"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6709"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9e\u65f6\u6027"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5f31"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5f3a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8282\u70b9\u5173\u7cfb"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u591a\u5bf9\u591a"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u5bf9\u591a\uff08\u4e00\u4e2aserver\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u4f20\u8f93"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u903b\u8f91\u5904\u7406")))),(0,l.kt)("h2",{id:"\u53c2\u6570parameter"},"\u53c2\u6570\uff08Parameter\uff09"),(0,l.kt)("p",null,"\u53c2\u6570\u662fROS\u4e2d\u7684\u5168\u5c40\u5171\u4eab\u5b57\u5178"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u7f51\u7edc\u8bbf\u95ee\u7684\u5171\u4eab\u3001\u591a\u53d8\u91cf\u5b57\u5178"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4f7f\u7528\u6b64\u670d\u52a1\u5668\u6765\u5b58\u50a8\u548c\u68c0\u7d22\u8fd0\u884c\u65f6\u7684\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u5408\u5b58\u50a8\u9759\u6001\u3001\u975e\u4e8c\u8fdb\u5236\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u4e0d\u9002\u5408\u5b58\u50a8\u52a8\u6001\u914d\u7f6e\u7684\u6570\u636e")),(0,l.kt)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf"},"\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("h3",{id:"\u529f\u80fd\u5305package"},"\u529f\u80fd\u5305\uff08Package\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ROS\u8f6f\u4ef6\u4e2d\u7684\u57fa\u672c\u5355\u5143\uff0c\u5305\u542b\u8282\u70b9\u6e90\u7801\u3001\u914d\u7f6e\u6587\u4ef6\u3001\u6570\u636e\u5b9a\u4e49\u7b49")),(0,l.kt)("h3",{id:"\u529f\u80fd\u5305\u6e05\u5355package-manifest"},"\u529f\u80fd\u5305\u6e05\u5355\uff08Package manifest\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u529f\u80fd\u5305\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u542b\u4f5c\u8005\u4fe1\u606f\u3001\u8bb8\u53ef\u4fe1\u606f\u3001\u4f9d\u8d56\u9009\u9879\u3001\u7f16\u8bd1\u6807\u5fd7\u7b49")),(0,l.kt)("h3",{id:"\u5143\u529f\u80fd\u5305meta-package"},"\u5143\u529f\u80fd\u5305\uff08Meta Package\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u591a\u4e2a\u7528\u4e8e\u540c\u4e00\u76ee\u7684\u529f\u80fd\u5305")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1zt411G7Vn?p=5"},"\u53e4\u6708\u5c45\u7684\u89c6\u9891\u6559\u7a0b"))))}k.isMDXComponent=!0}}]);