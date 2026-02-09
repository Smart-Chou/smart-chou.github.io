const site$1 = {
  title: "Spencer's Blog",
  subtitle: "Spencer Woo",
  description: "Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.",
  keywords: "Astro, Theme, Yi",
  favicon: "favicon.svg",
  coverImage: "cover.png",
  coverImageAlt: "Spencer's Blog",
  url: "https://marxchou.com",
  startYear: "2017",
  beian: "萌ICP备20249889号",
  beianURL: "https://icp.gov.moe/?keyword=20249889"
};
const author$1 = {
  type: "Spencer Woo",
  url: "https://marxchou.com",
  motto: "阿巴阿巴 o((>ω< ))o",
  avatar: "author.jpg"
};
const twitter$1 = {
  type: "@marxchou",
  link: "@marxchou"
};
const notFoundPage$1 = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist."
};
const tagsPage$1 = {
  title: "Tags",
  description: "All Tags"
};
const archivesPage$1 = {
  title: "Archives",
  description: "All Archives"
};
const redirectPage$1 = {
  title: "Redirect",
  description: "Redirect Website"
};

const siteConfig = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    archivesPage: archivesPage$1,
    author: author$1,
    notFoundPage: notFoundPage$1,
    redirectPage: redirectPage$1,
    site: site$1,
    tagsPage: tagsPage$1,
    twitter: twitter$1
}, Symbol.toStringTag, { value: 'Module' }));

const config$1 = {
  lang: "zh-CN",
  PageSize: 9,
  ga: false};
const pageView$1 = {
  backtotop: false,
  author: true
};
const postView$1 = {
  backtotop: true,
  author: true
};
const donate$1 = {
  enable: true,
  tip: "赞赏金额将全部用于开源项目维护，以及服务器、域名及各类云服务的开销",
  wechatQRCode: "/assets/image/WeChatQR.jpg",
  alipayQRCode: "/assets/image/AliPayQR.jpg",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
  donators: [
    {
      id: "donator-1",
      name: "匿名用户",
      amount: 5,
      date: "2026-01-21"
    },
    {
      id: "donator-2",
      name: "支持者A",
      amount: 10,
      date: "2026-01-20"
    },
    {
      id: "donator-3",
      name: "支持者B",
      amount: 20,
      date: "2026-01-19"
    },
    {
      id: "donator-4",
      name: "支持者C",
      amount: 50,
      date: "2026-01-18",
      message: "感谢你的分享！"
    }
  ]
};
const waline$1 = {
  enable: true};
const search$1 = {
  enable: true
};
const umami$1 = {
  enable: true,
  umamiBaseUrl: "https://umami.marxchou.com",
  umamiId: "73b29141-fccf-4d54-9c2f-f7d0d146f86b"
};

const featureConfig = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    config: config$1,
    donate: donate$1,
    pageView: pageView$1,
    postView: postView$1,
    search: search$1,
    umami: umami$1,
    waline: waline$1
}, Symbol.toStringTag, { value: 'Module' }));

