const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig({
    "/projects/vaultwarden/": require("./projects/vaultwarden"),

    "/tools/creat/": require("./tools/creat"),
    "/tools/": require("./tools"),
    
    "/code/python/": require("./code/python"),
    "/code/": require("./code"),

    "/guide/": require("./guide"),
    });


    
