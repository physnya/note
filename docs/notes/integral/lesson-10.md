---
title: Lesson 10
createTime: 2024/10/18 16:23:46
permalink: /integral/integral/y317t8ko/
---
# 高等微积分 Lesson 10

## 连续性

$f$在$x_0$处连续 $\Longleftrightarrow$ $\underset{x\to x_0}{\lim}f(x)=f(x_0)$ 

$\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$，$\forall|x-x_0|<\delta$，使得$|f(x)-f(x_0)|<\varepsilon$.

/Claim/ （用序列极限刻画连续性）

> $f$在$x_0$处连续 $\Longleftrightarrow$ 若$\underset{n\to\infty}{\lim}x_n=x_0$，则$\underset{n\to\infty}{\lim}f(x_n)=f(x_0)$.

/Proof/

> 先证明“$\Longrightarrow$”：设$f$在$x_0$处连续，设$\underset{n\to\infty}{\lim}x_n=x_0$，$D$为定义域，则有复合极限
> $$
> \Z_+\overset{h}{\longrightarrow}D\overset{f}{\longrightarrow}\R
> $$
> $\underset{n\to\infty}{\lim}h(n)=x_0$，$\underset{x\to x_0}{\lim}f(x)=f(x_0)$且修正2成立，由复合极限定理得到命题成立.
>
> 再证明“$\Longleftarrow$”：设右侧的命题P成立，求证$\underset{x\to x_0}{\lim}f(x)=f(x_0)$. 为此，考虑 Heine Theorem ，其中说“$\underset{x\to x_0}{\lim}f(x)=f(x_0)$ $\Longleftrightarrow$ $\forall\{y_n\neq x_0\}$且$\underset{n\to\infty}{\lim}y_n=x_0$的序列有$\underset{n\to\infty}{\lim}f(y_n)=f(x_0)$”
>
> 上面的定理右侧恰好是命题P的特例，当然成立，由此证明了$\underset{x\to x_0}{\lim}f(x)=f(x_0)$.

证毕.

下面就得到一个推论：连续函数与序列极限可交换. 也就是说，设$f$是连续函数，则$\underset{n\to\infty}{\lim}f(x_n)=f(\underset{n\to\infty}{\lim}x_n)$，当然前提是$\underset{n\to\infty}{\lim}x_n$存在.

上面推论的证明实际上就是命题的“$\Longrightarrow$”部分.

------

回忆[压缩映像定理](/integral/integral/ih4mtv5k/)，最后一段证明实际上使用这里的这个推论.

设$(X,d)$是完备度量空间，$T:X\to X$压缩，要求：

1. $T$连续：验证$T$在$x_0$处的连续性（用$\varepsilon-\delta$语言）

   $\forall\varepsilon>0$，取$\delta=\varepsilon/c$，从而$\forall d(x,x_0)<\delta$，有
   $$
   d(Tx,Tx_0)\leq cd(x,x_0)<c\delta=\varepsilon
   $$
   （压缩映射是连续的）

2. 任取$x_0\in X$，定义$x_n=T^{(n)}(x_0)$，先验证$\{x_n\}$是Cauchy列，再由$X$是完备度量空间，证明$\underset{n\to\infty}{\lim}x_n=z$（存在）.

   在学习完上面的推论之后，我们就可以这样进行最后一步证明：由$T$连续，得到
   $$
   T(z)=T(\underset{n\to\infty}{\lim x_n})\overset{\text{exchange}}{=}\underset{n\to\infty}{\lim}T(x_n)=\underset{n\to\infty}{\lim} x_{n+1}=z
   $$
   证毕.

------

我们还要继续讨论不连续能“坏”到什么程度.

/Definition/

> 称$x_0$是$f$的连续点 $\Longleftrightarrow$ $f$在$x_0$处连续；
> 称$x_0$是$f$的间断点 $\Longleftrightarrow$ $f$在$x_0$处不连续.
>
> 间断点有两种可能的情形：
>
> 1. 存在$\underset{x\to x_0}{\lim}f(x)$，但是不等于$f(x_0)$.
> 2. $\underset{x\to x_0}{\lim}f(x)$不存在.

