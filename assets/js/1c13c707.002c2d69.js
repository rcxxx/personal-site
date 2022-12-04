"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4650],{62243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));n(44212);const o={id:"jetson-nano-start",title:"Nvidia Jetson Nano",sidebar_label:"Jetson Nano Start"},i=void 0,r={unversionedId:"computer/pc/devices/nvidia/jeston-nano/jetson-nano-start",id:"computer/pc/devices/nvidia/jeston-nano/jetson-nano-start",title:"Nvidia Jetson Nano",description:"Jetson-Nano",source:"@site/docs/computer/pc/devices/nvidia/jeston-nano/jetson-nano-start.md",sourceDirName:"computer/pc/devices/nvidia/jeston-nano",slug:"/computer/pc/devices/nvidia/jeston-nano/jetson-nano-start",permalink:"/personal-site/docs/computer/pc/devices/nvidia/jeston-nano/jetson-nano-start",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/pc/devices/nvidia/jeston-nano/jetson-nano-start.md",tags:[],version:"current",frontMatter:{id:"jetson-nano-start",title:"Nvidia Jetson Nano",sidebar_label:"Jetson Nano Start"},sidebar:"\ud83d\udda5\ufe0fPC",previous:{title:"devices",permalink:"/personal-site/docs/category/devices"},next:{title:"Jtop",permalink:"/personal-site/docs/computer/pc/devices/nvidia/jeston-nano/jetson-nano-stats"}},s={},p=[{value:"<strong><code>Jetson-Nano</code></strong>",id:"jetson-nano",level:2},{value:"Start",id:"start",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u7cfb\u7edf\u5b89\u88c5",id:"\u7cfb\u7edf\u5b89\u88c5",level:3},{value:"\u7cfb\u7edf\u8bbe\u7f6e",id:"\u7cfb\u7edf\u8bbe\u7f6e",level:3},{value:"VNC\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e",id:"vnc\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jetson-nano"},(0,l.kt)("strong",{parentName:"h2"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/zh-cn/embedded/jetson-nano-developer-kit"},(0,l.kt)("inlineCode",{parentName:"a"},"Jetson-Nano")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/JetsonNano-DevKit_Front-Top_Right_trimmed.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Jetson Nano")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Nvidia")," \u6240\u63a8\u51fa\u7684\u4f4e\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"GPU")," \u8fd0\u7b97\u5e73\u53f0\uff0c\u4f53\u79ef\u5c0f\uff0c\u529f\u8017\u4f4e\uff0c\u9002\u5408\u7528\u6765\u505a\u4e00\u4e9b\u7b97\u529b\u9700\u6c42\u4e0d\u9ad8\u7684\u7f51\u7edc\u8ba1\u7b97\u4efb\u52a1")),(0,l.kt)("h2",{id:"start"},"Start"),(0,l.kt)("p",null,"\u6709\u5173 ",(0,l.kt)("inlineCode",{parentName:"p"},"Jetson Nano")," \u7684\u7cfb\u7edf\u5b89\u88c5\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u7684\u6559\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write"},"Jetson Nano \u5f00\u53d1\u8005\u5957\u4ef6\u5165\u95e8")))),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u53c2\u8003\u4e9a\u535a\u667a\u80fd\u7684\u5b89\u88c5\u6559\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://www.yahboom.com/build.html?id=2493&cid=301"},"2.Jetson Nano\u70e7\u5199\u7cfb\u7edf\u955c\u50cf")))),(0,l.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7535\u6e90\u7ebf\uff1a\u53ef\u4ee5\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"5V\u23932A")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"MicroUSB")," \u7ebf\uff0c\u4e5f\u53ef\u4ee5\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"5V\u23934A")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"DC")," \u4f9b\u7535\u7ebf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"MicroUSB")," \u7ebf\u4f9b\u7535\uff0c\u6ce8\u610f\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"J48")," \u9488\u811a\u4e0a\u7684\u8df3\u7ebf\u5e3d ",(0,l.kt)("strong",{parentName:"li"},"\u62ff\u5f00"),"\uff0c\u907f\u514d\u77ed\u63a5\uff0c\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"DC")," \u7ebf\u4f9b\u7535\uff0c\u5219\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"J48")," \u9488\u811a\u7528\u8df3\u7ebf\u5e3d ",(0,l.kt)("strong",{parentName:"li"},"\u77ed\u63a5")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"SD\u5361"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"32GB")," \u4ee5\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SD\u5361"),"\uff0c\u7528\u6765\u8fdb\u884c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b89\u88c5"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"HDMI"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"DP")," \u89c6\u5c4f\u7ebf\u4ee5\u53ca\u76f8\u5e94\u7684\u663e\u793a\u5668")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u952e\u76d8\u548c\u9f20\u6807"))),(0,l.kt)("h3",{id:"\u7cfb\u7edf\u5b89\u88c5"},"\u7cfb\u7edf\u5b89\u88c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8f6f\u4ef6\u5b89\u88c5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/"},(0,l.kt)("inlineCode",{parentName:"a"},"SD Memory Card Formatter"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.balena.io/etcher/"},(0,l.kt)("inlineCode",{parentName:"a"},"balenaEtcher"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://mobaxterm.mobatek.net/"},(0,l.kt)("inlineCode",{parentName:"a"},"MobaXterm"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u955c\u50cf\u4e0b\u8f7d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/zh-cn/embedded/downloads"},"Jetson \u4e0b\u8f7d\u4e2d\u5fc3"))," \u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"JETSON NANO \u5f00\u53d1\u8005\u5de5\u5177>")," \u4e0b\u8f7d\u76f8\u5e94\u7684\u955c\u50cf")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70e7\u5f55\u955c\u50cf")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"li"},"SD Memory Card Formatter")," \u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"SD\u5361")," \u8fdb\u884c\u683c\u5f0f\u5316")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Windows-SD_Card_Formatter.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"li"},"Etcher")," \u9009\u62e9\u4e0b\u8f7d\u597d\u7684\u955c\u50cf"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u70e7\u5f55\u955c\u50cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SD\u5361")),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"li"},"Flash!")," \u7b49\u5f85\u70e7\u5f55\u5b8c\u6210",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u70e7\u5f55\u5b8c\u6210\u540e\uff0c\u7531\u4e8e\u6587\u4ef6\u7cfb\u7edf\u4e0d\u4e00\u81f4\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Windows")," \u4f1a\u63d0\u793a\u4f60\u65e0\u6cd5\u627e\u5230\u9a71\u52a8\u5668\uff0c\u8fd9\u65f6\u5019\u4e0d\u7528\u7ba1\uff0c\u5f39\u51fa\u9a71\u52a8\u5668\u5373\u53ef")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/Jetson_Nano-Getting_Started-Windows-Etcher_Select_Drive.png",alt:null})),(0,l.kt)("h3",{id:"\u7cfb\u7edf\u8bbe\u7f6e"},"\u7cfb\u7edf\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u6709\u5173\u7cfb\u7edf\u521d\u59cb\u5316\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u7684\u6559\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#setup"},"\u5b89\u88c5\u548c\u9996\u6b21\u542f\u52a8"))),(0,l.kt)("p",null,"\u7cfb\u7edf\u4e3a\u719f\u6089\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu")," \u7cfb\u7edf\uff0c\u4e4b\u524d\u5df2\u7ecf\u8bb0\u5f55\u8fc7\u4e0d\u5c11\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u591a\u8bf4"),(0,l.kt)("h3",{id:"vnc\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e"},"VNC\u8fdc\u7a0b\u684c\u9762\u914d\u7f6e"),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\u4e9a\u535a\u667a\u80fd\u7684\u6587\u7ae0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.yahboom.com/build.html?id=2500&cid=301"},"Jetson nano\u901a\u8fc7vnc\u8fdc\u7a0b\u684c\u9762\u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5vino"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install vino\nsudo ln -s ../vino-server.service /usr/lib/systemd/user/graphical-session.target.wants\ngsettings set org.gnome.Vino prompt-enabled false\ngsettings set org.gnome.Vino require-encryption false\n")),(0,l.kt)("p",null,"\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"org.gnome.Vino.gschema.xml"),"\uff0c\u5728\u6700\u540e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"</key>")," \u540e\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo vim /usr/share/glib-2.0/schemas/org.gnome.Vino.gschema.xml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<key name='enabled' type='b'>\n  <summary>Enable remote access to the desktop</summary>\n  <description>\n    If true, allows remote access to the desktop via the RFB\n    protocol. Users on remote machines may then connect to the\n    desktop using a VNC viewer.\n  </description>\n  <default>false</default>\n</key>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u540e\u6309 ",(0,l.kt)("inlineCode",{parentName:"li"},"ESC")," \u8fdb\u5165\u547d\u4ee4\u6a21\u5f0f\uff0c\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},":wq")," \u9000\u51fa")),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u7ee7\u7eed\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo glib-compile-schemas /usr/share/glib-2.0/schemas\n/usr/lib/vino/vino-server\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u542f\u52a8\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"VNC")," \u670d\u52a1"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801\u548c\u5f00\u673a\u81ea\u542f\u52a8\uff0c\u5c06\u4e0b\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"thepassword")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.Vino authentication-methods \"['vnc']\"\ngsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gsettings set org.gnome.Vino enabled true\nmkdir -p ~/.config/autostart\nvim ~/.config/autostart/vino-server.desktop\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"vino-server.desktop")," \u4e2d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Desktop Entry]\nType=Application\nName=Vino VNC server\nExec=/usr/lib/vino/vino-server\nNoDisplay=true\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo reboot")," \u91cd\u542f\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"MobaXterm")," \u6d4b\u8bd5 VNC \u8fdc\u7a0b\u684c\u9762\u4e0e ssh \u94fe\u63a5")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/jeston/nano/jetson-nano-vnc-remote.png",alt:null})),(0,l.kt)("p",null,"\u6210\u529f\u8fde\u63a5"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u63a8\u8350\u4e0b\u8f7d ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.todesk.com/linux.html"},"Todesk"))," \u6765\u8fdb\u884c\u8fdc\u7a0b\u684c\u9762\u94fe\u63a5\uff0c\u4e0d\u7528\u914d\u7f6e\uff0c\u4f46\u5bf9\u7f51\u7edc\u8fde\u63a5\u8981\u6c42\u6bd4\u8f83\u9ad8\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u6c42\u9009\u62e9")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#intro"},"Jetson Nano \u5f00\u53d1\u8005\u5957\u4ef6\u5165\u95e8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://www.yahboom.com/build.html?id=2500&cid=301"},"Jetson nano\u901a\u8fc7vnc\u8fdc\u7a0b\u684c\u9762\u63a7\u5236")))))}d.isMDXComponent=!0}}]);