---
title: Lesson 9
createTime: 2024/10/16 16:58:06
permalink: /integral/integral/ih4mtv5k/
---
# 高等微积分 Lesson 9

继续上一节课的证明：

/Example/

> 证明$\underset{x\to+\infty}{\lim}(1+\frac{1}{x})^x=e$.

/Proof/

> 对$\forall x>1$有
> $$
> \begin{aligned}
> &(1+\frac{1}{[x]+1})^{[x]}<(1+\frac{1}{x})^x
> <(1+\frac{1}{[x]})^{[x]+1}\\\\
> &f(x)<g(x)<h(x)
> \end{aligned}
> $$
> 有$\underset{x\to+\infty}{\lim}h(x)$满足这样的复合映射：
> $$
> (1,+\infty)\overset{p(x)=[x]}{\longrightarrow}\Z_+\overset{q}{\longrightarrow}\R
> $$
> $\underset{n\to+\infty}{\lim}q(n)=e$，且$\underset{x\to+\infty}{\lim}p(x)=+\infty$（符号正无穷），这自动满足修正1，所以$h(x)$的极限为$e$.
>
> 这实际上用到了一个我们之前没有叙述的复合极限定理版本，但是这个版本由上面的知识是显然的.
>
> 对于下界（$f(x)$），同样可以做上面的复合映射，这样就能通过夹逼定理得到极限$\underset{x\to+\infty}{\lim}g(x)=e$. （其实上一节课证明了下界的情况.）

证毕.

/Example/

> 证明$\underset{x\to-\infty}{\lim}(1+\frac{1}{x})^x=e$.
>
> 这里要进行说明，一个整数的任意次幂都是有定义的.

/Proof/

> 换元，令$y=-x$，当$x\to-\infty$时，$y\to+\infty$（符号正无穷），这时修正1自动成立.
>
> 接下来就可以使用复合极限定理，所求即为：
> $$
> \begin{aligned}
> \underset{y\to+\infty}{\lim}(1-\frac{1}{y})^{-y}&=\underset{y\to+\infty}{\lim}(\frac{y}{y-1})^y\\\\
> &=\underset{y\to+\infty}{\lim}(1+\frac{1}{y-1})^{y-1}(1+\frac{1}{y-1})
> \end{aligned}
> $$
> 之后可以进行换元$z=y-1$，但是实际上并没有必要了，可以显然地看出极限为$e$.

证毕.

上面两个 Example 统一写成：$\underset{x\to\infty}{\lim}(1+\frac{1}{x})^x=e$.

也可以表达为（换元$t=1/x$），得到：$\underset{t\to0}{\lim}(1+t)^{1/t}=e$. 这也是满足修正1的.

## 连续性

关注复合极限定理的修正2，我们当时引入这条修正时害怕$f(x)$定期不定期取为$y_0$，所以干脆要求$g(y_0)=z_0$，使得即使$f(x)$取为$y_0$也能满足复合极限为$z_0$.

在实际使用定理时，这种情况实际上更常见，我们有必要给这种函数进行一个命名，所以我们说：

/Definition/

> 设$f$在$x_0$的某个邻域中有定义，称$f$在$x_0$处是连续的，如果$\underset{x\to x_0}{\lim}f(x)=f(x_0)$.
>
> 用$\varepsilon-\delta$语言改写：$\forall\varepsilon>0$，$\exist\delta>0$，$\forall0<|x-x_0|<\delta$有$|f(x)-f(x_0)|<\varepsilon$.
>
> > $\varepsilon$，$\delta$有什么作用？只是用来表达距离而已，所以这相当于在$f(x_0)$和$x_0$处画了两个开球邻域.
> 
> 所以等价于：对$f(x_0)$的任何一个开球邻域$B_\varepsilon(f(x_0))$，都存在$x_0$的开球邻域$B_\delta(x_0)$，满足$f[B_\delta(x_0)]\subseteq B_\varepsilon(f(x_0))$.
> 
> > 还可以简化和一般化！
> 
> 对$f(x_0)$的任何邻域$V$，存在$x_0$的邻域$U$，使得$f[U]\subseteq V$.
> 
> 以上就是最一般的定义.

