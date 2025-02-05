---
title: Lesson 18
createTime: 2024/11/15 12:17:08
permalink: /integral/integral/8o5d6t4b/
---
# 高等微积分 Lesson 18

## Cauchy 中值

/Theorem/

> 设$f$，$g\in C([a,b])$，在$(a,b)$中可导，且$g'$在$(a,b)$上处处非零，则$\exist\xi\in(a,b)$，使得
> $$
> \frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}
> $$

/Proof/

> 上节课已经讲了证法 1：
>
> 对$h=f\circ g^{-1}$使用 Lagrange 中值定理.
>
> 实际上还有一种证法，更加偏向数学角度.
>
> 证法 2：
>
> 要证明的式子等价于
> $$
> (f(b)-f(a))g'(\xi)-f'(\xi)(g(b)-g(a))=0
> $$
> 考虑构造一个一元函数实现上面的式子. 想到令$H(x)$为
> $$
> H(x)=(f(b)-f(a))(g(x)-g(a))-(f(x)-f(a))(g(b)-g(a))
> $$
> 容易注意到$H(a)=H(b)=0$. 这里使用 Rolle 定理，得到$\exist\xi\in(a,b)$使得$H'(\xi)=0$.

证毕.

Cauchy 中值定理比 Lagrange 中值定理要更加泛用一些，只需取$g(x)=x$就能回到 Lagrange 中值定理.

## $\text{L'H}\hat{\text{o}}\text{pital}$ 法则

终于讲到同学们期待已久的 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则.

