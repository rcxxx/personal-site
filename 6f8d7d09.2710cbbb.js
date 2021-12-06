(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),l=t(7),o=(t(0),t(194)),p=["components"],i={id:"jetson-nano-install-opencv",title:"Jetson Nano Install OpenCV",sidebar_label:"Install OpenCV"},c={unversionedId:"nvidia/jeston-nano/jetson-nano-install-opencv",id:"nvidia/jeston-nano/jetson-nano-install-opencv",isDocsHomePage:!1,title:"Jetson Nano Install OpenCV",description:"\u9009\u62e9 OpenCV \u7248\u672c",source:"@site/docs/nvidia/jeston-nano/jetson-nano-install-opencv.md",slug:"/nvidia/jeston-nano/jetson-nano-install-opencv",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-install-opencv",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/nvidia/jeston-nano/jetson-nano-install-opencv.md",version:"current",sidebar_label:"Install OpenCV",sidebar:"Nvidia",previous:{title:"Jetson Nano Install Pytorch",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-install-pytorch"},next:{title:"Nvidia Jetson Nano GPIO",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-gpio"}},b=[{value:"\u9009\u62e9 <code>OpenCV</code> \u7248\u672c",id:"\u9009\u62e9-opencv-\u7248\u672c",children:[]},{value:"\u5b89\u88c5 <code>OpenCV</code>",id:"\u5b89\u88c5-opencv",children:[{value:"\u5b89\u88c5 <code>dphys-swapfile</code> \u5de5\u5177\u786e\u4fdd\u7f16\u8bd1\u901a\u8fc7",id:"\u5b89\u88c5-dphys-swapfile-\u5de5\u5177\u786e\u4fdd\u7f16\u8bd1\u901a\u8fc7",children:[]},{value:"\u5f00\u59cb\u7f16\u8bd1",id:"\u5f00\u59cb\u7f16\u8bd1",children:[]},{value:"\u8fd8\u539f\u4e4b\u524d\u4fee\u6539\u7684\u5185\u5b58\u7a7a\u95f4",id:"\u8fd8\u539f\u4e4b\u524d\u4fee\u6539\u7684\u5185\u5b58\u7a7a\u95f4",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],r={toc:b};function s(e){var n=e.components,t=Object(l.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u9009\u62e9-opencv-\u7248\u672c"},"\u9009\u62e9 ",Object(o.b)("inlineCode",{parentName:"h2"},"OpenCV")," \u7248\u672c"),Object(o.b)("p",null,"\u5b98\u7f51\u4e0b\u8f7d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Jetson Nano")," \u7684\u955c\u50cf\u5df2\u7ecf\u9ed8\u8ba4\u5b89\u88c5\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"OpenCV4.1.1")," \u7684\u7248\u672c"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-opencv4.1.1.png",alt:null}),"\n",Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-opencv4.1.1-libs.png",alt:null})),Object(o.b)("p",null,"\u4f46\u662f\u6211\u60f3\u5b89\u88c5\u65b0\u7248\u672c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"OpenCV")," \uff0c\u4e8e\u662f\u51c6\u5907\u5148\u5220\u9664\u5f53\u524d\u7684\u7248\u672c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'sudo find / -iname "*opencv*"\n')),Object(o.b)("p",null,"\u67e5\u770b\u4e0b\u7cfb\u7edf\u4e2d\u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"OpenCV")," \u76f8\u5173\u7684\u6587\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5220\u9664\u7684\u662f ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"/usr/include/opencv4/"))," \u4ee5\u53ca ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"/usr/lib/aarch64-linux-gnu/"))," \u4e2d\u7684\u8bf8\u591a\u6587\u4ef6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5220\u9664\u9ed8\u8ba4\u7248\u672c ",Object(o.b)("inlineCode",{parentName:"strong"},"OpenCV")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get purge libopencv*\nsudo apt autoremove\nsudo apt-get update\n")),Object(o.b)("p",null,"\u4e4b\u540e\u518d ",Object(o.b)("inlineCode",{parentName:"p"},"pkg-config opencv4 --modversion")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-opencv4.1.1-no-package-found.png",alt:null})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"OpenCV4.1.1")," \u5c31\u5378\u8f7d\u6389\u4e86"),Object(o.b)("h2",{id:"\u5b89\u88c5-opencv"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"h2"},"OpenCV")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u56fe\u65b9\u4fbf\uff0c\u53ef\u4ee5\u76f4\u63a5\u5230 ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/Jetson-Nano-image"},"https://github.com/Qengineering/Jetson-Nano-image"))," \u4e0b\u8f7d\u4e00\u4e2a\u5df2\u7ecf\u9884\u88c5\u4e86\u5404\u79cd\u73af\u5883\u7684\u955c\u50cf\u5237\u5230 ",Object(o.b)("inlineCode",{parentName:"li"},"Jetson Nano")," \u91cc\uff0c\u975e\u5e38\u7684\u7701\u4e8b\u513f")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5f53\u7136\u4e5f\u53ef\u4ee5\u81ea\u5df1\u6298\u817e\ud83d\udc49")),Object(o.b)("h3",{id:"\u5b89\u88c5-dphys-swapfile-\u5de5\u5177\u786e\u4fdd\u7f16\u8bd1\u901a\u8fc7"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"h3"},"dphys-swapfile")," \u5de5\u5177\u786e\u4fdd\u7f16\u8bd1\u901a\u8fc7"),Object(o.b)("p",null,"\u53c2\u7167 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://qengineering.eu/install-opencv-4.5-on-jetson-nano.html"},"Install OpenCV 4.5 on Jetson Nano"))," \u4e2d\u7684\u5185\u5bb9\uff0c\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"OpenCV4.5")," \u9700\u8981\u8d85\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"4GB")," \u7684\u8fd0\u884c\u5185\u5b58\u548c\u8d85\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"2GB")," \u7684\u4ea4\u6362\u7a7a\u95f4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u68c0\u67e5\u5185\u5b58")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"free -m\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-free-m.png",alt:null})),Object(o.b)("p",null,"\u6211\u4eec\u9700\u8981\u589e\u52a0\u4e00\u4e9b\u4ea4\u6362\u7a7a\u95f4\u7684\u5185\u5b58\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"dphys-swapfile")," \u6765\u83b7\u53d6\u4e34\u65f6\u7684\u7a7a\u95f4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"li"},"dphys-swapfile"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get upgrade\nsudo apt-get install dphys-swapfile\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"li"},"/sbin/dphys-swapfile"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo vim /sbin/dphys-swapfile\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-sbin-dphys-swapfile.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/dphys-swapfile"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/dphys-swapfile\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-etc-dphys-swapfile.png",alt:null})),Object(o.b)("p",null,"\u4fee\u6539\u4e4b\u540e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo reboot\n")),Object(o.b)("p",null,"\u91cd\u542f\u540e\u518d\u6b21 ",Object(o.b)("inlineCode",{parentName:"p"},"free -m"),"\uff0c\u5185\u5b58\u7a7a\u95f4\u5df2\u7ecf\u53d8\u5316\n",Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-free-m-02.png",alt:null})),Object(o.b)("h3",{id:"\u5f00\u59cb\u7f16\u8bd1"},"\u5f00\u59cb\u7f16\u8bd1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/Install-OpenCV-Jetson-Nano"},"Qengineering/Install-OpenCV-Jetson-Nano"))," \u4ed3\u5e93\u4e2d\u5df2\u7ecf\u7f16\u5199\u4e86\u811a\u672c\uff0c\u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u5b89\u88c5\uff0c\u4f46\u662f\u60f3\u8981\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"li"},"Qt5 GUI")," \u7684\u652f\u6301\uff0c\u8fd8\u662f\u5f97\u81ea\u5df1\u7f16\u8bd1\u4e00\u4e0b")),Object(o.b)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u663e\u793a ",Object(o.b)("inlineCode",{parentName:"li"},"CUDA")," \u7684\u4f4d\u7f6e")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo sh -c \"echo '/usr/local/cuda/lib64' >> /etc/ld.so.conf.d/nvidia-tegra.conf\"\nsudo ldconfig\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\uff0c\u9700\u8981\u7684\u4f9d\u8d56\u8d85\u7ea7\u591a\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u7f16\u8bd1\u987a\u5229\u901a\u8fc7\uff0c\u6162\u6162\u88c5")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install build-essential cmake git unzip pkg-config zlib1g-dev\nsudo apt-get install libjpeg-dev libjpeg8-dev libjpeg-turbo8-dev\nsudo apt-get install libpng-dev libtiff-dev libglew-dev\nsudo apt-get install libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install libgtk2.0-dev libgtk-3-dev libcanberra-gtk*\nsudo apt-get install python-dev python-numpy python-pip\nsudo apt-get install python3-dev python3-numpy python3-pip\nsudo apt-get install libxvidcore-dev libx264-dev libgtk-3-dev\nsudo apt-get install libtbb2 libtbb-dev libdc1394-22-dev libxine2-dev\nsudo apt-get install gstreamer1.0-tools libgstreamer-plugins-base1.0-dev\nsudo apt-get install libgstreamer-plugins-good1.0-dev\nsudo apt-get install libv4l-dev v4l-utils v4l2ucp qv4l2\nsudo apt-get install libtesseract-dev libxine2-dev libpostproc-dev\nsudo apt-get install libavresample-dev libvorbis-dev\nsudo apt-get install libfaac-dev libmp3lame-dev libtheora-dev\nsudo apt-get install libopencore-amrnb-dev libopencore-amrwb-dev\nsudo apt-get install libopenblas-dev libatlas-base-dev libblas-dev\nsudo apt-get install liblapack-dev liblapacke-dev libeigen3-dev gfortran\nsudo apt-get install libhdf5-dev libprotobuf-dev protobuf-compiler\nsudo apt-get install libgoogle-glog-dev libgflags-dev\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc7b")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u5efa\u8bae\u5199\u4e2a\u811a\u672c\u6765\u5b89\u88c5\u4f9d\u8d56\uff0c\u4e00\u9879\u9879\u88c5\u6bd4\u8f83\u9ebb\u70e6"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"li"},"Qt5")," \uff0c\u524d\u9762\u8fd9\u4e48\u9ebb\u70e6\u5c31\u662f\u4e3a\u4e86\u8fd9\u4e2a")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install qt5-default\n")),Object(o.b)("h4",{id:"\u4e0b\u8f7d-opencv"},"\u4e0b\u8f7d ",Object(o.b)("inlineCode",{parentName:"h4"},"OpenCV")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd ~/workspace/\nmkdir opencv && cd opencv # \u4e2a\u4eba\u5206\u7c7b\u4e60\u60ef\nwget -O opencv.zip https://github.com/opencv/opencv/archive/4.5.4.zip\nwget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.5.4.zip\nunzip opencv.zip\nunzip opencv_contrib.zip\n")),Object(o.b)("h4",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd opencv4.5.4\nmkdir build\ncd build\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"li"},"cmake")," \u9009\u9879\uff0c\u8fd9\u91cc\u4f1a\u4ece\u7f51\u4e0a\u4e0b\u8f7d\u4e00\u4e9b\u5305\uff0c\u4fdd\u6301\u7f51\u7edc\u7545\u901a\uff0c\u5fc5\u8981\u65f6\u5f00\u4e00\u4e0b\u4ee3\u7406")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'cmake -D CMAKE_BUILD_TYPE=RELEASE \\\n-D CMAKE_INSTALL_PREFIX=/usr \\\n-D OPENCV_EXTRA_MODULES_PATH=~/workspace/opencv/opencv_contrib-4.5.4/modules \\\n-D EIGEN_INCLUDE_PATH=/usr/include/eigen3 \\\n-D WITH_OPENCL=OFF \\\n-D WITH_CUDA=ON \\\n-D CUDA_ARCH_BIN=5.3 \\\n-D CUDA_ARCH_PTX="" \\\n-D WITH_CUDNN=ON \\\n-D WITH_CUBLAS=ON \\\n-D ENABLE_FAST_MATH=ON \\\n-D CUDA_FAST_MATH=ON \\\n-D OPENCV_DNN_CUDA=ON \\\n-D ENABLE_NEON=ON \\\n-D WITH_QT=OFF \\\n-D WITH_OPENMP=ON \\\n-D BUILD_TIFF=ON \\\n-D WITH_FFMPEG=ON \\\n-D WITH_GSTREAMER=ON \\\n-D WITH_TBB=ON \\\n-D BUILD_TBB=ON \\\n-D BUILD_TESTS=OFF \\\n-D WITH_EIGEN=ON \\\n-D WITH_V4L=ON \\\n-D WITH_LIBV4L=ON \\\n-D OPENCV_ENABLE_NONFREE=ON \\\n-D INSTALL_C_EXAMPLES=OFF \\\n-D INSTALL_PYTHON_EXAMPLES=OFF \\\n-D BUILD_opencv_python3=TRUE \\\n-D OPENCV_GENERATE_PKGCONFIG=ON \\\n-D BUILD_EXAMPLES=OFF ..\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"cmake")," \u9009\u9879\u914d\u7f6e\u5b8c\u6210\u540e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7f16\u8bd1")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make -j4\n")),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u662f\u6f2b\u957f\u7684\u7f16\u8bd1\u65f6\u95f4\uff0c\u5927\u6982\u9700\u89813\u4e2a\u5c0f\u65f6\u5de6\u53f3\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo make install\nsudo ldconfig\n")),Object(o.b)("h3",{id:"\u8fd8\u539f\u4e4b\u524d\u4fee\u6539\u7684\u5185\u5b58\u7a7a\u95f4"},"\u8fd8\u539f\u4e4b\u524d\u4fee\u6539\u7684\u5185\u5b58\u7a7a\u95f4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo /etc/init.d/dphys-swapfile stop\nsudo apt-get remove --purge dphys-swapfile\nreboot\n")),Object(o.b)("p",null,"\u91cd\u542f\u540e\uff0c ",Object(o.b)("inlineCode",{parentName:"p"},"OpenCV")," \u5b89\u88c5\u5b8c\u6210"),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://qengineering.eu/install-opencv-4.5-on-jetson-nano.html"},"Install OpenCV 4.5 on Jetson Nano"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/Install-OpenCV-Jetson-Nano"},"Qengineering/Install-OpenCV-Jetson-Nano"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/Jetson-Nano-image"},"Jetson Nano DNN image"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/mdegans/nano_build_opencv"},"mdegans/nano_build_opencv"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://www.cnblogs.com/qilai/p/13663484.html"},"ubuntu\u4e0b\u67e5\u8be2OpenCV\u7248\u672c\u4ee5\u53ca\u8def\u5f84")))))}s.isMDXComponent=!0},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),l=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),r=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=r(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=r(t),d=a,O=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return t?l.a.createElement(O,i(i({ref:n},b),{},{components:t})):l.a.createElement(O,i({ref:n},b))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var b=2;b<o;b++)p[b]=t[b];return l.a.createElement.apply(null,p)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);