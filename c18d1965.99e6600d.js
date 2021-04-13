(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Highlight",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),a=(n(0),n(162)),o={id:"pytorch-install",title:"PyTorch\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install"},i={unversionedId:"pytorch/pytorch-install",id:"pytorch/pytorch-install",isDocsHomePage:!1,title:"PyTorch\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"\u5173\u4e8ePyTorch",source:"@site/docs/pytorch/pytorch-install.md",slug:"/pytorch/pytorch-install",permalink:"/docs/docs/pytorch/pytorch-install",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/pytorch/pytorch-install.md",version:"current",sidebar_label:"Install",sidebar:"Open-source-library",previous:{title:"\u4ec0\u4e48\u662fPyTorch",permalink:"/docs/docs/pytorch/about-pytorch"},next:{title:"yolov5 \u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/yolo/yolov5-start"}},l=[{value:"\u5173\u4e8ePyTorch",id:"\u5173\u4e8epytorch",children:[]},{value:"\u5b89\u88c5\u524d\u51c6\u5907",id:"\u5b89\u88c5\u524d\u51c6\u5907",children:[{value:'<Highlight color="#33FFCC">\u63a8\u8350</Highlight>Anaconda',id:"highlight-color33ffcc\u63a8\u8350highlightanaconda",children:[]},{value:'<Highlight color="#FFCC33">\u53ef\u9009</Highlight>CUDA',id:"highlight-colorffcc33\u53ef\u9009highlightcuda",children:[]}]},{value:"\u6b63\u5f0f\u5b89\u88c5",id:"\u6b63\u5f0f\u5b89\u88c5",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"Black",padding:"0.2rem"}},t)},b={toc:l,Highlight:p};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5173\u4e8epytorch"},"\u5173\u4e8ePyTorch"),Object(a.b)("h2",{id:"\u5b89\u88c5\u524d\u51c6\u5907"},"\u5b89\u88c5\u524d\u51c6\u5907"),Object(a.b)("p",null,"\u5148\u9605\u8bfb",Object(a.b)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"\u5b98\u65b9\u6587\u6863")),Object(a.b)("p",null,"\u786e\u5b9a\u597d\u81ea\u5df1\u6240\u9700\u8981\u5b89\u88c5\u7684\u7248\u672c\u4ee5\u53ca\u6240\u9700\u8981\u51c6\u5907\u7684\u5de5\u5177\n",Object(a.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pytorch-install-01.png",alt:null})),Object(a.b)("p",null,"\u672c\u6587\u6863\u6240\u4f7f\u7528\u7cfb\u7edf\u7248\u672c\u4e3aUbuntu18.04.05LTS"),Object(a.b)("p",null,"GPU\u76f8\u5173\u53c2\u6570\u5982\u56fe GPU\u4e3a GTX1660ti\n",Object(a.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/nvidia-smi.png",alt:null})),Object(a.b)("h3",{id:"highlight-color33ffcc\u63a8\u8350highlightanaconda"},"[",Object(a.b)(p,{color:"#33FFCC",mdxType:"Highlight"},"\u63a8\u8350"),"]","Anaconda"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),":-)")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Anaconda\u80fd\u5f88\u65b9\u4fbf\u7684\u7ba1\u7406\u865a\u62df\u73af\u5883\uff0c\u89e3\u51b3\u5404\u79cd\u4f9d\u8d56\u7684\u51b2\u7a81"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.anaconda.com/"},"Anaconda\u5b98\u7f51"))),Object(a.b)("p",null,"\u4e00\u8def\u5b89\u88c5\u5b8c\u6210\u5373\u53ef"),Object(a.b)("h3",{id:"highlight-colorffcc33\u53ef\u9009highlightcuda"},"[",Object(a.b)(p,{color:"#FFCC33",mdxType:"Highlight"},"\u53ef\u9009"),"]","CUDA"),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\u5b89\u88c5CUDA\u9700\u8981NVIDIA\u7684GPU\u5e76\u4e14\u5b89\u88c5\u597d\u663e\u5361\u9a71\u52a8"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.nvidia.com/cuda-toolkit-archive"},"CUDA"))),Object(a.b)("p",null,"\u53ef\u4ee5\u6839\u636e\u6240\u9009PyTorch\u5bf9\u5e94\u7684CUDA\u7248\u672c\u8fdb\u884c\u5b89\u88c5"),Object(a.b)("p",null,"\u5efa\u8bae\u4e0b\u8f7d\u672c\u5730deb\u5305\u5b89\u88c5\uff0c\u5c3d\u91cf\u79d1\u5b66\u4e0a\u7f51\uff0c\u4e0d\u7136\u53ef\u80fd\u4f1a\u56e0\u4e3a\u7f51\u7edc\u95ee\u9898\u4e0b\u8f7d\u5931\u8d25"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u95ee\u9898\u53ef\u4ee5\u67e5\u9605",Object(a.b)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/archive/10.2/"},"\u5b98\u65b9\u6587\u6863"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://developer.nvidia.com/rdp/cudnn-download"},"CUDNN")))),Object(a.b)("p",null,"\u6839\u636e\u76f8\u5e94\u7684CUDA\u7248\u672c\u9009\u62e9\u5b89\u88c5"),Object(a.b)("h2",{id:"\u6b63\u5f0f\u5b89\u88c5"},"\u6b63\u5f0f\u5b89\u88c5"),Object(a.b)("p",null,"\u6839\u636e\u6240\u51c6\u5907\u7684\u9009\u62e9\u76f8\u5bf9\u5e94\u7684\u9009\u9879"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/pytorch-install-02.png",alt:null})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"conda create -n pytorch-gpu python==3.8\nsource activate pytorch-gpu\nconda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch\n")))}u.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||h[d]||a;return n?c.a.createElement(s,i(i({ref:t},p),{},{components:n})):c.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);