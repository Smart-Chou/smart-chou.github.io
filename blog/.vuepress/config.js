const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "CodeNoobs",
  description: "编程菜鸟的自我修养",
  base: '/',
  dest: "./dist",

  head: [
    ["meta", { name: "baidu-site-verification", content: "code-E87rwPtGLL" }], //百度验证
    ["meta", { name: "msvalidate.01", content: "B9A0C43AD3B1BD529335A2616F235E46" }], //Bing验证
    [
      "script",{ src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",{ src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" },
    ],
    [
      "script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }
    ],
    [
      "script",{ src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
    [
      "script",{},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c95ea3635943a80e1e88373a472a205a";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
    [
      "script",{ src: "https://www.googletagmanager.com/gtag/js?id=G-P635QZM7FJ" },
    ],
    [
      "script",{},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-P635QZM7FJ');
      `
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  
  permalink: "/:regular",

  themeConfig: {
    logo: "/assets/img/AvatarMaker - y-p400.png",
    author: "ChouCong",
    description: "编程菜鸟的自我修养",
    
    repo: "https://github.com/Smart-Chou/smart-chou.github.io",
    repoDisplay: false,
    docsDir: "blog",
    docsBranch: "main",
    
    hostname: "https://codenoob.top",

    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "想知道啥，快来搜！",
    breadcrumb: true,
    activeHeaderLinks: true,
    
    algolia: {
      apiKey: "",
      indexName: "",
    },

    backToTop: 666,
    
    nav: navBarConfig,
    sidebar: sideBarConfig,

    displayAllHeaders: true, 

    blog: {
      avatar: "/assets/img/AvatarMaker.svg",
      intro: "/author/",
      sidebarDisplay: "mobile",
      description: "编程菜鸟的自我修养",
      perPage: 8,
      timeline: "我们每天度过的日常生活，其实可能就是一连串的奇迹。",
      links: {
        Rss: "/rss.xml",
        Github: "https://github.com/Smart-Chou",
        QQ: "https://qm.qq.com/cgi-bin/qm/qr?k=hH6gqBpGrQ80a0kBI-69N6OWXMIJ7825&noverify=0",
        Wechat: "/assets/img/qr_weixin.png",
        Zhihu: "https://www.zhihu.com/people/ChouCong",
        Gmail: "mailto:ChouCong912@gmial.com",
      },
    },

    comment: {
      type: 'waline',
      serverURL:'https://waline.codenoob.top/',
      uploadImage: 'true',
      path:'window.location.pathname',
      lang:'zh-CN',
      visitor:'true',
      emoji:[
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/tieba',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/qq',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/tw-emoji',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/alus',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis/bilibili',
            ],
      meta:['nick', 'mail', 'link'],
      requiredMeta:['nick'],
      avatar:'',
      avatarCDN:['https://sdn.geekzu.org/avatar/'],
      avatarForce:'false',
      copyright:'false',
      pageSize:'10',
      },

    copyright: {
      noCopy: false,
      minLength: 10,
      status: "global",
    },

    copyCode: {
      duration: 3000,
        showInMobile: false,
    },

    git: {
      contributor: true,
      timezone: "Asia/Shanghai",
    },
           
    mdEnhance: {
      enableAll: false,
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
    },
    
    footer: {
      display: true,
      content: '豫IPCP备20006179号',
      copyright: 'ChouCong | Theme-Hope',
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: false,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

  },
  plugins:[],
});
