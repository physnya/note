---
title: Lesson 17
createTime: 2024/11/13 22:31:06
permalink: /integral/integral/36p1qkec/
---
# 高等微积分 Lesson 17

## Lagrange 中值定理 Theorem / 微分中值定理

/Theorem/

> 设$f\in C([a,b])$且在$(a,b)$中可导，则$\exist c\in(a,b)$使得$f'(c)=\frac{f(b)-f(a)}{b-a}$.

对上述定理，我们能给出不同角度的解释：

1. 几何含义：$\exist$切线$\parallel$割线（弦）；
2. 物理含义：$\exist$瞬时速度$=$平均速度.

我们经常把上述定理写成这样的形式：$f(b)=f(a)+(b-a)f'(c)$，$\exist c\in(a,b)$. 之前的写法似乎是关心斜率，但是这样的写法是在用导数联系$f(a)$和$f(b)$.

推论：

1. 若$f'$在$I$中处处为零，则$f$在$I$上为常值；
2. 若$f'$在$I$中恒正，则$f$在$I$上严格递增；
3. 若$f'$在$I$中恒负，则$f$在$I$上严格递减.

/Proof/

> $\forall x<y\in I$，有
> $$
> \frac{f(y)-f(x)}{y-x}=f'(\xi)
> $$
> 由$f'(\xi)=0$或者正或者负，就能得到推论.

注记：从$f$严格单调递增且可导，不一定能推导出$f'>0$恒成立. 典型的反例就是$x$的奇数次方在$x=0$处的导数. 这来源于：正数序列的极限可能是零.
所以我们可以总结这两个命题之间的推导关系：
$f$严格单调递增 $\Longrightarrow$ $f'\geq0$，$f'\geq0$ $\Longrightarrow$ $f$不减.

/Example/

> 证明：$\frac{2}{\pi}\leq\frac{\sin x}{x}<1$，$\forall x\in(0,\frac{\pi}{2}]$.

/Proof/

> $$
> f'(x)=\frac{\cos x}{x^2}(x-\tan x)<0
> $$
>
> 可知严格单调递减，所以直接小于在$\pi/2$处的值.
>
> 上界的证明之前已经做过.

之后讲一些比较常用的命题（不等式）：

/Claim/

> $$
> \begin{aligned}
> &\frac{1}{x+1}<\ln(x+1)-\ln x<\frac{1}{x}\,,\quad\forall x>0\\\\
> &\frac{x}{1+x}<\ln(1+x)<x\,,\quad\forall x>0\\\\
> &e^{\frac{x}{1+x}}<1+x<e^x\,,\quad\forall x>0
> \end{aligned}
> $$

/Proof/

> 其实这也是一种记忆的方法，就是使用 Lagrange 中值定理. 以第 1 条为例：
>
> 令$f(x)=\ln x$，则
> $$
> \frac{f(x+1)-f(x)}{x+1-x}=f'(\xi)=\frac{1}{\xi}\in(\frac{1}{x+1},\frac{1}{x})
> $$
> 就直接得到结论.

上面命题的最后一条，在处理无穷乘积 / 有限积的时候会用到（$\prod_i(1+x_i)<\prod_ie^{x_i}=e^{\sum_ix_i}$）.

上述第 2 条的另外一个 version ：
$$
\ln(1+x)<x\Longrightarrow(1+x)^{1/x}<e\Longrightarrow(1+\frac{1}{t})^t<e
$$
这里就牵扯到 Euler 与调和级数，看下面的命题：

/Claim/ （调和级数的估计）

> Euler 证明下述极限存在，为 Euler 常数$\gamma$：
> $$
> \underset{n\to\infty}{\lim}(\frac{1}{1}+\frac{1}{2}+\cdots+\frac{1}{n}-\ln n)=\gamma
> $$

/Proof/

> 定义数列$a_n=1/1+1/2+\cdots+1/n-\ln n$，证明单调性：
> $$
> \begin{aligned}
> a_{n+1}-a_n&=\frac{1}{n+1}-\ln\frac{n+1}{n}<0
> \end{aligned}
> $$
> （由上面命题中的第 1 条）
>
> 可见$a_n$单调递减，现在需要证明存在下界：
> $$
> a_n=\sum_{k=1}^n\frac{1}{k}-\ln n>\sum_{k=1}^n\ln\frac{k+1}{k}-\ln n=\ln(n+1)-\ln n>0
> $$
> 下界存在. 由 MCT 得到存在极限.

