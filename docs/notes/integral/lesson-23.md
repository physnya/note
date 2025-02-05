---
title: Lesson 23
createTime: 2024/12/08 20:40:58
permalink: /integral/integral/pli9qaav/
---
# 高等微积分 Lesson 23

## 凹凸性

$f$在$I$上是下凸的 $\Longleftrightarrow$ 图像在弦 PQ 下方 $\Longleftrightarrow$ 对任何$x,y\in I$，任何权重$\alpha,\beta\in[0,1]$，$\alpha+\beta=1$，有$f(\alpha x+\beta y)\leq\alpha f(x)+\beta f(y)$.

> 记忆方法：$f$作用在定比分点$\leq$$f$的定比分点.

同时还可以用斜率不等式进行表述.

上凸反之，全部不等式反向，建议每次自己画一个图方便理解.

为什么函数的凹凸性会和微分学有关系？我们马上就会问，对于一个可导的$f$，如何刻画其凹凸性.

/Theorem/

> 设$f$在$I$中处处可导，则如下命题彼此等价：
>
> * $f$在$I$上下凸.
>
> * $f$的图像总在切线的上方，即
>   $$
>   \forall x\in I,\quad f(x)\geq f(x_0)+f'(x_0)(x-x_0)
>   $$
>
> * $f'$在$I$上单调递增（未必是严格的，只要不减就满足条件）.

/Proof/

> 证明“$1\to2$”：设$f$下凸（已知条件），讨论.
>
> 若$x>x_0$，找到两个这样的$x_1$，$x_2$，不妨设$x_0<x_1<x_2$，用斜率不等式即可.
> $$
> \begin{aligned}
> \frac{f(x_1)-f(x_0)}{x_1-x_0}&\leq\frac{f(x_2)-f(x_0)}{x_2-x_0}\\
> f'(x_0)=\lim_{x_1\to x_0+}&\frac{f(x_1)-f(x_0)}{x_1-x_0}\leq\frac{f(x_2)-f(x_0)}{x_2-x_0}
> \end{aligned}
> $$
> 化简得到
> $$
> f(x)\geq f(x_0)+f'(x_0)(x-x_0)
> $$
> 反之亦然. 得证.
>
> 证明“$2\to3$”：由 2 的结论，改写成
> $$
> \frac{f(x)-f(x_0)}{x-x_0}\geq f'(x_0)
> $$
> 也就是，弦的斜率大于左端点处切线斜率. 这样解读之后，推导命题 3 就几乎是显然的.
>
> 证明“$3\to1$”：用两次微分中值定理，得到
> $$
> k_{12}=f'(\xi_1)\,,\quad\xi_1\in(x_1,x_2)\\
> k_{23}=f'(\xi_{2})\,,\quad\xi_2\in(x_2,x_3)
> $$
> 所以命题得证.

证毕.

假设$f$有二阶导，则$f$在$I$上是下凸的 $\Longleftrightarrow$ $f''$在$I$上处处非负. 这就是最常用的上下凸判断方法.

这个证明是显然的.

一个记忆方法：考察这样的一个二次函数$g(x)=ax^2+bx+c$，$f''=2a$，这就能看出开口朝向什么位置，确定上下凸和二阶导符号的关系.

凹凸性的用处何在？答案是它能产生一系列不等式. 因为$f$下凸 $\Longleftrightarrow$ $\forall x,y\in I$，$\forall\alpha,\beta>0$，$\alpha+\beta=1$，有$f(\alpha x+\beta y)\leq\alpha f(x)+\beta f(y)$.

这是两个点的加权平均，容易推广到$n$个点的情形，这样就会得到 Jensen 不等式.

/Theorem/ （Jensen 不等式）