对于第1类间断点，可以修改$f$为$\tilde{f}$，要求
$$
\tilde{f}(x)=\left\{\begin{array}{lr}
f(x)\,,\quad\forall x\neq x_0\\\\
\underset{x\to x_0}{\lim}f(x)=L\,,\quad x=x_0
\end{array}\right.
$$
则$\tilde f$在$x_0$处连续，所以我们可以称第1类间断点为“可去间断点”.

对于第2类间断点，我们叫做“本质间断点”（essential）.

以后经常要通过修改$f$的方式去掉第1类间断点.

下面还要做一些术语上的约定：

1. 在有一些比较老的教材上，会称定义域$D$之外的点$x_0$为$f$的间断点，也就是说只要$\underset{x\to x_0}{\lim}f(x)$不存在，就称$x_0$为间断点.
2. 我们的课上讨论的连续点和间断点坚持$x_0\in D$.

## 连续函数的局部性质

/Theorem/ （四则运算保持连续）

> 四则运算==几乎==会保持连续性. 这个“几乎”来自于除法的一些分母不为零的要求.
>
> 设$f$，$g$在$x_0$处连续，则
>
> 1. $f\pm g$在$x_0$处连续.
>
> 2. $fg$在$x_0$处连续.
>
>    > 注记：注意记号的差别，$f\circ g$是复合，$(f\circ g)(x)=f(g(x))$，而函数乘法写作$fg$或者$f\cdot g$，相当于逐点做乘法，$(fg)(x)=f(x)\cdot g(x)$.
>
> 3. 若$g(x_0)\neq 0$，则$f/g$在$x_0$处连续.

/Proof/

> 仅仅对3.进行证明. 由于
> $$
> \underset{x\to x_0}{\lim}\frac{f}{g}=\frac{\underset{x\to x_0}{\lim}f(x)}{\underset{x\to x_0}{\lim}g(x)}=\frac{f(x_0)}{g(x_0)}=\frac{f}{g}(x_0)
> $$

证毕.

推论：设$f,g\in C(D,\R)$，则有$f\pm g$，$f\cdot g\in C(D,\R)$，记$V=\{x\in D|g(x)=0\}$为$g$的零点集，则有$f/g\in C(D-V,\R)$. 这是显然的.

/Theorem/

>  复合保持连续性，连续映射的复合仍然连续.

回顾：对逐点连续性的定义较为狭隘，我们应该如何使这个定义适用于一般的$D$？

（比如在$D$边缘上的一点，其开球邻域会有一部分落在$D$之外）

/Definition/

> 对一般的定义域$D$，称$f:D\to\R$在$x_0$处连续，若$\forall\varepsilon>0$，$\exist\delta>0$，使得$f[B_\delta(x_0)\cap D]\subseteq B_\varepsilon(f(x_0))$.
>
> 称$f$是$D$上的连续映射（记为$f\in C(D,\R)=C(D)$），如果$f$在$D$上每点处连续.

/Theorem/

> 设$f:D\to E$在$x_0$处连续，
>
> > 也就是说，$f$在$x_0$处不“撕开”.
>
> $g:E\to F$在$f(x_0)$处连续，
>
> > 也就是说，$g$在$f(x_0)$处不“撕开”.
>
> 则$g\circ f:D\to F$在$x_0$处连续.
>
> > 也就是说，$g\circ f$在$x_0$处不“撕开”.

/Proof/

> 由$g$在$f(x_0)$处连续知，$\forall\varepsilon>0$，$\exist\delta_1>0$使得$g[B_{\delta_1}(f(x_0))\cap E]\subseteq B_\varepsilon((g\circ f)(x_0))$.
>
> 用$f$在$x_0$处连续定义知对于上述$\delta_1>0$，$\exist\delta>0$使得$f[B_\delta(x_0)\cap D]\subseteq B_{\delta_1}(f(x_0))$.
>
> 由$f$像点取值在$E$中，有$f[B_\delta(x_0)\cap D]\subseteq B_{\delta_1}(f(x_0))\cap E$.
>
> 把上面几句话“接”在一起即得证.

证毕.

推论：连续映射的复合是连续的.

由这两个局部性质，可建立一般初等函数的连续性.

/Example/

> 有理函数$f(x)=P(x)/Q(x)$（$P(x)$，$Q(x)$为多项式）在分母零点外连续.

/Proof/

> 1. $\text{Id}_\R$连续（恒同映射连续），可以用$\varepsilon-\delta$语言证明；
>
> 2. $\text{Id}_\R^n=x^n$（$n\in\Z_{\geq0}$）连续（来自$n$个$\text{Id}_\R$之积）；
>
> 3. 多项式$P(x)=\underset{i=0}{\overset{n}{\sum}}a_ix^i$连续（是$n$个单项式之和）；
>
> 4. $P(x)/Q(x)$在分母零点外连续.

证毕.

==从这里我们越来越意识到，之后的定理和内容，都是在把所学过的定理和命题“连接”起来，形成最后的证明，这是一个基本的思路.==

/Example/

> 设$u(x)$连续且为正，$v(x)$连续. 求证$u(x)^{v(x)}$连续.

/Proof/

> 方法1：
>
> > 对于$\forall x_0$，有
> > $$
> > \underset{x\to x_0}{\lim}u(x)^{v(x)}\overset{\text{claim proved in the last class}}{=}(\underset{x\to x_0}{\lim}u(x))^{\underset{x\to x_0}{\lim}v(x)}=u(x_0)^{v(x_0)}
> > $$
>
> 得证.
>
> 方法2：
>
> > $u(x)^{v(x)}=e^{v(x)\ln u(x)}$
> >
> > $u(x)$连续，复合$\ln(\cdot)$ $\Longrightarrow$ $\ln u(x)$连续 $\Longrightarrow$ $v(x)\ln u(x)$连续，之后再复合一次.
>
> 得证.

证毕.

## 连续函数的整体性质

* 介值定理——连通性
* 有界性定理——紧致性
* 最值定理——紧致性

这些性质在100年前左右被提炼出来，形成topology.

为方便证明，对$\R$完备性再给出等价的叙述.

/Theorem/ （区间套原理）

> 设有闭区间下降链：$[a_1,b_1]\supseteq[a_2,b_2]\supseteq\cdots$，且$\underset{n\to\infty}{\lim}(b_n-a_n)=0$，则$\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]$是单点集$\{c\}$，且$c=\underset{n\to\infty}{\lim}a_n=\underset{n\to\infty}{\lim}b_n$.

