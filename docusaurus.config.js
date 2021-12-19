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
            position: 'left',
            className: 'heafer-user-icon',
          },
          {
            type: 'dropdown',
            label: '📝Docs',
            position: 'left',
            items: [
              {label: '💻 PC', to:'docs/category/devices'},
              {label: '⌨️ programming', to:'docs/category/C-C_plus_plus'},
              {label: '👀CV', to:'docs/category/OpenCV'},
              {label: '🎖️robot', to:'docs/category/RC-RM'},
            ],
          },
          {
            type: 'dropdown',
            label: '📚书单',
            position: 'left',
            items: [
              {label: '⌨️ 计算机类', to:'/cs-book-list'},
              {label: '✒️ 文学类', to:'/book-list'},
            ],
          },
          {
            to: 'docs/category/just-paly',
            position: 'right',
            className: 'heafer-life-icon',
            
          },
          {
            to: 'docs/category/summary',
            position: 'right',
            className: 'heafer-studio-icon'
          },
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
  