const categories$1 = [
  {
    url: "//memos.marxchou.com",
    title: "🥳 Feed",
    style: "color: orange",
    target: "_blank",
    svg: "tabler:brain"
  },
  {
    url: "/albums/",
    title: "📷 Albums",
    style: "color: #3498db",
    target: "_self",
    svg: "tabler:photo"
  },
  {
    url: "/friends/",
    title: "🧑🏿‍🚒 Friends",
    style: "color: #06a878",
    target: "_self",
    svg: "tabler:message-chatbot-filled"
  },
  {
    url: "/archives/",
    title: "📂 Archives",
    style: "color: var(--title-color)",
    target: "_self",
    svg: "tabler:archive-filled"
  },
  {
    url: "/tags/",
    title: "🏷️ tags",
    style: void 0,
    target: "_self",
    svg: "tabler:tags"
  }
];
const socialLinks$1 = [
  {
    url: "//mcc.im",
    title: "🚀 Portfolio",
    style: "color: var(--title-color)",
    svg: "simple-icons:ghostery"
  },
  {
    url: "//twitter.com/realSpencerWoo",
    title: "🔗 @realSpencerWoo",
    style: "color: #1da1f2",
    svg: "logos:twitter"
  },
  {
    url: "//t.me/realSpencerWoo",
    title: "🔗 @realSpencerWoo",
    style: "color: #179cde",
    svg: "logos:telegram"
  },
  {
    url: "//github.com/spencerwooo",
    title: "🔗 @spencerwooo",
    style: "color: var(--title-color)",
    svg: "simple-icons:github"
  }
];
const friendsPage$1 = {
  title: "Friends & Guestbook",
  note: "I don't accept friend link requests from someone I don't know.",
  list: [
    {
      id: "@Felinae",
      link: "https://code.felinae98.cn/",
      avatar: "https://avatars.githubusercontent.com/u/23295345",
      style: "color: #fff; background-color: #473922"
    },
    {
      id: "@agnoCJY",
      link: "https://jychuuu.com/",
      avatar: "https://avatars.githubusercontent.com/u/46088026",
      style: "color: #fff; background-color: #191919"
    },
    {
      id: "@TenkeySeven",
      link: "https://blog.tenkeyseven.com/",
      avatar: "https://avatars.githubusercontent.com/u/33371927",
      style: "color: #fff; background-color: #b59672"
    },
    {
      id: "@Silvester",
      link: "https://silvester.wang/",
      avatar: "https://avatars.githubusercontent.com/u/34436920",
      style: "color: #fff; background-color: #595058"
    },
    {
      id: "@ash0ne",
      link: "https://blog.ash0ne.com/",
      avatar: "https://avatars.githubusercontent.com/u/28522665",
      style: "color: #fff; background-color: #9f8cd1"
    },
    {
      id: "@FKY",
      link: "http://blog.fkynjyq.com/",
      avatar: "https://avatars.githubusercontent.com/u/16451516",
      style: "color: #fff; background-color: #005240"
    },
    {
      id: "@idealclover",
      link: "https://idealclover.top/",
      avatar: "https://avatars.githubusercontent.com/u/24428416",
      style: "color: #fff; background-color: #487747"
    },
    {
      id: "@kastnerorz",
      link: "https://github.com/kastnerorz",
      avatar: "https://avatars.githubusercontent.com/u/26199342",
      style: "color: #fff; background-color: #26498e"
    },
    {
      id: "@Patrick Wu",
      link: "https://patrickwu.space/",
      avatar: "https://avatars.githubusercontent.com/u/15316889",
      style: "color: #fff; background-color: #61a3cf"
    }
  ]
};
const footerList$1 = [
  {
    title: "Astro",
    text: "Generator",
    color: "Lime",
    logo: "astro",
    logoColor: "red",
    labelColor: "pink",
    url: "//astro.build"
  },
  {
    title: "Vercel",
    text: "Deploy",
    color: "Lime",
    logo: "vercel",
    logoColor: "white",
    labelColor: "cyan",
    url: "//vercel.com"
  }
];

const uiConfig = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    categories: categories$1,
    footerList: footerList$1,
    friendsPage: friendsPage$1,
    socialLinks: socialLinks$1
}, Symbol.toStringTag, { value: 'Module' }));

const {
  site,
  author,
  twitter,
  notFoundPage,
  tagsPage,
  archivesPage,
  redirectPage
} = siteConfig;
const { config, pageView, postView, donate, waline, search, umami } = featureConfig;
const { categories, socialLinks, friendsPage, footerList } = uiConfig;

export { archivesPage as a, author as b, config as c, donate as d, pageView as e, friendsPage as f, categories as g, socialLinks as h, twitter as i, search as j, footerList as k, notFoundPage as n, postView as p, redirectPage as r, site as s, tagsPage as t, umami as u, waline as w };
