---
title: Lesson 1
createTime: 2024/10/22 23:04:24
permalink: /integral/integral/7cui661p/
---
# 高等微积分 Lesson 1

~~这节课的内容似乎非常简单……但是我已经把电脑打开了，就当练习一下打字和markdown吧.~~

我收回，他开始讲范畴了(´。＿。｀)

## 微积分的起源

Archimedes，想要求一个不规则图形的面积. 当时他计算的是抛物线$y=x^2$下方、$x=a$左侧的面积. 他想到的办法是竖直剖分这个图形，每一个细长条近似为一个矩形，那么这个图形的不规则性就得到了缓解. 有
$$
\begin{aligned}
S&=\sum_{i=1}^n\frac{a}{n}(\frac{ia}{n})^2=\frac{a^3}{n^3}\sum_{i=1}^ni^2\\\\
&=\frac{a^3}{n^3}\cdot\frac{1}{6}n(n+1)(2n+1)\\\\
&=\frac{1}{6}a^3(2+\frac{3}{n}+\frac{1}{n^2})\\\\
\end{aligned}
$$
当$n\to\infty$时，这个面积值越来越趋近于一个常数，有
$$
\begin{aligned}
S=\lim_{n\to\infty}\frac{1}{6}a^3(2+\frac{3}{n}+\frac{1}{n^2})=\frac{1}{3}a^3\\\\
\end{aligned}
$$
由此，Archimedes认为，不同的表达式能得到相同的一个极限值，这说明开始虽然用了近似，但是最后我们得到的结果是一个确定的精确值.

我们也可以对$k$次函数做同样的事：
$$
\begin{aligned}
S=\sum_{i=1}^n\frac{a}{n}(\frac{ia}{n})^k=\frac{a^{k+1}}{n^{k+1}}\sum_{i=1}^ni^k\\\\
\end{aligned}
$$
/题外话/

> 有一个性质：立方之和等于和的平方.

我们很可惜地发现，$k$值越来越大，没有一般的表达式了，手算的难度也越来越大. Archimedes当年正是停在了这个地方.

过了1000多年，Newton重新开始研究这个问题. 他总结Archimedes做过的工作是“已知高度函数$h(x)$，要求面积$S(a)$.”

Newton决定反过来问这个问题：“已知面积$S(a)$，要求高度函数$h(x)$.”

Newton让$a$“流动”一点$o$，考察$S(a)$的变化，就得到$h(a)$. 这就有
$$
\begin{aligned}
h(x)=\frac{S(x+o)-S(x)}{o}\\\\
\end{aligned}
$$
考虑如下例子：（用到Newton的二项式公式）
$$
\begin{aligned}
&S(x)=x^m\,(m\in\Z_+)\\\\
&h(x)=\frac{S(x+o)-S(x)}{o}=\frac{\sum_{k=0}^mC^k_mx^{m-k}o^k-x^m}{o}\\\\
&o\to0\Longrightarrow h(x)\to mx^{m-1}\\\\
\end{aligned}
$$
这是Newton流数法.

==Newton的结果实际上回答了Archimedes的疑问，即假如$h(x)=mx^{m-1}$，就可以很容易地得到$S(x)=x^m$，这个运算是互逆的，而Newton的问题更好解决.==

至此，我们能够得到更一般的关系.
$$
\begin{aligned}
S(x)=\int_0^ah(x)\text{d}x\\\\
\end{aligned}
$$
这也就是积分，之前的流数法实际上就是求导，以上这两个过程是互逆的. 也就是说，
$$
\begin{aligned}
(\int_0^xh(x')\text{d}x')'&=h(x)\\\\
\int_0^xS'(x')\text{d}x'&=S(x)-S(0)\\\\
\end{aligned}
$$
上面是**微积分基本定理**.

到这里我们实际上已经学完了微积分的内容，包括：极限理论、导数、积分、导数与积分的关系.

## 集合与映射

国内教材有时不强调集合与映射的语言，这其实不好，因为实际上“变元”之类的东西根本没法定义.

（一段批判中学教材改革的话……）

/Definition/

> 设$X,Y$是集合，所谓一个$X$到$Y$的映射（记为$f:X\to Y$）是指：对每个$x\in X$，标定唯一一个$Y$的元素（记为$f(x)$）与$x$对应. 称上述与$x$对应的$Y$的元素为$x$在$f$下的像.

有四个重要的内容：（课上说是五个，实际上第一个是映射的定义）

1. （映射的复合）设$f:X\to Y$，$g:Y\to Z$，则定义复合映射为$g\circ f:X\to Z$为$(g\circ f)(x)=g(f(x))$，$\forall x\in X$.

   > 注意：复合映射有顺序，在内侧的映射被更早执行.

2. （复合的结合律）映射的复合具有结合律，即$h\circ(g\circ f)=(h\circ g)\circ f$. 这是自明的.
3. （恒同映射）对集合$X$，有恒同映射$id_X:X\to X$. （identity的缩写）指的是每个元素都映射到自己本身.
4. 恒同映射是复合的单位. 对$\forall f:X\to Y$，有$id_X\circ f=f\circ id_X=f$.

集合与映射构成一个“世界”，或者说**范畴**（Set）.

快下课了，讲一点娱乐性的内容：范畴的定义.

所谓一个范畴（category）$\mathscr{C}$由如下data构成：

1. 给明$\mathscr{C}$的对象（object），集合$Obj(\mathscr{C})$，称$Obj(\mathscr{C})$的元素为$\mathscr{C}$的对象.
2. 对$\forall X,Y\in Obj(\mathscr{C})$，有一个集合$\text{Hom}_\mathscr{C}(X,Y)$，称$\text{Hom}_\mathscr{C}(X,Y)$每个成员$f$为一个从$X$到$Y$的态射，记为$f:X\to Y$.
3. 态射可复合，对$\forall X,Y,Z\in Obj(\mathscr{C})$有映射$\text{Hom}_\mathscr{C}(X,Y)\times\text{Hom}_\mathscr{C}(Y,Z)\to\text{Hom}_\mathscr{C}(X,Z)$. 也就是$(f,g)\to g\circ f$，两个态射唯一地决定一个复合态射.
4. 态射的复合是结合的，即$\forall f\in\text{Hom}(X,Y)$，$g\in\text{Hom}(Y,Z)$，$h\in\text{Hom}(Z,W)$，有$h\circ(g\circ f)=(h\circ g)\circ f$.
5. $\forall X\in Obj(\mathscr{C})$有恒同态射$id_X\in\text{Hom}(X,X)$，满足$\forall f\in\text{Hom}(X,Y)$有$f\circ id_X=id_X\circ f=f$.

$f:X\to Y$，此记号开始于1944年，此记号引发范畴论.
