---
title: 项目是怎么一步一步变复杂的
description: 项目是怎么一步一步变复杂的，为什么要学这么多，那是梦开始的地方
# 当前文章是否为原创
original: false
time: 2020-07-04
category: 编程
tag:
  - Java
icon: project1
---

也可以说为什么我们学习的项目和真实的项目区别这么大，一个完整的项目你不用会所有的技术点，但是你最好搞懂为什么需要他们

今天我们通过一个简单的**留言板**案例来一起探讨一下这些技术点，不论你是前端还是后端人员，都可以完整阅读

## 纯静态状态

老板说需要一个简单的留言板应用，此时只需要它是一个装饰品，不需要真的留言功能，通过一个简单的**文本标签**就能实现

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/181623-178597.png)

此时它过于简陋，为了使它更为美观，更良好的交互，我们会写一些简单的**css**样式和**JavaScript**代码来装饰它

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/181938-360419.png)

如果我们要制作更多的这样的页面，为了节省时间，我们会在项目中引入 **bootstrap**UI样式和**jquery**库这样的工具来加速开发

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/182333-965613.png)

老板说为了让我们的页面更为美观和友好，我们考虑请专业的设计人员通过 **墨刀、pxcook**等工具来进行设计和标注，再由前端人员进行代码实现

此时我们需要在项目中使用 **帧动画 、svg、canvas、webgl**等技术来实现复杂的动效，样式很多我们使用了 less这类的css预处理器

老板说我们的留言板项目受众非常广，所以需要还考虑**不同浏览器的兼容性**

老板说由于开发人员的增加，为了协同开发和管理代码，我们使用git来管理代码，使用gitlab来搭建一个私有的代码仓库

为了提高用户打开网页的速度，我们将部分资源使用**cdn**进行加速

## 数据展示

老板说我们需要在留言板的上面展示一些别人的留言，此时就需要和后端进行交互，此时我们还是原始的服务端渲染也就是前后端不分离状态，我们可以使使用**Java的jsp、thymeleaf，php的smarty**等技术来完成页面渲染

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/183516-233863.png)

老板听别人说单页面应用，前后端分离的体验更为友好，为了实现前后端分离，我们的前端选择了**vuejs框架**来实现留言板

vuejs的mvvm架构，通过数据绑定实现这个功能非常简单，为了页面的美观，我们使用 **elementui 或者 vant**来构建页面

后端给我们说他们给我们的接口是 restful风格的，我们可以通过后端提供的 **swagger**接口文档来查看具体的请求方式，使用**postman**等工具来调试接口，使用**axios或者umi-request**的这种进一步封装的网络请求库来完成网络请求

后端接口还没有写好的时候，我们也可以通过 **mock**来制造假数据来测试开发

在这个过程中，前端项目的**JavaScript和css**代码越来越多，为了更好地管理它们，实现工程化开发，我们的前端项目使用 **webpack**进行打包和构建，我们发现 **webpack**还具有代码优化，自动添加浏览器兼容性代码，以及代码转化的功能

为了更好地学习和使用 **webpack**，我们需要学习更多的关于 nodejs的知识，才能知道他是如何处理文件和网络请求的，当然了解这些设计，我们还需要一点设计模式的知识

老板说，你们的项目够规模了，不管前后端，你们都需要先进行**单元测试**，然后再提交代码审核，测试人员会编写专门的Python脚本来**自动化测试**

突然老板说为啥我们前后端分离以后，有用户反映在百度搜索不到我们的应用，哦原来前后端分离对网页的**SEO**不太友好，我们前端考虑使用**Nuxt.js**来实现服务端渲染，或者使用**Phantomjs**来拦截爬虫

有天老板说，我想了解一些我们的应用情况，像电影里面的那种很炫酷的数据展示屏，我们决定使用**echart.js**来完成报表

老板又说能不能让用户打印出自己的留言数据呢？我们后端决定使用**easyexcel**来导出Excel数据，使用**PDF Box**来导出pdf数据

此时我们的变更越来越频繁，部署环境越来越复杂，我们给项目引入了**CI&CD持续集成与持续部署** 我们决定使用docker来部署，使用Sonar来检查代码， 使用Jenkins来持续集成，使用k8s来完成服务编排

老板说，能不能把我们的网页弄成小程序，方便一下大家，我们考虑到小程序平台实在太多，我们人手不够，决定采用跨平台框架，因为我们是vue技术栈，我们选择了uniapp，还好我们是前后端分离，接口可以直接用

## 数据存储

到如今我们的留言板是动态的了，原本是使用php来构建的后端服务，前后端分离后，我们发现Java更具优势，听老前辈们说，ssh过时了，ssm也不方便，使用springboot就更好了，我们使用maven来构建和打包后端项目

原本我们的项目使用mysql来持久化存储我们的留言数据，使用 mybatis和springdatajpa来操作数据库，随着访问人数的增多，数据库扛不住，我们使用redis来缓存一下数据，并且我们的数据库要实现**分库分表和读写分离**。

在网页中，为了体验的友好和减轻服务器压力，我们可以使用vuex和localstorage来将数据缓存在浏览器中

为了防止有些用户乱点和爬虫脚本的操作，前端开发需要**防抖和节流**来控制用户的操作，后端可以通过redis来限制用户操作频率，当然我们也通过nginx来限制用户IP访问

同时为了监测系统和用户操作，在页面中我们使用sentry来搭建前端监控服务 我们后端使用log4j或者logback来收集一下日志

## 数据安全

如今我们的留言板是需要注册和登录的，前后端没有分离的时候，我们通过cookie和session来验证用户真实性，项目足够规格的时候，我们可以使用shiro和spring security这类安全框架来规定用户的操作

前后端分离以后，我们可以使用token和jwt来验证用户的真实性

后来老板说，我们这个留言板项目的账号，还可以用来登录我们公司旗下的聊天项目，就像微信一样可以授权很多平台的登录，此时我们可以考虑 **oauth2和sso单点登录**

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/124010-794256.png)

为了安全访问，我们将http切换为https

## 大数据

我们的用户越来越多，留言越来越多，单机完全不能支撑这个服务了，老板说分布式可以解决这个问题，于是我们后端开始考虑是使用 springcloud还是dubbo zookeeper的方案，当然我们也会用nginx的**负载均衡**

老板又请了一个非常厉害的大牛加入项目组，他负责项目的**迭代优化、架构设计和JVM调优**，并且还通过 **用户画像**来推荐相关的热门留言

老板说，我们的留言太多了，有些问题有人已经问过了，给页面添加一个搜索功能，此时我们的项目已经成规模了，再使用数据库的 like来进行搜索肯定是不行的，我们给系统加入**文档搜索和中文分词**，分词的好处就是你搜索的语句可能没有百分百相同的问题，但是可以通过你的问题中某些词来找到相类似的结果。 我们使用 elasticsearch、kibana来完成搜索项目的构建

![#](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto/image/121628-410094.png)

用户在留言的时候，我们需要将留言存入搜索文档存储中，如果同步操作，有可能导致阻塞，我们使用消息队列来实现异步操作，我们使用 kafka、mq来发布消息，使用logstash来收集处理数据并传递给elasticsearch

同时我们的后台日志也由elk来完成收集和处理

## 拓展

我们的留言板应用越来越大了，也诞生了很多周边应用，老板说，我们的应用能不能做出一个体系来，统一一下设计风格，就像阿里系和京东系那样的

我们决定自己开发一套 UI库，基于vuejs，我们阅读了elementui的源码，参考他们的设计，设计了一个 lybui为了提升我们在业界的影响力，我们将UI开源，并且使用vuepress写了一个详细的文档
