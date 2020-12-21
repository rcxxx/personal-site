(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),s=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,O=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?c.a.createElement(O,a(a({ref:n},p),{},{components:t})):c.a.createElement(O,a({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),c=t(7),o=(t(0),t(100)),i={id:"opencv-roi",title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",sidebar_label:"ROI"},a={unversionedId:"opencv/opencv-roi",id:"opencv/opencv-roi",isDocsHomePage:!1,title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",description:"ROI",source:"@site/docs/opencv/ROI\u533a\u57df.md",slug:"/opencv/opencv-roi",permalink:"/docs/docs/opencv/opencv-roi",version:"current",sidebar_label:"ROI",sidebar:"someSidebar",previous:{title:"\u7b97\u6cd5 (2)",permalink:"/docs/docs/data-structures/data-structures-algorithm-2"},next:{title:"PyTorch\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/pytorch/pytorch-install"}},l=[{value:"ROI",id:"roi",children:[]},{value:"ROI\u7684\u4f7f\u7528",id:"roi\u7684\u4f7f\u7528",children:[]},{value:"\u4f7f\u7528<code>mask</code>",id:"\u4f7f\u7528mask",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"roi"},"ROI"),Object(o.b)("p",null,"roi\u53ef\u4ee5\u5728\u56fe\u50cf\u4e2d\u9009\u5b9a\u4e00\u4e2a\u8303\u56f4\uff0c\u4ece\u800c\u53ea\u5bf9\u56fe\u50cf\u7684\u9009\u5b9a\u8303\u56f4\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u5f71\u54cd\u5230\u533a\u57df\u5916\u7684\u56fe\u50cf"),Object(o.b)("h2",{id:"roi\u7684\u4f7f\u7528"},"ROI\u7684\u4f7f\u7528"),Object(o.b)("p",null,"roi\u533a\u57df\u6709\u4e24\u79cd\u8bbe\u7f6e\u65b9\u6cd5"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u4f7f\u7528\u77e9\u5f62\u533a\u57df",Object(o.b)("inlineCode",{parentName:"li"},"Rect"),"\u6807\u8bb0")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"Mat src_img;\nRect roi_rect = Rect(x, y, w, h);\nMat roi_img = src_img(roi_rect);\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u6307\u5b9a\u611f\u5174\u8da3\u884c\u3001\u5217\u7684\u8303\u56f4",Object(o.b)("inlineCode",{parentName:"li"},"range"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"Mat src_img;\nMat roi_img = src_img(Range(x,x+w, y, y+h));\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u793a\u4f8b\n\u901a\u8fc7ROI\u533a\u57df\u64cd\u4f5c\u56fe\u50cf")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'#include <opencv2/opencv.hpp>\n\nusing namespace cv;\n\nint main()\n{\n    Mat src_img = Mat::zeros(Size(200, 200), CV_8UC3); // \u521b\u5efa\u80cc\u666f\n    imshow("src_img", src_img);\n    \n    Size _s = Size(src_img.cols*0.5, src_img.rows);\n    Rect center_rect = Rect(Point(0,0), _s);\n    Mat roi_img = src_img(center_rect); // \u8bbe\u7f6e roi \u533a\u57df\n    \n    Mat withe_img(Mat(_s, CV_8UC3, Scalar(255,255,255))); // \u521b\u5efa\u767d\u8272\u56fe\n    withe_img.copyTo(roi_img); // \u5c06\u767d\u8272\u56fe\u62f7\u8d1d\u5230 roi \u4e2d\n    \n    imshow("src_img_2", src_img);\n    waitKey(0);\n    \n    return 0;\n}\n')),Object(o.b)("p",null,"\u6548\u679c\u5982\u4e0b"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/rcxxx/my-img/main/img/screenshot/opencv-roi.png",alt:null}))),Object(o.b)("p",null,"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"ROI"),"\u64cd\u4f5c\u53ea\u5bf9\u56fe\u50cf\u7684\u5de6\u8fb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u5f71\u54cd\u5230\u53f3\u8fb9\u7684\u90e8\u5206"),Object(o.b)("h2",{id:"\u4f7f\u7528mask"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"h2"},"mask")))}s.isMDXComponent=!0}}]);