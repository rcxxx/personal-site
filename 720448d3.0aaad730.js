(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},O=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=o(n),j=r,u=O["".concat(c,".").concat(j)]||O[j]||d[j]||b;return n?a.a.createElement(u,p(p({ref:t},i),{},{components:n})):a.a.createElement(u,p({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=j;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),b=(n(0),n(134)),c={id:"cc-11-auto-ptr",title:"C++\u7684\u667a\u80fd\u6307\u9488",sidebar_label:"\u667a\u80fd\u6307\u9488"},p={unversionedId:"cc/cc-11-auto-ptr",id:"cc/cc-11-auto-ptr",isDocsHomePage:!1,title:"C++\u7684\u667a\u80fd\u6307\u9488",description:"\u667a\u80fd\u6307\u9488\u4e3b\u8981\u7528\u4e8e\u7ba1\u7406\u5728\u5806\u4e0a\u5206\u914d\u7684\u5185\u5b58\uff0c\u5b83\u5c06\u666e\u901a\u7684\u6307\u9488\u5c01\u88c5\u4e3a\u4e00\u4e2a\u6808\u5bf9\u8c61\u3002\u5f53\u6808\u5bf9\u8c61\u7684\u751f\u5b58\u5468\u671f\u7ed3\u675f\u540e\uff0c\u4f1a\u5728\u6790\u6784\u51fd\u6570\u4e2d\u91ca\u653e\u6389\u7533\u8bf7\u7684\u5185\u5b58\uff0c\u4ece\u800c\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f",source:"@site/docs/cc/\u667a\u80fd\u6307\u9488.md",slug:"/cc/cc-11-auto-ptr",permalink:"/docs/docs/cc/cc-11-auto-ptr",version:"current",sidebar_label:"\u667a\u80fd\u6307\u9488",sidebar:"\ud83d\udcbb",previous:{title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",permalink:"/docs/docs/cc/cc-11-new-for"},next:{title:" ",permalink:"/docs/docs/cc/cc-11-lambda"}},l=[{value:"\u4e3a\u4ec0\u4e48\u8981\u7528\u667a\u80fd\u6307\u9488",id:"\u4e3a\u4ec0\u4e48\u8981\u7528\u667a\u80fd\u6307\u9488",children:[]},{value:"<code>auro_ptr</code>",id:"auro_ptr",children:[]},{value:"<code>unique_ptr</code>",id:"unique_ptr",children:[]},{value:"<code>shared_ptr</code>",id:"shared_ptr",children:[]},{value:"<code>weak_ptr</code>",id:"weak_ptr",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}],i={toc:l};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u667a\u80fd\u6307\u9488\u4e3b\u8981\u7528\u4e8e\u7ba1\u7406\u5728\u5806\u4e0a\u5206\u914d\u7684\u5185\u5b58\uff0c\u5b83\u5c06\u666e\u901a\u7684\u6307\u9488\u5c01\u88c5\u4e3a\u4e00\u4e2a\u6808\u5bf9\u8c61\u3002\u5f53\u6808\u5bf9\u8c61\u7684\u751f\u5b58\u5468\u671f\u7ed3\u675f\u540e\uff0c\u4f1a\u5728\u6790\u6784\u51fd\u6570\u4e2d\u91ca\u653e\u6389\u7533\u8bf7\u7684\u5185\u5b58\uff0c\u4ece\u800c\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f"),Object(b.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u7528\u667a\u80fd\u6307\u9488"},"\u4e3a\u4ec0\u4e48\u8981\u7528\u667a\u80fd\u6307\u9488"),Object(b.b)("p",null,"\u5982\u679c\u7533\u8bf7\u7684\u7a7a\u95f4\u5728\u51fd\u6570\u7ed3\u675f\u65f6\u5fd8\u8bb0\u91ca\u653e\uff0c\u5219\u4f1a\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002\u4f7f\u7528\u667a\u80fd\u6307\u9488\u53ef\u4ee5\u5f88\u5927\u7a0b\u5ea6\u4e0a\u7684\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u667a\u80fd\u6307\u9488\u662f\u4e00\u4e2a\u7c7b\uff0c\u5f53\u8d85\u51fa\u4e86\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\u7684\u4f5c\u7528\u57df\u65f6\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528\u5bf9\u8c61\u7684\u6790\u6784\u51fd\u6570\uff0c\u6790\u6784\u51fd\u6570\u4f1a\u81ea\u52a8\u91ca\u653e\u8d44\u6e90\u3002\u6240\u4ee5\u667a\u80fd\u6307\u9488\u7684\u4f5c\u7528\u539f\u7406\u5c31\u662f\u5728\u51fd\u6570\u7ed3\u675f\u65f6\u81ea\u52a8\u91ca\u653e\u5185\u5b58\u7a7a\u95f4\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u91ca\u653e\u5185\u5b58\u7a7a\u95f4"),Object(b.b)("h3",{id:"auro_ptr"},Object(b.b)("inlineCode",{parentName:"h3"},"auro_ptr")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"auro_ptr")," \u662f",Object(b.b)("strong",{parentName:"p"},"C++98"),"\u4e2d\u7684\u667a\u80fd\u6307\u9488\u65b9\u6848\uff0c\u91c7\u7528\u6240\u6709\u6743\u6a21\u5f0f\uff0c\u4f46\u5728",Object(b.b)("strong",{parentName:"p"},"C++11"),"\u4e2d\u88ab\u5f03\u7528"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'auto_ptr<string> p1 (new string ("hello world")); \nauto_ptr<string> p2; \np2 = p1;\n')),Object(b.b)("p",null,"p2\u5265\u593a\u4e86p1\u7684\u6240\u6709\u6743\uff0c\u7a0b\u5e8f\u8bbf\u95eep2\u65f6\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f46\u662f\u8bbf\u95eep1\u65f6\u7a0b\u5e8f\u4f1a\u62a5\u9519\uff0cauto_ptr\u4ecd\u5b58\u5728\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\u3002"),Object(b.b)("h3",{id:"unique_ptr"},Object(b.b)("inlineCode",{parentName:"h3"},"unique_ptr")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\uff08\u66ff\u6362auto_ptr\uff09unique_ptr")," \u7528\u4e8e\u4e0d\u80fd\u88ab\u591a\u4e2a\u5b9e\u4f8b\u5171\u4eab\uff08\u72ec\u5360\uff09\u7684\u5185\u5b58\u7ba1\u7406\u3002\u5c31\u662f\u8bf4\u4ec5\u6709\u4e00\u4e2a\u5b9e\u4f8b\u62e5\u6709\u5185\u5b58\u6240\u6709\u6743\uff0c\u4fdd\u8bc1\u540c\u4e00\u65f6\u95f4\u5185\u53ea\u6709\u4e00\u4e2a\u667a\u80fd\u6307\u9488\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u4e8e\u907f\u514d\u5185\u5b58\u6cc4\u9732\u975e\u5e38\u6709\u6548"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'unique_ptr<string> p1 (new string ("hello world")); \nunique_ptr<string> p2; \np2 = p1; // \u7f16\u8bd1\u65f6\u5c06\u4f1a\u62a5\u9519\n')),Object(b.b)("p",null,"\u5f53\u628a\u4e00\u4e2a",Object(b.b)("strong",{parentName:"p"},"unique_ptr"),"\u8d4b\u503c\u7ed9\u53e6\u4e00\u4e2a\u65f6\uff0c\u5982\u679c",Object(b.b)("strong",{parentName:"p"},"unique_ptr"),"\u662f\u4e00\u4e2a\u4e34\u65f6\u53f3\u503c\uff0c\u5c06\u4f1a\u88ab\u5141\u8bb8\u64cd\u4f5c"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'unique_ptr<string> p;\np = unique_ptr<string>(new string("hello world")); // \u7f16\u8bd1\u901a\u8fc7\n')),Object(b.b)("p",null,"\u8fd9\u91cc\u8c03\u7528",Object(b.b)("strong",{parentName:"p"},"unique_ptr"),"\u7684\u6784\u9020\u51fd\u6570\uff0c\u5f53\u5c06\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u4e34\u65f6\u53d8\u91cf\u7684\u6240\u6709\u6743\u8f6c\u8ba9\u7ed9",Object(b.b)("inlineCode",{parentName:"p"},"p"),"\u4e4b\u540e\u5c31\u4f1a\u9500\u6bc1"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"unique_ptr"),"\u76f8\u6bd4\u8d77",Object(b.b)("strong",{parentName:"li"},"auro_ptr"),"\u66f4\u52a0\u7684\u5b89\u5168")),Object(b.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(b.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(b.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u6807\u51c6\u5e93",Object(b.b)("inlineCode",{parentName:"p"},"STL"),"\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u6cd5",Object(b.b)("inlineCode",{parentName:"p"},"std::move()"),"\u53ef\u4ee5\u5c06\u4e00\u4e2aunique_ptr\u8d4b\u503c\u7ed9\u53e6\u4e00\u4e2a\uff0c\u4e5f\u5c31\u662f\u8f6c\u79fb\u6240\u6709\u6743\uff0c\u4f7f\u7528\u8fd9\u4e2a\u8bed\u6cd5\u65f6\u4f60\u5e94\u8be5\u660e\u767d\u662f\u5728\u5e72\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u5728\u80e1\u4e71\u4f7f\u7528\u6307\u9488"))),Object(b.b)("h3",{id:"shared_ptr"},Object(b.b)("inlineCode",{parentName:"h3"},"shared_ptr")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shared_ptr")," \u5b9e\u73b0\u5171\u4eab\u5f0f\u6982\u5ff5\u3002\u591a\u4e2a\u667a\u80fd\u6307\u9488\u53ef\u4ee5\u6307\u5411\u76f8\u540c\u7684\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u548c\u5176\u76f8\u5173\u7684\u8d44\u6e90\u4f1a\u5728\u6700\u540e\u4e00\u4e2a\u5f15\u7528\u88ab\u91ca\u653e\u7684\u65f6\u5019\u624d\u4f1a\u91ca\u653e\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shared_ptr")," \u4f7f\u7528\u8ba1\u6570\u673a\u5236\u6765\u5b9e\u73b0\u6307\u9488\u7684\u5171\u4eab\uff0c\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"use_count()"),"\u65b9\u6cd5\u6765\u67e5\u770b\u6307\u9488\u4e2a\u6570\u3002"),Object(b.b)("p",null,"\u9664\u4e86\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"new")," \u6784\u9020\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\uff0c",Object(b.b)("strong",{parentName:"p"},"auto_ptr\u3001unique_ptr\u3001weak_ptr")," \u6765\u6784\u9020\uff0c\u5f53\u8c03\u7528",Object(b.b)("inlineCode",{parentName:"p"},"release()"),"\u65b9\u6cd5\u65f6\uff0c\u5f53\u524d\u6307\u9488\u4f1a\u91ca\u653e\u8d44\u6e90\u6240\u6709\u6743\uff0c\u8ba1\u6570\u503c\u51cf\u4e00\uff0c\u5f53\u8ba1\u6570\u503c\u4e3a\u96f6\u65f6\uff0c\u5219\u91ca\u653e\u8d44\u6e90\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shared_ptr")," \u4e2d\u7684\u4e00\u4e9b\u65b9\u6cd5"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u65b9\u6cd5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"use_count()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fd4\u56de\u5f15\u7528\u8ba1\u6570\u7684\u4e2a\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"unique()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fd4\u56de\u662f\u5426\u72ec\u5360\u6240\u6709\u6743\uff0c\u5373\u8ba1\u6570\u4e3a1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"swap()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ea4\u6362\u6240\u62e5\u6709\u7684\u5bf9\u8c61")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"get()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fd4\u56de\u5185\u90e8\u5bf9\u8c61\uff08\u6307\u9488\uff09")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"reset()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u653e\u5f03\u5185\u90e8\u5bf9\u8c61\u7684\u6240\u6709\u6743\u6216\u8005\u62e5\u6709\u5bf9\u8c61\u7684\u53d8\u66f4\uff0c\u4f1a\u5f15\u8d77\u539f\u6709\u5bf9\u8c61\u7684\u5f15\u7528\u6280\u672f\u51cf\u5c11")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shared_ptr"),"\u76f8\u6bd4\u4e8e",Object(b.b)("strong",{parentName:"p"},"auto_ptr"),"\u5df2\u7ecf\u89e3\u51b3\u4e86\u5f88\u591a\u7684\u95ee\u9898\uff0c\u4f46\u662f\u5f53\u4e24\u4e2a",Object(b.b)("strong",{parentName:"p"},"shared_ptr"),"\u4e92\u76f8\u6307\u5411\u5bf9\u65b9\uff08\u5faa\u73af\u5f15\u7528\uff09\uff0c\u6307\u9488\u8ba1\u6570\u4e2a\u6570\u4e0d\u4f1a\u964d\u4e3a\u96f6\uff0c\u8d44\u6e90\u5c06\u4e00\u76f4\u4e0d\u4f1a\u88ab\u91ca\u653e\uff0c\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53c8\u5f15\u5165\u4e86 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"weak_ptr"))),Object(b.b)("h3",{id:"weak_ptr"},Object(b.b)("inlineCode",{parentName:"h3"},"weak_ptr")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"weak_ptr"),"\u662f\u6307\u5411\u4e00\u4e2a",Object(b.b)("strong",{parentName:"p"},"shared_ptr"),"\u7ba1\u7406\u7684\u5bf9\u8c61"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"weak_ptr"),"\u6700\u521d\u8bbe\u8ba1\u7684\u76ee\u7684\u662f\u7528\u6765\u8f85\u52a9",Object(b.b)("strong",{parentName:"p"},"shared_ptr"),"\u5de5\u4f5c\uff0c\u5c5e\u4e8e\u5bf9\u5bf9\u8c61\u7684\u5f31\u5f15\u7528\uff0c\u6784\u9020\u65f6\u4e0d\u4f1a\u589e\u52a0\u5f15\u7528\u8ba1\u6570"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"weak_ptr"),"\u548c",Object(b.b)("strong",{parentName:"p"},"shared_ptr"),"\u4e4b\u95f4\u53ef\u4ee5\u4e92\u76f8\u8f6c\u5316"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"shared_ptr\u53ef\u4ee5\u76f4\u63a5\u8d4b\u503c\u7ed9\u5b83"),Object(b.b)("li",{parentName:"ul"},"weak_ptr\u53ef\u4ee5\u8c03\u7528lock\u51fd\u6570\u6765\u83b7\u5f97shared_ptr")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u65b9\u6cd5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"expired ()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u68c0\u6d4b\u6240\u7ba1\u7406\u7684\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u91ca\u653e\uff0c\u5df2\u7ecf\u91ca\u653e\u8fd4\u56de",Object(b.b)("inlineCode",{parentName:"td"},"true"),"\u5426\u5219\u8fd4\u56de",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"lock()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u83b7\u53d6\u6240\u7ba1\u7406\u7684\u5bf9\u8c61\u7684",Object(b.b)("inlineCode",{parentName:"td"},"shared_ptr"),"\uff0c\u5982\u679c",Object(b.b)("inlineCode",{parentName:"td"},"expired()"),"\u4e3a",Object(b.b)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684",Object(b.b)("inlineCode",{parentName:"td"},"shared_ptr"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"use_count()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fd4\u56de",Object(b.b)("inlineCode",{parentName:"td"},"shared_ptr"),"\u5171\u4eab\u7684\u5bf9\u8c61\u7684\u5f15\u7528\u8ba1\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"reset()")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u653e\u5f03\u5185\u90e8\u5bf9\u8c61\u7684\u6240\u6709\u6743\u6216\u8005\u62e5\u6709\u5bf9\u8c61\u7684\u53d8\u66f4\uff0c\u4f1a\u5f15\u8d77\u539f\u6709\u5bf9\u8c61\u7684\u5f15\u7528\u6280\u672f\u51cf\u5c11")))),Object(b.b)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.cnblogs.com/WindSun/p/11444429.html"}),"\u8be6\u89e3C++11\u667a\u80fd\u6307\u9488")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/54078587?from_voters_page=true"}),"C++\u667a\u80fd\u6307\u9488\u2014\u2014\u77e5\u4e4e"))))}o.isMDXComponent=!0}}]);