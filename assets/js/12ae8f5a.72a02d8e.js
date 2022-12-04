"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3425],{18746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>i,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));n(44212);const p={id:"opencv-hough-transform",title:"OpenCV \u4e2d\u7684\u970d\u592b\u53d8\u6362",sidebar_label:"\u970d\u592b\u53d8\u6362"},r=void 0,l={unversionedId:"computer/cv/opencv/common-method/opencv-hough-transform",id:"computer/cv/opencv/common-method/opencv-hough-transform",title:"OpenCV \u4e2d\u7684\u970d\u592b\u53d8\u6362",description:"\u7b80\u4ecb",source:"@site/docs/computer/cv/opencv/common-method/\u970d\u592b\u53d8\u6362.md",sourceDirName:"computer/cv/opencv/common-method",slug:"/computer/cv/opencv/common-method/opencv-hough-transform",permalink:"/personal-site/docs/computer/cv/opencv/common-method/opencv-hough-transform",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/opencv/common-method/\u970d\u592b\u53d8\u6362.md",tags:[],version:"current",frontMatter:{id:"opencv-hough-transform",title:"OpenCV \u4e2d\u7684\u970d\u592b\u53d8\u6362",sidebar_label:"\u970d\u592b\u53d8\u6362"},sidebar:"\ud83d\udc40CV",previous:{title:"ROI\u64cd\u4f5c",permalink:"/personal-site/docs/computer/cv/opencv/common-method/opencv-roi"},next:{title:"\u76f4\u65b9\u56fe\u5747\u8861\u5316",permalink:"/personal-site/docs/computer/cv/opencv/tutorials/opencv-equalizeHist"}},m={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u970d\u592b\u7ebf\u53d8\u6362",id:"\u970d\u592b\u7ebf\u53d8\u6362",level:2},{value:"\u6807\u51c6\u970d\u592b\u53d8\u6362 cv::HoughLines()",id:"\u6807\u51c6\u970d\u592b\u53d8\u6362-cvhoughlines",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:u};function i(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u970d\u592b\u53d8\u6362(Hough Transform)\u662f\u56fe\u50cf\u5904\u7406\u4e2d\u7684\u4e00\u79cd\u7279\u5f81\u63d0\u53d6\u6280\u672f\uff0c\u8be5\u8fc7\u7a0b\u5728\u4e00\u4e2a\u53c2\u6570\u7a7a\u95f4\u4e2d\u901a\u8fc7\u8ba1\u7b97\u7d2f\u8ba1\u7ed3\u679c\u7684\u5c40\u90e8\u6700\u5927\u503c\u5f97\u5230\u4e00\u4e2a\u7b26\u5408\u8be5\u7279\u5f81\u7684\u96c6\u5408\u4f5c\u4e3a\u970d\u592b\u53d8\u6362\u7684\u7ed3\u679c"),(0,a.kt)("h2",{id:"\u970d\u592b\u7ebf\u53d8\u6362"},"\u970d\u592b\u7ebf\u53d8\u6362"),(0,a.kt)("p",null,"\u970d\u592b\u53d8\u6362\u4e2d\u6700\u7b80\u5355\u7684\u662f\u4ece\u4e8c\u503c\u56fe\u50cf\u4e2d\u68c0\u6d4b\u76f4\u7ebf/\u7ebf\u6bb5\uff0c\u970d\u592b\u53d8\u6362\u524d\uff0c\u9700\u8981\u5148\u68c0\u51fa\u56fe\u50cf\u8fb9\u7f18"),(0,a.kt)("p",null,"\u970d\u592b\u53d8\u6362\u7684\u4e3b\u8981\u4f18\u70b9\u662f\u80fd\u5bb9\u5fcd\u7279\u5f81\u8fb9\u754c\u63cf\u8ff0\u4e2d\u7684\u95f4\u9699\uff0c\u5e76\u4e14\u76f8\u5bf9\u4e0d\u53d7\u56fe\u50cf\u566a\u58f0\u7684\u5f71\u54cd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6761\u76f4\u7ebf\u5728\u4e8c\u7ef4\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u7531\u4e00\u4e2a\u65b9\u7a0b\u8868\u793a")),(0,a.kt)("p",null,"\u5728\u7b1b\u5361\u5c14\u5750\u6807\u7cfb\u4e0b\uff0c\u76f4\u7ebf\u53ef\u4ee5\u7531 ",(0,a.kt)("strong",{parentName:"p"},"\u659c\u7387 $k$")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u622a\u8ddd $b$")," \u8868\u793a"),(0,a.kt)("p",null,"$$\ny = kx + b\n$$"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u76f4\u7ebf\u5782\u76f4\u7684\u65f6\u5019\uff0c\u659c\u7387\u4e0d\u5b58\u5728\uff08\u65e0\u9650\u5927\uff09\uff0c$k$ \u7684\u503c\u6709\u53ef\u80fd\u65e0\u9650\u5927\uff0c\u4e0d\u5229\u4e8e\u8ba1\u7b97\uff0c\u6240\u4ee5\u5c06\u76f4\u7ebf\u8f6c\u4e3a\u53c2\u6570\u65b9\u7a0b\u8868\u793a")),(0,a.kt)("p",null,"\u5728\u6781\u5750\u6807\u4e0b\uff0c\u76f4\u7ebf\u53ef\u4ee5\u7531 ",(0,a.kt)("strong",{parentName:"p"},"\u6781\u89d2 $\\theta$")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u6781\u5f84 $r$")," \u8868\u793a "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/R_theta_line.gif",alt:null})),(0,a.kt)("p",null,"$$\ny = (-\\frac{cos\\theta}{sin\\theta})x + (\\frac{r}{sin\\theta})\n$$"),(0,a.kt)("p",null,"\u8f6c\u6362\u4e00\u4e0b\u53ef\u4ee5\u5f97\u5230"),(0,a.kt)("p",null,"$$\nr = xcos\\theta + ysin\\theta\n$$"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u70b9 $(x",(0,a.kt)("em",{parentName:"p"},"{0}, y"),"{0})$ \uff0c\u53ef\u4ee5\u7528 $(r_{0} , \\theta)$ \u8868\u793a\u901a\u8fc7\u8fd9\u4e2a\u70b9\u7684\u6240\u6709\u7684\u76f4\u7ebf\u5b9a\u4e49\u4e3a "),(0,a.kt)("p",null,"$$r",(0,a.kt)("em",{parentName:"p"},"{0}=x"),"{0}cos\\theta+y_{0}sin\\theta$$"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u6781\u5750\u6807\u7a7a\u95f4\u4e2d\u5bf9\u6781\u5f84\u89d2\u7ed8\u5236\u6240\u6709\u7684\u76f4\u7ebf\uff0c\u5c06\u4f1a\u5f97\u5230\u4e00\u6761\u6b63\u5f26\u66f2\u7ebf\uff0c\u6781\u5f84 $r$ \u8d8a\u5927\uff0c\u66f2\u7ebf\u7684\u632f\u5e45\u8d8a\u5927"),(0,a.kt)("p",null,"\u5f53 $x",(0,a.kt)("em",{parentName:"p"},"{0} = 8$ \uff0c $y"),"{0} = 6$ \u65f6\uff0c\u7ed8\u5236\u51fa\u5982\u4e0b\u66f2\u7ebf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/Hough_Lines_Tutorial_Theory_1.jpg",alt:null})),(0,a.kt)("p",null,"\u5176\u4e2d $r > 0$ \u4e14 $0 < \\theta < 2\\pi$"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u70b9\u5bf9\u5e94\u4e00\u6761\u66f2\u7ebf\uff0c\u5982\u679c\u4e24\u4e2a\u6216\u591a\u4e2a\u4e0d\u540c\u7684\u66f2\u7ebf\u5728\u56fe\u8c61\u4e2d\u76f8\u4ea4\u65f6\uff0c\u610f\u5473\u7740\u8fd9\u4e24\u4e2a\u70b9\u90fd\u5c5e\u4e8e\u540c\u4e00\u6761\u76f4\u7ebf"),(0,a.kt)("p",null,"\u4f8b\u5982\u5bf9\u4e8e $(x",(0,a.kt)("em",{parentName:"p"},"{0} = 8,y"),"{0} = 6)$ \u3001$(x",(0,a.kt)("em",{parentName:"p"},"{1}=4,y"),"{1}=9)$ \u548c $(x",(0,a.kt)("em",{parentName:"p"},"{2}=12,y"),"{2}=3)$ \u4e09\u4e2a\u70b9\uff0c\u4ed6\u4eec\u7684\u66f2\u7ebf\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/Hough_Lines_Tutorial_Theory_2.jpg",alt:null})),(0,a.kt)("admonition",{title:":fire:",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5bfb\u627e\u5171\u7ebf\u70b9\u7684\u95ee\u9898\u53ef\u4ee5\u8f6c\u53d8\u4e3a\u5bfb\u627e\u66f2\u7ebf\u662f\u5426\u6709\u5171\u540c\u7684\u4ea4\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684\u66f2\u7ebf\u76f8\u4ea4\uff0c\u4ee3\u8868\u76f4\u7ebf\u4e0a\u7684\u70b9\u8d8a\u591a\uff0c\u901a\u5e38\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u68c0\u6d4b\u4e00\u6761\u7ebf\u6240\u9700\u7684\u6700\u5c0f\u4ea4\u53c9\u70b9\u6570\u91cf\u7684\u9608\u503c"))),(0,a.kt)("h3",{id:"\u6807\u51c6\u970d\u592b\u53d8\u6362-cvhoughlines"},"\u6807\u51c6\u970d\u592b\u53d8\u6362 cv::HoughLines()"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u300aOpenCV3\u7f16\u7a0b\u5165\u95e8\u300b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Hough_transform"},"Hough transform \u2014\u2014 wikipedia")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.opencv.org/3.4/d9/db0/tutorial_hough_lines.html"},"OpenCV Tutorials:Hough Line Transform")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/poem_qianmo/article/details/26977557"},"OpenCV\u970d\u592b\u53d8\u6362\uff1a\u970d\u592b\u7ebf\u53d8\u6362\uff0c\u970d\u592b\u5706\u53d8\u6362\u5408\u8f91")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/yuyuntan/article/details/80141392"},"\u7ecf\u5178\u970d\u592b\u53d8\u6362\uff08Hough Transform"))))))}i.isMDXComponent=!0}}]);