(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),a=(n(0),n(199)),o=["components"],l={id:"cc-11-nullptr",title:"C++11 nullptr",sidebar_label:"nullptr"},p={unversionedId:"cc/cc-11-nullptr",id:"cc/cc-11-nullptr",isDocsHomePage:!1,title:"C++11 nullptr",description:"NULL\u3001nullptr\u30010 \u7684\u533a\u522b",source:"@site/docs/cc/cc11-nullptr.md",slug:"/cc/cc-11-nullptr",permalink:"/personal-site/docs/cc/cc-11-nullptr",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/cc/cc11-nullptr.md",version:"current",sidebar_label:"nullptr",sidebar:"\ud83d\udcbb",previous:{title:"C++11 auto\u3001decltype",permalink:"/personal-site/docs/cc/cc-11-auto"},next:{title:"C++11 \u6a21\u677f\u522b\u540d",permalink:"/personal-site/docs/cc/cc-11-using"}},i=[{value:"<code>NULL</code>\u3001<code>nullptr</code>\u3001<code>0</code> \u7684\u533a\u522b",id:"null\u3001nullptr\u30010-\u7684\u533a\u522b",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(c.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"null\u3001nullptr\u30010-\u7684\u533a\u522b"},Object(a.b)("inlineCode",{parentName:"h2"},"NULL"),"\u3001",Object(a.b)("inlineCode",{parentName:"h2"},"nullptr"),"\u3001",Object(a.b)("inlineCode",{parentName:"h2"},"0")," \u7684\u533a\u522b"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NULL"),"\u7684\u5b9a\u4e49"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"#ifndef __cplusplus\n#define NULL ((void *)0)\n#else   /* C++ */\n#define NULL 0\n")),Object(a.b)("p",null,"\u5728C++\u4e2d\uff0c",Object(a.b)("strong",{parentName:"p"},"NULL"),"\u88ab\u76f4\u63a5\u5b9a\u4e49\u4e3a ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"0")),"\uff0c\u8fd9\u6837\u5728\u51fd\u6570\u91cd\u8f7d\u65f6\u7528",Object(a.b)("strong",{parentName:"p"},"NULL"),"\u8868\u793a\u7a7a\u6307\u9488\u5219\u4f1a\u51fa\u73b0\u95ee\u9898"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"void function(int a, int *pb);    // \u539f\u51fd\u6570\nvoid function(int a, int pb);    // \u91cd\u8f7d\nfunction(a, NULL);\n")),Object(a.b)("p",null,"\u4e5f\u5c31\u662f\u8bf4",Object(a.b)("strong",{parentName:"p"},"NULL"),"\u5728\u7a0b\u5e8f\u4e2d\u5177\u6709\u4e8c\u4e49\u6027\uff0cC++11\u5f15\u5165\u4e86 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"nullptr"))," \u5173\u952e\u5b57\u6765\u4ee3\u6307\u7a7a\u6307\u9488"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"nullptr"))," \u662f\u6307\u9488\u7c7b\u578b\uff0c\u4e0d\u80fd\u8f6c\u6362\u4e3a\u6574\u578b\uff0c\u4f46\u662fC++11\u4ecd\u70ed\u5141\u8bb8\u4f7f\u7528 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"0"))," \u6765\u8868\u793a\u7a7a\u6307\u9488\uff0c \u56e0\u6b64 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"nullptr == 0"))," \u4e3a ",Object(a.b)("strong",{parentName:"p"},"true"),"\uff0c\u4f46\u662f\u4f7f\u7528 ",Object(a.b)("strong",{parentName:"p"},"nullptr")," \u4f1a\u6709\u66f4\u9ad8\u7684\u5b89\u5168\u6027"))}b.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return n?c.a.createElement(m,l(l({ref:t},i),{},{components:n})):c.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);