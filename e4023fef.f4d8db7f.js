(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(190)),l=["components"],c={id:"jetson-nano-install-pytorch",title:"Jetson Nano Install Pytorch",sidebar_label:"Install Pytorch"},p={unversionedId:"nvidia/jeston-nano/jetson-nano-install-pytorch",id:"nvidia/jeston-nano/jetson-nano-install-pytorch",isDocsHomePage:!1,title:"Jetson Nano Install Pytorch",description:"Pytorch",source:"@site/docs/nvidia/jeston-nano/jetson-nano-install-pytorch.md",slug:"/nvidia/jeston-nano/jetson-nano-install-pytorch",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-install-pytorch",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/nvidia/jeston-nano/jetson-nano-install-pytorch.md",version:"current",sidebar_label:"Install Pytorch",sidebar:"Nvidia",previous:{title:"Jetson Nano Archiconda",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-archiconda"},next:{title:"Jetson Nano Install OpenCV",permalink:"/docs/docs/nvidia/jeston-nano/jetson-nano-install-opencv"}},i=[{value:"Pytorch",id:"pytorch",children:[{value:"<code>export OPENBLAS_CORETYPE=ARMV8</code>",id:"export-openblas_coretypearmv8",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={toc:i};function s(e){var n=e.components,t=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pytorch"},"Pytorch"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Jetson Nano")," \u4e0a\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"Pytorch")," \u7f51\u4e0a\u8d44\u6599\u662f\u6bd4\u8f83\u591a\u7684\uff0c\u5b89\u88c5\u540e\u53ef\u4ee5\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"Nano")," \u6765\u8fd0\u884c\u81ea\u5df1\u7684\u6a21\u578b\uff0c\u4f46\u522b\u6307\u671b\u7528\u5b83\u6765\u8bad\u7ec3\u6a21\u578b\uff08\u5f53\u7136 Mnist\u90a3\u6837\u7684\u5c0f\u578b\u6570\u636e\u96c6\u8fd8\u662f\u53ef\u4ee5\u7684\uff09"),Object(o.b)("p",null,"\u81ea\u884c\u7f16\u8bd1 ",Object(o.b)("inlineCode",{parentName:"p"},"Pytorch")," \u662f\u4e00\u4e2a\u5f88\u590d\u6742\u7684\u5de5\u4f5c\uff0c\u5982\u679c\u4f60\u60f3\u6311\u6218\u4e00\u4e0b\uff0c\u90a3\u5c31\u53ef\u4ee5\u53bb\u8bd5\u8bd5\uff0c\u5e94\u8be5\u975e\u5e38\u6709\u8da3"),Object(o.b)("p",null,"\u7f51\u4e0a\u5df2\u7ecf\u6709\u4e0d\u5c11\u4ee5\u53ca\u7f16\u8bd1\u597d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"whl")," \u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/PyTorch-Jetson-Nano"},"Qengineering/PyTorch-Jetson-Nano")))),Object(o.b)("p",null,"\u8fd9\u4e2a\u4ed3\u5e93\u91cc\u80fd\u627e\u5230\u975e\u5e38\u591a\u7684\u5305\uff0c\u80af\u5b9a\u6709\u9002\u5408\u7684\u7248\u672c\uff0c\u6211\u8fd9\u91cc\u9009\u62e9\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"Pytorch 1.10.0")," \uff0cpy\u7248\u672c\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"Python3.6.13")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"conda create -n pytorch-1.10.0 python=3.6\n")),Object(o.b)("p",null,"\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"conda")," \u73af\u5883\u540e\uff0c\u6309\u7167\u8fd9\u7bc7\u94fe\u63a5\u4e2d\u7684 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Installation by wheel."))," \u5b89\u88c5\u5373\u53ef"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://qengineering.eu/install-pytorch-on-jetson-nano.html"},"Install PyTorch on Jetson Nano.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev\npip3 install future\npip3 install -U --user wheel mock pillow\npip3 install testresources\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u66f4\u65b0 ",Object(o.b)("inlineCode",{parentName:"li"},"setuptools"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"pip3 install --upgrade setuptools\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"li"},"Cython"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"pip3 install Cython\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"li"},"gdown")," \u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"Google drive")," \u4e0a\u4e0b\u8f7d ",Object(o.b)("inlineCode",{parentName:"li"},"whl"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pip3 install gdown\ngdown https://drive.google.com/uc?id=1TqC6_2cwqiYacjoLhLgrZoap6-sVL2sd\n")),Object(o.b)("p",null,"::: tip \ud83d\udcbb\n\u8fd9\u91cc\u6700\u597d\u8bbe\u7f6e\u4e00\u4e0b\u4ee3\u7406\uff0c ",Object(o.b)("strong",{parentName:"p"},"pip")," \u8d70 ",Object(o.b)("strong",{parentName:"p"},"socks5")," \u7684\u65f6\u5019\u4f1a\u62a5\u9519\uff0c\u88c5\u597d ",Object(o.b)("strong",{parentName:"p"},"gdown")," \u4e4b\u540e\u5728\u8bbe\u7f6e\u4e00\u4e0b\uff0c\u7136\u540e\u5173\u6389\n:::"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"li"},"PyTorch 1.10.0"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pip3 install torch-1.10.0a0+git36449ea-cp36-cp36m-linux_aarch64.whl\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5\u540e\u5220\u9664 ",Object(o.b)("inlineCode",{parentName:"li"},"whl"),"\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b58\u7740\uff0c\u65b9\u4fbf\u4ee5\u540e\u4f7f\u7528")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"rm torch-1.10.0a0+git36449ea-cp36-cp36m-linux_aarch64.whl\n")),Object(o.b)("h3",{id:"export-openblas_coretypearmv8"},Object(o.b)("inlineCode",{parentName:"h3"},"export OPENBLAS_CORETYPE=ARMV8")),Object(o.b)("p",null,"\u6210\u529f\u5b89\u88c5\u540e\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"import torch")," \u65f6\u5374\u62a5\u9519\u4e86"),Object(o.b)("p",null,"!()","[https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/pytorch-Illegal-instruction.png]"),Object(o.b)("p",null,"\u5728\u7f51\u4e0a\u641c\u7d22\u540e\u5728 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/illegal-instruction-core-dumped-xavier/166278"},"\u201d Illegal instruction (core dumped)\u201d Xavier"))," \u4e2d\u627e\u5230\u4e86\u89e3\u51b3\u65b9\u6848"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"export OPENBLAS_CORETYPE=ARMV8\n")),Object(o.b)("p",null,"\u4e4b\u540e\u518d ",Object(o.b)("inlineCode",{parentName:"p"},"import torch")," \u5c31\u53ef\u4ee5\u4e86"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/pytorch-import-done.png",alt:null})),Object(o.b)("p",null,"\u4e5f\u53ef\u4ee5\u7f16\u8f91 ",Object(o.b)("inlineCode",{parentName:"p"},"~/.bashrc")," \u6587\u4ef6\uff0c\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"export OPENBLAS_CORETYPE=ARMV8")," \u5199\u5165\u5176\u4e2d\uff0c\u8fd9\u6837\u6bcf\u6b21\u542f\u52a8\u7ec8\u7aef\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"echo 'export OPENBLAS_CORETYPE=ARMV8' >> ~/.bashrc\n")),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://elinux.org/Jetson_Zoo"},"Jetson Zoo"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://qengineering.eu/install-pytorch-on-jetson-nano.html"},"Install PyTorch on Jetson Nano."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Qengineering/PyTorch-Jetson-Nano"},"Qengineering/PyTorch-Jetson-Nano"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://qiita.com/Nabeshin/items/da65eaa8c7feb66ad84c"},"Jetson Nano\u306ePython3\u74b0\u5883\u3067Illegal instruction (cpre dumped)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://forums.developer.nvidia.com/t/illegal-instruction-core-dumped-xavier/166278"},"\u201d Illegal instruction (core dumped)\u201d Xavier"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/numpy/numpy/issues/18131"},"Illegal instruction (core dumped) on import for numpy 1.19.5 on ARM64")))))}s.isMDXComponent=!0},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),b=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,j=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(j,c(c({ref:n},i),{},{components:t})):a.a.createElement(j,c({ref:n},i))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);