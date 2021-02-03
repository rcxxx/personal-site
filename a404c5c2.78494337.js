(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(146)),l={id:"yolov5-train",title:"\u7528 yolov5 \u8fdb\u884c\u5f00\u6e90\u6570\u636e\u96c6\u7684\u8bad\u7ec3",sidebar_label:"yolov5 \u8bad\u7ec3\u5f00\u6e90\u6570\u636e\u96c6"},b={unversionedId:"yolo/yolov5-train",id:"yolo/yolov5-train",isDocsHomePage:!1,title:"\u7528 yolov5 \u8fdb\u884c\u5f00\u6e90\u6570\u636e\u96c6\u7684\u8bad\u7ec3",description:"yolov5\u73af\u5883\u914d\u7f6e",source:"@site/docs/yolo/yolov5-train.md",slug:"/yolo/yolov5-train",permalink:"/docs/docs/yolo/yolov5-train",version:"current",sidebar_label:"yolov5 \u8bad\u7ec3\u5f00\u6e90\u6570\u636e\u96c6",sidebar:"Open-source-library",previous:{title:"yolov5 \u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/yolo/yolov5-start"}},c=[{value:"yolov5\u73af\u5883\u914d\u7f6e",id:"yolov5\u73af\u5883\u914d\u7f6e",children:[]},{value:"\u4e0b\u8f7d\u5f00\u6e90\u6570\u636e\u96c6",id:"\u4e0b\u8f7d\u5f00\u6e90\u6570\u636e\u96c6",children:[]},{value:"\u914d\u7f6e\u8bad\u7ec3\u53c2\u6570",id:"\u914d\u7f6e\u8bad\u7ec3\u53c2\u6570",children:[]},{value:"\u5f00\u59cb\u8bad\u7ec3",id:"\u5f00\u59cb\u8bad\u7ec3",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],i={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"yolov5\u73af\u5883\u914d\u7f6e"},"yolov5\u73af\u5883\u914d\u7f6e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://sinnammanyo.cn/docs/docs/yolo/yolov5-start"}),"\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc")))),Object(o.b)("h2",{id:"\u4e0b\u8f7d\u5f00\u6e90\u6570\u636e\u96c6"},"\u4e0b\u8f7d\u5f00\u6e90\u6570\u636e\u96c6"),Object(o.b)("p",null,"\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a\u7f51\u7ad9\uff0c\u4e0a\u9762\u6258\u7ba1\u4e86\u5f88\u591a\u5f00\u6e90\u7684\u6570\u636e\u96c6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://public.roboflow.com/"}),"public.roboflow")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/roboflow-ai"}),"roboflow \u7684 GitHub"))))),Object(o.b)("p",null,"\u8fd9\u91cc\u6211\u9009\u62e9\u4e0b\u8f7d ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://public.roboflow.com/object-detection/uno-cards/1"}),Object(o.b)("inlineCode",{parentName:"a"},"Uno Cards Dataset")))," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"v1")," \u7248\u672c"),Object(o.b)("p",null,"\u70b9\u51fb ",Object(o.b)("inlineCode",{parentName:"p"},"Download")," \u9009\u9879\u540e\uff0c\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"Format")," \u52fe\u9009\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"YOLO v5 PyTorch")," \u540e\u4e0b\u8f7d"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/uno-cards-dataset-download.png",alt:null}))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\ud83d\ude03")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u975e\u5e38\u611f\u8c22\u5f00\u6e90\u8fd9\u4e9b\u6570\u636e\u96c6\u7684\u8d21\u732e\u8005\u4eec\uff0c\u6709\u673a\u4f1a\u6211\u4e5f\u5e0c\u671b\u505a\u8fd9\u6837\u5f88\u9177\u7684\u4e8b"))),Object(o.b)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u5e76\u89e3\u538b\u540e\u5c06\u6587\u4ef6\u5939\u91cd\u547d\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Uno-Cards-Datasets")," \uff0c\u76ee\u5f55\u5982\u4e0b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Uno-Cards-Datasets/\n\u251c\u2500\u2500 train\n\u2502\xa0\xa0 \u251c\u2500\u2500 images\n\u2502\xa0\xa0 \u2514\u2500\u2500 labels\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u251c\u2500\u2500 images\n\u2502\xa0\xa0 \u2514\u2500\u2500 labels\n\u251c\u2500\u2500 valid\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2514\u2500\u2500 labels\n\u251c\u2500\u2500 data.yaml\n\u2514\u2500\u2500 \xb7\xb7\xb7\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"train/")," \u76ee\u5f55\u4e2d\u5b58\u653e\u7528\u6765\u505a\u8bad\u7ec3\u96c6\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"label")," \u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"test/")," \u76ee\u5f55\u4e2d\u5b58\u653e\u7528\u6765\u505a\u6d4b\u8bd5\u96c6\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"label")," \u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"valid/")," \u76ee\u5f55\u4e2d\u5b58\u653e\u7528\u6765\u505a\u9a8c\u8bc1\u96c6\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"label")," \u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data.yaml")," \u6587\u4ef6\u7528\u6765\u6574\u7406\u6570\u636e\u96c6\u4e2d ",Object(o.b)("inlineCode",{parentName:"li"},"label")," \u7684\u7c7b\u522b")),Object(o.b)("h2",{id:"\u914d\u7f6e\u8bad\u7ec3\u53c2\u6570"},"\u914d\u7f6e\u8bad\u7ec3\u53c2\u6570"),Object(o.b)("p",null,"\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"Uno-Cards-Datasets/")," \u6574\u4e2a\u76ee\u5f55\u590d\u5236\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"yolov5-master")," \u7684\u6839\u76ee\u5f55\u4e0b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"strong"},"Uno-Cards-Datasets/data.yaml")," \u6587\u4ef6\u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"train")," \u548c ",Object(o.b)("inlineCode",{parentName:"strong"},"val")," \u8def\u5f84")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="data.yaml"',title:'"data.yaml"'}),"train: ../Uno-Cards-Datasets/train/images\nval: ../Uno-Cards-Datasets/valid/images\n\nnc: 15\nnames: ['0', '1', '10', '11', '12', '13', '14', '2', '3', '4', '5', '6', '7', '8', '9']\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"strong"},"models/yolov5s.yaml")," \u6587\u4ef6\u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"nc")," \u6539\u4e3a\u548c ",Object(o.b)("inlineCode",{parentName:"strong"},"Uno-Cards-Datasets/data.yaml")," \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"nc")," \u4e00\u6837\u7684\u503c")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="yolov5s.yaml"',title:'"yolov5s.yaml"'}),"# parameters\nnc: 15  # number of classes\n    \xb7\xb7\xb7\n")),Object(o.b)("h2",{id:"\u5f00\u59cb\u8bad\u7ec3"},"\u5f00\u59cb\u8bad\u7ec3"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"yolov5-master/"),"\u76ee\u5f55\u4e0b\u6253\u5f00\u7ec8\u7aef\uff0c\u6fc0\u6d3b\u5bf9\u5e94\u7684\u865a\u62df\u73af\u5883"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="train yolov5s"',title:'"train','yolov5s"':!0}),"source activate yolov5\npython train.py --img 640 --batch 16 --epochs 300 --data Uno-Cards-Datasets/data.yaml --cfg models/yolov5s.yaml --weights ''\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5-train-uno.png",alt:null}))),Object(o.b)("p",null,"\u5f00\u59cb\u8bad\u7ec3\uff0cGPU\u5360\u7528\u5df2\u7ecf\u5feb\u88c2\u5f00\u4e86"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u6f2b\u957f\u7684\u7b49\u5f85\xb7\xb7\xb7\xb7\xb7\xb7"),Object(o.b)("p",null,"\u6211\u7684GPU\u8bad\u7ec3\u901f\u5ea6\u662f\u6bd4\u8f83\u6162\u7684\uff0c\u5927\u6982\u82b1\u4e8630\u591a\u4e2a\u5c0f\u65f6\u5b8c\u6210\u8fd9\u4e2a\u6570\u636e\u96c6\u7684\u8bad\u7ec3"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5-train-uno-finish.png",alt:null}))),Object(o.b)("p",null,"\u8bad\u7ec3\u5b8c\u6210\u4e4b\u540e\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"runs/train/exp/weights/")," \u76ee\u5f55\u4e0b\u8f93\u51fa\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"best.pt")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"last.pt")," \u4e24\u4e2a\u6743\u91cd\u6587\u4ef6"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"best.pt")," \u6765\u6d4b\u8bd5\u4e00\u4e0b\u8bad\u7ec3\u7684\u6548\u679c"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"python detect.py --source Uno-Cards-Datasets/test/images/000090623_jpg.rf.f7accf08c83af2398c4837f2f731707a.jpg --weights runs/train/exp/weights/best.pt --conf 0.25\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--source")," \u53c2\u6570\u540e\u9762\u4fee\u6539\u4e3a\u8f93\u5165\u7684\u6d4b\u8bd5\u56fe\u7247\u6216\u76ee\u5f55"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--weights")," \u53c2\u6570\u540e\u9762\u4fee\u6539\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"runs/train/exp/weights/best.pt "))),Object(o.b)("p",null,"\u4e4b\u540e\u5c31\u4f1a\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"runs/detect/exp")," \u76ee\u5f55\u4e2d\u751f\u6210\u8bad\u7ec3\u597d\u7684\u7ed3\u679c\uff0c\u5177\u4f53\u8def\u5f84\u4ee5\u7ec8\u7aef\u8f93\u51fa\u7684\u4e3a\u51c6"),Object(o.b)("p",null,"\u6765\u770b\u770b\u6d4b\u8bd5\u7684\u7ed3\u679c"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/000090623_jpg.rf.f7accf08c83af2398c4837f2f731707a.jpg",alt:null}))),Object(o.b)("p",null,"\u56fe\u4e2d\u7684\u4e09\u5f20 UNO \u5361\u7247\u90fd\u6210\u529f\u7684\u88ab\u68c0\u6d4b\u51fa\u6765\uff0c\u5e76\u4e14\u6709\u8f83\u9ad8\u7684\u7f6e\u4fe1\u5ea6"),Object(o.b)("p",null,"\u7136\u540e\u6211\u4eec\u5c1d\u8bd5\u7740\u4ece\u76f8\u673a\u83b7\u53d6\u56fe\u50cf\u5e76\u4e14\u52a8\u6001\u7684\u68c0\u6d4b UNO \u5361\u7247"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"python detect.py --source 0 --weights runs/train/exp/weights/best.pt\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--source 0")," \u53c2\u6570\u8868\u793a\u6253\u5f00\u672c\u5730\u6444\u50cf\u5934")),Object(o.b)("p",null,"\u6765\u770b\u770b\u6548\u679c"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5-UNO-camera.png",alt:null}))),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://blog.roboflow.com/improving-uno-with-computer-vision/"}),"Improving Uno with Computer Vision (Plus the Dataset so You Can Too)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://xugaoxiang.com/2020/07/02/yolov5-training/"}),"YOLOv5\u6a21\u578b\u8bad\u7ec3"))))))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);