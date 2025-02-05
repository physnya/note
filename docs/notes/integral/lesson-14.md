---
title: Lesson 14
createTime: 2024/11/01 12:04:54
permalink: /integral/integral/uh28zejn/
---
# 高等微积分 Lesson 14

## 无穷大量与无穷小量

称$x\to a$时$f(x)$是无穷小量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f(x)=0$.

如何比较小量的大小？

1. $f=o(g)$ as $x\to a$ $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=0$.
2. $f$与$g$是同阶无穷小 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g\in\R|\{0\}$.
3. $f\sim g$ as $x\to a$ $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=1$.（等价无穷小）
4. $f=O(g)$（大写的$o$）$\Longleftrightarrow$ $\exist\text{const}$使得$|f(x)|\leq\text{const}|g(x)|$，$\forall x\in B_r(a)|a$，对于某个$r$.

类似地，可以定义无穷大量：

/Definition/

> 设$\underset{x\to a}{\lim}f(x)=\underset{x\to a}{\lim}g(x)=+\infty$.
>
> 1. 称$f$是比$g$更低阶的无穷大量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=0$；
> 2. 同阶无穷大 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g\in\R_+$；
> 3. 等价无穷大 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=1$.

/Claim/

> 在求极限时，若某个量$f(x)$涉及乘除，不涉及加减和乘方运算，则可将这个量替换为其等价的无穷小/大量.

/Proof/

> 设$f\sim g$ as $x\to a$. 要证明的是$\underset{x\to a}{\lim}f(x)h(x)=\underset{x\to a}{\lim}g(x)h(x)$.
> $$
> \begin{aligned}
> \underset{x\to a}{\lim}\frac{f(x)}{g(x)}(g(x)h(x))&=\underset{x\to a}{\lim}\frac{f}{g}\underset{x\to a}{\lim}gh\\\\
> &=\underset{x\to a}{\lim}gh
> \end{aligned}
> $$
> 即证.

证毕.

提醒：==若$f$涉及其他的非四则运算，则不可替换！==下面的很多例子都来源于之后的 Taylor 展开.

/Example/

> $$
> \lim_{x\to0}\frac{x-\sin x}{x^3}\neq0
> $$

## 导数

接下来就进入我们课程的下一个阶段——微分学.

我们回忆之前提到过的 Newton 的流数法. 这种方法可以处理质点运动的速度.

/Example/

> 质点在直线$\R$上运动，$t$时刻位置是$x(t)$.

/Definition/

> $t$时刻质点的运动速度是
> $$
> \lim_{\Delta t\to0}\frac{x(t+\Delta t)-x(t)}{\Delta t}
> $$

这个量记为$f'(x)$，$\frac{\text{d}f}{\text{d}x}|_{x=x_0}$，$\frac{\text{d}f}{\text{d}x}(x_0)$，$\frac{\text{d}f(x_0)}{\text{d}x}$. 后面几种记号是由 Leibiniz 给出的，理由是：
$$
\begin{aligned}
\underset{h\to0}{\lim}\frac{f(x+h)-f(x)}{h}&=\underset{\Delta x\to0}{\lim}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\\\
&=\underset{\Delta x\to0}{\lim}\frac{\Delta f}{\Delta x}
\end{aligned}
$$
$\Delta$ 读作 delta，Leibiniz 说：定义“微分”$\text{d}f$，$\text{d}x$，导数$=$微分之商$=$微商.

注：导数$f'(x_0)$描述了$f$在$x_0$处的变化率（速度是位移的变化率）.

Newton 的老师 Barrow 用尽毕生时间研究曲线的切线问题（这个问题在大航海时代非常重要，否则就会偏航）

::: tip -

如果不知道自己在哪里，就可能会发现新大陆.
——艾神

:::

Newton 发现自己的导数能将老师的工作统一成一个式子：

/Example/

> 假设曲线$\Gamma=\Gamma_f=\{(x,f(x))|x\in D\}$，$P(x_0,f(x_0))$.
>
> 求曲线在点$P$处的切线.

/Solution/

> 做切线之前，我们先考虑过$P$、$Q$两点的一条割线. 当$P$和$Q$无限接近时，这条线趋于切线.
> $$
> \underset{Q\to P}{\lim}k_{PQ}=\underset{x\to x_0}{\lim}\frac{f(x)-f(x_0)}{x-x_0}=f'(x_0)
> $$

/Definition/

> $f$图像上$(x_0,f(x_0))$点处的切线为（切线方程）
> $$
> y-f(x_0)=f'(x_0)(x-x_0)
> $$

至此我们就知道了导数最本质的几个含义. 但是我们仍然认为这个导数定义不够好，因为它要求$f$必须在$x_0$的邻域内有定义，对于闭区间我们该怎么办？

/Definition/ （单侧导数）

> 右导数
> $$
> f'(x_0+)=\underset{x\to x_0+}{\lim}\frac{f(x)-f(x_0)}{x-x_0}
> $$
> 这描述了$x$从右侧接近$x_0$时，$f$的变化率.
>
> 同样可以定义左导数.

/Claim/

