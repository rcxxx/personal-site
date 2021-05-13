(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),i=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,s=u["".concat(b,".").concat(d)]||u[d]||O[d]||r;return t?c.a.createElement(s,l(l({ref:n},p),{},{components:t})):c.a.createElement(s,l({ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,b=new Array(r);b[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var p=2;p<r;p++)b[p]=t[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"Highlight",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),c=t(7),r=(t(0),t(177)),b={id:"opencv-install-gpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install\uff08GPU\uff09"},l={unversionedId:"opencv/opencv-install-gpu",id:"opencv/opencv-install-gpu",isDocsHomePage:!1,title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"OpenCV",source:"@site/docs/opencv/opencv-install-02.md",slug:"/opencv/opencv-install-gpu",permalink:"/docs/docs/opencv/opencv-install-gpu",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/opencv/opencv-install-02.md",version:"current",sidebar_label:"Install\uff08GPU\uff09",sidebar:"Open-source-library",previous:{title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/opencv/opencv-install-cpu"},next:{title:"\u50cf\u7d20\u7684\u8fde\u901a,\u90bb\u57df\u7b49\u95ee\u9898",permalink:"/docs/docs/opencv/opencv-pixel-connect"}},o=[{value:"OpenCV",id:"opencv",children:[]},{value:"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301",id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301",children:[{value:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN",id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacuda\u3001cudnn",children:[]},{value:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",children:[]},{value:"\u83b7\u53d6 <strong><code>OpenCV</code></strong> \u6e90\u7801",id:"\u83b7\u53d6-opencv-\u6e90\u7801",children:[]},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p=function(e){var n=e.children,t=e.color;return Object(r.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},i={toc:o,Highlight:p};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"opencv"},"OpenCV"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://opencv.org/"},"OpenCV\u5b98\u7f51"))),Object(r.b)("h2",{id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301"},"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301"),Object(r.b)("p",null,"\u914d\u7f6e\u5217\u8868"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7248\u672c"),Object(r.b)("td",{parentName:"tr",align:"center"},"Ubuntu18.04LTS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"GCC/G++"),Object(r.b)("td",{parentName:"tr",align:"center"},"7.5.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OpenCV"),Object(r.b)("td",{parentName:"tr",align:"center"},"4.4.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"CUDA"),Object(r.b)("td",{parentName:"tr",align:"center"},"10.2")))),Object(r.b)("h3",{id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacuda\u3001cudnn"},"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN"),Object(r.b)("p",null,"\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc\ud83d\udc49"),Object(r.b)("h3",{id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential\nsudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"libjasper-dev")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e9b\u5176\u4ed6\u7684\u4f9d\u8d56")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install \\\nlibglew-dev \\\nzlib1g-dev \\\nlibavutil-dev \\\nlibpostproc-dev \\\nlibeigen3-dev\n")),Object(r.b)("h3",{id:"\u83b7\u53d6-opencv-\u6e90\u7801"},"\u83b7\u53d6 ",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},"OpenCV"))," \u6e90\u7801"),Object(r.b)("p",null,"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"git")," \u4e0b\u8f7d"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/<my_work_directory>\ngit clone https://github.com/opencv/opencv.git\ngit clone https://github.com/opencv/opencv_contrib.git\ngit clone https://github.com/opencv/opencv_extra.git\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f\u8fd9\u91cc\u9700\u8981\u5206\u522b\u5c06\u4e09\u4e2a\u4ed3\u5e93\u4e2d\u7684\u5206\u652f\u90fd\u5207\u6362\u81f3 ",Object(r.b)("inlineCode",{parentName:"li"},"4.4.0"))),Object(r.b)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u538b\u7f29\u5305 ",Object(r.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"[\u63a8\u8350]")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv/releases/tag/4.4.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv-4.4.0")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.4.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv_contrib-4.4.0")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv_extra/releases/tag/4.4.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv_extra-4.4.0"))))),Object(r.b)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tar zxvf opencv-4.4.0.tar.gz ~/workspace/\ntar zxvf opencv_contrib-4.4.0.tar.gz ~/workspace/\ntar zxvf opencv_extra-4.4.0.tar.gz ~/workspace/\n")),Object(r.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(r.b)("p",null,"\u65b0\u5efa ",Object(r.b)("inlineCode",{parentName:"p"},"build/")," \u76ee\u5f55\u5b58\u653e\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/workspace/opencv-4.4.0/\nmkdir build\ncd build\n")),Object(r.b)("p",null,"\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",Object(r.b)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DBUILD_PNG=OFF \\\n    -DBUILD_TIFF=OFF \\\n    -DBUILD_TBB=OFF \\\n    -DBUILD_JPEG=OFF \\\n    -DBUILD_JASPER=OFF \\\n    -DBUILD_ZLIB=OFF \\\n    -DBUILD_EXAMPLES=ON \\\n    -DBUILD_opencv_python2=OFF \\\n    -DBUILD_opencv_python3=ON \\\n    -DBUILD_opencv_cudacodec=OFF \\\n    -DWITH_OPENCL=OFF \\\n    -DWITH_OPENMP=OFF \\\n    -DWITH_FFMPEG=ON \\\n    -DWITH_GSTREAMER=OFF \\\n    -DWITH_GSTREAMER_0_10=OFF \\\n    -DWITH_CUDA=ON \\\n    -DOPENCV_DNN_CUDA=ON \\\n    -DENABLE_FAST_MATH=1 \\\n    -DCUDA_FAST_MATH=1 \\\n    -DWITH_CUBLAS=1 \\\n    -DWITH_TBB=ON \\\n    -DWITH_GTK=ON \\\n    -DWITH_VTK=OFF \\\n    -DWITH_1394=OFF \\\n    -DWITH_OPENEXR=OFF \\\n    -DCUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda-10.2 \\\n    -DCUDA_ARCH_PTX="" \\\n    -DINSTALL_C_EXAMPLES=OFF \\\n    -DINSTALL_TESTS=ON \\\n    -DOPENCV_TEST_DATA_PATH=../../opencv_extra-4.4.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.4.0/modules \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    ..\n')),Object(r.b)("p",null,"\u7b49\u5f85 ",Object(r.b)("inlineCode",{parentName:"p"},"makefile")," \u751f\u6210 \u2014\u2014 \u8fc7\u7a0b\u4fdd\u6301\u7f51\u7edc\u901a\u7545\uff0c\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u5185\u5bb9"),Object(r.b)("p",null,"\u751f\u6210\u5b8c\u4e4b\u540e\u5f00\u59cb\u7f16\u8bd1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"NUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u8fd9\u91cc\u7f16\u8bd1\u65f6\u95f4\u66f4\u4e45\uff0c\u4f60\u53ef\u4ee5\u53eb\u51e0\u4e2a\u670b\u53cb\u4e00\u8d77\u559d\u8336 (= =!)"))),Object(r.b)("p",null,"\u7b49\u5f85\u7f16\u8bd1\u5b8c\u6210\u540e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo make install\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c06\u7f16\u8bd1\u597d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},".so")," \u6587\u4ef6\u4ee5\u53ca\u5934\u6587\u4ef6\u5b89\u88c5\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"/usr/local")," \u76ee\u5f55\u4e0b")),Object(r.b)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/ld.so.conf.d/opencv.conf"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"li"},"opencv.conf")," \u5728\u5176\u4e2d\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"li"},"/usr/local/lib"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/bash.bashrc"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"li"},"bash.bashrc")," \u5728\u6700\u540e\u9762\u6dfb\u52a0")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig \nexport PKG_CONFIG_PATH\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo ldconfig"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u914d\u7f6e\u751f\u6548")),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("p",null,"\u5b98\u7f51tutorial ",Object(r.b)("a",{parentName:"p",href:"https://docs.opencv.org/4.4.0/d6/d15/tutorial_building_tegra_cuda.html"},"Building OpenCV for Tegra with CUDA")))}u.isMDXComponent=!0}}]);