(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),c=t(7),r=(t(0),t(157)),o={id:"cc-classes-and-objects-2",title:"\u62bd\u8c61\u3001\u5c01\u88c5\u3001\u7ee7\u627f\u3001\u591a\u6001",sidebar_label:"\u7279\u6027"},b={unversionedId:"cc/cc-classes-and-objects-2",id:"cc/cc-classes-and-objects-2",isDocsHomePage:!1,title:"\u62bd\u8c61\u3001\u5c01\u88c5\u3001\u7ee7\u627f\u3001\u591a\u6001",description:"\u62bd\u8c61\uff08Abstraction\uff09",source:"@site/docs/cc/\u7c7b\u548c\u5bf9\u8c612.md",slug:"/cc/cc-classes-and-objects-2",permalink:"/docs/docs/cc/cc-classes-and-objects-2",version:"current",sidebar_label:"\u7279\u6027",sidebar:"\ud83d\udcbb",previous:{title:"C++ \u4e2d\u7684\u7c7b\u548c\u5bf9\u8c61",permalink:"/docs/docs/cc/cc-classes-and-objects"},next:{title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",permalink:"/docs/docs/cc/cc-generic-and-template"}},l=[{value:"\u62bd\u8c61\uff08Abstraction\uff09",id:"\u62bd\u8c61\uff08abstraction\uff09",children:[]},{value:"\u5c01\u88c5\uff08Encapsulation\uff09",id:"\u5c01\u88c5\uff08encapsulation\uff09",children:[]},{value:"\u7ee7\u627f\uff08Inheritance\uff09",id:"\u7ee7\u627f\uff08inheritance\uff09",children:[]},{value:"\u591a\u6001\uff08Polymorphism\uff09",id:"\u591a\u6001\uff08polymorphism\uff09",children:[]}],i={toc:l};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u62bd\u8c61\uff08abstraction\uff09"},"\u62bd\u8c61\uff08Abstraction\uff09"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u62bd\u8c61\u662fC ++\u4e2d\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u6700\u57fa\u672c\u548c\u6700\u91cd\u8981\u7684\u529f\u80fd\u4e4b\u4e00\u3002\u62bd\u8c61\u610f\u5473\u7740\u4ec5\u663e\u793a\u57fa\u672c\u4fe1\u606f\u5e76\u9690\u85cf\u7ec6\u8282\u3002\u6570\u636e\u62bd\u8c61\u662f\u6307\u4ec5\u5411\u5916\u754c\u63d0\u4f9b\u6709\u5173\u6570\u636e\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u9690\u85cf\u80cc\u666f\u7ec6\u8282\u6216\u5b9e\u73b0\u3002")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4f8b\u5982\u8f66\u8f86\u884c\u9a76\u65f6\uff0c\u9a7e\u9a76\u5458\u53ea\u77e5\u9053\u8e29\u4e0b\u6cb9\u95e8\u8f66\u8f86\u4f1a\u52a0\u901f\uff0c\u800c\u8e29\u4e0b\u5239\u8f66\u8f66\u8f86\u4f1a\u505c\u6b62\uff0c\u4f46\u4e0d\u77e5\u9053\u8e29\u4e0b\u6cb9\u95e8\u65f6\u8f66\u8f86\u7684\u901f\u5ea6\u662f\u600e\u6837\u589e\u52a0\u7684\uff0c\u8fd9\u5c31\u662f\u62bd\u8c61")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7c7b\u4e2d\u7684\u62bd\u8c61\uff1a\u6211\u4eec\u4f7f\u7528\u53ef\u7528\u7684\u8bbf\u95ee\u8bf4\u660e\u7b26\u5bf9\u6570\u636e\u6210\u5458\u548c\u6210\u5458\u51fd\u6570\u8fdb\u884c\u5206\u7ec4\u3002\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u51b3\u5b9a\u54ea\u4e2a\u6570\u636e\u6210\u5458\u5bf9\u5916\u754c\u53ef\u89c1\uff0c\u800c\u54ea\u4e2a\u5219\u4e0d\u53ef\u89c1\u3002")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u5728\u5934\u6587\u4ef6\u4e2d\u4e5f\u5b58\u5728\u62bd\u8c61\uff1a\u4f8b\u5982\uff0c ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"math.h"))," \u5934\u6587\u4ef6\u4e2d\u5b58\u5728\u7684 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"pow()"))," \u65b9\u6cd5\u3002\u6bcf\u5f53\u6211\u4eec\u9700\u8981\u8ba1\u7b97\u6570\u5b57\u7684\u5e42\u65f6\uff0c\u6211\u4eec\u53ea\u9700\u8c03\u7528 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"math.h"))," \u5934\u6587\u4ef6\u4e2d\u5b58\u5728\u7684\u51fd\u6570 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"pow()"))," \u5e76\u5c06\u6570\u5b57\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u800c\u65e0\u9700\u4e86\u89e3\u8be5\u51fd\u6570\u5b9e\u9645\u6839\u636e\u5176\u8ba1\u7b97\u6570\u5b57\u7684\u5e42\u7684\u5e95\u5c42\u7b97\u6cd5\u3002"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u5c01\u88c5\uff08encapsulation\uff09"},"\u5c01\u88c5\uff08Encapsulation\uff09"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5728\u9762\u5411\u5bf9\u8c61\u7684\u7f16\u7a0b\u4e2d\uff0c\u5c01\u88c5\u88ab\u5b9a\u4e49\u4e3a\u5c06\u6570\u636e\u548c\u64cd\u4f5c\u5b83\u4eec\u7684\u529f\u80fd\u7ed1\u5b9a\u5728\u4e00\u8d77\u3002")),Object(r.b)("p",null,"\u770b\u5982\u4e0b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"// Encapsulation \n#include<iostream> \nusing namespace std; \nclass Encapsulation \n{ \nprivate: \n    int x; \npublic: \n    void set(int a) \n    { \n        x =a; \n    } \n    int get() \n    { \n        return x; \n    } \n}; \nint main() \n{ \n    Encapsulation encapsulation; \n    encapsulation.set(0); \n    cout<<encapsulation.get(); \n    return 0; \n} \n")),Object(r.b)("p",null,"\u53d8\u91cf ",Object(r.b)("strong",{parentName:"p"},"x")," \u88ab\u8bbe\u4e3a\u79c1\u6709\u3002\u53ea\u80fd\u4f7f\u7528\u7c7b\u5185\u90e8\u63d0\u4f9b\u7684 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"get()"))," \u548c ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"set()"))," \u51fd\u6570\u6765\u8bbf\u95ee\u548c\u64cd\u4f5c\u6b64\u53d8\u91cf\u3002\u5728\u8fd9\u91cc\uff0c\u53d8\u91cf ",Object(r.b)("strong",{parentName:"p"},"x")," \u548c\u51fd\u6570 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"get()"))," \u548c ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"set()"))," \u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u8fd9\u5c31\u662f\u5c01\u88c5"),Object(r.b)("p",null,"\u8bbf\u95ee\u8bf4\u660e\u7b26\u5728C ++\u4e2d\u5b9e\u73b0\u5c01\u88c5\u4e2d\u8d77\u7740\u91cd\u8981\u4f5c\u7528\u3002\u5b9e\u73b0\u5c01\u88c5\u7684\u8fc7\u7a0b\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u6b65\u9aa4\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u6570\u636e\u6210\u5458\u5e94\u4f7f\u7528\u79c1\u6709\u8bbf\u95ee\u8bf4\u660e\u7b26\u6807\u8bb0\u4e3a\u79c1\u6709"),Object(r.b)("li",{parentName:"ol"},"\u64cd\u7eb5\u6570\u636e\u6210\u5458\u7684\u6210\u5458\u51fd\u6570\u5e94\u4f7f\u7528\u516c\u5171\u8bbf\u95ee\u8bf4\u660e\u7b26\u6807\u8bb0\u4e3a\u516c\u5171")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u5c01\u88c5\u4f1a\u5bfc\u81f4\u6570\u636e\u7684\u62bd\u8c61\u6216\u9690\u85cf"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u7ee7\u627f\uff08inheritance\uff09"},"\u7ee7\u627f\uff08Inheritance\uff09"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u7c7b\u4ece\u53e6\u4e00\u4e2a\u7c7b\u6d3e\u751f\u5c5e\u6027\u548c\u7279\u6027\u7684\u80fd\u529b\u79f0\u4e3a\u7ee7\u627f\u3002\u7ee7\u627f\u662f\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u6700\u91cd\u8981\u529f\u80fd\u4e4b\u4e00"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8981\u4ece\u7c7b\u7ee7\u627f\uff0c\u8bf7\u4f7f\u7528 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},":"))),Object(r.b)("li",{parentName:"ul"},"\u7ee7\u627f\u6982\u5ff5\u5206\u4e3a\u4e24\u7c7b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6d3e\u751f\u7c7b\uff08\u5b50\u7c7b\uff09-\u4ece\u53e6\u4e00\u4e2a\u7c7b\u7ee7\u627f\u7684\u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u57fa\u7c7b\uff08\u7236\u7c7b\uff09-\u4ece\u5176\u7ee7\u627f\u7684\u7c7b"))))),Object(r.b)("p",null,"\u5b9e\u73b0\u7ee7\u627f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;  \nClass Student {\npublic:\n    string school = "school"\n    void grade(){\n        cout << "Grade One" <<endl;\n    }\n}\nClass Boy : public Student {\npublic:\n    string name = "boy\'s name"\n}\nint main() {\n    Boy boy;\n    boy.grade();\n    cout << boy.school + " " + boy.name << endl;\n    return 0;\n}\n')),Object(r.b)("p",null,"\u7c7b\u53ef\u4ee5\u591a\u7ea7\u7ee7\u627f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'Class BoyHobby : public Boy {\npublic:\n    string hobby = "Interested in code"\n}\nint main() {\n    BoyHobby boy;\n    boy.grade();\n    cout << boy.school + " " + boy.name + " " + boy.hobby<< endl;\n    return 0;\n}\n')),Object(r.b)("p",null,"\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u7531\u591a\u4e2a\u57fa\u7c7b\u6d3e\u751f\u800c\u6765"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"class IDcard: public Student, public Boy, public BoyHobby {\n    // Code\n};\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u591a\u6001\uff08polymorphism\uff09"},"\u591a\u6001\uff08Polymorphism\uff09"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u5c06\u591a\u6001\u5b9a\u4e49\u4e3a\u6d88\u606f\u4ee5\u591a\u79cd\u5f62\u5f0f\u663e\u793a\u7684\u80fd\u529b\u3002"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u4eba\u53ef\u4ee5\u540c\u65f6\u5177\u6709\u4e0d\u540c\u7684\u7279\u5f81\u3002\u4f8b\u5982\u4e00\u4e2a\u7537\u4eba\uff0c\u662f\u7236\u4eb2\uff0c\u4e08\u592b\uff0c\u5de5\u4eba\u3002\u56e0\u6b64\uff0c\u540c\u4e00\u4e2a\u4eba\u5728\u4e0d\u540c\u60c5\u51b5\u4e0b\u5177\u6709\u4e0d\u540c\u7684\u884c\u4e3a\u3002\u8fd9\u79f0\u4e3a\u591a\u6001\u3002"),Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u64cd\u4f5c\u5728\u4e0d\u540c\u60c5\u51b5\u4e0b\u53ef\u80fd\u8868\u73b0\u51fa\u4e0d\u540c\u7684\u884c\u4e3a\u3002\u884c\u4e3a\u53d6\u51b3\u4e8e\u64cd\u4f5c\u4e2d\u4f7f\u7528\u7684\u6570\u636e\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},"\u591a\u6001\u88ab\u5e7f\u6cdb\u7528\u4e8e\u5b9e\u73b0\u7ee7\u627f")),Object(r.b)("h3",{parentName:"blockquote",id:"c\u4e2d\u591a\u6001\u6027\u7684\u4e24\u79cd\u7c7b\u578b"},"C++\u4e2d\u591a\u6001\u6027\u7684\u4e24\u79cd\u7c7b\u578b"),Object(r.b)("h4",{parentName:"blockquote",id:"\u7f16\u8bd1\u65f6\u591a\u6001\uff1a\u8fd9\u79cd\u591a\u6001\u6027\u662f\u901a\u8fc7\u51fd\u6570\u91cd\u8f7d\u6216\u8fd0\u7b97\u7b26\u91cd\u8f7d\u6765\u5b9e\u73b0\u7684"},"\u7f16\u8bd1\u65f6\u591a\u6001\uff1a\u8fd9\u79cd\u591a\u6001\u6027\u662f\u901a\u8fc7\u51fd\u6570\u91cd\u8f7d\u6216\u8fd0\u7b97\u7b26\u91cd\u8f7d\u6765\u5b9e\u73b0\u7684"),Object(r.b)("p",{parentName:"blockquote"},"\u7f16\u8bd1\u65f6\u5c31\u786e\u5b9a\u4e86\u591a\u6001\u6027 \u2014\u2014 \u9759\u6001\u591a\u6001"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u8fd0\u7b97\u7b26\u91cd\u8f7d\uff1aC++\u63d0\u4f9b\u4e86\u91cd\u8f7d\u8fd0\u7b97\u7b26\u7684\u9009\u9879")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5047\u8bbe\u6709\u4e24\u4e2a\u590d\u6570 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"10 + 5i")),"\u3001",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"2 + 4i")),"\uff0c\u6c42\u5b83\u4eec\u7684\u548c\uff0c\u53ef\u5982\u4e0b\u5b9e\u73b0")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'#include<iostream> \nusing namespace std; \nclass Complex { \nprivate: \n    int real_part, imaginary_part; \npublic: \n    Complex(int r = 0, int i =0){\n        real_part = r;\n        imaginary_part = i;\n    } \n    Complex operator + (Complex const &obj) { \n        Complex res; \n        res.real_part = real_part + obj.real_part; \n        res.imaginary_part = imaginary_part + obj.imaginary_part; \n        return res; \n    } \n    void print() { \n        cout << real_part << " + " << imaginary_part<<"i"<< endl; \n    } \n}; \nint main() \n{ \n    Complex complex1(10, 5), complex2(2, 4); \n    Complex complex3 = complex1 + complex2; \n    c3.print(); \n} \n')),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8fd0\u7b97\u7b26 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"'+'"))," \u662f\u52a0\u6cd5\u8fd0\u7b97\u7b26\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u91cd\u8f7d\u6765\u5b9e\u73b0\u4e24\u4e2a\u590d\u6570\u4e4b\u95f4\u7684\u76f8\u52a0")),Object(r.b)("ol",{parentName:"blockquote",start:2},Object(r.b)("li",{parentName:"ol"},"\u51fd\u6570\u91cd\u8f7d\uff1a\u5982\u679c\u6709\u591a\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u4f46\u53c2\u6570\u4e0d\u540c\u7684\u51fd\u6570\uff0c\u5219\u79f0\u8fd9\u4e9b\u51fd\u6570\u4e3a\u91cd\u8f7d\u3002\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u53c2\u6570\u6570\u91cf\u548c\u66f4\u6539\u53c2\u6570\u7c7b\u578b\u6765\u91cd\u8f7d\u51fd\u6570")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'#include <bits/stdc++.h> \nusing namespace std; \nclass Example { \npublic: \n    void func(int x) { \n        cout << "value of x is " << x << endl; \n    } \n    void func(double x) { \n        cout << "value of x is " << x << endl; \n    } \n    void func(int x, int y) { \n        cout << "value of x and y is " << x << ", " << y << endl; \n    } \n}; \nint main() { \n    Example example; \n    example.func(0);  \n    example.func(3.14159); \n    example.func(100,1000); \n    return 0; \n}\n')),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u540d\u4e3a ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"func"))," \u7684\u51fd\u6570\u5728\u4e09\u79cd\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\u7684\u884c\u4e3a\u4e0d\u540c\uff0c\u8fd9\u5c31\u662f\u591a\u6001\u7684\u5c5e\u6027\u3002")),Object(r.b)("h4",{parentName:"blockquote",id:"\u8fd0\u884c\u65f6\u591a\u6001\uff1a\u8fd9\u79cd\u7c7b\u578b\u7684\u591a\u6001\u6027\u662f\u901a\u8fc7\u51fd\u6570\u8986\u76d6\u5b9e\u73b0\u7684"},"\u8fd0\u884c\u65f6\u591a\u6001\uff1a\u8fd9\u79cd\u7c7b\u578b\u7684\u591a\u6001\u6027\u662f\u901a\u8fc7\u51fd\u6570\u8986\u76d6\u5b9e\u73b0\u7684"),Object(r.b)("p",{parentName:"blockquote"},"\u8fd0\u884c\u65f6\u591a\u6001\u4e3b\u8981\u662f\u6307\u5728\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u52a8\u6001\u7ed1\u5b9a\u6240\u8c03\u7528\u7684\u51fd\u6570\uff0c\u52a8\u6001\u5730\u627e\u5230\u4e86\u8c03\u7528\u51fd\u6570\u7684\u5165\u53e3\u5730\u5740\uff0c\u4ece\u800c\u786e\u5b9a\u5230\u5e95\u8c03\u7528\u54ea\u4e2a\u51fd\u6570\u3002\u2014\u2014 \u52a8\u6001\u591a\u6001"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5728C++\u4e2d\uff0c\u8fd0\u884c\u671f\u591a\u6001\u4e3b\u8981\u901a\u8fc7\u865a\u51fd\u6570\u6765\u5b9e\u73b0\uff0c\u5e76\u4e14\u4e00\u5b9a\u8981\u6709\u7ee7\u627f\u5173\u7cfb"),Object(r.b)("li",{parentName:"ul"},"\u770b\u4ee3\u7801\u5b9e\u73b0")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;    \nclass parent {\npublic:\n    parent() {}\n    // \u7236\u7c7b\u4e2d\u5b9a\u4e49\u7684\u865a\u51fd\u6570\n    virtual void eat() {\n        cout << "Parent eat." << endl;\n    }\n    // \u975e\u865a\u51fd\u6570\n    void drink() {\n        cout << "Parent drink." << endl;\n    }\n};\nclass child : public parent\n{\npublic:\n    child () {}\n    // \u5b50\u7c7b\u91cd\u5199\u4e86\u7236\u7c7b\u7684\u865a\u51fd\u6570\n    void eat() {\n        cout << "Child eat." << endl;\n    }\n    // \u5b50\u7c7b\u8986\u76d6\u4e86\u7236\u7c7b\u7684\u51fd\u6570\n    void drink() {\n        cout << "Child drink." << endl;\n    }\n    // \u7236\u7c7b\u6ca1\u6709\u7684\u51fd\u6570\n    void childLove() {\n        cout << "Child love playing." << endl;\n    }\n};\nint main()\n{\n    parent* pa = new child();\n    pa->eat();  // \u4f53\u73b0\u4e86\u8fd0\u884c\u65f6\u591a\u6001\n    pa->drink();\n    // pa->childLove(); // \u7236\u7c7b\u7684\u6307\u9488\u4e0d\u80fd\u8c03\u7528\u7236\u7c7b\u6ca1\u6709\u7684\u51fd\u6570\n    return 0;\n}\n')),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6700\u540e\u8f93\u51fa\u7ed3\u679c")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre"},"Child eat.\nParent drink.\n")),Object(r.b)("hr",{parentName:"blockquote"})))}p.isMDXComponent=!0},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),p=function(e){var n=c.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return t?c.a.createElement(d,b(b({ref:n},i),{},{components:t})):c.a.createElement(d,b({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<r;i++)o[i]=t[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);