> $f$在$x_0$处可导 $\Longleftrightarrow$ $f'(x_0+)$与$f'(x_0-)$存在且相等.

证明是简单的，略去.

有没有不可导的函数？

::: tip -

遍地都是.
——艾神

:::

/Example/

> $f(x)=|x|$，在$0$处不可导，因为$f'(x_0+)=1$，$f'(x_0-)=-1$.

由上面的例子看来，连续函数未必可导.

/Definition/

> 称$f$是$D$上的可导函数，如果$f$在$D$上每点处可导.（若$D$为闭区间，则要求在端点处存在单侧导数）
>
> 这样得到新的$D\to\R$映射：$x_0\to f'(x_0)$，称之为$f$的导函数，记为$f':D\to\R$或者$\frac{\text{d}f}{\text{d}x}:D\to\R$.
>
> 这样就产生一种新的运算，我们得到一个求导算子：
>
> $\{D$上可导函数$\}\overset{D}{\longrightarrow}\{D$上函数$\}$，$D$称为“导子”. 这是一个定义在无穷维空间之间的映射.

我们已经知道连续函数不一定可导，那么可导函数是否连续？

/Theorem/

> 可导函数一定连续.

/Proof/

> $$
> \begin{aligned}
> \underset{x\to x_0}{\lim}(f(x)-f(x_0))&=\underset{x\to x_0}{\lim}\frac{f(x)-f(x_0)}{x-x_0}(x-x_0)\\\\
> &=f'(x_0)\underset{x\to x_0}{\lim}(x-x_0)=0
> \end{aligned}
> $$
>
> 证明了连续性.

## 求导法则

接下来讲求导的计算法则.

/Example/

> $c'=0$（$c$为常数）

/Example/

> $$
> \begin{aligned}
> (x^n)'&=\underset{h\to0}{\lim}\frac{(x+h)^n-x^n}{h}\\\\
> &=nx^{n-1}
> \end{aligned}
> $$
>
> 用二项式展开.

/Example/

> $$
> \begin{aligned}
> (e^x)'&=\underset{h\to0}{\lim}\frac{e^{x+h}-e^x}{h}\\\\
> &=e^x\underset{h\to0}{\lim}\frac{e^h-1}{h}
> \end{aligned}
> $$
>
> 换元$e^h-1=y$，即得：$(e^x)'=e^x$.

::: tip -

常有人讲这样的笑话：常值函数和指数函数在路上走，看到前面有一个导子，常值函数大惊失色（因为他会消失），而指数函数面不改色. 但是走近一看，发现这是对$y$的偏导算子，于是两个函数都消失了.
——艾神

:::

/Example/

> $$
> \begin{aligned}
> (\ln x)'&=\underset{h\to0}{\lim}\frac{\ln(x+h)-\ln x}{h}\\\\
> &=\underset{h\to0}{\lim}\ln(1+\frac{h}{x})^{1/h}
> \end{aligned}
> $$
>
> 换元$h/x=t$，得到$(\ln x)'=1/x$.

讲一个稍难的例子：

/Example/

> $(\ln|x|)'=?$

这样的情况下，对$x<0$分类讨论即可，答案仍然是$1/x$不变.

/Example/

> $$
> \begin{aligned}
> (\sin x)'&=\underset{h\to0}{\lim}\frac{\sin(x+h)-\sin x}{h}\\\\
> &=\underset{h\to0}{\lim}\frac{2\cos(x+\frac{h}{2})\sin\frac{h}{2}}{h}\\\\
> &=\cos x\\\\
> (\cos x)'&=\underset{h\to0}{\lim}\frac{\cos(x+h)-\cos x}{h}\\\\
> &=\underset{h\to0}{\lim}\frac{-\sin(x+\frac{h}{2})\sin\frac{h}{2}}{h}\\\\
> &=-\sin x
> \end{aligned}
> $$

我们还想知道四则运算下导函数应该怎样计算.

/Theorem/

> 设$f$，$g$在$x_0$处可导，则（略去$(x_0)$不写）
>
> 1. $(f\pm g)'=f'\pm g'$；
> 2. $(fg)'=f'g+fg'$；
> 3. $(\frac{f}{g})'=\frac{f'g-fg'}{g^2}$.

让我们选一个比较难的公式来证明，作为例子：

/Proof/ （求导法则 - 3.）

> $$
> \begin{aligned}
> (\frac{f}{g})'(x)&=\underset{h\to0}{\lim}\frac{\frac{f(x+h)}{g(x+h)}-\frac{f(x)}{g(x)}}{h}\\\\
> &=\underset{h\to0}{\lim}\frac{f(x+h)g(x)-f(x)g(x+h)}{h\cdot g(x)g(x+h)}\\\\
> &=\underset{h\to0}{\lim}\frac{[f(x+h)-f(x)]g(x)-f(x)[g(x+h)-g(x)]}{h\cdot g(x)g(x+h)}\\\\
> &=\frac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}
> \end{aligned}
> $$
>
> 其中最后一步还用到了可导函数的连续性，$g(x+h)\to g(x)$.

从上面的定理发现，导子$D$满足如下性质（做代数的人们喜欢这样描述）：

