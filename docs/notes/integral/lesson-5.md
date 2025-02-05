---
title: Lesson 5
createTime: 2024/09/27 09:40:28
permalink: /integral/integral/d6utvw1f/
---
# 高等微积分 Lesson 5

仍然是从极限的计算方法开始讲课.

## 极限计算方法

### 夹逼定理

/Theorem/

> 设$a_n\leq b_n\leq c_n$（$\forall n\geq N_0$），若$\lim a_n=\lim c_n=L$，则可知$\lim b_n$存在且等于$L$.
>
> > /Moreover/
> >
> > 1. 适用于$\{b_n\}$复杂，但有简单上下界的情况.
> > 2. 不需要验证$\{b_n\}$有极限，定理结论保证了这一点.

在wiki上说，东欧语系里面称这个定理为“两个警察与一个醉汉”定理.

/Example/

> 设$a_1,a_2,\cdots,a_k>0$，则证明：
> $$
> \lim(a^n_1+a^n_2+\cdots+a_k^n)^{1/n}=\max\{a_n\}
> $$

/Proof/

> 不妨假设$a_1=\max\{a_n\}$，则
> $$
> a_1<(a^n_1+\cdots+a_k^n)^{1/n}\leq k^{1/n}a_1
> $$
> 由夹逼定理就知道，中间的极限值为$a_1=\max\{a_n\}$.

/Example/

> 条件同上例，但是求证：
> $$
> \lim(a^{-n}_1+a^{-n}_2+\cdots+a_k^{-n})^{-1/n}=\min\{a_n\}
> $$

/Proof/

> 化为倒数，再使用上例结论即可.

------

问：以上几种方法均基于能猜出极限值，若猜不出极限值，如何判断收敛？

/Example/ （Euler）

> $\underset{n\to\infty}{\lim}(1+1/n)^n=?$

这时我们有两种方法：

1. 单调收敛定理 Monotone Convergence Theorem （MCT）

   又称Weierstrass定理.

2. Cauchy收敛准则.

本节课主要目的在于证明上述两个定理并进行应用.

## Weierstrass Theorem

/Theorem/

> 有上界且递增的实数列一定收敛，有下界且递减的实数列一定收敛.

/Proof/

> 设$\{x_n\}$单调递增，且有上界$c$.
>
> 考虑$X=\{x_n/n\in\Z_+\}$（步点的集合），则$X$是有上界的非空实数集.
>
> 由确界定理，$\sup X$存在，记为$M$.
>
> 来证明$\lim x_n=M$：$\forall\varepsilon>0$，$M-\varepsilon$不是$X$上界，则$\exist x_N>M-\varepsilon$，从而$\forall n\geq N$，有$M-\varepsilon<x_N\leq x_n\leq M$.
>
> 于是$|x_n-M|<\varepsilon$，$\forall x\geq N$，表明$\underset{n\to\infty}{\lim}x_n=M$.

证毕.

/Example/

> 上面的Euler给出的例子：$x_n=(1+1/n)^n$，求证收敛.

/Proof/

> 1. 先证明有上界. 做二项式展开：
>    $$
>    \begin{aligned}
>    x_n&=(1+\frac{1}{n})^n=1+C^1_n\frac{1}{n}+C_n^2(\frac{1}{n})^2+\cdots+C_n^n(\frac{1}{n})^n\\\\
>    &=1+\sum_{k=1}^n\frac{n(n-1)\cdots(n-k+1)}{k!n^k}\\\\
>    &<1+\sum_{k=1}^n\frac{1}{k!}\\\\
>    &\leq1+1+\frac{1}{1\times2}+\frac{1}{2\times3}+\cdots+\frac{1}{(n-1)n}\\\\
>    &=3-\frac{1}{n}
>    \end{aligned}
>    $$
>    其中最后几步用到放缩和裂项.
>
> 2. 证明$\{x_n\}$单调. 这也就是证明
>    $$
>    (1+\frac{1}{n})^n\leq(1+\frac{1}{n+1})^{n+1}
>    $$
>    算数-几何平均不等式，假设$x_i\geq0$，有
>    $$
>    \frac{x_1+\cdots+x_n}{n}\geq\sqrt[n]{x_1\cdots x_n}
>    $$
>    当且仅当$x_i$全部相等时取等.
>
>    由此，
>    $$
>    \begin{aligned}
>    \sqrt[n+1]{(1+\frac{1}{n})^n}&=\sqrt[n+1]{(1+\frac{1}{n})\cdots(1+\frac{1}{n})\cdot1}\\\\
>    &\leq\frac{(1+1/n)\cdot n+1}{n+1}\\\\
>    &=1+\frac{1}{n+1}
>    \end{aligned}
>    $$
>    得证.
>
> 由MCT知$\underset{n\to\infty}{\lim}(1+1/n)^n$存在.

证毕.

我们称这个极限值为**Euler的数**，记为$e$，又称为自然对数的底数.

==（注意与Euler常数$\gamma=\underset{n\to\infty}{\lim}(1/1+1/2+\cdots+1/n-\ln n)$区分）==

但是，$e$的定义式收敛的速度非常缓慢，到达十万项仍有较大的误差，所以我们需要找到一个更好的逼近方法.

/Claim/

> 记$y_n=1+1/1!+1/2!+\cdots+1/n!$，则$\underset{n\to\infty}{\lim}y_n=e$.

这个数列收敛速度快得多，十项左右就能得到精确度很高的结果. 接下来我们对这个命题进行证明.

/Proof/

