"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33],{62774:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],i={id:"cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",sidebar_label:"\u5faa\u73af"},p=void 0,l={unversionedId:"computer/programming/cc/11/cc-11-new-for",id:"computer/programming/cc/11/cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",description:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",source:"@site/docs/computer/programming/cc/11/cc11\u5faa\u73af.md",sourceDirName:"computer/programming/cc/11",slug:"/computer/programming/cc/11/cc-11-new-for",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11-new-for",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/programming/cc/11/cc11\u5faa\u73af.md",tags:[],version:"current",frontMatter:{id:"cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",sidebar_label:"\u5faa\u73af"},sidebar:"\u2328\ufe0fprogramming",previous:{title:"\u6a21\u677f\u522b\u540d",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11-using"},next:{title:"\u667a\u80fd\u6307\u9488",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11-auto-ptr"}},u={},s=[{value:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",level:2},{value:"std::for_each\u65b9\u6cd5",id:"stdfor_each\u65b9\u6cd5",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"},"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"),(0,c.kt)("p",null,"\u5173\u4e8efor\u5faa\u73af\u6211\u4eec\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u5047\u8bbe\u8981\u904d\u5386\u4e00\u4e2a\u6570\u7ec4"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (int i = 0; i < 10; i++) {\n    std::cout << arr[i];\n}\n")),(0,c.kt)("p",null,"\u5f53\u9700\u8981\u904d\u5386\u4e00\u4e2a\u5bb9\u5668\u7c7b\u65f6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v {1,2,3,4,5,6,7,8,9,10};\nfor (std::vector<int>::iterator i = v.begin(); i != v.end(); i++) {\n    std::cout << *i;\n}\n")),(0,c.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7ed9for\u5faa\u73af\u6307\u5b9a\u5f00\u59cb\u503c\u4ee5\u53ca\u7ed3\u675f\u6761\u4ef6\uff0cC++11\u4e2d\u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u660e\u786e\u7ed9\u51fa\u5f00\u59cb\u548c\u7ed3\u675f\u6761\u4ef6\u7684\u65b0\u8bed\u6cd5"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af")),(0,c.kt)("p",null,"\u53ef\u4ee5\u5c06\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u6539\u5199\u6210\u8fd9\u6837"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (auto i : arr) {\n    std::cout << i;\n}\n\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i;\n}\n")),(0,c.kt)("p",null,"\u6539\u5199\u540e\u4ee3\u7801\u7b80\u6d01\u4e86\u5f88\u591a\uff0c\u53ef\u8bfb\u6027\u6709\u4e86\u4e00\u5b9a\u7684\u63d0\u9ad8"),(0,c.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u64cd\u4f5c\u7684\u904d\u5386\u662f\u53ea\u8bfb\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u53ef\u4ee5\u4fee\u6539\u6570\u7ec4\u6216\u662f\u5bb9\u5668\u4e2d\u7684\u503c\uff0c\u5982\u679c\u9700\u8981\u5bf9\u503c\u8fdb\u884c\u4fee\u6539\uff0c\u9700\u8981\u5c06\u904d\u5386\u65f6\u7684\u53d8\u91cf\u58f0\u660e\u4e3a\u5f15\u7528\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i++;\n}\n")),(0,c.kt)("h2",{id:"stdfor_each\u65b9\u6cd5"},"std::for_each\u65b9\u6cd5"),(0,c.kt)("p",null,"\u6539\u5199\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u7ed3\u6784\uff0c\u540c\u6837\u53ef\u4ee5\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"STL"),"\u6807\u51c6\u5e93\u4e2d\u63d0\u4f9b\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"for_each"),"\u65b9\u6cd5\u5b9e\u73b0"),(0,c.kt)("p",null,"\u9700\u8981\u5305\u542b\u5934\u6587\u4ef6 ",(0,c.kt)("strong",{parentName:"p"},(0,c.kt)("inlineCode",{parentName:"strong"},"#include<algorithm>"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"void func(int n) {\n    std::cout << n ;\n}\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nstd::for_each(v.begin(), v.end(), func});\n")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);