> 设$f$在$I$上是下凸的，则对于$I$中的任何$n$个点$x_1,\cdots,x_n$上，以及任意总和为一的非负实数（权）$\alpha_1,\cdots,\alpha_n$有
> $$
> f(\alpha_1x_1+\cdots+\alpha_nx_n)\leq\alpha_1f(x_1)+\cdots+\alpha_nf(x_n)
> $$
> 特别地，对于$\alpha_1=\cdots=\alpha_n=1/n$的情况，可以得到
> $$
> f(\frac{x_1+\cdots+x_n}{n})\leq\frac{f(x_1)+\cdots+f(x_n)}{n}
> $$

/Proof/

> 并不困难，只要对$n$归纳：
>
> 对于$n-1$已经成立，对$n$有
> $$
> \begin{aligned}
> &f(\alpha_1x_1+\cdots+\alpha_{n-1}x_{n-1}+\alpha_nx_n)\\\\
> &=f(\alpha_1x_1+\cdots+(\alpha_{n-1}+\alpha_n)\frac{\alpha_{n-1}x_{n-1}+\alpha_nx_n}{\alpha_{n-1}+\alpha_n})\\\\
> &\leq\alpha_1f(x_1)+\cdots+(\alpha_{n-1}+\alpha_n)f(\frac{\alpha_{n-1}x_{n-1}+\alpha_nx_n}{\alpha_{n-1}+\alpha_n})\\\\
> &=\sum_{i=1}^n\alpha_if(x_i)
> \end{aligned}
> $$

证毕.

推论：设$f''$在$I$上非负，$f$在$I$上是下凸函数，则有 Jensen 不等式成立.

/Example/

> $f(x)=\ln x:\R_+\to\R$，$f'=1/x$，$f''=-1/x^2<0$.
>
> $\ln x$在$\R_+$上是上凸的.
>
> ::: tip -
>
> 我每次自己写的时候都要偷偷摸摸画一个图，因为容易把方向搞反.
>
> ——艾神
>
> :::
>
> 从而得到，$\forall x_i,\cdots,x_n>0$，$\forall$和为$1$的非负数$\alpha_1,\cdots,\alpha_n$，有
> $$
> f(\sum_i\alpha_ix_i)\geq\sum_i\alpha_if(x_i)\\
> \Longrightarrow\sum_i\alpha_ix_i\geq x_1^{\alpha_1}\cdots x_n^{\alpha_n}
> $$
> 这被称为 Yang 不等式.

/Theorem/ （Yang 不等式）

> 若$x_i>0$，$\alpha_i\geq0$且$\sum_i\alpha_i=1$，则有
> $$
> \sum_i\alpha_ix_i\geq x_1^{\alpha_1}\cdots x_n^{\alpha_n}
> $$
> 在$n=2$情况下，得到
> $$
> x^\alpha y^\beta\leq\alpha x+\beta y
> $$
> 如果取所有权相等，那么就会得到我们常用的均值不等式：
> $$
> \sqrt[n]{x_1\cdots x_n}\leq\frac{x_1+\cdots+x_n}{n}
> $$

/Theorem/ （Holder 不等式）

> 条件与上面相同，全部是正数，得到
> $$
> \sum_{i=1}^nx_i^\alpha y_i^\beta\leq(\sum_{i=1}^nx_i)^\alpha(\sum_{i=1}^ny_i)^\beta
> $$
> 如果推广到积分形式，$f$、$g$是连续的正值函数，则
> $$
> \int_a^bf^\alpha(x)g^\beta(x)\text{d}x\leq(\int_a^bf(x)\text{d}x)^\alpha(\int_a^bg(x)\text{d}x)^\beta
> $$

/Proof/

> 证明完全是用 Yang 不等式. 记$A=\int f(x)\text{d}x$，$B=\int g(x)\text{d}x$，要证明的式子等价于
> $$
> \int_a^b\frac{f^\alpha(x)}{A^\alpha}\frac{g^\beta(x)}{B^\beta}\text{d}x\leq1
> $$
> 用 Yang 不等式就知道，
> $$
> \begin{aligned}
> \int_a^b(\frac{f(x)}{A})^\alpha(\frac{g(x)}{B})^\beta\text{d}x&\leq\int_a^b(\alpha\frac{f(x)}{A}+\beta\frac{g(x)}{B})\text{d}x\\
> &=\frac{\alpha}{A}\int_a^bf(x)\text{d}x+\frac{\beta}{B}\int_a^bg(x)\text{d}x\\
> &=\alpha+\beta=1
> \end{aligned}
> $$

