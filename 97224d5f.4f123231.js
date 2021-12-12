(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(199)),i=["components"],s={id:"ros-intrinsic_velodyne_pattern",title:" ",sidebar_label:"Multi Pass Segemntation"},c={unversionedId:"ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",id:"ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",isDocsHomePage:!1,title:" ",description:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",source:"@site/docs/ros/ros-point-cloud/segmentation/intrinsic_velodyne_pattern.md",slug:"/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",permalink:"/personal-site/docs/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-point-cloud/segmentation/intrinsic_velodyne_pattern.md",version:"current",sidebar_label:"Multi Pass Segemntation",sidebar:"\ud83d\udc7drobot",previous:{title:"ROS \u53d1\u5e03\u548c\u8ba2\u9605 pcl \u8bdd\u9898\u6d88\u606f",permalink:"/personal-site/docs/ros/ros-point-cloud/ros-pcl-topic"},next:{title:"Traditional Point Cloud Object Segmentation",permalink:"/personal-site/docs/ros/ros-point-cloud/segmentation/ros-point_cloud_object_segemntation_references"}},p=[{value:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",id:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",children:[{value:"<code>Intrinsic Velodyne Pattern</code>",id:"intrinsic-velodyne-pattern",children:[]}]},{value:"reference",id:"reference",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55"},"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55"),Object(o.b)("p",null,"\u6700\u8fd1\u5728\u770b\u4e00\u7bc7\u6587\u732e\u65f6\u6587\u4e2d\u63d0\u5230\u4e00\u79cd\u4f20\u611f\u5668\u7684\u56fa\u6709\u6a21\u5f0f\u6240\u5e26\u6765\u7684\u95ee\u9898"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"paper")," \ud83d\udcf0 :",Object(o.b)("a",{parentName:"strong",href:"https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles"},"Fast Multi-Pass 3D Point Segmentation Based on a Structured MeshGraph for Ground Vehicles")))),Object(o.b)("h3",{id:"intrinsic-velodyne-pattern"},Object(o.b)("inlineCode",{parentName:"h3"},"Intrinsic Velodyne Pattern")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"velodyne lidar sensor")),Object(o.b)("p",null,"\u6587\u4e2d\u6240\u4f7f\u7528\u7684\u4f20\u611f\u5668\u662f ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://velodynelidar.com/products/hdl-64e/"},Object(o.b)("inlineCode",{parentName:"a"},"velodyne HDL-64E")))," \uff0c\u5728\u5b98\u7f51\u4e0a\u6709\u7ed9\u51fa\u8be5\u4f20\u611f\u5668\u7684\u4e00\u4e9b\u53c2\u6570\uff08\u5982\u4e0b\u56fe\uff09\uff0c\u540e\u7eed\u5c06\u4f1a\u7528\u5230"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne-HDL-64E-parameters.png",alt:null})),Object(o.b)("p",null," \u6587\u4e2d\u63d0\u5230\uff0c\u7531\u4e8e\u4f20\u611f\u5668\u7684\u56fa\u6709\u6a21\u5f0f\uff0c\u4f20\u611f\u5668\u9700\u8981\u6709\u4e0d\u4e00\u6837\u7684\u4fef\u4ef0\u89d2\uff0c\u6700\u7ec8\u4f20\u611f\u5668\u83b7\u53d6\u5230\u7684\u6570\u636e\u4f1a\u51fa\u73b0\u4e0b\u9762\u8fd9\u6837\u7684\u60c5\u51b5"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/paper-figure-01.png",alt:null})),Object(o.b)("p",null,"\u8fd9\u6837\u7406\u89e3\u53ef\u80fd\u4e0d\u592a\u76f4\u89c2\uff0c\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Rviz")," \u91cc\u67e5\u770b\u4e86\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"Velodyne")," \u4f20\u611f\u5668\u83b7\u53d6\u5230\u7684\u70b9\u4e91\u6570\u636e\uff0c\u5927\u6982\u957f\u8fd9\u6837"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view.png",alt:null})),Object(o.b)("p",null,"\u89c2\u5bdf\u56fe\u4e2d\u7684\u70b9\u4e91\u6211\u4eec\u80fd\u591f\u53d1\u73b0\uff0c\u5728\u4f20\u611f\u5668 ",Object(o.b)("span",{parentName:"p",className:"math math-inline"},Object(o.b)("span",{parentName:"span",className:"katex"},Object(o.b)("span",{parentName:"span",className:"katex-mathml"},Object(o.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(o.b)("semantics",{parentName:"math"},Object(o.b)("mrow",{parentName:"semantics"},Object(o.b)("mn",{parentName:"mrow"},"0"),Object(o.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0")),Object(o.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0\\degree")))),Object(o.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(o.b)("span",{parentName:"span",className:"base"},Object(o.b)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),Object(o.b)("span",{parentName:"span",className:"mord"},"0"),Object(o.b)("span",{parentName:"span",className:"mord"},"\xb0")))))," \u7684\u4f4d\u7f6e\u9644\u8fd1\uff0c\u80fd\u591f\u53d1\u73b0\u70b9\u4e91\u6570\u636e\u51fa\u73b0\u4e86\u4e00\u4e2a\u952f\u9f7f\u72b6\u7684\u65ad\u5c42\uff0c\u6211\u5728\u4e0b\u9762\u7684\u56fe\u4e2d\u6807\u8bb0\u51fa\u6765\u8fd9\u90e8\u5206\u65ad\u5c42"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view_edit.png",alt:null})),Object(o.b)("p",null,"\u770b\u8d77\u6765\u5c31\u8ddf\u8bba\u6587\u4e2d\u56fe\u4e00\u6837\uff0c\u5230\u6b64\u624d\u76f4\u89c2\u7684\u7406\u89e3\u4e86\u8bba\u6587\u4e2d\u8fd9\u90e8\u5206\u5185\u5bb9\u7684\u610f\u601d"),Object(o.b)("h2",{id:"reference"},"reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/333670101"},"\u4e00\u79cd\u57fa\u4e8e\u6fc0\u5149\u96f7\u8fbe\u786c\u4ef6\u7ed3\u6784\u7684\u969c\u788d\u7269\u805a\u7c7b\u5206\u5272\u65b9\u6cd5")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles"},"Fast Multi-Pass 3D Point Segmentation Based on a Structured Mesh Graph for Ground Vehicles"))))}u.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);