---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 7
createTime: 2024/11/20 19:08:33
permalink: /Feynman-III/Feynman-III/qdj2cw3i/
---
## 2024-11-20

### 晶格中的电子态

我们考虑的是一个$10^{23}$维的态空间，$\mathscr{H}=\text{span}\{\ket{n};n=1,2,\cdots,10^{23}\}$. 当然我们不关心具体有多少态，数字过大的时候这已经不是一个敏感的问题，我们只知道这么多同样能量的态空间会形成一个能带（energy band），色散关系是$E=E_0-2A\cos kb$.

我们找到了一种行波解，这个行波解的物理意义是电子出现在每个格点上的概率幅只相差一个相位，这个相位差在某种意义上反映了这个“波”的传播. 可以写成：
$$
\ket{k}=\sum_{n=-\infty}^{+\infty}e^{+iknb}\ket{n}\longrightarrow\text{Bloch wave}
$$
Bloch 波实际上能被解释为一种准粒子，在长波极限下（$k\to0$），色散关系能够写成$E=\frac{p^2}{2m_\text{eff}}$.

上节课没有讲到的一个部分是这个波的群速度，是简单的求导：
$$
v_g=\frac{\text{d}E}{\text{d}k}=2Ab\sin kb
$$
很神奇的事情是，这个群速度能够振荡，在$k=\pi/b$时，群速度甚至是零.（想想是为什么？）

::: details 个人理解

个人认为，上节课我们曾经讲过相差$2m\pi/b$的$k$是等价的，独立的$k\in(-\pi/b,\pi/b]$，在这时格波和晶格形成驻波，完全不传播.

:::

上面在一维的结论是容易推广的，在三维下我们只需要做三遍同样的事情：
$$
\ket{\vec{k}}=e^{i\vec{k}\cdot\vec{x}_n}\ket{\vec{x}_n}=e^{i\vec{k}\cdot\vec{x}_n}\ket{n_1,n_2,n_3}
$$
这时候的色散关系是$E=E_0-2\underset{i=1}{\overset{3}{\sum}}A_i\cos k_ib_i$.

我们关心长波极限，在这种情况下，$E=(A_ib_i^2)k_i^2$，这里$A_ib_i^2$是相等的，系统出现了一种各向同性的对称性，这称为 emergent symmetry（涌现出来的对称性）.

近十年来的观点是，所有的物理学中的整体对称性都是低能下涌现出来的，真正的理论中不应该包含任何对称性. 物理学本身就是近似的学科.

重整化群：描述尺度变换的理论.

现在来看看我们的 Hamiltonian：
$$
H=\begin{pmatrix}
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots\\
\ddots&-A&E_0&-A&\ddots&\ddots&\ddots\\
\ddots&\ddots&-A&E_0&-A&\ddots&\ddots\\
\ddots&\ddots&\ddots&-A&E_0&-A&\ddots\\
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots
\end{pmatrix}
$$


这其实在连续的条件下是“导数”，将导数离散就是在对角线上“长”出非对角元，一阶就是长出两个次对角线，这回到了连续情况下的 Schrodinger 方程. Bloch 波告诉我们，一个 Fourier 变换就是对角化上面的 Hamiltonian.

### 晶体缺陷

