---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 5
createTime: 2024/11/16 21:04:55
permalink: /Feynman-III/Feynman-III/q8p3yy7w/
---
## 2024-11-16

（这节课是补前面几周一节缺掉的课）

继续从中微子振荡开始说. 中微子有三种味道，分别为$\nu_e$，$\nu_\mu$，$\nu_\tau$，这三者均不是质量本征态，真正的质量本征态也有三种$\nu_1$，$\nu_2$，$\nu_3$. 不希望大家立马让自己接受“不同粒子可以放在同一个态空间”这一事实，因为这是一个值得思考的问题.

一个平庸的解释是，任何粒子都要有态空间，若是$A$、$B$两种粒子，态空间分别是$\mathscr{H}_A$、$\mathscr{H}_B$，那么我们能让这两个空间做直和，就相当于将这些坐标并在一起，作为它们两者的态空间. 直和空间的维数是两空间维数之和，粒子$A$、$B$完全可以视作这个直和空间不同态.

上面的解说略去了物理的内容. 我们现在要来思考，什么叫做“同种粒子”？如果桌上的这个瓶子是一个基本粒子，那么我们相信我们平移、旋转，对这个瓶子换一个坐标系，不会改变这个粒子. 这就是为什么我们将两种方向自旋的电子叫做同一种粒子.

但是左旋光子和右旋光子呢？镜像变换并不是物理实际的变换，我们根本没有理由叫它们同一种粒子. 要是光子有质量，这两个粒子的质量不会相同.

所以这是一种精度的问题：如果我的仪器对质量的探测很不灵敏，只有$10\text{MeV}$的精度，那么我区分不出来质子和中子，这种意义下这两个可以存在于同一个直和空间中. 在量子场论中，我们甚至可能将所有的基本粒子的态空间全部直和起来.

希望大家再多想一想这个问题，很有意思.

已经知道这个事实之后，我们考虑中微子的 Hamiltonian，为了方便计算，我们只考虑两代中微子，三代的情况是一样的.
$$
\begin{pmatrix}
\ket{\nu_1}\\\ket{\nu_2}
\end{pmatrix}=U\begin{pmatrix}
\ket{\nu_e}\\\ket{\nu_\mu}
\end{pmatrix}
$$
这里一定是一个幺正变换. 如果“关掉”中微子的动量，现在 Hamiltonian 能够写成（这是能量本征态下写出的）
$$
H=\begin{pmatrix}
m_1&\\&m_2
\end{pmatrix}
$$
上述坐标变换能够写出
$$
\begin{pmatrix}
\nu_e\\\nu_\mu
\end{pmatrix}=\begin{pmatrix}
\cos\theta&-\sin\theta\\\sin\theta&\cos\theta
\end{pmatrix}\begin{pmatrix}
\nu_1\\\nu_2
\end{pmatrix}
$$
这显然会让 Hamiltonian 不对角，这时中微子会发生振荡.

Feynman 在讲他的课时，中微子振荡解释才刚刚出现，这时有所谓的“太阳中微子丢失之谜”：太阳在核反应时会发射中微子，但是我们在地球上探测到的中微子量比预期少了$1/3$，当时大多数人都认为是太阳模型出了问题，但是有人提出，如果中微子有质量的话，这个问题就能得到解释.

现在我们想想太阳发射中微子的问题. 假设我们的探测器只能探测$\nu_e$，对其他种类的中微子视而不见. 太阳的位置在$x_1$处，探测器在$x_2$处，相当于初始有一个$\ket{\psi(x_1)}$，要求末态$\braket{\nu_e|\psi(x_2)}$这样一个概率幅.

这个问题其实相当复杂，因为中微子团有大小，这是一个含时演化，这个问题的完整解决必须使用波包来做. 但是如果足够小心，我们能用定态来解决这个题目.

> 我们常常使用定态来解决动态问题，比如说一个粒子在方势垒上的散射.

这里“定态”指的是什么？中微子有一个能谱，我们完全可以只看$E$在一个小范围内的那部分中微子，这相当于确定中微子的能量；同时我们近似地认为太阳处来的中微子是平面波，这相当于确定中微子的动量.

