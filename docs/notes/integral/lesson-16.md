---
title: Lesson 16
createTime: 2024/11/08 13:26:58
permalink: /integral/integral/agjiig9l/
---
# 高等微积分 Lesson 16

## 反函数的导数

/Theorem/

> 设$f$是连续单射，且处处可导，则有
> $$
> (f^{-1})'(f(x))=\frac{1}{f'(x)}
> $$
> 当然要求$f'(x)\neq0$.

一些理解：导数和微分像是将定义域中的一段小的尺度映射到值域中间的另一段小尺度，它们就可以被解释为这个尺度的伸缩倍数. 在这样的理解下，反函数的导数具有上面的形式就是显然的.

如果将$f(x)$写成$y$，上面的定理还可以被转述为
$$
(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}
$$
仍然要求分母非零.

注记：上述定理中，若删去$f'(x)\neq0$的条件，则结论不成立，甚至有可能反函数不可导.

/Example/

> $f(x)=x^3$，单调连续、处处可导，但是其反函数$f^{-1}(x)=x^{1/3}$在$0$处不可导，这一点导数不存在.

==可微双射的逆未必可微.==

/Example/

> $f(x)=e^x$，则
> $$
> (f^{-1})'(y)=\frac{1}{f'(\ln y)}=\frac{1}{y}
> $$

/Example/

> $f(x)=\sin x$，则
> $$
> (\arcsin x)'=\frac{1}{(\sin(\arcsin x))'}=\frac{1}{\cos(\arcsin x)}
> $$
> 注意$\arcsin x$的值域是$[-\pi/2,\pi/2]$，其$\cos$值总是正的，得到
> $$
> \cos(\arcsin x)=\sqrt{1-\sin^2(\arcsin x)}=\sqrt{1-x^2}
> $$
> 所以
> $$
> (\arcsin x)'=\frac{1}{\sqrt{1-x^2}}
> $$
> 记住定义域是$[-1,1]$. 另外，$\arcsin x$在$\pm1$处不可导.

见到很多在某点处不可导的反函数，我们思考如下命题：

/Claim/

> 设$f$是可导的双射，若$f'(x)=0$，则$f^{-1}$在$f(x)$处不可导.

/Proof/

> 反证，设$f^{-1}$在$f(x)$处可导，用链式法则得到
> $$
> (f^{-1}\circ f)'(x)=(f^{-1})'(f(x))f'(x)
> $$
> 这里 RHS 是恒同映射，其导数恒为$1$；而 LHS 为$0$，矛盾！
>
> 即证.

证毕.

/Example/

> $f(x)=\arccos x$，则
> $$
> (\arccos x)'=\frac{1}{(\cos(\arccos x))'}=-\frac{1}{\sin(\arccos x)}
> $$
> 注意到$\arccos x$值域为$[0,\pi]$，其$\sin$值为正，得到
> $$
> (\arccos x)'=-\frac{1}{\sqrt{1-x^2}}
> $$

/Example/

> $$
> (\arctan x)'=\frac{1}{(\tan(\arctan x))'}=\cos^2(\arctan x)
> $$
>
> 因为$1+\tan^2\alpha=1/\cos^2\alpha$，所以
> $$
> (\arctan x)'=\frac{1}{1+x^2}
> $$

在更老的中文教材中，会使用另一种方法：（仍然以$\arcsin x$为例）

/Example/

> $$
> \begin{aligned}
> \arcsin x&=y\\
> \sin y&=x\\
> \cos y\cdot y'&=1\\
> y'&=\frac{1}{\cos y}\\
> y'&=\frac{1}{\sqrt{1-x^2}}
> \end{aligned}
> $$
>
> “两边同时求导”.

这种方式中，反函数定理并没有得到很好的表述，因为没有证明反函数是可导的.

## 高阶导数

/Definition/

