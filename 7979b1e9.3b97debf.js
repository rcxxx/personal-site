(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,d=b["".concat(a,".").concat(f)]||b[f]||s[f]||o;return n?c.a.createElement(d,i(i({ref:t},p),{},{components:n})):c.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(109)),a={id:"cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",sidebar_label:"\u5faa\u73af"},i={unversionedId:"cc/cc-11-new-for",id:"cc/cc-11-new-for",isDocsHomePage:!1,title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",description:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",source:"@site/docs/cc/cc11\u5faa\u73af.md",slug:"/cc/cc-11-new-for",permalink:"/docs/docs/cc/cc-11-new-for",version:"current",sidebar_label:"\u5faa\u73af",sidebar:"someSidebar",previous:{title:"C++11 \u6a21\u677f\u522b\u540d",permalink:"/docs/docs/cc/cc-11-using"},next:{title:"C++\u7684\u667a\u80fd\u6307\u9488",permalink:"/docs/docs/cc/cc-11-auto-ptr"}},l=[{value:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",children:[]},{value:"std::for_each\u65b9\u6cd5",id:"stdfor_each\u65b9\u6cd5",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"},"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"),Object(o.b)("p",null,"\u5173\u4e8efor\u5faa\u73af\u6211\u4eec\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u5047\u8bbe\u8981\u904d\u5386\u4e00\u4e2a\u6570\u7ec4"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (int i = 0; i < 10; i++) {\n    std::cout << arr[i];\n}\n")),Object(o.b)("p",null,"\u5f53\u9700\u8981\u904d\u5386\u4e00\u4e2a\u5bb9\u5668\u7c7b\u65f6"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"std::vector<int> v {1,2,3,4,5,6,7,8,9,10};\nfor (std::vector<int>::iterator i = v.begin(); i != v.end(); i++) {\n    std::cout << *i;\n}\n")),Object(o.b)("p",null,"\u6211\u4eec\u9700\u8981\u7ed9for\u5faa\u73af\u6307\u5b9a\u5f00\u59cb\u503c\u4ee5\u53ca\u7ed3\u675f\u6761\u4ef6\uff0cC++11\u4e2d\u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u660e\u786e\u7ed9\u51fa\u5f00\u59cb\u548c\u7ed3\u675f\u6761\u4ef6\u7684\u65b0\u8bed\u6cd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af")),Object(o.b)("p",null,"\u53ef\u4ee5\u5c06\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u6539\u5199\u6210\u8fd9\u6837"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (auto i : arr) {\n    std::cout << i;\n}\n\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i;\n}\n")),Object(o.b)("p",null,"\u6539\u5199\u540e\u4ee3\u7801\u7b80\u6d01\u4e86\u5f88\u591a\uff0c\u53ef\u8bfb\u6027\u6709\u4e86\u4e00\u5b9a\u7684\u63d0\u9ad8"),Object(o.b)("p",null,"\u4f46\u662f\u8fd9\u6837\u64cd\u4f5c\u7684\u904d\u5386\u662f\u53ea\u8bfb\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u53ef\u4ee5\u4fee\u6539\u6570\u7ec4\u6216\u662f\u5bb9\u5668\u4e2d\u7684\u503c\uff0c\u5982\u679c\u9700\u8981\u5bf9\u503c\u8fdb\u884c\u4fee\u6539\uff0c\u9700\u8981\u5c06\u904d\u5386\u65f6\u7684\u53d8\u91cf\u58f0\u660e\u4e3a\u5f15\u7528\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"std::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i++;\n}\n")),Object(o.b)("h2",{id:"stdfor_each\u65b9\u6cd5"},"std::for_each\u65b9\u6cd5"),Object(o.b)("p",null,"\u6539\u5199\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u7ed3\u6784\uff0c\u540c\u6837\u53ef\u4ee5\u7528",Object(o.b)("inlineCode",{parentName:"p"},"STL"),"\u6807\u51c6\u5e93\u4e2d\u63d0\u4f9b\u7684",Object(o.b)("inlineCode",{parentName:"p"},"for_each"),"\u65b9\u6cd5\u5b9e\u73b0"),Object(o.b)("p",null,"\u9700\u8981\u5305\u542b\u5934\u6587\u4ef6 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"#include<algorithm>"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void func(int n) {\n    std::cout << n ;\n}\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nstd::for_each(v.begin(), v.end(), func});\n")))}u.isMDXComponent=!0}}]);