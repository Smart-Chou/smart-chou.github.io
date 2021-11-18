const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
        title: "Feem",
        icon: "ftp",
        collapsable: false,
        children: ["feem"], 
    },
    { 
        title: "MobaXterm",  
        icon: "mobaxterm", 
        collapsable: false,
        children: ["mobaxterm"],  
    },
    {
        title: "screentogif",  
        icon: "GIF", 
        collapsable: false,
        children: ["screentogif"],  
    },
    { 
        title: "snipaste",  
        icon: "snipaste",
        collapsable: false, 
        children: ["snipaste"],  
    },
    { 
        title: "utools",  
        icon: "utool",
        collapsable: false, 
        children: ["utools"],  
    },
  ]);