证毕.

在 Holder 不等式中取两个权重为$1/2$，则称为 Cauchy - Schwarz 不等式（内积！）

在周五的课程中，我们没有证明幂平均不等式，这里用一些时间简单证明.

/Proof/ （幂平均不等式）

> 记$f(x)=\ln G(x)=\frac{1}{x}\ln(\sum\lambda_ia_i^x)$. 来证明
> $$
> f'(x)=\frac{\frac{\sum\lambda_ia_i^x\ln x}{\sum\lambda_ia_i^x}-\ln(\sum\lambda_ia_i^x)}{x^2}\geq0
> $$
> 这等价于证明
> $$
> \sum\lambda_ia_i^x\ln a_i^x\geq(\sum\lambda_ia_i^x)\ln(\sum\lambda_ia_i^x)
> $$
> 注意到重复出现的一些部分，可以令$h(y)=y\ln y$，得到
> $$
> \sum\lambda_ih(a_i^x)\geq h(\sum\lambda_ia_i^x)
> $$
> 这是$h$的 Jensen 不等式. 实际上，$h$下凸，因为
> $$
> \begin{aligned}
> h'(y)&=\ln y+1\\
> h''(y)&=\frac{1}{y}>0
> \end{aligned}
> $$
> 所以上面的 Jensen 不等式恰好成立，得证.

证毕.

我们也可以来找更多例子.

/Example/

> $f(x)=\sin x$，$f'(x)=\cos x$，$f''(x)=-\sin x$. 这里的正负性只能在区间上面判断，在$[0,\pi]$上$f''(x)$非正，$f(x)$上凸；在$[\pi,2\pi]$上$f''(x)$非负，$f(x)$下凸，$\cdots$
>
> 一般来说，我们把上下凸性改变的点称为“拐点”.

/Definition/

> 称$x_0$是$f$的拐点，若$f$在$x_0$两侧的上 / 下凸性相反.

虽然上面这个概念并不是很重要，但是它强迫我们意识到这一点：上下凸性和区间有关，分析上下凸性不能脱离区间讨论.

继续回到对三角函数的研究：

/Claim/ （$\sin x$的 Jensen 不等式）

> 设$x_1,\cdots,x_n\in[0,\pi]$，则
> $$
> \sin\frac{x_1+\cdots+x_n}{n}\geq\frac{\sin x_1+\cdots+\sin x_n}{n}
> $$
> 这个命题在没有 Jensen 不等式之前极为难证，想想它的一个推论：在$\Delta ABC$中，有
> $$
> \sin A+\sin B+\sin C\leq\frac{3\sqrt3}{2}
> $$

/Claim/

> 1. 设$f$是连续的下凸函数，则$f$在$[a,b]$上的最大值应当在区间端点取到. 也就是，下凸函数的$\max$在端点取到.
> 2. 反之，上凸函数的$\min$在端点取到.
>
> 如果改写成和我们的微积分课程联系更加紧密的形式，就是：
>
> 设$[a,b]$上$f''\geq0$，则$f$在$[a,b]$上的最大值在端点取到. 反之亦然.

写两个版本的目的是用不同方法来证明，实际上第二种版本可以用 Taylor 展开来证明.

/Proof/ （版本 1）

