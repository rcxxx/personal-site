(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{144:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),s=(r(0),r(162)),i={id:"ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528",title:"ROS \u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528",sidebar_label:"\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f"},c={unversionedId:"ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528",id:"ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528",isDocsHomePage:!1,title:"ROS \u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528",description:"\u5982\u4f55\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",source:"@site/docs/ros/ros-\u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528.md",slug:"/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528",permalink:"/docs/docs/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-\u8bdd\u9898\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u4f7f\u7528.md",version:"current",sidebar_label:"\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",sidebar:"\ud83d\udc7drobot",previous:{title:"ros-callback",permalink:"/docs/docs/ros/ros-callback"},next:{title:"ROS \u4e2d\u89e3\u6790 bag \u5305\u4e2d\u7684\u70b9\u4e91\u6570\u636e",permalink:"/docs/docs/ros/ros-point-cloud/ros-bag-to-pcd"}},o=[{value:"\u5982\u4f55\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",children:[{value:"\u521b\u5efa msg \u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a <code>/msg</code> \u6587\u4ef6\u5939",id:"\u521b\u5efa-msg-\u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a-msg-\u6587\u4ef6\u5939",children:[]},{value:"\u5728 package.xml \u4e2d\u6dfb\u52a0\u529f\u80fd\u5305\u4f9d\u8d56",id:"\u5728-packagexml-\u4e2d\u6dfb\u52a0\u529f\u80fd\u5305\u4f9d\u8d56",children:[]},{value:"\u5728 CMakeLists.txt \u4e2d\u6dfb\u52a0\u7f16\u8bd1\u9009\u9879",id:"\u5728-cmakeliststxt-\u4e2d\u6dfb\u52a0\u7f16\u8bd1\u9009\u9879",children:[]},{value:"\u7f16\u8bd1\u751f\u6210\u8bed\u8a00\u76f8\u5173\u6587\u4ef6",id:"\u7f16\u8bd1\u751f\u6210\u8bed\u8a00\u76f8\u5173\u6587\u4ef6",children:[]}]},{value:"\u521b\u5efa Publisher &amp; Subscriber",id:"\u521b\u5efa-publisher--subscriber",children:[]},{value:"\u914d\u7f6e <code>CMakeList.txt</code>",id:"\u914d\u7f6e-cmakelisttxt",children:[]},{value:"\u7f16\u8bd1\u529f\u80fd\u5305",id:"\u7f16\u8bd1\u529f\u80fd\u5305",children:[]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[]}],l={toc:o};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f"},"\u5982\u4f55\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f"),Object(s.b)("h3",{id:"\u521b\u5efa-msg-\u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a-msg-\u6587\u4ef6\u5939"},"\u521b\u5efa msg \u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a ",Object(s.b)("inlineCode",{parentName:"h3"},"/msg")," \u6587\u4ef6\u5939"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-msg",metastring:'title="Person.msg"',title:'"Person.msg"'},"string name\nunit8 sex\nunit8 age\n\nunit8 ubknown = 8\nunit8 male = 1\nunit8 female = 2\n")),Object(s.b)("h3",{id:"\u5728-packagexml-\u4e2d\u6dfb\u52a0\u529f\u80fd\u5305\u4f9d\u8d56"},"\u5728 package.xml \u4e2d\u6dfb\u52a0\u529f\u80fd\u5305\u4f9d\u8d56"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"<build_depend>message_generation</build_depend>"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"<exec_depend>message_runtime</exec_depend>")))),Object(s.b)("h3",{id:"\u5728-cmakeliststxt-\u4e2d\u6dfb\u52a0\u7f16\u8bd1\u9009\u9879"},"\u5728 CMakeLists.txt \u4e2d\u6dfb\u52a0\u7f16\u8bd1\u9009\u9879"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u5728 find_package() \u4e2d\u6dfb\u52a0 ",Object(s.b)("inlineCode",{parentName:"p"},"message_generation"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u5728 ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"Declare ROS messages, services and actions"))," \u90e8\u5206\u6dfb\u52a0"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"add_message_files(FILES Person.msg)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"generate_messages(DEPENDENCIES std_msgs)")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u5728 catkin_package() \u4e2d\u6dfb\u52a0 ",Object(s.b)("inlineCode",{parentName:"p"},"message_runtime")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u53d6\u6d88\u6389 ",Object(s.b)("inlineCode",{parentName:"li"},"CATKIN_DEPENDS")," \u90e8\u5206\u7684\u6ce8\u91ca")))),Object(s.b)("h3",{id:"\u7f16\u8bd1\u751f\u6210\u8bed\u8a00\u76f8\u5173\u6587\u4ef6"},"\u7f16\u8bd1\u751f\u6210\u8bed\u8a00\u76f8\u5173\u6587\u4ef6"),Object(s.b)("p",null,"\u5728 ",Object(s.b)("inlineCode",{parentName:"p"},"catkin_ws/")," \u6839\u76ee\u5f55\u4e0b"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"catkin_make\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u65f6\u53ef\u80fd\u62a5\u9519\uff0c\u63d0\u793a")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'  File "/opt/ros/melodic/lib/python2.7/dist-packages/genmsg/template_tools.py", line 39, in <module>\n    import em\nImportError: No module named em\n    \xb7\xb7\xb7\n    \xb7\xb7\xb7\n  File "/opt/ros/melodic/lib/python2.7/dist-packages/genpy/message.py", line 48, in <module>\n    import yaml\nImportError: No module named yaml\n')),Object(s.b)("p",null,"\u6309\u7167\u63d0\u793a\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"python -m pip install empy"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"pip install pyyaml")))),Object(s.b)("p",null,"\u518d\u6b21\u7f16\u8bd1\u540e\u6210\u529f"),Object(s.b)("hr",null),Object(s.b)("h2",{id:"\u521b\u5efa-publisher--subscriber"},"\u521b\u5efa Publisher & Subscriber"),Object(s.b)("p",null,"\u5728 ",Object(s.b)("inlineCode",{parentName:"p"},"learning_topic")," \u529f\u80fd\u5305\u7684 ",Object(s.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e2d\u65b0\u5efa ",Object(s.b)("inlineCode",{parentName:"p"},"person_publisher.cpp")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"person_subscriber.cpp")," \u6587\u4ef6"),Object(s.b)("p",null,"\u7f16\u8f91\u5185\u5bb9\u5982\u4e0b"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="person_publisher.cpp"',title:'"person_publisher.cpp"'},'/**\n * @file person_publisher.cpp\n * @brief \u8be5\u4f8b\u7a0b\u5c06\u53d1\u5e03 /person_info \u8bdd\u9898\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u7c7b\u578b learning_topic::Person\n */\n\n#include <ros/ros.h>\n#include "learning_topic/Person.h"\n\nint main(int argc, char **argv) {\n    // ROS \u8282\u70b9\u521d\u59cb\u5316\n    ros::init(argc, argv, "person_publisher");\n\n    // \u521b\u5efa\u8282\u70b9\u53e5\u67c4\n    ros::NodeHandle node;\n\n    // \u521b\u5efa\u4e00\u4e2a publisher \u6ce8\u518c\n    // \u53d1\u5e03\u540d\u4e3a /person_info \u7684 topic\n    // learning_topic::Person\n    // \u961f\u5217\u957f\u5ea6\u662f 10\n    ros::Publisher person_info_pub = node.advertise<learning_topic::Person>("/person_info", 10);\n\n    // \u8bbe\u7f6e\u5faa\u73af\u7684\u9891\u7387\n    ros::Rate loop_rate(1);\n\n    int count = 0;\n    while (ros::ok())\n    {\n        // \u521d\u59cb\u5316 geometry_msgs::Twist \u7c7b\u578b\u7684\u6d88\u606f\n        learning_topic::Person person_msg;\n        person_msg.name = "Tom";\n        person_msg.age = 18;\n        person_msg.sex = learning_topic::Person::male;\n\n        // \u53d1\u5e03\u6d88\u606f\n        person_info_pub.publish(person_msg);\n        ROS_INFO("Publsh Person Info: name:%s  age:%d  sex:%d", person_msg.name.c_str(), person_msg.age, person_msg.sex);\n\n        // \u6309\u7167\u5faa\u73af\u9891\u7387\u5ef6\u65f6\n        loop_rate.sleep();\n    }\n    \n    return 0;\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="person_subscriber.cpp"',title:'"person_subscriber.cpp"'},'/**\n * @file person_subscriber.cpp\n * @brief \u8be5\u4f8b\u7a0b\u5c06\u8ba2\u9605 /person_info \u8bdd\u9898\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u7c7b\u578b learning_topic::Person\n */\n\n#include <ros/ros.h>\n#include "learning_topic/Person.h"\n\n// \u63a5\u6536\u5230\u8ba2\u9605\u7684\u6d88\u606f\u540e\uff0c\u4f1a\u8fdb\u5165\u6d88\u606f\u56de\u8c03\u51fd\u6570\n\nvoid personInfoCallback(const learning_topic::Person::ConstPtr& msg){\n    // \u5c06\u63a5\u6536\u5230\u7684\u6d88\u606f\u6253\u5370\u51fa\u6765\n    ROS_INFO("Subcribe Person Info: name:%s  age:%d  sex:%d", msg->name.c_str(), msg->age, msg->sex);\n}\n\nint main(int argc, char **argv) {\n    // ROS \u8282\u70b9\u521d\u59cb\u5316\n    ros::init(argc, argv, "person_subscriber");\n\n    // \u521b\u5efa\u8282\u70b9\u53e5\u67c4\n    ros::NodeHandle node;\n\n    // \u521b\u5efa\u4e00\u4e2a subscriber\n    // \u8ba2\u9605\u540d\u4e3a /person_info \u7684 topic\n    // \u6ce8\u518c\u56de\u8c03\u51fd\u6570 personInfoCallback\n    ros::Subscriber person_info_sub = node.subscribe("/person_info", 10, personInfoCallback);\n\n    // \u5faa\u73af\u7b49\u5f85\u56de\u8c03\u51fd\u6570\n    ros::spin();\n    \n    return 0;\n}\n')),Object(s.b)("h2",{id:"\u914d\u7f6e-cmakelisttxt"},"\u914d\u7f6e ",Object(s.b)("inlineCode",{parentName:"h2"},"CMakeList.txt")),Object(s.b)("p",null,"\u7f16\u8f91 ",Object(s.b)("inlineCode",{parentName:"p"},"learning_topic/CMakeList.txt")," \uff0c\u5728\u6587\u4ef6\u4e2d\u7684 ",Object(s.b)("inlineCode",{parentName:"p"},"build")," \u90e8\u5206\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-makefile"},"add_executable(person_publisher src/person_publisher.cpp)\ntarget_link_libraries(person_publisher ${catkin_LIBRARIES})\nadd_dependencies(person_publisher ${PROJECT_NAME}_generate_messages_cpp)\n\nadd_executable(person_subscriber src/person_subscriber.cpp)\ntarget_link_libraries(person_subscriber ${catkin_LIBRARIES})\nadd_dependencies(person_subscriber ${PROJECT_NAME}_generate_messages_cpp)\n")),Object(s.b)("p",null,"-\u81ea\u5b9a\u4e49\u7684\u8bdd\u9898\u6d88\u606f\u7f16\u8bd1\u65f6\u4f1a\u751f\u6210\u4e00\u4e9b\u52a8\u6001\u6587\u4ef6\uff0c\u9700\u8981\u7528 ",Object(s.b)("inlineCode",{parentName:"p"},"add_dependencies()")," \u6765\u8fdb\u884c\u94fe\u63a5"),Object(s.b)("h2",{id:"\u7f16\u8bd1\u529f\u80fd\u5305"},"\u7f16\u8bd1\u529f\u80fd\u5305"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/\ncatkin_make\nsource ~/catkin_ws/devel/setup.bash\n")),Object(s.b)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),Object(s.b)("p",null,"\u5f00\u542f\u4e09\u4e2a\u7ec8\u7aef\u5206\u522b\u8fd0\u884c"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",1:!0,className:"language-bash",metastring:'title="\u7ec8\u7aef 1 roscore"',title:'"\u7ec8\u7aef','roscore"':!0},"cd ~/catkin_ws/\nroscore\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="\u7ec8\u7aef 2 person_publisher"',title:'"\u7ec8\u7aef','person_publisher"':!0},"cd ~/catkin_ws/\nsource devel/setup.bash\nrosrun learning_topic person_publisher\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",3:!0,className:"language-bash",metastring:'title="\u7ec8\u7aef 3 person_subscriber"',title:'"\u7ec8\u7aef','person_subscriber"':!0},"cd ~/catkin_ws/\nsource devel/setup.bash\nrosrun learning_topic person_subscriber\n")),Object(s.b)("p",null,"\u6548\u679c\u5982\u4e0b\n",Object(s.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B6%88%E6%81%AF.png",alt:null})),Object(s.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u81ea\u5b9a\u4e49\u7684\u6d88\u606f\u7ed3\u6784\u6210\u529f\u7684\u53d1\u5e03\u548c\u8ba2\u9605"))}p.isMDXComponent=!0},162:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},b=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(r),m=t,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||s;return r?a.a.createElement(d,c(c({ref:n},l),{},{components:r})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);