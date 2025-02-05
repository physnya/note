---
title: Lesson 8
createTime: 2024/10/11 13:51:42
permalink: /integral/integral/4n9oqj6x/
---
# 高等微积分 Lesson 8

## 函数极限

/Definition/

> （$\varepsilon-\delta$语言）$\underset{x\to a}{\lim}f(x)=L$ $\Longleftrightarrow$ $\forall\varepsilon>0$，$\exist\delta>0$，$\forall0<|x-a|<\delta$，有$|f(x)-L|<\varepsilon$.
>
> > 序列极限的定义叫做“$\varepsilon-N$语言”.

/Theorem/ （Heine）

> 上节课提到过，这个可以将序列极限的性质和函数极限的性质联系起来，把序列极限的性质“翻译”成函数极限.

/Claim/

> 充分近的$x$保持极限不等式.
>
> 设$\underset{x\to a}{\lim}f(x)<\underset{x\to a}{\lim}g(x)$，则$\exist\delta>0$，$\forall0<|x-a|<\delta$，有$f(x)<g(x)$.

/Claim/

> 极限不等式.
>
> 设$f(x)\leq g(x)$，$\forall x\in B_r(a)|\{a\}$，若$\underset{x\to a}{\lim}f(x)$，$\underset{x\to a}{\lim}g(x)$存在，则有$\underset{x\to a}{\lim}f(x)\leq\underset{x\to a}{\lim} g(x)$.

/Claim/

> 假设$\underset{x\to a}{\lim}f(x)$存在，则$f(x)$在==某个==$B_r(a)|\{a\}$中有界.
>
> > 注意：$f$并不在任何去心邻域中一定有界，只有去心邻域比较小的情况才成立.

/Proof/

> 由$\underset{x\to a}{\lim}f(x)=L$定义知，对$\varepsilon=1$，$\exist\delta>0$，$\forall x\in B_\delta(a)|\{a\}$有$|f(x)-L|<1$.
>
> $\Longrightarrow$ $L-1<f(x)<L+1$，$\forall x\in B_\delta(a)|\{a\}$.

证毕.

## 计算方法

1. 从定义验证
2. 四则运算
3. 夹逼Theorem
4. <u>复合极限定理</u>

### 四则运算

/Theorem/

> 函数极限与有限多次四则运算可换.

证明方法就是修改序列极限的相应证明方法.

第二种方法是用Heine Theorem：以除法为例.

/Proof/

> $\underset{x\to a}{\lim}\frac{f}{g}=\frac{A}{B}$ $\Longleftrightarrow$ $\forall\{x_n\neq a\}$且$\to a$有$\underset{n\to\infty}{\lim}\frac{f(x_n)}{g(x_n)}=\frac{A}{B}$ $(*)$.
>
> 由于$\underset{x\to a}{\lim}f(x)=A$，$\overset{\text{Heine}}{\Longrightarrow}$ $\underset{n\to\infty}{\lim}f(x_n)=A$，$\underset{x\to a}{\lim}g(x)=B$同理，再用序列极限的四则运算，就证明了$(*)$式.

证毕.

### 夹逼定理

/Theorem/

> 设$f(x)\leq g(x)\leq h(x)$，$\forall x\in B_r(a)|\{a\}$（存在$r$），若$\underset{x\to a}{\lim}f(x)=\underset{x\to a}{\lim}h(x)=L$，则$\underset{x\to a}{\lim}g(x)$存在且等于$L$.

### 一些例题

::: tip -

以上定理中$\underset{x\to a}{\lim}$可以换成$\underset{x\to a+}{\lim}$、$\underset{x\to a-}{\lim}$、$\underset{x\to+\infty}{\lim}$、$\underset{x\to-\infty}{\lim}$、$\underset{x\to\infty}{\lim}$，只需要将$a$的去心开球邻域这个条件相应地改为$(a,a+r)$、$(a-r,a)$、$(k,+\infty)$、$(-\infty,k)$和$(-\infty,+\infty)$即可. 所以之后只证明六种中的某一种，其他的相应替换条件就可以推理.

:::

/Example/

