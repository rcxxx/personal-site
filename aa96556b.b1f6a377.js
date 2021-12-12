(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(199)),i=["components"],b={id:"jetson-nano-start",title:"Nvidia Jetson Nano",sidebar_label:"Jetson Nano Start"},l={unversionedId:"nvidia/jeston-nano/jetson-nano-start",id:"nvidia/jeston-nano/jetson-nano-start",isDocsHomePage:!1,title:"Nvidia Jetson Nano",description:"Jetson-Nano",source:"@site/docs/nvidia/jeston-nano/jetson-nano-start.md",slug:"/nvidia/jeston-nano/jetson-nano-start",permalink:"/personal-site/docs/nvidia/jeston-nano/jetson-nano-start",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/nvidia/jeston-nano/jetson-nano-start.md",version:"current",sidebar_label:"Jetson Nano Start",sidebar:"Nvidia",next:{title:"Jetson Nano stats",permalink:"/personal-site/docs/nvidia/jeston-nano/jetson-nano-stats"}},c=[{value:"<strong>Jetson-Nano</strong>",id:"jetson-nano",children:[]},{value:"Start",id:"start",children:[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u7cfb\u7edf\u5b89\u88c5",id:"\u7cfb\u7edf\u5b89\u88c5",children:[]},{value:"\u7cfb\u7edf\u8bbe\u7f6e",id:"\u7cfb\u7edf\u8bbe\u7f6e",children:[]},{value:"VNC\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e",id:"vnc\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"jetson-nano"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)("a",{parentName:"strong",href:"https://developer.nvidia.com/zh-cn/embedded/jetson-nano-developer-kit"},Object(o.b)("inlineCode",{parentName:"a"},"Jetson-Nano")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/JetsonNano-DevKit_Front-Top_Right_trimmed.jpg",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Jetson Nano")," \u662f ",Object(o.b)("inlineCode",{parentName:"li"},"Nvidia")," \u6240\u63a8\u51fa\u7684\u4f4e\u914d ",Object(o.b)("inlineCode",{parentName:"li"},"GPU")," \u8fd0\u7b97\u5e73\u53f0\uff0c\u4f53\u79ef\u5c0f\uff0c\u529f\u8017\u4f4e\uff0c\u9002\u5408\u7528\u6765\u505a\u4e00\u4e9b\u7b97\u529b\u9700\u6c42\u4e0d\u9ad8\u7684\u7f51\u7edc\u8ba1\u7b97\u4efb\u52a1")),Object(o.b)("h2",{id:"start"},"Start"),Object(o.b)("p",null,"\u6709\u5173 ",Object(o.b)("inlineCode",{parentName:"p"},"Jetson Nano")," \u7684\u7cfb\u7edf\u5b89\u88c5\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u7684\u6559\u7a0b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write"},"Jetson Nano \u5f00\u53d1\u8005\u5957\u4ef6\u5165\u95e8")))),Object(o.b)("p",null,"\u4e5f\u53ef\u4ee5\u53c2\u8003\u4e9a\u535a\u667a\u80fd\u7684\u5b89\u88c5\u6559\u7a0b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://www.yahboom.com/build.html?id=2493&cid=301"},"2.Jetson Nano\u70e7\u5199\u7cfb\u7edf\u955c\u50cf")))),Object(o.b)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u7535\u6e90\u7ebf\uff1a\u53ef\u4ee5\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"5V\u23932A")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"MicroUSB")," \u7ebf\uff0c\u4e5f\u53ef\u4ee5\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"5V\u23934A")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"DC")," \u4f9b\u7535\u7ebf"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"MicroUSB")," \u7ebf\u4f9b\u7535\uff0c\u6ce8\u610f\u8981\u5c06 ",Object(o.b)("inlineCode",{parentName:"li"},"J48")," \u9488\u811a\u4e0a\u7684\u8df3\u7ebf\u5e3d ",Object(o.b)("strong",{parentName:"li"},"\u62ff\u5f00"),"\uff0c\u907f\u514d\u77ed\u63a5\uff0c\u5982\u679c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"DC")," \u7ebf\u4f9b\u7535\uff0c\u5219\u8981\u5c06 ",Object(o.b)("inlineCode",{parentName:"li"},"J48")," \u9488\u811a\u7528\u8df3\u7ebf\u5e3d ",Object(o.b)("strong",{parentName:"li"},"\u77ed\u63a5")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"SD\u5361"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"32GB")," \u4ee5\u4e0a\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"SD\u5361"),"\uff0c\u7528\u6765\u8fdb\u884c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b89\u88c5"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"HDMI"),"/",Object(o.b)("inlineCode",{parentName:"p"},"DP")," \u89c6\u5c4f\u7ebf\u4ee5\u53ca\u76f8\u5e94\u7684\u663e\u793a\u5668")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u952e\u76d8\u548c\u9f20\u6807"))),Object(o.b)("h3",{id:"\u7cfb\u7edf\u5b89\u88c5"},"\u7cfb\u7edf\u5b89\u88c5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8f6f\u4ef6\u5b89\u88c5"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/"},Object(o.b)("inlineCode",{parentName:"a"},"SD Memory Card Formatter"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://www.balena.io/etcher/"},Object(o.b)("inlineCode",{parentName:"a"},"balenaEtcher"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://mobaxterm.mobatek.net/"},Object(o.b)("inlineCode",{parentName:"a"},"MobaXterm"))))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u955c\u50cf\u4e0b\u8f7d"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5728 ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://developer.nvidia.com/zh-cn/embedded/downloads"},"Jetson \u4e0b\u8f7d\u4e2d\u5fc3"))," \u4e2d\uff0c\u9009\u62e9 ",Object(o.b)("inlineCode",{parentName:"li"},"JETSON NANO \u5f00\u53d1\u8005\u5de5\u5177>")," \u4e0b\u8f7d\u76f8\u5e94\u7684\u955c\u50cf")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u70e7\u5f55\u955c\u50cf")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"SD Memory Card Formatter")," \u5bf9 ",Object(o.b)("inlineCode",{parentName:"li"},"SD\u5361")," \u8fdb\u884c\u683c\u5f0f\u5316")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Windows-SD_Card_Formatter.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"Etcher")," \u9009\u62e9\u4e0b\u8f7d\u597d\u7684\u955c\u50cf"),Object(o.b)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u70e7\u5f55\u955c\u50cf\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"SD\u5361")),Object(o.b)("li",{parentName:"ol"},"\u70b9\u51fb ",Object(o.b)("inlineCode",{parentName:"li"},"Flash!")," \u7b49\u5f85\u70e7\u5f55\u5b8c\u6210",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u70e7\u5f55\u5b8c\u6210\u540e\uff0c\u7531\u4e8e\u6587\u4ef6\u7cfb\u7edf\u4e0d\u4e00\u81f4\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"Windows")," \u4f1a\u63d0\u793a\u4f60\u65e0\u6cd5\u627e\u5230\u9a71\u52a8\u5668\uff0c\u8fd9\u65f6\u5019\u4e0d\u7528\u7ba1\uff0c\u5f39\u51fa\u9a71\u52a8\u5668\u5373\u53ef")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Windows-Etcher_Select_Drive.png",alt:null})),Object(o.b)("h3",{id:"\u7cfb\u7edf\u8bbe\u7f6e"},"\u7cfb\u7edf\u8bbe\u7f6e"),Object(o.b)("p",null,"\u6709\u5173\u7cfb\u7edf\u521d\u59cb\u5316\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u7684\u6559\u7a0b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#setup"},"\u5b89\u88c5\u548c\u9996\u6b21\u542f\u52a8"))),Object(o.b)("p",null,"\u7cfb\u7edf\u4e3a\u719f\u6089\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Ubuntu")," \u7cfb\u7edf\uff0c\u4e4b\u524d\u5df2\u7ecf\u8bb0\u5f55\u8fc7\u4e0d\u5c11\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u591a\u8bf4"),Object(o.b)("h3",{id:"vnc\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e"},"VNC\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e"),Object(o.b)("p",null,"\u53ef\u4ee5\u53c2\u8003\u4e9a\u535a\u667a\u80fd\u7684\u6587\u7ae0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.yahboom.com/build.html?id=2500&cid=301"},"Jetson nano\u901a\u8fc7vnc\u8fdc\u7a0b\u684c\u9762\u63a7\u5236"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b89\u88c5vino"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install vino\nsudo ln -s ../vino-server.service /usr/lib/systemd/user/graphical-session.target.wants\ngsettings set org.gnome.Vino prompt-enabled false\ngsettings set org.gnome.Vino require-encryption false\n")),Object(o.b)("p",null,"\u7f16\u8f91 ",Object(o.b)("inlineCode",{parentName:"p"},"org.gnome.Vino.gschema.xml"),"\uff0c\u5728\u6700\u540e\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"</key>")," \u540e\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sudo vim /usr/share/glib-2.0/schemas/org.gnome.Vino.gschema.xml"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<key name='enabled' type='b'>\n  <summary>Enable remote access to the desktop</summary>\n  <description>\n    If true, allows remote access to the desktop via the RFB\n    protocol. Users on remote machines may then connect to the\n    desktop using a VNC viewer.\n  </description>\n  <default>false</default>\n</key>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u540e\u6309 ",Object(o.b)("inlineCode",{parentName:"li"},"ESC")," \u8fdb\u5165\u547d\u4ee4\u6a21\u5f0f\uff0c\u8f93\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},":wq")," \u9000\u51fa")),Object(o.b)("p",null,"\u547d\u4ee4\u884c\u7ee7\u7eed\u8f93\u5165"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo glib-compile-schemas /usr/share/glib-2.0/schemas\n/usr/lib/vino/vino-server\n")),Object(o.b)("p",null,"\u8fd9\u6837\u5c31\u542f\u52a8\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"VNC")," \u670d\u52a1"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801\u548c\u5f00\u673a\u81ea\u542f\u52a8\uff0c\u5c06\u4e0b\u9762\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"thepassword")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.Vino authentication-methods \"['vnc']\"\ngsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gsettings set org.gnome.Vino enabled true\nmkdir -p ~/.config/autostart\nvim ~/.config/autostart/vino-server.desktop\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 ",Object(o.b)("inlineCode",{parentName:"li"},"vino-server.desktop")," \u4e2d")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Desktop Entry]\nType=Application\nName=Vino VNC server\nExec=/usr/lib/vino/vino-server\nNoDisplay=true\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7136\u540e ",Object(o.b)("inlineCode",{parentName:"li"},"sudo reboot")," \u91cd\u542f\uff0c\u6253\u5f00 ",Object(o.b)("inlineCode",{parentName:"li"},"MobaXterm")," \u6d4b\u8bd5 VNC \u8fdc\u7a0b\u684c\u9762\u4e0e ssh \u94fe\u63a5")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-vnc-remote.png",alt:null})),Object(o.b)("p",null,"\u6210\u529f\u8fde\u63a5"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u8fd9\u91cc\u63a8\u8350\u4e0b\u8f7d ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://www.todesk.com/linux.html"},"Todesk"))," \u6765\u8fdb\u884c\u8fdc\u7a0b\u684c\u9762\u94fe\u63a5\uff0c\u4e0d\u7528\u914d\u7f6e\uff0c\u4f46\u5bf9\u7f51\u7edc\u8fde\u63a5\u8981\u6c42\u6bd4\u8f83\u9ad8\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u6c42\u9009\u62e9"))),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#intro"},"Jetson Nano \u5f00\u53d1\u8005\u5957\u4ef6\u5165\u95e8"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://www.yahboom.com/build.html?id=2500&cid=301"},"Jetson nano\u901a\u8fc7vnc\u8fdc\u7a0b\u684c\u9762\u63a7\u5236")))))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,j=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.a.createElement(j,b(b({ref:t},c),{},{components:n})):r.a.createElement(j,b({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);