> 设$f$在$D$上处处可导，则有导函数$f':D\to\R$；若$f'$在$x_0\in D$处可导，则称$f$在$x_0$处二阶可导. 并记
> $$
> \begin{aligned}
> (f')'(x_0)&=f''(x_0)=f^{(2)}(x_0)=\frac{\text{d}}{\text{d}x}(\frac{\text{d}f}{\text{d}x})|_{x=x_0}\\\\
> &=\frac{\text{dd}f}{\text{d}x\text{d}x}|_{x=x_0}=\frac{\text{d}^2f}{(\text{d}x)^2}|_{x=x_0}=\frac{\text{d}^2f}{\text{d}x^2}|_{x=x_0}
> \end{aligned}
> $$
> 要注意的是，最后一个表述方式中的“$\text{d}x^2$”是$(\text dx)^2$而不是$\text{d}(x^2)$.
>
> 由此我们给出一个递归的定义：$k+1$阶导数是
> $$
> (f^{(k)})'(x_0)=f^{(k+1)}(x_0)=\frac{\text{d}^{k+1}f}{\text{d}x^{k+1}}(x_0)
> $$

计算方法：

1. 多次求导

2. 高阶导数的 Leibiniz 法则：

   $(fg)'=f'g+fg'$；

   $(fg)''=f''g+2f'g'+fg''$；

   ……

   可以发现这里的系数就是杨辉三角的系数.

/Claim/

> 设$f$，$g$有$n$阶导数，则$(fg)$有$n$阶导数且
> $$
> (fg)^{(n)}=\sum_{k=0}^{n}C_n^k f^{(n-k)}(x)g^{(k)}(x)
> $$

/Proof/

> 对$n$归纳. 设$n$版本已经被证明，则
> $$
> \begin{aligned}
> (fg)^{(n+1)}&=((fg)^{(n)})'\\\\
> &=(\sum_{k=0}^{n}C_n^kf^{(n-k)g^{(k)}})'\\\\
> &=\sum_{k=0}^nC_n^kf^{(n+1-k)}g^{(k)}+\sum_{k=0}^nC_n^kf^{(n-k)}g^{(k+1)}
> \end{aligned}
> $$
> 注意到换哑指标不改变式子的结果，我们考虑将后一项的$k+1$换成$l$，则
> $$
> =\sum_{k=0}^{n+1}C_n^kf^{(n+1-k)}g^{(k)}+\sum_{l=0}^{n+1}C_n^{l-1}f^{(n-l+1)}g^{(l)}
> $$
> 同时又约定$C_n^{n+1}=C_n^{-1}=0$.
>
> 最后得到
> $$
> \begin{aligned}
> &=\sum_{k=0}^{n+1}(C_n^k+C_n^{k-1})f^{(n+1-k)}g^{(k)}\\\\
> &=\sum_{k=0}^{n+1}C_{n+1}^kf^{(n+1-k)}g^{(k)}
> \end{aligned}
> $$

证毕.

3. 高阶导数的链式法则：

   $(g\circ f)'(x)=g'(f(x))f'(x)$；

   $(g\circ f)''(x)=g''(f(x))f'(x)f'(x)+g'(f(x))f''(x)$；

   ……

   毫无规律可言.

   我们可以使用下面的方法画图：

   ::: details 链式法则的画图方法

   ::: demo-wrapper img no-padding
      ![一阶导和二阶导](https://p.sda1.dev/20/9e4e0f8113c6a5da19f0c47b8deeebbc/9e49ab8b1333df6abca8f86312d842d.jpg)
      ![三阶导](https://p.sda1.dev/20/0c426e8a2c7aacd879652c1aa1009526/40dd8d8d06b93c921e9b392f21adb5b.jpg)
   :::

   任何一幅图都是由“红端”乘上“蓝端”，然后不同图之间相互加在一起；任何一段的延长都是再求一阶导，分叉都是相乘.

   相当于$n$位客人依次进入房间，第$k$次求导，有两种情况：
   
   1. 若对已有的红端求导，等价于第$k$位客人新开一桌；
   2. 若对已有的蓝端求导，等价于第$k$位客人加入已有的一桌.
   
   $\{$所有图$\}$相当于$1$到$n$位客人分桌而坐的方式. 每有一个红端就新开一桌，这一桌的蓝端数量就是这一桌的人数，对一个分组方式，对应的表达式是
   $$
   g^{(\text{number of group})}f^{(\text{member of }1\text{st group})}\cdots f^{(\text{member of }k\text{th group})}
   $$

/Definition/

> 所谓$\{1,2,\cdots,n\}$的一个分组方式，是指$P=\{A_1,A_2,\cdots,A_k\}$，其中：
>
> 1. $A_i$是$\{1,2,\cdots,n\}$的非空子集；
> 2. $A_1\sim A_k$两两不变；
> 3. $\underset{i=1}{\overset{k}{\bigcup}}A_i=\{1,2,\cdots,n\}$.

/Theorem/

> 设$f$，$g$有$n$阶导，则$g\circ f$也有$n$阶导，且
> $$
> (g\circ f)^{(n)}(x)=\sum_{P=\{A_1,\cdots,A_k\}}g^{(k)}(f(x))f^{|A_1|}(x)\cdots f^{|A_k|}(x)
> $$

/Proof/

> 对$n$归纳. 设$n$的结论已经成立，证明对$n+1$成立.
>
> $\{1,2,\cdots,n+1\}$分组方式能被唯一地表示成如下形式：先对$\{1,2,\cdots,n\}$分组为$P_n=\{A_1,\cdots,A_k\}$，$n+1$决定自己的去向，共有$k+1$中去向：
>
> * $\{A_1,\cdots,A_k,\{n+1\}\}$，$n+1$单独分一组；
> * $\{A_1,\cdots,A_i\cup\{n+1\},\cdots,A_k\}$，$n+1$加入中间某一组.
>
> 这些分组方式对应于求导：
> $$
> \begin{aligned}
> (g\circ f)^{(n+1)}&=(\sum_{P_n}g^{(k)}(f)f^{(|A_1|)}\cdots f^{|A_k|})'\\\\
> &=\sum_{P_n}(g^{(k+1)}(f)f^{(1)}f^{|A_1|}\cdots f^{|A_k|}+g^{(k)}(f)f^{(|A_1|+1)}\cdots f^{|A_k|}+\cdots\\\\
> &\quad+g^{(k)}(f)f^{|A_1|}\cdots f^{|A_i|+1}\cdots f^{|A_k|}+g^{(k)}(f)f^{(|A_1|)}\cdots f^{|A_k|+1})\\\\
> &=\sum_{P_{n+1}}\cdots
> \end{aligned}
> $$

证毕.

一些应用：

/Example/

> $h(x)=e^{\frac{\alpha}{2}x^2}$，求$h^{(n)}(0)$.
>
> 设$f(x)=\alpha x^2/2$，$g(y)=e^y$.
>
> 注意到只有$2$阶导不是零，所以分组方式被大大减少，最终得到
> $$
> h^{(n)}(0)=\sum_{P_n}g^{(k)}(f(0))\prod_{i=1}^k f^{(|A_i|)}(0)
> $$
> 由于$f^{(\text{else})}$消失，只能两两分组，这个分组方式记为$P$.
> $$
> =\sum_{P}g^{(n/2)}(0)\prod_{i=1}^{n/2}f^{(2)}(0)=\left\{\begin{array}{lr}
> 0\,,\quad n\text{ is odd}\\\\
> 2^{n/2}N\,,\quad n\text{ is even}
> \end{array}\right.
> $$
> 其中$N$为$n$个人（$n$为偶数）两两分组的方法数，是$(n-1)!!$.
>
> > 理由：$1$号找一个同组的人，共有$n-1$种方法，删去两人；之后递推.

另一个例子是反三角函数.

/Example/

> $P(x)=\arctan x$，求$P^{(n)}(0)$.
>
> $P'(x)=1/(1+x^2)=h(x)$，记$f(x)=x^2$，$g(y)=(1+y)^{-1}$. 还是有$f^{(2)}=2$，$f^{(\text{else})}=0$.
>
> 用定理得到
> $$
> \begin{aligned}
> h^{(n-1)}(0)&=\sum_{P}g^{(k)}(0)\prod_{i=1}^k f^{(|A_i|)}(0)\\\\
> &=\sum_{P}g^{(\frac{n-1}{2})}(0)\cdot2^{\frac{n-1}{2}}\\\\
> &=(-1)^{\frac{n-1}{2}}(\frac{n-1}{2})!\cdot2^{\frac{n-1}{2}}\left\{\begin{array}{lr}
> 0\,,\quad n\text{ is even}\\\\
> (n-2)!!\,,\quad n\text{ is odd}
> \end{array}\right.
> \end{aligned}
> $$
>
>得到最终结果$P^{(n)}(0)=h^{(n-1)}(0)$.

## 微分中值定理

Fermat 说过，极值点处的切线是水平的. Feynman 曾经利用这个捉弄过他的同学（艾神说的）.

/Definition/

> 称$x_0$是$f$的极大值点，如果存在$x_0$的开球邻域$U$，使得$f(x_0)\geq f(x)$，$\forall x\in U$.
>
> 极小值点同理.

/Claim/ （Fermat）

> 设$x_0$是$f$的极值点，若$f$在$x_0$处可导，则$f'(x_0)=0$.

/Proof/

> 不妨设$x_0$是极大值点，极小值点同理.
> $$
> \begin{aligned}
> f'(x_0+)=\underset{x\to x_0+}{\lim}\frac{f(x)-f(x_0)}{x-x_0}\leq0\\\\
> f'(x_0-)=\underset{x\to x_0-}{\lim}\frac{f(x)-f(x_0)}{x-x_0}\geq0
> \end{aligned}
> $$
> 而上面两个式子均等于$f'(x_0)$，因为$f$连续. 所以$f'(x_0)=0$.

证毕.

推论（单侧极值点）：若$\exist r>0$使得$f(x_0)\geq f(x)$，$\forall x_0\leq x\leq x_0+r$，且$f'(x_0+)$存在，则$f'(x_0+)\leq0$.

/Definition/ （critical point，临界点）

> 称$x$是$f$的临界点，如果$f'(x)$.
>
> 记$\text{Crit}(f)=\{f$的所有临界点$\}$，可以将 Fermat 定理重述为：
>
> 对可导函数$f$，$\{f$的极值点$\}\subseteq\text{Crit}(f)$.

/Theorem/ （Rolle's Theorem）

> 设$f$在$[a,b]$上连续，且在$(a,b)$上处处可导，若$f(a)=f(b)$，则$\exist c\in(a,b)$，使得$f'(c)=0$.

/Proof/ （使用最值定理）

> 由最值定理知，$f$在$[a,b]$上有最大值 & 最小值（统称为最值点）
>
> 若$\exist$一个最值点$c$位于$(a,b)$中，可知$c$是$f(x)$的极值点. 由 Fermat 的命题就得到$f'(c)=0$.
>
> 若$f$的所有最值点都不在$(a,b)$中，则一定在两点集合$\{a,b\}$中间. 又因为$f(a)=f(b)$，得到$\max f=\min f$，所以$f$是常值，还是一样的结论.

证毕.

::: tip -

假设你有一个很好的同桌，他画坐标轴画得很轻，在纸上画了一个 Rolle 定理的图，当他将这张纸递给你时，纸是歪着的，那么你就容易成为 Lagrange.
——艾神

:::

/Theorem/ （Lagrange 中值，微分中值定理）

> 设$f$在$[a,b]$上连续且在$(a,b)$上处处可导，则$\exist c\in(a,b)$使得
> $$
> f'(c)=\frac{f(b)-f(a)}{b-a}
> $$

/Proof/ （旋转坐标系）

> 令$g(x)$为
> $$
> g(x)=f(x)-(f(a)+\frac{f(b)-f(a)}{b-a}(x-a))
> $$
> 这相当于对比$f$ & 割线，有$g(a)=g(b)=0$，由 Rolle 定理知道$\exist g'(c)=0$，即证.

证毕.