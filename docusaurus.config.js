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
        // switchConfig: {
        //   darkIcon: '🌑️',
        //   lightIcon: '🌞',
        //   // React inline style object
        //   // see https://reactjs.org/docs/dom-elements.html#style
        //   darkIconStyle: {
        //     marginLeft: '2px',
        //   },
        //   lightIconStyle: {
        //     marginLeft: '1px',
        //   },
        // },
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
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
              {label: '🔨3D Modeling', to:'docs/category/Fusion 360'},
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
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
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
            remarkPlugins:[require('mdx-mermaid')],
            editUrl: "https://github.com/rcxxx/docs/tree/master",
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
    themes: [
        // ... Your other themes.
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,
            // For Docs using Chinese, The `language` is recommended to set to:
            // ```
            // language: ["en", "zh"],
            // ```
          },
        ],
      ],
  };
  