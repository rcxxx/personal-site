const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: "Rcxxx's Site",
    tagline: '',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icons/lzumi-icon-05-128x128.jpg',    

    url: 'https://github.com/rcxxx/docs/',
    baseUrl: '/docs/',
    organizationName: 'rcxxx', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌜',
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
        title: "Home",
        logo: {
          alt: 'My Site Logo',
          // src: 'img/logo.svg',
          // src: 'img/lzumi-icon-05-128x128.svg',
          src: 'img/icons/konosuba-01.png',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'README',
            position: 'left',
          },

          {
            label: '💻',
            position: 'left',
            items: [
              { label: 'C/C++', to: '/docs/docs/cc/cc-classes-and-objects'},
              { label: 'Python', },
              { label: '数据结构', to: '/docs/docs/data-structures/大话数据结构/data-structures-introduction'},
              { label: '设计模式', to: '/docs/docs/design-pattern/design-pattern-UML-class-diagram'},
              { label: 'ios', to: '/docs/docs/ios/ios-about-xcode'},
            ],
          },

          {
            label: '🧠Interesting',
            position: 'left',
            items: [
              { label: 'ML & DL', to: '/docs/docs/AI/about-AI'},
              { label: 'opencv', to: '/docs/docs/opencv/about-opencv'},
              { label: 'pytorch', to: '/docs/docs/pytorch/about-pytorch'},
              { label: 'tensorflow', },
              { label: 'yolo', to: '/docs/docs/yolo/yolov5-start'},
              {label: 'jeston-nano', to:'/docs/docs/nvidia/jeston-nano/jetson-nano-start'},
            ],
          },

          {
            label: '👽robot',
            position: 'left',
            items: [
              { label: 'RoboCon', to: '/docs/docs/robocon/about-rc'},
              { label: 'RoboMaster', to: '/docs/docs/robomaster/about-rm'},
              { label: 'ROS', to: '/docs/docs/ros/ros-install'},
              { label: 'Point Cloud', to: '/docs/docs/point-cloud/PCL/pcl-install'},
            ],
          },

          {
            label: '👾project',
            position: 'left',
            items: [
              { label: '毕业设计', to: '/docs/docs/project/毕业设计/graduation-project'},
              { label: '车道线检测', to: '/docs/docs/project/车道线检测/about-lane-detection'},
              { label: '3D打印延时摄影', to: '/docs/docs/project/3D打印延时摄影/raspberry-pi-octoprint'},
            ],
          },

          {
            label: '🎮',
            position: 'right',
            items: [
              { label: '就知道玩🏔️', to: '/docs/docs/life/play/go-out-and-play'},              
            ],
          },

          {
            label: '🍻',
            position: 'right',
            items: [
              { label: '就知道吃🍉', to: '/docs/docs/life/foods/always-eating'},          
            ],
          },
          
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rcxxx/docs',
            label: '本站源码',
            position: 'right',
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
                href: 'https://wiki.wildwolf.tech/',
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
            path: "./docs",
            routeBasePath: "/docs",
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
  