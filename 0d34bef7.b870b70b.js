(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return n?r.a.createElement(d,b(b({ref:t},l),{},{components:n})):r.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},167:function(e,t,n){"use strict";var a=n(0),r=n(168);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},168:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(167),o=n(163),b=n(55),i=n.n(b),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,b=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(c.a)(),j=d.tabGroupChoices,O=d.setTabGroupChoices,g=Object(a.useState)(b),f=g[0],N=g[1],h=a.Children.toArray(e.children);if(null!=p){var v=j[p];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&N(v)}var y=function(e){N(e),null!=p&&O(p,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(162)),o=n(172),b=n(173),i={id:"about-build",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u77e5\u8bc6\u5e93",sidebar_label:"\u642d\u5efa"},l={unversionedId:"about-build",id:"about-build",isDocsHomePage:!1,title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u77e5\u8bc6\u5e93",description:"Docusaurus \u7b80\u4ecb",source:"@site/docs/about-build.md",slug:"/about-build",permalink:"/docs/docs/about-build",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/about-build.md",version:"current",sidebar_label:"\u642d\u5efa",sidebar:"readme",previous:{title:"\ud83c\udf08\u6b22\u8fce\u8bbf\u95ee\u6211\u7684\u77e5\u8bc6\u5e93",permalink:"/docs/docs/"},next:{title:"\u5c06 Docusaurus \u90e8\u7f72\u5230 GitHub Pages",permalink:"/docs/docs/about-deploy"}},s=[{value:"Docusaurus \u7b80\u4ecb",id:"docusaurus-\u7b80\u4ecb",children:[]},{value:"\u5b89\u88c5Docusaurus",id:"\u5b89\u88c5docusaurus",children:[]},{value:"\u6211\u7684\u5b89\u88c5\u548c\u914d\u7f6e",id:"\u6211\u7684\u5b89\u88c5\u548c\u914d\u7f6e",children:[{value:"\u5b89\u88c5\u6240\u9700\u73af\u5883",id:"\u5b89\u88c5\u6240\u9700\u73af\u5883",children:[]},{value:"\u521b\u5efa\u7ad9\u70b9",id:"\u521b\u5efa\u7ad9\u70b9",children:[]},{value:"\u8fd0\u884c\u7ad9\u70b9",id:"\u8fd0\u884c\u7ad9\u70b9",children:[]},{value:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f",id:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f",children:[]},{value:"\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230GitHub",id:"\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230github",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"docusaurus-\u7b80\u4ecb"},"Docusaurus \u7b80\u4ecb"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Docusaurus"))," \u662f\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u652f\u6301\u7528 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"jsx"))," \u8bed\u6cd5\u7684 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"markdown"))," \uff0c\u65e0\u7f1d\u7ed3\u5408 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"React")),", \u53ef\u4ee5\u5f15\u5165\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6"),Object(c.b)("h2",{id:"\u5b89\u88c5docusaurus"},"\u5b89\u88c5Docusaurus"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"Docusaurus"))," ",Object(c.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/"},"\u5b98\u65b9\u6587\u6863")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"Docusaurus"))," ",Object(c.b)("a",{parentName:"li",href:"https://www.docusaurus.cn/docs/"},"\u5b98\u65b9\u4e2d\u6587\u6587\u6863"))),Object(c.b)("p",null,"\u6587\u6863\u4e2d\u6709\u8be6\u7ec6\u7684\u5b89\u88c5\u6d41\u7a0b\uff0c\u4ee5\u53ca\u914d\u7f6e\u6d41\u7a0b\uff0c\u5efa\u8bae\u4ee5\u5b98\u65b9\u6587\u6863\u4e3a\u51c6"),Object(c.b)("h2",{id:"\u6211\u7684\u5b89\u88c5\u548c\u914d\u7f6e"},"\u6211\u7684\u5b89\u88c5\u548c\u914d\u7f6e"),Object(c.b)("p",null,"\u6211\u6240\u7528\u7cfb\u7edf\u662f ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Windows"))," \uff0c\u5982\u679c\u662f ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Linux"))," \u6216\u662f ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Mac"))," \u7528\u6237\uff0c\u5efa\u8bae\u5bf9\u6bd4\u5176\u4ed6\u6559\u7a0b\u8fdb\u884c\u5b89\u88c5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5b89\u88c5\u6b65\u9aa4\u53ef\u80fd\u6709\u533a\u522b\u5916\uff0c\u914d\u7f6e\u90e8\u5206\u5e94\u8be5\u662f\u4e00\u6837\u7684")),Object(c.b)("h3",{id:"\u5b89\u88c5\u6240\u9700\u73af\u5883"},"\u5b89\u88c5\u6240\u9700\u73af\u5883"),Object(c.b)("h4",{id:"nodejs--10151"},"nodejs >= 10.15.1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"nodejs\u4e0b\u8f7d"))),Object(c.b)("h4",{id:"yarn--15"},"yarn >= 1.5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"yarn\u4e0b\u8f7d"))),Object(c.b)("h3",{id:"\u521b\u5efa\u7ad9\u70b9"},"\u521b\u5efa\u7ad9\u70b9"),Object(c.b)("p",null,"\u5b89\u88c5Docusaurus\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u8be5\u5de5\u5177\u4f1a\u642d\u5efaDocusaurus\u7f51\u7ad9\u9aa8\u67b6\u3002\u5728\u65b0\u7684\u7a7a\u5b58\u50a8\u5e93\u4e2d\u6216\u73b0\u6709\u5b58\u50a8\u5e93\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u652f\u67b6\u6587\u4ef6\u7684\u65b0\u76ee\u5f55"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"npx @docusaurus/init@latest init [name] [template]"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"[name]"))," \u4e3a\u4f60\u60f3\u8981\u521b\u5efa\u7684\u76ee\u5f55 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"[template]"))," \u4e3a\u4f60\u60f3\u8981\u7528\u7684\u6a21\u677f")),Object(c.b)("p",null,"\u4f8b\u5982"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"npx @docusaurus/init@latest init my-website classic"))),Object(c.b)("li",{parentName:"ul"},"\u8fd9\u91cc ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"[template]"))," \u9009\u62e9\u4f7f\u7528 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"classic"))," \u6a21\u677f\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"facebook")),"\u3001",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"bootstrap"))," \u7b49\u6a21\u677f")),Object(c.b)("h3",{id:"\u8fd0\u884c\u7ad9\u70b9"},"\u8fd0\u884c\u7ad9\u70b9"),Object(c.b)("p",null,"\u8981\u5728\u7f16\u8f91\u6587\u4ef6\u65f6\u9884\u89c8\u66f4\u6539\uff0c\u53ef\u4ee5\u8fd0\u884c\u672c\u5730\u670d\u52a1"),Object(c.b)(o.a,{defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n"))),Object(c.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nyarn run start\n")))),Object(c.b)("p",null,"\u4e4b\u540e\u4f1a\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5730\u5740\u4e3a ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"http://localhost:3000"))," \u7684\u9875\u9762\uff0c\u6b63\u5e38\u7684\u8bdd\u5219\u5b89\u88c5\u5b8c\u6210"),Object(c.b)("h3",{id:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f"},"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f"),Object(c.b)("h4",{id:"\u5c06\u7ad9\u70b9\u914d\u7f6e\u4e3a\u77e5\u8bc6\u5e93"},"\u5c06\u7ad9\u70b9\u914d\u7f6e\u4e3a\u77e5\u8bc6\u5e93"),Object(c.b)("p",null,"\u7531\u4e8e\u6211\u53ea\u662f\u60f3\u642d\u5efa\u4e2a\u4eba\u77e5\u8bc6\u5e93\uff0c\u56e0\u4e3a\u5df2\u7ecf\u642d\u5efa\u597d\u4e86",Object(c.b)("a",{parentName:"p",href:"https://sinnammanyo.cn/"},"\u4e2a\u4eba\u535a\u5ba2"),"\uff0c\u6240\u4ee5 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"docusaurus.config.js"))," \u4e2d\u7684 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"presets"))," \u88ab\u6211\u8bbe\u7f6e\u6210\u8fd9\u6837"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"presets: [\n  [\n    '@docusaurus/preset-classic',\n    {\n      docs: {\n        path: \"./docs\",\n        routeBasePath: \"/docs\",\n        sidebarPath: require.resolve('./sidebars.js'),\n      },\n      theme: {\n        customCss: require.resolve('./src/css/custom.css'),\n      },\n    },\n  ],\n],\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5220\u9664\u4e86 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"blog"))," \u9875\u9762\uff0c\u53ea\u4fdd\u7559 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"Docs")))),Object(c.b)("p",null,"\u53bb\u6389\u9876\u90e8\u5bfc\u822a\u680f\u7684 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"blog"))," ,\u627e\u5230 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"navbar")),"\uff0c\u6ce8\u91ca\u6216\u8005\u5220\u6389 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"{to: 'blog', label: 'Blog', position: 'left'},"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {10}',title:'"docusaurus.config.js"',"{10}":!0},"navbar: {\n  title: \"Rcxxx's Notes\",\n  items: [\n    {\n      to: 'docs/',\n      activeBasePath: 'docs',\n      label: 'Docs',\n      position: 'left',\n    },\n    // {to: 'blog', label: 'Blog', position: 'left'},\n    {\n      href: 'https://github.com/rcxxx/my-learning-notes',\n      label: 'GitHub',\n      position: 'right',\n    },\n  ],\n},\n")),Object(c.b)("h4",{id:"\u4fee\u6539\u4e00\u4e9b\u7ad9\u70b9\u7684\u6807\u7b7e"},"\u4fee\u6539\u4e00\u4e9b\u7ad9\u70b9\u7684\u6807\u7b7e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"navbar"))," \u680f\u4e2d\u4e5f\u6709\u4e00\u4e9b\u5c5e\u6027\u9700\u8981\u8bbe\u7f6e",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"title"))," \u9875\u9762\u5de6\u4e0a\u89d2\u7684\u6807\u9898 \u2014\u2014 \u53ef\u4ee5\u8bbe\u7f6elogo\uff0c\u5177\u4f53\u89c1",Object(c.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/theme-classic"},"\u6587\u6863")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"href"))," \u53f3\u4e0a\u89d2 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"GitHub"))," \u4e2d\u7684\u94fe\u63a5\u4ee5\u53ca\u6807\u7b7e \u2014\u2014 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"items"))," \u4e2d\u53ef\u4ee5\u81ea\u5df1\u6dfb\u52a0\u60f3\u8981\u7684\u6807\u7b7e"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"footer"))," \u4e2d\u914d\u7f6e\u9875\u811a"),Object(c.b)("li",{parentName:"ul"},"\u66f4\u591a\u4e2a\u6027\u5316\u7684\u914d\u7f6e\u53ef\u4ee5\u6839\u636e\u6587\u6863\u8fdb\u884c\u914d\u7f6e"),Object(c.b)("li",{parentName:"ul"},"\u7b80\u6d01\u81f3\u4e0a")),Object(c.b)("h3",{id:"\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230github"},Object(c.b)("a",{parentName:"h3",href:"https://sinnammanyo.cn/WikiByRcxxx/docs/about-deploy"},"\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230GitHub")),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.zxuqian.cn/deploy-a-docusaurus-site"},"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2"))))}p.isMDXComponent=!0}}]);