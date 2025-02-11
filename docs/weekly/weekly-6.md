---
title: 流水账 Week 6
createTime: 2024/10/20 16:14:33
tags:
  - Life
permalink: /posts/mjf6caoa/
---

# 流水账 Week 6

这一周不知道为什么，过得异常充实（一定褒义），也导致我直到周日的下午才有时间开始写这一周的流水账.

## Fragment 1 GitHub Actions

嗯，周二的下午，上完英语课之后，我发现自己没什么作业可以写（<s>实际情况是那一天之后就有各种作业开始包围我</s>），于是决定尝试让自己的 blog 集成 GitHub Actions ，实现自动部署，同时在 GitHub 上面能够保存一份自己源码的备份.

由于我只是一个技术小白，所以决定善用搜索引擎，查找教程，最后找到 [@阿伦](https://helloallenw.github.io/) 的一篇教程. 经过研读，我理解了 GitHub Actions 部署 blog 的基本原理，就是将自己的源码存储在一个私有 repo 中，然后通过 GitHub Actions ，在 GitHub 的服务器上配置环境、安装依赖，使用安装好的环境启动 Hexo 生成静态文件，并 deploy 到自己的公开 repo 中去，激活 GitHub Pages 的自动 workflow ，这就实现了 blog 的自动部署.

一开始我没想明白这个到底有什么好处，直到我有一次非常不小心地删掉了我的一大块源码，我才意识到云端备份的重要性（在之前我都是想起来就把源码 copy 到移动硬盘里……简直是原始人）看来这 GitHub Actions 不得不做了o_o ....

::: details 总结一下 GitHub Actions 的优点

1. 保证每个版本都有云端备份，避免数据丢失；

2. 充分利用 GitHub 的服务器，避开本地运行 Hexo 出现的各种各样问题（点名吐槽一下 $\KaTeX$ ╰（‵□′）╯）；

3. push 代码的时候速度变快，因为只上传代码与上一代不同的部分，剩下的时间交给 GitHub 处理.

:::

于是我开始试图构建 GitHub Actions ，以下是我的代码（几乎全部抄自 [@阿伦](https://helloallenw.github.io/)）：

```yaml
# 当有改动推送到master分支时，启动Action
name: 自动部署

on:
  push:
    branches:
      - main #2020年10月后github新建仓库默认分支改为main，注意更改

  release:
    types:
      - published

permissions: write-all

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: 检查分支
      uses: actions/checkout@v3
      with:
        ref: main #2020年10月后github新建仓库默认分支改为main，注意更改

    - name: 安装 Node
      uses: actions/setup-node@v1
      with:
        node-version: "20.x" #action使用的node版本，建议大版本和本地保持一致。可以在本地用node -v查询版本号。

    - name: 安装 Hexo
      run: |
        export TZ='Asia/Shanghai'
        npm install hexo-cli -g

    - name: 缓存 Hexo
      uses: actions/cache@v1
      id: cache
      with:
        path: node_modules
        key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

    - name: 安装依赖
      if: steps.cache.outputs.cache-hit != 'true'
      run: |
        npm install --save

    - name: 生成静态文件
      run: |
        hexo clean
        hexo bangumi -u
        hexo generate

    - name: 部署 #此处master:master 指从本地的master分支提交到远程仓库的master分支，若远程仓库没有对应分支则新建一个。如有其他需要，可以根据自己的需求更改。
      run: |
        cd ./public
        git init
        git config --global user.name '${{ secrets.GITHUBUSERNAME }}'
        git config --global user.email '${{ secrets.GITHUBEMAIL }}'
        git add .
        git push --force --quiet "https://${{ secrets.GITHUBUSERNAME }}:${{ secrets.GITHUBTOKEN }}@github.com/${{ secrets.GITHUBUSERNAME }}/${{ secrets.GITHUBUSERNAME }}.github.io.git" master:main
```



其中 secrets. 是调用 Secret - Actions 设置的格式.

接下来就是无聊的设置密钥之类的过程，由于我的目的并不是写一个教程，所以这里只写出我遇到的一堆问题（我在这个玩意上面消耗了将近九个小时╰（‵□′）╯）

### 第1次报错

我直接复制代码到 /.github/workflow/ 目录下，然后做好设置，直接 push 到新建立的私有 repo ，等待 Actions 的运行——然后报错了：

```bash
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/***/***.github.io.git/'
Error: Process completed with exit code 128.
```



好罢，这个报错显然是权限出问题了（字面意思），我确信这一点. 于是我检查了几遍我的 GitHub 个人密钥是不是输错了. 我在这一方面其实一直很谨慎，所以提前把各种密钥存在记事本里面，所以我找了很久都没有发现问题.

嗯？那为什么会出错呢？我开始一项一项检查 secret 变量，最后找到原因：我的 GitHub 绑定了3个不同的邮箱，但是我设置我的 mail.ru 邮箱为 Primary ，所以其他的邮箱没有 repo 的读写权限.

所以错误一定在这里罢！我兴冲冲地修改对应的 secret 变量为 Primary 邮箱，然后三连：

```bash
$ git add .
$ git commit -m "github action update"
$ git push origin main
```

结果——

### 第2次报错

很好，又报错了 Q$\omega$Q. 这次的报错信息是:

```bash
remote: Repository not found.
fatal: repository 'https://github.com/***/***.github.io.git/' not found
Error: Process completed with exit code 128.
```

我心里冒出来一堆问号：你怎么找不到我的 repo 了呢？之前还是权限不对，现在就变成找不到 repo 了？

我再次使用搜索引擎，找到了这样一个[#issue](https://github.com/actions/checkout/issues/254). 里面所有人的报错信息都一样是上面那一条，但是每个人的问题都以不同的方式解决：有的人是改掉 actions/checkout@v3 的版本，比如改成 v2 ，然后问题自己消失了；有的人修改 permissions ，允许读写权限，然后也成功了——可是我不管怎么改都没办法成功，还是照样报错.

我转而在 ⌈开往⌋ 站长QQ群里面提问，得到 [@纸鹿](https://blog.zhilu.cyou/) 的回复，说还是权限问题，并要我把 GitHub 的密钥换成对应 repo 的 deploy key. 我照做了，但是还是出现同样的报错.

### 解决

我决定再一次好好看看 autodeploy.yml 的内容——不看不知道，一看吓一跳.

是这样的，最后一行实现 deploy 的时候引用了 secrets.GITHUBUSERNAME ，但是我的公开 repo 并没有以 ```GITHUBUSERNAME.github.io``` 的名称命名，而是简单地叫做 blog 而已，这就造成了字面意义上的“not found”.

是的，错误就是如此简单.

然后我改掉了 repo 的名字，结束. 我下次再也不完全照抄其他人的代码了……先思考，再借鉴.

## Fragment 2 体检

因为这几周有一个去食堂当志愿者的活动，可以计入志愿服务时长，我就报名参加了. 这就需要我进行一次健康证体检——可惜我一开始不知道这个玩意的名字.

于是我花了额外的、无法被报销的255块做了一个与健康证毫无关系的体检，然后被告知这是没有用的. 嗯，很好，所以我不仅浪费了一个多小时的时间在这件事情上面，而且还减少了钱包的存量.

Q$\omega$Q.

## Fragment 3 开心日报

最近我在我们学校的网络社区上面开始每天分享开心的事情，想要借此让自己每天高兴起来：

:::: details screenshot

::: center
  ![](https://p.sda1.dev/19/04f7b0b92fafd9de0a214558a55ff630/微信图片_20241020234303.jpg)
  ![](https://p.sda1.dev/19/1edc30c04d995a2861b17d35ccdd676f/微信图片_20241020234304.jpg)
  ![](https://p.sda1.dev/19/4f99b6c4eef5173948b4fe7a2fd2edba/微信图片_20241020234305.jpg)
:::

::::

希望我能坚持下去？

## Fragment 4 Follow

星期四的下午，我在 ⌈Qmsg酱⌋ 的QQ群里问了一声有没有人有 follow 的邀请码，结果收到了一段密文，并要求我在 6:00 之前解密，才能得到正确的邀请码. 我自然是解不出来的，但是还是想体验一下 follow 这个“下一代 RSS 信息聚合软件”的丝滑体验. 我遂在闲鱼上买来一个邀请码，然后兴奋地注册了 follow.

至于体验呢？

个人认为， follow 在聚合的能力上确实做得非常强大，我导入几个 pixiv 上关注的画师和 NASA 的每日图片，能获得非常好的图片浏览体验；同时可以“follow”其他优质作者，这是一个非常新奇的体验. 但是，在阅读模式下的文本浏览体验却不尽人意. 我对$\LaTeX$渲染的要求非常高，因为我的 blog 主体内容就是在一些学术的分享上，而 Readability 提供的渲染效果一般，甚至有部分公式格式会出现错乱；还有 Hexo-Fluid 主题内置的 Tag 插件在 Readability 的渲染下完全无法正常显示，这又从何谈起所谓的“现代的html”呢？

个人认为至少 follow 在之后的开发过程中能够稍微照顾一下我们这些$\LaTeX$公式渲染重度需求者的使用体验……

## 结

这周的体验算是相当的充实……（<s>不然我也不会在凌晨发这篇流水账</s>）

附上一张今晚在隔壁拍到的照片作为结尾吧————太忙的时候，我会放弃思考，投身在待办事项的海洋中.

::: center
  ![](https://p.sda1.dev/19/229d9ece5a8da802f19d0cd5943c7112/cc2fd8d26cc0ba911561eb04e9ce23f.jpg)
:::