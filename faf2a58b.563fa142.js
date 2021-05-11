(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),c=r(7),o=(r(0),r(177)),i={id:"opencv-roi",title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",sidebar_label:"ROI\u64cd\u4f5c"},a={unversionedId:"opencv/opencv-roi",id:"opencv/opencv-roi",isDocsHomePage:!1,title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",description:"ROI\uff08region of interest\uff09",source:"@site/docs/opencv/ROI\u533a\u57df.md",slug:"/opencv/opencv-roi",permalink:"/docs/docs/opencv/opencv-roi",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/opencv/ROI\u533a\u57df.md",version:"current",sidebar_label:"ROI\u64cd\u4f5c",sidebar:"Open-source-library",previous:{title:"\u50cf\u7d20\u7684\u8fde\u901a,\u90bb\u57df\u7b49\u95ee\u9898",permalink:"/docs/docs/opencv/opencv-pixel-connect"},next:{title:"OpenCV \u4e2d\u7684\u970d\u592b\u53d8\u6362",permalink:"/docs/docs/opencv/opencv-hough-transform"}},p=[{value:"ROI\uff08region of interest\uff09",id:"roi\uff08region-of-interest\uff09",children:[]},{value:"ROI\u7684\u4f7f\u7528",id:"roi\u7684\u4f7f\u7528",children:[]},{value:"\u4f7f\u7528<code>mask</code>",id:"\u4f7f\u7528mask",children:[]}],l={toc:p};function s(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"roi\uff08region-of-interest\uff09"},"ROI\uff08region of interest\uff09"),Object(o.b)("p",null,"roi\u53ef\u4ee5\u5728\u56fe\u50cf\u4e2d\u9009\u5b9a\u4e00\u4e2a\u8303\u56f4\uff0c\u4ece\u800c\u53ea\u5bf9\u56fe\u50cf\u7684\u9009\u5b9a\u8303\u56f4\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u5f71\u54cd\u5230\u533a\u57df\u5916\u7684\u56fe\u50cf"),Object(o.b)("h2",{id:"roi\u7684\u4f7f\u7528"},"ROI\u7684\u4f7f\u7528"),Object(o.b)("p",null,"roi\u533a\u57df\u6709\u4e24\u79cd\u8bbe\u7f6e\u65b9\u6cd5"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u4f7f\u7528\u77e9\u5f62\u533a\u57df",Object(o.b)("inlineCode",{parentName:"li"},"Rect"),"\u6807\u8bb0")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"Mat src_img;\nRect roi_rect = Rect(x, y, w, h);\nMat roi_img = src_img(roi_rect);\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u6307\u5b9a\u611f\u5174\u8da3\u884c\u3001\u5217\u7684\u8303\u56f4",Object(o.b)("inlineCode",{parentName:"li"},"range"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"Mat src_img;\nMat roi_img = src_img(Range(x,x+w, y, y+h));\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u793a\u4f8b\n\u901a\u8fc7ROI\u533a\u57df\u64cd\u4f5c\u56fe\u50cf")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include <opencv2/opencv.hpp>\n\nusing namespace cv;\n\nint main()\n{\n    Mat src_img = Mat::zeros(Size(200, 200), CV_8UC3); // \u521b\u5efa\u80cc\u666f\n    imshow("src_img", src_img);\n    \n    Size _s = Size(src_img.cols*0.5, src_img.rows);\n    Rect center_rect = Rect(Point(0,0), _s);\n    Mat roi_img = src_img(center_rect); // \u8bbe\u7f6e roi \u533a\u57df\n    \n    Mat withe_img(Mat(_s, CV_8UC3, Scalar(255,255,255))); // \u521b\u5efa\u767d\u8272\u56fe\n    withe_img.copyTo(roi_img); // \u5c06\u767d\u8272\u56fe\u62f7\u8d1d\u5230 roi \u4e2d\n    \n    imshow("src_img_2", src_img);\n    waitKey(0);\n    \n    return 0;\n}\n')),Object(o.b)("p",null,"\u6548\u679c\u5982\u4e0b"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/rcxxx/my-img/main/img/screenshot/opencv-roi.png",alt:null})),Object(o.b)("p",null,"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"ROI"),"\u64cd\u4f5c\u53ea\u5bf9\u56fe\u50cf\u7684\u5de6\u8fb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u5f71\u54cd\u5230\u53f3\u8fb9\u7684\u90e8\u5206"),Object(o.b)("h2",{id:"\u4f7f\u7528mask"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"h2"},"mask")))}s.isMDXComponent=!0},177:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return O}));var t=r(0),c=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),s=function(e){var n=c.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,O=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?c.a.createElement(O,a(a({ref:n},l),{},{components:r})):c.a.createElement(O,a({ref:n},l))}));function O(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);