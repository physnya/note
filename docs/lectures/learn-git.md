---
title: 讲座 - Git 技能学习
createTime: 2024/11/10 15:02:32
tags:
  - interdisciplinarity
  - lecture
  - git
permalink: /posts/kqza8uq6/
---
## 讲座 - Git 技能学习

### Introduction

什么是 Git？

首先我们要了解版本控制的概念. 朴素的版本控制中，有几个缺点：

1. 不方便版本回退；
2. 多人合作困难；
3. ……

若使用 Git 控制版本，我们能清晰地了解开发历史，看到修改记录，同时有精确到行的修改溯源.

一个抽象的概念：“Git 相机”. 这相当于创建一个项目的 snapshot，我每次按下快门，就能产生一次 commit，之后追溯版本对应的 commit，就能回退到某个版本.

同时还有“分支”的概念，任何一个 branch 都是从某一个版本衍生出来的，在多人开发的情况下，之后再进行合并. 当然，若不同的 branch 修改位置重合，Git 就不能自动合并分支，必须手动调整.

Git 规定一个项目只存在一个 commit，不存在“上一个 commit”，这一个 commit 叫做 init commit. 这是要手动确定的. branch 是==指向树上某个 commit 的指针==.

### Local Git

查看 Git 版本：

```bash
$ git -v 
```

初始化：

```bash
$ git config --global user name
$ git config --global email
```

上面的 global 表示全局配置.

初始化项目：

```bash
$ git init
```

之后是暂存更改：

```bash
$ git add .
$ git add *.cpp
```

这一般在根目录下进行，可以将目录下所有目录全部存在暂存区中间. 第二行是将目录下的所有 .cpp 文件存入暂存区，“*”是通配符.

移除文件：

```bash
$ git rm <path> [--cached]
```

如果不加上 --cached，就能将文件同时从系统中删除；加上之后只会从暂存区删除文件，不删除文件本身.

commit 操作：

```bash
$ git commit [-m <message>] [-a]
```

其中，-m 操作能为这个操作命名；-a 操作则是将所有被跟踪文件全部放入暂存区.

对于任何一个文件，有四种状态：不被跟踪、被修改、被修改且修改被跟踪、被修改但是修改没有存入暂存区.

Git 中的指针几乎始终（例外是刚创建项目时）指向某个 commit，最常用的指针是 HAED 指针，它指向用户正在修改的分支.

对于 Git 分支的操作有：

```bash
$ git branch
$ git branch <name>
$ git branch -d <name>
$ git branch -D <name>
```

分别是例举分支、命名、删除和强制删除.

切换分支：

```bash
$ git switch
$ git switch <name>
$ git switch -c <name>
$ git switch --detach <commit id>
```

分别是：切换分支、切换指定分支、创建并切换分支、将 HEAD 指向改 commit.

合并分支有两种方式，是 merge 和 rebase，前者是将重做的所有修改合并为一个，后者是将重做的所有 commit 合并到当前分支后面. 特别地，如果目标分支是源分支的上游，则会触发 fast-forward ，不会 commit.

```bash
$ git merge <branch>
```

将指定分支合并到当前所在分支. 如果存在冲突，则不会影响两个分支，是安全的.

```bash
$ git rebase <branch>
```

rebase 翻译过来是“变基”，相当于使某一个分支看起来像是在当前分支之前操作的一样，当前分支的基础变到合并进来的分支上.

冲突处理的方式是使用：

```bash
$ git status
```

找到所有标注为 unmerged 的文件（未能正确合并），只能重新修改这些文件，再次加入暂存区中.

merge 的好处是：冲突更少、保持历史的完整性；反之，rebase 的好处是：修改历史是线性的、保证合并之后的分支的 commit id 和 commit 签名不变.

其他的一些常用指令：

```bash
$ git log
```

查看当前分支的提交历史，包含 commit id，作者和提交日期，还会显示当前有哪些指针指向这个分支.

> 这里还有几个延申的指令：
>
> ```bash
> $ git log --graph
> $ git log --oneline
> $ git log --all
> ```
>
> 分别是点线图、每次 commit 用一行展示、展示所有分支的 log.

接下来是 show 指令：

status 指令：

```bash
$ git status
```

展示所有文件的状态.

重置仓库状态：

```bash
$ git reset [<commit>] [--soft/--mixed/--hard]
```

如果不填写 commit id，则默认回到 HEAD；也可以使用 ```HEAD^```、```HEAD^2``` 回到 HEAD 的若干次 commit 之前.

后面三个分别代表：保留重置前修改并跟踪、保留重置前但是不跟踪、不保留，默认是 --mixed.

撤销更改：

```bash
$ git restore [--staged] <file>
```

staged 不会删除文件，撤销更改不影响新建文件，而是影响已有文件的修改.

.gitignore 文件：里面记录不被 Git 跟踪的文件规则，每行一条规则.

其他还有 git checkout 之类，但是容易引起歧义，不建议使用.

### Remote Git

Git 是分布式的，每个开发者都会有一个 .git 文件夹，共同在代码托管平台上编辑同样的项目.

网页鉴权的方式一般是 ssh 密钥. 当配置好 Git 的 ssh 密钥之后，Git 将会获得与你的账号相同的访问权限.

clone 项目：

```bash
$ git clone <url>
```

其中 url 有两种方式，ssh 方式和 http 方式（<s>你用得也够多了</s>）.

管理远程仓库：

```bash
$ git remote
$ git remote add <url>
$ git remote remove <name>
```

展示远程仓库、添加远程仓库和删除远程仓库. 远程分支都是```<remote>/<branch>```的格式.

可以用以下两个指令进行同步远程和本地分支：

```bash
$ git pull
$ git push
```

（我想我应该很熟悉 ```git push origin main```）

### Fork & Pull

这是开源社区所使用的开发模式.

注意 commit message 规范问题，以 Angular 规范为例：

> 提交类型指定为下面其中一个：
>
> 1. build：对构建系统或者外部依赖项进行了修改；
> 2. ci：对 CI 配置文件或者脚本进行了修改；
> 3. docs：对文档进行了修改；
> 4. feat：增加新的特征；
> 5. fix：修复 bug；
> 6. perf：提高性能的代码更改；
> 7. refactor：既不是修复 bug，也不是添加特征的代码重构；
> 8. style：不影响代码含义的修改，比如空格、格式化、缺失的分号等；
> 9. test：增加确实的测试或者矫正已存在的测试.

为了认证自己的身份，还需要 GPG 公钥和私钥，这样提交的 commit 会被签名，签名的方法是

```bash
$ git config user.signingkey <ID>
```

设置签名的 GPG key，之后 commit 添加 -s 参数就能签名.

---

这个讲座是学长来讲的，速度实在是太快，有点记不下来……而且 ppt 不能外传，就先这样吧.
