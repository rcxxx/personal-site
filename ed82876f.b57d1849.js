(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),c=t(7),a=(t(0),t(177)),i={id:"distinguish-pointers-reference",title:"",sidebar_label:"\u6307\u9488\u548c\u5f15\u7528"},o={unversionedId:"cc/effective_cc/distinguish-pointers-reference",id:"cc/effective_cc/distinguish-pointers-reference",isDocsHomePage:!1,title:"distinguish-pointers-reference",description:"1.\u4ed4\u7ec6\u533a\u522b pointers \u548c references",source:"@site/docs/cc/effective_cc/\u4ed4\u7ec6\u533a\u522bpointers\u548creferences.md",slug:"/cc/effective_cc/distinguish-pointers-reference",permalink:"/docs/docs/cc/effective_cc/distinguish-pointers-reference",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/cc/effective_cc/\u4ed4\u7ec6\u533a\u522bpointers\u548creferences.md",version:"current",sidebar_label:"\u6307\u9488\u548c\u5f15\u7528",sidebar:"\ud83d\udcbb",previous:{title:"C++11 \u4f5c\u7528\u57df\u5185\u679a\u4e3e",permalink:"/docs/docs/cc/cc-11-scope-enum"},next:{title:"C++ \u6807\u51c6\u5e93\u62d3\u5c55boost\u5e93",permalink:"/docs/docs/cc/cc-boost-install"}},l=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u62d3\u5c55",id:"\u62d3\u5c55",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"1\u4ed4\u7ec6\u533a\u522b-pointers-\u548c-references"},"1.\u4ed4\u7ec6\u533a\u522b pointers \u548c references"),Object(a.b)("p",null,"pointers\uff08\u6307\u9488\uff09 \u548c references\uff08\u5f15\u7528\uff09 \u4f7f\u7528\u8d77\u6765\u4e0d\u4e00\u6837"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pointers \u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"*")," \u548c ",Object(a.b)("inlineCode",{parentName:"li"},"->")," "),Object(a.b)("li",{parentName:"ul"},"references \u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},".")," ")),Object(a.b)("p",null,"\u4f46\u662f\u5b83\u4eec\u4f3c\u4e4e\u5b9e\u73b0\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u65e0\u8bba\u662f pointers \u8fd8\u662f references \u90fd\u4f7f\u4f60\u95f4\u63a5\u53c2\u8003\u5176\u4ed6\u5bf9\u8c61\uff0c\u5e94\u8be5\u5982\u4f55\u533a\u5206\u548c\u4f7f\u7528\uff1f"),Object(a.b)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5fc5\u987b\u77e5\u9053\uff0c\u4e0d\u5b58\u5728 ",Object(a.b)("strong",{parentName:"p"},"\u7a7a\u5f15\u7528")," ",Object(a.b)("inlineCode",{parentName:"p"},"null reference")," \uff0c\u4e00\u4e2a reference \u5fc5\u987b\u603b\u662f\u4ee3\u8868\u67d0\u4e2a\u5bf9\u8c61"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u4e00\u4e2a\u53d8\u91cf\u4e00\u5b9a\u6307\u5411\uff08\u4ee3\u8868\uff09\u67d0\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u5c31\u8981\u7528 reference "),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u8fd9\u4e2a\u53d8\u91cf\u53ef\u80fd\u6307\u5411\uff08\u4ee3\u8868\uff09\u67d0\u4e2a\u5bf9\u8c61\uff0c\u4e5f\u6709\u53ef\u80fd\u4e0d\u6307\u5411\uff08\u4ee3\u8868\uff09\u4efb\u4f55\u5bf9\u8c61\uff0c\u5c31\u8981\u7528 pointers")),Object(a.b)("p",null,"\u7531\u4e8e reference \u4e00\u5b9a\u8981\u4ee3\u8868\u67d0\u4e2a\u5bf9\u8c61\uff0cC++ \u8981\u6c42 reference \u5fc5\u987b\u6709\u521d\u59cb\u503c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'string& rs;         // \u9519\u8bef\u7684\u521d\u59cb\u5316 reference \u5fc5\u987b\u6709\u521d\u59cb\u503c\nstring s("abc");\nstring& rs = s;     // \u6b63\u5e38 rs \u6307\u5411 s\n')),Object(a.b)("p",null,"pointers \u6ca1\u6709\u8fd9\u6837\u7684\u9650\u5236"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"string *ps;         // \u672a\u521d\u59cb\u5316\u7684\u6307\u9488\uff0c\u867d\u7136\u6709\u6548\u4f46\u98ce\u9669\u9ad8\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"\u7531\u4e8e reference \u4e0d\u80fd\u4e3a\u7a7a\uff0c\u610f\u5473\u7740\u4f7f\u7528 reference \u53ef\u80fd\u4f1a\u6bd4 pointers \u66f4\u5bcc\u6709\u6548\u7387\uff0c\u56e0\u4e3a\u4f7f\u7528 reference \u4e4b\u524d\u4e0d\u9700\u8981\u6d4b\u8bd5\u5b83\u662f\u5426\u6709\u6548"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"void printDouble(const double& rd)\n{\n    cout << rd;     // \u4e0d\u9700\u8981\u6d4b\u8bd5 rd \u662f\u5426\u6709\u6548\uff0c\u4e00\u5b9a\u4ee3\u8868\u67d0\u4e2adouble\n}\n")),Object(a.b)("p",null,"\u4f7f\u7528 pointers \u65f6\u901a\u5e38\u9700\u8981\u6d4b\u8bd5\u5b83\u662f\u5426\u4e3a null"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"void printDouble(const double *pd)\n{\n    if (pd) {       // \u68c0\u67e5\u662f\u5426\u4e3a null pointer\n        cout << *pd;\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"pointers \u4e0e reference \u4e4b\u95f4\u7684\u53e6\u4e00\u4e2a\u5dee\u5f02\u5c31\u662f\uff0cpointers \u53ef\u4ee5\u88ab\u91cd\u65b0\u8d4b\u503c\uff0c\u6307\u5411\u53e6\u4e00\u4e2a\u5bf9\u8c61\uff0creference \u5374\u603b\u662f\u6307\u5411\uff08\u4ee3\u8868\uff09\u5b83\u6700\u521d\u83b7\u5f97\u7684\u5bf9\u8c61"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'string s1("\u5f20\u4e09");\nstring s2("\u674e\u56db");\n\nstring& rs = s1;    // rs \u4ee3\u8868 s1\nstring *ps = &s1;   // ps \u6307\u5411 s1\nrs = s2;            // rs \u4ecd\u4ee3\u8868 s1 \uff0c\u4f46 s1 \u7684\u503c\u73b0\u5728\u53d8\u6210\u4e86 "\u674e\u56db"\n\nps = &s2;           // ps \u6307\u5411 s2 \uff0cs1 \u6ca1\u6709\u53d8\u5316\n')),Object(a.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"pointers")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'\u5f53\u9700\u8981\u8003\u8651 "\u4e0d\u6307\u5411\u4efb\u4f55\u5bf9\u8c61" \u7684\u53ef\u80fd\u6027\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528 pointers'),Object(a.b)("li",{parentName:"ul"},'\u5f53\u9700\u8981\u8003\u8651 "\u5728\u4e0d\u540c\u65f6\u95f4\u6307\u5411\u4e0d\u540c\u5bf9\u8c61" \u7684\u80fd\u529b\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528 pointers')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"reference")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'\u5f53\u786e\u5b9a "\u603b\u662f\u4f1a\u4ee3\u8868\u67d0\u4e2a\u5bf9\u8c61" \uff0c\u800c\u4e14 "\u4e00\u65e6\u4ee3\u8868\u4e86\u8be5\u5bf9\u8c61\u5c31\u4e0d\u518d\u6539\u53d8" \uff0c\u5e94\u8be5\u4f7f\u7528 reference')),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7ed3\u8bba")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6307\u5411\u67d0\u4e2a\u5bf9\u8c61\uff0c\u800c\u4e14\u7edd\u5bf9\u4e0d\u4f1a\u6539\u53d8\u6307\u5411\u5176\u4ed6\u5bf9\u8c61\uff0c\u6216\u8005\u662f\u5b9e\u73b0\u4e00\u4e2a\u64cd\u4f5c\u7b26\u800c\u5176\u8bed\u6cd5\u9700\u6c42\u65e0\u6cd5\u7531 pointers \u8fbe\u6210\uff0c\u5c31\u5e94\u8be5\u9009\u62e9 reference \u3002\u4efb\u4f55\u5176\u4ed6\u65f6\u5019\uff0c\u90fd\u5e94\u8be5\u4f7f\u7528 pointers"))),Object(a.b)("h2",{id:"\u62d3\u5c55"},"\u62d3\u5c55"),Object(a.b)("p",null,"\u6709\u4e00\u4e9b\u5176\u4ed6\u60c5\u51b5\u4e5f\u9700\u8981\u4f7f\u7528 reference \uff0c\u4f8b\u5982\u5b9e\u73b0\u67d0\u4e9b\u64cd\u4f5c\u7b26"),Object(a.b)("p",null,"\u6700\u5e38\u89c1\u7684\u4f8b\u5b50\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"operator[]"),' \uff0c\u8fd9\u4e2a\u64cd\u4f5c\u7b26\u8981\u6c42\u5fc5\u987b\u8fd4\u56de\u67d0\u79cd "\u80fd\u591f\u88ab\u5f53\u4f5c assignment \u8d4b\u503c\u5bf9\u8c61" \u7684\u4e1c\u897f'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"vector<int> v(10);      // \u4ea7\u751f\u4e00\u4e2a int vector \uff0c\u5927\u5c0f\u4e3a 10\n\nv[5] = 10;              // assignment \u7684\u8d4b\u503c\u5bf9\u8c61\u662f operator[] \u7684\u8fd4\u56de\u503c\n")),Object(a.b)("p",null,"\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"operator[]")," \u8fd4\u56de pointer \uff0c\u5219\u5e94\u8be5\u5199\u4e3a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"*v[5] = 10;\n")),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u300aMore Effective C++\u300b")))}s.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),s=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?c.a.createElement(f,o(o({ref:n},p),{},{components:t})):c.a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);