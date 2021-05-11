(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{177:function(e,l,t){"use strict";t.d(l,"a",(function(){return b})),t.d(l,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){i(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var l=a.a.useContext(o),t=l;return e&&(t="function"==typeof e?e(l):c(c({},l),e)),t},b=function(e){var l=u(e.components);return a.a.createElement(o.Provider,{value:l},e.children)},s={inlineCode:"code",wrapper:function(e){var l=e.children;return a.a.createElement(a.a.Fragment,{},l)}},d=a.a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,m=b["".concat(r,".").concat(d)]||b[d]||s[d]||i;return t?a.a.createElement(m,c(c({ref:l},o),{},{components:t})):a.a.createElement(m,c({ref:l},o))}));function m(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var p in l)hasOwnProperty.call(l,p)&&(c[p]=l[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<i;o++)r[o]=t[o];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96:function(e,l,t){"use strict";t.r(l),t.d(l,"frontMatter",(function(){return r})),t.d(l,"metadata",(function(){return c})),t.d(l,"toc",(function(){return p})),t.d(l,"default",(function(){return u}));var n=t(3),a=t(7),i=(t(0),t(177)),r={id:"pcl-visualizer",title:"",sidebar_label:"PCLVisualizer"},c={unversionedId:"point-cloud/PCL/pcl-visualizer",id:"point-cloud/PCL/pcl-visualizer",isDocsHomePage:!1,title:"pcl-visualizer",description:"PCLVisualizer \u793a\u4f8b",source:"@site/docs/point-cloud/PCL/pcl-visualizer.md",slug:"/point-cloud/PCL/pcl-visualizer",permalink:"/docs/docs/point-cloud/PCL/pcl-visualizer",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/point-cloud/PCL/pcl-visualizer.md",version:"current",sidebar_label:"PCLVisualizer",sidebar:"Point Cloud",previous:{title:"\u4ece\u6e90\u7801\u7f16\u8bd1 PCL\u5e93",permalink:"/docs/docs/point-cloud/PCL/pcl-install"},next:{title:"\u4ece\u6e90\u7801\u7f16\u8bd1 Open3D",permalink:"/docs/docs/point-cloud/Open3D/open3d-install"}},p=[{value:"PCLVisualizer \u793a\u4f8b",id:"pclvisualizer-\u793a\u4f8b",children:[{value:"Visualising a single cloud",id:"visualising-a-single-cloud",children:[]},{value:"RGB point clouds",id:"rgb-point-clouds",children:[]},{value:"Custom colours",id:"custom-colours",children:[]},{value:"Normals and other information",id:"normals-and-other-information",children:[]},{value:"Drawing Shapes",id:"drawing-shapes",children:[]},{value:"Multiple viewports",id:"multiple-viewports",children:[]}]}],o={toc:p};function u(e){var l=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,t,{components:l,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"pclvisualizer-\u793a\u4f8b"},"PCLVisualizer \u793a\u4f8b"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PCLVisualizer")," \u662f ",Object(i.b)("inlineCode",{parentName:"p"},"PCL")," \u7684\u53ef\u89c6\u5316\u7c7b\uff0c\u63d0\u4f9b\u4e86\u663e\u793a\u6cd5\u7ebf\u3001\u7ed8\u5236\u5f62\u72b6\u548c\u591a\u4e2a\u89c6\u53e3\u7b49\u529f\u80fd"),Object(i.b)("p",null,"\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e9b ",Object(i.b)("inlineCode",{parentName:"p"},"PCLVisualizer")," \u7c7b\u7684\u4f7f\u7528"),Object(i.b)("p",null,"\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u5728",Object(i.b)("a",{parentName:"p",href:"https://pcl-tutorials.readthedocs.io/en/latest/pcl_visualizer.html#"},Object(i.b)("strong",{parentName:"a"},"\u5b98\u65b9\u6587\u6863")),"\u67e5\u770b"),Object(i.b)("h3",{id:"visualising-a-single-cloud"},"Visualising a single cloud"),Object(i.b)("p",null,"\u5728\u793a\u4f8b\u4e2d\u7684\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr simpleVis ()")," \u5b9a\u4e49\u4e86\u53ef\u89c6\u5316\u5355\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"PointXYZ Cloud")," \u7684\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="simpleVis"',title:'"simpleVis"'},'pcl::visualization::PCLVisualizer::Ptr simpleVis (pcl::PointCloud<pcl::PointXYZ>::ConstPtr cloud)\n{\n    // --------------------------------------------\n    // -----Open 3D viewer and add point cloud-----\n    // --------------------------------------------\n    pcl::visualization::PCLVisualizer::Ptr viewer (new pcl::visualization::PCLVisualizer ("3D Viewer"));\n    viewer->setBackgroundColor (0, 0, 0);\n    viewer->addPointCloud<pcl::PointXYZ> (cloud, "sample cloud");\n    viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 1, "sample cloud");\n    viewer->addCoordinateSystem (1.0);\n    viewer->initCameraParameters ();\n    return (viewer);\n}\n')),Object(i.b)("h4",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'pcl::visualization::PCLVisualizer::Ptr viewer (new pcl::visualization::PCLVisualizer ("3D Viewer"));\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa\u5bf9\u8c61\u67e5\u770b\u5668 ",Object(i.b)("inlineCode",{parentName:"li"},"PCLVisualizer")," \uff0c\u5e76\u5b58\u5165\u667a\u80fd\u6307\u9488")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"viewer->setBackgroundColor (0, 0, 0);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u67e5\u770b\u5668\u7684\u80cc\u666f\u4e3a\u9ed1\u8272")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloud<pcl::PointXYZ> (cloud, "sample cloud");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5c06\u70b9\u4e91\u6dfb\u52a0\u5230\u67e5\u770b\u5668\uff0c\u5e76\u4e3a\u70b9\u4e91\u63d0\u4f9b\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"ID")," \u5b57\u7b26\u4e32\uff0c\u8be5 ",Object(i.b)("inlineCode",{parentName:"li"},"ID")," \u53ef\u7528\u4e8e\u5176\u4ed6\u65b9\u6cd5\u8bc6\u522b\u4e91",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u591a\u6b21\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"addPointCloud()")," \u6dfb\u52a0\u591a\u4e2a\u70b9\u4e91\uff0c\u5982\u679c\u8981\u66f4\u65b0\u5df2\u7ecf\u663e\u793a\u7684\u70b9\u4e91\uff0c\u5219\u9700\u8981\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"updatePointCloud()")),Object(i.b)("li",{parentName:"ul"},"PCL 1.1 \u7248\u672c\u4e4b\u524d\u9700\u8981\u5148\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"removePointCloud()")," \u5e76\u63d0\u4f9b\u8981\u66f4\u65b0\u7684\u70b9\u4e91 ",Object(i.b)("inlineCode",{parentName:"li"},"ID"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 1, "sample cloud");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u66f4\u6539\u6e32\u67d3\u5c5e\u6027\uff0c\u6b64\u65b9\u6cd5\u53ef\u4ee5\u63a7\u5236\u67e5\u770b\u5668\u4e2d\u6e32\u67d3\u4efb\u4f55\u70b9\u4e91\u7684\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd9\u91cc ",Object(i.b)("inlineCode",{parentName:"li"},"PCL_VISUALIZER_POINT_SIZE")," \u8868\u793a\u8bbe\u7f6e\u6e32\u67d3\u70b9\u7684\u5927\u5c0f\uff0c\u5177\u4f53\u5c5e\u6027\u53ef\u4ee5\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"pcl::visualization::RenderingProperties")," \u8fd9\u4e2a\u679a\u4e3e\u4e2d\u67e5\u770b")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"viewer->addCoordinateSystem (1.0);    \n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5750\u6807\u7cfb\uff0c ",Object(i.b)("inlineCode",{parentName:"li"},"X(R) Y(G) Z(B)")," \uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"scale")," \u53c2\u6570\u63a7\u5236\u5750\u6807\u8f74\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"1.0"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"viewer->initCameraParameters ();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e00\u4e9b\u6bd4\u8f83\u65b9\u4fbf\u7684\u76f8\u673a\u53c2\u6570")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"while (!viewer->wasStopped ())\n{\n    viewer->spinOnce (100);\n    std::this_thread::sleep_for(100ms);\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u5faa\u73af\uff0c\u6bcf\u6b21\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"spinOnce")," \u90fd\u4f1a\u7ed9\u89c2\u770b\u8005\u65f6\u95f4\u6765\u5904\u7406\u4e8b\u4ef6\uff0c\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-simple.png",alt:null})),Object(i.b)("h3",{id:"rgb-point-clouds"},"RGB point clouds"),Object(i.b)("p",null,"\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr rgbVis()")," \u4e2d\u5b9a\u4e49\u4e86\u6b64\u65b9\u6cd5\u5982\u4f55\u5b9e\u73b0"),Object(i.b)("p",null,"\u5927\u90e8\u5206\u4ee3\u7801\u6ca1\u6709\u591a\u5927\u53d8\u5316"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"pcl::visualization::PointCloudColorHandlerRGBField<pcl::PointXYZRGB> rgb(cloud);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u66f4\u6539\u4e86\u70b9\u7684\u7c7b\u578b\uff0c\u4f7f\u7528\u4e86\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"RGB")," \u6570\u636e\u63d0\u4f9b\u7a7a\u95f4\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"PointXYZRGB"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloud<pcl::PointXYZRGB> (cloud, rgb, "sample cloud");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6dfb\u52a0\u70b9\u4e91\u65f6\uff0c\u6307\u5b9a\u4e86\u989c\u8272\u5904\u7406\u53c2\u6570")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-RBG.png",alt:null})),Object(i.b)("h3",{id:"custom-colours"},"Custom colours"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"rgbVis()")," \u4e2d\u4e3a\u70b9\u4e91\u63d0\u4f9b\u5355\u4e00\u989c\u8272\uff0c\u53ef\u4ee5\u4e3a\u7279\u5b9a\u7684\u70b9\u4e91\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u989c\u8272\uff0c\u4ece\u800c\u80fd\u533a\u5206\u5355\u4e2a\u70b9\u4e91"),Object(i.b)("p",null,"\u793a\u4f8b\u51fd\u6570\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr customColourVis()")),Object(i.b)("p",null,"\u5927\u90e8\u5206\u4ee3\u7801\u4e5f\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"pcl::visualization::PointCloudColorHandlerCustom<pcl::PointXYZ> single_color(cloud, 0, 255, 0);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u70b9\u4e91\u7c7b\u578b\u65f6\u6307\u5b9a\u4e86\u989c\u8272")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-custom.png",alt:null})),Object(i.b)("h3",{id:"normals-and-other-information"},"Normals and other information"),Object(i.b)("p",null,"\u51fd\u6570",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr normalsVis()")," \u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u663e\u793a\u70b9\u4e91\u7684\u6cd5\u7ebf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloudNormals<pcl::PointXYZRGB, pcl::Normal> (cloud, normals, 10, 0.05, "normals");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5176\u4ed6\u4ee3\u7801\u53ef\u53c2\u7167 ",Object(i.b)("inlineCode",{parentName:"p"},"rgbVis()")," \uff0c\u7136\u540e\u7ed8\u5236\u4e86\u6cd5\u7ebf"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5173\u4e8e\u7ed8\u5236\u6cd5\u7ebf\u5b9e\u73b0\u7684\u8bb2\u89e3 ",Object(i.b)("a",{parentName:"li",href:"https://pcl-tutorials.readthedocs.io/en/latest/normal_estimation.html#normal-estimation"},"Estimating Surface Normals in a PointCloud")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-normals.png",alt:null})),Object(i.b)("h3",{id:"drawing-shapes"},"Drawing Shapes"),Object(i.b)("p",null,"\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr shapesVis()")," \u5b9a\u4e49\u4e86\u5411\u67e5\u770b\u5668\u6dfb\u52a0\u5f62\u72b6\u7684\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->addLine<pcl::PointXYZRGB> ((*cloud)[0], (*cloud)[cloud->size() - 1], "line");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed8\u5236\u76f4\u7ebf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'viewer->addSphere ((*cloud)[0], 0.2, 0.5, 0.5, 0.0, "sphere");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed8\u5236\u5706")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'pcl::ModelCoefficients coeffs;\ncoeffs.values.push_back (0.0);\ncoeffs.values.push_back (0.0);\ncoeffs.values.push_back (1.0);\ncoeffs.values.push_back (0.0);\nviewer->addPlane (coeffs, "plane");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed8\u5236\u5e73\u9762")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'  coeffs.values.clear ();\n  coeffs.values.push_back (0.3);\n  coeffs.values.push_back (0.3);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (1.0);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (5.0);\n  viewer->addCone (coeffs, "cone");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7ed8\u5236\u5706\u9525")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-shapes.png",alt:null})),Object(i.b)("h3",{id:"multiple-viewports"},"Multiple viewports"),Object(i.b)("p",null,"\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr viewportsVis()")," \u6f14\u793a\u4e86\u5728\u5355\u72ec\u7684\u7a97\u53e3\u4e2d\u7ed8\u5236\u591a\u4e2a\u70b9\u4e91"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8fd0\u884c\u7ed3\u679c")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-Viewports.png",alt:null})))}u.isMDXComponent=!0}}]);