> $$
> \underset{x\to a+}{\lim}(x-a)^\alpha=\left\{\begin{array}{lr}
> 0,\quad \alpha>0\\
> 1,\quad \alpha=0\\
> \text{not exist},\quad \alpha<0
> \end{array}\right.
> $$
>
> 证明上述结论.

/Proof/

> 1. 当$\alpha>0$时，对于$\forall\varepsilon>0$，取$\delta$，则$\forall a<x<a+\delta$有
>    $$
>    (x-a)^\alpha<\delta^\alpha<\delta^{\frac{1}{m}}<\varepsilon
>    $$
>    只需取$\delta<\varepsilon^m$即可.
>
>    这表明$|(x-a)^\alpha-0|<\varepsilon$，$\forall a<x <a+\delta$，所以
>    $$
>    \underset{x\to a+}{\lim}(x-a)^\alpha=0\,,\quad\alpha>0
>    $$
>
> 2. 
>
> > 指数函数的单调性：
> >
> > 1. $x^\alpha$，$\alpha>0$，关于$x$严格递增.
> > 2. $x^\alpha$，$\alpha<0$，关于$x$严格递减.
> > 3. $a^x$，$a>1$，关于$x$严格递增.
> > 4. $a^x$，$0<a<1$，关于$x$严格递减.
>
> 2. 当$\alpha<0$时，记$\alpha=-\beta$（$\beta>0$），由上面的结论知，
>    $$
>    \underset{x\to a+}{\lim}(x-a)^\beta=0
>    $$
>    这样$\forall k>0$，$\exist\delta>0$使得$\forall a<x<a+\delta$有$|(x-a)^\beta-0|<1/k$，所以$\forall a<x<a+\delta$ 有 $(x-a)^\alpha=1/(x-a)^\beta>k$.
>
> > /Definition/
> >
> > > 称$\underset{x\to a}{\lim}f(x)=^"+\infty^"$，如果$\forall k>0$，$\exist\delta>0$，$\forall0<|x-a|<\delta$有$f(x)>k$，也就是“符号正无穷”.
> >
> > 注记：$\underset{x\to a}{\lim}f(x)$不存在是一个很大的概念，符号正无穷只是其中的一个子集. 而$\underset{x\to a}{\lim}f(x)$存在仅指$\underset{x\to a}{\lim}f(x)\in\R$.
> >
> > 为什么符号正无穷是极限不存在的一种呢？
> >
> > 因为若极限存在$\underset{x\to a}{\lim}f(x)=L$，这说明$\exist B_r(a)|\{a\}$使得$f$在其中有界$M$，也就是$\forall0<|x-a|<r$，有$f(x)\leq M$.
> >
> > 而符号正无穷的定义说，对上述$M$，$\exist\delta>0$，$\forall0<|x-a|<\delta$有$f(x)>M$. 出现矛盾，所以极限不存在.
>
> 3. 当$\alpha=0$时，略.

证毕.

/Example/

> $$
> \underset{x\to+\infty}{\lim}x^\alpha=\left\{\begin{array}{lr}
> 0,\quad\alpha<0\\
> 1,\quad\alpha=0\\
> \text{not exist},\quad\alpha>0
> \end{array}\right.
> $$

证明略.

/Example/

> $\underset{x\to a}{\lim}\sin x=\sin a$，$\underset{x\to a}{\lim}\cos x=\cos a$.

/Proof/

> 来证明前者. 为此$\forall\varepsilon>0$，取$\delta$.
>
> > 草稿：应用和差化积，
> > $$
> > \sin\alpha-\sin\beta=2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}
> > $$
> >
> > $$
> > \begin{aligned}
> > |\sin x-\sin a|&=|2\cos\frac{x+a}{2}\sin\frac{x-a}{2}|\\\\&\leq 2|\sin\frac{x-a}{2}|
> > \end{aligned}
> > $$
> >
> > > 引理：$\forall x\in\R$有$|\sin x|\leq |x|$.
> > >
> > > /Proof/
> > >
> > > > 当$|x|\geq 1$时自动成立. 又由两边均为偶函数，只需考虑$0<x<1$的区间，这个区间$\in(0,\pi/2)$.
> > > >
> > > > 这里要用到$\sin x$的几何含义，即单位圆扇形的面积大于所对应两半径夹成的三角形面积，小于大三角形面积，所以$\sin x<x<\tan x$.
> > > >
> > > > （<s>我不要画图！我不是在用$\LaTeX$啊！</s>）
> > > >
> > > > ::: details 下面内容相当抽象
> > > >
> > > > 有人可能会对上面数形结合的证明方法有意见，有没有不使用几何的证明方法呢？
> > > >
> > > > 答案是没有. 因为目前对于$\sin x$的定义是纯几何的.
> > > >
> > > > 再讲多一点，角的大小定义是什么？
> > > >
> > > > 你发现要引入弧的长度，然后要曲线积分了. 所以三角函数要到积分全部定义完全之后才能被良好地定义……
> > > >
> > > > :::
> > >
> > > 证毕.
> >
> > 可以取$\delta=\varepsilon$.
>
> $$
> |\sin x-\sin a|\leq2|\frac{x-a}{2}|<\delta=\varepsilon
> $$

证毕.

/Claim/ （第一个非平凡的极限）

> $$
> \underset{x\to0}{\lim}\frac{\sin x}{x}=1
> $$

/Proof/

> 先证右极限，为此用上述命题中的结论（也是几何法证明）：$x<\tan x$，即，
> $$
> \cos x<\frac{\sin x}{x}<1\,,\quad\forall x\in(0,\frac{\pi}{2})
> $$
> 夹逼定理知右极限为$1$.
>
> 注意到上面三个函数都是偶函数，左极限也同样有上述结论成立，得证.

证毕.

/Example/

> 求极限：
> $$
> \underset{x\to 0}{\lim}\frac{1-\cos x}{x^2}
> $$

/Solution/

> 用二倍角公式，$\cos 2x=1-2\sin^2 x$，那么有
> $$
> \begin{aligned}
> \text{LHS}&=\underset{x\to0}{\lim}\frac{2\sin^2\frac{x}{2}}{x^2}=\underset{x\to0}{\lim}(\frac{\sin\frac{x}{2}}{\frac{x}{2}})^2\cdot\frac{1}{2}\\\\
> &=\underset{y\to0}{\lim}(\frac{\sin y}{y})^2\cdot\frac{1}{2}=\frac{1}{2}
> \end{aligned}
> $$
> 得到答案为$1/2$.

### 复合极限定理

==以上用到“换元”的方法，我们有必要建立极限计算的换元方式！==

$\Longrightarrow$ **复合极限定理**

以上的换元可以改述成映射的复合：
$$
x\overset{f(x)=\frac{x}{2}}{\longrightarrow}y\overset{g(y)=\frac{\sin y}{y}}{\longrightarrow}\R
$$
发现，$g\circ f$这个复合映射的极限恰好就是我们想要的，所以我们来考虑复合映射的极限：$\underset{x\to x_0}{\lim}g(f(x))$.

/Theorem/

> 设$\underset{x\to x_0}{\lim}f(x)=y_0$，$\underset{y\to y_0}{\lim}g(y)=z_0$，则$\underset{x\to x_0}{\lim}g(f(x))=z_0$.

==但是，上面这个定理是错误的！❌❌❌❌❌❌！==

错误在于，$\underset{y\to y_0}{\lim}g(y)=z_0$只涉及在$y_0$去心邻域上的行为，与$g(y_0)$无关；但是$\underset{x\to x_0}{\lim}f(x)=y_0$说$f(x)$离$y_0$很近，这里就有两种理解，可能$f(x)=y_0$，也有可能$f(x)\neq y_0$. 若是后者，当然没问题；但是如果是前者，那么$g(f(x))$取值$y_0$，这就失去了跟踪.

/Theorem/

> 设$\underset{x\to x_0}{\lim}f(x)=y_0$，$\underset{y\to y_0}{\lim}g(y)=z_0$.
>
> 1. 修正方案1：若在$x_0$某去心邻域中总有$f(x)\neq y_0$，则$\underset{x\to x_0}{\lim}g(f(x))=z_0$.
> 2. 修正方案2：若$g(y_0)=z_0$，则有$\underset{x\to x_0}{\lim}g(f(x))=z_0$.

/Proof/ （证明就是将三句话接起来）

> 1. 对于方案1，$\forall\varepsilon>0$，由$\underset{y\to y_0}{\lim}g(y)=z_0$，的定义知$\exist\delta_1>0$，$\forall0<|y-y_0|<\delta_1$，则有$|g(y)-z_0|<\varepsilon$.
>
>    再由$\underset{x\to x_0}{\lim}f(x)=y_0$的定义知，对正数$\delta_1$，$\exist\delta>0$，$\forall0<|x-x_0|<\delta$有$|f(x)-y_0|<\delta_1$.
>
>    还有方案1导致的修正，使得$\forall0<|x-x_0|<\delta$，有$f(x_0)\neq y_0$，那么$0<|f(x)-y_0|<\delta_1$，$\forall x\in B_r(a)|\{a\}$.
>
>    代入可得，$|g(f(x))-z_0|<\varepsilon$，$\forall x\in B_r(a)|\{a\}$，证明了
>    $$
>    \underset{x\to x_0}{\lim}g(f(x))=z_0
>    $$
>
> 2. 这时将$\underset{y\to y_0}{\lim}g(y)$的定义修改为要求$\forall0\leq|y-y_0|<\delta_1$，有$|g(y)-z_0|<\varepsilon$. 而$\underset{x\to x_0}{\lim}f(x)$的定义不变，也可以保证成立.

证毕.

回到上面那一个例子：

/Solution/ （Version 2）

> $f(x)=x/2$（$\R|\{0\}\to\R|\{0\}$），$g(y)=\sin y/y$（$\R|\{0\}\to\R$），满足
>
> $\underset{x\to x_0}{\lim}f(x)=0$，$\underset{y\to0}{\lim}g(y)=1$，满足修正1.

==之后每次使用复合极限定理都不可缺少这一个步骤（验证修正1和修正2）！==

下面讲一个复合极限定理的另外版本，考虑这样的两个映射：
$$
\Z_+\overset{f}{\longrightarrow}\text{a set}\subseteq\R\overset{g}{\longrightarrow}\R
$$
这样可以把$g$变成一个数列.

/Claim/

> 设$\underset{n\to+\infty}{\lim}x_n=y_0$，$\underset{y\to y_0}{\lim}g(y)=z_0$. 也有两个修正方案.
>
> 1. 修正1：若$\exist N\in\Z_+$，使$\forall n\geq N$有$x_n\neq y_0$，则有$\underset{n\to+\infty}{\lim}g(x_n)=z_0$.
>
>    这实际上是Heine Theorem“$\Longrightarrow$”的那一半.
>
> 2. 修正2：若$g(y_0)=z_0$，则有$\underset{n\to+\infty}{\lim}g(x_n)=z_0$.

证明是完全类似的.

另外一个复合极限定理的版本：$\underset{x\to x_0}{\lim}f(x)=+\infty\overset{\text{marked as}}{=}y_0$（符号正无穷），$\underset{y\to y_0}{\lim}g(y)=z_0$，此时修正1自动成立.

/Claim/

> 若$\underset{x\to x_0}{\lim}f(x)=+\infty$，$\underset{y\to+\infty}{\lim}g(y)=z_0$，则有$\underset{x\to x_0}{\lim}g(f(x))=z_0$.

证明略.

回忆Euler的数，$\underset{n\to+\infty}{\lim}(1+\frac{1}{n})^n=e$. 这其中的$n$可以扩展为所有实数.

/Claim/ （第二个非平凡的极限）

> $$
> \underset{x\to\infty}{\lim}(1+\frac{1}{x})^x=e
> $$

/Proof/

> $\forall x>1$有（注意到$\forall x\in\R$有$[x]\leq x<[x]+1$）
> $$
> (1+\frac{1}{[x]+1})^{[x]}<(1+\frac{1}{x})^{[x]}\leq(1+\frac{1}{x})^{[x]+1}\leq(1+\frac{1}{[x]})^{[x]+1}
> $$
> 看下界极限，视为
> $$
> (1,+\infty)\overset{f(x)=[x]}{\longrightarrow}\Z_+\overset{g(n)=(1+\frac{1}{n+1})^n}{\longrightarrow}\R
> $$
> 则
> $$
> \begin{aligned}
> \underset{x\to+\infty}{\lim}(1+\frac{1}{[x]+1})^{[x]}&=\underset{x\to+\infty}{\lim}g(f(x))=\underset{y\to y_0}{\lim}g(y)\\\\
> &=\underset{n\to+\infty}{\lim}(1+\frac{1}{n+1})^n=e
> \end{aligned}
> $$
> 同时注意到$\underset{x\to+\infty}{\lim}f(x)=\underset{x\to+\infty}{\lim}[x]=+\infty=y_0$，符合上面那一个复合极限定理的版本，$f(x)\neq y_0$，修正1成立.
>
> 上界极限可以很容易地看出也为$e$，由夹逼定理，得证.

证毕.