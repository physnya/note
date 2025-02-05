---
title: Lesson 15
createTime: 2024/11/06 15:22:30
permalink: /integral/integral/vwpsibfe/
---
# 高等微积分 Lesson 15

## 微分

Leibiniz 为导数设计了一个符号$f'(x)=\frac{\text{d}f}{\text{d}x}$，他希望将导数解释为微分之商，当然我们在之后的学习中会发现这种方式有不妥之处.

回忆$f$在$x_0$处可导的条件，是
$$
\begin{aligned}
&\exist\underset{h\to0}{\lim}\frac{f(x_0+h)-f(x_0)}{h}\\\\
&\Longleftrightarrow\exist A\in\R\,,\quad\underset{h\to0}{\lim}\frac{f(x_0+h)-f(x_0)}{h}=A\\\\
&\Longleftrightarrow\exist A\in\R\,,\quad \underset{h\to0}{\lim}\frac{f(x_0+h)-f(x_0)-h\cdot A}{h}=0\\\\
&\Longleftrightarrow\exist A\in\R\,,\quad f(x_0+h)=f(x_0)+Ah+\alpha(h)\,,\quad \underset{h\to0}{\lim}\frac{\alpha(h)}{h}=0
\end{aligned}
$$
虽然上面这几种表述方式都是等价的，但是我们认为最后一种表述方法更加直观. 在这种表达方式中，$\alpha(h)$是一个“误差项”，因为它相对于其他的项是显著小的，我们有理由称之为“误差”；同时上面还存在一个线性项$Ah$，这就是我们在求导数时希望找到的.

由上面的讨论，我们能够定义微分：

/Definition/

> 设$f$在$x_0$的某个邻域有定义，称$f$在$x_0$处可微，如果存在线性函数$L:\R\to\R$（$L(h)=Ah$，$\forall h$）使得$f(x_0+h)=f(x_0)+Lh+\alpha(h)$，且有
> $$
> \underset{h\to0}{\lim}\frac{\alpha(h)}{h}=0
> $$
> 并称满足以上条件的唯一的$L$为$f$在$x_0$处的微分，记作
> $$
> \text{d}f_{x_0}:\R\to\R
> $$

/Claim/

> $f$在$x_0$处可微 $\Longleftrightarrow$ $f$在$x_0$处可导；
>
> 进一步，若$f$在$x_0$处可微，则有$\text{d}f_{x_0}(h)=f'(x_0)h$，$\forall h\in\R$.

对于一元函数，上面的命题显然成立，这一点我们在上面已经说明了，可以发现，一元函数的“可微”、“可导”等价，而且都是“连续”的充分条件.

但是对于多元函数，“可微”能得到“可导”，反过来却不一定成立；同时这时“可微”才能得到“连续”. 所以说，“可微”是更加基本/更好的一个概念.

为什么“可微”更好？

> 这些概念都是在研究$f(x_0+h)$（$f$在$x_0$附近的行为），一旦$f$在$x_0$附近可微，就能直接知道$f(x_0+h)\approx f(x_0)+L(h)$，可以将$f$近似为线性（一次函数），完全变成线性代数的内容.
>
> 就算我们不满意一阶近似，我们还可以使用 Taylor 公式进行展开，产生二次型、三次型……这些仍然是线性代数的内容（tenser）.

目前我们已经定义了逐点的可微性，接下来考虑整个定义域上的可微性：

/Definition/

> 称$f$在$D$上可微，如果$f$在$D$上的每点可微.
> （对于一元函数，在$D$上可微 $\Longleftrightarrow$ 在$D$上可导；对于多元函数，可微强于可导.）
>
> 进一步，若$f$在$D$上处处可微，$\{\text{d}f_{x_0}:\R\to\R\}_{x_0\in D}$是一族线性映射，称之为$f$的微分，简记为$\text{d}f$.

“微分”概念更加偏向代数化，其几何图像不明显；我们考虑空间中的每一个点，都对应自己的一族微分，这构成所谓的“切空间”（<s>你又开始讲微分几何了</s>），实际上微分就是从切丛到切丛的线性映射.

已经对$\text{d}f$给出了定义，我们接下来考虑一些例子.

/Example/ （$\text{d}x$的定义）

