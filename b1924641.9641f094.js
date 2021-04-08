(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),l=n(7),c=(n(0),n(160)),a={id:"pcl-install",title:"\u4ece\u6e90\u7801\u7f16\u8bd1 PCL\u5e93",sidebar_label:"\u5b89\u88c5"},i={unversionedId:"point-cloud/PCL/pcl-install",id:"point-cloud/PCL/pcl-install",isDocsHomePage:!1,title:"\u4ece\u6e90\u7801\u7f16\u8bd1 PCL\u5e93",description:"About-PCL",source:"@site/docs/point-cloud/PCL/install-pcl.md",slug:"/point-cloud/PCL/pcl-install",permalink:"/docs/docs/point-cloud/PCL/pcl-install",version:"current",sidebar_label:"\u5b89\u88c5",sidebar:"\ud83d\udc7drobot",previous:{title:"ROS \u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528",permalink:"/docs/docs/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528"},next:{title:"\u4ece\u6e90\u7801\u7f16\u8bd1 Open3D",permalink:"/docs/docs/point-cloud/Open3D/open3d-install"}},o=[{value:"About-PCL",id:"about-pcl",children:[]},{value:"\u4ece\u6e90\u7801\u7f16\u8bd1",id:"\u4ece\u6e90\u7801\u7f16\u8bd1",children:[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"\u83b7\u53d6\u6e90\u7801",id:"\u83b7\u53d6\u6e90\u7801",children:[]},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"reference",id:"reference",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"about-pcl"},"About-PCL"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.pointclouds.org"},"\u5b98\u7f51")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/PointCloudLibrary"},"PCL-Gtihub"))),Object(c.b)("h2",{id:"\u4ece\u6e90\u7801\u7f16\u8bd1"},"\u4ece\u6e90\u7801\u7f16\u8bd1"),Object(c.b)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),Object(c.b)("p",null,"\u6839\u636e\u53c2\u8003\u6587\u6863\u7684 ",Object(c.b)("a",{parentName:"p",href:"https://pcl-tutorials.readthedocs.io/en/latest/compiling_pcl_posix.html#dependencies"},"Dependencies")," \u90e8\u5206\uff0c\u53ef\u4ee5\u627e\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"PCL")," \u5e93\u6240\u9700\u8981\u4f9d\u8d56\u7684\u5e93"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install libflann1.9 libflann-dev libboost-all-dev libeigen3-dev libvtk6.3-qt libvtk6.3 libvtk6-dev\n")),Object(c.b)("p",null,"\u6839\u636e\u5b9e\u9645\u7248\u672c\u4fe1\u606f\u518d\u505a\u51fa\u8c03\u6574"),Object(c.b)("h3",{id:"\u83b7\u53d6\u6e90\u7801"},"\u83b7\u53d6\u6e90\u7801"),Object(c.b)("p",null,"\u8fd9\u91cc\u6211\u9009\u62e9\u7f16\u8bd1 ",Object(c.b)("inlineCode",{parentName:"p"},"pcl-1.10.0")," \u7684\u7248\u672c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/PointCloudLibrary/pcl/releases/tag/pcl-1.10.0"},"\u4e0b\u8f7d\u94fe\u63a5"))),Object(c.b)("p",null,"\u89e3\u538b\u540e\u6253\u5f00\u7ec8\u7aef\u8fdb\u5165\u76ee\u5f55"),Object(c.b)("p",null,"::: info \ud83d\udca1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u65f6\u6700\u597d\u5173\u6389 ",Object(c.b)("inlineCode",{parentName:"li"},"conda")," \u7684\u865a\u62df\u73af\u5883\uff0c\u53ef\u80fd\u51fa\u73b0 ",Object(c.b)("inlineCode",{parentName:"li"},"xxxxxxx \u672a\u5b9a\u4e49\u7684\u5f15\u7528"),"\n:::")),Object(c.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"cd pcl-pcl-1.10.0 && mkdir build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release ..\nmake -j4\n")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl-build.png",alt:null})),Object(c.b)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"sudo make install\n")),Object(c.b)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(c.b)("p",null,"\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/92164338"},"Ubuntu 16.04 \u5b89\u88c5 PCL \u5e93\u5e76\u6d4b\u8bd5")," \u4e2d\u7684\u6d4b\u8bd5\u65b9\u6cd5"),Object(c.b)("p",null,"\u7f16\u8bd1 ",Object(c.b)("inlineCode",{parentName:"p"},"demo")," \u540e\u8fd0\u884c"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl-test.png",alt:null})),Object(c.b)("p",null,"\u53ef\u4ee5\u6839\u636e\u9f20\u6807\u6539\u53d8\u56fe\u5f62\u7684\u5927\u5c0f\uff0c\u65b9\u5411"),Object(c.b)("p",null,"\u7f16\u8bd1\u5b89\u88c5\u5b8c\u6210"),Object(c.b)("h2",{id:"reference"},"reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://pcl-tutorials.readthedocs.io/en/latest/compiling_pcl_posix.html#compiling-pcl-from-source-on-posix-compliant-systems"},"Compiling PCL from source on POSIX compliant systems"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/92164338"},"Ubuntu 16.04 \u5b89\u88c5 PCL \u5e93\u5e76\u6d4b\u8bd5")))))}b.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||s[d]||c;return n?l.a.createElement(m,i(i({ref:t},p),{},{components:n})):l.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);