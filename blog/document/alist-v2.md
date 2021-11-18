---
title: 目录列表程序AList使用教程
description: 目录列表程序AList使用教程 
time: 2021-10-25
category: 文档
tag:
  - Alist
image: 
icon: aliyunpan
---

## 简介

AList是一款支持多种存储的目录文件列表程序，后端基于`go-fiber`，前端使用`react`。

## 项目地址

- [alist](https://github.com/Xhofe/alist)
- [alist-web](https://github.com/Xhofe/alist-web)

## 预览

- [稳定版本](https://alist.nn.ci),即Github Release的最新版本
- [开发版本](https://alist.now.sh),随着GitHub提交更新

![alist预览图片](https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto@latest/note/68747470733a2f2f73746f72652e686579746170696d6167652e636f6d2f63646f2d706f7274616c2f666565646261636b2f3230323131312f30332f36393565663737383534613134346539323835313865666465333864623937612e706e67)

## 部署

### 快速开始

1. 打开[AList Release](https://github.com/Xhofe/alist/releases)下载要部署的系统对应的文件
2. 解压下载对文件得到可执行文件：`tar -zxvf alist-xxxx.tar.gz`（Linux）
3. 赋予程序执行权限：`chmod +x alist-xxxx`
4. 运行程序：`./alist-xxxx`
5. 完成，后台默认密码为`alist`

### 守护进程

`vim /usr/lib/systemd/system/alist.service`添加以下内容，其中`path_alist`为`alist`所在的路径

```
[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist-xxxx -conf conf.yml
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
```

然后`systemctl daemon-reload`重载配置，现在你就可以使用这些命令来管理程序了：

- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 自启: `systemctl enable alist`
- 状态: `systemctl status alist`

### 反向代理

程序默认监听5244端口，要实现https访问，需要使用nginx反向代理，在配置文件中加入

```
  location / {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_redirect off;
      proxy_pass http://127.0.0.1:5244;
  }
```

## 使用

### 添加账号

#### 所有账号的必填项

- `name`（名称）：唯一标识符，也是当有多个账号时展示的路径
- `index`（索引）：当有多个账号时，用于排序，越小越靠前
- `proxy`（带理）：是否允许服务器中转下载

### 本地存储

只需填写根目录路径即可，可以是绝对路径，也可以是程序所在的相对路径

### 阿里云盘

- `refresh_token`（刷新令盘）：如何获取[参见](https://media.cooluc.com/decode_token/)
- 根目录`file_id`：打开阿里云盘官网，点进去你要设置的文件夹时url后面的一串，如`https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940`就是`5fe01e1830601baf774e4827a9fb8fb2b5bf7940`
- `order_by`（排序）：可选值为`name`，`size`，`updated_at`，`created_at`
- `order_direction`（排序方向）：可选`ASC`（正序），`DESC`（倒序）

### Onedrive

[打开](https://tool.nn.ci/onedrive/request)

#### 创建应用

- 在打开的页面，选择所在区域，点击创建应用
- 登陆后选择「`注册应用程序`」，输入「`名称`」，选择「`任何组织目录中的账户和个人`」（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 `URL` 为 `https://tool.nn.ci/onedrive/callback`，「`注册`」即可，然后可以得到`client_id`
- 注册好应用程序之后，选择「`证书和密码`」，点击「`新客户端密码`」，输入一串密码，选择时间为最长的那个，点击「`添加`」（注：在添加之后输入的密码之后会消失，请记录下来 `client_secret` 的值）

#### 获取刷新令牌

将上一步骤中获得的`client_id`和`client_secret`填入[这个页面](https://tool.nn.ci/onedrive/request )，点击获取刷新令牌，就可以得到刷新令牌了

#### 获取`Sharepoint site_id`（未测试）

如果需要挂载`Sharepoint`，完成上一步后，在显示刷新令牌的界面会出现一个输入站点地址，输入站点地址后点击获取`site_id`即可。

#### 添加账号

将上述过程中获取得到的值**依次填入**即可。

## 元信息（meta）设置

此处的`path`（路径）是访问`alist`页面时的`pathname`，如要设置`https://alist.nn.ci/本地存储`则路径是`/本地存储`

### 设置密码

填写密码字段即可

### 隐藏文件/文件夹

填写`hide`字段，填写要隐藏的文件（夹）名称，以`,`分隔，比如要隐藏`https://alist.nn.ci/本地存储`下的`README.md`和`index.tsx`文件，则填写`README.md`,`index.tsx`即可。

## 常见问题

- 视频播放不了？
  - 如果是阿里云先自查一下是否使用的是移动端的`token`。然后检查一下是不是编码不支持，`h5`不支持`h265`编码视频，`ac3/acc`编码音频，`Safari`不支持的更多，建议使用软件播放。
- 获取中转链接？
  - 允许中转之后，复制对应文件直链，将`/d`改成`/p`即可。