> 考虑恒同映射$\text{id}_\R:\R\to\R$（更早的时期，人们还不会使用映射的语言，就把这个映射写成函数$x$）
>
> 其微分为$\text{d}(\text{id}_\R)_{x_0}:\R\to\R$，或者写成$\text{d}x:\R\to\R$，而这两个映射都是将$h$映射为$h$（$\forall h\in\R$）.
>
> 这样我们能够来改写一些微分. 对可微的$f$，
> $$
> \begin{aligned}
> \text{d}f_{x_0}(h)=&f'(x_0)h=f'(x_0)(\text{d}x)_{x_0}(h)\\\\
> \Longrightarrow\text{d}f_{x_0}&=f'(x_0)\text{d}x_{x_0}
> \end{aligned}
> $$
> 这是一个作为线性映射的等式. 这样就实现了 Leibiniz 最初的想法，即将导数写成两个微分之商. 如果没有那么小心，我们现在就能写出
> $$
> f'(x_0)=\frac{\text{d}f_{x_0}}{\text{d}x_{x_0}}
> $$
> 但是要发出质疑：这样在概念上并不恰当. 一般而言，取两个线性映射，它们成比例的概率是很小的；这里因为两者均是在一元的情况下讨论，所以可以谈及比例系数，否则根本无法定义“商”.

总结一下：我们定义了$f$在$x_0$处的微分（也即$f$在$x_0$附近的线性近似），还证明了$\text{d}f_{x_0}:\R\to\R$的矩阵表示就是$(f'(x_0))_{|x|}$（在$f:\R^m\to\R^n$时这将是一个$m\times n$的矩阵，但是现在它只是一个$1\times1$的矩阵）.

现在我们来证明之前跳过的链式法则. 对于复合映射，有
$$
\begin{aligned}
&\R\overset{f}{\longrightarrow}\R\overset{g}{\longrightarrow}\R\\
&\R\overset{\text{d}f_{x_0}}\longrightarrow\R\overset{\text{d}g_{f(x_0)}}\longrightarrow\R\\
&\xrightarrow{\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{d}(g\circ f)_{x_0}\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }\text{ }}
\end{aligned}
$$
这样，在线性映射的意义上，我们确定了复合映射的微分.

/Theorem/ （复合的微分等于微分的复合，or to say，线性近似保持复合）

> 设$f$在$x_0$处可微，$g$在$f(x_0)$处可微，则$g\circ f$在$x_0$处可微，且
> $$
> \text{d}(g\circ f)_{x_0}=\text{d}g_{f(x_0)}\circ\text{d}f_{x_0}
> $$

用微分写出这个定理，就能发现至少从直观的角度，比之前的链式法则写法要好证明很多，因为甚至可以把两个线性映射都写出来证明.

/Proof/