/Proof/

> 由闭区间下降链的定义，有
> $$
> a_1\leq a_2\leq\cdots\leq a_n\leq b_n\leq\cdots\leq b_2\leq b_1
> $$
> 由MCT就能证明$\underset{n\to\infty}{\lim}a_n$、$\underset{n\to\infty}{\lim}b_n$存在，再由$\underset{n\to\infty}{\lim}(b_n-a_n)=0$，得到两者极限为同一个值$c$.
>
> 验证$\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]=\{c\}$：
>
> 1. 一方面，对于固定的$n$，有$a_n\leq a_m$，$\forall m\geq n$（由$a_n\uparrow$）. 再由极限不等式得到$a_n\leq\underset{n\to\infty}{\lim}a_n=c$；类似地，$b_n\geq\underset{n\to\infty}{\lim}b_n=c$.
>
>    这表明这个无穷交集非空，有$\{c\}\subseteq\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]$.
>
> 2. 另一方面，来证明$\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]$. 考虑$\forall x\in\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]$，满足$a_n\leq x\leq b_n$，$\forall n$，这就表明$c=\underset{n\to\infty}{\lim}a_n\leq x\leq\underset{n\to\infty}{\lim}b_n=c$，也就是$x=c$.
>
>    这表明$\underset{n=1}{\overset{\infty}{\bigcap}}[a_n,b_n]\subseteq\{c\}$.

证毕.

## 介值定理

/Theorem/

> 设$f$在$[a,b]$上连续，且$f(a)f(b)<0$（异号），则$\exist c\in(a,b)$，使得$f(c)=0$.