> 对于下凸函数证明.
>
> 由最值定理得到最大值一定存在，但是如果出现在端点就没有证明的意义了，所以我们假设这个点$x_0$在区间内部. 取$x_0-h$、$x_0+h$两个点，用 Jensen 不等式：
> $$
> f(x_0)=f(\frac{(x-h)+(x+h)}{2})\leq\frac{f(x-h)+f(x+h)}{2}\leq M
> $$
> 其中$M=\max f$. 这里必须取等，因为$f(x_0)=M$已经由假设成立，即两个点$x-h$、$x+h$处的值都等于$M$，整个函数是常值函数，取$h=\min(d(x_0,a),d(x_0,b))$，两个点中就有一个是端点.

::: tip -

（下课的时候）你把那个关了，我最不喜欢听自己的声音，每次看自己的录像都会静音.
——艾神

:::

下课的时候，有同学提出更好的证明，就是用$a$、$x_0$、$b$三个点，使用斜率不等式（上节课讲的），也能推出常值函数.

在这个方法的启发之下，我们发现甚至可以抛弃$f$连续的条件，完全不需要最值定理，用$f$下凸的定比分点定义，$\forall x\in[a,b]$，可用$\lambda\in[0,1]$表示$x=(1-\lambda)a+\lambda b$. 则
$$
f(x)=f((1-\lambda)a+\lambda b)\leq(1-\lambda)f(a)+\lambda f(b)\leq\max\{f(a),f(b)\}
$$
得证.

/Proof/ （版本 2）

> 利用 Taylor 公式，若$x_0\in(a,b)$是极值点，则$f'(x_0)=0$，有
> $$
> f(b)=f(x_0)+\frac{f''(\xi)}{2}(b-x_0)^2\geq f(x_0)
> $$
> 所以还是必须取等.

证毕.

/Example/

> 设$f''(x)\leq M$，$\forall x\in[a,b]$，已知$f(a)=f(b)=0$，则$f(x)\geq?$
>
> ::: tip -
>
> 哎呀，我忘记自己要证明的结论是什么了. Anyway，我先空在这里.
>
> ——艾神
>
> :::

/Proof/

> 令$g(x)=f(x)+\frac{M}{2}(x-a)(b-x)$，发现这个构造使得$g''(x)\leq0$，$g(a)=g(b)=0$.
>
> 可以知道，$g$上凸，最小值在端点处取到，而端点值为零，所以整个函数$g(x)\geq0$，$\forall x\in[a,b]$.
>
> 所以
> $$
> f(x)\geq\frac{M}{2}(x-a)(x-b)
> $$

证毕.

对偶地，也可以把条件改成$f''(x)\geq-M$，构造
$$
h(x)=f(x)-\frac{M}{2}(x-a)(b-x)
$$
这时$h(x)$下凸，可证明总是小于零的.

至此，我们完成了微分学，下面开始积分学.

## 积分学

### 不定积分

::: tip -

没有人会特别认真地计算一个不定积分，除非他想算一个定积分.
——艾神

:::

不定积分就是求导的逆运算，设$I$是给定区间，导子$D$的作用是将$I$上的可导函数映射到$I$上的函数，我们自然而然地想问$D$有没有逆运算. 但是，$D$远非满射.

/Definition/

> 称$F:I\to\R$是$f:I\to\R$在区间上的一个原函数，如果$D(F)=f$，也即$F'(x)=f(x)$，$\forall x\in I$.

问：$f$有无原函数？有哪些？

我们在习题课中曾经讲过 Darboux 中值定理：设$F$在$I$上处处可导，则$F'$满足介值定理，即使它并不一定连续.

虽然我们在习题课中已经证明过该结论，但是这里还是证明一下.

/Proof/ （Darboux 中值定理）

> 设$v$介于$F'(a)$、$F'(b)$之间，不妨设$F'(a)<v<F'(b)$.
>
> 令$G(x)=F(x)-vx$，则$G'(a)<0<G'(b)$，要证明$\exist G'(x)=0$，我们先假设$\forall G'(x)\neq0$，则由 Rolle 定理的逆否命题，得到$G$是单射，而连续单射严格单调，分类讨论：
>
> 1. $G$严格递增，则$G'$处处$\geq0$，与$G'(a)<0$矛盾；
> 2. $G$严格递减，则$G'$处处$\leq0$，与$G'(b)>0$矛盾.
>
> 所以$\exist G'(x)=0$，定理得证.

