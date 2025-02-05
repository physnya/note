---
title: Lesson 4
createTime: 2024/09/20 12:20:36
permalink: /integral/integral/26hcox7z/
---
# 高等微积分 Lesson 4

## 极限

第$n$代仪器测量$L$（未知）所得值$x_n$（$n\in\Z_+$），怎么说明仪器更新会让$L$的测量数据越来越精确？有以下几个思路：

1. 误差$|x_n-L|$随$n$增大越来越小？

   但有实验误差，未必$|x_{n+1}-L|<|x_n-L|$. 这个思路不切实际.

2. 对任何一个精度的要求$\varepsilon>0$，都可以保证从某一代起，误差满足$|x_n-L|<\varepsilon$. 这表明随$n$增大，$x_n$整体而言越接近$L$.

/Definition/

> 设$\{x_n\}^\infty_{n=1}$是无穷数列，称$\{x_n\}$以$L$为极限，当且仅当$\forall\varepsilon>0$，$\exist N\in\Z_+$（$N$依赖于$\varepsilon$），满足$\forall n\geq N$有$|x_n-L|<\varepsilon$.
>
> 记作：$\underset{n\to\infty}{\lim}x_n=L$

评述：

1. 极限行为与$\{x_n\}$前面有限项无关，若$x_n=y_n$，$\forall n\geq N_0$，则$\underset{n\to\infty}{\lim}x_n=\underset{n\to\infty}{\lim}y_n$.
2. 极限记号是$\underset{n\to\infty}{\lim}$，上面意思是limit，下面的意思是“随着$n$越来越大”. 但是下面$n\to\infty$不太好理解，$\lim$这个记号可能更清楚.

接下来使用上面讲过的符号语言进行翻译：

1. $\{x_n\}$以$L$为极限 $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist N\in\Z$，$\forall n\geq N$，$|x_n-L|<\varepsilon$.
2. $\{x_n\}$不以$L$为极限 $\Longleftrightarrow$ $\exist\varepsilon>0$，$\forall N\in\Z$，$\exist n\geq N$，$|x_n-L|\geq\varepsilon$.
3. $\{x_n\}$有极限 $\Longleftrightarrow$  $\exist L\in\R$，$\forall\varepsilon>0$，$\exist N\in\Z$，$\forall n\geq N$，$|x_n-L|<\varepsilon$.
4. $\{x_n\}$无极限 $\Longleftrightarrow$ $\forall L\in\R$， $\exist\varepsilon>0$，$\forall N\in\Z$，$\exist n\geq N$，$|x_n-L|\geq\varepsilon$.

/Example/

> 证明：$\underset{n\to\infty}\lim\frac{1}{n}=0$
>
> /Proof/
>
> > 取$N=[1/\varepsilon]+1$即可.
>
> 证毕.

/Example/

> 证明：$\underset{n\to\infty}{\lim}\sqrt[n]{a}=1$
>
> /Proof/
>
> > 1. 当$a>1$时，$\forall\varepsilon>0$，取$N>\frac{a-1}{\varepsilon}$，从而$\forall n\geq N$有
> >    $$
> >    \begin{aligned}
> >    &(1+\varepsilon)^n\geq1+n\varepsilon\geq1+N\varepsilon>1+a-1=a\\\\
> >    &\Longrightarrow\sqrt[n]{a}<1+\varepsilon
> >    \end{aligned}
> >    $$
> >
> > 2. 当$0<a<1$时，四则运算即可：
> >    $$
> >    \lim_{n\to\infty}\sqrt[n]{a}=\lim\frac{1}{\sqrt[n]{\frac{1}{a_n}}}
> >    $$
>
> 证毕.

/Example/

> 证明：$\lim\sqrt[n]{n}=1$
>
> /Proof/
>
> > 草稿：
> > $$
> > \begin{aligned}
> > &|\sqrt[n]{n}-1|<\varepsilon\\\\
> > &\sqrt[n]{n}<1+\varepsilon\\\\
> > &n<(1+\varepsilon)^n\\\\
> > &n<1+n\varepsilon+\frac{1}{2}n(n-1)\varepsilon^2
> > \end{aligned}
> > $$
> > 由上面可以发现可以取$N>1+\frac{2}{\varepsilon^2}$.
>
> 证毕.

## 极限性质

/Claim/

> 设$\lim x_n=L<B$，则$\exist n\in\Z_+$，$\forall n\geq N$有$x_n<B$. $L>A$同理.
>
> 可以表述为：充分大的指标保持极限不等式.

/Proof/

> 由$\lim x_n=L$定义知，对$\varepsilon=B-L$，$\exist N\in\Z_+$，$\forall n\geq N$，又$|x_n-L|<\varepsilon=B-L$，所以$x_n<L+\varepsilon=B$.

可以得到一个推论：数列的极限至多唯一.

/Proof/

> 反证法：设$\{x_n\}$有两个极限$L_1$，$L_2$，不妨设$L_1<L_2$. 取$B$是两个极限的中点，用上面命题即证矛盾.

/Claim/

> 设$\lim x_n<\lim y_n$，则$\exist N$使$\forall n>N$有$x_n<y_n$.

/Proof/

> 设两个极限分别为$L_1<L_2$，取$\varepsilon=\frac{L_2-L_1}{2}$，则会有$x_n<\frac{L_1+L_2}{2}$，$\forall n>N_1$，$y_n>\frac{L_1+L_2}{2}$，$\forall n>N_2$，此时取$N=\max(N_1,N_2)$即可证明.

