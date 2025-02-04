---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 1
createTime: 2024/11/04 18:17:41
permalink: /Feynman-III/Feynman-III/956bau6f/
---
## 2024-11-04

希望大家从考试中学到一些东西$\longrightarrow$这说的就是我.

回顾上节课的知识：氨分子有上下两个态，但是真正的能量本征态是上下两个态的混合$\ket{\pm}$.

其中上下两个态的 Hamiltonian 是
$$
H=\begin{pmatrix}
E&-A\\-A&E
\end{pmatrix}
$$
当然在$\pm$态下这个 Hamiltonian 会变成对角的.

然后不考虑一些振动能级的原因是这里存在尺度分割，能级之间的量级差异很大.

我们的目的是用这个性质做一个微波激射器（MASER），我们先考虑将这些氨分子放进静电场中去，之后我们再来考察放到电磁波（有一定频率的电磁场）中. 当频率一致时可能发生共振，在这样的振动中，我们可以控制频率使得每一次能量都被彻底地从电磁场传到氨分子上.

这里可能会碰到两个问题：一是要能控制频率；二是要把这些原子分子提前激发到很高能级. 当我们在后面讨论激光时，我们一般会使用三能级的系统：粒子先被激发到很高的能级上，之后通过一定机制让其更容易落到另外两个能级里面更高的一个，产生振荡.

先来讨论一下静电场：我们将电场写成花体以区分能量，$\Delta H=-\mu\mathscr{E}$，得到新的 Hamiltonian：
$$
H=\begin{pmatrix}
E+\mu\mathscr{E}&-A\\-A&E-\mu\mathscr{E}
\end{pmatrix}\Longrightarrow\begin{pmatrix}
E+\sqrt{A^2+\mu^2\mathscr{E}^2}&0\\0&E-\sqrt{A^2+\mu^2\mathscr{E}^2}
\end{pmatrix}
$$
后面一步是在对角化，这等价于求一个本征值问题. 我们能发现这样的性质：当电场变小的时候，回到原来的结果；而且初始能级差如果很大，后面还会越来越大，不可能混合.

在上面这样的条件下，氨分子会慢慢地全部移动到上态去，这时我们缓慢地撤去电场，氨分子还是会待在这个上态上（这个变化是 adiabatic 的）. 这样我们就达到了将分子移动到某一个态的目的.

接下来我们讨论随时间变化的电磁场. 在这一部分，Feynman 显式的告诉了我们该如何做一个好的近似（就像四字常说的，在考虑地球轨道万年进动的时候忽略地球每年的公转）. 这里给出，$\mathscr{E}=\mathscr{E}_0(e^{i\omega t}+e^{-i\omega t})$，此时 Schrodinger 方程：
$$
i\hbar\begin{pmatrix}
\dot{C}_+\\\dot{C}_-
\end{pmatrix}=\begin{pmatrix}
E-A&\mu\mathscr{E}\\\mu\mathscr{E}&E+A
\end{pmatrix}\begin{pmatrix}
C_+\\C_-
\end{pmatrix}
$$
在没有外场的情况下，$C_{\pm}=\gamma_{\pm} e^{-i(E_\pm/\hbar)t}$，$E_{\pm}=E\mp A$. 用摄动法来思考，振幅会随时间进行缓慢地变化，代入方程就得到
$$
\begin{aligned}
E_\pm\gamma_\pm+i\hbar\dot{\gamma}_\pm&=E_\pm\gamma_\pm+\mu\mathscr{E}\gamma_\mp e^{+i(E_--E_+)t/\hbar}\\\\
i\hbar\dot{\gamma}_\pm&=\mu\mathscr{E}_0[e^{i(\omega\mp\omega_0)t}+e^{i(\omega\pm\omega_0)t}]\gamma_\pm
\end{aligned}
$$
其中$\omega_0=2A/\hbar$. 从这里开始需要进行近似：我们关心长时间的效应，在这里更高的频率意味着更短的时间效果，所以能略去更高的频率$\omega+\omega_0\gg\omega-\omega_0$（想想我们研究宏观物体时，略去其中的分子热运动）.

