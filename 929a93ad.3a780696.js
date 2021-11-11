(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),c=(t(0),t(183)),l={id:"ros-launch",title:" ",sidebar_label:"Launch"},o={unversionedId:"ros/ros-launch",id:"ros/ros-launch",isDocsHomePage:!1,title:" ",description:"roslaunch \u7684\u4f7f\u7528",source:"@site/docs/ros/ros-lunch.md",slug:"/ros/ros-launch",permalink:"/docs/docs/ros/ros-launch",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-lunch.md",version:"current",sidebar_label:"Launch",sidebar:"\ud83d\udc7drobot",previous:{title:"ROS \u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528",permalink:"/docs/docs/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528"},next:{title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",permalink:"/docs/docs/ros/ros-point-cloud/ros-bag-to-pcd"}},i=[{value:"<code>roslaunch</code> \u7684\u4f7f\u7528",id:"roslaunch-\u7684\u4f7f\u7528",children:[{value:"<code>.launch</code> \u6587\u4ef6",id:"launch-\u6587\u4ef6",children:[]},{value:"\u4f7f\u7528 <code>roslaunch</code> \u8fd0\u884c\u8282\u70b9",id:"\u4f7f\u7528-roslaunch-\u8fd0\u884c\u8282\u70b9",children:[]}]},{value:"reference",id:"reference",children:[]}],u={toc:i};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"roslaunch-\u7684\u4f7f\u7528"},Object(c.b)("inlineCode",{parentName:"h2"},"roslaunch")," \u7684\u4f7f\u7528"),Object(c.b)("p",null,"ros \u4e2d\u53ef\u4ee5\u7f16\u5199\u542f\u52a8\u6587\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u8fd0\u884c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"roslaunch package_name file.launch\n")),Object(c.b)("h3",{id:"launch-\u6587\u4ef6"},Object(c.b)("inlineCode",{parentName:"h3"},".launch")," \u6587\u4ef6"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"roslaunch")," \u6240\u6267\u884c\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},".launch")," \u6587\u4ef6\u662f\u4ee5 ",Object(c.b)("inlineCode",{parentName:"p"},"XML")," \u683c\u5f0f\u63cf\u8ff0\u7684"),Object(c.b)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u5fc5\u987b\u542b\u6709\u4e00\u4e2a\u6839\u5143\u7d20 ",Object(c.b)("inlineCode",{parentName:"p"},"<launch>")," \uff0c\u6587\u4ef6\u4e2d\u7684\u5176\u4ed6\u5185\u5bb9\u90fd\u4f1a\u5305\u542b\u5728\u8fd9\u4e2a\u6839\u5143\u7d20\u4e2d"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-XML"},"<launch>\n    ......\n<launch>\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},".launch")," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u542f\u52a8 ROS \u8282\u70b9\uff0c\u5176\u8bed\u6cd5\u4e0e\u7ec8\u7aef\u8fd0\u884c ROS \u8282\u70b9\u76f8\u4f3c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-XML"},'<node pkg="package-name" type="executable-name" name="node-name" />\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pkg")," \u529f\u80fd\u5305\u540d\u79f0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"type")," \u53ef\u6267\u884c\u6587\u4ef6\u540d\u79f0\uff0c\u5373\u8282\u70b9"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"name")," \u8282\u70b9\u8fd0\u884c\u540d\u79f0\uff0c\u6b64\u53c2\u6570\u4f1a\u8986\u76d6\u6389 ",Object(c.b)("inlineCode",{parentName:"li"},"ros:init")," \u4e2d\u5b9a\u4e49\u7684\u540d\u79f0")),Object(c.b)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u53c2\u6570\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u53c2\u6570"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'output = "screen"')," \u5c06\u8282\u70b9\u7684\u6807\u51c6\u8f93\u51fa\u6253\u5370\u5230\u7ec8\u7aef\u5c4f\u5e55\uff0c\u9ed8\u8ba4\u8f93\u51fa\u4e3a\u65e5\u5fd7\u6587\u6863"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'respawn = "true"')," \u590d\u4f4d\u5c5e\u6027\uff0c\u8be5\u8282\u70b9\u505c\u6b62\u65f6\uff0c\u4f1a\u81ea\u52a8\u91cd\u542f\uff0c\u9ed8\u8ba4\u4e3afalse"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'required = "true"')," \u5fc5\u8981\u8282\u70b9\uff0c\u5f53\u8be5\u8282\u70b9\u7ec8\u6b62\u65f6\uff0claunch\u6587\u4ef6\u4e2d\u7684\u5176\u4ed6\u8282\u70b9\u4e5f\u88ab\u7ec8\u6b62"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'ns = "namespace"')," \u547d\u540d\u7a7a\u95f4\uff0c\u4e3a\u8282\u70b9\u5185\u7684\u76f8\u5bf9\u540d\u79f0\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u524d\u7f00"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'args = "arguments"')," \u8282\u70b9\u9700\u8981\u7684\u8f93\u5165\u53c2\u6570")),Object(c.b)("h3",{id:"\u4f7f\u7528-roslaunch-\u8fd0\u884c\u8282\u70b9"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"h3"},"roslaunch")," \u8fd0\u884c\u8282\u70b9"),Object(c.b)("h2",{id:"reference"},"reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://wiki.ros.org/roslaunch/"},"roslaunch - ROS Wiki")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://wiki.ros.org/roslaunch/Tutorials"},"roslaunch/Tutorials - ROS Wiki")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.guyuehome.com/2195"},"ROS\u63a2\u7d22\u603b\u7ed3\uff08\u4e94\u5341\u516d\uff09\u2014\u2014 launch\u6587\u4ef6")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_41995979/article/details/81784987"},"ROS\u5165\u95e8\u4e4b\u2014\u2014\u6d45\u8c08launch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.jianshu.com/p/13efab3f67e0"},"\u673a\u5668\u4eba\u64cd\u4f5c\u7cfb\u7edfROS\u4ece\u5165\u95e8\u5230\u653e\u5f03(\u516d)\uff1a\u4f7f\u7528roslaunch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/98663550"},"roslaunch \u4ecb\u7ecd"))))}b.isMDXComponent=!0},183:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(t),m=r,O=p["".concat(l,".").concat(m)]||p[m]||s[m]||c;return t?a.a.createElement(O,o(o({ref:n},u),{},{components:t})):a.a.createElement(O,o({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);