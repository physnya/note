---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 6
createTime: 2024/11/18 19:13:25
permalink: /Feynman-III/Feynman-III/3zpgq7sp/
---
## 2024-11-18	氢原子基态的超精细结构

$$
\begin{aligned}
\mathscr{H}&=\mathscr{H}_e\otimes\mathscr{H}_p\\\\
\Sigma_{00}&=1^e\otimes1^p\\\\
\Sigma_{i0}&=\sigma_i^e\otimes1^p\,,\quad\Sigma_{0j}=1^e\otimes\sigma_j^p\\\\
\Sigma_{ij}&=\sigma_i^e\otimes\sigma_j^p
\end{aligned}
$$

上节课讲精细结构的时候有位同学问了一个很好的问题，我们能想想，为什么修正项不是$v^2/c^2$？这是因为一种时间反演的对称性，因为首阶修正项如果是奇数次，反演时会变号；当然，高阶项还是有可能破坏时间反演对称性，因为引力波的辐射，但这是高阶的效应.

回到我们的超精细结构. 最一般的 Hamiltonian 可以写成 16 个 Hermitian 矩阵的组合：

$$
H=\sum_{M,N=0}^3c_{MN}\Sigma_{MN}
$$

这就是 16 个实参数的来源. 但是如果只考虑基态，我们有一个很强的空间旋转对称性，而空间旋转对称不变的量只有标量. 现在我们就会获得 Hamiltonian 的形式：

$$
H=B\Sigma_{00}+A(\Sigma_{11}+\Sigma_{22}+\Sigma_{33})
$$

显然，第一项是能量的零点，这一项的平移不重要，完全可以去掉. 现在只剩下一个待定参数$A$.

我们一般将这个式子写成：

$$
H=A\vec{\sigma}^e\cdot\vec{\sigma}^p
$$

其中$\vec{\sigma}$显然是一个生活在三维空间中的矢量，这个点积就是对三维的分量点积；但是$\vec{\sigma}$同时生活在两个不同的二维的旋量空间中，所以它们不能简单地矩阵相乘，而是要做张量积. 所以现在我们得到的是一个四阶的矩阵.

张量积：

$$
\left.\begin{array}{rl}
\mathscr{H}^e\,,\ket{\pm^e}\\\\
\mathscr{H}^p\,,\ket{\pm^p}
\end{array}\right\}\overset{\otimes}{\longrightarrow}
\ket{+^e+^p}\,,\ket{+^e-^p}\,,\ket{-^e+^p}\,\ket{-^e-^p}
$$

这种张量积的乘法可以用下面的例子来理解：

$$
\sigma_x^e\sigma_x^p=\begin{pmatrix}
0\begin{pmatrix}
0&1\\1&0
\end{pmatrix}&1\begin{pmatrix}
0&1\\1&0
\end{pmatrix}\\\\
1\begin{pmatrix}
0&1\\1&0
\end{pmatrix}&0\begin{pmatrix}
0&1\\1&0
\end{pmatrix}
\end{pmatrix}=\begin{pmatrix}
&&&1\\&&1&\\&1&&\\1&&&
\end{pmatrix}
$$

这相当于把右边的矩阵当成一个“数”扔进左边的矩阵里面.

知道这种计算方法之后，我们能够很容易地写出 Hamiltonian，如下：

$$
H=\begin{pmatrix}
A&&&\\&-A&2A&\\&2A&-A&\\&&&A
\end{pmatrix}
$$

可以将这个矩阵对角化，对角化只会得到两种特征值，四种本征态为

$$
\begin{aligned}
\ket{++}\,,\ket{--}\,,\ket{S}=\frac{\ket{+-}+\ket{-+}}{2}&\longrightarrow E=A\\\\
\ket{A}=\frac{\ket{+-}-\ket{-+}}{2}&\longrightarrow E=-3A
\end{aligned}
$$

其中$\ket{A}$称为 anti symmetric，$\ket{S}$称为 symmetric. 我们称$E_S=-3A$为 singlet（单态），$E_T=A$为 triplet（三重态），这本质上代表着下面的式子

$$
\mathbb{2}\otimes\mathbb{2}=\mathbb{1}\oplus\mathbb{3}
$$

也就是说，两个二阶张量的张量积等价于一个标量和一个矢量的直和.

但是现在出现了一个非常要命的问题：我们不知道$A$的符号，但是这决定了我么对这个系统本质的理解. 现在有两种情况：一种是基态能级简并（这就是对称性自发破缺的定义），另一种是激发态能级简并.

我们知道这样一个结论：一个有限自由度的系统不会出现对称性自发破缺，所以我们选择第二种解.

> 一个简单的解释：如果有限自由度系统基态能级简并，粒子在基态就能到处隧穿，能级将会无限分裂（想想之前学过的隧穿导致交换力）.

