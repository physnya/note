---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 8
createTime: 2024/11/25 19:27:36
permalink: /Feynman-III/Feynman-III/fax5mohj/
---
## 2024-11-25

### Heisenberg Model

简单回忆一下上节课讲过的内容. 这个模型本质上是一个格点量子场论模型，在每一个格点处都有一个 Hilbert 空间$\mathscr{H}$，然后相邻的空间耦合起来. 我们的 Hamiltonian 可以用 Dirac 的自旋交换算符来表示：
$$
H=-A\sum_n(\mathscr{S}_{mn}-1)
$$
交换算符的作用是这样的：
$$
\mathscr{S}_{n,n+1}\ket{\cdots i_n j_{n+1}\cdots}=\ket{\cdots j_n i_{n+1}\cdots}
$$
我们直接看出了两种本征态——全正 / 全负，我们把全正的状态叫做真空态（因为每一次翻转自旋需要克服一定能量做功，在能量有限的情况下我们能翻转的自旋是有限个，所以之后只会考虑翻转数有限的粒子态）.

上节课我们还学了单粒子态：$\ket{x_n}=\ket{\cdots+_{n-1}-_n+_{n+1}\cdots}$. 单粒子态的态空间是$\mathscr{H}^{(1)}=\text{span}\{\ket{x_n}\}\subset\mathscr{H}$，这是整个态空间的不变子空间. 因为只有当交换$n-1$和$n$或者交换$n+1$和$n$两个粒子时，整个状态才会有变化，所以
$$
\begin{aligned}
H\ket{x_n}&=-A[(\mathscr{S}_{n-1,n}-1)+(\mathscr{S}_{n,n+1}-1)]\ket{x_n}\\\\
&=-A(\ket{x_{n-1}}+\ket{x_{n+1}}-2\ket{x_n})
\end{aligned}
$$
最后这个态不是“三粒子态”，而是一个单粒子态，因为“$-$”号的个数没有变化，所以粒子数守恒.

最后得到能量的本征态是
$$
\ket{\psi(k)}=\sum_{n=-\infty}^\infty e^{inkb}\ket{x_n}
$$
色散关系是
$$
E(k)=2A(1-\cos kb)
$$
这个解和我们在 13 章讲到的 Bloch Wave 一致，但是这两个模型本质不同. 一个很特别的事是，当$k\to0$，$E\to0$，在 Bloch Wave 的模型中我们不觉得这件事情有什么特别的，因为在那个模型中我们能够自由选择能量的零点. 但是在 Heisenberg 模型中，能量为零意味着真空态，这种行为很像光子（当然这与光子还是非常不同），这被称为 gapless（无能隙的），因为真空态和单粒子态之间没有能量的跃变.

理论上来说，我们不需要能量就能产生一个上面的粒子——因为 gapless. 在相对论协变的理论中，gapless 就是 massless. 当然上面的能谱中，$E\propto k^2$，但是相对论性粒子$E\propto k$，这说明我们现在看到的模型还不是相对论协变的.

我们想要尝试理解为什么这里没有能隙. 这其实来源于系统有一个对称性自发破缺，简单来说我们这个模型里面有一个简并的“真空”（能量最低态），因为$\alpha\ket{+\cdots+}+\beta\ket{-\cdots-}$的这种线性组合的能量全部都是零，有一个连续的参数不断变化但是不改变真空态的能量.

计算一下：假设一维链的方向沿着$y$轴，自旋一开始全部指向$z$方向，绕$y$轴的旋转作用表现为
$$
\begin{aligned}
R_y(\alpha)\ket{+\cdots+}&=\bigotimes_{n}(\cos\frac{\alpha}{2}\ket{+}-\sin\frac{\alpha}{2}\ket{-})\\\\
\overset{\alpha\to0}{\longrightarrow}\bigotimes_n\ket{+}&-\frac{\alpha}{2}\sum_n\ket{x_n}+o(\alpha^2)
\end{aligned}
$$
所以真空态之间相互有差异，这就是一种破缺. 我们一般称为 Goldstone 模式.

---

拓展：

> Goldstone 定理：整体、连续对称性的自发破缺$\Longrightarrow$无能隙的粒子.
>
> 在相对论协变的理论中，有更强的结论：破缺的对称性个数和无能隙粒子的种数一一对应.

厄尔尼诺现象和拉尼娜现象是天气扰动的两个长波模式，为什么？洋流的建模是浅水波（因为海水深度比地球深度小多了），可以通过 Euler 方程解出两个长波模式，恰好是地球自转所丢掉的两个对称性.

再扯远一点： Ising 模型能够用在北京交通拥堵问题的研究上……

---

多粒子态：

