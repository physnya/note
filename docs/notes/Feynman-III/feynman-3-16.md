---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 16
createTime: 2024/12/23 17:00:21
permalink: /Feynman-III/Feynman-III/vaxbasfn/
---
## 2024-12-23

### 氢原子的能级

氢原子的一个完备的本征态，由三个数字描述，$\ket{nlm}$，其中的取值范围是$n=1,\cdots$，$l=0,\cdots,n-1$，$m=-l,\cdots,l$，分别表征能量、角动量大小（$\sqrt{l(l+1)}\hbar$）和$z$方向角动量分量.

上节课讲到选择定则，但是没有讲完，所以这里再重新讲一遍. 根据球谐函数的具体表达式，我们可以算出在宇称变换下，$\ket{nlm}\overset{p}{\longrightarrow}(-1)^l\ket{nlm}$.

考虑能级的跃迁，$\ket{n_1l_1m_1}$可以通过释放一个$\gamma$的方式变成$\ket{n_2l_2m_2}$，一般而言这种过程是通过“偶极辐射”来进行的，在远处来研究这个辐射，我们能够对它进行多极展开，其中首阶效应应该是系统的线度$r$除以问题的典型长度$L$量级. 偶极项$\dot{\vec{p}}=e\dot{\vec{r}}$天然地具有一个自旋 -$1$.

如果按照我们之前说的定态理论计算跃迁的概率幅$\braket{n_2l_2m_2|H|n_1l_1m_1}$，会发现只要两边的态不一样，这个值一定是零，因为 Hamiltonian 关于基础态肯定对角，定态理论不会随时间变化. 所以一旦我们要开始研究跃迁，就要对 Hamiltonian 做修正，这是一个非对角的修正$\Delta H$（其中会包括超精细结构这些之前讲过的内容）.

这个修正的领头阶应该是偶极辐射，它的行为就像一个矢量，也就是自旋 -$1$，这一阶的效应写成：
$$
\begin{aligned}
\braket{n_2l_2m_2|\hat{\vec{r}}|n_1l_1m_1}&=\int\text{d}^3\vec{r}_1\text{d}^3\vec{r}_2\braket{n_2l_2m_2|\vec{r}_2}\braket{\vec{r}_2|\hat{\vec{r}}|\vec{r}_1}\braket{\vec{r}_1|n_1l_1m_1}\\
&=\int\text{d}^3\text{d}\vec{r}_1\text{d}^3\vec{r}_2\cdot\psi_2^*(\vec{r}_2)\vec{r}_1\delta(\vec{r}_1-\vec{r}_2)\psi_1(\vec{r}_1)\\
&=\int\text{d}^3\vec{r}\cdot\psi_2^*(\vec{r})\psi_1(\vec{r})\vec{r}
\end{aligned}
$$
其中先把$\vec{r}_2$积分完毕. 同时其中的$\psi_2^*=\bra{n_2l_2m_2}$，$\psi_1=\ket{n_1l_1m_1}$. 这里在积分里面插入了一个$\vec{r}$，整个函数必须是偶函数，否则整个积分会等于零，所以$\psi_2^*$和$\psi_1$必须具有不同的宇称，从而偶极辐射前后，宇称变换一次.

这只是选择定则的其中一种，其实当$l_1$和$l_2$相差太大时跃迁也不可以发生. 因为
$$
\hat{r}\ket{n_1l_1m_1}=\sum_{n_2,l_2,m_2}c_{n_2l_2m_2}\ket{n_2l_2m_2}
$$
左边实际上是自旋 -$1$和自旋 -$l_1$的张量积，这是一种角动量的合成，用我们之前的写法可以说成$3\otimes(2l_1+1)$，组合产生的总角动量只有可能有三种取值，即$l_1-1$，$l_1$和$l_1+1$，但是如果结合宇称的条件，$l_1$必须被排除，它和初态的宇称相同，这个过程被宇称所禁戒.

结合宇称条件和角动量合成条件，整体的选择定则要求末态的$l_2=l_1\pm1$.

选择定则回答了“$\braket{B|H|A}\overset{?}{=}0$”的问题，这是很有意义的，我们总想要在做复杂的计算之前确定什么东西等于零.

除此之外，还有很多超选择定则，某一种阻止了 fermion 和 boson 的混合态，避免我们谈论 boson 和 fermion 的问题失去意义，如果不阻止这两种态的混合，我们可能会得到一种没有统计性质的态（$c_1\ket{B}+c_2\ket{F}$）.

系统具有某些时空对称性，同时可能还存在一些内部（internal）对称性，比如某一个电子的相角变换是一种内部的对称性，它不是时间或者空间上的一种平移或者旋转，相对论性的量子力学中有一条定理阻止了这两种对称性的混合，也就是说一个对量子态所做的操作不应该在变换下变成一个时空的变换. 但是在非相对论性的量子力学中，这两条对称性的区分并不明显，比如上次习题课中提到的氢原子 SO(4) 对称性，其中的 SO(3) 是时空的对称性，但是由角动量生成的 LRL - vector 对称性是“内部的对称性”（因为这里的变换是固定主量子数，在各个角量子数不同的态之间变化，没有时空上的变化），在非相对论性的理论中它们显然混合在一起了.

