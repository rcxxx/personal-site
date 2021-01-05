module.exports = {
    title: "Rcxxx's Notes",
    tagline: '个人学习笔记',
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
              
            ],
          },

          {
            label: '🧠AI',
            position: 'left',
            items: [
              { label: 'opencv', to: '/docs/docs/opencv/about-opencv'},
              { label: 'pytorch', to: '/docs/docs/pytorch/about-pytorch'},
              { label: 'tensorflow', },
              
            ],
          },

          {
            label: '👽robot',
            position: 'left',
            items: [
              { label: 'RoboCon', to: '/docs/docs/robocon/about-rc'},
              { label: 'RoboMaster', to: '/docs/docs/robomaster/about-rm'},
              { label: 'ROS', to: '/docs/docs/ros/ros-install'},
              
            ],
          },

          {
            label: '🎮',
            position: 'right',
            items: [
              { label: 'NO GAME NO LIFE',},              
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
    presets: [
      [
        '@docusaurus/preset-classic',
        {

          docs: {
            path: "./docs",
            routeBasePath: "/docs",
            sidebarPath: require.resolve('./sidebars.js'),
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
  