证毕.

由这个定理，我们就已经知道导子$D$不是满射，因为我们肯定可以在区间$I$上构造一个取不到自己介值的函数，它一定不是某个函数的导函数.

如果要问什么样的函数有原函数，这是很难回答的，但是我们能讲出一个 partial answer，就是连续的函数一定有原函数，因为一个变上限的积分$\int_a^xf(x)\text{d}x$，其导数就会是这个函数.

/Claim/

> 在区间$I$上$f$的原函数彼此相差常数.

/Proof/

> 设$F'=G'=f$，则$h=F-G$满足$h'=0$. 用微分中值定理，对于$\forall x<y\in I$有
> $$
> h(y)-h(x)\overset{\exist\xi}{=}h'(\xi)(y-x)=0
> $$
> 所以$h$是一个常值$C$，任何原函数记为$F=G+C$.

这样，导子$D$的逆变换实际上是$D^{-1}(f)=\{f$的原函数$\}=\{F(x)+C|C\in\R\}$. 这个记为
$$
\int f(x)\text{d}x+C
$$
称为$f(x)$的不定积分.

实际上，积分就是一种查表的过程，查询求导结果的表格. 所以积分也有对应几条性质：
$$
\begin{aligned}
\int(\alpha f(x)+\beta g(x))\text{d}x&=\alpha\int f(x)\text{d}x+\beta\int g(x)\text{d}x\\
\int(f'g+fg')\text{d}x&=f(x)g(x)\\
\int F'(\alpha(x))\alpha'(x)\text{d}x&=F(\alpha(x))+C
\end{aligned}
$$
这分别是线性性、分部积分公式和换元公式.

/Claim/

> 分部积分.
> $$
> \int f'(x)g(x)\text{d}x=f(x)g(x)-\int f(x)g'(x)\text{d}x
> $$
> 不定积分换元公式.
> $$
> \int F'(\alpha(x))\alpha'(x)\text{d}x=F(\alpha(x))+C
> $$
> （在 Zorich 的书中，讲到这里就算讲完了换元公式，但是部分中文书讲了第一换元、第二换元，这可能会让我们更难理解，所以之后再讲.）

/Example/

