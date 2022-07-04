"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1879],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,u=function(t,e){if(null==t)return{};var n,r,u={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(u[n]=t[n]);return u}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,u=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),b=i(n),m=u,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(d,a(a({ref:e},l),{},{components:n})):r.createElement(d,a({ref:e},l))}));function m(t,e){var n=arguments,u=e&&e.mdxType;if("string"==typeof t||u){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:u,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81204:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(87462),u=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"ubuntu-18-04-obs",title:"Ubuntu-18.04 Install OBS",sidebar_label:"Install OBS"},c=void 0,i={unversionedId:"computer/pc/system/linux/ubuntu/ubuntu-18-04-obs",id:"computer/pc/system/linux/ubuntu/ubuntu-18-04-obs",title:"Ubuntu-18.04 Install OBS",description:"OBS",source:"@site/docs/computer/pc/system/linux/ubuntu/ubuntu-18-04-obs.md",sourceDirName:"computer/pc/system/linux/ubuntu",slug:"/computer/pc/system/linux/ubuntu/ubuntu-18-04-obs",permalink:"/personal-site/docs/computer/pc/system/linux/ubuntu/ubuntu-18-04-obs",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/pc/system/linux/ubuntu/ubuntu-18-04-obs.md",tags:[],version:"current",frontMatter:{id:"ubuntu-18-04-obs",title:"Ubuntu-18.04 Install OBS",sidebar_label:"Install OBS"},sidebar:"\ud83d\udda5\ufe0fPC",previous:{title:"\u4fee\u590d grub \u5f15\u5bfc",permalink:"/personal-site/docs/computer/pc/system/linux/ubuntu/try-ubuntu-fix-grub"},next:{title:"\u81ea\u542f\u52a8\u811a\u672c",permalink:"/personal-site/docs/computer/pc/system/linux/ubuntu/ubuntu-18-04-starting-script"}},l={},p=[{value:"OBS",id:"obs",level:2},{value:"Install",id:"install",level:3}],b={toc:p};function m(t){var e=t.components,n=(0,u.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"obs"},"OBS"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Free and open source software for video recording and live streaming."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://obsproject.com/"},"Open Broadcaster Software | OBS"))))),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install ffmpeg\nsudo apt install v4l2loopback-dkms\nsudo add-apt-repository ppa:obsproject/obs-studio\nsudo apt update\nsudo apt install obs-studio\n")))}m.isMDXComponent=!0}}]);