"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1645],{16147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>r});var l=t(87462),i=(t(67294),t(3905));t(44212);const p={id:"opencv-lane-detect",title:"OpenCV \u5b9e\u73b0\u7b80\u5355\u8f66\u9053\u7ebf\u68c0\u6d4b",sidebar_label:"\u8f66\u9053\u7ebf\u68c0\u6d4b"},a=void 0,o={unversionedId:"computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect",id:"computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect",title:"OpenCV \u5b9e\u73b0\u7b80\u5355\u8f66\u9053\u7ebf\u68c0\u6d4b",description:"\u8bfb\u53d6\u56fe\u50cf",source:"@site/docs/computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect.md",sourceDirName:"computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b",slug:"/computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect",permalink:"/personal-site/docs/computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect",draft:!1,editUrl:"https://github.com/rcxxx/docs/tree/master/docs/computer/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect.md",tags:[],version:"current",frontMatter:{id:"opencv-lane-detect",title:"OpenCV \u5b9e\u73b0\u7b80\u5355\u8f66\u9053\u7ebf\u68c0\u6d4b",sidebar_label:"\u8f66\u9053\u7ebf\u68c0\u6d4b"},sidebar:"\ud83d\udc40CV",previous:{title:"DNN YOLO-v5-ONNX",permalink:"/personal-site/docs/computer/cv/opencv/dnn/opencv-dnn-yolov5-6-0"},next:{title:"ML & DL",permalink:"/personal-site/docs/category/ml-dl"}},s={},r=[{value:"\u8bfb\u53d6\u56fe\u50cf",id:"\u8bfb\u53d6\u56fe\u50cf",level:2},{value:"\u63d0\u53d6\u8fb9\u7f18",id:"\u63d0\u53d6\u8fb9\u7f18",level:2},{value:"\u8bbe\u7f6e ROI \u533a\u57df",id:"\u8bbe\u7f6e-roi-\u533a\u57df",level:2},{value:"\u970d\u592b\u53d8\u6362\u63d0\u53d6\u76f4\u7ebf",id:"\u970d\u592b\u53d8\u6362\u63d0\u53d6\u76f4\u7ebf",level:2},{value:"\u6700\u5c0f\u4e8c\u4e58\u6cd5\u62df\u5408\u76f4\u7ebf",id:"\u6700\u5c0f\u4e8c\u4e58\u6cd5\u62df\u5408\u76f4\u7ebf",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:r};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bfb\u53d6\u56fe\u50cf"},"\u8bfb\u53d6\u56fe\u50cf"),(0,i.kt)("p",null,"\u76f4\u63a5\u8bfb\u53d6\u56fe\u50cf\u5e76\u8f6c\u4e3a\u7070\u5ea6\u56fe\u50cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Mat gray_img;\ncvtColor(src_img, gray_img, COLOR_BGR2GRAY);\n\nimshow("src_img", src_img);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-src.png",alt:null})),(0,i.kt)("h2",{id:"\u63d0\u53d6\u8fb9\u7f18"},"\u63d0\u53d6\u8fb9\u7f18"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Canny")," \u8fb9\u7f18\u68c0\u6d4b\u65b9\u6cd5\u63d0\u53d6\u8fb9\u7f18")),(0,i.kt)("p",null,"\u7531\u4e8e\u8f66\u9053\u7ebf\u4e0e\u5468\u56f4\u8def\u8fb9\u6709\u5f88\u9c9c\u660e\u7684\u5bf9\u6bd4\uff0c\u5c5e\u4e8e\u5f3a\u8fb9\u7f18\uff0c\u53ef\u4ee5\u9002\u5f53\u63d0\u9ad8 canny \u7b97\u5b50\u7684\u9608\u503c\uff0c\u6392\u9664\u6389\u5927\u90e8\u5206\u7684\u5e72\u6270"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Mat edge_img;\nCanny(gray_img, edge_img, 250, 400);    // \u8bbe\u7f6e\u8f83\u9ad8\u7684\u9608\u503c \u53ea\u4fdd\u7559\u8f83\u5f3a\u7684\u8fb9\u7f18\n\nimshow("edge_img", edge_img);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-edge.png",alt:null})),(0,i.kt)("h2",{id:"\u8bbe\u7f6e-roi-\u533a\u57df"},"\u8bbe\u7f6e ROI \u533a\u57df"),(0,i.kt)("p",null,"\u5f53\u8f66\u8f86\u884c\u9a76\u5728\u9053\u8def\u4e2d\u65f6\uff0c\u8f66\u9053\u7ebf\u6240\u5904\u7684\u4f4d\u7f6e\u5176\u5b9e\u662f\u76f8\u5bf9\u56fa\u5b9a\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u5bf9\u56fe\u50cf\u8bbe\u7f6e\u611f\u5174\u8da3\u533a\u57df\uff0c\u8fdb\u4e00\u6b65\u6392\u9664\u566a\u58f0"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u56fe\u50cf\u63a9\u7801 ",(0,i.kt)("inlineCode",{parentName:"p"},"mask")," \u533a\u57df"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// \u8bbe\u7f6e\u68af\u5f62\u533a\u57df\u7684\u56db\u4e2a\u9876\u70b9\uff0c\u7528\u6765\u586b\u5145\u56fe\u50cf\nvector<vector<Point> > roi_points{{Point(0, src_img.rows),\n                Point(src_img.cols * 0.5 - src_img.cols * 0.02, src_img.rows * 0.5),\n                Point(src_img.cols * 0.5 + src_img.cols * 0.02,src_img.rows * 0.5),\n                Point(src_img.cols, src_img.rows)}};\nMat mask_img = Mat::zeros(Size(src_img.cols, src_img.rows), CV_8UC1);\nfillPoly(mask_img, roi_points, Scalar(255));    // \u591a\u8fb9\u5f62\u533a\u57df\u586b\u5145\n\nimshow("mask_img", mask_img);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-mask.png",alt:null})),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"mask")," \u4e0e \u8fb9\u7f18\u56fe\u8fdb\u884c\u4e0e\u8fd0\u7b97\uff0c\u5f97\u51fa ROI \u533a\u57df\u7684\u8fb9\u7f18\u56fe\u50cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Mat bin_img;\nbitwise_and(edge_img, mask_img, bin_img);\n\nimshow("bin_img", bin_img);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-bin.png",alt:null})),(0,i.kt)("h2",{id:"\u970d\u592b\u53d8\u6362\u63d0\u53d6\u76f4\u7ebf"},"\u970d\u592b\u53d8\u6362\u63d0\u53d6\u76f4\u7ebf"),(0,i.kt)("p",null,"\u5bf9\u6700\u7ec8\u5f97\u51fa\u7684\u8fb9\u7f18\u56fe\u50cf\u8fdb\u884c\u7d2f\u8ba1\u6982\u7387\u970d\u592b\u53d8\u6362"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u53c2\u6570\uff0c\u5e76\u7ed8\u5236\u63d0\u53d6\u51fa\u7684\u76f4\u7ebf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<Vec4f> plines;\nHoughLinesP(bin_img, plines, 6, CV_PI / 180.0, 160, 40, 25);\nfor (size_t i = 0; i < plines.size(); i++) {\n    Vec4f hline = plines[i];\n    line(src_img, Point(hline[0], hline[1]), Point(hline[2], hline[3]), Scalar(100, 200, 0), 2, 8, 0);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-HoughLinesP.png",alt:null})),(0,i.kt)("p",null,"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"HoughLinesP()")," \u53c2\u6570\u7684\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u770b\u8fd9\u91cc"),(0,i.kt)("p",null,"\u63d0\u53d6\u51fa\u76f4\u7ebf\u540e\uff0c\u9700\u8981\u5bf9\u8fd9\u4e9b\u76f4\u7ebf\u8fdb\u884c\u5206\u7ec4\uff0c\u533a\u5206\u5b83\u4eec\u662f\u5de6\u8fb9\u7684\u8f66\u9053\u7ebf\u8fd8\u662f\u53f3\u8fb9\u7684\u8f66\u9053\u7ebf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HoughLinesP()")," \u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6709 4 \u4e2a\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"vector")," \uff0c\u5206\u522b\u5b58\u50a8\u4e00\u6761\u7ebf\u6bb5\u7684\u4e24\u4e2a\u7aef\u70b9\u7684\u5750\u6807\u503c $x",(0,i.kt)("em",{parentName:"li"},"{1} , y"),"{1} ,x",(0,i.kt)("em",{parentName:"li"},"{2} , y"),"{2}$")),(0,i.kt)("p",null,"\u659c\u7387\u5b9a\u4e49\u4e3a "),(0,i.kt)("p",null,"$$\nslope = \\frac{y",(0,i.kt)("em",{parentName:"p"},"{2} - y"),"{1}}{x",(0,i.kt)("em",{parentName:"p"},"{2} - x"),"{1}}\n$$"),(0,i.kt)("p",null,"\u5728\u56fe\u8c61\u4e2d\uff0c\u659c\u7387\u4e3a\u8d1f\u7684\u76f4\u7ebf\u4e3a\u5de6\u8f66\u9053\u7ebf\uff0c\u659c\u7387\u4e3a\u6b63\u7684\u5219\u4e3a\u53f3\u8f66\u9053\u7ebf"),(0,i.kt)("p",null,"\u5e76\u4e14\u4e24\u4fa7\u8f66\u9053\u7ebf\u7684\u659c\u7387\u90fd\u4f1a\u5728\u4e00\u5b9a\u7684\u8303\u56f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u8fd9\u4e2a\u8303\u56f4\uff0c\u8fc7\u6ee4\u6389\u4e00\u4e9b\u4e0d\u60f3\u8981\u7684\u76f4\u7ebf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<Point> left_ps;\nvector<Point> right_ps;\n\nvector<Vec4f> plines;\nHoughLinesP(bin_img, plines, 6, CV_PI / 180.0, 160, 40, 25);\nfor (size_t i = 0; i < plines.size(); i++) {\n    Vec4f hline = plines[i];\n    float slope = (hline[3] - hline[1]) / (hline[2] - hline[0]);\n    if (fabs(slope) < 0.5){continue;}\n\n    if (slope < 0){\n        left_ps.push_back(Point(hline[0], hline[1]));\n        left_ps.push_back(Point(hline[2], hline[3]));\n    } else {\n        right_ps.push_back(Point(hline[0], hline[1]));\n        right_ps.push_back(Point(hline[2], hline[3]));\n    }\n}\n")),(0,i.kt)("p",null,"\u7ed8\u5236\u5206\u7ec4\u597d\u7684\u5de6\u53f3\u4e24\u4fa7\u7ebf\u6bb5\u7684\u7279\u5f81\u70b9\uff0c\u5f97\u5230\u5982\u4e0b\u6548\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-left-right-line.png",alt:null})),(0,i.kt)("p",null,"\u56fe\u4e2d\u5c06\u5de6\u4fa7\u7684\u7279\u5f81\u70b9\u6807\u8bb0\u4e3a\u84dd\u8272\uff0c\u53f3\u4fa7\u7684\u7279\u5f81\u70b9\u6807\u8bb0\u4e3a\u6a59\u8272"),(0,i.kt)("h2",{id:"\u6700\u5c0f\u4e8c\u4e58\u6cd5\u62df\u5408\u76f4\u7ebf"},"\u6700\u5c0f\u4e8c\u4e58\u6cd5\u62df\u5408\u76f4\u7ebf"),(0,i.kt)("p",null,"\u4e0a\u4e00\u6b65\u6211\u4eec\u5df2\u7ecf\u5206\u7ec4\u597d\u4e86\u5de6\u53f3\u4e24\u4fa7\u8f66\u9053\u7ebf\u7684\u7279\u5f81\u70b9\uff0c\u5e76\u5b58\u653e\u5728\u4e24\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"vector")," \u4e2d\uff0c\u5bf9\u8fd9\u4e9b\u7279\u5f81\u70b9\u8fdb\u884c\u6700\u5c0f\u4e8c\u4e58\u62df\u5408\uff0c\u5206\u522b\u5f97\u51fa\u6700\u4f18\u7684\u4e24\u4fa7\u8f66\u9053\u7ebf"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 OpenCV \u81ea\u5e26\u7684\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"cv::fitLine()")," \u5b9e\u73b0\u6700\u5c0f\u4e8c\u4e58\u6cd5\u62df\u5408"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Vec4f left_line = fitline(src_img, left_ps);        // \u81ea\u5b9a\u4e49\u62df\u5408\u51fd\u6570\uff0c\u5c06\u62df\u5408\u51fa\u7684\u76f4\u7ebf\u4fdd\u5b58\u4e3a\u7ebf\u6bb5\nVec4f right_line = fitline(src_img, right_ps);\n\nline(dst_img, Point(left_line[0], left_line[1]), Point(left_line[2], left_line[3]), Scalar(255, 100, 0), 4, 8, 0);\nline(dst_img, Point(right_line[0], right_line[1]), Point(right_line[2], right_line[3]), Scalar(0, 100, 255), 4, 8, 0);\n")),(0,i.kt)("p",null,"\u62df\u5408\u6548\u679c\u5982\u4e0b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-fitline.png",alt:null})),(0,i.kt)("p",null,"\u5df2\u7ecf\u5f88\u597d\u7684\u68c0\u6d4b\u51fa\u4e86\u8f66\u9053\u7ebf\u7684\u4f4d\u7f6e\uff0c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62df\u5408\u76f4\u7ebf\u51fd\u6570")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Vec4f fitline(Mat &src_img, vector<Point> points){\n    Vec4f fit_line;\n    fitLine(points, fit_line, DIST_L2, 0, 1e-2, 1e-2);\n\n    Point p_0;\n    p_0.x = fit_line[2];\n    p_0.y = fit_line[3];\n    cout << p_0.x <<endl <<p_0.y;\n    double slope = fit_line[1] / fit_line[0];\n\n\n    Point p_1, p_2;\n    if (slope < 0)\n    {\n        p_1.x = 0;\n        p_1.y = slope * (p_1.x - p_0.x) + p_0.y;\n        p_2.x = src_img.cols * 0.5 - src_img.cols * 0.02;\n        p_2.y = slope * (p_2.x - p_0.x) + p_0.y;\n    }\n    else\n    {\n        p_1.x = src_img.cols * 0.5 + src_img.cols * 0.02;\n        p_1.y = slope * (p_1.x - p_0.x) + p_0.y;\n        p_2.x = src_img.cols;\n        p_2.y = slope * (p_2.x - p_0.x) + p_0.y;\n    }\n\n    Vec4f line;\n    line[0] = p_1.x;\n    line[1] = p_1.y;\n    line[2] = p_2.x;\n    line[3] = p_2.y;\n\n    return line;\n}\n")),(0,i.kt)("p",null,"\u518d\u5c06\u5f97\u5230\u7684\u5de6\u53f3\u4e24\u6761\u8f66\u9053\u7ebf\u4e2d\u95f4\u7684\u533a\u57df\u505a\u586b\u5145\uff0c\u5bf9\u5f53\u524d\u7684\u8f66\u9053\u5c31\u505a\u51fa\u6765\u5f88\u597d\u7684\u68c0\u6d4b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Mat dst_mask_img;\nsrc_img.copyTo(dst_mask_img);\n\nvector<vector<Point> > dst_mask_points{{Point(left_line[0], left_line[1]),Point(left_line[2], left_line[3]),Point(right_line[0], right_line[1]),Point(right_line[2], right_line[3])}};\nfillPoly(dst_mask_img, dst_mask_points, Scalar(50, 255, 50));\n\naddWeighted(src_img, 0.7, dst_mask_img, 0.3, 0, dst_img );\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/%E8%BD%A6%E9%81%93%E7%BA%BF%E6%A3%80%E6%B5%8B/lane-poly.png",alt:null})),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u5f53\u524d\u53ea\u662f\u6700\u8f83\u4e3a\u5355\u4e00\u7684\u60c5\u51b5\u505a\u51fa\u6765\u8f66\u9053\u7ebf\u68c0\u6d4b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7528\u970d\u592b\u7ebf\u53d8\u6362\u68c0\u6d4b\u76f4\u7ebf\u7684\u60c5\u51b5\u5bf9\u5f2f\u9053\u5e76\u4e0d\u9002\u7528"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u65b9\u6848\u6539\u8fdb\u4e3a\u62df\u5408\u66f2\u7ebf\uff0c\u5e94\u8be5\u80fd\u5bf9\u5f2f\u9053\u6709\u7528"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ROI \u533a\u57df\u6839\u636e\u76f8\u673a\u76f8\u5bf9\u4e8e\u8f66\u8f86\u7684\u4f4d\u7f6e\u4e0d\u540c\u8fd8\u9700\u8981\u8c03\u6574")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ec5\u4ec5\u8fdb\u884c\u8f66\u9053\u7ebf\u7684\u68c0\u6d4b\u8fd8\u8fdc\u8fdc\u4e0d\u591f\uff0c\u4e4b\u540e\u8fd8\u9700\u8981\u52a0\u5165\u5bf9\u8def\u4e0a\u7684\u6c7d\u8f66\u8fdb\u884c\u76ee\u6807\u68c0\u6d4b\uff0c\u5e76\u8ba1\u7b97\u5b89\u5168\u8ddd\u79bb\u7b49\uff0c\u9053\u8def\u4e0a\u7684\u5404\u79cd\u4ea4\u901a\u4fe1\u53f7\u6807\u8bc6\u4e5f\u9700\u8981\u68c0\u6d4b"))),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/lane-detection-with-deep-learning-part-1-9e096f3320b7"},"Lane Detection with Deep Learning (Part 1)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://medium.com/@mrhwick/simple-lane-detection-with-opencv-bfeb6ae54ec0"},"Simple Lane Detection with OpenCV"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/finding-lane-lines-simple-pipeline-for-lane-detection-d02b62e7572b"},"Finding Lane Lines \u2014 Simple Pipeline For Lane Detection."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://medium.com/@galen.ballew/opencv-lanedetection-419361364fc0"},"Building a lane detection system using Python 3 and OpenCV"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/tutorial-build-a-lane-detector-679fd8953132"},"Tutorial: Build a lane detector")))))}m.isMDXComponent=!0}}]);