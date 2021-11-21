---
title: 禁用邀请
description: 最值得信赖的开源密码管理器 
article: false
original: true
time: 2021-11-20
category: 项目
tag:
  - bitwarden
icon: bitwarden
---
即使注册被禁用，组织管理员或所有者也可以邀请用户加入组织。在他们被邀请后，即使 `SIGNUPS_ALLOWED` 实际上设置为 `false`，他们也可以使用受邀电子邮件进行注册。您可以通过将`INVITATIONS_ALLOWED`环境变量设置为`false`来完全禁用此功能：

```sh
docker run -d --name bitwarden \
  -e SIGNUPS_ALLOWED=false \
  -e INVITATIONS_ALLOWED=false \
  -v /vw-data/:/data/ \
  -p 80:80 \
  vaultwarden/server:latest
```
