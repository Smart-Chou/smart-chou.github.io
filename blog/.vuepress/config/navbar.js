const { navbarConfig } = require("vuepress-theme-hope");

module.exports = 
  navbarConfig([
    { text: "主页", icon: "zhuye1", link: "/" },
    { text: "Start", icon: "kaishixunjian",
      items: [
        { text: "基础认知", icon: "brainsmartbulb", link: "/basic/" },
        { text: "使用指南", icon: "guide", link: "/guide/",},
      ],
    },
    { text: "类目", icon: "leimu",
      items: [
        { text: "分类", icon: "notebook", link: "/category/" },
        { text: "标签", icon: "biaoqian1", link: "/tag/" },
        { text: "项目", icon: "project-o", link: "/project-own.md" },
      ],
    },
    { text: "朋友们", icon: "pengyouquan3",
      items: [
        { text: "友链", icon: "pengyouquan", link: "/friends.md" },
        { text: "留言板", icon: "shuoshuo", link: "/message.md" },
      ],
    },
    { text: "时光鸡",icon: "liebiao", link: "/timeline/" },
  ]);