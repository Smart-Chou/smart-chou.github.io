const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
        title: "初接触指南",
        icon: "ico_lantern",
        collapsable: false,
        children: ["tutorial"], 
    },
    { 
        title: "VuePress",  
        icon: "Vue", 
        collapsable: false,
        children: ["vuepress"],  
    },
    {
        title: "Markdown",  
        icon: "md1", 
        collapsable: false,
        children: ["markdown"],  
    },
    { 
        title: "Markdown增强",  
        icon: "filemarkdown",
        collapsable: false, 
        children: ["markdown-enhance"],  
    },
    {
        title: "本主题Markdown增强",
        icon: "md1",
        collapsable: false,
        children: ["themeself-markdown-enhance"],
    },
  ]);

    