$\text{L'H}\hat{\text{o}}\text{pital}$ 法则有两种类型，分别是$\frac{0}{0}$型和$\frac{*}{\infty}$型.

1. $\frac{0}{0}$型：考虑$\underset{x\to a+}{\lim}\frac{f(x)}{g(x)}$，称之为$\frac{0}{0}$型，若$\underset{x\to a+}{\lim}f(x)=\underset{x\to a+}{\lim}g(x)=0$（else 情形是$\underset{x\to a+}{\lim}f(x)=A$，$\underset{x\to a+}{\lim}g(x)=B$，若$B\neq0$，则极限为$A/B$；若$B=0$且$A\neq0$，则极限不存在，只剩下$\frac{0}{0}$型待求.）

/Theorem/ （$\frac{0}{0}$型 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则）

> 设$\underset{x\to a+}{\lim}f=\underset{x\to a+}{\lim}g=0$，$f$，$g$在$(a,a+r)$中处处可导且$g'$处处非零，若$\underset{x\to a+}{\lim}\frac{f'}{g'}$存在，则
> $$
> \underset{x\to a+}{\lim}\frac{f(x)}{g(x)}=\underset{x\to a+}{\lim}\frac{f'(x)}{g'(x)}
> $$

/Proof/

> 使用 Cauchy 中值定理. 首先我们发现在$x=a$处函数只有极限而没有确定的定义，所以需要先扩充函数定义域，得到可以使用 Cauchy 中值的闭区间.
>
> 定义$\tilde f$和$\tilde g$为
> $$
> \tilde f=\left\{\begin{array}{lr}
> f(x)\,,\quad\forall x>a\\\\
> \underset{x\to a+}{\lim}f(x)=0\,,\quad x=a
> \end{array}\right.\,,\quad\tilde g=\left\{\begin{array}{lr}
> g(x)\,,\quad\forall x>a\\\\
> \underset{x\to a+}{\lim}g(x)=0\,,\quad x=a
> \end{array}\right.
> $$
> 则$\tilde f$和$\tilde g\in C([a,a+\frac{r}{2}])$，且在$(a,a+\frac{r}{2})$中可导，$(\tilde g)'$在$(a,a+\frac{r}{2})$中处处非零.
>
> $\forall x\in(a,a+\frac{r}{2})$，由 Cauchy 中值定理，知道$\exist\xi_x\in(a,x)$使得
> $$
> \frac{f(x)}{g(x)}=\frac{\tilde f(x)-\tilde f(a)}{\tilde g(x)-\tilde g(a)}=\frac{\tilde f'(\xi_x)}{\tilde g'(\xi_x)}=\frac{f'(\xi_x)}{g'(\xi_x)}
> $$
> 当$x\to a+$时，$\xi_x\to a+$.
>
> 设$\underset{x\to a+}{\lim}\frac{f'(x)}{g'(x)}=L$，$\forall\varepsilon>0$，$\exist\delta>0$，$\forall a<y<a+\delta$，有
> $$
> |\frac{f'(y)}{g'(y)}-L|<\varepsilon
> $$
> 从而$\forall0<x-a<\min(\frac{r}{2},\delta)\overset{\text{marked as}}{=}\delta_0$，有
> $$
> |\frac{f(x)}{g(x)}-L|=|\frac{f'(\xi_x)}{g'(\xi_x)}-L|<\varepsilon
> $$
> （由于$0<\xi_x-a<x-a<\delta_0\leq\delta$）表明：
> $$
> \underset{x\to a+}{\lim}\frac{f(x)}{g(x)}=L
> $$

证毕.

注记：使用时，

1. 要验证$\frac{0}{0}$条件（否则可能等式不成立）；
2. 验证$\underset{x\to a+}{\lim}\frac{f'}{g'}$存在，才可以写等式；
3. 书写时，可能连续使用法则，但是最后必须得到某一个确定值$L$才可以断言最开始的极限是$L$.
   若$\underset{x\to a+}{\lim}\frac{f'}{g'}$不存在，不可断言原极限不存在！

/Example/

> 我们之前证明导函数不一定连续的例子，
> $$
> f(x)=\left\{\begin{array}{lr}
> x^2\sin\frac{1}{x}\,,\quad\forall x\neq0\\\\
> 0\,,\quad x=0
> \end{array}\right.
> $$
> 取$g(x)=x$，这时使用法则会得到：
> $$
> \underset{x\to0}{\lim}\frac{f(x)}{g(x)}\overset{\text{L'H}\hat{\text{o}}\text{pital}}{=}\underset{x\to0}{\lim}\frac{f'(x)}{g'(x)}=\underset{x\to0}{\lim}(2x\sin\frac{1}{x}+x^2\cos\frac{1}{x}(-x^{-2}))
> $$
> 不存在极限.
>
> 但是实际上原来的极限直接等于$f'(0)=0$.

一些简单的 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则应用：

/Example/ （幂平均）

> 设$a_1,\cdots,a_n>0$，$x$次幂平均是：
> $$
> G_x(a_1,\cdots,a_n)=(\frac{a_1^x+\cdots+a_n^x}{n})^{1/x}
> $$
> 这其中可以读出一些平均值，如算术平均
> $$
> G_1=\frac{a_1+\cdots+a_n}{n}
> $$
> 调和平均
> $$
> G_{-1}=\frac{n}{\frac{1}{a_1}+\cdots+\frac{1}{a_n}}
> $$
> 平方平均
> $$
> G_2=\sqrt{\frac{a_1^2+\cdots+a_n^2}{n}}
> $$
> 在我们学完 Jensen 不等式之后就会证明所谓的幂平均不等式：$G_x(a_1,\cdots,a_n)$关于$x$单调递增.
>
> > 有同学会有疑问，为什么这里没有几何平均？
>
> 在习题课中，我们证明过，
> $$
> \underset{x\to0}{\lim}G_x(a_1,\cdots,a_n)=\sqrt[n]{a_1\cdots a_n}
> $$
> 这就是几何平均. 当时我们使用的处理方式是，借用 Euler 的结果
> $$
> \begin{aligned}
> \underset{x\to0}{\lim}[(1+\frac{\sum_{i=1}^{n}(a_i^x-1)}{n})^{\frac{n}{\sum_{i=1}^{n}(a_i^x-1)}}]^{\frac{\sum_{i=1}^{n}(a_i^x-1)}{nx}}&=\underset{x\to0}{\lim}e^{\frac{1}{n}\sum\ln a_i}\\\\
> &=\sqrt[n]{a_1\cdots a_n}
> \end{aligned}
> $$
> 其中第一步用到这样的结论：
> $$
> \begin{aligned}
> \underset{x\to0}{\lim}\frac{\sum_{i=1}^{n}(a_i^x-1)}{nx}&=\frac{1}{n}\sum_{i=1}^n\frac{a_i^x-a_i^0}{x}\\\\
> &=\frac{1}{n}\sum_{i=1}^n(a_i^x)'|_{x=0}\\\\
> &=\frac{1}{n}\sum_{i=1}^n\ln a_i
> \end{aligned}
> $$
> 这里有一个不严谨的地方：我不能确定 Euler 的极限在这里是否能够使用.
>
> 好在作业中有给出过这样的命题：
>
> /Claim/
>
> > 设$\underset{x\to a}{\lim}f(x)=0$，$\underset{x\to a}{\lim}f(x)g(x)=K\in\R$，则$\underset{x\to a}{\lim}(g(x)\ln(1+f(x)))=K$，也就是$\underset{x\to a}{\lim}(1+f(x))^{g(x)}=e^K$.
>
> /Proof/
>
> > 令$q(y)$为
> > $$
> > q(y)=\left\{\begin{array}{lr}
> > \frac{\ln(1+y)}{y}\,,\quad\forall y\neq0\,,y>-1\\\\
> > \underset{y\to0}{\lim}\frac{\ln(1+y)}{y}=1\,,\quad y=0
> > \end{array}\right.
> > $$
> > 复合极限定理的修正 II 成立，$\underset{x\to a}{\lim}q(f(x))=1$. 使用极限的四则运算法则，得到$\underset{x\to a}{\lim}(f(x)g(x))q(f(x))=K\cdot1=K$.
> >
> > 注意：定义$q$使得$f(x)$的零点被友善地包含在了定义中.
>
> 上面所有的证明全部可以被称为“证法 1”，是我们在没有学 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则之前所做的证明. 但是当我们学过 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则之后，这个证明将是平凡的.
>
> 考虑所谓的“不等权幂平均”：
> $$
> \underset{x\to0}{\lim}(\beta_1a_1^x+\cdots+\beta_na_n^x)^{1/x}
> $$
> 其中$\beta_i\geq0$，$\beta_1+\cdots+\beta_n=1$.
>
> 先考虑取对数之后的极限，之后再还原.
> $$
> \underset{x\to0}{\lim}\frac{\ln(\beta_1a_1^x+\cdots+\beta_na_n^x)}{x}
> $$
> 刚好是$\frac{0}{0}$型，由法则，得到
> $$
> \begin{aligned}
> &=\underset{x\to0}{\lim}\frac{\frac{\beta_1a_1^x\ln a_1+\cdots+\beta_na_n^x\ln a_n}{\beta_1a_1^x+\cdots+\beta_na_n^x}}{1}\\\\
> &=\underset{x\to0}{\lim}(\beta_1a_1^x\ln a_1+\cdots+\beta_na_n^x\ln a_n)\\\\
> &=\beta_1\ln a_1+\cdots+\beta_n\ln a_n
> \end{aligned}
> $$
> 所以还原为对数之前的极限是
> $$
> L=a_1^{\beta_1}\cdots a_n^{\beta_n}
> $$
> 当然，取$\beta_i=1/n$，就得到几何平均.

注记：$\text{L'H}\hat{\text{o}}\text{pital}$ 法则有各个版本，比如$\underset{x\to a-}{\lim}$，$\underset{x\to a}{\lim}$，等等.

问题：有没有$\underset{x\to\infty}{\lim}$的版本？

> 有一种方法是换元$t=1/x$，这样就回到$t\to0$的结果.
>
> 但是我们如果想要一个严格证明，就要这样来做：
>
> 由$\underset{x\to+\infty}{\lim}\frac{f'}{g'}=L$，知道$\forall\varepsilon>0$，$\exist M$，使得$\forall y>M$有$|\frac{f'(y)}{g'(y)}-L|<\varepsilon$. 这个事实记为$(*)$.
>
> $\forall x>M$，$\forall K>x$，由 Cauchy 中值定理，
> $$
> \frac{f(x)-f(K)}{g(x)-g(K)}=\frac{f'(\xi_x)}{g'(\xi_x)}
> $$
> 注意到$\xi_x>x>M$，由$(*)$得到
> $$
> |\frac{f(x)-f(K)}{g(x)-g(K)}-L|<\varepsilon
> $$
> 对$K\to+\infty$的极限，会得到
> $$
> \underset{K\to+\infty}{\lim}|\frac{f(x)-f(K)}{g(x)-g(K)}-L|\leq\varepsilon\Longrightarrow|\frac{f(x)}{g(x)}-L|\leq\varepsilon
> $$
> 证明完毕.

2. $\frac{*}{\infty}$型 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则：要求$\underset{x\to a+}{\lim}|g(x)|=+\infty$.

/Theorem/ （$\frac{*}{\infty}$型 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则）

> 设$\underset{x\to a+}{\lim}|g(x)|=+\infty$，$f$，$g$在$(a,a+r)$中可导且$g'$处处非零. 若$\underset{x\to a+}{\lim}\frac{f'}{g'}$存在，则
> $$
> \underset{x\to a+}{\lim}\frac{f(x)}{g(x)}=\underset{x\to a+}{\lim}\frac{f'(x)}{g'(x)}
> $$

证明稍显复杂，因为 Cauchy 中值需要用到一个闭区间，但是这里$g$没有办法连续延拓到$a$点.

/Proof/

> 先将 Cauchy 中值定理化为我们能够顺利使用的形式，其中取一个$c>a$.
> $$
> \begin{aligned}
> &\Longrightarrow\frac{f(x)-f(c)}{g(x)-g(c)}=\frac{f'(\xi_x)}{g'(\xi_x)}\\\\
> &\Longrightarrow f(x)=(g(x)-g(c))\frac{f'(\xi_x)}{g'(\xi_x)}+f(c)\\\\
> &\Longrightarrow\frac{f(x)}{g(x)}=(1-\frac{g(c)}{g(x)})\frac{f'(\xi_x)}{g'(\xi_x)}+\frac{f(c)}{g(x)}
> \end{aligned}
> $$
> 接下来开始证明. 设$\underset{x\to a+}{\lim}\frac{f'}{g'}=L$，知道$\forall\varepsilon>0$，$\exist\delta>0$，使得$\forall0<y-a<\delta$有$|\frac{f'(y)}{g'(y)}-L|<\varepsilon$，<s>对任何$a<x<a+\delta$，选定$c\in(x,a+\delta)$，对$[x,c]$使用 Cauchy 中值</s>（但是实际上我们应当先选定$a<c<a+\delta$，再确定$\forall a<x<c$），得到：
> $$
> \begin{aligned}
> \frac{f(x)}{g(x)}&=(1-\frac{g(c)}{g(x)})\frac{f'(\xi_x)}{g'(\xi_x)}+\frac{f(c)}{g(x)}\\\\
> \frac{f(x)}{g(x)}-L&=(1-\frac{g(c)}{g(x)})(\frac{f'(\xi_x)}{g'(\xi_x)}-L)-\frac{g(c)}{g(x)}L+\frac{f(c)}{g(x)}
> \end{aligned}
> $$
> （记上式为$(**)$）注意到$\underset{x\to a+}{\lim}(1-\frac{g(c)}{g(x)})=1$，$\underset{x\to a+}{\lim}(-\frac{g(c)}{g(x)}L+\frac{f(c)}{g(x)})=0$，知道$\exist\delta_1>0$，$\forall0<x-a<\delta_1$有：
> $$
> 1-\varepsilon<1-\frac{g(c)}{g(x)}<1+\varepsilon\,,\quad|-\frac{g(c)}{g(x)}L+\frac{f(c)}{g(x)}|<\varepsilon
> $$
> 结合$\forall0<x-a<\min(\delta_1,c-a)$，代回$(**)$得到
> $$
> |\frac{f(x)}{g(x)}-L|\leq(1+\varepsilon)\varepsilon+\varepsilon<3\varepsilon
> $$
> 这表明
> $$
> \lim_{x\to a+}\frac{f(x)}{g(x)}=L
> $$

证毕.

在讲这种类型的 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则的应用之前，先讲一点注记：很多中文教材里面将这种类型的 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则叙述为$\frac{\infty}{\infty}$型，这会使适用范围大大变窄，因为在限制分母的同时还限制了分子.

/Example/ （$\frac{*}{\infty}$的好处）

> 设$\underset{x\to+\infty}{\lim}f'(x)=L$，求$\underset{x\to+\infty}{\lim}\frac{f(x)}{x}$.
>
> 显然可以用我们学过的 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则. 但是如果只学过$\frac{\infty}{\infty}$型的法则该如何证明？
>
> 当$L\neq0$，由极限定义知道$\forall\varepsilon=L/2$，$\exist M$，使得$\forall y\geq M$有$|f'(y)-L|<L/2$（不妨设$L>0$，$<0$反之），所以$f'(y)>L/2$，这样对$\forall x>M$使用 Lagrange 中值定理，得到
> $$
> f(x)-f(M)=(x-M)f'(\xi)>\frac{L}{2}(x-M)
> $$
> 可得$\underset{x\to+\infty}{\lim}f(x)=+\infty$.
>
> 当$L=0$，会变得相当复杂.

这就说明我们这种叙述的好处.

/Example/

> 这些是常用的事实，证明很简单，略.
> $$
> \begin{aligned}
> \underset{x\to+\infty}{\lim}\frac{x^\alpha}{q^x}&=0\\\\
> \underset{x\to+\infty}{\lim}\frac{\ln x}{x^\varepsilon}&=0\,,\quad\forall\varepsilon>0\\\\
> \underset{x\to0+}{\lim}(\ln x)x^\varepsilon&=0\,,\quad\forall\varepsilon>0
> \end{aligned}
> $$

## Taylor 公式

回忆：$f$可微指的是每点附近$f$可以近似为一次函数. 自然地发问：$f$能否（更精确）近似为多项式？

回答就是 Taylor 公式.

/Definition/

> 称$f(x)$在$x_0$附近可以近似为多项式$P(x)=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n$，如果$f(x)=P(x)+\alpha(x)$且
> $$
> \lim_{x\to x_0}\frac{\alpha(x)}{(x-x_0)^n}=0
> $$
> （误差项比$(x-x_0)^n$项是更高阶的无穷小）
>
> 对于物理背景的同学们来说，这就是$f(x)-P(x)=o((x-x_0)^n)$.

问：候选的$P(x)$是什么？

/Claim/

> 若$f$在$x_0$处近似为$P(x)=\underset{i=0}{\overset{n}{\sum}}a_i(x-x_0)^i$，则$a_0\sim a_n$由$f$唯一地确定（$f$在$x_0$处的多项式近似至多唯一）.

/Proof/

> 设$f(x)=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+\alpha(x)$，且$\underset{x\to x_0}{\lim}\frac{\alpha(x)}{(x-x_0)^n}=0$，则
> $$
> \begin{aligned}
> &\lim_{x\to x_0}f(x)=\lim_{x\to x_0}(\text{RHS})=a_0+\lim_{x\to x_0}\frac{\alpha(x)}{(x-x_0)^n}(x-x_0)^n=a_0\\\\
> &\lim_{x\to x_0}\frac{f(x)-a_0}{x-x_0}=a_1\\\\
> &\lim_{x\to x_0}\frac{f(x)-a_0-a_1(x-x_0)}{(x-x_0)^2}=a_2\\\\
> &\cdots
> \end{aligned}
> $$

证毕.