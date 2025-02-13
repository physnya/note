---
title: Lesson 20
createTime: 2024/11/22 12:16:34
permalink: /integral/integral/o2owinhc/
---
# 高等微积分 Lesson 20

## 带 Peano 余项 Taylor 公式

设$f(x)$在$x_0$处有$n$阶导数，则$f$在$x_0$附近可近似为$n$次多项式，
$$
f(x)=f(x_0)+\frac{f^{(1)}}{1!}(x-x_0)+\cdots+\frac{f^{(n)}}{n!}(x-x_0)^n+o((x-x_0)^n)\text{ as }x\to x_0
$$
问：如何判断$f$有高阶导数？

> 一般而言没有普适的方法，我们在这里会常用归纳法.

/Example/ （习题课中的一个例子）

> $$
> f(x)=\left\{\begin{array}{lr}
> e^{-\frac{1}{x^2}}\,,\quad x>0\\
> 0\,,\quad x\leq0
> \end{array}\right.
> $$
>
> 则：1. $f$在$\R$上有$n$阶导（$\forall n\in\Z_+$）；2. $f^{(n)}(0)=0$，$\forall n\geq1$.

/Proof/

> $f$在$\R_-$上恒为$0$ $\Longrightarrow$ $f^{(n)}$在$\R_-$上恒为$0$.
>
> 在$\R_+$上，$f(x)=e^{-\frac{1}{x^2}}=e^{-x^{-2}}$，得到：
> $$
> \begin{aligned}
> f(x)&=e^{-x^{-2}}\\
> f'(x)&=e^{-x^{-2}}((-1)(-2)x^{-3})=e^{-x^{-2}}(2x^{-3})\\
> f''(x)&=e^{-x^{-2}}(+4)x^{-6}+e^{-x^{-2}}(2(-3))x^{-4}=e^{-x^{-2}}(\cdots)
> \end{aligned}
> $$
> 发现如下规律：
>
> /Claim/
>
> > $\exist$多项式$P_n(y)$，使得在$\R_+$上有
> > $$
> > f^{(n)}(x)=e^{-\frac{1}{x^2}}P_n(\frac{1}{x})
> > $$
>
> /Proof/
>
> > 设已经有前面$n$阶结论成立，下证$n+1$阶结论也成立（归纳）.
> > $$
> > \begin{aligned}
> > f^{(n+1)}(x)&=e^{-x^{-2}}(2x^{-3})P_n(\frac{1}{x})+e^{-x^{-2}}P'_n(\frac{1}{x})(-x^{-2})\\
> > &=e^{-x^{-2}}(2x^{-3}P_n(\frac{1}{x})-x^{-2}P_n'(\frac{1}{x}))\\
> > &=e^{-x^{-2}}P_{n+1}(\frac{1}{x})
> > \end{aligned}
> > $$
> > 得证.
>
> 证毕.
>
> 特别地，要证明在$x=0$处的各阶导数存在，仍然使用归纳证明：
>
> /Proof/
>
> > 对于$1$阶导数，$f'(0-)=0$，
> > $$
> > \begin{aligned}
> > f'(0+)&=\lim_{x\to0+}\frac{f(x)}{x}=\lim_{x\to0+}\frac{e^{-x^{-2}}}{x}\\\\
> > &\overset{x=1/y}{=}\lim_{y\to+\infty}\frac{y}{e^{y^2}}=0
> > \end{aligned}
> > $$
> > 得到$f'(0)=0$.
> >
> > 设已经证明$f^{(m)}(0)=0$，则$f^{(m+1)}(0-)=0$，
> > $$
> > \begin{aligned}
> > f^{(m+1)}(0+)&=\lim_{x\to0+}\frac{e^{-x^{-2}}P_m(\frac{1}{x})}{x}\\\\
> > &=\lim_{y\to+\infty}\frac{yP_m(y)(\text{polynomial})}{e^{y^2}(\text{exponential})}=0
> > \end{aligned}
> > $$
> > 得到$f^{(m+1)}(0)=0$. 得证.
>
> 证毕.

证毕.

上面结论的应用在于表明，有时 Taylor 公式的多项式部分完全不含有信息，只在$o(x^n)$中含有原来函数的信息.

在上次课的最后讲到复合函数的 Taylor 公式，总结为下面的定理：

/Theorem/

> 设$f$，$g$在$0$处有$n$阶导数（如果不是在$0$处，平移坐标即可），设在$0$处 Taylor 公式分别为：
> $$
> \begin{aligned}
> f(x)&=a_1x^1+\cdots+a_nx^n+o(x^n)\\\\
> g(x)&=b_0+b_1y+\cdots+b_ny^n+o(y^n)
> \end{aligned}
> $$
> 注意$f(x)$能够通过移动坐标的方式去掉常数项.
>
> 则$g(f(x))$的 Taylor 公式为
> $$
> \begin{aligned}
> g(f(x))&=b_0+\sum_{k=1}^nb_k(a_1x+\cdots+a_nx^n)^k+o(x^n)\text{ as }x\to0\\
> &\longrightarrow\text{delete those }x^{\geq n+1}
> \end{aligned}
> $$

/Proof/

> RHS 中，$x^m$（$m>1$）的系数为
> $$
> \sum_{k=1}^nb_k\sum_{\underset{i_1+\cdots+i_k=m}{(i_1,\cdots,i_k)}}a_{i_1}\cdot a_{i_2}\cdot\cdots\cdot a_{i_k}
> $$
> 回忆，有
> $$
> a_{i_k}=\frac{f^{(i_k)}(0)}{i_k}\,,\quad b_k=\frac{g^{(k)}(0)}{k!}
> $$
> 所以上面的系数是
> $$
> \sum_{k=1}^n\frac{1}{k!}g^{(k)}(0)\sum_{\underset{i_1+\cdots+i_k=m}{(i_1,\cdots,i_k)}}\frac{f^{(i_k)}(0)g^{(k)}(0)}{i_k!k!}\overset{\text{marked as}}{=}R
> $$
> 现在要验证，是否有
> $$
> R=\frac{(g\circ f)^{(m)}(0)}{m!}
> $$
> 用到我们之前在 [Lesson 16](/integral/integral/agjiig9l/) 中讲到过的高阶导数的链式法则，能够证明相等.

证毕.

/Example/

> $f(x)=\arctan x$，在$0$附近的 Taylor 公式.

/Solution/

> 先补充一个结论：$g(y)=(1+y)^\alpha$在$y=0$附近的 Taylor 公式，为
> $$
> \begin{aligned}
> g^{(1)}(y)&=\alpha(1+y)^{\alpha-1}\\\\
> g^{(2)}(y)&=\alpha(\alpha-1)(1+y)^{\alpha-2}\\\\
> \cdots&\\\\
> \Longrightarrow g^{(k)}(y)&=\alpha(\alpha-1)\cdots(\alpha-k+1)(1+y)^{\alpha-k}\\\\
> \Longrightarrow g(y)&=\sum_{k=0}^n\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}x^k+o(x^n)
> \end{aligned}
> $$
> 这里用到延拓的组合数概念：
> $$
> \begin{pmatrix}
> m\\k
> \end{pmatrix}=\frac{m(m-1)\cdots(m-k+1)}{k!}
> $$
> 被视为$m$的$k$次多项式，这里的$m$不一定为整数.
>
> 所以当$|y|<1$时，我们的 Taylor 公式为
> $$
> (1+y)^\alpha=1+\sum_{k=1}^\infty\begin{pmatrix}
> \alpha\\k
> \end{pmatrix}y^k
> $$
> 回到$f(x)=\arctan x$，$f'(x)=(1+x^2)^{-1}$，用到我们刚刚证明的命题，得到
> $$
> f'(x)=(1+x^2)^{-1}=1-x^2+x^4-x^6+\cdots+(-1)^nx^{2n}+o(x^{2n})
> $$
> 然后还用到上次课证明的命题，推出$f$的 Taylor 公式：
> $$
> \arctan x=\arctan0+x-\frac{x^3}{3}+\cdots+(-1)^n\frac{x^{2n+1}}{2n+1}+o(x^{2n+1})
> $$

用处：用于极限计算，可以用 Taylor 公式简化计算（这等价于多次 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则）.

一个之前的考试题：

/Example/

> $$
> f(x)=\left\{\begin{array}{lr}
> (1+x)^{1/x}\,,\quad\forall x\neq0,x>-1\\
> e\,,\quad x=0
> \end{array}\right.
> $$
>
> 求在$0$附近的 Taylor 公式.

/Solution/

> 其实这个题是为了更好的求出$e$. 但是计算难度比较大.
> $$
> \begin{aligned}
> f'(0)&=\lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{(1+x)^{1/x}-e}{x}\\\\
> &\overset{\text{L'H}\hat{\text{o}}\text{pital}}{=}\lim_{x\to0}(1+x)^{1/x}(\frac{\frac{x}{1+x}-\ln(1+x)}{x^2})\\\\
> &=e\lim_{x\to0}\frac{\frac{x}{1+x}-\ln(1+x)}{x^2}\longrightarrow \text{marked as }A\\\\
> &=e\lim_{x\to0}\frac{x(1-x+o(x))-(x-\frac{x^2}{2}+o(x^2))}{x^2}\\\\
> &=-\frac{1}{2}e
> \end{aligned}
> $$
> 或者$A$再用一次 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则.
>
> 现在来计算二阶导数，
> $$
> \begin{aligned}
> f''(0)&=\lim_{x\to0}\frac{f'(x)-f'(0)}{x}=\lim_{x\to0}\frac{(1+x)^{1/x}\frac{\frac{x}{1+x}-\ln(1+x)}{x^2}+\frac{1}{2}e}{x}
> \end{aligned}
> $$
> 其实分母是一次的，所以分子 Taylor 展开只用到一次就可以. 其中，
> $$
> \begin{aligned}
> (1+x)^{1/x}&=e-\frac{e}{2}x+o(x)\\\\
> \frac{\frac{x}{1+x}-\ln(1+x)}{x^2}&=\frac{x(1-x+x^2+o(x^2))-(x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3))}{x^2}\\\\
> &=\frac{-\frac{x^2}{2}+\frac{2}{3}x^3+o(x^3)}{x^2}=-\frac{1}{2}+\frac{2}{3}x\\\\
> f''(0)&=\lim_{x\to0}\frac{(e-\frac{e}{2}x+o(x))(-\frac{1}{2}+\frac{2}{3}x+o(x))+\frac{1}{2}e}{x}\\\\
> &=\lim_{x\to0}(\frac{1}{4}e+\frac{2}{3}e+o(x))=\frac{11}{24}e
> \end{aligned}
> $$
> 所以前面两阶 Taylor 公式为
> $$
> (1+x)^{1/x}=e(1-\frac{1}{2}x+\frac{11}{24}x^2+\cdots)
> $$
>
> ---
>
> 第二种方法是用复合函数的 Taylor 公式，假设
> $$
> \begin{aligned}
> g(x)&=\left\{\begin{array}{lr}
> \frac{1}{x}\ln(1+x)\,,\quad\forall x\neq0,x>-1\\\\
> \underset{x\to0}{\lim}g(x)=1\,,\quad x=0
> \end{array}\right.\\\\
> h(y)&=e^y
> \end{aligned}
> $$
> 则直接计算$g$的导数即可.

我们之前说过，Taylor 公式有“定量”的版本，余项能够具体地表出，我们对比“定性”和“定量”的版本，有：

|  \   |            定性             |          定量          |
| :--: | :-------------------------: | :--------------------: |
| 1阶  |        $f'(x)h+o(h)$        |       $f'(\xi)h$       |
| 2阶  | $f''(x)/2!\cdot h^2+o(h^2)$ | $f''(\xi)/2!\cdot h^2$ |

/Theorem/

> 设$f$在区间$I$上处处有$n$阶导，则对$I$中的任意两点$a\neq b$，存在$\xi$严格介于$a$、$b$之间，使得
> $$
> f(b)=f(a)+\sum_{k=1}^{n-1}\frac{f^{(k)}(a)}{k!}(b-a)^k+\frac{f^{(n)}(\xi)}{n!}(b-a)^n
> $$
> 这里的多项式 part 是$n-1$次的，所以有的人会将这个公式叫做$n-1$阶的，但是有的时候有人会叫这个是$n$阶的 Taylor 公式，因为最后的 Lagrange 余项中还有一个$n$次项.

::: tip -

这是我们这门课遇到的第一个不太好证的定理.
——艾神

:::

/Proof/ （证法 1）

> 考虑一个特例，$f^{(1)}(a)=\cdots=f^{(n-1)}(a)=0$，$f(a)=f(b)$，则上面定理的结论等价于$\exist\xi\in(a,b)$使得$f^{(n)}(\xi)=0$.
>
> /Lemma/ （高阶 Rolle 定理）
>
> > 设$a\neq b$，$h(x)$在$[a,b]$上处处有$n$阶导数，且$h(a)=h(b)$，$h^{(1)}(a)=\cdots=h^{(n-1)}(a)=0$，则存在$\xi\in(a,b)$使得$h^{(n)}(\xi)=0$.
>
> /Proof/
>
> > 用一次 Rolle 定理，得到$\exist x_1\in(a,b)$使得$h'(x_1)=0$，又有$h'(a)=h'(x_1)$，再次使用 Rolle 定理，之后递推到$n$阶，就能证明这一引理.
>
> 用引理证明 Taylor 公式：
>
> 构造
> $$
> h(x)=f(x)-(f(a)+\sum_{k=1}^{n-1}\frac{f^{(k)}(a)}{k!}(x-a)^k)-\lambda(x-a)^n
> $$
> 显然有
> $$
> \begin{aligned}
> h^{(k)}(a)=f^{(k)}(a)-\frac{f^{(k)}(a)}{k!}\cdot k!(x-a)^0|_{x=a}=0\,,\quad\forall1\leq k\leq n-1
> \end{aligned}
> $$
> 取$\lambda$使得$h(b)=0$，则和我们上面证明的引理的条件完全一致.
>
> 由引理，得到$\exist\xi\in(a,b)$使得$h^{(n)}(\xi)=0$，即$f^{(n)}(\xi)-n!\cdot\lambda=0$. 也就是说，
> $$
> \exist f^{(n)}(\xi)=n!\lambda=n!\frac{f(b)-\underset{k=0}{\overset{n-1}{\sum}}\frac{f^{(k)}(a)}{k!}(b-a)^k}{(b-a)^n}
> $$
> 移项，就证明了 Taylor 公式.

证毕.

下面还有一种最强大的证法，能够产出一系列的 Taylor 公式，它的一种朴素想法就是让$f$的行为越来越靠近一个多项式.

/Proof/ （产出一系列 Taylor 公式）

> 回忆：对于任意多项式$P(x)$，$\deg P\leq n-1$，有
> $$
> \begin{aligned}
> P(a+h)&=P(a)+\sum_{k=1}^{n-1}\frac{P^{(k)}(a)}{k!}h^k\\\\
> \Longleftrightarrow P(b)&=P(a)+\sum_{k=1}^{n-1}\frac{P^{(k)}(a)}{k!}(b-a)^k
> \end{aligned}
> $$
> 上面的式子有两种看法，可以将$b$作为主元，也可以将$a$作为主元. 我们采用第二种观点，冻结$b$，就会发现
> $$
> P(b)=P(x)+\sum_{k=1}^{n-1}\frac{P^{(k)}(x)}{k!}(b-x)^k
> $$
> 下面用这种视角证明 Taylor 公式，令
> $$
> F(x)=f(x)+\sum_{k=1}^{n-1}\frac{f^{(k)}(x)}{k!}(b-x)^k
> $$
> 则
> $$
> \begin{aligned}
> F'(x)&=f'(x)+\sum_{k=1}^{n-1}\frac{f^{(k+1)}(x)}{k!}(b-x)^k-\sum_{k=1}^{n-1}\frac{f^{(k)}(x)}{(k-1)!}(b-x)^{k-1}\\\\
> &=f'(x)+\frac{f^{(n)}(x)}{(n-1)!}(b-x)^{n-1}-f'(x)\\\\
> &=\frac{f^{(n)}(x)}{(n-1)!}(b-x)^{n-1}
> \end{aligned}
> $$
> 中间全部裂项相消. 对$F(x)$和任意函数$g(x)$用 Cauchy 中值定理，得到$\exist\xi$满足
> $$
> \frac{F(b)-F(a)}{g(b)-g(a)}\overset{\exist\xi}{=}\frac{F'(\xi)}{g'(\xi)}
> $$
> 所以
> $$
> f(b)=\sum_{k=0}^{n-1}\frac{f^{(k)}(a)}{k!}(b-a)^k+\frac{\frac{f^{(n)}(\xi)}{(n-1)!}(b-\xi)^{n-1}}{g'(\xi)}(g(b)-g(a))
> $$
> 取不同的$g$形式，就能得到不同的 Taylor 展开公式.

证毕.

我们来看看我们喜欢什么样的$g$：

* 取$g(x)=x$，得到 remainder 为
  $$
  R=\frac{f^{(n)}(\xi)}{(n-1)!}(b-\xi)^{n-1}(b-a)
  $$
  这称为 Cauchy 余项，主要是我们在前面用到 Cauchy 中值定理.

* 取$g(x)=(b-x)^n$，则$g'(\xi)=n(b-\xi)^{n-1}(-1)$，有
  $$
  \begin{aligned}
  R&=\frac{f^{(n)}(\xi)}{(n-1)!}(b-\xi)^{n-1}\frac{g(b)-g(a)}{g'(\xi)}\\\\
  &=\frac{f^{(n)}(\xi)}{n!}(b-a)^n
  \end{aligned}
  $$
  这正是 Lagrange 余项.

下面是 Taylor 公式的一些应用：

/Example/

> 证明：$\forall x\in\R$，有$\underset{n\to\infty}{\lim}(1+\frac{x}{1!}+\cdots+\frac{x^n}{n!})=e^x$.

/Proof/

> 设$f(x)=e^x$，在$(0,x)$中间用 Taylor 公式，余项记为：
> $$
> R_n=f(x)-\sum_{k=1}^n\frac{f^{(k)}(0)}{k!}x^k=\frac{f^{(n+1)}(\xi)}{(n+1)!}x^{n+1}
> $$
> 显然这个$\xi$依赖于$0$和$x$，记为$\xi_n$. 现在我们要证明$\underset{n\to\infty}{\lim}R_n=0$.
>
> 注意到，
> $$
> |R_n|=\frac{e^{\xi_n}}{(n+1)!}|x|^{n+1}\leq\frac{\max\{e^0,e^x\}}{(n+1)!}|x|^{n+1}\to0
> $$
> （这里用到$e^{\xi_n}$有界）

证毕.

