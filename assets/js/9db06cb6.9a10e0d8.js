"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3845],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(t),f=o,m=b["".concat(l,".").concat(f)]||b[f]||p[f]||c;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6587:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={id:"ros-callback",title:"",sidebar_label:"\u56de\u8c03\u51fd\u6570\u673a\u5236"},l=void 0,s={unversionedId:"computer/robot/ros/ros-callback",id:"computer/robot/ros/ros-callback",title:"",description:"\u56de\u8c03\u51fd\u6570\u7684\u673a\u5236",source:"@site/docs/computer/robot/ros/ros-callback.md",sourceDirName:"computer/robot/ros",slug:"/computer/robot/ros/ros-callback",permalink:"/personal-site/docs/computer/robot/ros/ros-callback",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/robot/ros/ros-callback.md",tags:[],version:"current",frontMatter:{id:"ros-callback",title:"",sidebar_label:"\u56de\u8c03\u51fd\u6570\u673a\u5236"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"Subscriber",permalink:"/personal-site/docs/computer/robot/ros/ros-subscriber"},next:{title:"\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",permalink:"/personal-site/docs/computer/robot/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528"}},u={},p=[{value:"\u56de\u8c03\u51fd\u6570\u7684\u673a\u5236",id:"\u56de\u8c03\u51fd\u6570\u7684\u673a\u5236",level:2}],b={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u56de\u8c03\u51fd\u6570\u7684\u673a\u5236"},"\u56de\u8c03\u51fd\u6570\u7684\u673a\u5236"),(0,c.kt)("p",null,"\u5f53\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u901a\u5e38\u4f1a\u901a\u8fc7 ",(0,c.kt)("inlineCode",{parentName:"p"},"API")," \u6765\u8c03\u7528\u67d0\u4e2a\u5e93\u4e2d\u5199\u597d\u7684\u51fd\u6570\uff0c\u4f46\u662f\u67d0\u4e9b\u5e93\u51fd\u6570\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f1a\u5728\u5408\u9002\u7684\u65f6\u5019\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u4ee5\u5b8c\u6210\u7279\u5b9a\u7684\u529f\u80fd\u3002\u8fd9\u4e2a\u88ab\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u7684\u51fd\u6570\u5c31\u79f0\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"\u56de\u8c03\u51fd\u6570")),(0,c.kt)("p",null,"\u8fd9\u4e2a\u628a\u56de\u8c03\u51fd\u6570\u4f20\u5165\u5e93\u51fd\u6570\u4e2d\u7684\u52a8\u4f5c\uff0c\u88ab\u79f0\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"\u767b\u8bb0\u56de\u8c03\u51fd\u6570"),"\uff0c\u5728\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e4b\u524d\uff0c\u4e2d\u95f4\u51fd\u6570\u662f\u4e0d\u5b8c\u6574\u7684\uff1b\u7a0b\u5e8f\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\uff0c\u901a\u8fc7\u767b\u8bb0\u4e0d\u540c\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6765\u6539\u53d8\u4e2d\u95f4\u51fd\u6570\u5b9e\u73b0\u7684\u529f\u80fd"))}f.isMDXComponent=!0}}]);