这时 Hamiltonian 变为
$$
H=\begin{pmatrix}
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots\\
\ddots&-A&E_0&-A&\ddots&\ddots&\ddots\\
\ddots&\ddots&-A&(E_0+F)&-A&\ddots&\ddots\\
\ddots&\ddots&\ddots&-A&E_0&-A&\ddots\\
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots
\end{pmatrix}
$$
如果$F>0$，这是散射解，仍然做 ansatz：
$$
\braket{n|\psi}=c_n=\left\{\begin{array}{lr}
e^{ikx_n}+\beta e^{-ikx_n}\quad(n<0)\\
\gamma e^{ikx_n}\quad(n>0)
\end{array}\right.
$$
相当于算上反射波和透射波. 其实只有$n=0$旁边的三个方程会变化，只需要这几个方程就能定出系数$\beta$和$\gamma$，请大家务必计算一下，这是学量子力学的时候都算过的.

这里直接给出结果：
$$
\beta=\frac{-F}{F-2iA\sin kb}\,,\quad\gamma=\frac{-2iA\sin kb}{F-2iA\sin kb}
$$
容易验证$|\beta|^2+|\gamma|^2=1$，归一化是必须要成立的.

当$F<0$，这是一个势阱，会产生束缚态，取 ansatz：
$$
c_n=\left\{\begin{array}{lr}
ce^{-\kappa x_n}\quad(n>0)\\
c'e^{+\kappa x_n}\quad(n<0)
\end{array}\right.
$$
与散射态最大的区别是，这里的$\kappa$是完全确定的，但是$k$有很多取值，这意味着束缚态只有一种，所谓的“色散关系”是$E=E_0-\sqrt{4A^2+F^2}$，$F=-2A\sinh\kappa b$.

### 散射振幅的解析结构

$\longrightarrow$这里好像进入了四字的领域……

对散射振幅的$\beta$换一种写法，得到
$$
\beta=\frac{-F}{F+\sqrt{(E-E_0)^2-4A^2}}\,,\quad E\in\mathbb{C}
$$
几个概念：

1. 奇点（singularity）：在这个点不解析；
2. 极点（pole）：$\frac{1}{z^n}$，$n\in\mathbb{Z}_+$；
3. 单极点（simple pole）：$\frac{1}{z}$.

当$\beta$分母为零，可以得到$E=E_0\pm\sqrt{4A^2+F^2}$，散射幅的极点是束缚态的能量.

同时这里还有复变函数中的割线（branch cut）概念：$\sqrt{z}$，幅的割线是自由传播态.

实际上这些东西和光学中的 Stokes 倒逆关系很像，我们似乎能够直接绕开对场论的基本理解而直接获得散射振幅的结构.

### Heisenberg Model

这是第 15 章的内容，这个模型实际上比 Ising 模型更加复杂. 和之前在研究晶格格波时的编号一样，考虑一个编好号的一维链. 和上面不同的是，每个格点上都不是一个单一的能级，而是一个 Hilbert 空间，简单的情况是一个二态系统.
$$
\mathscr{H}_n=\text{span}\{\ket{+_n},\ket{-_n}\}
$$
整个态空间将是所有这种态空间的张量积（所以氢原子的超精细结构是一个有两个格点的 Heisenberg 模型！）：
$$
\mathscr{H}=\bigotimes_{n=1}^N\mathscr{H}_n\,,\quad\dim\mathscr{H}=2^N
$$
当这里有$10^{23}$个格点时，量级将难以想象——整个宇宙的所有电子加起来也无法描述这么多的状态.

任何一个态可以被这样描述：
$$
\ket{s_1,\cdots,s_n,\cdots,s_N}=\ket{s_1}\otimes\cdots\otimes\ket{s_N}
$$
这里有正交归一性，$\braket{s_1,\cdots,s_N|s_1',\cdots,s'_N}=\delta_{s_1s'_1}\cdots\delta_{s_Ns'_N}$.

Hamiltonian 写作：
$$
H=-\frac{A}{2}\sum_{n=1}^{N-1}\vec{\sigma}_{n}\cdot\vec{\sigma}_{n+1}
$$
注意到$A>0$，平行的能量更低.

在$d$维的情形下，变为$H=-\frac{A}{2}\underset{\braket{m,n}}{\sum}\vec{\sigma}_m\cdot\vec{\sigma}_n$，其中$\braket{m,n}$表明相邻.

这里引入 Dirac 自旋交换算符$\mathscr{S}_{mn}$，是
$$
\mathscr{S}_{mn}=\begin{pmatrix}
1&&&\\&&1&\\&1&&\\&&&1
\end{pmatrix}
$$
它满足$\mathscr{S}_{ij}\ket{ij}=\ket{ji}$. 引入之后，Hamiltonian 改写为
$$
H=-\frac{A}{2}\sum_n(2\mathscr{S}_{n,n+1}-1)
$$
通过移动能量零点的方式能将$A$改成$2A$. 现在能用裸眼先看出一部分本征态，比如$\ket{+\cdots+}$，$\ket{-\cdots-}$，这里$E=0$.

真空态：$\ket{\text{vac}}=\ket{+\cdots+}$（vacuum state）

单粒子态：$\ket{x_n}=\ket{\cdots,+_{n-1},-_n,+_{n+1},\cdots}$，单粒子态集合起来会产生一个单粒子态空间$\mathscr{H}^{(1)}=\text{span}\{\ket{x_n}\}$，这个划分是好的，因为这是 Hamiltonian 的**不变子空间**（跟线性代数连起来了！！），用物理的语言来说，这就是**粒子数守恒**.

---

下课之后的讨论（来源于同学的提问和我自己的回答）：

问：为什么$\mathscr{H}^{(1)}$会是一个不变子空间？

> 四字的回答：因为这本质上是一个非相对论性的量子力学模型，Hamiltonian 对$n$粒子态的作用一定是平移变换，不能产生新的粒子；想像$\ket{x_n}$被 Hamiltonian 作用之后会发生什么？它可能变成$\ket{x_{n+1}}$或者什么其他的单粒子态，但是一定不会出现$\ket{x_nx_{n+1}}$这种双粒子态. 而在一个相对论性的体系中，如果没有一定的条件约束，确实有可能粒子数不守恒，比如光子气系统.
> 我的理解：可以想象“小磁针”排列为一个小小的漩涡，Hamiltonian 的作用使得这个小漩涡在整个体系中平移，但是它不会消失，也不会分裂成两个，这就是一个鲜明的物理图景.
