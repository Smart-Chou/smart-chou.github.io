const { config } = require('vuepress-theme-hope');
const navBarConfig = require('./config/navbar');
const sideBarConfig = require('./config/sideBar');
const locale = {
    nick: '昵称',
    nickError: '昵称不能少于3个字符',
    mail: '邮箱',
    mailError: '请填写正确的邮件地址',
    link: '博客',
    placeholder: '随便说点什么喵～o(=•ェ•=)m \n没有登录也是完全没问题的哦～',
    sofa: '快来发评论吧~',
    submit: '提交',
    reply: '回复',
    cancelReply: '取消回复',
    comment: '评论',
    more: '加载更多...',
    preview: '预览',
    emoji: '表情',
    uploadImage: '上传图片',
    seconds: '秒前',
    minutes: '分钟前',
    hours: '小时前',
    days: '天前',
    now: '刚刚',
    uploading: '正在上传',
    login: '登录',
    logout: '退出',
    admin: '博主',
    word: '字',
    wordHint: '评论字数应在 $0 到 $1 字之间！\n当前字数：$2',
};

module.exports = config({
    title: 'CodeNoobs',
    description: '编程菜鸟的自我修养',
    host: '0.0.0.0',
    base: '/',
    dest: './dist',
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'code-E87rwPtGLL' }], //百度验证
        ['meta', { name: 'google-site-verification', content: 'i9llgSGLwQ5xvWGIdJRONZfTeCpJZxhjTPnZxfljuGo' }], //Google验证
        ['meta', { name: 'msvalidate.01', content: 'B9A0C43AD3B1BD529335A2616F235E46' }], //Bing验证
        [
            'script',
            {},
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
        ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-P635QZM7FJ' }],
        [
            'script',
            {},
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P635QZM7FJ');
            `,
        ],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    permalink: '/:regular',
    themeConfig: {
        logo: '/assets/img/AvatarMaker - y-p120.png',
        darkLogo: '/assets/img/AvatarMaker - tm.png',
        author: 'ChouCong',
        description: '编程菜鸟的自我修养',
        hostname: 'https://codenoob.top',
        darkmode: 'switch',
        repo: 'https://github.com/Smart-Chou/smart-chou.github.io',
        repoLabel: '查看源码',
        repoDisplay: false,
        //docsRepo: "vuejs/vuepress",
        docsDir: 'blog',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助改善此页面！',
        //searchMaxSuggestions: 5,
        //searchPlaceholder: '想搜啥，按‘S’！',
        breadcrumb: true,
        activeHeaderLinks: true,
        backToTop: 666,
        nav: navBarConfig,
        sidebar: sideBarConfig,
        displayAllHeaders: true,
        blog: {
            avatar: '/assets/img/AvatarMaker.svg',
            intro: '/author',
            sidebarDisplay: 'mobile',
            description: '编程菜鸟的自我修养',
            autoExcerpt: true,
            perPage: 9,
            timeline: '我们每天度过的日常生活，其实可能就是一连串的奇迹。',
            links: {
                Rss: '/rss.xml',
                Github: 'https://github.com/Smart-Chou',
                QQ: 'https://qm.qq.com/cgi-bin/qm/qr?k=hH6gqBpGrQ80a0kBI-69N6OWXMIJ7825&noverify=0',
                Wechat: '/assets/img/qr_weixin.png',
                Zhihu: 'https://www.zhihu.com/people/ChouCong',
                Gmail: 'mailto:ChouCong912@gmial.com',
            },
        },
        comment: {
            type: 'waline',
            serverURL: 'https://waline.codenoob.top/',
            path: 'window.location.pathname',
            lang: 'zh-CN',
            visitor: 'true',
            emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis/tieba', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/qq', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/alus', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/bilibili'],
            meta: ['nick', 'mail', 'link'],
            requiredMeta: ['nick', 'mail'],
            pageSize: '8',
            locale,
        },
        copyright: {
            noCopy: false,
            minLength: 30,
            status: 'global',
        },
        copyCode: {
            duration: 3000,
            showInMobile: false,
        },
        git: {
            contributor: true,
            timezone: 'Asia/Shanghai',
        },
        mdEnhance: {
            enableAll: false,
            container: true, //自定义容器
            codegroup: true, //代码块分组
            align: true, //自定义对齐
            sub: true, //上角标
            sup: true, //下角标
            footnote: true, //脚注
            mark: true, //标记
            tasklist: true, //任务列表
            tex: true, //数学公式
            flowchart: false, //流程图
            mermaid: false, //mermaid
            demo: false, //代码演示
            presentation: false, //ppt
        },
        footer: {
            display: true,
            content: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备20006179号</a>',
            copyright: 'ChouCong | Theme-Hope',
        },
        sitemap: {
            urls: ['https://codenoob.top/Vaultwarden-Wiki-Chinese/', 'https://codenoob.top/Road2Coding/'],
        },
        pwa: {
            favicon: '/favicon.ico',
            cacheHTML: false,
            maxSize: 3000,
            maxPicSize: 2000,
            apple: {
                icon: '/assets/icon/apple-icon-152.png',
                statusBarColor: 'black',
            },
            msTile: {
                image: '/assets/icon/ms-icon-144.png',
                color: '#ffffff',
            },
            manifest: {
                icons: [
                    {
                        src: '/assets/icon/chrome-mask-512.png',
                        sizes: '512x512',
                        purpose: 'maskable',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-mask-192.png',
                        sizes: '192x192',
                        purpose: 'maskable',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
                shortcuts: [
                    {
                        name: 'Guide',
                        short_name: 'Guide',
                        url: '/guide/',
                        icons: [
                            {
                                src: '/assets/icon/guide-maskable.png',
                                sizes: '192x192',
                                purpose: 'maskable',
                                type: 'image/png',
                            },
                            {
                                src: '/assets/icon/guide-monochrome.png',
                                sizes: '192x192',
                                purpose: 'monochrome',
                                type: 'image/png',
                            },
                        ],
                    },
                ],
            },
        },
    },
    plugins: [
        [
            'vuepress-plugin-meilisearch',
            {
                hostUrl: 'https://tv.zcily.life',
                apiKey: 'opOU6e6Xa6e95c296386d50d0234b615391764fd386ce5a62dd5da00f6bc862cb206c438',
                indexUid: 'vuepress',
                placeholder: '搜点啥呢？', // Default: ""
                maxSuggestions: 6, // Default: 5
                cropLength: 50, // Default: 30
            },
        ],
    ],
    globalUIComponents: ['V2Notice'],
});
