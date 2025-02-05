---
title: Lesson 11
createTime: 2024/10/23 15:32:36
permalink: /integral/integral/eovrwwsw/
---
# 高等微积分 Lesson 11

期中考试安排：第八周周日（11月3日，9:00 - 11:00），第一教室楼101 & 201.

## 介值定理

连续函数能取到一切介值（中间值）.

/Example/ （应用1）

> 设$f:[0,1]\to[0,1]$连续，则$f$有不动点（考虑$g(x)=f(x)-x$）.

将$[0,1]$视为一维的实心球体，可以将这个概念推广到高维的球体中——这就是1920年代 Brouwer 提出的不动点定理.

/Theorem/

> 令$D_n=\{\bold{x}\in\R^n|d(\bold{x},0)\leq1\}$为带边的$n$维球体，则$D_n$到自己的任何连续映射皆有不动点.

千百年来，Brouwer 是第一个想到把一维的“球体”推广到高维情形下的人，有时这就是很大的创新.

这个定理在后来发展为 Fixed Point Theory，不动点理论，在 topology 中发挥作用.

下学期我们会使用 Green 定理证明不动点定理的二维形式.

/Claim/ （应用2）

> 奇数次实系数多项式必有实根.

/Proof/

> 方法1：介值定理
>
> > $p(x)=x^{2n+1}+a_{2n}x^{2n}+\cdots$，当$|x|$充分大时，显然首项是起到主导作用的.
> >
> > ==在这门课中，我们要学会如何严谨地写下证明.==
> >
> > 如何写出首项的主导作用？
> > $$
> > \begin{aligned}
> > p(x)&=x^{2n+1}(1+\sum_{i=0}^{2n}\frac{a_i}{x^{2n+1-i}})\\\\
> > \underset{x\to\infty}{\lim}&(1+\sum_{i=0}^{2n}\frac{a_i}{x^{2n+1-i}})=1>0
> > \end{aligned}
> > $$
> > 从而$\exist M$，使得$\forall|x|\geq M$，有$1+\sum_{i=0}^{2n}\frac{a_i}{x^{2n+1-i}}>0$. 选择$\forall|x|\geq M$，$p(x)$与首项同号，但是$p(M)>0>p(-M)$，由介值定理知道$\exist a\in[-M,M]$使得$p(a)=0$.
>
> 方法2：实系数多项式的复根共轭成对出现.（这是一个没有那么好的证明，因为要用到代数基本定理，整个证明过程变得复杂）
>
> > 对$p(x)$的任何复根$z$，有$p(z)=0$. 取共轭，得到
> > $$
> > \begin{aligned}
> > 0&=\overline{p(z)}=\overline{\sum_{i=0}^{m}a_iz^i}\\\\
> > &=\sum_{i=0}^ma_i(\bar{z})^i=p(\bar{z})
> > \end{aligned}
> > $$
> > 表明，$z$是$p(x)$的根 $\Longleftrightarrow$ $\bar z$是$p(x)$的根.
> >
> > 代数基本定理（这是 Gauss 在博士论文中最早证明的）：设$p(x)$是次数$\geq1$的复系数多项式，则$p(x)$共有$\deg p$（degree of $p$）个复根（在计入重复数意义下）. （这个定理也可以使用 Green 公式证明）
> >
> > 若$\deg p$是奇数，又有奇数个根，则必有一个根的共轭等于其自身，为实数，得证.

证毕.

/Example/ （弦定理，Chord 定理）

> 设$f:[0,1]\to\R$连续且$f(0)=f(1)$，则$\forall n\in\Z_+$，存在$x\in[0,1]$使得
> $$
> f(x)=f(x+\frac{1}{n})
> $$
> 也就是弦$((x,f(x)),(x+\frac{1}{n},f(x+\frac{1}{n})))$平行$x$轴且长为$1/n$.

理解：一座山有两个等高的山脚，一定可以在山上找到等高的两个点，其水平距离是$1/n$倍山脚之间的距离.

/Proof/

