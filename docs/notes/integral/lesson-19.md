---
title: Lesson 19
createTime: 2024/11/20 19:04:00
permalink: /integral/integral/4kln0q8q/
---
# 高等微积分 Lesson 19

下周课程调至 12 月 8 日第 1&2 节，习题课正常进行.

> <s>啊？你说连续 4 个小时高微？</s>

## Taylor 公式

可以分为两种：定性的（带 Peano 余项）和定量的（带 Lagrange / Cauchy / 积分余项）.

问：$f$在$x_0$附近能否近似为多项式？
$$
f(x)=\sum_{i=0}^na_i(x-x_0)^i+o((x-x_0)^n)\text{ as }x\to x_0
$$
/Claim/

> $f(x)$在$x_0$附近的多项式近似至多唯一.

/Proof/

> $$
> \begin{aligned}
> a_0&=\lim_{x\to x_0}f(x)\\\\
> a_1&=\lim_{x\to x_0}\frac{f(x)-a_0}{x-x_0}\\\\
> &\cdots\\\\
> a_k&=\lim_{x\to x_0}\frac{f(x)-\underset{i=0}{\overset{k-1}{\sum}}a_i(x-x_0)^i}{(x-x_0)^k}\\\\
> &\cdots
> \end{aligned}
> $$

证毕.

/Theorem/

> 若$f$在$x_0$处有$n$阶导数，则$f$在$x_0$处的多项式近似的系数可由$f^{(*)}(x_0)$确定.

/Proof/

> $a_0=f(x_0)$，$a_1=f'(x_0)$，有
> $$
> a_2=\underset{x\to x_0}{\lim}\frac{f(x)-f(x_0)-f'(x_0)(x-x_0)}{(x-x_0)}
> $$
> 这满足 $\text{L'H}\hat{\text{o}}\text{pital}$ 法则的$\frac{0}{0}$型，得到
> $$
> a_2=\underset{x\to x_0}{\lim}\frac{f'(x)-f'(x_0)}{2(x-x_0)}=\frac{1}{2}f''(x_0)
> $$
> 之后能够归纳地确定$a_k$，有
> $$
> \begin{aligned}
> a_k&=\underset{x\to x_0}{\lim}\frac{f(x)-\underset{i=0}{\overset{k-1}{\sum}}\frac{f^{(i)}(x_0)}{i!}(x-x_0)^i}{(x-x_0)^k}\\\\
> &=\underset{x\to x_0}{\lim}\frac{f'(x)-\underset{i=1}{\overset{k-1}{\sum}}\frac{f^{(i)}(x_0)}{(i-1)!}(x-x_0)^{i-1}}{k(x-x_0)^k}\\\\
> &=\cdots\\\\
> &\overset{k-1\text{ times}}{=}\underset{x\to x_0}{\lim}\frac{f^{(k-1)}(x)-\underset{i=k-1}{\overset{k-1}{\sum}}\frac{f^{(i)}(x_0)}{(i-(k-1))!}(x-x_0)^{i-(k-1)}}{k!(x-x_0)^1}\\\\
> &=\underset{x\to x_0}{\lim}\frac{f^{(k-1)}(x)-f^{(k-1)}(x_0)}{k!(x-x_0)}\\\\
> &\overset{\text{by definition}}{=}\frac{f^{(k)}(x_0)}{k!}
> \end{aligned}
> $$
> 所以对$n$阶可导的$f$，$f$在$x_0$附近的$n$次多项式近似至多一个：
> $$
> P(x)=f(x_0)+\sum_{k=1}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
> $$

证毕.

问：上述$P(x)$是否真的近似$f$？

/Theorem/ （带 Peano 余项的 Taylor 公式）

> 设$f$在$x_0$处有$n$阶导数，则有
> $$
> f(x)=f(x_0)+\sum_{k=1}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)\text{ as }x\to x_0
> $$
> 或等价表述为
> $$
> f(x)=f(x_0)+\sum_{k=1}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\alpha(x)\text{ and }\lim_{x\to x_0}\frac{\alpha(x)}{(x-x_0)^n}=0
> $$
> or
> $$
> \underset{x\to x_0}{\lim}\frac{f(x)-\underset{k=0}{\overset{n}{\sum}}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k}{(x-x_0)^n}=0
> $$
> 实际上，带 Peano 余项的 Taylor 公式就是一个极限式. 但是第一种表述方法更具有数学含义.

这个定理在上面的命题证明中已经证过.

/Example/

> 设$f(x)$是$n$次多项式，则$f(x)$在$x_0$处的多项式为也是带 Peano 余项的 Taylor 公式.

证明仍然是用上面的式子（我有点不太明白换各种各样函数形式来证明 Taylor 公式的意义何在，通式已经被证明过了，再做这种 stamp collecting 的工作有何意义？或许是为了证明余项是足够小的，以此来说明这是好的近似.）

约定：称$f$在$x=0$处的 Taylor 公式为$f$的 McLaurin 公式.
$$
f(x)=f(0)+\sum_{k=1}^n\frac{f^{(k)}(0)}{k!}x^k+o(x^k)\text{ as }x\to0
$$
/Example/

> 求$\sin x$的 McLaurin 公式.
>
> 对于$\sin x$，在零附近有$f^{(\text{even})}(0)=0$，$f^k(0)=(-1)^\frac{k-1}{2}$（$k$是奇数），所以展开至$2m$阶为
> $$
> \sin x=\sum_{l=1}^m\frac{(-1)^{l-1}}{(2l-1)!}x^{2l-1}+o(x^{2m})
> $$
> 而展开到$2m-1$阶会得到
> $$
> \sin x=\sum_{l=1}^m\frac{(-1)^{l-1}}{(2l-1)!}x^{2l-1}+o(x^{2m-1})
> $$
> 为什么两者余项不一样呢？其实两者是一样的，只是前者要更精确一些. 可以理解为$o$是一种形容词，它不是确切的值.

同样地，可以计算$\cos x$的 McLaurin 公式.

常用的 McLaurin 公式：
$$
\begin{aligned}
e^x=&\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{1}{2}x^2+···\\
\sin(x)=&\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}=x-\frac{1}{6}x^3+···\\
\sinh(x)=&\sum_{n=0}^{\infty}\frac{x^{2n+1}}{(2n+1)!}=x+\frac{1}{6}x^3+···\\
\cos(x)=&\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}=1-\frac{1}{2}x^2+···\\
\cosh(x)=&\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}=1+\frac{1}{2}x^2+···\\
\frac{1}{1-x}=&\sum_{n=0}^{\infty}x^n=1+x+···\\
\ln(1+x)=&\sum_{n=0}^{\infty}\frac{(-1)^{n-1}x^n}{n}=x-\frac{1}{2}x^2+···\\
\end{aligned}
$$
（没有写出余项）