二粒子态是$\ket{x_m,x_n}=\ket{\cdots+-_m+\cdots+-_n+\cdots}$，再次强调$\ket{x_m,x_n}\neq\ket{x_m}+\ket{x_n}$.
$$
\begin{aligned}
H\ket{x_m,x_n}&=-A[\ket{x_{m-1},x_n}+\ket{x_{m+1},x_n}-2\ket{x_m,x_n}]\\\\
&\quad-A[\ket{x_m,x_{n-1}}+\ket{x_m,x_{n+1}}-2\ket{x_m,x_n}]
\end{aligned}
$$
如果我想要用两个波数来描述这件事情，我做一个 Fourier 变换：
$$
\ket{k_1,k_2}=\sum_{m,n=-\infty}^\infty e^{imk_1b}e^{ink_2 b}\ket{x_m,x_n}
$$
这是一种“自由粒子近似”——我们忽略掉$m$和$n$很接近的一些方程，这会导致我们完全不考虑相互作用的能量，最后得到的总能量是
$$
E=2A(1-\cos k_1b)+2A(1-\cos k_2b)
$$
通常这是我们研究粒子物理时所做的第一个近似.

> 当然听过习题课的同学会知道更严格的 Bethe Ansatz 如何求解.
>
> （我在考虑要不要把习题课笔记也放上来）

接下来稍微讲一讲 Fook 空间：一个$p$粒子态空间是
$$
\mathscr{H}^{(p)}=\text{span}\left\{\begin{array}{}
\ket{x_{n_1}\cdots x_{n_p}}\\
1\leq n_1<\cdots<n_p\leq N
\end{array}\right\}
$$
我们可以将整个态空间“分类”，也就是做直和分解：
$$
\mathscr{H}=\bigotimes_{n=1}^N\mathscr{H}_n=\bigoplus_{p=0}^N\mathscr{H}^{(p)}
$$
后一个等号代表着如下等式：
$$
2^N=\sum_{p=0}^N\frac{N!}{p!(N-p)!}
$$
这正是$(1+1)^N$的二项式展开！观察左右两边，容易发现 LHS 中$N$在指数上，而 RHS 中$N$是更容易计算的，所以这种分解方式（Fook 空间）能极大地简化计算.

### 振幅对位置的依赖

我们现在要把格点连续化——不是连续化 Heisenberg Model，那会变成量子场论，我们还不急着学这个；现在退回到第 13 章 Bloch Wave 的内容.

Schrodinger 方程：
$$
i\hbar\dot{C}_n=E_0C_n-A(C_{n+1}+C_{n-1})
$$
解是
$$
C_n\sim e^{-iEt/\hbar+iknb}
$$
长波的色散是$E=\frac{k^2}{2m_{\text{eff}}}$，$m_{\text{eff}}=\frac{\hbar^2}{2Ab^2}$. 连续极限是$b\to0$，但是我们要固定质量不变（不然就炸掉了）.

最后我们得到：
$$
i\hbar\dot{C}(t,x)=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}C(t,x)
$$
这就是我们再熟悉不过的 Schrodinger 方程. 对于$d$维的自由粒子，这个推广是 trivial 的，
$$
i\hbar\frac{\partial}{\partial t}\psi(t,x)=-\frac{\hbar^2}{2m}\nabla^2\psi(t,x)
$$
在$d=3$时就能得到我们之前在氢原子离子里面用到过的球面波解.

考虑这里的本征态：$\ket{n}$$\longrightarrow$$\ket{x_n}=\frac{1}{\sqrt b}\ket{n}$.

这里有一些连续化产生的东西：

*$\braket{x|y}=\delta(x-y)$；
*$\int\text{d}x\ket{x}\bra{x}=1$；
*$C_n=\braket{n|\psi}$，$\psi(x)=\braket{x|\psi}$；
*$\ket{\psi}=\int\text{d}x\cdot\psi(x)\ket{x}$.

==波函数是态空间的坐标.==

但是态空间里面的态必须是归一化的，所以上面的基础态其实不是态空间里面的态，但是这不妨碍我们将任意的状态用基础态展开.

==千万不要将波函数想成一种波动——波动是位置的函数，但是波函数是广义位形空间中的坐标的函数. 比如二粒子态，其波函数就是一个态向其广义位形空间坐标的投影$\braket{\vec{x},\vec{y}|\psi}$.==

现在来考虑相互作用. 相互作用有两种，一种是势场，一种是粒子之间的相互作用，分开来写：

1.
$$
i\hbar\dot{\psi}(t,\vec{x})=[-\frac{\hbar^2}{2m}\nabla^2+V(\vec{x})]\psi(t,\vec{x})
$$

这是大家经常写的，但是一定要记住这是一个很特殊的例子：三维、非相对论性、自由粒子、只与位置有关的势场.

2.
$$
i\hbar\dot{\psi}(t,\vec{x}_1,\vec{x}_2)=[-\frac{\hbar^2}{2m}\nabla^2_1-\frac{\hbar^2}{2m}\nabla^2_2-\frac{q_1q_2}{|\vec{x}_1-\vec{x}_2|}]\psi(t,\vec{x}_1,\vec{x}_2)
$$

这是两个粒子的情形.

其实能够发现，只要会写经典情况下的能量就能写出 Schrodinger 方程.

但是可以思考一下： Lorentz 力的 Schrodinger 方程怎么写？