* $D(1)=0$；
* $\forall a,b\in\R$有$D(af+bg)=aD(f)+bD(g)$（$D$是线性的）；
* Leibiniz 法则：$D(fg)=D(f)g+fD(g)$.

代数上，称满足上面三个条件的算子为导子.

为什么我们不写商的 Leibiniz 法则？因为可以用乘法的法则推导；但是我们在之前要证明商的求导法则，是因为我们还不知道商是否可导.

有了四则运算的求导法则，我们可以计算一些更难的求导.

/Example/

> $P(x)=\underset{i=0}{\overset{n}\sum}a_ix^i$的导函数是$P'(x)=\underset{i=0}{\overset{n}\sum}ia_ix^{i-1}$.
>
> $\tan x$的导函数是$1/\cos^2x$.
>
> ……

推论（Leibiniz 法则）：
$$
(f_1f_2\cdots f_k)'=\sum_{i=1}^{k}f_1f_2\cdots f_i'\cdots f_k
$$
这个可以用在一些连乘上，比如$P(x)=a_n(x-x_n)\cdots(x-x_1)$的求导.

/Theorem/ （Chain Rule，链式法则）

> 设$f$在$x_0$处可导，$g$在$f(x_0)$处可导，则$g\circ f$在$x_0$处可导，且
> $$
> (g\circ f)'(x_0)=g'(f(x_0))f'(x_0)
> $$

==这个法则非常重要，几乎所有的求导运算都要用到！==

其实我们现在应当证明它，但是这种证明非常繁杂，所以我们延后这个定理的证明，考虑在学完微分之后用微分的观点证明这一定理.

推论：设$f$，$g$处处可导，则导函数$(g\circ f)'=g'(f(x))f'(x)$.

/Example/

> $$
> (x^\alpha)'=(e^{\alpha\ln x})'
> $$
>
> 令$f(x)=\alpha\ln x$，$g(y)=e^y$，这里$\alpha\in\R$，和之前的$n\in\Z$不同.
>
> 用链式法则可以证明：$(x^\alpha)'=\alpha x^{\alpha-1}$.

/Example/

> $$
> (a^x)'=(e^{x\ln a})'=e^{x\ln a}\ln a=a^x\ln a
> $$

/Example/

> $$
> \begin{aligned}
> (u(x)^{v(x)})'&=(e^{v\ln u})'=e^{v\ln u}(v\ln u)'\\\\
> &=u^v(v'\ln u+v\frac{1}{u}u')\\\\
> &=u^v(v'\ln u+\frac{vu'}{u})
> \end{aligned}
> $$

之后在复变函数的学习中，我们会关心多项式$f$的根分布情况，$f(x)=(x-x_1)\cdots(x-x_n)$，用到：
$$
(\ln f(x))'=\frac{f'(x)}{f(x)}=\sum_{i=1}^n\frac{1}{x-x_i}
$$

## 求导应用

/Example/ （帮助计算序列极限）

> 序列过于离散，有时用函数的方式描述反而更好处理.
>
> 已知$\{x_n\neq x_0\}$且$\to x_0$，有
> $$
> \lim_{n\to\infty}\frac{f(x_n)-f(x_0)}{x_n-x_0}
> $$

问：设$f$处处可导，导函数是否连续？

/Example/

> $$
> f(x)=\left\{\begin{array}{lr}
> x^2\sin\frac{1}{x}\,,\quad\forall x\neq0\\\\
> 0\,,\quad x=0
> \end{array}\right.
> $$
>
> 首先这个$f$处处可导，
>
> 1. $x\neq0$时，$f'(x)=2x\sin\frac{1}{x}-\cos\frac{1}{x}$；
> 2. $x=0$时，$f'(x)=\underset{x\to0}{\lim}\frac{f(x)-f(0)}{x}=\underset{x\to0}{\lim}(x^2\sin\frac{1}{x})=0$.
>
> 但是导函数并不连续，因为在$x\to0$时，极限不存在.
>
> 为了尝试找到$x\to0$时的极限，考虑构造点列去逼近这个极限. 为了简单，我们只考虑$\cos\frac{1}{x}$，利用 Heine 定理：
>
> 1. 点列为$x_n=1/2n\pi$（$n\in\Z_+$），$\{x_n\}$处处不为零且趋于$0$，得到$\underset{n\to\infty}{\lim}\cos\frac{1}{x_n}=1$；
> 2. 点列为$y_n=1/(2n+\frac{1}{2})\pi$，同样做法，但是极限就变成$1$了.
>
> 矛盾！
>
> 所以不存在极限，导函数不连续.

从上面的例子我们发现，求导这种运算不可捉摸，因为即使处处可导的一个“好”的函数，在经过这种运算之后可能还会变“坏”；但是之后要讲的积分则不然，越积分，函数就会越来越光滑.

==求导会让函数变得不光滑，积分会让函数变得光滑.==

陈省身先生曾经讲过微积分课，其中他能用积分的地方就不用求导，甚至 Taylor 展开的余项都是用积分余项，而不用 Lagrange 余项，就是上面的这个原因：很多数学家会更喜欢积分.