> 记$\text{d}f_{x_0}(h)=Ah$（其中$A=f'(x_0)$），$\text{d}g_{f(x_0)}(v)=Bv$（其中$B=g'(f(x_0))$），由可微的定义，
> $$
> \begin{aligned}
> &f(x_0+h)=f(x_0)+Ah+\alpha(h)\,,\quad\underset{h\to0}{\lim}\frac{\alpha(h)}{h}=0\\\\
> &g(f(x_0)+v)=g(f(x_0))+Bv+\beta(v)\,,\quad\underset{v\to0}{\lim}\frac{\beta(v)}{v}=0
> \end{aligned}
> $$
> 从而，
> $$
> \begin{aligned}
> g\circ f(x_0+h)&=g(f(x_0)+Ah+\alpha(h))\\\\
> &=g(f(x_0))+B(Ah+\alpha(h))+\beta(Ah+\alpha(h))\\\\
> &=g(f(x_0))+BAh+[B\alpha(h)+\beta(Ah+\alpha(h))]
> \end{aligned}
> $$
> 接下来只要证明这样的命题，整个定理就得证：
>
> /Claim/
>
> > $$
> > \underset{h\to0}{\lim}\frac{B\alpha(h)+\beta(Ah+\alpha(h))}{h}=0
> > $$
>
> /Proof/
>
> > 首先，极限中的第一项由定义就知道为$0$. 接下来只需要证明
> > $$
> > \underset{h\to0}{\lim}\frac{\beta(Ah+\alpha(h))}{h}=0
> > $$
> > 定义$p(h)=Ah+\alpha(h)$，定义$q(v)$如下：
> > $$
> > q(v)=\left\{\begin{array}{lr}
> > \frac{\beta(v)}{v}\,,\quad v\neq 0\\\\
> > \underset{v\to0}{\lim}\frac{\beta(v)}{v}\,,\quad v=0
> > \end{array}\right.
> > $$
> > 则$q$在$0$处连续，这符合复合极限定理的修正2，由复合极限定理，
> > $$
> > \underset{h\to0}{\lim}q(p(h))=0
> > $$
> > 再使用极限的四则运算，得到
> > $$
> > \begin{aligned}
> > \underset{h\to0}{\lim}q(p(h))\frac{p(h)}{h}&=\underset{h\to0}{\lim}q(p(h))\cdot\underset{h\to0}{\lim}\frac{Ah+\alpha(h)}{h}\\\\
> > &=\underset{h\to0}{\lim}0\cdot(A+0)\\\\
> > &=0
> > \end{aligned}
> > $$
> > 同时注意到，
> > $$
> > q(p(h))\frac{p(h)}{h}=\left\{\begin{array}{lr}
> > \frac{\beta(p(h))}{p(h)}\frac{p(h)}{h}=\frac{\beta(Ah+\alpha(h))}{h}\,,\quad p(h)\neq0\\\\
> > 0\cdot\frac{p(h)}{h}=0=\frac{\beta(Ah+\alpha(h))}{h}\,,\quad p(h)=0
> > \end{array}\right.
> > $$
> > 这个式子永远都是我们本来需要的那个函数，这就得到了 Claim 的证明.
>
> 证毕.
>
> 这就说明$g\circ f$在$x_0$处可微，且微分为$\text{d}(g\circ f)_{x_0}(h)=BAh$. 也就是说，
> $$
> \text{d}(g\circ f)_{x_0}=\text{d}g_{f(x_0)}\circ\text{d}f_{x_0}
> $$

证毕.

这种证明方式的好处是，我们证明多元函数的相应定理只需要把$h$和$v$换成粗体就行，本质是完全一致的.

<s>老师说他在写讲义的$\LaTeX$的时候就是这么干的.</s>

这个定理直接得到 Chain Rule：
$$
((g\circ f)'(x_0))_{|x|}=(g'(f(x_0)))_{|x|}(f'(x_0))_{|x|}
$$
上面的定理将 Chain Rule 从求导数的角度直接提升到了线性映射的高度，之后可以自然地衔接到 Jacobi 行列式等内容.

## 反函数求导

回忆反函数定理，若$f:D\to\R$是连续单射，则$f^{-1}:f[D]\to D$也连续.

问：若$f$可导，是否$f^{-1}$也可导？

我们仍然用线性近似的思维来考虑，发现$f^{-1}$也是可导的.

/Theorem/ （逆映射的微分等于微分之逆）

> 设$f:D\to\R$是连续单射，$f$在$x_0$处可导，则$f^{-1}$在$f(x_0)$处可导，且
> $$
> (\text{d}f^{-1})_{f(x_0)}=(\text{d}f_{x_0})^{-1}
> $$
> 其中 RHS 表示线性映射的逆映射. 当然有要求，$\text{d}f_{x_0}$不能是$0$.

注意：多元映射，上述结果==远非==平凡，称之为“反函数定理”，我们到时可能要证明三个小时.

/Proof/ （只适用于$1$维）

> 来证明$f^{-1}$在$f(x_0)$处可导，只需证明极限存在：
> $$
> (f^{-1})(f(x_0))=\underset{y\to f(x_0)}{\lim}\frac{f^{-1}(y)-f^{-1}(f(x_0))}{y-f(x_0)}
> $$
> 做换元：$f^{-1}(y)=x$，由于已经证明了$f^{-1}(x)$连续，所以当$y\to f(x_0)$时，有$f^{-1}(y)\to f^{-1}(f(x_0))=x_0$，这里复合极限定理的修正1成立.
>
> 所以上式等于：
> $$
> \underset{x\to x_0}{\lim}\frac{x-x_0}{f(x)-f(x_0)}=\frac{1}{\underset{x\to x_0}{\lim}\frac{f(x)-f(x_0)}{x-x_0}}=\frac{1}{f'(x_0)}
> $$
> 这里用到$f'(x_0)\neq0$.

这里有一个推论：
$$
(f^{-1})'(f(x))=\frac{1}{f'(x)}\,,\quad(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}
$$