一般可以用调和级数估计$n$比较大的$\ln n$值，因为$\gamma\approx0.577215$.

/Example/ （Bernoulli 不等式）

> 设$x>-1$，则
>
> 1. 若$\alpha\geq1$或者$\alpha\leq0$，则有$(1+x)^\alpha\geq1+\alpha x$；
> 2. 若$0\leq\alpha\leq1$，则$(1+x)^\alpha\leq1+\alpha x$.

/Proof/

> $f(x)=(1+x)^\alpha$早$x=0$和$x>-1$处使用 Lagrange 中值定理，
> $$
> \frac{f(x)-f(0)}{x-0}=f'(\xi)=\alpha(1+\xi)^{\alpha-1}
> $$
> $\exist\xi$介于$0$和$x$之间.
>
> 然后讨论$\alpha$与$1$之间的大小关系.

当然 Taylor 展开可以高速解决这一问题.

接下来讲两个很强的不等式：Newton 不等式和 McLaurin 不等式.

对非负实数$a_1$，$a_2$，$\cdots$，$a_n$，可以写出所谓的初等对称多项式$\sigma_1$，$\sigma_2$，$\cdots$，$\sigma_n$，其中
$$
\sigma_k=\sum_{1\leq i_1<\cdots<i_k\leq n}a_{i_1}\cdots a_{i_k}
$$
从简单的开始，$\sigma_1=\sum_{i=1}^na_i$（共$C_n^1$项之和），$\sigma_2=\sum_{i<j}a_ia_j$（共$C_n^2$项之和），$\cdots$，$\sigma_n=a_1a_2\cdots a_n$.

Newton 不等式就是：
$$
(\frac{\sigma_k}{C_n^k})^2\geq\frac{\sigma_{k-1}}{C_{n}^{k-1}}\frac{\sigma_{k+1}}{C_n^{k+1}}
$$
McLaurin 不等式是：
$$
\sqrt[1]{\frac{\sigma_1}{C_n^1}}\geq\sqrt[2]{\frac{\sigma_2}{C_n^2}}\geq\cdots\geq\sqrt[n]{\frac{\sigma_n}{C_n^n}}
$$
这两个定理均不好证明. 为了证明，我们写下下面的引理.

/Theorem/

> 设$a_1\sim a_n\in[m,M]$，则$\exist b_1\sim b_{n-1}\in[m,M]$，使得：若记$b_i$的初等对称多项式为$\tilde\sigma_1\sim\tilde\sigma_{n-1}$，有
> $$
> \frac{\tilde\sigma_1}{C_{n-1}^1}=\frac{\sigma_1}{C_n^1}\,,\quad\frac{\tilde\sigma_2}{C_{n-1}^2}=\frac{\sigma_2}{C_n^2}\,,\quad\cdots\,,\quad\frac{\tilde\sigma_{n-1}}{C_{n-1}^{n-1}}=\frac{\sigma_{n-1}}{C_n^{n-1}}
> $$

得到上述引理之后，两个不等式就能容易地证明，以 McLaurin 公式为例：

/Proof/

> 对$n$归纳，$n=1$是 trivial 的，$n=2$时直接使用均值定理证毕. 假设 $n-1$版本已经证明，考虑$n$版本，由引理及$a_1\sim a_n\in[0,M=\max a_i]$，可知$\exist b_1\sim b_{n-1}$使得
> $$
> \begin{aligned}
> \sqrt[1]{\tilde\sigma_1/C_{n-1}^1}&\geq\sqrt[2]{\tilde\sigma_2/C_{n-1}^2}\geq\cdots\geq\sqrt[n-1]{\tilde\sigma_{n-1}/C_{n-1}^{n-1}}\\\\
> \sqrt[1]{\sigma_1/C_n^1}&\geq\sqrt[2]{\sigma_2/C_n^2}\geq\cdots\geq\sqrt[n-1]{\sigma_{n-1}/C_n^{n-1}}
> \end{aligned}
> $$
> 最后：
> $$
> \sqrt[n-1]{\sigma_{n-1}/C_n^{n-1}}\geq\sqrt[n-1]{\sqrt[n]{\text{product}}}=\sqrt[n]{a_1a_2\cdots a_n}
> $$
> 这里用到均值不等式.