可以认为$e^{\pm i(\omega-\omega_0)t}$和$\gamma(t)$在这段时间之内根本没有变化，积分中只剩下快速变化的项，平均值为
$$
\int_t^{t+\frac{2\pi}{\omega+\omega_0}}\text{d}t\left\{\begin{array}{lr}
1\\
e^{\pm i(\omega+\omega_0)t}
\end{array}\right.=\left\{\begin{array}{lr}
1\\0
\end{array}\right.
$$
效果上来说就是直接扔掉$e^{\pm i(\omega+\omega_0)t}$.

之后的过程在讲义里面有详细解法，是标准的数学，按下不表.

之后来讲 Feynman 的第十章，仍然是双态系统.

记住几件事，这是我们在上一章学到的：

1. 能级的耦合（coupling）：$A\neq0$.
2. 能级的简并（degenerate）：$E_1=E_2$.
3. 能级的排斥（repulsive）：$E_+-E_-\sim E_1-E_2+(\frac{2A}{E_1-E_2})A$.

我们要用这些知识了解一些其他的双态系统.

从氢分子离子开始讨论（这代表两个原子核和一个电子，甚至是一个三体系统），这个问题能告诉我们能级的“劈裂”对势能“背景”的反作用. 从我们直观的角度思考，几样物体相互靠近的时候，自然的效果应该是相互排斥，所以“原子形成分子”、“黑洞构成双体系统”这种事情其实是小概率事件，它需要一种机制来耗散掉其中的一些能量，这也是为什么我们见到的星系都塌成扁平的形状，而暗物质都是球形分布——普通物质能够辐射电磁波，但是暗物质不行.

在氢分子离子这个系统中，当两个原子核相距很远时，有两个可能的态：电子靠近某一个原子核，另一个原子核在远处；以及反过来.

我们要学会一个新的方法（这在化学中很重要）：Born - Oppenheimer 近似. 这是说，把质子“按在”某一个固定的位置，或者说让质子具有一个固定的位置，求解电子的波函数之后再反过来确定质子位置.

具有确定能量$E$的自由电子态的球队成波函数为$\psi\sim\frac{1}{r}e^{+ip(E)r/\hbar}$，这个代表动量大小确定但是方向完全不确定的波函数. 现在电子处于束缚态中，这个动量应该是$p=i\sqrt{2m|E|}$，这里的虚数是我们希望看到的结果，因为 WKB 近似告诉我们指数衰减的解是合理的.

所以，电子通过隧穿到达$r$的位置的概率幅是
$$
\psi(r)\sim\frac{1}{r}e^{-\sqrt{2m|E|}r/\hbar}
$$
据此，得到$\Delta E=A\propto\psi(r)$.

但是实际上质子并不是固定的，对于每一个$r$，都有一个新的势能，和能级劈裂$\Delta E$有关系，所以可以得到一个作用在两个质子上面的力，我们可以称为“交换力”（交换电子得到的）：
$$
\bold{F}_{\text{ex}}=-\nabla E(r)
$$
$E(r)$随着$r$的增大而降低，所以这个力是吸引的.

一些问题的回答：

> 虚数动量实际上是将时间这条轴在复平面上转$90^\circ$，如果我们想想路径积分$e^{i\int H\text{d}t/\hbar}$，这相当于在能量函数上面加了一个负号.
>
> 上面的讨论没有考虑电子的自旋，但是这是重要的.
>
> 为什么$A\sim\psi(r)$？因为$A$其实也是“幅”，它在方程中以这样的形式出现：
>$$
> \braket{A|1}=\braket{+|A|1}
>$$

我们从这个问题能发现为什么不对称的双原子分子离子不容易形成（比如$CO^+$），因为隧穿的概率两边不对称，交换势$\Delta E$会因为能级排斥加上一个压低因子$A\cdot\frac{A}{E_1-E_2}$.

然后给核力开了个头：“核力之于强相互作用，正如 Van der Waals 力之于电磁相互作用.”