讲这些内容的原因是，我们要知道如果区分了某两个概念，那么这里一定有一条所谓的“超选择定则”阻止了这两个概念“相互混合”，这件事不一定显然，在其中可能会发现新的物理.

回归正题：

### 元素周期表

考虑重元素时，可能要计入相对论效应，$H$的修正$v^2/c^2\sim\alpha^2\sim137^{-2}$. 同时速度正比于核电荷数$Z$，$\propto Z\alpha$.

一些有趣的问题，比如 Hg 为什么是常温液态，这来源于金属键太弱，因为最外层电子更难以电离，能级更“深”. Hg 元素有很多电子在 f 轨道上，这是$l=3$的电子（s、p、d、f），这些电子受到的屏蔽很少（来源于钻穿效应）；同时有额外的相对论效应，简单地理解就是质量增加的效应.

::: note -

初学相对论时都会讲到的质量增加效应是一个非常糟糕的概念，永远不要把它用在任何研究上面.
——四字

:::

实际上元素周期表或许已经要到头了，当$Z$不断增大，最内层的电子速度会接近光速，我们已经到达了某一种极端相对论性极限. 这样的元素会通过一种电磁相互作用控制的过程衰变，寿命很短.

想想我们的期中考试. 当暗物质粒子的质量特别小， Compton 波长达到天文单位量级，黑洞就能以一种被了解得很好的方式甩出暗物质粒子，在黑洞周围形成一个巨型的束缚态，由万有引力控制 —— 这和电磁相互作用一样. 所以这个束缚态的能级应该和氢原子类似，唯一的不同在于暗物质可能是 boson，它们全部凝聚到最低能量的状态上，产生一种 Bose - Einstein Condensation. 这告诉我们量子的效应不一定微观.

### 算符

我们将用比较短的时间讲一些算符的知识，因为之前其实已经讲过很多.

对于位置本征态$\ket{\vec{x}}$，一般的状态被描述为
$$
\begin{aligned}
\braket{\vec{x}}_\psi&=\int\text{d}\vec{x}\cdot\vec{x}P(\vec{x})=\int\text{d}\vec{x}\cdot\vec{x}|\braket{\vec{x}|\psi}|^2=\int\text{d}\vec{x}\cdot\vec{x}\braket{\psi|\vec{x}}\braket{\vec{x}|\psi}
\end{aligned}
$$
发现这就是$\ket{\psi}$在$\ket{\vec{x}}$下的一个分解. 所以我们定义算符$\hat{x}$，它能够取出某个态的$x$分量，也就是$\hat{x}\ket{\psi}=x\ket{\psi}$. 有$\braket{y|\hat{x}|x}=x\delta(x-y)$.

同理的，动量算符是$\hat{p}\ket{\psi}=p\ket{\psi}$，这是在动量基础态下的分解，$q\braket{q|\hat{p}|p}=p\delta(q-p)$. 在位置基础态下，
$$
\hat{p}\ket{x}=-\text{i}\hbar\frac{\partial}{\partial x}\ket{x}
$$
这是因为 Fourier 变换.

在量子力学中，所有的物理量变成算符，$f(\vec{x},\vec{p})\longrightarrow f(\hat{x},-\text{i}\hbar\frac{\partial}{\partial t})$.

为了研究算符的时间演化，考虑 Schrodinger 方程：
$$
\begin{aligned}
\frac{\text{d}}{\text{d}t}\braket{O}_\psi&=[\frac{\text{d}}{\text{d}t}\braket{\psi(t)|]O|\psi(t)}+\braket{\psi(t)|O[\frac{\text{d}}{\text{d}t}|\psi(t)}]\\\\
&=\frac{-1}{\text{i}\hbar}\braket{\psi(t)|H^\dagger O|\psi}+\frac{1}{\text{i}\hbar}\braket{\psi(t)|OH|\psi}\\\\
&=\frac{\text{i}}{\hbar}\braket{\psi|[H,O]|\psi}
\end{aligned}
$$
如果认为态不演化，时间演化来源于算符，那么可以定义新的算符$O_H(t)=e^{\text{i}Ht}Oe^{-\text{i}Ht}$，这是量子力学的 Heisenberg picture（Heisenberg 绘景），与态演化的 Schrodinger 绘景相对.

在这个绘景下，$\frac{\text{d}}{\text{d}t}O_H(t)=\frac{\text{i}}{\hbar}[H,O_H(t)]$，时间演化写成$\braket{O}_\psi=\braket{\psi(t=0)|O_H(t)|\psi(t=0)}$.

这种绘景的好处在于，经典的方程和量子力学中的方程完全对应，只需要把物理量写成算符而已. 比如$\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})$，则
$$
\frac{\text{d}\hat{p}}{\text{d}t}=[\hat{H},\hat{p}]
$$
就是 Newton\'s law II.