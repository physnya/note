import{_ as t,c as e,a,b as i,e as l,f as p,r as h,o as r}from"./app-Czoex1dD.js";const k={},d={class:"hint-container details"};function c(o,s){const n=h("CardGrid");return r(),e("div",null,[s[2]||(s[2]=a(`<p>这一周不知道为什么，过得异常充实（一定褒义），也导致我直到周日的下午才有时间开始写这一周的流水账.</p><h2 id="fragment-1-github-actions" tabindex="-1"><a class="header-anchor" href="#fragment-1-github-actions"><span>Fragment 1 GitHub Actions</span></a></h2><p>嗯，周二的下午，上完英语课之后，我发现自己没什么作业可以写（<s>实际情况是那一天之后就有各种作业开始包围我</s>），于是决定尝试让自己的 blog 集成 GitHub Actions ，实现自动部署，同时在 GitHub 上面能够保存一份自己源码的备份.</p><p>由于我只是一个技术小白，所以决定善用搜索引擎，查找教程，最后找到 <a href="https://helloallenw.github.io/" target="_blank" rel="noopener noreferrer">@阿伦</a> 的一篇教程. 经过研读，我理解了 GitHub Actions 部署 blog 的基本原理，就是将自己的源码存储在一个私有 repo 中，然后通过 GitHub Actions ，在 GitHub 的服务器上配置环境、安装依赖，使用安装好的环境启动 Hexo 生成静态文件，并 deploy 到自己的公开 repo 中去，激活 GitHub Pages 的自动 workflow ，这就实现了 blog 的自动部署.</p><p>一开始我没想明白这个到底有什么好处，直到我有一次非常不小心地删掉了我的一大块源码，我才意识到云端备份的重要性（在之前我都是想起来就把源码 copy 到移动硬盘里……简直是原始人）看来这 GitHub Actions 不得不做了o_o ....</p><details class="hint-container details"><summary>总结一下 GitHub Actions 的优点</summary><ol><li><p>保证每个版本都有云端备份，避免数据丢失；</p></li><li><p>充分利用 GitHub 的服务器，避开本地运行 Hexo 出现的各种各样问题（点名吐槽一下 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>KaTeX</mtext></mrow><annotation encoding="application/x-tex">\\KaTeX</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8988em;vertical-align:-0.2155em;"></span><span class="mord text"><span class="mord textrm">K</span><span class="mspace" style="margin-right:-0.17em;"></span><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.905em;"><span class="pstrut" style="height:2.7em;"></span><span class="mord"><span class="mord textrm mtight sizing reset-size6 size3">A</span></span></span></span></span></span><span class="mspace" style="margin-right:-0.15em;"></span><span class="mord text"><span class="mord textrm">T</span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4678em;"><span style="top:-2.7845em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord textrm">E</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2155em;"><span></span></span></span></span><span class="mspace" style="margin-right:-0.125em;"></span><span class="mord textrm">X</span></span></span></span></span></span> ╰（‵□′）╯）；</p></li><li><p>push 代码的时候速度变快，因为只上传代码与上一代不同的部分，剩下的时间交给 GitHub 处理.</p></li></ol></details><p>于是我开始试图构建 GitHub Actions ，以下是我的代码（几乎全部抄自 <a href="https://helloallenw.github.io/" target="_blank" rel="noopener noreferrer">@阿伦</a>）：</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 当有改动推送到master分支时，启动Action</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 自动部署</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    branches</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #2020年10月后github新建仓库默认分支改为main，注意更改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  release</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    types</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> published</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">permissions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> write-all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">jobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  deploy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    runs-on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    steps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 检查分支</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #2020年10月后github新建仓库默认分支改为main，注意更改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 安装 Node</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/setup-node@v1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        node-version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">20.x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #action使用的node版本，建议大版本和本地保持一致。可以在本地用node -v查询版本号。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 安装 Hexo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        export TZ=&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        npm install hexo-cli -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 缓存 Hexo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/cache@v1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cache</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> \${{runner.OS}}-\${{hashFiles(&#39;**/package-lock.json&#39;)}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> steps.cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        npm install --save</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 生成静态文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        hexo clean</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        hexo bangumi -u</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        hexo generate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 部署</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #此处master:master 指从本地的master分支提交到远程仓库的master分支，若远程仓库没有对应分支则新建一个。如有其他需要，可以根据自己的需求更改。</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        cd ./public</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        git init</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        git config --global user.name &#39;\${{ secrets.GITHUBUSERNAME }}&#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        git config --global user.email &#39;\${{ secrets.GITHUBEMAIL }}&#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        git add .</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        git push --force --quiet &quot;https://\${{ secrets.GITHUBUSERNAME }}:\${{ secrets.GITHUBTOKEN }}@github.com/\${{ secrets.GITHUBUSERNAME }}/\${{ secrets.GITHUBUSERNAME }}.github.io.git&quot; master:main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 secrets. 是调用 Secret - Actions 设置的格式.</p><p>接下来就是无聊的设置密钥之类的过程，由于我的目的并不是写一个教程，所以这里只写出我遇到的一堆问题（我在这个玩意上面消耗了将近九个小时╰（‵□′）╯）</p><h3 id="第1次报错" tabindex="-1"><a class="header-anchor" href="#第1次报错"><span>第1次报错</span></a></h3><p>我直接复制代码到 /.github/workflow/ 目录下，然后做好设置，直接 push 到新建立的私有 repo ，等待 Actions 的运行——然后报错了：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">remote:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Support</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> password</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> authentication</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> was</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> removed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> on</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> August</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 13,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2021.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">remote:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Please</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> see</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://docs.github.com/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> information</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> on</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> currently</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> recommended</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> modes</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> of</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> authentication.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fatal:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Authentication</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> failed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> for</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://github.com/***/***.github.io.git/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Error:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Process</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> completed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> with</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 128.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好罢，这个报错显然是权限出问题了（字面意思），我确信这一点. 于是我检查了几遍我的 GitHub 个人密钥是不是输错了. 我在这一方面其实一直很谨慎，所以提前把各种密钥存在记事本里面，所以我找了很久都没有发现问题.</p><p>嗯？那为什么会出错呢？我开始一项一项检查 secret 变量，最后找到原因：我的 GitHub 绑定了3个不同的邮箱，但是我设置我的 mail.ru 邮箱为 Primary ，所以其他的邮箱没有 repo 的读写权限.</p><p>所以错误一定在这里罢！我兴冲冲地修改对应的 secret 变量为 Primary 邮箱，然后三连：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">github action update</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果——</p><h3 id="第2次报错" tabindex="-1"><a class="header-anchor" href="#第2次报错"><span>第2次报错</span></a></h3><p>很好，又报错了 Q<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>Q. 这次的报错信息是:</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">remote:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Repository</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> not</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> found.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fatal:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> repository</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://github.com/***/***.github.io.git/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> not</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> found</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Error:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Process</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> completed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> with</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 128.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我心里冒出来一堆问号：你怎么找不到我的 repo 了呢？之前还是权限不对，现在就变成找不到 repo 了？</p><p>我再次使用搜索引擎，找到了这样一个<a href="https://github.com/actions/checkout/issues/254" target="_blank" rel="noopener noreferrer">#issue</a>. 里面所有人的报错信息都一样是上面那一条，但是每个人的问题都以不同的方式解决：有的人是改掉 actions/checkout@v3 的版本，比如改成 v2 ，然后问题自己消失了；有的人修改 permissions ，允许读写权限，然后也成功了——可是我不管怎么改都没办法成功，还是照样报错.</p><p>我转而在 ⌈开往⌋ 站长QQ群里面提问，得到 <a href="https://blog.zhilu.cyou/" target="_blank" rel="noopener noreferrer">@纸鹿</a> 的回复，说还是权限问题，并要我把 GitHub 的密钥换成对应 repo 的 deploy key. 我照做了，但是还是出现同样的报错.</p><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h3><p>我决定再一次好好看看 autodeploy.yml 的内容——不看不知道，一看吓一跳.</p><p>是这样的，最后一行实现 deploy 的时候引用了 secrets.GITHUBUSERNAME ，但是我的公开 repo 并没有以 <code>GITHUBUSERNAME.github.io</code> 的名称命名，而是简单地叫做 blog 而已，这就造成了字面意义上的“not found”.</p><p>是的，错误就是如此简单.</p><p>然后我改掉了 repo 的名字，结束. 我下次再也不完全照抄其他人的代码了……先思考，再借鉴.</p><h2 id="fragment-2-体检" tabindex="-1"><a class="header-anchor" href="#fragment-2-体检"><span>Fragment 2 体检</span></a></h2><p>因为这几周有一个去食堂当志愿者的活动，可以计入志愿服务时长，我就报名参加了. 这就需要我进行一次健康证体检——可惜我一开始不知道这个玩意的名字.</p><p>于是我花了额外的、无法被报销的255块做了一个与健康证毫无关系的体检，然后被告知这是没有用的. 嗯，很好，所以我不仅浪费了一个多小时的时间在这件事情上面，而且还减少了钱包的存量.</p><p>Q<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>Q.</p><h2 id="fragment-3-开心日报" tabindex="-1"><a class="header-anchor" href="#fragment-3-开心日报"><span>Fragment 3 开心日报</span></a></h2><p>最近我在我们学校的网络社区上面开始每天分享开心的事情，想要借此让自己每天高兴起来：</p>`,35)),i("details",d,[s[1]||(s[1]=i("summary",null,"screenshot",-1)),l(n,{cols:"3"},{default:p(()=>s[0]||(s[0]=[i("img",{src:"https://p.sda1.dev/19/04f7b0b92fafd9de0a214558a55ff630/微信图片_20241020234303.jpg"},null,-1),i("img",{src:"https://p.sda1.dev/19/1edc30c04d995a2861b17d35ccdd676f/微信图片_20241020234304.jpg"},null,-1),i("img",{src:"https://p.sda1.dev/19/4f99b6c4eef5173948b4fe7a2fd2edba/微信图片_20241020234305.jpg"},null,-1)])),_:1})]),s[3]||(s[3]=a('<p>希望我能坚持下去？</p><h2 id="fragment-4-follow" tabindex="-1"><a class="header-anchor" href="#fragment-4-follow"><span>Fragment 4 Follow</span></a></h2><p>星期四的下午，我在 ⌈Qmsg酱⌋ 的QQ群里问了一声有没有人有 follow 的邀请码，结果收到了一段密文，并要求我在 6:00 之前解密，才能得到正确的邀请码. 我自然是解不出来的，但是还是想体验一下 follow 这个“下一代 RSS 信息聚合软件”的丝滑体验. 我遂在闲鱼上买来一个邀请码，然后兴奋地注册了 follow.</p><p>至于体验呢？</p><p>个人认为， follow 在聚合的能力上确实做得非常强大，我导入几个 pixiv 上关注的画师和 NASA 的每日图片，能获得非常好的图片浏览体验；同时可以“follow”其他优质作者，这是一个非常新奇的体验. 但是，在阅读模式下的文本浏览体验却不尽人意. 我对<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>LaTeX</mtext></mrow><annotation encoding="application/x-tex">\\LaTeX</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8988em;vertical-align:-0.2155em;"></span><span class="mord text"><span class="mord textrm">L</span><span class="mspace" style="margin-right:-0.36em;"></span><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.905em;"><span class="pstrut" style="height:2.7em;"></span><span class="mord"><span class="mord textrm mtight sizing reset-size6 size3">A</span></span></span></span></span></span><span class="mspace" style="margin-right:-0.15em;"></span><span class="mord text"><span class="mord textrm">T</span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4678em;"><span style="top:-2.7845em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord textrm">E</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2155em;"><span></span></span></span></span><span class="mspace" style="margin-right:-0.125em;"></span><span class="mord textrm">X</span></span></span></span></span></span>渲染的要求非常高，因为我的 blog 主体内容就是在一些学术的分享上，而 Readability 提供的渲染效果一般，甚至有部分公式格式会出现错乱；还有 Hexo-Fluid 主题内置的 Tag 插件在 Readability 的渲染下完全无法正常显示，这又从何谈起所谓的“现代的html”呢？</p><p>个人认为至少 follow 在之后的开发过程中能够稍微照顾一下我们这些<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>LaTeX</mtext></mrow><annotation encoding="application/x-tex">\\LaTeX</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8988em;vertical-align:-0.2155em;"></span><span class="mord text"><span class="mord textrm">L</span><span class="mspace" style="margin-right:-0.36em;"></span><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.905em;"><span class="pstrut" style="height:2.7em;"></span><span class="mord"><span class="mord textrm mtight sizing reset-size6 size3">A</span></span></span></span></span></span><span class="mspace" style="margin-right:-0.15em;"></span><span class="mord text"><span class="mord textrm">T</span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4678em;"><span style="top:-2.7845em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord textrm">E</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2155em;"><span></span></span></span></span><span class="mspace" style="margin-right:-0.125em;"></span><span class="mord textrm">X</span></span></span></span></span></span>公式渲染重度需求者的使用体验……</p><h2 id="结" tabindex="-1"><a class="header-anchor" href="#结"><span>结</span></a></h2><p>这周的体验算是相当的充实……（<s>不然我也不会在凌晨发这篇流水账</s>）</p><p>附上一张今晚在隔壁拍到的照片作为结尾吧————太忙的时候，我会放弃思考，投身在待办事项的海洋中.</p><div style="text-align:center;"><p><img src="https://p.sda1.dev/19/229d9ece5a8da802f19d0cd5943c7112/cc2fd8d26cc0ba911561eb04e9ce23f.jpg" alt="" width="4032" height="3024"></p></div>',10))])}const g=t(k,[["render",c],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/posts/mjf6caoa/","title":"流水账 Week 6","lang":"zh-CN","frontmatter":{"title":"流水账 Week 6","createTime":"2024/10/20 16:14:33","tags":["Life"],"permalink":"/posts/mjf6caoa/","description":"这一周不知道为什么，过得异常充实（一定褒义），也导致我直到周日的下午才有时间开始写这一周的流水账. Fragment 1 GitHub Actions 嗯，周二的下午，上完英语课之后，我发现自己没什么作业可以写（），于是决定尝试让自己的 blog 集成 GitHub Actions ，实现自动部署，同时在 GitHub 上面能够保存一份自己源码的备份....","head":[["meta",{"property":"og:url","content":"https://physnya.top/posts/mjf6caoa/"}],["meta",{"property":"og:site_name","content":"菲兹克斯喵"}],["meta",{"property":"og:title","content":"流水账 Week 6"}],["meta",{"property":"og:description","content":"这一周不知道为什么，过得异常充实（一定褒义），也导致我直到周日的下午才有时间开始写这一周的流水账. Fragment 1 GitHub Actions 嗯，周二的下午，上完英语课之后，我发现自己没什么作业可以写（），于是决定尝试让自己的 blog 集成 GitHub Actions ，实现自动部署，同时在 GitHub 上面能够保存一份自己源码的备份...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p.sda1.dev/19/229d9ece5a8da802f19d0cd5943c7112/cc2fd8d26cc0ba911561eb04e9ce23f.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-12T03:06:55.000Z"}],["meta",{"property":"article:tag","content":"Life"}],["meta",{"property":"article:modified_time","content":"2025-02-12T03:06:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流水账 Week 6\\",\\"image\\":[\\"https://p.sda1.dev/19/229d9ece5a8da802f19d0cd5943c7112/cc2fd8d26cc0ba911561eb04e9ce23f.jpg\\"],\\"dateModified\\":\\"2025-02-12T03:06:55.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":7.5,"words":2251},"git":{"updatedTime":1739329615000,"contributors":[{"name":"physnya","username":"physnya","email":"676266673@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/physnya?v=4","url":"https://github.com/physnya"}]},"autoDesc":true,"filePathRelative":"weekly/weekly-6.md","categoryList":[{"id":"4a11fc","sort":10001,"name":"weekly"}],"bulletin":true}');export{g as comp,y as data};
