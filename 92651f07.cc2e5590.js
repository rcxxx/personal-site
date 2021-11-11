(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var c=t(3),a=t(7),r=(t(0),t(183)),l={id:"cc-generic-and-template-2",title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",sidebar_label:"\u7c7b\u6a21\u677f"},i={unversionedId:"cc/cc-generic-and-template-2",id:"cc/cc-generic-and-template-2",isDocsHomePage:!1,title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",description:"\u7c7b\u6a21\u677f",source:"@site/docs/cc/\u6a21\u677f2.md",slug:"/cc/cc-generic-and-template-2",permalink:"/docs/docs/cc/cc-generic-and-template-2",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/cc/\u6a21\u677f2.md",version:"current",sidebar_label:"\u7c7b\u6a21\u677f",sidebar:"\ud83d\udcbb",previous:{title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",permalink:"/docs/docs/cc/cc-generic-and-template"},next:{title:" ",permalink:"/docs/docs/cc/cc-classes-virtual-function"}},p=[{value:"\u7c7b\u6a21\u677f",id:"\u7c7b\u6a21\u677f",children:[{value:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f",id:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f",children:[]},{value:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316",id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316",children:[]},{value:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316",id:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316",children:[]},{value:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f",id:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f",children:[]}]}],o={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u7c7b\u6a21\u677f"},"\u7c7b\u6a21\u677f"),Object(r.b)("p",null,"\u7c7b\u6a21\u677f\u4e5f\u662f\u516c\u5171\u903b\u8f91\u7684\u62bd\u8c61\uff0c\u901a\u5e38\u7528\u6765\u4f5c\u4e3a\u5bb9\u5668\uff08\u4f8b\u5982\uff1avector\uff09\u6216\u8005\u884c\u4e3a\u7684\u5c01\u88c5"),Object(r.b)("h3",{id:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f"},"\u57fa\u7840\u7684\u7c7b\u6a21\u677f"),Object(r.b)("p",null,"\u7c7b\u6a21\u677f\u7684\u5b9e\u73b0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template <typename T> \nclass C {\n    // code\n}\n")),Object(r.b)("p",null,"\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass example {\npublic:\n    //\u6784\u9020\u51fd\u6570\n    example(T a, T b) {\n        this->a = a;\n        this->b = b;\n    }\n    //\u8fd0\u7b97\u7b26\u91cd\u8f7d\n    example<T> operator+(example &e) {\n        example<T> tmp(this->a+e.a, this->b+e.b);\n        return tmp;\n    }       \nprivate:\n    T a;\n    T b;\n}\n\nint main()\n{\n    //\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u5fc5\u987b\u58f0\u660e\u6a21\u677f\u7c7b\u578b\uff0c\u56e0\u4e3a\u8981\u5206\u914d\u5185\u5bb9\n    example<int> a(10,20);  \n    example<int> b(20,30);\n    example<int> c = a + b;\n    return 0;\n}\n")),Object(r.b)("h3",{id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316"},"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316"),Object(r.b)("p",null,"\u7c7b\u4f3c\u4e8e\u51fd\u6570\u6a21\u677f\u7684\u91cd\u8f7d\uff0c\u53ef\u4ee5\u901a\u8fc7\u7279\u5316\uff08\u504f\u7279\u5316\uff09\u7c7b\u6a21\u677f\u6765\u5b9e\u73b0\u5bf9\u7279\u6b8a\u9700\u6c42\u7684\u5904\u7406"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316\u9700\u8981\u6a21\u677f\u540d\u79f0\u76f8\u540c\u5e76\u4e14\u7279\u5316\u5217\u8868",Object(r.b)("inlineCode",{parentName:"li"},"<>"),"\u4e2d\u7684\u53c2\u6570\u4e2a\u6570\u4e0e\u539f\u59cb\u6a21\u677f\u76f8\u5bf9\u5e94"),Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u7c7b\u6a21\u677f\u53ef\u4ee5\u6709\u591a\u4e2a\u7279\u5316\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u5b9e\u4f8b\u5316\u90a3\u4e2a\u6700\u7279\u6b8a\u7684\u7248\u672c")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"#include <typeinfo>\ntemplate<typename T> //\u57fa\u672c\u6a21\u677f\nclass C {\npublic:\n    void info() {   \n        // code\n    }\n};\ntemplate<> //\u7279\u5316\nclass C<int> { \npublic:\nvoid info() {\n    // code\n}\n};\ntemplate<typename T> //\u504f\u7279\u5316\nclass C<T*> {\npublic:\nvoid info() {\n    // code\n    }\n};\ntemplate<typename T, typename U> //\u53e6\u5916\u4e00\u79cd\u504f\u7279\u5316\nclass C<T(U)> {\npublic:\n    void info() {\n        // code\n    }\n};\n\nint func(int i) {\n    // code\n}\n\nint main(){\n    C<float> c1;\n    C1.info();     // \u8c03\u7528\u57fa\u7840\u6a21\u677f                \n    C<int> c2;\n    C2.info();     // \u8c03\u7528 int \u7279\u5316\u6a21\u677f\n    C<float*> c3;\n    C3.info();     // \u8c03\u7528 T* \u7279\u5316\u6a21\u677f\n    C<decltype(func)> c4;\n    c4.info();     // \u8c03\u7528\u51fd\u6570\u7279\u5316\u6a21\u677f\n}\n")),Object(r.b)("h3",{id:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316"},"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316"),Object(r.b)("p",null,"\u9664\u4e86\u53ef\u4ee5\u7279\u5316\u7c7b\u6a21\u677f\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u7c7b\u6a21\u677f\u4e2d\u7684\u6210\u5458\u51fd\u6570\u548c\u666e\u901a\u9759\u6001\u6210\u5458\u53d8\u91cf\u8fdb\u884c\u7279\u5316"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>  \nclass C {\npublic:\n    void info() {\n        // code\n    }\n    static int value;\n};\n\ntemplate<typename T>\nint C<T>::value = 10;\n\ntemplate<>\nint C<int>::value = 100;    //\u666e\u901a\u9759\u6001\u6210\u5458\u53d8\u91cf\u7684int\u7279\u5316\n\ntemplate<>\nvoid C<int>::info() {    //\u6210\u5458\u51fd\u6570\u7684int\u7279\u5316\n    // code\n}\n")),Object(r.b)("h3",{id:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f"},"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f"),Object(r.b)("p",null,"\u6a21\u677f\u7c7b\u540c\u6837\u53ef\u4ee5\u5b9e\u73b0\u7ee7\u627f"),Object(r.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u7236\u7c7b\u81ea\u5b9a\u4e49\u4e86\u6784\u9020\u51fd\u6570\uff0c\u8bb0\u5f97\u5b50\u7c7b\u8981\u4f7f\u7528\u6784\u9020\u51fd\u6570\u5217\u8868\u6765\u521d\u59cb\u5316"),Object(r.b)("li",{parentName:"ul"},"\u7ee7\u627f\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b50\u7c7b\u4e0d\u662f\u6a21\u677f\u7c7b\uff0c\u5219\u5fc5\u987b\u6307\u660e\u5f53\u524d\u7684\u7236\u7c7b\u7684\u7c7b\u578b\uff0c\u56e0\u4e3a\u8981\u5206\u914d\u5185\u5b58\u7a7a\u95f4"),Object(r.b)("li",{parentName:"ul"},"\u7ee7\u627f\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b50\u7c7b\u662f\u6a21\u677f\u7c7b\uff0c\u8981\u4e48\u6307\u5b9a\u7236\u7c7b\u7684\u7c7b\u578b\uff0c\u8981\u4e48\u7528\u5b50\u7c7b\u7684\u6cdb\u578b\u6765\u6307\u5b9a\u7236\u7c7b")),Object(r.b)("p",null,"\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass Parent {\npublic:\n    Parent(T p){\n        this->p = p;\n    } \nprivate:\n    T p;\n};\n\n//\u5982\u679c\u5b50\u7c7b\u4e0d\u662f\u6a21\u677f\u7c7b\uff0c\u9700\u8981\u6307\u660e\u7236\u7c7b\u7684\u5177\u4f53\u7c7b\u578b\nclass ChildOne : public Parent<int> {\npublic:\n    ChildOne(int a,int b):Parent(b){\n        this->cone = a;\n    }\nprivate:\n    int cone;\n};\n\n//\u5982\u679c\u5b50\u7c7b\u662f\u6a21\u677f\u7c7b\uff0c\u53ef\u4ee5\u7528\u5b50\u7c7b\u7684\u6cdb\u578b\u6765\u8868\u793a\u7236\u7c7b\ntemplate <typename T>\nclass ChildTwo : public Parent<T> {\npublic:\n    ChildTwo(T a, T b):Parent<T>(b) {\n        this->ctwo = a;\n    }\n    \nprivate:\n    T ctwo;\n};\n    ```\n")))}b.isMDXComponent=!0},183:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var c=t(0),a=t.n(c);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(t),m=c,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||r;return t?a.a.createElement(d,i(i({ref:n},o),{},{components:t})):a.a.createElement(d,i({ref:n},o))}));function d(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:c,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);