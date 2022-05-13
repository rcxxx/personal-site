"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5885],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),m=n,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1210:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",sidebar_label:"D435i apriltag"},p=void 0,s={unversionedId:"computer/cv/realsense/intel-realsense-apriltag",id:"computer/cv/realsense/intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",description:"apriltag",source:"@site/docs/computer/cv/realsense/intel_realsense_apriltag.md",sourceDirName:"computer/cv/realsense",slug:"/computer/cv/realsense/intel-realsense-apriltag",permalink:"/personal-site/docs/computer/cv/realsense/intel-realsense-apriltag",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/realsense/intel_realsense_apriltag.md",tags:[],version:"current",frontMatter:{id:"intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",sidebar_label:"D435i apriltag"},sidebar:"\ud83d\udc40CV",previous:{title:"D435i",permalink:"/personal-site/docs/computer/cv/realsense/intel-realsense-start"},next:{title:"apriltag Pose Estimation",permalink:"/personal-site/docs/computer/cv/realsense/intel-realsense-intrinsics"}},c=[{value:"apriltag",id:"apriltag",children:[{value:"\u7f16\u8bd1\u5b89\u88c5",id:"\u7f16\u8bd1\u5b89\u88c5",children:[],level:3}],level:2},{value:"librealsense2-AprilTag-OpenCV",id:"librealsense2-apriltag-opencv",children:[],level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[],level:2}],u={toc:c};function g(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/realsense/realsense-apriltag.png",alt:null})),(0,i.kt)("h2",{id:"apriltag"},"apriltag"),(0,i.kt)("p",null,"\u5b98\u65b9\u7f51\u7ad9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://april.eecs.umich.edu/software/apriltag"},"AprilTag")))),(0,i.kt)("p",null,"\u9879\u76ee\u5730\u5740"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag"},"AprilRobotics/apriltag")))),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u5b89\u88c5"},"\u7f16\u8bd1\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AprilRobotics/apriltag.git\ncd apriltag\nmkdir build\ncd build/\ncmake -DCMAKE_INSTALL_PREFIX=/usr/local -DCMAKE_BUILD_TYPE=Release ..\nNUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\nsudo make install\n")),(0,i.kt)("h2",{id:"librealsense2-apriltag-opencv"},"librealsense2-AprilTag-OpenCV"),(0,i.kt)("p",null,"\u53c2\u8003\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide"},"AprilTag User Guide"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/blob/master/example/opencv_demo.cc"},"opencv_demo.cc")))),(0,i.kt)("p",null,"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"apriltag")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// aprilTag config\napriltag_detector_t *td = apriltag_detector_create();\napriltag_family_t   *tf = tag36h11_create();\napriltag_detector_add_family(td, tf);\ntd->nthreads = 4;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apriltag_family_t")," \u4e3a\u6807\u7b7e\u7684\u4e0d\u540c\u5206\u7c7b\u5408\u96c6\uff0c\u8fd9\u91cc\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"tag36h11"),"\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("strong",{parentName:"li"},"User Guide")," \u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide#choosing-a-tag-family"},"choosing-a-tag-family")))),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"img_header")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"cv::Mat gray_img;\ncv::cvtColor(color_img, gray_img, cv::COLOR_BGR2GRAY);\n// Make an image_u8_t header for the Mat data\nimage_u8_t img_header = { .width = gray_img.cols,\n    .height = gray_img.rows,\n    .stride = gray_img.cols,\n    .buf = gray_img.data\n};\n")),(0,i.kt)("p",null,"\u6267\u884c\u68c0\u6d4b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"zarray_t *detections = apriltag_detector_detect(td, &img_header);\n")),(0,i.kt)("p",null,"\u7ed8\u5236\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'for(int i = 0; i < zarray_size(detections); ++i){\n    apriltag_detection_t *det;\n    zarray_get(detections, i, &det);\n    for(size_t i = 0; i < 4; ++i){\n        cv::line(color_img, cv::Point(static_cast<int>(det->p[i][0]), static_cast<int>(det->p[i][1])),\n                cv::Point(static_cast<int>(det->p[(i+1)%4][0]), static_cast<int>(det->p[(i+1)%4][1])),\n                cv::Scalar(0xff, 0xff, 0), 2);\n    }\n\n    stringstream ss;\n    ss << det->id;\n    cv::String text = ss.str();\n    int fontface = cv::FONT_HERSHEY_SCRIPT_SIMPLEX;\n    double fontscale = 1.0;\n    int baseline;\n    cv::Size textsize = cv::getTextSize(text, fontface, fontscale, 2,\n                                    &baseline);\n    putText(color_img, text, cv::Point( static_cast<int>(det->c[0]-textsize.width/2),\n                                        static_cast<int>(det->c[1]+textsize.height/2)),\n                                        fontface, fontscale, cv::Scalar(0xff, 0x99, 0), 2);\n}\n\nimshow("color_img", color_img);\n')),(0,i.kt)("p",null,"\u6700\u7ec8\u6548\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/realsense/realsense-apriltag.png",alt:null})),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://april.eecs.umich.edu/software/apriltag"},"AprilTag"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag"},"AprilRobotics/apriltag"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide"},"AprilTag User Guide"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/blob/master/example/opencv_demo.cc"},"opencv_demo.cc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide#choosing-a-tag-family"},"choosing-a-tag-family")))))}g.isMDXComponent=!0}}]);