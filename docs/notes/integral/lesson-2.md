---
title: Lesson 2
createTime: 2024/09/18 13:44:02
permalink: /integral/integral/iaauxqrs/
---
# 高等微积分 Lesson 2

课堂开始，复习了一下上节课下课时的范畴定义.

作为范畴的一个例子，就是集合论. 在这个话题里，对象就是set，态射就是映射（$\text{Hom}_\mathscr{C}(X,Y)\leftrightarrow f:X\to Y$），态射的复合就是映射的复合，恒同态射就是恒同映射.

下一个例子是线性空间：对象就是$\R$上的线性空间，态射就是线性映射（$\text{Hom}_{\text{vect}}(V,W)\leftrightarrow f:V\to W$），态射的复合就是映射的复合.

之后的例子是微积分中更加关心的——拓扑空间. 这里的对象是拓扑空间，态射是连续映射，其他是类似的.

还有一个例子是可微空间. 对象是具有微分结构的空间（微分流形），态射是可微映射.

在接下来的课程中，我们会先在topology停留，之后进入可微空间，研究更深入的问题.

可以发现的是，引入范畴之后，不同的学科所关心的问题可以用同样一套语言来描写. 我们甚至可以把这些例子写得更多一些，比如群论，就是对象为群、态射为群同态的范畴.

范畴论的好处：

1. 用统一的语言叙述不同学科关心的内容.

2. 思路变化：研究某对象$X$，不再是用“解剖”的观点研究，而是把它放在由同类对象构成的范畴中去研究，通过研究它与<u>其他对象的关系</u>来获得它的信息. （“关系”即为$\text{Hom}_\mathscr{C}(X,Y)\,,\forall Y\in Obj(\mathscr{C})$）

   > “解剖”的观点：对于$X$，了解$X$的构成；
   >
   > “人际关系”的观点：对于$X$，了解$X$与别的对象的关系.
   >
   > Yoneda Lemma：若已知$\text{Hom}_\mathscr{C}(X,Y)\,,\forall Y\in Obj(\mathscr{C})$，则$X$唯一确定.

接下来回归正题.

## 集合与映射

定义了单射、满射和双射.

可是发现，这些定义都是用“解剖”的观点来写的，用映射的观点可以这样写：

1. $f$是单射$\Longleftrightarrow$$\exist g:Y\to X$使$g\circ f=id_X$.
2. $f$是满射$\Longleftrightarrow$$\exist g:Y\to X$使$f\circ g=id_Y$.

证明1.：

> RHS$\to$LHS，由$g(f(x))=x$，$\forall x$来证$f$单: 若有$f(x)=f(x')$，则$x=g(f(x))=g(f(x'))=x'$，得证.
>
> LHS$\to$RHS，设$f$单，$y\in\text{Im}f$（像集），所以原像集$f^{-1}(\{y\})$非空，而且因为单射，所以元素个数$|f^{-1}(\{y\})|\leq1$，是单点集. 所以可以定义$g(y)$：是$f^{-1}(\{y\})$的唯一元素（若$y\in\text{Im}f$）；是$x_0$（定值）（若$y\notin\text{Im}f$）. 得证.

证明2.：

> 类似上面.

**定理**	$f:X\to Y$是一个双射，当且仅当$\exist g:Y\to X$使$g\circ f=id_X$且$f\circ g=id_Y$.

上面定理的证明是作业题.

上面的定义因为不谈“解剖”结构，所以能应用在任何范畴中.

/Definition/

> 在范畴$\mathscr{C}$中，称态射$f\in\text{Hom}_\mathscr{C}(X,Y)$为一个同构（isomorphism），如果$\exist g\in\text{Hom}_\mathscr{C}(Y,X)$使$g\circ f=id_X$且$f\circ g=id_Y$.
>
> 称$\mathscr{C}$中两个对象$X$和$Y$同构（记为$X\cong Y$），如果存在一个同构.

**命题**	满足$g\circ f=id_X$且$f\circ g=id_Y$的$g$唯一.

/Proof/

> 若$g_1$和$g_2$均满足条件，则
> $$
> \begin{aligned}
> g_2&=id_X\circ g_2=(g_1\circ f)\circ g_2\\\\
> &=g_1\circ(f\circ g_2)=g_1\circ id_X=g_1
> \end{aligned}
> $$