/Proof/

> 反证法. 设$f$在$(a,b)$上处处非零，不妨设$f(a)<0<f(b)$（另外的情况可以考虑$-f$），从而在闭区间$[a,b]$上，可以得到$[a,\frac{a+b}{2}]$左负右正，或者$[\frac{a+b}{2},b]$左负右正.
>
> 定义闭区间下降链$[a_n,b_n]$满足$f(a_n)<0<f(b_n)$，且$b_n-a_n=(b-a)/2^{n-1}$，令$[a_1,b_1]=[a,b]$.
>
> 下降的规则是：
>
> 1. 若$f(\frac{a_n+b_n}{2})>0$，则令$[a_{n+1},b_{n+1}]=[a_n,\frac{a_n+b_n}{2}]$；
> 2. 若$f(\frac{a_n+b_n}{2})<0$，则令$[a_{n+1},b_{n+1}]=[\frac{a_n+b_n}{2},b_n]$.
>
> 这个区间套最终会形成一个单点集$\{c\}$，$f(c)=f(\underset{n\to\infty}{\lim}a_n)=\underset{n\to\infty}{\lim}f(a_n)<0$，而且$f(c)=f(\underset{n\to\infty}{\lim}b_n)=\underset{n\to\infty}{\lim}f(b_n)>0$，矛盾.
>
> 假设不成立，所以一定存在$c\in(a,b)$使得$f(c)=0$.

证毕.

能不能不使用区间套？考虑一个比较“绕”的证明方法，用到一些比较朴素的思想.

/Proof/

> 反证法. 设$f$处处非零，不妨设$f(a)<0<f(b)$.
>
> 定义$A=\{x\in[a,b]:f(x)<0\}$，由$a\in A$，且$A$有上界$b$，由确界定理得到$A$有上确界$\sup A=M$.
>
> > 在我们朴素的想法中，$M$就是$f(x)$从负到正转变的点.
>
> 由定义，$M\geq a$且$M\leq b$，所以$M\in[a,b]\subseteq f$的定义域.
>
> 来考虑$f(M)$，假设$f(M)\neq0$（这是反证法的要求）.
>
> 由$\underset{x\to a+}{\lim}f(x)=f(a)<0$，知$\exist\delta>0$使得$f$在$[a,a+\delta)$上处处负，所以$[a,a+\delta)\subseteq A$，得到$M=\sup A>a$.
>
> 同理$M=\sup A\leq b-\delta'<b$.
>
> 所以这个“转变点”（临界点）在中间，而不在端点.
>
> 而且$f(M)=\underset{x\to M+}{\lim}f(x)\geq 0$，又有$f(M)\neq 0$得到$f(M)>0$，利用这一点，还有$f$的连续性（使得$\underset{x\to M+}{\lim}f(x)=\underset{x\to M}{\lim}f(x)$），得到$\exist\delta>0$使得$f$在$(M-\delta,M+\delta)$中恒正，表明$M-\delta$也是$A$的上界，出现矛盾.
>
> 假设不成立.

证毕.

/Theorem/ （介值定理——连续函数可取到一切介值）

> 设$f$在$[a,b]$上连续，设$v$介于$f(a)$，$f(b)$之间（介值），则$\exist x\in[a,b]$，使得$f(x)=v$.

/Proof/

> 考虑$g(x)=f(x)-v$，再用前述定理即可.

/Claim/ （Brouwer不动点定理——一维版本）

> 设$f:[0,1]\to[0,1]$连续，则$f$必有不动点.

/Proof/

> 令$g(x)=f(x)-x$连续，因为定义域和值域都是$[0,1]$，一定有
>
> $g(0)=f(0)-0\geq0$，$g(1)=f(1)-1\leq0$.
>
> 所以$0$是$g(0)$，$g(1)$的介值. 由介值定理得到$\exist g(x)=0$ $\Longleftrightarrow$ $\exist f(x)=x$.

上面这个定理是Brouwer在上个世纪20年代发现的，其二维版本是：设$f:D\to D$（$D$为闭圆盘）且连续，则$f$必有不动点.