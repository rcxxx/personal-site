"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[437],{26029:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return d},assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],p={id:"opencv-install-gpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install\uff08GPU\uff09"},i=void 0,c={unversionedId:"computer/cv/opencv/opencv-install-gpu",id:"computer/cv/opencv/opencv-install-gpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"OpenCV",source:"@site/docs/computer/cv/opencv/opencv-install-02.md",sourceDirName:"computer/cv/opencv",slug:"/computer/cv/opencv/opencv-install-gpu",permalink:"/personal-site/docs/computer/cv/opencv/opencv-install-gpu",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/opencv/opencv-install-02.md",tags:[],version:"current",frontMatter:{id:"opencv-install-gpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install\uff08GPU\uff09"},sidebar:"\ud83d\udc40CV",previous:{title:"Install\uff08\u4ec5CPU\uff09",permalink:"/personal-site/docs/computer/cv/opencv/opencv-install-cpu"},next:{title:"Build Config",permalink:"/personal-site/docs/computer/cv/opencv/opencv-build-cfg"}},u={},s=[{value:"OpenCV",id:"opencv",level:2},{value:"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301",id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301",level:2},{value:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN",id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacudacudnn",level:3},{value:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",level:3},{value:"\u83b7\u53d6 <strong><code>OpenCV</code></strong> \u6e90\u7801",id:"\u83b7\u53d6-opencv-\u6e90\u7801",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:s,Highlight:d};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"opencv"},"OpenCV"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opencv.org/"},"OpenCV\u5b98\u7f51"))),(0,l.kt)("h2",{id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301"},"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301"),(0,l.kt)("p",null,"\u914d\u7f6e\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Ubuntu18.04LTS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GCC/G++"),(0,l.kt)("td",{parentName:"tr",align:"center"},"7.5.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:"center"},"4.4.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.2")))),(0,l.kt)("h3",{id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacudacudnn"},"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN"),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc\ud83d\udc49"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential\nsudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"libjasper-dev")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u5176\u4ed6\u7684\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install \\\nlibglew-dev \\\nzlib1g-dev \\\nlibavutil-dev \\\nlibpostproc-dev \\\nlibeigen3-dev\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6-opencv-\u6e90\u7801"},"\u83b7\u53d6 ",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},"OpenCV"))," \u6e90\u7801"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," \u4e0b\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/<my_work_directory>\ngit clone https://github.com/opencv/opencv.git\ngit clone https://github.com/opencv/opencv_contrib.git\ngit clone https://github.com/opencv/opencv_extra.git\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u8fd9\u91cc\u9700\u8981\u5206\u522b\u5c06\u4e09\u4e2a\u4ed3\u5e93\u4e2d\u7684\u5206\u652f\u90fd\u5207\u6362\u81f3 ",(0,l.kt)("inlineCode",{parentName:"li"},"4.4.0"))),(0,l.kt)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u538b\u7f29\u5305 ",(0,l.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"[\u63a8\u8350]")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv/releases/tag/4.4.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv-4.4.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.4.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_contrib-4.4.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv_extra/releases/tag/4.4.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_extra-4.4.0"))))),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf opencv-4.4.0.tar.gz ~/workspace/\ntar zxvf opencv_contrib-4.4.0.tar.gz ~/workspace/\ntar zxvf opencv_extra-4.4.0.tar.gz ~/workspace/\n")),(0,l.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"build/")," \u76ee\u5f55\u5b58\u653e\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/workspace/opencv-4.4.0/\nmkdir build\ncd build\n")),(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DBUILD_PNG=OFF \\\n    -DBUILD_TIFF=OFF \\\n    -DBUILD_TBB=OFF \\\n    -DBUILD_JPEG=OFF \\\n    -DBUILD_JASPER=OFF \\\n    -DBUILD_ZLIB=OFF \\\n    -DBUILD_EXAMPLES=ON \\\n    -DBUILD_opencv_python2=OFF \\\n    -DBUILD_opencv_python3=ON \\\n    -DBUILD_opencv_cudacodec=OFF \\\n    -DWITH_OPENCL=OFF \\\n    -DWITH_OPENMP=OFF \\\n    -DWITH_FFMPEG=ON \\\n    -DWITH_GSTREAMER=OFF \\\n    -DWITH_GSTREAMER_0_10=OFF \\\n    -DWITH_CUDA=ON \\\n    -DOPENCV_DNN_CUDA=ON \\\n    -DENABLE_FAST_MATH=1 \\\n    -DCUDA_FAST_MATH=1 \\\n    -DWITH_CUBLAS=1 \\\n    -DWITH_TBB=ON \\\n    -DWITH_GTK=ON \\\n    -DWITH_VTK=OFF \\\n    -DWITH_1394=OFF \\\n    -DWITH_OPENEXR=OFF \\\n    -DCUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda-10.2 \\\n    -DCUDA_ARCH_PTX="" \\\n    -DINSTALL_C_EXAMPLES=OFF \\\n    -DINSTALL_TESTS=ON \\\n    -DOPENCV_TEST_DATA_PATH=../../opencv_extra-4.4.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.4.0/modules \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    ..\n')),(0,l.kt)("p",null,"\u7b49\u5f85 ",(0,l.kt)("inlineCode",{parentName:"p"},"makefile")," \u751f\u6210 \u2014\u2014 \u8fc7\u7a0b\u4fdd\u6301\u7f51\u7edc\u901a\u7545\uff0c\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u5185\u5bb9"),(0,l.kt)("p",null,"\u751f\u6210\u5b8c\u4e4b\u540e\u5f00\u59cb\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7f16\u8bd1\u65f6\u95f4\u66f4\u4e45\uff0c\u4f60\u53ef\u4ee5\u53eb\u51e0\u4e2a\u670b\u53cb\u4e00\u8d77\u559d\u8336 (= =!)"))),(0,l.kt)("p",null,"\u7b49\u5f85\u7f16\u8bd1\u5b8c\u6210\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo make install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u7f16\u8bd1\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".so")," \u6587\u4ef6\u4ee5\u53ca\u5934\u6587\u4ef6\u5b89\u88c5\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local")," \u76ee\u5f55\u4e0b")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"sudo gedit /etc/ld.so.conf.d/opencv.conf"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"opencv.conf")," \u5728\u5176\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/lib"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"sudo gedit /etc/bash.bashrc"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"bash.bashrc")," \u5728\u6700\u540e\u9762\u6dfb\u52a0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig \nexport PKG_CONFIG_PATH\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"sudo ldconfig"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u914d\u7f6e\u751f\u6548")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("p",null,"\u5b98\u7f51tutorial ",(0,l.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.4.0/d6/d15/tutorial_building_tegra_cuda.html"},"Building OpenCV for Tegra with CUDA")))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);