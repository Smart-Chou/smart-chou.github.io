const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
      title: "页面展示",
      icon: "yemian",
      collapsable: false,
      children: ["page"],
    },
    {
      title: "Markdown 展示",
      icon: "md1",
      collapsable: false,
      children: ["markdown"],
    },
    {
      title: "加密展示",
      icon: "Lock",
      collapsable: false,
      children: ["encrypt"],
    },
    {
      title: "自定义布局",
      icon: "layout",
      collapsable: false,
      children: ["layout"],
    },
    {
      title: "幻灯片页",
      icon: "Slideshow",
      collapsable: false,
      children: ["slides"],
    },
    {
      title: "禁用展示",
      icon: "ts-config",
      collapsable: false,
      children: ["disable"],
    },
]);