可以考虑存在两种质量不同的中微子，分别有$p_1=\sqrt{E^2-m_1^2}$，$p_2=\sqrt{E^2-p_2^2}$. 到这里就已经能看出为什么会有振荡了：两束波长不同的波同向传播，那么它们只能在某个点处对齐.

现在，$\ket{\nu_i(x)}=e^{ip_i\cdot x}\ket{\nu_i(0)}$. 定态的好处是，状态永远不会随时间变化，我们要求的“从$\braket{\nu_e|\psi(x_1,t_1)}$到$\braket{\nu_e|\psi(x_2,t_2)}$”，可以将末态的$t_2$写成$t_1$.

==特别注意：当我们开始讨论定态，我们就已经失去了做时间平移的权力；而这一点在近十年的文献中还有很多人犯错.==

所以：
$$
\begin{aligned}
\ket{\nu_e(x)}&=\cos\theta\ket{\nu_1(x)}-\sin\theta\ket{\nu_2(x)}\\\\
&=e^{ip_1\cdot x}\cos\theta\ket{\nu_1}-e^{ip_2\cdot x}\sin\theta\ket{\nu_2}
\end{aligned}
$$
现在要问：在$x$处仍然为$\nu_e$的概率幅？这里就是要求$\braket{\nu_e|\nu_e(x)}$.

> 解释一下上面那个看起来很奇怪的概率幅：右矢是动力学的，指的是$\nu_e$在传播过程中如何变化；左矢由探测器决定，我要测量的是$\nu_e$.

即：
$$
\begin{aligned}
\braket{\nu_e|\nu_e(x)}&=(\bra{\nu_1}\cos\theta-\bra{\nu_2}\sin\theta)(e^{ip_1\cdot x}\cos\theta\ket{\nu_1}-e^{ip_2\cdot x}\sin\theta\ket{\nu_2})\\\\
&=e^{ip_1\cdot x}\cos^2\theta+e^{ip_2\cdot x}\sin^2\theta\\\\
P_{\nu_e\to\nu_e}(x)&=|\braket{\nu_e|\nu_e(x)}|^2\\\\
&=1-\sin^22\theta\sin^2[\frac{(p_1-p_2)x}{2}]
\end{aligned}
$$
这个振荡实际上来源于中微子的动量不准.

我们能够估算振荡的波长：$p_{1,2}\approx E-\frac{m_{1,2}^2}{2E}$，$(p_1-p_2)x\approx-\frac{(m_1^2-m_2^2)}{2E}=1$时有明显振荡，$m_1^2-m_2^2\approx(10^{-2}\text{eV})^2$.

$x\approx\frac{E}{\Delta(m^2)}$，其中核反应典型能量是$1\text{eV}\sim1\mu\text{m}^{-1}$. 所以典型的长度是$10^4\text{m}$. 在这里，太阳到地球的路程中，中微子团振荡了很多次，最后到地球时，很难是一个峰值，一般都会少一些.

> 至于为什么平均效果是少了$1/3$，是因为我们上面只算了两种中微子，但是实际上有三种.

---

从第 12 章开始，我们开始研究四态系统.

> 为什么不讲三态？
>
> ——你们难道不记得期中考试有个 spin - 1 的问题吗？

从两粒子态开始，以氢原子的超精细结构（hyper-fine structure）为例. Bohr 能级是$\text{eV}$量级，而精细结构（fine structure）是其下一阶的效应（所谓的自旋-轨道耦合，但是这并不是一个好的名字，实际上应该叫做“一阶相对论修正”，来源于电子磁矩与轨道磁矩的作用），显然精细结构的量级是$v^2/c^2$量级，也就是$\alpha^2$量级，为 Bohr 能级的$10^{-3}\sim10^{-4}$倍；超精细结构是自旋-自旋耦合，为$10^{-5}\text{eV}$量级（$21\text{cm}$谱线）.

==能量越低，对应的波长越长.==

还有一个效应是 Lamb 位移（Lamb shift），来源于电磁场的真空涨落，量级和超精细结构一样.