/Claim/

> 若已知$f'(x)$在$x_0$处的 Taylor 公式为
> $$
> f'(x)=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+o((x-x_0)^n)
> $$
> 且$f'$在$x_0$处有$n$阶导，则$x_0$处$f$的 Taylor 公式为
> $$
> \begin{aligned}
> f(x)&=f(x_0)+a_0(x-x_0)+\frac{a_1}{2}(x-x_0)^2+\cdots\\\\
> &+\frac{a_n}{n+1}(x-x_0)^{n+1}+o((x-x_0)^{n+1})
> \end{aligned}
> $$

/Proof/

> 对$f'$用唯一性即可，有
> $$
> \begin{aligned}
> a_k&=\frac{f'^{(k)}(x_0)}{k!}=\frac{f^{(k+1)}(x_0)}{k!}\\\\
> \Longrightarrow& f^{(k+1)}(x_0)=k!\cdot a_k
> \end{aligned}
> $$
> 从而$f(x)$的 Taylor 展开式是
> $$
> \begin{aligned}
> f(x)&=f(x_0)+\sum_{l=1}^{n+1}\frac{f^{(l)}(x_0)}{l!}(x-x_0)^l+o((x-x_0)^{n+1})\\\\
> &=f(x_0)+\sum_{l=1}^{n+1}\frac{a_{l-1}}{l}(x-x_0)^l+o((x-x_0)^{n+1})
> \end{aligned}
> $$

证毕.

/Claim/

> 设$f(x)$的 Mclaurin 公式为
> $$
> f(x)=a_0+a_1x+\cdots+a_nx^n+o(x^n)
> $$
> 则
> $$
> f(x^k)=a_0+a_1x^k+\cdots+a_nx^{kn}+o(x^{kn})
> $$

/Proof/

> 其实是使用复合极限定理，注意到$x\to0$时$x^k\to0$，且$x\neq0$时$x^k\neq0$，符合复合极限定理的修正 1，所以上式成立.

证毕.



