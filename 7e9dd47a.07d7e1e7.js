(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var c=n(3),a=n(7),r=(n(0),n(152)),l={id:"cc-11-auto",title:"C++11 auto\u3001decltype",sidebar_label:"auto\u3001decltype"},o={unversionedId:"cc/cc-11-auto",id:"cc/cc-11-auto",isDocsHomePage:!1,title:"C++11 auto\u3001decltype",description:"\u7b80\u5316\u58f0\u660e",source:"@site/docs/cc/cc11-auto.md",slug:"/cc/cc-11-auto",permalink:"/docs/docs/cc/cc-11-auto",version:"current",sidebar_label:"auto\u3001decltype",sidebar:"\ud83d\udcbb",previous:{title:"C++11 \u7edf\u4e00\u7684\u521d\u59cb\u5316",permalink:"/docs/docs/cc/cc-11-unified-init"},next:{title:"C++11 nullptr",permalink:"/docs/docs/cc/cc-11-nullptr"}},b=[{value:"\u7b80\u5316\u58f0\u660e",id:"\u7b80\u5316\u58f0\u660e",children:[{value:"auto",id:"auto",children:[]},{value:"<code>decltype</code>\u548c\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5",id:"decltype\u548c\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5",children:[]},{value:"decltype",id:"decltype-1",children:[]}]}],p={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u7b80\u5316\u58f0\u660e"},"\u7b80\u5316\u58f0\u660e"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"C++11")," \u63d0\u4f9b\u4e86\u591a\u79cd\u7b80\u5316\u58f0\u660e\u7684\u529f\u80fd\uff0c\u5c24\u5176\u5728\u4f7f\u7528\u6a21\u677f\u65f6"),Object(r.b)("h3",{id:"auto"},"auto"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("strong",{parentName:"p"},"C++98")," \u4e2d\uff0c\u5173\u952e\u5b57 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," \u662f\u4e00\u4e2a\u5b58\u50a8\u7c7b\u578b\u8bf4\u660e\u7b26\uff0c",Object(r.b)("strong",{parentName:"p"},"C++11")," \u5c06\u5176\u7528\u4e8e\u5b9e\u73b0\u81ea\u52a8\u7c7b\u578b\u63a8\u65ad"),Object(r.b)("p",null,"\u5728\u521d\u59cb\u5316\u58f0\u660e\u4e2d\uff0c\u5982\u679c\u4f7f\u7528\u5173\u952e\u5b57 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"auto")),"\uff0c\u800c\u4e0d\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b\uff0c\u7f16\u8bd1\u5668\u5c06\u628a\u53d8\u91cf\u7684\u7c7b\u578b\u8bbe\u7f6e\u6210\u4e0e\u521d\u59cb\u503c\u76f8\u540c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"auto n = 100; // int\nauto x = 1.5; // double\nauto y = 1.3e12L // long double\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"auto \u53d8\u91cf\u5fc5\u987b\u5728\u5b9a\u4e49\u65f6\u521d\u59cb\u5316"))),Object(r.b)("p",null,"\u4f46\u662f ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," \u5e76\u4e0d\u662f\u4e3a\u4e86\u8fd9\u79cd\u7b80\u5355\u7684\u60c5\u51b5\u8bbe\u8ba1\u7684\uff0c\u5904\u7406\u590d\u6742\u7c7b\u578b\u65f6\uff0c\u624d\u80fd\u4f53\u73b0 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," \u7684\u4f18\u52bf"),Object(r.b)("p",null,"\u4f8b\u5982\u6807\u51c6\u5e93\u6a21\u5757\uff08STL\uff09\u4e2d\u7684\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"// C++98\nstd::vector<double> scores;\nstd::vector<double>::iterator pv = scores.begin();\n// C++11 \u5141\u8bb8\u4ee5\u5982\u4e0b\u65b9\u5f0f\u91cd\u5199\nstd::vector<double> scores;\nauto pv = scores.begin();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," \u7528\u4e8e\u5b9a\u4e49\u6a21\u677f\u51fd\u6570"),Object(r.b)("p",null,"\u4f8b\u5982\u5b9a\u4e49\u4e00\u4e2a\u6c42\u4e58\u79ef\u7684\u51fd\u6570\u6a21\u677f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"template <typename T1,typename T2>\nvoid Multiply(T1 x, T2 y) {\n    auto result = x * y;\n    std::cout << result;\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," ",Object(r.b)("strong",{parentName:"li"},"result")," \u7684\u7c7b\u578b\u5b9a\u4e49\u5c06\u4f1a\u53d8\u5f97\u5f88\u7e41\u7410")),Object(r.b)("h4",{id:"auto\uff1a\u5f15\u7528\u3001\u6307\u9488\u548cconst"},"auto\uff1a\u5f15\u7528\u3001\u6307\u9488\u548cconst"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"C++11"))," \u4e2d\uff0c\u5bf9\u4e8e\u5f15\u7528\uff0c",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"auto"))," \u9ed8\u8ba4\u4f7f\u7528\u4f20\u503c\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"&"))," \u4fee\u9970\u7b26\u5f3a\u5236\u4f7f\u7528\u5f15\u7528\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"int& func();\nauto a = func(); // int\nauto& b = func(); // int&\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u4e00\u4e2a\u6307\u9488auto\uff0c\u5b83\u4f1a\u81ea\u52a8\u6210\u4e3a\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u663e\u5f0f\u6307\u660e\u8be5\u53d8\u91cf\u662f\u4e00\u4e2a\u6307\u9488\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"int* func();\nauto p_a = func(); // int*\nauto *p_b = func(); // int*\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u5728\u5904\u7406\u5f15\u7528\u65f6\uff0c\u4e3aauto\u6dfb\u52a0const\u4fee\u9970\u7b26\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"int& func();\nconst auto& a = func(); // const int&\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"const\u4fee\u9970\u7b26\u7ed3\u5408\u6307\u9488")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"int* func();\nconst int* const_func();\nconst auto* a = func(); // const int*\nauto b = const_func(); // const int*\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"decltype\u548c\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5"},Object(r.b)("inlineCode",{parentName:"h3"},"decltype"),"\u548c\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5"),Object(r.b)("h4",{id:"\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5\uff1a\u540e\u7f6e\u8fd4\u56de\u7c7b\u578b"},"\u65b0\u7684\u8fd4\u56de\u503c\u8bed\u6cd5\uff1a\u540e\u7f6e\u8fd4\u56de\u7c7b\u578b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"C++11"))," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd4\u56de\u503c\u653e\u5728\u51fd\u6570\u58f0\u660e\u7684\u6700\u540e\uff0c\u5c06auto\u653e\u5728\u8fd4\u56de\u503c\u7684\u4f4d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"auto func(int x, int y) -> int;\n")),Object(r.b)("h4",{id:"decltype"},Object(r.b)("inlineCode",{parentName:"h4"},"decltype")),Object(r.b)("h3",{id:"decltype-1"},"decltype"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"auto\u5141\u8bb8\u7528\u7279\u6b8a\u7684\u7c7b\u578b\u58f0\u660e\u53d8\u91cf\uff0cdecltype\u5219\u5141\u8bb8\u4ece\u4e00\u4e2a\u53d8\u91cf\uff08\u6216\u4efb\u4f55\u8868\u8fbe\u5f0f\uff09\u5bfc\u51fa\u7c7b\u578b")),Object(r.b)("p",null,"\u5173\u952e\u5b57 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"decltype"))," \u5c06\u53d8\u91cf\u7684\u7c7b\u578b\u58f0\u660e\u4e3a\u8868\u8fbe\u5f0f\u6307\u5b9a\u7684\u7c7b\u578b ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"decltype(x) y;"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"int n;\ndouble x;\ndecltype(x * n) y; // double\ndecltype(&x) z; // double *\n")),Object(r.b)("p",null,"\u6839\u636e\u4f7f\u7528\u7684\u8868\u8fbe\u5f0f\uff0c\u6307\u5b9a\u7684\u7c7b\u578b\u53ef\u4ee5\u4e3a\u5f15\u7528\u548c ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"const"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="eg."',title:'"eg."'},"int i = 3;\nint &k = i;\nconst int &n = i;\ndecltype(n) j1; // const int &\ndecltype(i) j2; // int\ndecltype((i)) j3; // int &\ndecltype(k + 1) j4; // int\n")),Object(r.b)("p",null,"\u5728\u5b9a\u4e49\u6a21\u677f\u65f6 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"decltype"))," \u5c06\u4f1a\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u6a21\u677f\u8981\u5728\u5b9e\u4f8b\u5316\u65f6\u624d\u80fd\u786e\u5b9a\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template<typename T1, typename T2>\nvoid func(T t1, U t2){\n    decltype(t1 * t2) t;\n    // code\n}\n")),Object(r.b)("p",null,"\u6a21\u677f\u51fd\u6570\u4f9d\u8d56\u4e8e\u6a21\u677f\u53c2\u6570\u7684\u8fd4\u56de\u503c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"template <typename T1,typename T2>\nauto Multiply(T1 x, T2 y) -> decltype(T1 * T2) {\n    return x * y;\n}\n")))}u.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=u(n),d=c,O=i["".concat(l,".").concat(d)]||i[d]||s[d]||r;return n?a.a.createElement(O,o(o({ref:t},p),{},{components:n})):a.a.createElement(O,o({ref:t},p))}));function O(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);