> $(x^\alpha)'=\alpha x^{\alpha-1}$.
> $$
> \int x^\beta\text{d}x=\left\{\begin{array}{lr}
> \frac{x^{\beta+1}}{\beta+1}+C\,,\quad\beta\neq-1\\\\
> \ln|x|+C\,,\beta=-1
> \end{array}\right.
> $$
> 一定要注意区间.
>
> $(e^x)'=e^x$，$(a^x)'=a^x\ln a$.
> $$
> \int a^x\text{d}x=\frac{a^x}{\ln a}+C
> $$
> $(\sin x)'=\cos x$，$(\cos x)'=-\sin x$.
>
> ……

### Riemann 积分

我们在第一节课讲过 Archimedes 求一个曲线下的面积，要剖分区间$I=[a,b]$，小区间$I_i=[x_{i-1},x_i]$，其长度记为$|I_i|=x_i-x_{i-1}=\Delta x_i$.

则$\text{area}(D_i)\approx f(\xi_i)|I_i|=f(\xi_i)\Delta x_i$. 则总面积是所谓的 Riemann 和，
$$
\text{area}(D)\approx\sum_{i=1}^nf(\xi_i)\Delta x_i
$$
Archimedes 相信，当剖分越来越细时，上述 Riemann 和趋于真正的面积.

为了叙述前述的极限过程，记剖分$\{x_0=a<x_1<\cdots<x_n=b\}$为$P$（partition），描述$P$的精细程度$\lambda(P)=\max\{|I_i|\}$，越小越精细.

/Definition/

> 称当剖分越来越细时，Riemann 和趋于极限$I$（integral），如果$\forall\varepsilon>0$，$\exist\delta>0$，使得只要$\lambda(P)<\delta$，对任何选点方案$\{\xi\}$有
> $$
> |\sum_{i=0}^nf(\xi_i)\Delta x_i-I|<\varepsilon
> $$
> 若如此，则称积分$\int_a^bf(x)\text{d}x$存在，并称上述极限$I$为$f$在$[a,b]$上的积分（值），同时称$f$在$[a,b]$上可积.

有时我们会忽略哑元$\text{d}x$，而直接写$I=\int_a^bf$.

以上这个定义是复杂的，因为它同时涉及选点方案和剖分，难以判断某一个$f$是否可积，更难以计算积分值.

/Example/

> 常值函数可积.
>
> （约定$[a,b]$上可积函数的全体记作$\mathcal{R}([a,b])$.）

/Proof/

> Riemann 和是$c(b-a)$，$f(x)=c$，这是与选点方案无关的.

/Claim/

> 可积函数一定有界，无界函数不可积分.

/Proof/

> 反证，设$f\in\mathcal{R}([a,b])$，且$f$无界，则取定一个$\lambda(P)<\delta$，对任何选点有
> $$
> |\sum_if(\xi_i)\Delta x_i-I|<\varepsilon
> $$
> 取定选点$\{\xi_i\}$，因为无界，所以$\exist f(C)$远离已经选好的$n$个$f(\xi_1),\cdots,f(\xi_n)$，用$C$替换掉一个选点即可，要求
> $$
> |f(C)-f(\xi_i)|\geq\max\{\frac{2\varepsilon}{\Delta x_1},\cdots,\frac{2\varepsilon}{\Delta x_n}\}
> $$
> 从而，
> $$
> \begin{aligned}
> 2\varepsilon&>|\sum f(\eta_i)\Delta x_i-\sum f(\xi_i)\Delta x_i|\\\\
> &=|f(C)-f(\xi_j)|\Delta x_j\\\\
> &>\max\{\frac{2\varepsilon}{\Delta x_1},\cdots,\frac{2\varepsilon}{\Delta x_n}\}\Delta x_j\\\\
> &\geq\frac{2\varepsilon}{\Delta x_j}\Delta x_j=2\varepsilon
> \end{aligned}
> $$
> 矛盾.

证毕.

我们遗憾地发现就算证明上述结论，我们还是难以回答连续函数是否可积这一问题，主要因为我们定义中的选点方案产生了大量的任意性. 所以我们应该引入一个新的积分定义.

设$f$在$[a,b]$上有界，对$[a,b]$的每个剖分$P=\{a=x_0<\cdots<x_n=b\}$，考虑$P$下最大和最小的 Riemann 和：

/Definition/

> 定义$f$在剖分$P$下的 Darboux 上和为
> $$
> U(P,f)=\sum_i(\sup_{I_i}f)\cdot|I_i|
> $$
> 和 Darboux 下和
> $$
> L(P,f)=\sum_i(\inf_{I_i}f)\cdot|I_i|
> $$
> 注意，上和和下和未必是 Riemann 和，因为不一定全部取到上界或者下界.

显然，$L(P,f)\leq U(P,f)$.

引理：$\forall$两剖分$P_1$、$P_2$总有$L(P_1,f)\leq U(P_2,f)$.

称$P$是$P_1$的加细，若$\{P_1$的分割点$\}\subseteq\{P$分割点$\}$，等价地说，$P$来自于$P_1$加更多分点得到的剖分.

引理：若$P$是$P_1$的加细，则$U(P,f)\leq U(P_1,f)$，$L(P,f)\geq L(P_1,f)$.

/Proof/

> 加一个新的分点，被分成两半，$I_i=J_1\cup J_2$，所以
> $$
> \begin{aligned}
> U(P_1,f)-U(P_1\cup y,f)&=|I_i|\sup_{I_i}f-|J_1|\sup_{J_1}f-|J_2|\sup_{J_2}f\\
> &\geq\sup_{I_i}f(|I_i|-|J_1|-|J_2|)\\
> &=0
> \end{aligned}
> $$
> 所以加新的点之后，$U(P,f)$下降，$L(P,f)$上升.

同时可以证明前面一个引理，令$P=P_1\cup P_2$，$P$是$P_1$、$P_2$的加细，所以$L(P_1,f)\leq L(P_1\cup P_2,f)\leq U(P_1\cup P_2,f)\leq U(P_2,f)$.

所以所有$L$有上界$U_0$（任何一个$U$都可以），由确界定理得到存在一个$\sup L$存在，记为$\text{L}$，同理也有$\text{U}=\inf U$.

可以证明$\text{L}=\text{U}$.

这里的证明略去，可以看讲义的附录、去年的课程视频，或者是 Stein & Shaka Rchi 的 Fourier 分析书的附录.

/Claim/

> $\text{L}=\text{U}$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist$剖分$P$使得$U(P,f)-L(P,f)<\varepsilon$.

/Proof/

> “$\Longrightarrow$”证明：
>
> 设$\text{L}=\text{U}=I$，由$\text{U}+\frac{\varepsilon}{2}$不是上和的下界，知道，存在$U(P,f)<\text{U}+\frac{\varepsilon}{2}$，同理，$\exist L(P,f)>L-\frac{\varepsilon}{2}$.
>
> 取$P=P_1\cup P_2$（公共加细），得到
> $$
> \begin{aligned}
> U(P,f)\leq U(P_1,f)&<I+\frac{\varepsilon}{2}\\
> L(P,f)\geq L(P_2,f)&>I-\frac{\varepsilon}{2}\\
> \Longrightarrow U(P,f)-L(P,f)&<\varepsilon
> \end{aligned}
> $$
> 得证.
>
> “$\Longleftarrow$”证明：
>
> 由$\text{L}=\sup L(P,f)$，$\text{U}=\inf U(P,f)$，知道
> $$
> \begin{aligned}
> \text{U}-\text{L}&\leq U(P,f)-L(P,f)<\varepsilon\\
> \Longrightarrow\text{U}-\text{L}&\leq\text{any }\varepsilon>0\\
> \Longrightarrow\text{U}-\text{L}&\leq0
> \end{aligned}
> $$
> 结合$\text{U}\geq\text{L}$，知道$\text{U}=\text{L}$.

/Theorem/

> 对于有界的$f$，有$f$在$[a,b]$上可积 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist$剖分$P$使得$U(P,f)-L(P,f)<\varepsilon$.

（此定理更好用）

/Claim/

> 连续函数皆可积，单调且有界的函数皆可积.

/Proof/

> $f$连续，在闭区间上一致连续，$\forall\varepsilon>0$，$\exist\delta>0$使得$\forall|x-y|<\delta$，有$|f(x)-f(y)|<\frac{\delta}{b-a}$. 任取一个剖分$P$，满足$\lambda(P)<\delta$，
> $$
> \sup_{I_i}f-\inf_{I_i}f=\sup_{x,y\in I_i}(f(x)-f(y))\leq\frac{\varepsilon}{b-a}
> $$
> 由$|I_i|<\delta$知道$|f(x)-f(y)|<\frac{\delta}{b-a}$.
>
> 从而
> $$
> \begin{aligned}
> U(P,f)-L(P,f)&=\sum_i|I_i|(\sup_{I_i}f-\inf_{I_i}f)\\
> &=\sum_i|I_i|(f(x_i)-f(x_{i-1}))\\
> &=\frac{b-a}{n}\sum_i(f(x_i)-f(x_{i-1}))\\
> &=\frac{b-a}{n}(f(b)-f(a))
> \end{aligned}
> $$
> 当$n$足够大，就能得到$f$可积的结果.