/Example/

> $\underset{x\to a}{\lim}\sin x=\sin a$，$\underset{x\to a}{\lim}\cos x=\cos a$，表明$\sin x$和$\cos x$在任何点$a$处连续.

/Claim/

> $e^x$在每点$x_0$处连续.

/Proof/

> 定义验证，证明$\underset{x\to x_0}{\lim}e^x=e^{x_0}$.
>
> > 等价于分别验证$\underset{x\to x_0-}{\lim}e^x=e^{x_0}$和$\underset{x\to x_0+}{\lim}e^x=e^{x_0}$.
> >
> > 只处理后者（前者等价）. $\forall\varepsilon>0$，取$n\in\Z_+$，
> >
> > > Draft：要证明$|e^x-e^{x_0}|<\varepsilon$，
> > > $$
> > > \begin{aligned}
> > > &\Longleftrightarrow e^x-e^{x_0}<\varepsilon\\\\
> > > &\Longleftrightarrow e^{x-x_0}-1<\frac{\varepsilon}{e^{x_0}}\\\\
> > > &\Longleftrightarrow e^{x-x_0}<\frac{\varepsilon}{e^{x_0}}+1
> > > \end{aligned}
> > > $$
> > > ::: info -
> > >
> > > “我们还不能使用对数，因为还没有反函数定理”
> > >
> > > ——艾
> > >
> > > :::
> > >
> > > 试图证明：
> > > $$
> > > e^{x-x_0}<e^\delta<e^{1/n}<1+\frac{\varepsilon}{e^{x_0}}
> > > $$
> > > 之后最右边一个不等式两边$n$次幂，再用二项式展开，可以发现下面的$n$和$\delta$的取法是合适的.
> >
> > 使得$n\frac{\varepsilon}{e^{x_0}}>e-1$，再取$0<\delta<1/n$，从而$\forall x_0<x<x_0+\delta$有：
> > $$
> > \begin{aligned}
> > &(1+\frac{\varepsilon}{e^{x_0}})^n\geq1+n\frac{\varepsilon}{e^{x_0}}>e\\\\
> > &\Longrightarrow e^{1/n}<1+\frac{\varepsilon}{e^{x_0}}
> > \end{aligned}
> > $$
> > 进而$|e^x-e^{x_0}|<\varepsilon$，右极限证毕.
> >
> > 左极限可以使用换元，或是同理证明.

证毕.

/Claim/

> 设$\underset{x\to x_0}{\lim}u(x)=A>0$，$\underset{x\to x_0}{\lim}v(x)=B$，则$\underset{x\to x_0}{\lim}u(x)^{v(x)}=A^B$.

/Proof/

> ::: info -
>
> “假设我现在又穿越到有$\ln$定义的时代.”
>
> ——艾
>
> :::
>
> 我们有$u(x)^{v(x)}=e^{v(x)\ln u(x)}$是复合$q(h(x))$，是这样的两个映射的复合：
> $$
> D\overset{h(x)=v(x)\ln u(x)}{\longrightarrow}\R\overset{q(y)=e^y}{\longrightarrow}\R
> $$
> 使用复合极限定理（修正2成立），还有下面的Claim，
>
> > /Claim/
> >
> > > $\underset{x\to x_0}{\lim}h(x)=B\ln A$.
>
> 得到$\underset{x\to x_0}{\lim}q(h(x))=A^B$.
>
> 下证使用到的Claim：
>
> /Proof/
>
> > 首先根据四则运算，$\underset{x\to x_0}{\lim}h(x)=\underset{x\to x_0}{\lim}v(x)\ln u(x)=B\underset{x\to x_0}{\lim}\ln u(x)$，只要证明$\underset{x\to x_0}{\lim}\ln u(x)=\ln A$.
> >
> > 又是复合极限——
> > $$
> > D\overset{u(x)}{\longrightarrow}\R_+\overset{L(y)=\ln y}{\longrightarrow}\R
> > $$
> > 由==**反函数定理**==（这个东西还没有证明！之后再证明）得到$L$在$\R_+$上连续，再使用复合极限定理，有$\underset{x\to x_0}{\lim}\ln u(x)=\ln A$.
>
> 证明完毕. 这个方法对比构造不等式的方法，显然要先进得多.

