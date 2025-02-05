---
title: Lesson 7
createTime: 2024/10/09 19:47:00
permalink: /integral/integral/snpvu6o4/
---
# 高等微积分 Lesson 7

国庆之后的第一节课.

习题课时间：（选定一个时间段，内容是一样的）

1. Mon-6-6A309
2. Tue-6-3-3104
3. Thu-6-6A309
4. Fri-6-6A205
5. Sat-6-6A203

## Stolz-Cesaro Theorem

视为$\text{L'H}\hat{\text{o}}\text{pital}$法则的离散版本.

/Theorem/

> $*/\infty$型Stolz：设$\{b_n\}$严格单调递增且无上界，或$\underset{n\to\infty}{\lim}b_n=+\infty$，若
> $$
> \underset{n\to\infty}{\lim}\frac{a_{n+1}-a_n}{b_{n+1}-b_n}=L
> $$
> 则$\underset{n\to\infty}{\lim}\frac{a_n}{b_n}$存在且等于$L$.
>
> > 题外话：Wiki上面写的是“$*/\infty$”，所以老师把上一节课写的“$?/\infty$”改成了“$*/\infty$”.

/Proof/

> 由$\underset{n\to\infty}{\lim}\frac{a_{n+1}-a_n}{b_{n+1}-b_n}=L$，知道$\forall\varepsilon>0$，$\exist N_0\in\Z_+$，$\forall m\geq N_0$有
> $$
> L-\varepsilon<\frac{a_{n+1}-a_n}{b_{n+1}-b_n}<L+\varepsilon
> $$
> 我们现在只有这一条信息. 分式总是难以处理的，化简一下：
> $$
> \begin{aligned}
> &(L-\varepsilon)(b_{n+1}-b_n)<a_{n+1}-a_n<(L+\varepsilon)(b_{n+1}-b_n)\\\\
> &(L-\varepsilon)\sum_{m=N_0}^{n-1}\Delta b_m<\sum_{m=N_0}^{n-1}\Delta a_m<(L+\varepsilon)\sum_{m=N_0}^{n-1}\Delta b_m\\\\
> &(L-\varepsilon)(b_n-b_{N_0})<a_n-a_{N_0}<(L+\varepsilon)(b_n-b_{N_0})\\\\
> &\underset{\text{LHS}}{\frac{a_{N_0}}{b_n}+(L-\varepsilon)(1-\frac{b_{N_0}}{b_n})}<\frac{a_n}{b_n}<\underset{\text{RHS}}{\frac{a_{N_0}}{b_n}+(L+\varepsilon)(1-\frac{b_{N_0}}{b_n})}\\\\
> &\text{LHS}=0+(L-\varepsilon)(1-0)=L-\varepsilon>L-2\varepsilon\\\\
> &\text{RHS}=L+\varepsilon<L+2\varepsilon\\\\
> &\Longrightarrow\underset{n\to\infty}{\lim}\frac{a_n}{b_n}=L
> \end{aligned}
> $$
> 上面用到：充分大指标保持极限不等式、$\underset{n\to\infty}{\lim}b_n=+\infty$.

证毕.

/Theorem/

> $0/0$型Stolz：设$\underset{n\to\infty}{\lim}a_n=\underset{n\to\infty}{\lim}b_n=0$，且$\{b_n\}$严格单调递减，若$\underset{n\to\infty}{\lim}\frac{a_{n+1}-a_n}{b_{n+1}-b_n}=L$，则$\underset{n\to\infty}{\lim}\frac{a_n}{b_n}=L$.

证明与上面一个定理的证明是类似的，可能还要更加简单，留作练习.

::: details 自主练习

下面的文字是我的拙劣模仿，如有错误请多指教.

/Proof/

> 仍然从这样的已知条件开始：$\forall\varepsilon>0$，$\exist N_0\in\Z_+$，$\forall m\geq N_0$有
> $$
> L-\varepsilon<\frac{a_{n-1}-a_n}{b_{n-1}-b_n}<L+\varepsilon
> $$
> 接下来进行化简. （==注意到$\{b_n\}$严格单调递减，所以这里会产生负号==）
> $$
> \begin{aligned}
> &\Delta a_n=a_{n-1}-a_n\,,\quad\Delta b_n=b_{n-1}-b_n\\\\
> &(L-\varepsilon)\Delta b_n<\Delta a_n<(L+\varepsilon)\Delta b_n\\\\
> &(L-\varepsilon)\sum_{m=N_0}^{n+1}\Delta b_m<\sum_{m=N_0}^{n+1}\Delta a_m<(L+\varepsilon)\sum_{m=N_0}^{n+1}\Delta b_m\\\\
> &(L-\varepsilon)(b_n-b_{N_0})<a_n-a_{N_0}<(L+\varepsilon)(b_n-b_{N_0})\\\\
> &\underset{\text{LHS}}{\frac{a_{N_0}}{b_n}+(L-\varepsilon)(1-\frac{b_{N_0}}{b_n})}<\frac{a_n}{b_n}<\underset{\text{RHS}}{\frac{a_{N_0}}{b_n}+(L+\varepsilon)(1-\frac{b_{N_0}}{b_n})}
> \end{aligned}
> $$
> 我们要求$N_0\to\infty$，$n<N_0$，(==这里跟上面$*/\infty$的证明完全是相反的，包括$n$和$N_0$的大小关系==)，可以得到
> $$
> \begin{aligned}
> &\text{LHS}=0+(L-\varepsilon)(1-0)=L-\varepsilon>L-2\varepsilon\\\\
> &\text{RHS}=0+(L+\varepsilon)(1-0)=L+\varepsilon<L+2\varepsilon\\\\
> &\Longrightarrow\underset{n\to\infty}{\lim}\frac{a_n}{b_n}=L
> \end{aligned}
> $$

证毕.

:::

/Example/

> 设$\underset{n\to\infty}{\lim}a_n=L$，求$\underset{n\to\infty}{\lim}\frac{a_1+\cdots+a_n}{n}$.

/Solution/

> 可以用$*/\infty$型的Stolz定理，得到极限值为$L$.

/Example/

> 设$a_n>0$，$\forall n$，有$\underset{n\to\infty}{\lim}a_n=A>0$，则证明：$\underset{n\to\infty}{\lim}\sqrt[n]{a_1a_2\cdots a_n}=A$

/Proof/

> 1. $A=0$情形. 由$\underset{n\to\infty}{\lim}a_n=0<r$，$r>0$，可知$\exist N_0$，$\forall n\geq N_0$，有$a_n<r$，从而
>    $$
>    0<\sqrt[n]{a_1\cdots a_n}\leq(a_1\cdots a_{N_0})^\frac{1}{n}r^\frac{n-N_0}{n}=\text{RHS}
>    $$
>    由$\underset{n\to\infty}{\lim}\text{RHS}=1\cdot r^1=r<2r$，知道$\forall n\geq \max\{N_0,N_1\}$有$0<\sqrt[n]{a_1\cdots a_n}\leq\text{RHS}<2r$，表明$\underset{n\to\infty}{\lim}\sqrt[n]{a_1\cdots a_n}=0$.
>
> 2. $A>0$，类似，或者$b_n=\ln a_n$，再使用前例.

证毕.

## 函数的极限

回忆Newton的流数法，遇到一个式子：
$$
\frac{S(x+o)-S(x)}{o}\approx h(x)
$$
相信当$o$越来越接近于$0$时，$\text{LHS}$越接近$h(x)$.

Newton杜撰一个名词：“消失的最终比”，来回避“$o$到底是不是$0$”的问题.

Cauchy第一个定义了“函数极限”，上面的量其实就是函数的极限.

改写一下：上述比值写为$f(x)$. 关心当$x\to a$时$f(x)$是否$\to L$.

/Definition/

> 称$x\to a$时$f(x)$以$L$为极限（记为$\underset{x\to a}{\lim}f(x)=L$），如果$\forall\varepsilon>0$，$\exist\delta>0$，只要$0<|x-a|<\delta$，就有$|f(x)-L|<\varepsilon$.

==强调：$0<|x-a|$，因为讨论极限时只关心$a$附近的$f(x)$，于$f(a)$无关，$f$甚至可以在$a$处无定义.==

/Definition/ （开球邻域）

> $B_r(a)=\{x:d(x,a)<r\}$称为以$a$为心、$r$为半径的开球邻域.
>
> > 题外话：$B$是ball的意思
>
> 上述定义在一般度量空间中也有效.

由函数极限定义中，关心$a$附近$f$的行为，有必要定义“何为‘附近’”，由此引入开球邻域的定义.

/Definition/

> 同理定义去心开球邻域：$B_r(a)| a$，或者$B_r(a)^*$.

/Definition/ （函数极限）

> 设$f$在$a$的某个去心邻域中有定义，则称$\underset{x\to a}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$，使得$\forall0<|x-a|<\delta$有$|f(x)-L|<\varepsilon$.
>
> > 注记：$\underset{x\to a}{\lim}f(x)$与$f(a)$无关，只与$f$在某个$B_r(a)| a$上的行为有关，只研究$x$靠近$a$时$f(x)$的趋势.

一维情况下可定义单侧极限：

/Definition/

> 左极限：$\underset{x\to a-}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$，$\forall a-\delta<x<a$有$|f(x)-L|<\varepsilon$.
>
> 右极限：$\underset{x\to a+}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$，$\forall a<x<a+\delta$有$|f(x)-L|<\varepsilon$.

同样地，类似于上面，我们还可以定义$x\to+\infty$时的极限，为$\forall\varepsilon>0$，$\exist M$，$\forall x>M$有$|f(x)-L|<\varepsilon$，等等.

/Claim/

> $\underset{x\to a}{\lim}f(x)$存在 $\Longleftrightarrow$ $\underset{x\to a-}{\lim}f(x)$，$\underset{x\to a+}{\lim}f(x)$存在且相等

/Proof/

> 1. 证明$\Longrightarrow$.
>
>    设$\underset{x\to a}{\lim}f(x)=L$，则$\forall\varepsilon>0$，$\exist\delta>0$，$\forall0<|x-a|<\delta$有$|f(x)-L|<\varepsilon$. 特别地，$\forall a-\delta<x<a$，有$|f(x)-L|<\varepsilon$，所以$\underset{x\to a-}{\lim}f(x)=L$，得证，另一侧同理.
>
> 2. 证明$\Longleftarrow$.
>
>    设$\underset{x\to a-}{\lim}f(x)=L=\underset{x\to a+}{\lim}f(x)$，由左极限定义，知$\forall\varepsilon>0$，$\exist\delta_1>0$，$\forall a-\delta_1<x<a$有$|f(x)-L|<\varepsilon$. 同理，由右极限定义，知道$\forall\varepsilon>0$，$\exist\delta_2>0$，$\forall a<x<a+\delta_2$有$|f(x)-a|<\varepsilon$.
>    
>    于是我们可以把上面两个结论合并，取$\delta=\min\{\delta_1,\delta_2\}$，有$\forall0<|x-a|<\delta$有$|f(x)-L|<\varepsilon$，这表明$\underset{x\to a}{\lim}f(x)=L$.

证毕.

既然上面已经将左右极限“合并”了，我们接下来考虑“合并”趋于$\pm\infty$的极限.

/Definition/

> $\underset{x\to\infty}{\lim}f(x)=L$ $\Longleftrightarrow$ $\underset{x\to-\infty}{\lim}f(x)=\underset{x\to+\infty}{\lim}f(x)=L$
>
> $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist k\in\R_+$，$|x|>k$有$|f(x)-L|<\varepsilon$.

## 函数极限的性质

问：函数极限与序列极限有何关联？

可用序列极限定义函数极限.

/Theorem/ （Heine）

> $\underset{x\to a}{\lim}f(x)=L$ $\Longleftrightarrow$ 对任何一个项项不等于$a$且趋于$a$的数列$\{x_n\}$有$\underset{n\to\infty}{\lim}f(x_n)=L$（Claim H）

（用离散靠近$a$的方式去探测$x$靠近$a$的方式.）

/Proof/

> 1. 证$\Longrightarrow$.
>
>    设$\underset{x\to a}{\lim}f(x)=L$，来证明Claim H. 再设$\{x_n\neq a\}\to a$.
>
>    为此，考虑$\forall\varepsilon>0$，由$\underset{x\to a}{\lim}f(x)=L$定义，知道$\exist\delta>0$，$\forall0<|x-a|<\delta$有$|f(x)-L|<\varepsilon$ $(*)$.
>
>    再由$\underset{n\to\infty}{\lim}x_n=a$知对于$\forall\delta>0$，$\exist N$，$\forall n>N$有$|x_n-a|<\varepsilon$.
>
>    结合$x_n\neq a$，知$0<|x_n-a|<\delta$（$\forall n\geq N$），再由$(*)$得$|f(x_n)-L|<\varepsilon$，表明$\underset{n\to\infty}{\lim}f(x_n)=L$.
>
> 2. 证$\Longleftarrow$.
>
>    设Claim H成立，来证明$\underset{x\to a}{\lim}f(x)=L$. 其实这不是一件很好证明的事情，所以考虑使用反证法：假设当$x\to a$时$f(x)$不以$L$为极限，把极限的定义之逆命题写出来，也就是$\exist\varepsilon>0$，$\forall\delta>0$，$\exist0<|x-a|<\delta$使得$|f(x)-L|\geq\varepsilon$.
>    
>    1. 既然是$\forall\delta>0$，自然地想到取$\delta=1/n$，$n\in\Z_+$，那么$\exist0<|x_n-a|<1/n$使得$|f(x_n)-L|\geq\varepsilon$.
>    
>    2. 换一个角度思考，序列$\{x_n\}$又满足$x_n\neq a$，$\forall n$，这就说明$\{x_n\}$项项非$a$且$\to a$，再应用Claim H能证明：$\underset{n\to\infty}{\lim}f(x_n)=L$.
>    
>    上面两个角度得出的结论是矛盾的. 所以原来的假设不成立，“$\Longleftarrow$”成立.

证毕.

这个定理非常重要，因为这意味着我们能通过某一种方式实现函数极限与数列极限的一种对应，之前在数列极限中证明的大量结论在函数极限中仍然适用.