超精细结构是电子和质子的自旋耦合，这里我们要讲一讲张量积空间. 首先，对于单粒子，可以用两个量来描述：动量$\vec{p}$，螺旋度$\sigma=\vec{s}\cdot\hat{p}$. 单粒子写成$\ket{\vec{p},\sigma}$.

双粒子的态用“张量积”描述，写成$\ket{\vec{p}_1,\sigma_1;\vec{p}_2,\sigma_2}=\ket{\vec{p}_1,\sigma_1}\otimes\ket{\vec{p}_2,\sigma_2}$. 这相当于把原来一个“接口”的元件黏在一起变成一个有两个“接口”的元件.

张量积空间指的是，如果两个粒子的态空间分别是$\mathscr{H}_A=\text{span}\{\ket{i_A};i=1,\cdots,M\}$，$\mathscr{H}_B=\text{span}\{\ket{j_B};j=1,\cdots,N\}$，则它们的张量积空间是$\mathscr{H}_A\otimes\mathscr{H}_B=\text{span}\{\ket{i_A}\otimes\ket{j_B}\}$.

从这里已经看出和直和的区别：$\dim(\mathscr{H}_A\otimes\mathscr{H}_B)=MN$.

张量积空间的内积：$(\bra{i_A}\otimes\bra{j_B})(\ket{k_A}\otimes\ket{l_B})=\braket{i_A|k_A}\braket{j_B|l_B}$.

> 我感觉这就像个并矢.

要注意的问题是全同粒子，不能写成$\ket{\vec{p}_1,\sigma_1;\cdots}$，因为我们只知道有一个粒子是$\vec{p}_1$，但是不能说是哪一个. 对全同 boson 的计算，需要枚举全排列，相加之后除以$n!$；而对于全同 fermion，在全排列的基础上，每交换一次就要乘上一个$-1$.

之后是算符的作用：对于$O=O_A\otimes O_B$，有
$$
\begin{aligned}
(O_A\otimes O_B)(\ket{i_A}\otimes\ket{j_B})&=O_A\ket{i_A}\otimes O_B\ket{j_B}\\\\
(\bra{i_A}\otimes\bra{j_B})(O_A\otimes O_B)(\ket{k_A}\otimes\ket{l_B})&=\braket{i_A|O_A|k_A}\braket{j_B|O_B|l_B}
\end{aligned}
$$
接下来我们能够开始思考超精细结构. 但是首先我们想要问一个问题：为什么会耦合？在 Newton 力学中，太阳的自旋和地球的自旋就没有耦合. 我们的耦合来源于电磁相互作用.

我们现在开始跟着 Feynman 做对称性分析. 现在我们是两个粒子的系统，共四个态， Hamiltonian 是$4\times4$的（复）矩阵，理论上有 32 个自由度；但是 Hamiltonian 为 Hermite 矩阵（$H=H^\dagger$），共 16 个方程，只剩下 16 个实参数.

我们要在对称性分析之后让这个矩阵只剩下 2 个自由度.

这节课我们并不能讲完对称性分析，但是能例举所有对称性的输入.

电子态空间：$\{1^e,\sigma_i^e\}$；质子态空间：$\{1^p,\sigma_i^p\}$，在$\mathscr{H}_e\otimes\mathscr{H}_p$中，一组 Hamiltonian 的基是
$$
\left\{\begin{array}{lr}
\Sigma_{00}=1^e\otimes1^p\longrightarrow\text{scalar}\\\\
\Sigma_{0j}=1^e\otimes\sigma_j^p\longrightarrow\text{vector}\\\\
\Sigma_{i0}=\sigma_i^e\otimes1^p\longrightarrow\text{vector}\\\\
\Sigma_{ij}=\sigma_i^e\otimes\sigma_j^p\longrightarrow\text{tenser of 2}
\end{array}\right.
$$

Hamiltonian 是空间旋转下的标量，所以这其中只能出现标量：

$$
H=A\cdot\Sigma_{00}+B\cdot\Sigma_{ii}
$$

==注意：矩阵的迹也是一种标量！==
