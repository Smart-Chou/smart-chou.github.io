const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
      title: "创作工具",
      icon: "NovelDesign",
      collapsable: false,
      children: ["creat/"],
    },
    {
        title: "油猴脚本自动刷课",
        icon: "tampermonkey",
        collapsable: false,
        children: ["tampermonkey-refreshes-lesson"], 
    },
    {
        title: "Typora直传图片文件方案",
        icon: "md1",
        collapsable: false,
        children: ["typoraImg-tool"], 
    },
    {
        title: "Eclipse Theia初体验",
        icon: "eclipse-theia-aws-websoft9",
        collapsable: false,
        children: ["theia"], 
    },
    {
        title: "Vue Devtools的安装",
        icon: "Vue",
        collapsable: false,
        children: ["vuedev-tool"], 
    },
  ]);