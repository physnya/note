---
title: Lesson 3
createTime: 2024/09/20 13:15:26
permalink: /integral/integral/1tk0zvhi/
---
# 高等微积分 Lesson 3

先回顾一下上节课讲过的确界定理.

## 确界定理

对$E\in\R$定义$\sup E=E$的最小上界.

/Claim/

> $c=\sup E$ $\Longrightarrow$ $\forall x\in E$有$x\leq c$；$\forall c'<c$，$\exist x\in E$使$x>c'$.

/Theorem/

> <u>有上界</u>的<u>非空</u>实数集必有上确界；
> <u>有下界</u>的<u>非空</u>实数集必有下确界.

（实际上，如果不想考虑上面的一些知识的话，可把实数定义&确界定理当作微积分的基础）

/Proof/（用Dedekind实数定义）

> 记$E=\{X_\alpha=(A_\alpha,B_\alpha)$是Dedekind分割$\}$，$\alpha\in$指标集$I\neq\varnothing$.
>
> 已知$E$有上界$c=(A,B)$.
>
> 由$c$是$E$上界 $\Longrightarrow$ $x_\alpha\leq c$ $\Longrightarrow$ $A_\alpha\subseteq A$ $\Longrightarrow$ $\underset{\alpha\in I}{\bigcup}A_\alpha\subseteq A$.
>
> 令$s=(\underset{\alpha\in I}{\bigcup}A_\alpha,\mathbb{Q}-\underset{\alpha\in I}{\bigcup}A_\alpha)$，易验证$s=\sup E$.

证毕.

验证$s$是Dedekind分割：$s=(A_0,B_0)$.

> 1. $A_0\subseteq\mathbb{Q}$，$B_0\subseteq\mathbb{Q}$，$A_0\cup B_0=\mathbb{Q}$.
> 2. $A_0\neq\varnothing$（因为$A_0=\underset{\alpha\in I}{\bigcup}A_\alpha$，每个$A_\alpha\neq\varnothing$.）（这里用到$E$非空）
> 3. 由$A_0\subseteq A$ $\Longrightarrow$ $(A_0)^C\supseteq A^C$ $B_0\supseteq B\neq\varnothing$ $\Longrightarrow$ $B_0\neq\varnothing$. （这里用到$E$有上界）
> 4. $A_0=\underset{\alpha\in I}{\bigcup}A_\alpha$，$B_0=(\underset{\alpha\in I}{\bigcup}A_\alpha)^C=\underset{\alpha\in I}{\bigcap}(A_\alpha)^C=\underset{\alpha\in I}{\bigcap}B_\alpha$. （这里用到“并集之补集等于补集之交集”）
>    $\forall a\in A_\alpha$，$\forall b\in B_\alpha$，由$a\in A_0=\underset{\alpha\in I}{\bigcup}A_\alpha$ $\Longrightarrow$ $a\in A_\alpha$，同理$b\in B_0=\underset{\alpha\in I}{\bigcap}B_\alpha$ $\Longrightarrow$ $b\in B_\alpha$，这就可以知道$a<b$.
> 5. $A_0$无最大元素：$\forall a\in A_0$ $\Longrightarrow$ $a\in A_\alpha$，由$A_\alpha$无最大元$\Longrightarrow$ $\exist a'\in A_\alpha$使$a'>a$.

验证$s=\sup E$：

> 注意任何$\tilde{c}=(\tilde{A},\tilde{B})\in\R_D$是$E$的上界，有$\tilde{c}\geq x_\alpha$，$\forall \alpha\in I$，即$\tilde{A}\supseteq A_\alpha$，即$\tilde{A}\supseteq\underset{\alpha\in I}{\bigcup}A_\alpha=A_0$，所以$\tilde{c}\geq s$，证毕.

称确界定理描述了实数的完备性. （实际上，完备性指的是“$\R$中任何Cauchy列必有极限”，但是现在还不讲）

简单的应用是证明如下几句话：

1. $\forall x\in\R$，$\exist n\in\Z$使$n>x$.
2. 任意两个实数之间必有$\infty$个有理数.
3. 任意两个有理数之间必有$\infty$个无理数.

/Proof/ 1.

> 反证法，假设每个$n\in \Z$都有$n\leq x$，则$x$是$\Z$的上界，由确界定理知道$\Z$有上确界$M$. 进而$\forall n\in\Z$，$n+1\in\Z$，有$n+1\leq M$，也就是$n\leq M-1$，表明$M-1$也是$\Z$的上界，与$M$是上确界（最小上界）矛盾.
>
> 所以假设不成立，1.成立.

