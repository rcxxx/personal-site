"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5589],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(n),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],u={id:"doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",sidebar_label:"Ubuntu20.04 Install"},l=void 0,i={unversionedId:"computer/pc/docker/doker-ubuntu20-install",id:"computer/pc/docker/doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",description:"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key",source:"@site/docs/computer/pc/docker/ubuntu20-doker-install.md",sourceDirName:"computer/pc/docker",slug:"/computer/pc/docker/doker-ubuntu20-install",permalink:"/personal-site/docs/computer/pc/docker/doker-ubuntu20-install",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/pc/docker/ubuntu20-doker-install.md",tags:[],version:"current",frontMatter:{id:"doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",sidebar_label:"Ubuntu20.04 Install"}},s={},p=[{value:"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key",id:"\u542f\u7528-docker-\u8f6f\u4ef6\u6e90\u5bfc\u5165-gpg-key",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u542f\u7528-docker-\u8f6f\u4ef6\u6e90\u5bfc\u5165-gpg-key"},"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key"),(0,a.kt)("p",null,"\u66f4\u65b0\u8f6f\u4ef6\u5305\uff0c\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common\n")),(0,a.kt)("p",null,"\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"GPG key"),"\uff0c\u6dfb\u52a0\u8f6f\u4ef6\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n')),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u6700\u65b0\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u6307\u5b9a\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\napt list -a docker-ce\nsudo apt install docker-ce=<VERSION> docker-ce-cli=<VERSION> containerd.io\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status docker\n")),(0,a.kt)("p",null,"\u5f97\u5230\u5927\u6982\u8fd9\u6837\u7684\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u25cf docker.service - Docker Application Container Engine\n     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset>\n     Active: active (running) since Sun 2022-06-26 18:54:05 CST; 51s ago\nTriggeredBy: \u25cf docker.socket\n       Docs: https://docs.docker.com\n   Main PID: 7292 (dockerd)\n      Tasks: 13\n     Memory: 31.1M\n     CGroup: /system.slice/docker.service\n             \u2514\u25007292 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/cont>\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/143156163"},"\u5982\u4f55\u5728 Ubuntu 20.04 \u4e0a\u5b89\u88c5\u548c\u4f7f\u7528 Docker")))))}k.isMDXComponent=!0}}]);