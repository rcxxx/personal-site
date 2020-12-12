module.exports = {
    title: 'Notes By RCXXX',
    tagline: '个人学习笔记',
    url: 'https://github.com/rcxxx/docs/',
    baseUrl: '/docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/lzumi-icon-05-128x128.jpg',
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
      navbar: {
        hideOnScroll: true, // 自动隐藏导航栏
        title: "Rcxxx's Notes",
        logo: {
          alt: 'My Site Logo',
          // src: 'img/logo.svg',
          src: 'img/lzumi-icon-05-128x128.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rcxxx/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Style Guide',
          //       to: 'docs/',
          //     },
          //     {
          //       label: 'Second Doc',
          //       to: 'docs/doc2/',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
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
        copyright: `Copyright © ${new Date().getFullYear()} RCXXX, Inc. Built with Docusaurus.`,
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
  