证毕.

接下来证明引理：

/Proof/ （引理证明）

> 设$\{a_i\}$按值从小到大排列为$c_1<c_2<\cdots<c_k$，其中$c_i$在$a_1\sim a_n$中出现的次数为$\alpha_i$次，则$\sum_{i=1}^k\alpha_i=n$.
>
> 考虑$P(x)=(x-a_1)(x-a_2)\cdots(x-a_n)$，在$[c_i,c_{i+1}]$中间使用 Rolle 定理知$\exist d_i\in(c_i,c_{i+1})$，使得$P'(d_i)=0$，这就相当于为$P'(x)$找出了$k-1$个零点，其中$d_1<d_2<\cdots<d_{k-1}$.
>
> 注意$c_i$是$P'(x)$的$\alpha_i-1$重根，$\forall 1\leq i\leq k$.
>
> 事实：若$a$是$P(x)$的$\alpha$重根，则$a$是$P'(x)$的$\alpha-1$重根（$\alpha\geq1$）.
>
> 验证是直接的，由定义就知道$P(x)=(x-a)^\alpha Q(x)$，$Q(a)\neq0$，求导得到：
> $$
> P'(x)=\alpha(x-a)^{\alpha-1}(\alpha Q(x)+(x-a)Q'(x))
> $$
> 得到验证.
>
> 所以$P'(x)$的重根数总和最小值：$(\alpha_1-1)+\cdots+(\alpha_k-1)+(k-1)=n-1$.
>
> 但是$\text{deg}P'(x)=n-1$，它的重根数之和为$n-1$，表明$c_i$和$d_i$全体恰为$P'(x)$的根，这些根$\in[m,M]$.
>
> 记$\{b_1,\cdots,b_{n-1}\}=\{\alpha_i-1$个$c_i(1\leq i\leq k)\}\cup\{d_1,\cdots,d_{n-1}\}$.
>
> $\Longrightarrow$ $P'(x)=n(x-b_1)(x-b_2)\cdots(x-b_{n-1})=n(x^{n-1}-\tilde\sigma_1x^{n-2}+\cdots)$，其中这里系数$n$来源于我们求导的时候最高次项出现的系数，对比$P(x)$，能够得到：
> $$
> \begin{aligned}
> n\tilde\sigma_1&=(n-1)\sigma_1\\\\
> n\tilde\sigma_2&=(n-2)\sigma_2\\\\
> \cdots
> \end{aligned}
> $$
> 证毕.

之后我们通过一种物理的观点来看待要讲的 Cauchy 中值定理：假设两套不同的时空（$x$时空和$t$时空），其间的时空变换法则称为$t=g(x)$. 显然反函数存在，记$h(t)=f(g^{-1}(t))$，对$h$使用 Lagrange 中值，得到
$$
\frac{h(B)-h(A)}{B-A}=h'(\eta)=f'(g^{-1}(\eta))(g^{-1})'(\eta)=f'(g^{-1}(\eta))
$$
即有
$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}
$$
（记$\xi=g^{-1}(\eta)$）

::: tip -

如果你有一个同学天天换手表，那么你就可能成为 Cauchy.
——艾神

:::

/Theorem/ （Cauchy 中值定理）

> 设$f$，$g$在$[a,b]$上连续，在$(a,b)$上可导，且$g'$在$(a,b)$处处非零，则$\exist\xi\in(a,b)$，使得
> $$
> \frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}
> $$

/Proof/

> 这节课只讲了证法 1.
>
> 由$g'$处处非零，可知$g$在$[a,b]$上是单射（否则$\exist g(x)=g(y)$，由 Rolle 定理会得到$\exist g'(z)=0$，产生矛盾）.
>
> 这样$g$在$[a,b]$上是连续单射，所以$g$存在反函数$g^{-1}$. 考虑$h(t)=f(g^{-1}(t))$，对$h$在$A$，$B$处使用 Lagrange 中值，就得到结果（上面已经证明）.

