(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),s=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||c;return t?l.a.createElement(m,o(o({ref:n},b),{},{components:t})):l.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<c;b++)r[b]=t[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(3),l=t(7),c=(t(0),t(165)),r={id:"opencv-dnn-yolov4",title:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 YOLO v4 \u6743\u91cd\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",sidebar_label:"DNN-YOLO v4"},o={unversionedId:"opencv/opencv-dnn-yolov4",id:"opencv/opencv-dnn-yolov4",isDocsHomePage:!1,title:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 YOLO v4 \u6743\u91cd\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/opencv/dnn-yolov4.md",slug:"/opencv/opencv-dnn-yolov4",permalink:"/docs/docs/opencv/opencv-dnn-yolov4",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/opencv/dnn-yolov4.md",version:"current",sidebar_label:"DNN-YOLO v4"},i=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"DNN\u6a21\u5757\u7b80\u5355\u4ecb\u7ecd",id:"dnn\u6a21\u5757\u7b80\u5355\u4ecb\u7ecd",children:[]},{value:"\u4e0b\u8f7d\u6587\u4ef6",id:"\u4e0b\u8f7d\u6587\u4ef6",children:[]},{value:"\u5c1d\u8bd5\u5b9e\u73b0",id:"\u5c1d\u8bd5\u5b9e\u73b0",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={toc:i};function s(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(c.b)("p",null,"\u4f7f\u7528 DNN \u6a21\u5757\u9700\u8981\u7f16\u8bd1 ",Object(c.b)("inlineCode",{parentName:"p"},"opencv_contrib")," "),Object(c.b)("p",null,"\u53ef\u4ee5\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Install\uff08\u4ec5CPU\uff09]")),Object(c.b)("p",null,"\u5982\u679c\u9700\u8981\u5f00\u542f GPU \u52a0\u901f\uff0c\u53ef\u4ee5\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Install\uff08GPU\uff09]")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\u5e94\u6dfb\u52a0\u4e0b\u9762\u8fd9\u4e9b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"-DWITH_CUDA=ON \\\n-DOPENCV_DNN_CUDA=ON \\\n-DENABLE_FAST_MATH=1 \\\n-DCUDA_FAST_MATH=1 \\\n-DWITH_CUBLAS=1 \\\n")),Object(c.b)("p",null,"\u5728\u4f60\u6709 GPU \u7684\u60c5\u51b5\u4e0b\u8fd9\u6837\u53ef\u4ee5\u542f\u7528 GPU \u52a0\u901f\u8fd0\u7b97"),Object(c.b)("h2",{id:"dnn\u6a21\u5757\u7b80\u5355\u4ecb\u7ecd"},"DNN\u6a21\u5757\u7b80\u5355\u4ecb\u7ecd"),Object(c.b)("h2",{id:"\u4e0b\u8f7d\u6587\u4ef6"},"\u4e0b\u8f7d\u6587\u4ef6"),Object(c.b)("p",null,"\u5148\u4e0b\u8f7d ",Object(c.b)("inlineCode",{parentName:"p"},"YOLO v4")," \u7684\u914d\u7f6e\u6587\u4ef6\u548c\u9884\u8bad\u7ec3\u7684\u6743\u91cd"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AlexeyAB/darknet/master/cfg/yolov4.cfg"},"yolov4.cfg")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights"},"yolov4.weights"))),Object(c.b)("p",null,"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6 ",Object(c.b)("inlineCode",{parentName:"p"},"yolov4.cfg")," \u4e5f\u53ef\u4ee5\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"opencv_extra")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"testdata/dnn")," \u76ee\u5f55\u4e2d\u627e\u5230"),Object(c.b)("p",null,"\u7136\u540e\u4e0b\u8f7d ",Object(c.b)("inlineCode",{parentName:"p"},"coco_classes.txt")," \u6587\u4ef6\uff0c\u56e0\u4e3a\u9884\u8bad\u7ec3\u7684\u6743\u91cd\u4f7f\u7528\u7684\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"coco")," \u6570\u636e\u96c6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/bubbliiiing/yolov4-pytorch/blob/master/model_data/coco_classes.txt"},"coco_classes.txt"))),Object(c.b)("h2",{id:"\u5c1d\u8bd5\u5b9e\u73b0"},"\u5c1d\u8bd5\u5b9e\u73b0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6a21\u578b\u6587\u4ef6\u7b49\u7684\u8def\u5f84")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"String yolov4_cfg = argv[1]     // \u914d\u7f6e\u6587\u4ef6\nString yolov4_weights = argv[2] // \u6743\u91cd\u6587\u4ef6\nString coco_classes = argv[3]   // \u6807\u7b7e\u96c6\nString file_name = argv[4]      // \u6d4b\u8bd5\u56fe\u7247\u6587\u4ef6\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u6a21\u578b\uff0c\u8bbe\u7f6e\u8ba1\u7b97\u540e\u53f0\u548c\u76ee\u6807\u8bbe\u5907")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"dnn::Net net = dnn::readNetFromDarknet(yolov4_cfg, yolov4_weights);\nnet.setPreferableBackend(dnn::DNN_BACKEND_CUDA);\nnet.setPreferableTarget(dnn::DNN_TARGET_CUDA);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u83b7\u53d6\u7f51\u7edc\u7684\u8f93\u51fa\u5c42\u540d\u79f0")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'vector<String> out_names = net.getUnconnectedOutLayersNames();\nfor (size_t i = 0; i < out_names.size() ; ++i) {\n    cout<< "output layer name: " << out_names[i].c_str() <<endl;\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u6a21\u578b\u7684\u6807\u7b7e\u96c6")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'vector<String> class_names;\nstd::ifstream ifs_classes(coco_classes);\nif (ifs_classes.is_open()) {\n    string class_name = "";\n    while (getline(ifs_classes, class_name)) {\n        class_names.push_back(class_name);\n    }\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u6d4b\u8bd5\u56fe\u7247")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Mat src_img = imread(file_name);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5c06\u56fe\u50cf\u4eceMat\u7c7b\u578b\u8f6c\u6362\u4e3ablob\u7c7b\u578b\uff0c\u5e76\u4f20\u5165\u795e\u7ecf\u7f51\u7edc\u6a21\u578b")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Mat input_blob = dnn::blobFromImage(src_img, 1 / 255.F, src_img.size(), Scalar(), true, false);\n\nnet.setInput(input_blob);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6267\u884c\u524d\u5411\u4f20\u64ad")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"vector<Mat> outs;\nnet.forward(outs, out_names);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8ba1\u7b97FPS")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'// runtime and FPS\nvector<double> layers_time;\ndouble freq = getTickFrequency() / 1000;\ndouble time = net.getPerfProfile(layers_time) / freq;\nString run_time = "run time: " + to_string(time) + "ms";\nputText(src_img, run_time, Point(20, 20), 0, 0.5, Scalar::all(255));\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u83b7\u53d6 box\u3001label")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"vector<Rect> boxes;         // box\nvector<int> class_id;       // label\nvector<float> confidences;  // confidence level\n\nfor (size_t i = 0; i < outs.size(); ++i) {\n    float* data = (float*)(outs[i].data);\n\n    for (int j = 0; j < outs[i].rows; ++j, data += outs[i].cols) {\n        Mat scores = outs[i].row(j).colRange(5, outs[i].cols);\n        Point id_point;\n        double confidence;\n\n        minMaxLoc(scores, nullptr, &confidence, nullptr, &id_point);\n        if (confidence > 0.5) {\n            int center_x = int(data[0] * src_img.cols);\n            int center_y = int(data[1] * src_img.rows);\n            int width = int(data[2] * src_img.cols);\n            int height = int(data[3] * src_img.rows);\n            int tl_x = center_x - width / 2;\n            int tl_y = center_y - height / 2;\n\n            boxes.push_back(Rect(tl_x, tl_y, width, height));\n            class_id.push_back(id_point.x);\n            confidences.push_back(float(confidence));\n        }\n    }\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6781\u5927\u503c\u975e\u6291\u5236\u540e\u7ed8\u5236 box\u3001label")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"vector<int> max_idx;\ndnn::NMSBoxes(boxes, confidences, 0.5, 0.2f , max_idx);\nfor (size_t i = 0; i < max_idx.size(); ++i) {\n    int idx = max_idx[i];\n    Rect box = boxes[idx];\n    String label = class_names[class_id[idx]];\n\n    putText(src_img, label.c_str(), box.tl(), FONT_HERSHEY_SIMPLEX, 1.0, Scalar(255, 0, 0), 2, 8);\n    rectangle(src_img, box, Scalar::all(255), 2, 8, 0);\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"imshow")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'imshow("src_img", src_img);\nwaitKey(0);\n')),Object(c.b)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(c.b)("p",null,"\u7f16\u8bd1\u7a0b\u5e8f\u540e\u4e00\u6b21\u6267\u884c\u8f93\u5165\u6587\u4ef6\u8def\u5f84"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"./opencv-dnn-test <yolov4_cfg_path> <yolov4_weights_path> <coco_classes_path> <file_name_path>\n")),Object(c.b)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/opencv/opencv_yolo_test.png",alt:null})),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_45224869/article/details/106148983"},"dnn\u6a21\u5757\u4e4b\u57fa\u4e8eYOLOv3\uff08Tiny\uff09\u6a21\u578b\u7684\uff08\u5b9e\u65f6\uff09\u5bf9\u8c61\u68c0\u6d4b")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://blog.csdn.net/qq_43019451/article/details/105894552"},"opencv-python dnn\u6a21\u5757\u4f7f\u7528CUDA\u52a0\u901f")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://answers.opencv.org/question/201456/how-to-run-opencv-dnn-on-nvidia-gpu/?answer=201461"},"How to run OpenCV DNN on NVidia GPU")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.pyimagesearch.com/2020/02/03/how-to-use-opencvs-dnn-module-with-nvidia-gpus-cuda-and-cudnn/"},"How to use OpenCV\u2019s \u201cdnn\u201d module with NVIDIA GPUs, CUDA, and cuDNN")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/AlexeyAB/darknet"},"AlexeyAB/darknet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/bubbliiiing/yolov4-pytorch"},"bubbliiiing/yolov4-pytorch"))))}s.isMDXComponent=!0}}]);