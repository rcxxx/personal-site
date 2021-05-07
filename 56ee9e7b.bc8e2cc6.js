(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?c.a.createElement(m,a(a({ref:t},p),{},{components:n})):c.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),o=(n(0),n(173)),l={id:"ros-pcl-topic",title:"ROS \u53d1\u5e03\u548c\u8ba2\u9605 pcl \u8bdd\u9898\u6d88\u606f",sidebar_label:"pcl-topic"},a={unversionedId:"ros/ros-point-cloud/ros-pcl-topic",id:"ros/ros-point-cloud/ros-pcl-topic",isDocsHomePage:!1,title:"ROS \u53d1\u5e03\u548c\u8ba2\u9605 pcl \u8bdd\u9898\u6d88\u606f",description:"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b",source:"@site/docs/ros/ros-point-cloud/pcl-subscriber.md",slug:"/ros/ros-point-cloud/ros-pcl-topic",permalink:"/docs/docs/ros/ros-point-cloud/ros-pcl-topic",editUrl:"https://github.com/rcxxx/docs/tree/master/docs/ros/ros-point-cloud/pcl-subscriber.md",version:"current",sidebar_label:"pcl-topic",sidebar:"\ud83d\udc7drobot",previous:{title:"\u5728 rviz \u4e2d\u53ef\u89c6\u5316 rosbag \u6570\u636e",permalink:"/docs/docs/ros/ros-point-cloud/ros-rosbag-play-rviz"},next:{title:" ",permalink:"/docs/docs/ros/ros-point-cloud/ros-multi_pass_segemntation"}},i=[{value:"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b",id:"pcl-\u5728-ros-\u4e2d\u7684\u6570\u636e\u7c7b\u578b",children:[{value:"\u521b\u5efa\u529f\u80fd\u5305",id:"\u521b\u5efa\u529f\u80fd\u5305",children:[]},{value:"<code>subscriber</code> \u5b9e\u73b0",id:"subscriber-\u5b9e\u73b0",children:[]}]},{value:"reference",id:"reference",children:[]}],p={toc:i};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pcl-\u5728-ros-\u4e2d\u7684\u6570\u636e\u7c7b\u578b"},"PCL \u5728 ros \u4e2d\u7684\u6570\u636e\u7c7b\u578b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Overview"},"PCL Overview \u2014\u2014 ROS Wiki"))),Object(o.b)("p",null,"\u5148\u5728\u6b64\u94fe\u63a5\u4e2d\u5bf9\u6240\u9700\u8981\u7684\u6570\u636e\u7c7b\u578b\u7a0d\u4f5c\u4e86\u89e3"),Object(o.b)("h3",{id:"\u521b\u5efa\u529f\u80fd\u5305"},"\u521b\u5efa\u529f\u80fd\u5305"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"ros")," \u5de5\u4f5c\u7a7a\u95f4\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u529f\u80fd\u5305 ",Object(o.b)("inlineCode",{parentName:"p"},"pcl_test")),Object(o.b)("p",null,"\u8be5\u529f\u80fd\u5305\u6709\u56db\u4e2a\u4f9d\u8d56\u9879 ",Object(o.b)("inlineCode",{parentName:"p"},"pcl_conversions"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"pcl_ros"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"roscpp"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"sensor_msgs")," "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd src/\ncatkin_create_pkg pcl_test pcl_conversions pcl_ros roscpp sensor_msgs\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u529f\u80fd\u5305")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd ..\ncatkin_make\n")),Object(o.b)("h3",{id:"subscriber-\u5b9e\u73b0"},Object(o.b)("inlineCode",{parentName:"h3"},"subscriber")," \u5b9e\u73b0"),Object(o.b)("h4",{id:"\u521b\u5efa\u8282\u70b9"},"\u521b\u5efa\u8282\u70b9"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"src/pcl_test/src")," \u76ee\u5f55\u4e0b\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"pcl_topic.cpp")," \u6587\u4ef6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5305\u542b\u5934\u6587\u4ef6")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"#include <ros/ros.h>\n/*---< PCL >---*/\n#include <pcl_ros/point_cloud.h>\n#include <pcl/point_types.h>\n")),Object(o.b)("p",null,"\u6211\u4eec\u76ee\u7684\u662f\u5c06\u63a5\u6536\u5230\u5e95\u70b9\u4e91\u6570\u636e\u5904\u7406\u540e\u518d\u53d1\u5e03\u51fa\u53bb"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u60f3\u628a\u70b9\u4e91\u6570\u636e\u6570\u636e\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"rviz")," \u4e2d\u53ef\u89c6\u5316\uff0c\u8981\u5c06\u8981\u53d1\u5e03\u7684\u70b9\u4e91\u6570\u636e\u8f6c\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"sensor_msgs::PointCloud2")," \u5f62\u5f0f\uff0c\u53ef\u89c6\u5316\u7684\u65f6\u5019\u4e0d\u4f1a\u51fa\u73b0\u8b66\u544a"),Object(o.b)("li",{parentName:"ul"},"\u5305\u542b\u5934\u6587\u4ef6")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"#include <sensor_msgs/PointCloud2.h>\n")),Object(o.b)("p",null,"\u8981\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"sensor_msgs::PointCloud2")," \u8f6c\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"pcl")," \u4e2d\u7684\u70b9\u4e91\u683c\u5f0f\uff0c\u8fd8\u9700\u8981\u7528\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"pcl_conversions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5305\u542b\u5934\u6587\u4ef6")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"#include <pcl_conversions/pcl_conversions.h>\n")),Object(o.b)("p",null,"\u5b9a\u4e49 ",Object(o.b)("inlineCode",{parentName:"p"},"publihser")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"callback")," \u56de\u8c03\u51fd\u6570\uff0c\u6267\u884c\u8ba2\u9605\u8bdd\u9898\u4e4b\u540e\u7684\u64cd\u4f5c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'ros::Publisher pub;\n\nvoid callback(const sensor_msgs::PointCloud2ConstPtr& input_msg)\n{\n  pcl::PCLPointCloud2* point_cloud = new pcl::PCLPointCloud2;\n  pcl_conversions::toPCL(*input_msg, *point_cloud);\n\n  // \u8fdb\u884c\u5904\u7406\n  /*--- code ---*/\n  // Publish\n  sensor_msgs::PointCloud2 output_msg;\n  pcl_conversions::fromPCL(*point_cloud, output_msg);\n  pub.publish(output_msg);\n  std::cout<<"published  \ud83d\udcad\ud83d\udcad\ud83d\udcad"<<std::endl;\n  ROS_INFO("Cloud: width = %d, height = %d\\n", output_msg.width, output_msg.height);\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd9\u91cc\u8ba2\u9605 ",Object(o.b)("inlineCode",{parentName:"li"},"sensor_msgs::PointCloud2")," \u7684\u6d88\u606f\u7c7b\u578b\uff0c\u5e76\u8f6c\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"pcl::PCLPointCloud2")," \u7c7b\u578b\u6267\u884c\u5904\u7406\uff08\u5047\u8bbe\uff09\uff0c\u518d\u8f6c\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"sensor_msgs::PointCloud2")," \u6267\u884c\u53d1\u5e03")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main"',title:'"main"'},'int main(int argc, char** argv){\n  ros::init(argc, argv, "pcl_topic");\n\n  ros::NodeHandle nh;\n\n  // \u8ba2\u9605\u8bdd\u9898\uff0c\u6267\u884c\u56de\u8c03\u51fd\u6570 \n  // "velodyne_points" \u6362\u4e3a\u4f60\u9700\u8981\u8ba2\u9605\u7684\u8bdd\u9898\u540d\n  ros::Subscriber sub = nh.subscribe("velodyne_points", 1, callback);\n  pub = nh.advertise<sensor_msgs::PointCloud2>("output", 1);\n\n  ros::spin();\n\n  return 0;\n}\n')),Object(o.b)("p",null,"\u5728\u529f\u80fd\u5305\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"CMakeLists.txt")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"build")," \u90e8\u5206\u52a0\u5165"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-CMakeLists"},"add_executable(pcl_topic src/pcl_topic.cpp)\ntarget_link_libraries(pcl_topic ${catkin_LIBRARIES})\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u529f\u80fd\u5305")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"catkin_make\n")),Object(o.b)("p",null,"\u8fd0\u884c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"source devel/setup.bash\nroscore\nrosrun pcl_test pcl_topic\n")),Object(o.b)("p",null,"\u7136\u540e\u8fd0\u884c\u4e00\u4e2a\u76f8\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"bag")," \u5305\uff0c\u6267\u884c\u53d1\u5e03"),Object(o.b)("p",null,"\u6210\u529f\u8ba2\u9605\u8bdd\u9898"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/pcl_topic_sub.png",alt:null})),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"rviz")," \u4e2d\u53ef\u89c6\u5316"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/pcl_topic_rviz.png",alt:null})),Object(o.b)("h2",{id:"reference"},"reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://dabit-industries.github.io/turtlebot2-tutorials/13-ROSPCL.html"},"PCL with ROS using C++ \u2014\u2014 turtlebot2-tutorials")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Overview"},"PCL Overview \u2014\u2014 ROS Wiki")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://answers.ros.org/question/325030/how-to-read-a-point-cloud-pcd-file-and-send-it-to-a-rosbag/"},"How to read a point cloud (.pcd) file and send it to a rosbag")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://wiki.ros.org/pcl/Tutorials"},"How to use a PCL tutorial in ROS \u2014\u2014 ROS Wiki")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.guyuehome.com/25024"},"ROS\u7cfb\u7edf\u5b66\u4e6011---\u70b9\u4e91\u6570\u636e\u7684\u53d1\u9001\u548c\u63a5\u6536")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1692529"},"ROS\u4e0ePCL\u4e2d\u70b9\u4e91\u6570\u636e\u4e4b\u95f4\u7684\u8f6c\u6362")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1477011"},"\u5982\u4f55\u5728ROS\u4e2d\u4f7f\u7528PCL\u2014\u6570\u636e\u683c\u5f0f\uff081\uff09")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://sinnammanyo.cn/docs/docs/ros/ros-point-cloud/ros-rosbag-play-rviz"},"\u5728 rviz \u4e2d\u53ef\u89c6\u5316 rosbag \u6570\u636e"))))}s.isMDXComponent=!0}}]);