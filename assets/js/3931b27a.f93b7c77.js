"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6816],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),o=a(67294),l=a(86010),r=a(72389),c=a(67392),s=a(7094),i=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:r,values:m,groupId:d,className:v}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,c.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===r?r:r??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,s.U)(),[N,g]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=d){const e=f[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&g(e)}const K=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==N&&(T(t),g(n),null!=d&&w(d,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":K(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},v)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:E,onClick:K},r,{className:(0,l.Z)("tabs__item",p,r?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,r.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}},409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),l=(a(44212),a(65488)),r=a(85162);const c={id:"opencv-waitKey",title:"",sidebar_label:"waitKey()"},s=void 0,i={unversionedId:"computer/cv/opencv/common-method/opencv-waitKey",id:"computer/cv/opencv/common-method/opencv-waitKey",title:"",description:"OpenCV \u5ef6\u8fdf\u64cd\u4f5c waitKey()",source:"@site/docs/computer/cv/opencv/common-method/waitKey.md",sourceDirName:"computer/cv/opencv/common-method",slug:"/computer/cv/opencv/common-method/opencv-waitKey",permalink:"/personal-site/docs/computer/cv/opencv/common-method/opencv-waitKey",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/opencv/common-method/waitKey.md",tags:[],version:"current",frontMatter:{id:"opencv-waitKey",title:"",sidebar_label:"waitKey()"},sidebar:"\ud83d\udc40CV",previous:{title:"\u50cf\u7d20\u7684\u90bb\u57df",permalink:"/personal-site/docs/computer/cv/opencv/opencv-pixel-connect"},next:{title:"ROI\u64cd\u4f5c",permalink:"/personal-site/docs/computer/cv/opencv/common-method/opencv-roi"}},u={},p=[{value:"OpenCV \u5ef6\u8fdf\u64cd\u4f5c waitKey()",id:"opencv-\u5ef6\u8fdf\u64cd\u4f5c-waitkey",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"opencv-\u5ef6\u8fdf\u64cd\u4f5c-waitkey"},"OpenCV \u5ef6\u8fdf\u64cd\u4f5c waitKey()"),(0,o.kt)("p",null,"\u7ecf\u5178\u64cd\u4f5c"),(0,o.kt)(l.Z,{defaultValue:"cc",values:[{label:"C++",value:"cc"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"cc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"while(1) {\n    int key = waitKey(1);\n    if (char(key) == 27){\n        break;\n    }  \n}\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"while True:\n    key = cv2.waitKey(1)\n    if key == 27:\n        break\n")))),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},'"27"')," \u5bf9\u5e94\u7684\u662f\u952e\u76d8\u5bf9\u5e94\u6309\u952e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ACSII")," \u7801\u503c\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"27")," \u5bf9\u5e94\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"ESC")," \u952e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/qq_34806812/article/details/83154005"},"\u952e\u76d8\u6240\u6709\u6309\u952e\u5bf9\u5e94\u7684ASCII\u7801\u503c\uff08\u952e\u7801\u503c\uff09")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u6309\u952e\u4ea4\u4e92")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int key = waitKey(0);\nswitch (key)\n{\n    case 't':\n    case 'T':\n    {\n        // code\n    }\n    break;\n    case 'f':\n    case 'F':\n    {\n        // code\n    } break;\n    case 'r':\n    case 'R':\n    {\n        // code\n    } break;\n    case 'c':\n    case 'C':\n    {\n        // code\n    } break;\n    case 27:\n    {   \n        // code\n    } break;\n}\n")))}d.isMDXComponent=!0}}]);