> 1. 先证明$\{y_n\}$有极限. 上面证明过$x_n\leq y_n<3$，又显然有$\{y_n\}$单调递增，由MCT知$\underset{n\to\infty}{\lim}y_n$存在.
>
>    由极限不等式知，$e=\underset{n\to\infty}{\lim}x_n\leq\underset{n\to\infty}{\lim}y_n=Y$.
>
> 2. 来证明$Y\leq e$（从而$Y=e$）. 对于固定$n$，$y_n\leq e$.（$\forall n$）
>
>    为此，注意到$e=\underset{n\to\infty}{\lim}x_n$，用$x_n$近似$e$. 对$\forall m\geq n$有
>    $$
>    \begin{aligned}
>    x_m&=(1+\frac{1}{m})^m=1+\sum_{k=1}^mC_m^k(\frac{1}{m})^k\\\\
>    &\geq1+\sum_{k=1}^nC_m^k(\frac{1}{m})^k\\\\
>    &=1+\sum_{k=1}^{n}\frac{1}{k!}\frac{m(m-1)\cdots(n-k+1)}{mm\cdots m}
>    \end{aligned}
>    $$
>    后面求和的项数为$n$. 做四则运算：
>    $$
>    \begin{aligned}
>    e&=\underset{n\to\infty}{\lim}x_n\\\\
>    &\geq\underset{n\to\infty}{\lim}(1+\sum_{k=1}^{n}\frac{1}{k!}\frac{m(m-1)\cdots(n-k+1)}{mm\cdots m})\\\\
>    &=1+\sum_{k=1}^n\frac{1}{k!}\underset{m\to\infty}{\lim}\frac{m(m-1)\cdots(n-k+1)}{mm\cdots m}\\\\
>    &=1+\sum_{k=1}^n\frac{1}{k!}\cdot1\geq y_n
>    \end{aligned}
>    $$
>    得证.
>
> 这就证明了$\underset{m\to\infty}{\lim}y_n=e$.

证毕.

注记：以后可用Taylor展开直接证明.

/Claim/

> $e\notin\mathbb{Q}$.

/Proof/

> 先建立$e$的估计.
>
> > 引理：
> >
> > 由$m\geq n+1$有$y_m\geq y_{n+1}$，极限不等式$e=\underset{m\to\infty}{\lim} y_m\geq y_m\geq y_{n+1}>y_n$.
> >
> > 有
> > $$
> > \begin{aligned}
> > y_m-y_n&=\frac{1}{(n+1)!}+\cdots+\frac{1}{m!}\\\\
> > &=\frac{1}{(n+1)!}(1+\frac{1}{n+2}+\frac{1}{(n+2)(n+3)}\\\\
> > &\quad\,+\cdots+\frac{1}{(n+2)\cdots m})\\\\
> > &\leq\frac{1}{(n+1)!}(1+\frac{1}{n+2}+\frac{1}{(n+2)(n+3)}\\\\
> > &\quad\,+\cdots+\frac{1}{(m-1)m})\\\\
> > &=\frac{1}{(n+1)!}(1+\frac{2}{n+2}-\frac{1}{m})\\\\
> > &<\frac{1}{(n+1)!}(1+\frac{2}{n+2})\\\\
> > &<\frac{2}{(n+1)!}
> > \end{aligned}
> > $$
> > 取$n\to\infty$极限，$e\leq2/(n+1)!$.
>
> 来证明$e\notin\mathbb{Q}$.
>
> 反证法，假设$e\in \mathbb{Q}$，
>
> 则$e=A/B$（$A,B\in\Z_+$）. 由引理，
> $$
> \begin{aligned}
> &0<e-y_B\leq\frac{2}{(B+1)!}=\frac{2}{B+1}\cdot\frac{1}{B!}<\frac{1}{B!}\\\\
> &e\in(1+1+\frac{1}{2!},1+1+\frac{1}{2!}+\frac{2}{3!}]=(2.5,2.8\dot{3}]
> \end{aligned}
> $$
> 这样可以看出$B\neq1$，$\neq2$，故$B\geq3$.
>
> 上面表明，
> $$
> 0<\frac{A}{B}-(1+\frac{1}{1!}+\cdots+\frac{1}{B!})<\frac{1}{B!}
> $$
> 证明$(0,1)$之间存在一个整数，矛盾.
>
> 故$e\notin\mathbb{Q}$.

证毕.

## Cauchy收敛准则

因为不知道极限$L$，所以只能用$x_n$和$x_{n+1}$来表达收敛.

/Definition/

> 称$\{x_n\}^{\infty}_{n=1}$为一个Cauchy列，如果$\forall\varepsilon>0$，$\exist N\in\Z_+$，$\forall m,n\geq N$，有$|x_m-x_n|<\varepsilon$.

/Theorem/（Cauchy收敛准则/原理）

> $\{x_n\}$收敛 $\Longleftrightarrow$ $\{x_n\}$是Cauchy列.

/Proof/

> 为此，
>
> 1. 先证$\{x_n\}$有界.
>
>    由Cauchy列定义，对$\varepsilon=1$，$\exist N$，$\forall m,n\geq N$有$|x_m-x_n|<1$. 特别取$m=N$，可知$\forall n\geq N$有$|x_n-x_N|<1$，也就是$x_n<x_N+1$，有上界，类似地也可以证明有下界.
>
> 2. 来证$\{x_n\}$收敛. 由1.结论，$\{x_n\}$有上下界，使用确界定理，$\sup\{x_n\}=b_n$，$\inf\{x_n\}=a_n$存在.
>

……没有讲完……