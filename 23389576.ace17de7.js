(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||c;return a?r.a.createElement(d,l(l({ref:t},b),{},{components:a})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},101:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},107:function(e,t,a){"use strict";var n=a(0),r=a(108);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(107),o=a(101),l=a(53),i=a.n(l),b=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.children,s=e.defaultValue,p=e.values,m=e.groupId,d=e.className,O=Object(c.a)(),f=O.tabGroupChoices,j=O.setTabGroupChoices,g=Object(n.useState)(s),h=g[0],v=g[1];if(null!=m){var N=f[m];null!=N&&N!==h&&p.some((function(e){return e.value===N}))&&v(N)}var y=function(e){v(e),null!=m&&j(m,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(l.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},114:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"Highlight",(function(){return u})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(100)),o=a(113),l=a(114),i={id:"about-write",title:"\u98ce\u683c\u6307\u5317",sidebar_label:"\u7f16\u8f91"},b={unversionedId:"about-write",id:"about-write",isDocsHomePage:!1,title:"\u98ce\u683c\u6307\u5317",description:"Docusaurus \u98ce\u683c\u6307\u5317",source:"@site/docs/about-write.md",slug:"/about-write",permalink:"/docs/docs/about-write",version:"current",sidebar_label:"\u7f16\u8f91",sidebar:"someSidebar",previous:{title:"\u5c06 Docusaurus \u90e8\u7f72\u5230 GitHub Pages",permalink:"/docs/docs/about-deploy"}},u=function(e){var t=e.children,a=e.color;return Object(c.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s=[{value:"Code",id:"code",children:[]},{value:"MDX",id:"mdx",children:[]}],p={Highlight:u,rightToc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"docusaurus-\u98ce\u683c\u6307\u5317"},"Docusaurus \u98ce\u683c\u6307\u5317"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8be6\u89c1\u8fd9\u7bc7",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/docs/markdown-features"}),"\u5b98\u7f51\u6587\u6863"),"\u2014\u2014 \u82f1\u6587"),Object(c.b)("li",{parentName:"ul"},"\u57fa\u672c\u8bed\u6cd5\u4e0e ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"markdown"))," \u76f8\u4f3c"),Object(c.b)("li",{parentName:"ul"},"\u6211\u4e0b\u9762\u7684\u5185\u5bb9\u4e5f\u77e5\u8bc6\u4e00\u4e9b\u81ea\u5df1\u7684\u603b\u7ed3\uff0c\u4e0e\u6587\u6863\u4e2d\u6ca1\u6709\u533a\u522b")),Object(c.b)("h2",{id:"code"},"Code"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7801\u7247\u6bb5\u9ad8\u4eae\uff0c\u8bed\u6cd5\u5982\u4e0b",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"    ```js {2}\n    function highlightMe() {\n    console.log('This line can be highlighted!');\n    }\n    ```\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6548\u679c",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"function highlightMe() {\nconsole.log('This line can be highlighted!');\n}\n"))),Object(c.b)("li",{parentName:"ul"},"\u60f3\u9ad8\u4eae\u591a\u884c\u53ef\u5c06 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"{2}"))," \u6539\u4e3a ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"{1-3}")),"\uff0c\u5373\u53ef\u591a\u884c\u9ad8\u4eae")))),Object(c.b)("h2",{id:"mdx"},"MDX"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"MDX"))," \u662f\u4e00\u79cd\u53ef\u7f16\u8f91\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u5728 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"Markdown"))," \u6587\u6863\u4e2d\u65e0\u7f1d\u7f16\u5199 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"JSX"))),Object(c.b)("li",{parentName:"ul"},"\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770b\u8fd9\u7bc7",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://mdxjs.com/"}),"\u6587\u6863\ud83d\udc48"),"\uff0c\u4e5f\u53ef\u4ee5\u5728 ",Object(c.b)("strong",{parentName:"li"},"YouTube")," \u89c2\u770b\u76f8\u5173",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=d2sQiI5NFAM&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u"}),"\u89c6\u9891\ud83d\udcf7")),Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e9b\u7b80\u5355\u7684\u793a\u4f8b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"Markdown"))," \u6dfb\u52a0\u5982\u4e0b\u8bed\u53e5",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export const Highlight = ({children, color}) => ( <span style={{\n    backgroundColor: color,\n    borderRadius: '2px',\n    color: '#fff',\n    padding: '0.2rem',\n    }}>{children}</span> );\n"))),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u65f6\u5982\u4e0b",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),'<Highlight color="#25c2a0">Docusaurus green</Highlight>\n')))))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6700\u7ec8\u6548\u679c\ud83d\udc49",Object(c.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green"),"\ud83d\udc48")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Tabs"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u52a0\u5165\u5982\u4e0b\u5185\u5bb9"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\ndefaultValue=\"apple\"\nvalues={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n]}>\n<TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n<TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n<TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6548\u679c\ud83d\udc47"))))),Object(c.b)(o.a,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(c.b)(l.a,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(c.b)(l.a,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}m.isMDXComponent=!0}}]);