证毕.

回到连续性的话题：连续性的几何含义.

$f$在$x_0$处连续 $\Longleftrightarrow$ $\forall f(x_0)$处开球$B_\varepsilon(f(x_0))$，$\exist x_0$处开球$B_\delta(x_0)$使得$f[B_\delta(x_0)]\subseteq B_\varepsilon(f(x_0))$.

这个表述并不直观，考虑反过来说：

$f$在$x_0$处不连续 $\Longleftrightarrow$ $\exist f(x_0)$处开球$B_\varepsilon(f(x_0))$，$\forall x_0$处开球$B_\delta(x_0)$使得$f[B_\delta(x_0)]\not\subseteq B_\varepsilon(f(x_0))$.

也就是不管$x$离$x_0$多近，经过$f$映射之后都会变得远离，或者说$f$在$x_0$处“被撕开了”.

另一个解读是利用$f$的图像（graph，记作$\Gamma_f=\{(x,f(x))|x\in D\}$），这时$f$在$x_0$处不连续 $\Longleftrightarrow$ $\exist\varepsilon>0$，$\forall\delta>0$，$\exist|x-x_0|<\delta$，使得$|f(x)-f(x_0)|>\varepsilon$，具体表现为在图像上出现断点.

/Definition/ （整体连续性）

> 称$f:D\to\R$是$D$上的连续函数，<u>如果$f$在$D$的每点都连续.</u>

但这是有问题的（“[但这是错的.jpg](https://p.sda1.dev/19/828aef8d7b4bc7a2f09b045d33305942/但这是错的.jpg)” from 艾）. 回忆$f$在$x_0$处连续的定义，上面的定义还要要求$\forall x_0\in D$，$\exist B_r(x_0)\subseteq D$.

哪些$D$能满足这个要求呢？我们发现$D$如果是闭区间，这个要求就没有办法满足，所以上面的定义是不小心的.

我们应该这样下定义（这里用$\R^n$是为了之后使用多元微积分做准备）

/Definition/ （开集）

> 设$D\subseteq\R^n$，称$D$是$\R^n$的开集 $\Longleftrightarrow$ $\forall x_0\in D$，$\exist r>0$，使得$B_r(x_0)\subseteq D$，也就是说$D$包含其中每个点的某个开球邻域.

/Definition/ （开集的整体连续性）

> 设$D$是$\R^n$的开集（本学期$n=1$），称$f:D\to\R$是一个连续函数，记为$f\in C(D,\R)$（C是continuous的意思），如果$f$在$D$中每点处连续.

问：对一般的$D$，如何定义$f:D\to\R$连续？

在一维的情况下，有

/Definition/

> 设$f:[a,b]\to\R$，称$f$在$a$处右连续 $\Longleftrightarrow$ $\underset{x\to a+}{\lim}f(x)=f(a)$；称$f$在$b$处左连续 $\Longleftrightarrow$ $\underset{x\to b-}{\lim}f(x)=f(b)$.
>
> 定义$f\in C([a,b],\R)$为如下条件：
>
> 1. $f$在$x_0$处连续，$\forall x_0\in(a,b)$；
> 2. $f$在$a$处右连续；
> 3. $f$在$b$处左连续.