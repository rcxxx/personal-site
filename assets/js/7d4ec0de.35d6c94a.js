"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6833],{30416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"cc-11-unified-init",title:"C++11 \u7edf\u4e00\u7684\u521d\u59cb\u5316",sidebar_label:"\u7edf\u4e00\u7684\u521d\u59cb\u5316"},c=void 0,p={unversionedId:"computer/programming/cc/11/cc-11-unified-init",id:"computer/programming/cc/11/cc-11-unified-init",title:"C++11 \u7edf\u4e00\u7684\u521d\u59cb\u5316",description:"\u65b0\u7c7b\u578b",source:"@site/docs/computer/programming/cc/11/cc11\u7edf\u4e00\u7684\u521d\u59cb\u5316.md",sourceDirName:"computer/programming/cc/11",slug:"/computer/programming/cc/11/cc-11-unified-init",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11-unified-init",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/programming/cc/11/cc11\u7edf\u4e00\u7684\u521d\u59cb\u5316.md",tags:[],version:"current",frontMatter:{id:"cc-11-unified-init",title:"C++11 \u7edf\u4e00\u7684\u521d\u59cb\u5316",sidebar_label:"\u7edf\u4e00\u7684\u521d\u59cb\u5316"},sidebar:"\u2328\ufe0fprogramming",previous:{title:"C++11",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11"},next:{title:"auto\u3001decltype",permalink:"/personal-site/docs/computer/programming/cc/11/cc-11-auto"}},u={},m=[{value:"\u65b0\u7c7b\u578b",id:"\u65b0\u7c7b\u578b",level:2},{value:"\u9632\u6b62\u7f29\u7a84",id:"\u9632\u6b62\u7f29\u7a84",level:3},{value:"std::initializer_list",id:"stdinitializer_list",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b0\u7c7b\u578b"},"\u65b0\u7c7b\u578b"),(0,a.kt)("p",null,"C++11\u65b0\u589e\u4e86\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"long long")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"unsigned long long"),"\uff0c\u4ee5\u652f\u630164\u4f4d\u6216\u662f\u66f4\u5bbd\u7684\u6574\u5f62"),(0,a.kt)("p",null,"\u8fd8\u65b0\u589e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"char16_t")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"char32_t"),"\uff0c\u4ee5\u652f\u630116\u4f4d\u548c32\u4f4d\u7684\u5b57\u7b26\u8868\u793a"),(0,a.kt)("p",null,"\u65b0\u589e\u4e86\u201c\u539f\u59cb\u201d\u5b57\u7b26\u4e32"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"C++11\u6269\u5927\u4e86\u521d\u59cb\u5316\u5217\u8868\u7684\u9002\u7528\u8303\u56f4\uff0c\u4f7f\u5176\u53ef\u4ee5\u7528\u4e8e\u6240\u6709\u5185\u7f6e\u7c7b\u578b\u548c\u7528\u6237\u5b9a\u4e49\u7684\u7c7b\u578b\uff08\u5373\u7c7b\u4e0e\u5bf9\u8c61\uff09\u3002\u4f7f\u7528\u521d\u59cb\u5316\u5217\u8868\u65f6\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," \u7b26\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"int x = {5};\ndouble y {2.75};\nshort quar[5] {4, 5, 2, 76, 1};\n")),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u5217\u8868\u8bed\u6cd5\u4e5f\u53ef\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u8868\u8fbe\u5f0f\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"int * ar = new int [4] {2, 4, 6, 7};\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5bf9\u8c61\u65f6\uff0c\u4e5f\u53ef\u4f7f\u7528\u521d\u59cb\u5316\u5217\u8868\u6765\u8c03\u7528\u6784\u9020\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"class Student{\nprivate:\n    int age;\n    double height;\npublic:\n    Student (int a, double h) : age(a), height(h){\n    \n    }\n};\nint main() {\n    Student s1(18, 170.25);  // old style\n    Student s2{19, 175.86};  // C++11\n    Student s3 = {20, 180.09};  // C++11\n}\n")),(0,a.kt)("h3",{id:"\u9632\u6b62\u7f29\u7a84"},"\u9632\u6b62\u7f29\u7a84"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u5217\u8868\u8bed\u6cd5\u53ef\u9632\u6b62\u7f29\u7a84\uff0c\u5373\u7981\u6b62\u5c06\u6570\u503c\u8d4b\u7ed9\u65e0\u6cd5\u50a8\u5b58\u5b83\u7684\u6570\u503c\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"// \u5e38\u89c4\u521d\u59cb\u5316\u5141\u8bb8\u6267\u884c\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\u7684\u64cd\u4f5c\nchar c1 = 1.57e27;  // double to char\nchar c2 = 459585821;  // int to char. out of range\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u521d\u59cb\u5316\u5217\u8868\u8bed\u6cd5\uff0c\u7f16\u8bd1\u5668\u5c06\u7981\u6b62\u8fdb\u884c\u8fd9\u6837\u7684\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"// compile error\nchar c1 {1.57e27};  // double to char\nchar c2 = {459585821};  // int to char. out of range\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5141\u8bb8\u8f6c\u6362\u4e3a\u66f4\u5bbd\u7684\u7c7b\u578b\uff0c\u6216\u662f\u503c\u5728\u8f83\u7a84\u7c7b\u578b\u7684\u53d6\u503c\u8303\u56f4\u5185\uff0c\u4e5f\u5141\u8bb8\u8f6c\u6362\u4e3a\u8f83\u7a84\u7684\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"// allow\nchar c1 {66};  // int to char. in range\ndouble c2 = {66};  // int to double\n")),(0,a.kt)("h3",{id:"stdinitializer_list"},"std::initializer_list"),(0,a.kt)("p",null,"C++11\u63d0\u4f9b\u4e86\u6a21\u677f\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list"),"\uff0c\u53ef\u5c06\u5176\u7528\u4f5c\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u3002\u5982\u679c\u6709\u7c7b\u63a5\u53d7  ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list"),"\u4f5c\u4e3a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u5219\u521d\u59cb\u5316\u5217\u8868\u8bed\u6cd5\u5c31\u53ea\u80fd\u7528\u4e8e\u8be5\u6784\u9020\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"STL")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vector")," \u7c7b\u63d0\u4f9b\u4e86\u5c06  ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list")," \u4f5c\u4e3a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"vector<int> v1(10); // v1\u4e3a\u670910\u4e2a\u5143\u7d20\u7684\u4e3a\u521d\u59cb\u5316\u5bb9\u5668\nvector<int> v2{10}; // v2\u4e3a\u67091\u4e2a\u5143\u7d20\u503c\u4e3a10\u7684\u5bb9\u5668\nvector<int> v3{4, 6, 1}; // v3 3\u4e2a\u5143\u7d20\u4e3a 4\uff0c6\uff0c1\n")),(0,a.kt)("p",null,"\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list")," \u63d0\u4f9b\u4e86\u5bf9\u7c7b\u6a21\u677f  ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list"),"\uff0c\u8fd9\u4e2a\u7c7b\u5305\u542b\u6210\u5458",(0,a.kt)("inlineCode",{parentName:"p"},"brgin()")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"end()"),"\uff0c\u7528\u4e8e\u83b7\u53d6\u5217\u8868\u8303\u56f4"),(0,a.kt)("p",null,"\u9664\u7528\u4e8e\u6784\u9020\u51fd\u6570\u5916\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer_list")," \u8fd8\u53ef\u7528\u4f5c\u5e38\u89c4\u51fd\u6570\u7684\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"#include<initializer_list>\ndouble sum(std::initializer_list<double> il){\n    double num = 0;\n    for (auto i = il.begin(); i != il.end(); i++) {\n        num += *i;\n    }\n    return num;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u7528\u5230\u4e86 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"auto"))," \u6765\u7b80\u5316\u4ee3\u7801\u58f0\u660e")),(0,a.kt)("hr",null))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);