> 令$g(x)=f(x+\frac{1}{n})-f(x):[0,1-1/n]\to\R$，是连续的，来证明$g$有零点，条件是$f(0)=f(1)$.
> $$
> \begin{aligned}
> g(0)&=f(\frac{1}{n})-f(0)\\\\
> g(\frac{1}{n})&=f(\frac{2}{n})-f(\frac{1}{n})\\\\
> \cdots\\\\
> g(\frac{n-1}{n})&=f(1)-f(\frac{n-1}{n})\\\\
> \Longrightarrow\sum_{i=0}^{n-1}g(\frac{i}{n})&=f(1)-f(0)=0
> \end{aligned}
> $$
> 则$\exist g(\frac{i}{n})\geq 0$，$\exist g(\frac{j}{n})\leq 0$，由介值定理，$\exist g(x)=0$，得证.

证毕.

拓展：如果把上面 Chord 定理中的$1/n$换成任意的分数$r$，定理还成立吗？答案是不一定成立，但是老师好像忘记这个构造了，有兴趣的同学欢迎一试.

## 有界性、最值定理

这两个定理是微积分的基础，如果不成立的话，

::: info -

那么我们就解放了，大家就不用学微积分了.
——艾神

:::

/Theorem/ （有界性定理）

> 连续函数在有界闭区间上是有界的.

/Theorem/ （最值定理）

> 连续函数在有界闭区间上有最大值与最小值.

注记：（说明上面两个定理中的语言表述为什么是严谨而必要的）

1. 连续函数$f$在有界开区间上未必有最值，比如$f(x)=x$在$(0,1)$上无最值.
2. $f$在无界闭区间上未必有最值，比如上面的函数在$[0,+\infty)$，上没有最值.

<s>死去的 topology 回忆开始攻击我……我的广义相对论还没学完啊</s>

/Definition/

> 所谓$X$的一个覆盖（covering）$\mathscr{U}=\{U_\alpha|\alpha\in$指标集$I\}$是指$\underset{\alpha\in I}{\bigcup}U_\alpha\supseteq X$（同时称$\mathscr{U}$是$X$的一个覆盖）.
>
> 所谓$\mathscr{U}$的一个子覆盖$\mathscr{V}$，是指$\mathscr{V}\subseteq\mathscr{U}$且$\underset{U_\alpha\in\mathscr{V}}{\bigcup}U_\alpha\supseteq X$.
>
> 称$\mathscr{V}\subseteq\mathscr{U}$是一个有限子覆盖，如果$\mathscr{V}$是一个子覆盖且$|\mathscr{V}|<+\infty$.

/Theorem/ （Borel 有限覆盖定理）

> 设$\mathscr{U}$是$[a,b]$的一个覆盖，且$\mathscr{U}$的所有成员皆为开区间，
>
> > <s>你还真的讲 topology 啊，开覆盖都出来了</s>
>
> 则$\mathscr{U}$有一个有限子覆盖（即可从$\mathscr{U}$中选出有限个成员，它们之并包含$[a,b]$）.
>
> 具体地说，设$\mathscr{U}=\{U_\alpha=(x_\alpha,y_\alpha)|\alpha\in$指标集$I\}$，满足$\underset{\alpha\in I}{\bigcup}U_\alpha\supseteq[a,b]$，则可从$\mathscr{U}$中选出有限多个成员覆盖$[a,b]$.

/Proof/

