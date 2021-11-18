#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
# echo 'codenoob.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io,把下面一行注释掉,替换username即可,注意以下这是ssh的方式
git push -f https://github.com/Smart-Chou/codenoobs.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/Smart-Chou/smart-chou.github.io.git master:gh-pages

cd -
