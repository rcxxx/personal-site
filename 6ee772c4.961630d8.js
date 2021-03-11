(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),i=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,O=u["".concat(b,".").concat(d)]||u[d]||s[d]||r;return n?c.a.createElement(O,l(l({ref:t},o),{},{components:n})):c.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<r;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"Highlight",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),c=n(7),r=(n(0),n(152)),b={id:"opencv-install-cpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install\uff08\u4ec5CPU\uff09"},l={unversionedId:"opencv/opencv-install-cpu",id:"opencv/opencv-install-cpu",isDocsHomePage:!1,title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"OpenCV",source:"@site/docs/opencv/opencv-install-01.md",slug:"/opencv/opencv-install-cpu",permalink:"/docs/docs/opencv/opencv-install-cpu",version:"current",sidebar_label:"Install\uff08\u4ec5CPU\uff09",sidebar:"Open-source-library",previous:{title:"\u4ec0\u4e48\u662fOpenCV",permalink:"/docs/docs/opencv/about-opencv"},next:{title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/opencv/opencv-install-gpu"}},p=[{value:"OpenCV",id:"opencv",children:[]},{value:"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV",id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv",children:[{value:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",children:[]},{value:"\u83b7\u53d6 <strong><code>OpenCV</code></strong> \u6e90\u7801",id:"\u83b7\u53d6-opencv-\u6e90\u7801",children:[]},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],o=function(e){var t=e.children,n=e.color;return Object(r.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},i={toc:p,Highlight:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"opencv"},"OpenCV"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://opencv.org/"},"OpenCV\u5b98\u7f51"))),Object(r.b)("h2",{id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv"},"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV"),Object(r.b)("p",null,"\u914d\u7f6e\u5217\u8868"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7248\u672c"),Object(r.b)("td",{parentName:"tr",align:"center"},"Ubuntu18.04LTS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"GCC/G++"),Object(r.b)("td",{parentName:"tr",align:"center"},"7.5.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OpenCV"),Object(r.b)("td",{parentName:"tr",align:"center"},"4.1.0")))),Object(r.b)("h3",{id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential\nsudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"libjasper-dev")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),Object(r.b)("h3",{id:"\u83b7\u53d6-opencv-\u6e90\u7801"},"\u83b7\u53d6 ",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},"OpenCV"))," \u6e90\u7801"),Object(r.b)("p",null,"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"git")," \u4e0b\u8f7d"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/<my_work_directory>\ngit clone https://github.com/opencv/opencv.git\ngit clone https://github.com/opencv/opencv_contrib.git\ngit clone https://github.com/opencv/opencv_extra.git\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f\u8fd9\u91cc\u9700\u8981\u5206\u522b\u5c06\u4e09\u4e2a\u4ed3\u5e93\u4e2d\u7684\u5206\u652f\u90fd\u5207\u6362\u81f3 ",Object(r.b)("inlineCode",{parentName:"li"},"4.1.0"))),Object(r.b)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u538b\u7f29\u5305 ",Object(r.b)(o,{color:"#25c2a0",mdxType:"Highlight"},"[\u63a8\u8350]")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv/releases/tag/4.1.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv-4.1.0")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.1.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv_contrib-4.1.0")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/opencv/opencv_extra/releases/tag/4.1.0"},Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"opencv_extra-4.1.0"))))),Object(r.b)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tar zxvf opencv-4.1.0.tar.gz ~/workspace/\ntar zxvf opencv_contrib-4.1.0.tar.gz ~/workspace/\ntar zxvf opencv_extra-4.1.0.tar.gz ~/workspace/\n")),Object(r.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(r.b)("p",null,"\u65b0\u5efa ",Object(r.b)("inlineCode",{parentName:"p"},"build/")," \u76ee\u5f55\u5b58\u653e\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/workspace/opencv-4.1.0/\nmkdir build\ncd build\n")),Object(r.b)("p",null,"\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",Object(r.b)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DINSTALL_TESTS=ON \\\n    -DOPENCV_TEST_DATA_PATH=../../opencv_extra-4.1.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.1.0/modules \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    ..\n")),Object(r.b)("p",null,"\u7b49\u5f85 ",Object(r.b)("inlineCode",{parentName:"p"},"makefile")," \u751f\u6210 \u2014\u2014 \u8fc7\u7a0b\u4fdd\u6301\u7f51\u7edc\u901a\u7545\uff0c\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u5185\u5bb9"),Object(r.b)("p",null,"\u751f\u6210\u5b8c\u4e4b\u540e\u5f00\u59cb\u7f16\u8bd1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"NUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u53ef\u4ee5\u53bb\u6ce1\u58f6\u8336\u7136\u540e\u4f11\u606f\u4e00\u4e0b\uff0c\u770b\u770b\u756a\uff0c\u7f16\u8bd1\u901f\u5ea6\u53d6\u51b3\u4e8eCPU"),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",{parentName:"p",href:"https://space.bilibili.com/483818980"},"\u63a8\u8350\u770b\u770b\u8fd9\u91cc\u7684\u89c6\u9891")," \u2014\u2014 \u4e0d\u662f\u5e7f\u544a"))),Object(r.b)("p",null,"\u7b49\u5f85\u7f16\u8bd1\u5b8c\u6210\u540e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo make install\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c06\u7f16\u8bd1\u597d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},".so")," \u6587\u4ef6\u4ee5\u53ca\u5934\u6587\u4ef6\u5b89\u88c5\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"/usr/local")," \u76ee\u5f55\u4e0b")),Object(r.b)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/ld.so.conf.d/opencv.conf"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"li"},"opencv.conf")," \u5728\u5176\u4e2d\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"li"},"/usr/local/lib"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/bash.bashrc"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"li"},"bash.bashrc")," \u5728\u6700\u540e\u9762\u6dfb\u52a0")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig \nexport PKG_CONFIG_PATH\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"sudo ldconfig"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u914d\u7f6e\u751f\u6548")),Object(r.b)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/workspace/opencv-4.1.0/samples/cpp/example_cmake/\ncmake .\nmake\n./opencv_example\n")),Object(r.b)("p",null,"\u6210\u529f\u542f\u52a8\u6444\u50cf\u5934\u8bbe\u5907\u5e76\u663e\u793a ",Object(r.b)("inlineCode",{parentName:"p"},"Hello OpenCV")," \u5b57\u6837\uff0c\u5b89\u88c5\u5b8c\u6210"),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.opencv.org/4.1.0/d7/d9f/tutorial_linux_install.html"},"\u5b98\u7f51tutorial")))}u.isMDXComponent=!0}}]);