/Claim/

> 设$\{x_n>0\}$，$\lim x_{n+1}/x_n=q$存在且$q<1$，则$\lim x_n=0$.

/Proof/

> 取$q<r<1$，由$\lim\frac{x_{n+1}}{x_n}=q<r$及Claim1，知$\exist N\in\Z_+$，$\forall n\geq N$有$x_{n+1}/x_n<r$，所以$\forall n>N$有$0<x_n<x_Nr^{n-N}$，最后得到$\lim x_n=0$.

/Claim/

> 极限不等式：设$x_n\leq y_n$（$\forall n\geq N_0$），则$\lim x_n\leq\lim y_n$.

/Proof/

> 反证，用Claim2即可.

==注意：若$x_n<y_n$，只能得出$\lim x_n\leq\lim y_n$！==

为什么Claim1和Claim2是有用的？因为建立极限比建立不等式更加简单，可以忽略很多麻烦的项.

/Example/（等比数列）

> $$
> \lim q^n=\left\{\begin{array}{lr}0,\quad|q|<1\\1,\quad q=1\\\text{none},\quad\text{else}\end{array}\right.
> $$

/Proof/

> 1. $|q|<1$时略.
> 2. $q=1$时显然.
> 3. else情况下的证明要使用下面的Claim，证明无上界，即$\forall M$，$\exist |q^n|>M$. 这是由于$|q^n|=(1+b)^n\geq1+nb>M$，一定有$n$满足条件.

证毕.

/Claim/

> 收敛的数列一定有界.
>
> > 称收敛，当且仅当有极限
> > 称有界，当且仅当既有上界又有下界，当且仅当$\exist M$使$|x_n|\leq M$，$\forall n$.

## 极限计算方法

1. 定义
2. 四则运算
3. 夹逼定理

### 定义

/Example/

> 多项式增长$\ll$指数增长，求证$\lim\frac{n^k}{q^n}=0$（$q>1$）.

/Proof/

> 令$x_n=\frac{n^k}{q^n}$，
> $$
> \lim\frac{x_{n+1}}{x_n}=\lim\frac{1}{q}(\frac{n+1}{n})^k=\frac{1}{q}<1
> $$
> 由Claim就知道，$\lim x_n=0$.
>
> 当然也可以用定义验证，但是会非常复杂.

### 四则运算

极限和四则运算可交换.

以乘法为例，证明：（$\lim x_n=A$，$\lim y_n=B$）

> $$
> \begin{aligned}
> |x_ny_n-AB|&=|(x_n-A)y_n+A(y_n-B)|\\\\
> &\leq|x_n-A||y_n|+|A||y_n-B|
> \end{aligned}
> $$
>
> 由$\lim x_n=A$知$|x_n-A|$可控制；
> 由$\lim y_n=B$知$|y_n-B|$可控制；
> 由$\{y_n\}$收敛知其有界，$|y_n|$可控制.
>
> 代回原式就可知道$|x_ny_n-AB|<\varepsilon$.

接下来证明除法：

> $$
> \begin{aligned}
> |\frac{x_n}{y_n}-\frac{A}{B}|&=|\frac{x_nB-y_nA}{By_n}|\\\\
> &=|\frac{(x_n-A)B+A(B-y_n)}{By_n}|\\\\
> &\leq\frac{|x_n-A||B|+|A||B-y_n|}{|B||y_n|}
> \end{aligned}
> $$
>
> 之后几句话是与上面一样的，特别注意分母的控制：
>
> 由$\lim y_n=B\neq0$，有$|y_n|$在$n$充分大时$|y_n|>|B|/2$，分母得到控制.
>
> 之后的证明与上面一样.

推论：极限与==有限==和/积可交换.
$$
\begin{aligned}
&\lim\sum_{i=1}^k x_{i,n}=\sum_{i=1}^{k}\lim x_{i,n}\\\\
&\lim\prod_{i=1}^{k}x_{i,n}=\prod_{i=1}^{k}\lim x_{i,n}\\\\
\end{aligned}
$$
==无限和/积不一定可交换！==

/Example/

> 证明：$\lim\frac{a_kn^k+a_{k-1}n^{k-1}+\cdots+a_0}{n^k}=a_k$

证明显然.

/Example/

> 求：$\lim\frac{a_kn^k+a_{k-1}n^{k-1}+\cdots+a_0}{b_mn^m+b_{m-1}n^{m-1}+\cdots+b_0}$

/Solution/

> 可以换成上面一个Example的形式：
> $$
> \begin{aligned}
> \text{LHS}&=\lim\frac{a_kn^k+\cdots+a_0}{n^k}\cdot\frac{n^k}{b_mn^m+\cdots+b_0}\\\\
> &=\frac{a_k}{b_m}\lim n^{k-m}\\\\
> \end{aligned}
> $$
> 就得到了结果.

引理：若$\lim x_n=A$，$\lim y_n=B$，但是$\lim z_n$不存在，则$\lim x_ny_nz_n$不存在.

### 夹逼定理

/Theorem/

> 设$a_n\leq b_n\leq c_n$（$\forall n\geq N_0$），设$\lim a_n=\lim c_n=L$，则$\lim b_n$存在且等于$L$.

/Proof/

> $\forall \varepsilon>0$，$n$足够大时有$a_n>L-\varepsilon$，$c_n<L+\varepsilon$，此时$b_n$在两者之间.