> 反证法，用上我们在证明介值定理时用到过的闭区间套方法.
>
> 设$[a,b]$没有有限子覆盖.
>
> 令$[a_1,b_1]=[a,b]$无$\mathscr{U}$的有限子覆盖，$\Longrightarrow$ $[a,\frac{a+b}{2}]$与$[\frac{a+b}{2},b]$中必有一个也没有$\mathscr{U}$的有限子覆盖（若都有有限子覆盖，则总的覆盖至多是两个有限值之和，是有限的），记之为$[a_2,b_2]$. 还可以继续不断这样处理，得到闭区间下降链$[a_1,b_1]\supseteq[a_2,b_2]\supseteq\cdots$，其中$b_n-a_n=\frac{1}{2^{n-1}}(b-a)$.
>
> 那么由区间套原理，$\underset{n\to\infty}{\lim}a_n=\underset{n\to\infty}{\lim}b_n=c$，且$\{c\}=\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]$.
>
> 由$c\in[a_1,b_1]=[a,b]\subseteq\underset{\alpha}{\bigcup}U_\alpha$，得到对于充分大的指标，$\exist U_\alpha=(x_\alpha,y_\alpha)\ni c$，有$x_\alpha<c<y_\alpha$，即$\underset{n\to\infty}{\lim}a_n>x_\alpha$，$\underset{n\to\infty}{\lim}b_n<y_\alpha$，也就是$\exist N$，$\forall n\geq N$有$a_n>x_\alpha$，$b_n<y_\alpha$，这就证明了$[a_n,b_n]\subseteq U_\alpha$，与假设矛盾！
>
> 假设不成立，原命题成立，得证.

证毕.

下面来看这个“奇怪”的定理的应用.

/Proof/ （用 Borel 定理证明有界性定理）

> 设$f$在区间$[a,b]$上连续，来证明$f$在$[a,b]$上有界.
>
> > 草稿：$f$在$x_0$处有极限 $\Longrightarrow$ $f$在$x_0$某处附近有界；$f$连续 $\Longrightarrow$ $f$在每点局部有界.
>
> $\forall x_0\in[a,b]$，用$f$在$x_0$处连续的定义（$\varepsilon-\delta$语言），对$\varepsilon=1$，$\exist\delta>0$，使得$f[B_\delta(x_0)\cap D]\subseteq B_1(f(x_0))$（其中$D=[a,b]$是$f$的定义域）.
>
> 从而$\forall x\in B_\delta(x_0)\cap D$，有$f(x)\leq f(x_0)+1\overset{\text{marked as}}{=}M_{x_0}$$(*)$（表明$f$在$B_\delta(x_0)\cap D$上有上界$M_{x_0}$）
>
> > 草稿：一个幼稚的想法是，我们可以用每个$x_0$所对应的$M=\underset{x_0}{\max}M_{x_0}$，拼成一个 global 的上界. 但是要记住，无限个$\R_+$的子集未必有一个$\max$，这是不正确的想法.
>
> 注意，令$\mathscr{U}=\{B_{\delta_{x_0}}(x_0)|x_0\in[a,b]\}$，由 Borel 定理，可以从中间选有限个（记$U_{x_0}=B_{\delta_{x_0}}(x_0)$，$\underset{m}{\bigcup}U_{x_m}\supseteq[a,b]$.
>
> 令$M=\max\{M_{x_m}\}$，这里$M$就是存在的，因为$M$的集合是有限个元素. 这样$\forall x\in[a,b]\subseteq\underset{m}{\bigcup}U_{x_m}$，$\exist U_{x_m}\ni x$（进而$x\in U_{x_m}\cap D$）.
>
> 用$(*)$知道，$f(x)\leq M_{x_m}\leq M$，表明$M$是$f$在$[a,b]$的上界，类似的$f$在$[a,b]$上有下界.

证毕.

/Proof/ （最值定理的证明）

> 一个较为取巧的方法是用有界性定理 $\Longrightarrow$ 最值定理.
>
> 由有界性定理知道，$\Im (f)$（就是$\text{Im}f$，也就是$f$的像，这是$\LaTeX$自动识别的符号）有上界，显然非$\varnothing$.
>
> 由确界定理知，$\sup(\Im f)$存在，记为$M$，来证明$M\in\Im f$（$\Longrightarrow$ $M=\max(\Im f)$）：反证，设$M\notin\Im f$，$g(x)=1/(M-f(x))$ $\Longrightarrow$ $g$连续，且由$M=\sup(\Im f)$知$g$无界，矛盾！

证毕.

::: tip -

P.S. 后面两个证明几乎完全没有听懂Q$\omega$Q，要好好回看一下……

:::