证毕.

这时就把$g$写作$f^{-1}$，也就是$f$的逆态射（inverse）.

上面讲完了集合与映射的常用语言.

## 实数集

出于计数的目的，我们引入了自然数集.

/题外话/

> 一个自然数描述Set中彼此同构的一类对象.

$\N$上有加法和乘法，但是加法未必可逆，所以我们引入了负整数，构成了整数集$\Z$.

$\Z$上有乘法，但是乘法未必有逆元，所以我们引入了分数，扩充为有理数集$\mathbb{Q}$.

/题外话/

> 什么是单位？这里我们要从群和半群开始讲起.
>
> 定义：称$M$是一个半群，如果$M$上有一个“有单位且结合的二元运算”. 即，存在映射$m:M\times M\to M$，要求满足
>
> > 1. 结合律：$\forall a,b,c\in M$有$(ab)c=a(bc)$.
> > 2. $\exist$单位元$e\in M$，使$\forall a\in M$有$ea=ae=a$.

之后发现了无理数，想要扩充数集变得非常困难. 一开始人们“定义”实数是十进制的无限小数. 这会出现很多问题，比如加法根本没法算……

1872年，Dedekind定义实数.

/Definition/

> 一个Dedekind分割是指如下有序对$(A,B)$，要求它们满足如下条件：
>
> 1. $A,B\subset\mathbb{Q}$且$A,B\neq\varnothing$.
>
> 2. $A\cap B=\varnothing$且$A\cup B=\mathbb{Q}$.
>
> 3. 对任何$a\in A$及任何$b\in B$，有$a<b$.
>
> 4. $A$没有最大元素.
>
>    > 补充定义：对$A\subset\mathbb{Q}$，称$A$有最大元素，当且仅当$\exist a_0\in A$使$a_0\geq a$，$\forall a\in A$.

（其实意思是$A=(-\infty,a)\cap\mathbb{Q}$，$B=[a,+\infty)\cap\mathbb{Q}$.）

每一个Dedekind实数，就是一个Dedekind分割.

每个有理数$q\longrightarrow((-\infty,q),[q,+\infty))$.

大小关系（序）、加法和乘法定义在讲义12页.

此后我们的讨论中，$\R=\R_D$（Dedekind实数集）.

## 确界

/Definition/

> 设$E\subseteq\R$，称$a\in E$为$E$的最大元素，当且仅当$\forall x\in E$有$x\leq a$，记为$a=\max E$.

注意$\max E$未必存在.

类似可定义$\min E$.

/Definition/

> 称$c$是$E$的上界，当且仅当$\forall x\in E$有$x\leq c$.

同理定义下界.

/Definition/

> 设$E\subseteq\R$且$E$有上界，若$\{$E的上界$\}$有最小元素$s$，则称$E$有上确界，记为$s=\sup E$.

同理定义下确界$\inf E$.

**命题**	$c=\sup E$的充要条件是

1. $\forall x\in E$有$x\leq c$（$c$是$E$的上界）；
2. $\forall c'<c$，$\exist x\in E$使$x>c'$（比$c$小的$c'$皆不是$E$上界）.

证明是显然的，因为这就是定义.

**确界定理**	设$E$是$\R$的非空子集，若$E$有上界，则$E$有上确界. 下确界同理. （有上界的非空实数集必有上确界，下确界同理）.

/Proof/（用Dedekind实数定义）

> 记$E=\{X_\alpha=(A_\alpha,B_\alpha)$是Dedekind分割$\}$，$\alpha\in$指标集$I\neq\varnothing$.
>
> 已知$E$有上界$c=(A,B)$.
>
> 由$c$是$E$上界 $\Longrightarrow$ $x_\alpha\leq c$ $\Longrightarrow$ $A_\alpha\subseteq A$ $\Longrightarrow$ $\underset{\alpha\in I}{\bigcup}A_\alpha\subseteq A$.
>
> 令$s=(\underset{\alpha\in I}{\bigcup}A_\alpha,\mathbb{Q}-\underset{\alpha\in I}{\bigcup}A_\alpha)$，易验证$s=\sup E$.

证毕.