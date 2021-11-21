---
title: 构建你自己的docker镜像
description: 最值得信赖的开源密码管理器 
article: false
original: true
time: 2021-11-20
category: 项目
tag:
  - bitwarden
icon: bitwarden
---

克隆存储库，然后从存储库的根目录运行以使用默认的 sqlite 后端构建：

```sh
# 构建docker镜像：
docker build -t vaultwarden .
```

要使用 MySQL 后端构建，请运行：

```sh
# 构建docker镜像：
docker build -t Vaultwarden --build-arg DB=mysql .
```

要使用 Postgresql 后端构建，请运行：

```sh
# 构建docker镜像：
docker build -t vaultwarden --build-arg DB=postgresql .
```

在 docker-compose.yml 中它看起来像

```...
  vaultwarden:
    # 镜像：Vaultwarden/server-postgresql:latest
    image: vaultwarden
    build: 
      context: vaultwarden
      args: 
        DB: postgresql
```
