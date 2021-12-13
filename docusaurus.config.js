const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: "Rcxxx's Personal Site",
    tagline: '',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: './img/icons/lzumi-icon-05-128x128.jpg',    

    url: 'https://sinnammanyo.cn',
    baseUrl: '/personal-site/',
    organizationName: 'rcxxx', // Usually your GitHub org/user name.
    projectName: 'personal-site', // Usually your repo name.
    themeConfig: {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌑️',
          lightIcon: '🌞',
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      hideableSidebar: true,
      navbar: {
        hideOnScroll: true, // 自动隐藏导航栏
        logo: {
          alt: 'My Site Logo',
          src: 'img/personal/ctrl-cv.png'
        },
        items: [
          {
            to: 'docs/',
            label: 'README',
            position: 'left',
          },

          {
            type: 'dropdown',
            label: '🖥️',
            position: 'left',
            items: [
              {label: '💻 PC', to:'docs/category/devices'},
              {label: '⌨️ programming', to:'docs/category/C-C_plus_plus'},
              {label: '👀CV', to:'docs/category/OpenCV'},
              {label: '🎖️robot', to:'docs/category/RC-RM'},
            ],
          },

          {
            to: 'docs/category/just-paly',
            label: '🎮🍻',
            position: 'right',
          },
          
          {
            to: 'docs/category/summary',
            label: '💯studio',
            position: 'right',
          },
          

        //   {
        //     label: '💻',
        //     position: 'left',
        //     items: [
        //       { label: 'C/C++', to: '/docs/cc/cc-classes-and-objects'},
        //       { label: 'Python', to: '/docs/py/python-serial'},
        //       { label: '数据结构', to: '/docs/data-structures/大话数据结构/data-structures-introduction'},
        //       { label: '设计模式', to: '/docs/design-pattern/design-pattern-UML-class-diagram'},
        //       { label: 'ios', to: '/docs/ios/ios-about-xcode'},
        //     ],
        //   },

        //   {
        //     label: '🧠Interesting',
        //     position: 'left',
        //     items: [
        //       { label: 'ML & DL', to: '/docs/AI/about-AI'},
        //       { label: 'opencv', to: '/docs/opencv/about-opencv'},
        //       { label: 'pytorch', to: '/docs/pytorch/about-pytorch'},
        //       { label: 'tensorflow', },
        //       { label: 'yolo', to: '/docs/yolo/yolov5-start'},
        //       {label: 'jeston-nano', to:'/docs/nvidia/jeston-nano/jetson-nano-start'},
        //     ],
        //   },

        //   {
        //     label: '👽robot',
        //     position: 'left',
        //     items: [
        //       { label: 'RoboCon', to: '/docs/robocon/about-rc'},
        //       { label: 'RoboMaster', to: '/docs/robomaster/about-rm'},
        //       { label: 'ROS', to: '/docs/ros/ros-install'},
        //       { label: 'Point Cloud', to: '/docs/point-cloud/PCL/pcl-install'},
        //     ],
        //   },

        //   {
        //     label: '👾project',
        //     position: 'left',
        //     items: [
        //       // { label: '毕业设计', to: '/docs/docs/project/毕业设计/graduation-project'},
        //       { label: '车道线检测', to: '/docs/project/车道线检测/about-lane-detection'},
        //       { label: '3D打印延时摄影', to: '/docs/project/3D打印延时摄影/octoprint-octolapse-auto-snapshot'},
        //       { label: '猫粮机', to: '/docs/project/猫粮机/Cat-food-machine-based-on-MegFLow'},
        //     ],
        //   },

        //   {
        //     label: '🍻🎮',
        //     position: 'right',
        //     items: [
        //       { label: '就知道吃🍉', to: '/docs/life/foods/always-eating'},
        //       { label: '就知道玩🏔️', to: '/docs/life/play/go-out-and-play'},        
        //     ],
        //   },
          
          {
            href: 'https://github.com/rcxxx/personal-site',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'My Blog',
                href: 'https://sinnammanyo.cn/',
              //   to: 'blog',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/rcxxx',
              },
              {
                label: '机器人队知识库',
                href: 'https://wiki.wildwolf.pw/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 🌈RCXXX. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    },

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
        crossorigin: 'anonymous',
      },
    ],

    presets: [
      [
        '@docusaurus/preset-classic',
        {

          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [math],
            rehypePlugins: [katex],
            editUrl: "https://github.com/rcxxx/docs/tree/master",
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
  