(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{162:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),y=n,m=b["".concat(a,".").concat(y)]||b[y]||s[y]||c;return r?o.a.createElement(m,p(p({ref:t},l),{},{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(162)),a={id:"about-pytorch",title:"\u4ec0\u4e48\u662fPyTorch",sidebar_label:"\u7b80\u5355\u4e86\u89e3"},p={unversionedId:"pytorch/about-pytorch",id:"pytorch/about-pytorch",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662fPyTorch",description:"PyTorch\u662f\u7531Facebook\u63a8\u51fa\u7684\u57fa\u4e8eTorch\u7684\u5f00\u6e90\u673a\u5668\u5b66\u4e60\u5e93",source:"@site/docs/pytorch/about-pytorch.md",slug:"/pytorch/about-pytorch",permalink:"/docs/docs/pytorch/about-pytorch",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/pytorch/about-pytorch.md",version:"current",sidebar_label:"\u7b80\u5355\u4e86\u89e3",sidebar:"Open-source-library",previous:{title:"\u76f4\u65b9\u56fe\u5747\u8861\u5316 cv::equalizeHist()",permalink:"/docs/docs/opencv/opencv-equalizeHist"},next:{title:"PyTorch\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/pytorch/pytorch-install"}},i=[],l={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"PyTorch\u662f\u7531Facebook\u63a8\u51fa\u7684\u57fa\u4e8eTorch\u7684\u5f00\u6e90\u673a\u5668\u5b66\u4e60\u5e93"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",{parentName:"strong",href:"https://pytorch.org/"},"PyTorch\u5b98\u7f51")))),Object(c.b)("p",null,"PyTorch\u6709\u5b8c\u5584\u7684\u6587\u6863\u548c\u793e\u533a\u652f\u6301\uff0c\u4e0a\u624b\u5f88\u5feb"),Object(c.b)("p",null,"\u63a8\u8350\u4e00\u4e9b\u5b98\u7f51\u4e0a\u6709\u8da3\u7684\u4f8b\u5b50"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"https://pytorch.org/tutorials/intermediate/mario_rl_tutorial.html"},"TRAIN A MARIO-PLAYING RL AGENT"))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u4f8b\u5b50\u662f\u8bad\u7ec3\u4e00\u4e2aAI\u6765\u73a9\u9a6c\u91cc\u5965"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html"},"DCGAN TUTORIAL"))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u662f\u7528AI\u81ea\u52a8\u751f\u6210\u4eba\u8138\u7684\u56fe\u7247")))))}u.isMDXComponent=!0}}]);