证毕.

/Proof/ 2.

> 显然只需证明$(*)$式：$\forall$实数$a<b$，$(a,b)$中有一个$c\in\mathbb{Q}$.
>
> 这之后就可以反复应用上面的$(*)$式来证明$(a,b)$中存在$\infty$个有理数.
>
> 接下来来证$(*)$. 想法是找一个“机器人”，从数轴左边往右走，只要其步长$1/n<b-a$，就必定会掉入$(a,b)$这一“陷阱”中. 这里可以发现$n>1/(b-a)$.
>
> 用1.知$\exist n\in\Z$使$n>1/(b-a)>0$；
>
> > 草稿：起始点$s/n<a$，即$s<an$，$-s>-an$.
> > 终点$t/n>b$，$t>nb$.
>
> 用1.知$\exist u\in\Z$使$u>-an$，令$s=-u\in\Z$ $\Longrightarrow$ $-s>-an$ $\Longrightarrow$ $s/n<a$.
>
> 用1.知$\exist t\in\Z$使$t>nb$ $\Longrightarrow$ $t/n>b$.
>
> 对于$s$，$s+1$，$\cdots$，$t$中的每个数$k$，标记$k/n\leq a$为❌，$k/n>a$为✔，则一定存在首个✔，记为$k_0$.
>
> 这样$k_0/n>a$，$(k_0-1)/n\leq a$，且有
> $$
> \frac{k_0}{n}=\frac{k_0-1}{n}+\frac{1}{n}<a+(b-a)=b
> $$
> 这就证明了$k_0/n\in(a,b)\cap\mathbb{Q}$.

证毕.

/Proof/ 3.

> 利用2.结论，$(a-\sqrt2,b-\sqrt2)$中存在$\infty$个有理数，记为$x$. 利用$\sqrt2$是无理数，$(a,b)$中存在$y=x+\sqrt2$，是无理数且有$\infty$个.

证毕.

$\mathbb{Q}$和$\mathbb{Q}^C=\R-\mathbb{Q}$都是无限集，是否能进一步比较多少？

/Definition/

> 称集合$A$与$B$等势，当且仅当$\exist$双射$f:A\to B$.

/Definition/

> 称集合$A$是可数的，如果$A$与$\Z_+$等势.

/Claim/

> 可数多个可数集之并仍可数.

/Proof/

> 设$A_1$，$A_2$，$\cdots$是可数多个可数集，由$A_i$可数，可以设$A_i=\{x_{i,1},x_{i,2},\cdots\}$. 可以将$\underset{i=1}{\overset{\infty}{\bigcup}}A_i$的元素分类为下标和相同的组，这种排列可数.

证毕.

/Claim/

> $\mathbb{Q}$可数.

/Proof/

> $\mathbb{Q}=\underset{i=1}{\overset{\infty}{\bigcup}}\{\frac{m}{n}|m\in\Z\}=\underset{i=1}{\overset{\infty}{\bigcup}}A_i$. $A_i$可数.

证毕.

/Theorem/ （Cantor）

> $\R$不可数（因为$\mathbb{Q}$可数，所以这实际上可以推出$\mathbb{Q}^C$不可数）.

/Proof/ （Cantor对角线法则）

> Cantor证明这个定理时还没有Dedekind分割定义，所以他使用的是无穷小数的定义. 考虑证明一个更强的结论，$[0,1]$不可数. 把区间中的数表示为无穷小数，采用反证法：假设这些小数分别是
> $$
> x_1=\overline{0.x_{11}x_{12}x_{13}\cdots}\\
> x_2=\overline{0.x_{21}x_{22}x_{23}\cdots}\\
> x_3=\overline{0.x_{31}x_{32}x_{33}\cdots}
> $$
> 我们要求一个这样的数$x_m$存在，满足：
> $$
> x_{m1}\neq x_{11}\,,\quad x_{m2}\neq x_{22}\,,\quad x_{m3}\neq x_{33}\,,\cdots
> $$
> 这样就保证了$x_m$不等于上面列表中的任何一个数，从而导出了矛盾：不管数出多少个$[0,1]$之间的数，都能找到一个数不在这个列表中，故假设不成立，不可数.

/Moreover/

> /Definition/
>
> > $X$是$\R$的稠密子集，当且仅当$\forall x\in\R$，$\forall\varepsilon\in\R_+$使$(c-\varepsilon,c+\varepsilon)\cap\R\neq\varnothing$，其中$c\in\R$.
>
> /Claim/
>
> > $\mathbb{Q}$是$\R$的稠密子集.

