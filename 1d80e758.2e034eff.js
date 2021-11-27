(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return j}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),m=o,j=b["".concat(s,".").concat(m)]||b[m]||u[m]||r;return t?a.a.createElement(j,i(i({ref:n},p),{},{components:t})):a.a.createElement(j,i({ref:n},p))}));function j(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var o=t(3),a=t(7),r=(t(0),t(189)),s=["components"],i={id:"jetson-nano-stats",title:"Jetson Nano stats",sidebar_label:"Jetson stats"},c={unversionedId:"nvidia/jeston-nano/jetson-nano-stats",id:"nvidia/jeston-nano/jetson-nano-stats",isDocsHomePage:!1,title:"Jetson Nano stats",description:"\u6211\u5728\u4f7f\u7528 Jetson Nano \u7684\u65f6\u5019\uff0c\u60f3\u50cf\u5b89\u88c5\u4e86 GPU \u7684\u8bbe\u5907\u4e00\u6837\u67e5\u770b\u76f8\u5173\u4fe1\u606f\u65f6",source:"@site/docs/nvidia/jeston-nano/jetson-nano-stats.md",slug:"/nvidia/jeston-nano/jetson-nano-stats",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-stats",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/nvidia/jeston-nano/jetson-nano-stats.md",version:"current",sidebar_label:"Jetson stats",sidebar:"Nvidia",previous:{title:"Nvidia Jetson Nano",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-start"},next:{title:"Jetson Nano Archiconda",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-archiconda"}},p=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,s);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6211\u5728\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"Jetson Nano")," \u7684\u65f6\u5019\uff0c\u60f3\u50cf\u5b89\u88c5\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"GPU")," \u7684\u8bbe\u5907\u4e00\u6837\u67e5\u770b\u76f8\u5173\u4fe1\u606f\u65f6"),Object(r.b)("p",null,"\u6211\u5728\u7ec8\u7aef\u8f93\u5165"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"nvidia-smi\n")),Object(r.b)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/nvidia-smi-not-found.png",alt:null})),Object(r.b)("p",null,"\u8fd9\u8ddf\u6709GPU\u7684PC\u4e0a\u9a71\u52a8\u7248\u672c\u4e0d\u5bf9\u65f6\u7684\u60c5\u51b5\u4e00\u6837\uff0c\u6211\u6709\u70b9\u7eb3\u95f7\uff0c\u8fd9\u955c\u50cf\u4e0d\u662f\u5b98\u65b9\u4e0b\u8f7d\u7684\u5417\uff0c\u600e\u4e48\u9a71\u52a8\u7248\u672c\u8fd8\u4f1a\u4e0d\u5bf9\uff0c\u4e8e\u662f\u6211\u4e0a\u7f51\u641c\u4e86\u4e00\u4e0b\uff0c\u770b\u5230\u4e86\u8fd9\u4e2a\u94fe\u63a5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/command-nvidia-smi-on-jetson-nano-not-working/119702"},"Command nvidia-smi on Jetson Nano not working?")))),Object(r.b)("p",null,"\u91cc\u9762\u63d0\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia-smi")," \u9002\u7528\u4e8e\u684c\u9762\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"GPU"),"\uff0c\u5bf9\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"jetson")," \u7cfb\u5217\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"tegrastats")," \u6307\u4ee4\uff0c\u6211\u8bd5\u4e86\u4e00\u4e0b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"tegrastats\n")),Object(r.b)("p",null,"\u5927\u6982\u662f\u8fd9\u4e2a\u6548\u679c\uff0c\u611f\u89c9\u4e0d\u662f\u5f88\u76f4\u89c2"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-tegrastats.png",alt:null})),Object(r.b)("p",null,"\u4e8e\u662f\u6211\u53c8\u67e5\u4e86\u4e00\u4e0b\uff0c\u770b\u5230\u4e86\u8fd9\u4e2a\u94fe\u63a5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/monitor-gpu-usage/72250"},"Monitor GPU usage")))),Object(r.b)("p",null,"\u91cc\u9762\u63d0\u5230\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"jetson_stats")," \u8fd9\u4e2a\u5de5\u5177\uff0c\u4e8e\u662f\u6309\u7740 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://github.com/rbonghi/jetson_stats"},"rbonghi/jetson_stats"))," \u91cc\u7684\u8bf4\u6cd5\u5b89\u88c5\u4e86\u8fd9\u4e2a\u5de5\u5177"),Object(r.b)("p",null,"\u91cd\u542f\u8bbe\u5907\u4ee5\u540e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"jtop\n")),Object(r.b)("p",null,"\u5373\u53ef\u67e5\u770b ",Object(r.b)("inlineCode",{parentName:"p"},"GPU")," \u7684\u72b6\u6001\uff0c\u975e\u5e38\u7684\u76f4\u89c2\uff0c\u653e\u5f20\u5bf9\u6bd4\u56fe"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-jtop.png",alt:null})),Object(r.b)("p",null,"\u55ef\uff0c\u76f8\u5f53\u76f4\u89c2"),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://github.com/rbonghi/jetson_stats"},"rbonghi/jetson_stats"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/monitor-gpu-usage/72250"},"Monitor GPU usage"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/command-nvidia-smi-on-jetson-nano-not-working/119702"},"Command nvidia-smi on Jetson Nano not working?")))))}b.isMDXComponent=!0}}]);