上下两个能级的能量差是$(21\text{cm})^{-1}$，必须要记住. 但是第二种解反而是更加反直觉的，这意味着，磁矩反平行时能量更低，它跟两块条形磁铁的结论是不一样的.[^1] 这件事情非常不平凡. 我们下面试图解释一下这件事情.

### 超精细结构的物理来源

质子：$\vec{r}=\vec{0}$，磁矩$\vec{\mu}_p$，产生磁场

$$
\vec{B}_p(\vec{r})=\frac{\mu_0}{4\pi}[\frac{3\vec{r}(\vec{\mu}_p\cdot\vec{r})}{r^5}-\frac{\vec{\mu}_p}{r^3}]
$$

在极近场处，要修复$\nabla\cdot\vec{B}=0$，加入修正项，

$$
\vec{B}_p(\vec{r})=\frac{\mu_0}{4\pi}[\frac{3\vec{r}(\vec{\mu}_p\cdot\vec{r})}{r^5}-\frac{\vec{\mu}_p}{r^3}]+\underset{\text{contact term}}{\underline{\frac{2\mu_0}{3}\vec{\mu}_p\delta^{(3)}(\vec{r})}}
$$

Hamiltonian 写成

$$
\begin{aligned}
H&=-\vec{\mu}_e\cdot\vec{B}_p\\\\
&=\frac{\mu_0}{4\pi}[\frac{\vec{\mu}_e\cdot\vec{\mu}_p}{r^3}-\frac{3(\vec{\mu}_e\cdot\vec{r})(\vec{\mu}_p\cdot\vec{r})}{r^5}]-\frac{2\mu_0}{3}\vec{\mu}_e\cdot\vec{\mu}_p\delta^{(3)}(\vec{r})
\end{aligned}
$$

现在需要积分来求出电子在整个空间各处存在的概率，有

$$
\braket{H}_r=\int\text{d}^3\vec{r}\cdot|\psi(r)|^2\times H
$$

可以证明，在上面的积分中，多极展开的那一项给出贡献为$0$（这来源于 Legendre 多项式指标不同时是正交的），胜利的是接触项. 对此的理解是，我们将电子这一块“条形磁铁”通过量子力学的方式塞进了质子这块“条形磁铁”里面.

问题：实验上的观察是怎样的？

> 实验上就是观测$21\text{cm}$谱线，而这是重要的. 我们能够估算激发这个谱线所需要的温度，已知$1\text{K}$对应$10^{-5}\text{eV}$，那么只需要$0.1\text{K}$就能激发. 在早期宇宙中，高能的信息冷却下来，现在能观测到的只有这一条谱线.

### 晶格中的传播

简单起见，我们处理一维晶体，并且对每一个格点上的电子，隔离掉其他所有能级，只留下一个能级$E_0$；同样的能级之间可以隧穿，但是我们只考虑相邻格点之间的隧穿，隧穿概率幅为$-A$.

对于晶体中的一个单粒子，其态空间是无穷维的，基础态是$\ket{n}$. 有：

$$
H\ket{n}=E_0\ket{n}-A(\ket{n+1}+\ket{n-1})
$$

这里 Hamiltonian 是

$$
H=\begin{pmatrix}
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots\\
\ddots&-A&E_0&-A&\ddots&\ddots&\ddots\\
\ddots&\ddots&-A&E_0&-A&\ddots&\ddots\\
\ddots&\ddots&\ddots&-A&E_0&-A&\ddots\\
\ddots&\ddots&\ddots&\ddots&\ddots&\ddots&\ddots
\end{pmatrix}
$$

现在来解 Schrodinger 方程. 有

$$
i\hbar\frac{\partial}{\partial t}C_n=E_0C_n-A(C_{n-1}+C_{n+1})
$$

格距为$b$，第$n$个原子$x_n=nb$，我们试解（ansatz，这是一个德语词）：

$$
C_n=\exp(-iEt/\hbar+ikx_n)
$$

代入方程，得到色散关系：$E=E_0-2A\cos kb$. 相差$2m\pi/b$（$m\in\Z$）的$k$是等价的，实际上独立的取值$k\in(-\pi/b,\pi/b]$，而$E\in[E_0-2A,E_0+2A]$，产生一个能带，能带的宽度被跃迁的概率幅所控制，但是其中的离散能级数被格点间距$b$控制；实际上一般情况下格点间距非常小，能带内部可以看作是连续的能量分布.

在长波极限下，$k\to0$，有$E\approx E_0-2A+Ab^2k^2$，可以取$E_0=2A$，这样就得到了一个类似于非相对论性粒子的能谱，这个整体的激发模式对应了一个准粒子，它的等效质量是$m_{\text{eff}}=\frac{\hbar^2}{2Ab^2}$.

[^1]: 为什么不一样？$\ket{++}$态的能量不是更高吗？我上课在这个地方纠结了很久，然后集体锻炼的时候同学给了我一个答复：电子的磁矩带一个负号！牢记此事！