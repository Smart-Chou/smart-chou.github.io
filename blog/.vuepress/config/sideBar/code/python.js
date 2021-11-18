const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = 
  sidebarConfig([
    "",
    {
        title: "命名和循环",
        icon: "python",
        collapsable: false,
        children: ["python-01-name-and-loop"], 
    },
    { 
        title: "循环打印九九乘法表",  
        icon: "python", 
        collapsable: false,
        children: ["python-02-xun-huan-da-yin-jiu-jiu-cheng-fa-biao"],  
    },
    {
        title: "函数",  
        icon: "python", 
        collapsable: false,
        children: ["python-03-functions"],  
    },
    { 
        title: "高级变量类型",  
        icon: "python",
        collapsable: false, 
        children: ["python-04-advanced-variable-types"],  
    },
    { 
        title: "语法进阶",  
        icon: "python",
        collapsable: false, 
        children: ["python-05-advanced-grammar"],  
    },
    { 
        title: "面向对象",  
        icon: "python",
        collapsable: false, 
        children: ["python-06-object-oriented"],  
    },
  ]);