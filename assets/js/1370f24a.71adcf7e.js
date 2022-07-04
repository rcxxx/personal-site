"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8560],{3905:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return d}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(l),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return l?n.createElement(k,r(r({ref:t},s),{},{components:l})):n.createElement(k,r({ref:t},s))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=l[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7701:function(e,t,l){l.r(t),l.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=l(87462),a=l(63366),i=(l(67294),l(3905)),r=["components"],p={id:"pcl-visualizer",title:"",sidebar_label:"PCLVisualizer"},o=void 0,u={unversionedId:"computer/cv/point-cloud/PCL/pcl-visualizer",id:"computer/cv/point-cloud/PCL/pcl-visualizer",title:"",description:"PCLVisualizer \u793a\u4f8b",source:"@site/docs/computer/cv/point-cloud/PCL/pcl-visualizer.md",sourceDirName:"computer/cv/point-cloud/PCL",slug:"/computer/cv/point-cloud/PCL/pcl-visualizer",permalink:"/personal-site/docs/computer/cv/point-cloud/PCL/pcl-visualizer",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/point-cloud/PCL/pcl-visualizer.md",tags:[],version:"current",frontMatter:{id:"pcl-visualizer",title:"",sidebar_label:"PCLVisualizer"},sidebar:"\ud83d\udc40CV",previous:{title:"\u5b89\u88c5",permalink:"/personal-site/docs/computer/cv/point-cloud/PCL/pcl-install"},next:{title:"\u5b89\u88c5",permalink:"/personal-site/docs/computer/cv/point-cloud/Open3D/open3d-install"}},s={},c=[{value:"PCLVisualizer \u793a\u4f8b",id:"pclvisualizer-\u793a\u4f8b",level:2},{value:"Visualising a single cloud",id:"visualising-a-single-cloud",level:3},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:4},{value:"RGB point clouds",id:"rgb-point-clouds",level:3},{value:"Custom colours",id:"custom-colours",level:3},{value:"Normals and other information",id:"normals-and-other-information",level:3},{value:"Drawing Shapes",id:"drawing-shapes",level:3},{value:"Multiple viewports",id:"multiple-viewports",level:3}],m={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pclvisualizer-\u793a\u4f8b"},"PCLVisualizer \u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PCLVisualizer")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"PCL")," \u7684\u53ef\u89c6\u5316\u7c7b\uff0c\u63d0\u4f9b\u4e86\u663e\u793a\u6cd5\u7ebf\u3001\u7ed8\u5236\u5f62\u72b6\u548c\u591a\u4e2a\u89c6\u53e3\u7b49\u529f\u80fd"),(0,i.kt)("p",null,"\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"PCLVisualizer")," \u7c7b\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://pcl-tutorials.readthedocs.io/en/latest/pcl_visualizer.html#"},(0,i.kt)("strong",{parentName:"a"},"\u5b98\u65b9\u6587\u6863")),"\u67e5\u770b"),(0,i.kt)("h3",{id:"visualising-a-single-cloud"},"Visualising a single cloud"),(0,i.kt)("p",null,"\u5728\u793a\u4f8b\u4e2d\u7684\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr simpleVis ()")," \u5b9a\u4e49\u4e86\u53ef\u89c6\u5316\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"PointXYZ Cloud")," \u7684\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="simpleVis"',title:'"simpleVis"'},'pcl::visualization::PCLVisualizer::Ptr simpleVis (pcl::PointCloud<pcl::PointXYZ>::ConstPtr cloud)\n{\n    // --------------------------------------------\n    // -----Open 3D viewer and add point cloud-----\n    // --------------------------------------------\n    pcl::visualization::PCLVisualizer::Ptr viewer (new pcl::visualization::PCLVisualizer ("3D Viewer"));\n    viewer->setBackgroundColor (0, 0, 0);\n    viewer->addPointCloud<pcl::PointXYZ> (cloud, "sample cloud");\n    viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 1, "sample cloud");\n    viewer->addCoordinateSystem (1.0);\n    viewer->initCameraParameters ();\n    return (viewer);\n}\n')),(0,i.kt)("h4",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'pcl::visualization::PCLVisualizer::Ptr viewer (new pcl::visualization::PCLVisualizer ("3D Viewer"));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5bf9\u8c61\u67e5\u770b\u5668 ",(0,i.kt)("inlineCode",{parentName:"li"},"PCLVisualizer")," \uff0c\u5e76\u5b58\u5165\u667a\u80fd\u6307\u9488")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"viewer->setBackgroundColor (0, 0, 0);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u67e5\u770b\u5668\u7684\u80cc\u666f\u4e3a\u9ed1\u8272")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloud<pcl::PointXYZ> (cloud, "sample cloud");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u70b9\u4e91\u6dfb\u52a0\u5230\u67e5\u770b\u5668\uff0c\u5e76\u4e3a\u70b9\u4e91\u63d0\u4f9b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," \u5b57\u7b26\u4e32\uff0c\u8be5 ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," \u53ef\u7528\u4e8e\u5176\u4ed6\u65b9\u6cd5\u8bc6\u522b\u4e91",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u591a\u6b21\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"addPointCloud()")," \u6dfb\u52a0\u591a\u4e2a\u70b9\u4e91\uff0c\u5982\u679c\u8981\u66f4\u65b0\u5df2\u7ecf\u663e\u793a\u7684\u70b9\u4e91\uff0c\u5219\u9700\u8981\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"updatePointCloud()")),(0,i.kt)("li",{parentName:"ul"},"PCL 1.1 \u7248\u672c\u4e4b\u524d\u9700\u8981\u5148\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"removePointCloud()")," \u5e76\u63d0\u4f9b\u8981\u66f4\u65b0\u7684\u70b9\u4e91 ",(0,i.kt)("inlineCode",{parentName:"li"},"ID"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 1, "sample cloud");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u66f4\u6539\u6e32\u67d3\u5c5e\u6027\uff0c\u6b64\u65b9\u6cd5\u53ef\u4ee5\u63a7\u5236\u67e5\u770b\u5668\u4e2d\u6e32\u67d3\u4efb\u4f55\u70b9\u4e91\u7684\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u91cc ",(0,i.kt)("inlineCode",{parentName:"li"},"PCL_VISUALIZER_POINT_SIZE")," \u8868\u793a\u8bbe\u7f6e\u6e32\u67d3\u70b9\u7684\u5927\u5c0f\uff0c\u5177\u4f53\u5c5e\u6027\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"pcl::visualization::RenderingProperties")," \u8fd9\u4e2a\u679a\u4e3e\u4e2d\u67e5\u770b")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"viewer->addCoordinateSystem (1.0);    \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5750\u6807\u7cfb\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"X(R) Y(G) Z(B)")," \uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"scale")," \u53c2\u6570\u63a7\u5236\u5750\u6807\u8f74\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"viewer->initCameraParameters ();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e00\u4e9b\u6bd4\u8f83\u65b9\u4fbf\u7684\u76f8\u673a\u53c2\u6570")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"while (!viewer->wasStopped ())\n{\n    viewer->spinOnce (100);\n    std::this_thread::sleep_for(100ms);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5faa\u73af\uff0c\u6bcf\u6b21\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"spinOnce")," \u90fd\u4f1a\u7ed9\u89c2\u770b\u8005\u65f6\u95f4\u6765\u5904\u7406\u4e8b\u4ef6\uff0c\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-simple.png",alt:null})),(0,i.kt)("h3",{id:"rgb-point-clouds"},"RGB point clouds"),(0,i.kt)("p",null,"\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr rgbVis()")," \u4e2d\u5b9a\u4e49\u4e86\u6b64\u65b9\u6cd5\u5982\u4f55\u5b9e\u73b0"),(0,i.kt)("p",null,"\u5927\u90e8\u5206\u4ee3\u7801\u6ca1\u6709\u591a\u5927\u53d8\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pcl::visualization::PointCloudColorHandlerRGBField<pcl::PointXYZRGB> rgb(cloud);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u66f4\u6539\u4e86\u70b9\u7684\u7c7b\u578b\uff0c\u4f7f\u7528\u4e86\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"RGB")," \u6570\u636e\u63d0\u4f9b\u7a7a\u95f4\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"PointXYZRGB"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloud<pcl::PointXYZRGB> (cloud, rgb, "sample cloud");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u70b9\u4e91\u65f6\uff0c\u6307\u5b9a\u4e86\u989c\u8272\u5904\u7406\u53c2\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-RBG.png",alt:null})),(0,i.kt)("h3",{id:"custom-colours"},"Custom colours"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rgbVis()")," \u4e2d\u4e3a\u70b9\u4e91\u63d0\u4f9b\u5355\u4e00\u989c\u8272\uff0c\u53ef\u4ee5\u4e3a\u7279\u5b9a\u7684\u70b9\u4e91\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u989c\u8272\uff0c\u4ece\u800c\u80fd\u533a\u5206\u5355\u4e2a\u70b9\u4e91"),(0,i.kt)("p",null,"\u793a\u4f8b\u51fd\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr customColourVis()")),(0,i.kt)("p",null,"\u5927\u90e8\u5206\u4ee3\u7801\u4e5f\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pcl::visualization::PointCloudColorHandlerCustom<pcl::PointXYZ> single_color(cloud, 0, 255, 0);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u70b9\u4e91\u7c7b\u578b\u65f6\u6307\u5b9a\u4e86\u989c\u8272")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-custom.png",alt:null})),(0,i.kt)("h3",{id:"normals-and-other-information"},"Normals and other information"),(0,i.kt)("p",null,"\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr normalsVis()")," \u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u663e\u793a\u70b9\u4e91\u7684\u6cd5\u7ebf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->addPointCloudNormals<pcl::PointXYZRGB, pcl::Normal> (cloud, normals, 10, 0.05, "normals");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5176\u4ed6\u4ee3\u7801\u53ef\u53c2\u7167 ",(0,i.kt)("inlineCode",{parentName:"p"},"rgbVis()")," \uff0c\u7136\u540e\u7ed8\u5236\u4e86\u6cd5\u7ebf"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u7ed8\u5236\u6cd5\u7ebf\u5b9e\u73b0\u7684\u8bb2\u89e3 ",(0,i.kt)("a",{parentName:"li",href:"https://pcl-tutorials.readthedocs.io/en/latest/normal_estimation.html#normal-estimation"},"Estimating Surface Normals in a PointCloud")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-normals.png",alt:null})),(0,i.kt)("h3",{id:"drawing-shapes"},"Drawing Shapes"),(0,i.kt)("p",null,"\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr shapesVis()")," \u5b9a\u4e49\u4e86\u5411\u67e5\u770b\u5668\u6dfb\u52a0\u5f62\u72b6\u7684\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->addLine<pcl::PointXYZRGB> ((*cloud)[0], (*cloud)[cloud->size() - 1], "line");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u76f4\u7ebf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'viewer->addSphere ((*cloud)[0], 0.2, 0.5, 0.5, 0.0, "sphere");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u5706")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'pcl::ModelCoefficients coeffs;\ncoeffs.values.push_back (0.0);\ncoeffs.values.push_back (0.0);\ncoeffs.values.push_back (1.0);\ncoeffs.values.push_back (0.0);\nviewer->addPlane (coeffs, "plane");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u5e73\u9762")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'  coeffs.values.clear ();\n  coeffs.values.push_back (0.3);\n  coeffs.values.push_back (0.3);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (1.0);\n  coeffs.values.push_back (0.0);\n  coeffs.values.push_back (5.0);\n  viewer->addCone (coeffs, "cone");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7ed8\u5236\u5706\u9525")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-shapes.png",alt:null})),(0,i.kt)("h3",{id:"multiple-viewports"},"Multiple viewports"),(0,i.kt)("p",null,"\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"pcl::visualization::PCLVisualizer::Ptr viewportsVis()")," \u6f14\u793a\u4e86\u5728\u5355\u72ec\u7684\u7a97\u53e3\u4e2d\u7ed8\u5236\u591a\u4e2a\u70b9\u4e91"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u7ed3\u679c")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pcl/visualisation-Viewports.png",alt:null})))}d.isMDXComponent=!0}}]);