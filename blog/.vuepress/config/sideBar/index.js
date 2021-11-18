const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig({
    "/tools/creat/": require("./tools/creat"),
    "/tools/": require("./tools"),
    
    "/code/python/": require("./code/python"),
    "/code/": require("./code"),

    "/guide/": require("./guide"),
    "/basic/": require("./basic"),
    });


    
