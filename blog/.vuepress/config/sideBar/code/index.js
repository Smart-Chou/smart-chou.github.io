const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
      title: "Python",
      icon: "python",
      collapsable: false,
      children: ["python/"],
    },
    {
        title: "前后端知识",
        icon: "biancheng1",
        collapsable: false,
        children: ["front-back"], 
    },
    {
        title: "Java学习路线",
        icon: "java",
        collapsable: false,
        children: ["java-study"], 
    },
    {
        title: "SpringBoot实战项目",
        icon: "springboot",
        collapsable: false,
        children: ["loop"], 
    },
    {
        title: "聊聊PHP",
        icon: "PHP",
        collapsable: false,
        children: ["php-history"], 
    },
    {
        title: "项目是怎么变复杂的",
        icon: "project1",
        collapsable: false,
        children: ["project-step"], 
    },
  ]);