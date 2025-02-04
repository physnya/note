---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 exercise
createTime: 2024/12/28 20:21:23
permalink: /Feynman-III/Feynman-III/p8boj4xu/
---
<s>这是 Feynman 物理学讲义 Vol.III 的习题课笔记，在发布的时间（2024-12-21）还有一节习题课没有上完，所以先置顶并保持更新，等到所有习题课结束之后将会取消置顶. 同时习题课笔记是以专题形式组织，并不能看出一个统一的主线，所以会考虑在开头做一个目录. 现在处于正在更新的状态，所以也请各位高手多多指教，修正错误，在下感激不尽.</s>

所有习题课均已经结束，本文在 2024-12-28 取消置顶.
第一次习题课因为时间冲突，我没有参加.

## 2024-10-12	白矮星

先讲了上次作业题的答案.

讲一些课外的知识：Pauli 不相容原理，关于这个知识，比较有意思的部分是白矮星、中子星的物态方程.

本节课讲义基本上是照抄 Weinberg 的天体物理讲义，1.8和1.10两节.

描述一个恒星需要哪些参数？这是一个球对称体系，我们需要知道$\rho(r)$或$M(r)$、$P(r)$、$T(r)$这些物理量的分布.

白矮星和中子星的特点就是，它们的压强是由 fermion 的简并压提供的. 对于白矮星，这个压强由电子的简并压提供（在温度比较低的情况下）.

首先要考虑在温度多低、密度多高的情况下，需要计及简并压的影响？在统计力学上，我们能给出一个条件：
$$
(\frac{N}{V})^{1/3}\lambda_T\gg1\,,\quad \lambda_T=\frac{h}{\sqrt{2\pi mk_BT}}
$$
其中热 de Broglie 波长的量纲比较重要，这里的系数是统计力学传统的写法，可以换成别的、同一数量级的其他可能系数.

我们要做的事情和做其他统计是一样的，先找到有多少种对应的量子态（和黑体辐射类似，找 mode number between$(k,k+\text{d}k)$per volume）.

自由电子是一列平面波，$\exp(i\bold{k}\cdot\bold{x}/\hbar)$，这里$\bold{k}$是动量，而不是波数.
$$
\begin{aligned}
&\bold{k}=\frac{2\pi\hbar\bold{n}}{L}\,,\quad\bold{n}=(n_x,n_y,n_z)\\\\
&\Longrightarrow4\pi n^2\text{d}n=(\frac{2\pi\hbar}{L})^{-3}\cdot4\pi k^2\text{d}k\times2
\end{aligned}
$$
2来源于电子有两种不同的自旋.

要求压强，实际上就是找到电子在能级上面的分布，而电子是从最低能级开始排列的.

在一个白矮星中，$\rho\sim m_p\mu n_e$，$\mu$是核子数比核电荷数.
$$
\rho(r)=\frac{8\pi m_p\mu}{h^3}\int_0^{k_F(r)}k^2\text{d}k=\frac{8\pi m_p\mu}{3h^3}k^3_F(r)
$$
我们目前还不知道 Fermi 动量$k_F(r)$是多少，先按下不表.

对于压强，有
$$
P(r)=\frac{1}{3}\int kvn(k)\text{d}k=\frac{8\pi c^2}{3h^2}\int_0^{k_F(r)}\frac{k^4}{\sqrt{k^2c^2+m^2_ec^4}}\text{d}k
$$
相对论在这里出现是因为在这种星体中相对论效应是显著的.

到这里为止量子力学的知识已经讲完了，剩下的是天体物理的内容.

考虑 Newton 经典引力的静力学平衡（广义相对论是不明显的）：
$$
\begin{aligned}
\frac{\text{d}P(r)}{\text{d}r}&=-\frac{GM(r)\rho(r)}{r^2}\\\\
\frac{\text{d}M(r)}{\text{d}r}&=4\pi r^2\rho(r)
\end{aligned}
$$
我们假设恒星的物态方程是$P=K\rho^\Gamma$，符合这种方程的恒星叫做“polytropes”，也就是“多方球”，这种恒星是常见的，方程形式也比较简单.

联立上述方程，得到
$$
\frac{\text{d}}{\text{d}r}(\frac{r^2}{\rho(r)}\frac{\text{d}}{\text{d}r}\rho^\Gamma(r))+\frac{4\pi G}{r^2}\rho(r)=0
$$
一般需要的边界条件是$\rho(0)$和$\rho'(0)=0$.

后面是 Lane - Emden 方程(￣へ￣)：
$$
\begin{aligned}
&\Theta=(\frac{\rho(r)}{\rho(0)})^{\Gamma-1}\\\\
&\frac{1}{r^2}\frac{\text{d}}{\text{d}r}(r^2\frac{\text{d}}{\text{d}r}\Theta)+\frac{4\pi G(\Gamma-1)}{K\Gamma}\rho^{2-\Gamma}(r)\Theta^{1/(\Gamma-1)}=0\\\\
&\xi=(\frac{4\pi G(\Gamma-1)}{K\Gamma})^{1/2}\rho^{(2-\Gamma)/2}(r)r\\\\
&\Longrightarrow\text{Lane - Emden Equation}\\\\
&\frac{1}{\xi^2}\frac{\text{d}}{\text{d}\xi}(\xi^2\frac{\text{d}}{\text{d}\xi}\Theta(\xi))+\Theta(\xi)^{1/(\Gamma-1)}=0\\\\
\end{aligned}
$$
之后的计算都是数学的. （<s>其实只是我敲不下来而已</s>）

考虑极端相对论性情形，$k_F=m_ec$，得到：
$$
\rho_c=\frac{8\pi m_p\mu m_e^3c^3}{3h^3}\approx0.97\times10^{6}\mu\,\text{g}/\text{cm}^3
$$
若实际上结果远小于这个值，那么就可以认为实际上粒子是极端非相对论性的.

1.$\rho(r)\ll\rho_c$，则
  $$
   \begin{aligned}
   &P=\frac{8\pi}{15m_eh^3}(\frac{3h^3\rho}{8\pi m_p\mu})^{5/3}\\\\
   &\Longrightarrow R\approx2.0\times10^4\mu^{-1}(\frac{\rho(0)}{\rho_c})^{-1/6}\,\text{km}\\\\
   &\Longrightarrow M\approx2.79\mu^{-2}(\frac{\rho(0)}{\rho_c})^{1/2}\,M_{\text{sun}}\\\\
   \end{aligned}
  $$

2.$\rho(r)\gg\rho_c$，类似的一些结果……（<s>没必要记下来啦</s>）

   Chandrasekhar 极限：$M=5.87\mu^{-2}M_{\text{sun}}$.

如果真的超过了 Chandrasekhar 极限，会发生什么呢？有两种可能的机制：

1. 中子化：$e^-+p\longrightarrow\nu_e+n$，临界的$\mu\approx2.15$，典型的是Fe变成Mn.
2. 广义相对论修正：刚刚我们忽略了 GR 的效应，但是在质量过大的时候会需要考虑 GR 的修正，这会造成白矮星的爆炸.

下面简单讲一些中子星的内容.

典型的过程：（超新星爆炸）
$$
\text{star}\longrightarrow\text{supernova}\longrightarrow\text{neutron star}
$$
仅仅留下一少部分电子，用来抑制中子衰变.

剩下的部分基本上就是对白矮星的结论做一个质量参数的替换而已. 但是极端相对论性的中子星会有许多特别的性质，这时要考虑强相互作用和剧烈的广义相对论效应.

注意到这一次讲的内容其实和之前平行线出过的一道题目很像，这道题目至今还在我的积累本里面.

## 2024-10-19	Casimir Effect

==之后上完课要看讲义的原文！四字老师的讲义和讲义原文是互补的关系，而不是包含的关系.==

本节课的主题是 Casimir Effect ，参考 Schwartz 的 QFT and the SM ，15.1节.

> 首先我要说一句，下面的单位制似乎有一点点混乱，有的地方是几何制，有的地方又是 SI 制.

效应来源于真空能的变化，导致产生两板之间的压力. 首先需要知道量子场的真空能如何计算：类比量子场为谐振子的集合，求和.

再简化，考虑一维情形，得到波动方程：
$$
(\frac{1}{c^2}\frac{\partial^2}{\partial t^2}-\frac{\partial^2}{\partial x^2})\phi(t,x)=0
$$
边界条件是$\phi(x=L)=\phi(x=0)=0$（一维“盒子”）.

猜解为$\phi(t,x)=\phi_k(t)\sin kx$，其中$k$取离散值，为$k_n=\frac{n\pi}{L}$，$n=1,2,\cdots$.

代入原方程，得到模方程：$\ddot{\phi}_k(t)+c^2k^2\phi_k(t)=0$.

这时就可以将整个量子场看作谐振子的集合，它就是一个$0+1$维的量子场（没有空间维度），而整个问题在一个$1+1$维的空间中考虑，多出来的空间维度产生了$k$.

我们知道谐振子能级$E_N=\hbar\omega(N+\frac{1}{2})$，$N=0,1,2,\cdots$，其零能级不是零. 对于$k_n$对应的谐振子，有能级$E_{nN_n}=\frac{n\pi\hbar c}{L}(N_n+\frac{1}{2})$（需要两个量来描述这个问题！）.

在真空情况下，所有的谐振子都在最低能级，$N_n=0$，$\forall n$. 所以可以写出真空能的形式：（这个系数可能会因为光子极化而乘上一个两倍）
$$
E_{\text{vac}}(L)=\sum_{n=1}^\infty\frac{n\pi\hbar c}{2L}=\frac{\pi\hbar c}{2L}\sum_{n=1}^\infty n
$$
这里出现了紫外发散，因为我们认为空间无限可分，波长可以无限小. 所以我们需要一个截断，这叫做正规化.

<s>其实这里可以直接用那个著名的公式$\underset{n=1}{\overset{\infty}{\sum}}n=-1/12$，但是这样显然非常不好.</s>

空间中某一处的真空能：
$$
\begin{aligned}
E_{\text{total}}&=E_{\text{vac}}(a)+E_{\text{vac}}(L-a)\\\\
F&=-\frac{\text{d}E_{\text{total}}}{\text{d}a}\\\\
&=(\frac{1}{a^2}-\frac{1}{(L-a)^2})\frac{\pi\hbar c}{2}\sum_{n=1}^{\infty}n
\end{aligned}
$$
我们漏掉了什么？

漏掉了一个物理上的考量：板是由原子构成的，频率过高的量子场（光子）与板之间不可能有相互作用，波长太小会使得它们直接从板中间穿过去，所以应该将这些高频的信号略去（截断）.

接下来讲正规化的方法. 如果我们不正确地做正规化，而是强行随便截断一些量，这样并没有理由，也不能得知是不是正确的.

### 硬截断（Hard Cut-off）

直接将$\omega>\pi\Lambda c$的项全部忽略掉（$\pi$只是让结果变得更好看的一个数而已）.
$$
\omega_{n\max}=\frac{n_{\max}\pi c}{L}=\pi\Lambda c\Longrightarrow n_{\max}=\Lambda L
$$
这样直接算的话会发现结果为零，这显然是零阶的结果，然而并没有什么作用；要想得到更进一步的结果，需要对$n_{\max}$向下取整，$n_{\max}'=\lfloor\Lambda L\rfloor$，最后结果为
$$
E_{\text{vac}}(a)=\frac{\pi\hbar c}{4a}\lfloor\Lambda a\rfloor(\lfloor\Lambda a\rfloor+1)
$$
但是这个函数会上下振荡（高斯振荡），所以考虑引入一个量$x\in[0,1)$，$x=\Lambda a-\lfloor\Lambda a\rfloor$，则最后的总能量为：
$$
E_{\text{total}}=\frac{\pi\hbar c}{4}[\Lambda^2L-\frac{x(1-x)}{a}]
$$
当$L$非常大时，$x$随着$a$的振荡越来越快，板已经感受不到随着距离变化如此高频的空间振荡，所以对上面的式子的一个空间周期做平均，$\int x(1-x)\text{d}x/\int\text{d}x=1/6$，得到
$$
\begin{aligned}
E_{\text{total}}(a)&=\frac{\pi\hbar c}{4}L\Lambda^2-\frac{\pi\hbar c}{24a}\\\\
F(L)&=-\frac{\pi\hbar c}{24L^2}
\end{aligned}
$$
在三维情况下的结果这里只写出，但是不做具体计算：$F(L)=-\frac{\pi^2\hbar c}{240L^2}A$，$A$是面积.

我们合理地对这个结果提出质疑：直接截断的粗暴方式是正确的吗？

下面尝试另外两种正规化的方式.

### 热核正规化

叫这个名字是因为方程形式很像热传导.

我们知道高频的量子场肯定不会全部作用到板上，考虑用指数函数表达频率越高对板的作用越弱：
$$
\begin{aligned}
E_{\text{vac}}(a)&=\frac{\hbar}{2}\sum_{n}\omega_ne^{-\omega_n/\pi\Lambda}\\\\
&=\frac{\pi\hbar c}{2a}\sum_{n=1}^\infty ne^{-\varepsilon n}\,,\quad \varepsilon=\frac{1}{\Lambda a}\ll1\\\\
&=\frac{\pi\hbar c}{2a}\partial_\varepsilon(\sum_{n=1}^\infty e^{-\varepsilon n})\\\\
&=\frac{\pi\hbar c}{2a}\frac{e^{-\varepsilon}}{(1-e^{-\varepsilon})^2}
\end{aligned}
$$
Taylor 展开，还是得到和上面硬截断一样的结果. （我还没打完字就被擦掉了，悲）

这一次的$E_{\text{total}}$的零点发生了变化，但是这是不可观测的，所以完全不影响结果，可以通过重整化消除.

还不满意？

### 再试一种正规化

这一次，
$$
\begin{aligned}
E_{\text{vac}}(a)&=\frac{\hbar}{2}\sum_n\omega_n(\frac{\omega_n}{\mu})^{-s}\\\\
&=\frac{\hbar}{2}(\frac{\pi c}{a})^{1-s}\mu^2\sum_{n=1}^\infty n^{1-s}
\end{aligned}
$$
其中$\mu$是一个大小无关紧要的能标.

这里出现了 Riemann$\zeta$函数，还是$1/12$的系数，这也是之前那个臭名昭著的公式的来源.

### 证明结果确实与正规化无关

假设：
$$
E_{\text{vac}}(a)=\frac{\pi\hbar c}{2}\sum_n\frac{n}{a}f(\frac{n}{a\Lambda})
$$
这是一般的，$f$可以是各种函数. 那么对于另外一边，得到
$$
E_{\text{vac}}(L-a)=\frac{\pi\hbar c}{2}(L-a)\Lambda^2\sum_n\frac{n}{(L-a)^2\Lambda^2}f(\frac{n}{(L-a)\Lambda})
$$
这里稍稍变形一下，是有用的.

上面两个求和都可以连续化，想象在一个曲线$f$下的面积，实际上就是上面两个求和式的结果. 在$L\to\infty$的极限下，有
$$
E_{\text{vac}}(L-a)\overset{L\to\infty}{=}\frac{\pi\hbar c}{2}L\Lambda^2\int\text{d}x\cdot xf(x)-\frac{\pi\hbar c}{2}a\Lambda^2\int\text{d}x\cdot xf(x)
$$
定义能量密度$\rho=\frac{\pi\hbar c}{2}\Lambda^2\int\text{d}x\cdot xf(x)$，总能量为：
$$
E_{\text{total}}(a)=\rho L+\frac{\pi\hbar c}{2a}[\sum_nnf(\frac{n}{a\Lambda})-\int\text{d}n\cdot nf(\frac{n}{a\Lambda})]
$$
这里对积分变量做了换元.

这是一个无穷求和和无穷积分的差值，本来显然是$0$，但是频率贡献一定有上限，所以上限不会是严格的正无穷，可以展开为所谓 Euler - Maclaurin 级数，即：
$$
\begin{aligned}
\sum_nF(n)-\int_0^N\text{d}n\cdot F(n)&=\frac{F(0)+F(N)}{2}+\frac{F'(N)-F'(0)}{12}\\\\
&\quad +\cdots+\frac{F^{j-1}(N)-F^{j-1}(0)}{j!}+\cdots
\end{aligned}
$$
在这里，$F(n)=nf(\frac{n}{a\Lambda})$，得到最后的总能量表达式：
$$
E_{\text{total}}=\rho L-\frac{\pi\hbar c}{24a}f'(0)-\frac{B_4}{4!}\frac{3\pi\hbar c}{2a^3\Lambda^2}f''(0)-\cdots
$$
只要$\underset{x\to\infty}{\lim}xf^{(j)}(x)=0$（$\forall j$）（这个是 Euler - Maclaurin 级数展开成立的必要条件），结果一定是一样的.

> 说明一下，这里的量纲有相当多的问题……可以不用管.

## 2024-10-26	WKB 近似

参考 Griffiths 的量子力学书，Chapter 9.

考虑一个定态，Schrodinger 方程：
$$
\begin{aligned}
\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}+V(x)\psi(x)&=E\psi(x)\\\\
\Longrightarrow\frac{\hbar^2}{2m}\frac{\text{d}^2\psi}{\text{d}x^2}&=-\frac{p^2}{\hbar^2}\psi
\end{aligned}
$$
其中，$p=\sqrt{2mE-V(x)}$.

当$V$是一个常数时，我们会得到一个平面波，这是 trivial 的；但是我们想要在$V$随着$x$变化时获得一个类似于平面波的结果，这时我们就需要近似，也就是 WKB 近似.

推导：假设这个波函数有一个“长得像”平面波的解，$\psi(x)=A(x)e^{i\phi(x)}$. 当然这里有一个前提，就是$E>V$，因为我们需要一个实数的波数；但是虚数的波数实际上是允许的，只是需要一次解析延拓. 让我们先从实数波数的情况开始.

代入 Schrodinger 方程，得到
$$
A''+2iA'\phi'+iA\phi''-A(\phi')^2=-\frac{p^2}{\hbar^2}A
$$
将实部和虚部分离，就得到两个稍微简单一些的方程：
$$
\begin{aligned}
&\frac{A''}{A}=(\phi')^2-\frac{p^2}{\hbar^2}\\\\
&2A'\phi'+A\phi''=0
\end{aligned}
$$
先解后面一个方程，凑一个全微分，就解得$A=C/\sqrt{|\phi'|}$，其中$C=\text{const}$.

代入前面一个方程，我们发现解这个方程相当困难，于是引入 WKB 近似的条件，也就是$\psi$类似平面波，其振幅变化很小，直接忽略$A''/A$这一项，解得
$$
\phi(x)=\pm\frac{1}{\hbar}\int p(x)\text{d}x
$$
所以 WKB 近似结果是
$$
\psi(x)=\frac{C}{\sqrt{|\phi'|}}e^{\pm\frac{i}{\hbar}\int p(x)\text{d}x}
$$
当然如果$p$是一个虚数，也就是$E<V$的情况，只是把相因子中的$i$去掉，再根据物理允许的条件去判断最终的结果.

但是我们会遇到一个问题：假若中间有一段区域的$V$变化非常快，以至于变化周期小于波长的量级，那么 WKB 近似将不再适用. 我们只能考虑 Connection Formula ，也就是用两边连接的方式把这一段也处理掉. 这是 WKB 近似中数学上最困难的部分.

对于某一处变化很快的$V$，用小段线性的势能替代原来的势函数.
$$
\begin{aligned}
&-\frac{\hbar^2}{2m}\frac{\text{d}^2\psi_p}{\text{d}x^2}+(E+xV_0')\psi_p=E\psi_p\\\\
&\frac{\text{d}^2\psi_p}{\text{d}x^2}=\alpha^3x\psi_p\,,\quad \alpha=(\frac{2m}{\hbar^2}V_0')^{1/3}
\end{aligned}
$$
令$z=\alpha x$，化简
$$
\frac{\text{d}^2\psi_p}{\text{d}z^2}=z\psi_p
$$
这是 Airy 方程. 方程的解是$\psi_p(x)=aA_i(\alpha x)+bB_i(\alpha x)$（后一项应该略去）. 这是一个 Patching Wave Function，用来连接其两端比较平缓变化的波函数.

考虑在两边的平滑区域（我们假设左边是$E>V$，右边是$E<V$），所以两边的解分别为：
$$
\psi(x)=\left\{\begin{array}{lr}
\frac{1}{\sqrt{P(x)}}[Be^{\frac{i}{\hbar}\int_x^0p(x)\text{d}x}+Ce^{-\frac{i}{\hbar}\int_x^0p(x)\text{d}x}]\,,\quad x<0\\\\
\frac{1}{\sqrt{P(x)}}De^{-\frac{1}{\hbar}\int_x^0p(x)\text{d}x}\,,\quad x>0
\end{array}\right.
$$
这里$B$，$C$和$D$均为待定常系数. 为了连接这两个解，我们之前的 Patching Wave Function 里面的积分需要被计算出来，有：
$$
\begin{aligned}
&p(x)=\sqrt{2m(E-E-V_0'x)}=\hbar\alpha^{3/2}\sqrt{-x}\\\\
&\int_0^x|p(x')|\text{d}x'\approx\hbar\alpha^{3/2}\int_0^x \sqrt{x'}\text{d}x'=\frac{2}{3}\hbar (\alpha x)^{3/2}\\\\
&\psi(x)\approx\frac{D}{\sqrt{t_0}\alpha^{3/4}x^{1/4}}e^{-\frac{2}{3}(\alpha x)^{3/2}}\\\\
&\psi_p(x)\approx\frac{a}{\sqrt\pi(\alpha x)^{1/4}}e^{-\frac{2}{3}(\alpha x)^{3/2}}+\cdots
\end{aligned}
$$
最后对$\psi_p$用到了渐近展开.

这样就能确定出$a=\sqrt{4\pi/\alpha\hbar}\cdot D$. 原点附近的函数和原点右边的函数接上了.

一个矛盾：渐近展开应该在变量很大的时候成立，而线性势近似应该在距离原点很近的时候进行，这里是不是有问题？答案是我们渐近展开的变量用的是$\alpha x$而不是单纯的$x$，这个矛盾不存在.

我们再次对原点左边的函数做同样的操作，这里可以发现$a$和$B$、$C$分别的关系，四个待定的参数$a$、$B$、$C$和$D$只有一个是独立的. 简单整理一下得到：
$$
B=-ie^{i\pi/4}D\,,\quad C=ie^{-i\pi/4}D\,,\quad a=\sqrt{\frac{4\pi}{\alpha\hbar}}D
$$
由此得到 WKB 近似的一般结果：
$$
\psi(x)\approx\left\{\begin{array}{lr}
\frac{2D}{\sqrt{p(x)}}\sin[\frac{1}{\hbar}\int_x^{x_2}p(x')\text{d}x'+\frac{\pi}{4}]\,,\quad x<x_2\\\\
\frac{D}{\sqrt{p(x)}}\exp[-\frac{1}{\hbar}\int_{x_2}^{x}|p(x')|\text{d}x']\,,\quad x>x_2
\end{array}\right.
$$
这里做了一个平移，把原点移到了$x_2$这个点的位置.

这里的$D$可以理解为归一化所需要的系数. 同时 Griffiths 说了一句令人费解的话：“可以在解完两个区域的解之后直接将中间的连接函数扔掉.”（<s>这个，不需要了.jpg</s>）

反正波函数的形式并不重要，重要的是中间的相因子，它可以直接确定能级的分布. 能级的分布有如下式子决定：
$$
\int_0^a\sqrt{2m(E_n-V(x))}\text{d}x=n\pi\hbar
$$
这决定了相因子在何时等于$\pi$.

对于谐振子，我们也可以这样算：$p(x)=\sqrt{2m(E-\frac{1}{2}m\omega^2x^2)}$（$V(x)=\frac{1}{2}m\omega^2x^2$，$x>0$；若$x<0$，则$V=+\infty$）. 计算积分得到
$$
\int_0^{x_2}p(x)\text{d}x=\frac{\pi E}{2\omega}
$$
刚好是谐振子能级的一半（因为这个势能也只有右边一半）：$E_n=(2n-\frac{1}{2})\hbar\omega$（$n\in\Z_+$）.

四字老师本来要助教讲 Bogoliubov Transformation ，但是老师觉得非常困难，需要先学二次量子化，于是不讲了.

## 2024-11-09	作业和考试讲评 & instanton

Homework 5，这几次作业比上课进度快了一整节课，所以大家做不出来很正常.

75.2 题，因为还没有讲 Pauli 矩阵，所以很难用一个标准的方法做出来. Pauli 矩阵是
$$
\sigma_x=\begin{pmatrix}
0&1\\1&0
\end{pmatrix}\,,\quad\sigma_y=\begin{pmatrix}
0&-i\\i&0
\end{pmatrix}\,,\quad\sigma_z=\begin{pmatrix}
1&0\\0&-1
\end{pmatrix}
$$
这时$\Delta H=-\mu\vec{\sigma}\cdot\vec{B}=-\mu(\sigma_xB_x+\sigma_yB_y+\sigma_zB_z)$，这就是 Hamiltonian 的一般形式. 这是很标准的量子力学做法，任何一门课都会讲.

在这种方法下，新的本征值是
$$
\ket{+1}'=\frac{1}{\sqrt{4+2\sqrt2}}\begin{pmatrix}
1+\sqrt2\\1
\end{pmatrix}\,,\quad\ket{-1}'=\frac{1}{\sqrt{4+2\sqrt2}}\begin{pmatrix}
-1\\1+\sqrt2
\end{pmatrix}
$$
总的态是$\ket{t}=a\ket{+1}'e^{i(\mu B/\hbar)t}+b\ket{-1}'e^{-i(\mu B/\hbar)t}$，初始条件$\ket{t=0}=\ket{+z}=\begin{pmatrix}1\\0\end{pmatrix}$.

75.3 题，用 Pauli 矩阵很容易就看出这里的 Hamiltonian 是一个匀强磁场产生的.
$$
H=\begin{pmatrix}
0&-A\\-A&0
\end{pmatrix}=-A\sigma_x
$$
在这里，两个本征态是
$$
\ket{+x}=\frac{1}{\sqrt2}\begin{pmatrix}
1\\1
\end{pmatrix}\,,\quad\ket{-x}=\frac{1}{\sqrt2}\begin{pmatrix}
1\\-1
\end{pmatrix}
$$
随时间变化的态$\ket{t}=a\ket{+x}e^{i(A/\hbar)t}+b\ket{-x}e^{-i(A/\hbar)t}$，初态$\ket{t=0}=\ket{+z}$. 之后照常计算.

76.1 题，Einstein 系数. 对于两个能级，有三种跃迁效应，分别是自发辐射（$A_{\text{I,II}}$）、吸收（$B_\text{II,I}$）、受激辐射（$B_{\text{I,II}}$），其中后面两种就是共振跃迁所对应的方式.

根据热平衡的条件，得到：
$$
0=\frac{\text{d}N_2}{\text{d}t}=-\frac{\text{d}N_1}{\text{d}t}=N_1A_\text{I,II}-N_2B_\text{II,I}J(\omega_0)+N_1B_\text{I,II}J(\omega_0)
$$
同时存在 Boltzmann 分布：
$$
\frac{N_2}{N_1}=e^{\frac{\hbar\omega}{k_BT}}
$$
解得$J(\omega_0)$.

Homework 6，和上课讲到的氨分子激射器一样，写出 Hamiltonian 之后推导.

重点讲一下期中考试的最后一道题：问问下面几个问题
$$
1\text{kg}=?\text{GeV}\,,\quad1\text{cm}=?(\text{eV})^{-1}\,,\quad1\text{Hz}=?\text{eV}
$$
很简单的做法是用常数补全上面式子的量纲，然后取自然单位制$c=\hbar=1$.

1. 一个质子质量差不多是$1\text{GeV}$，然后 Avogadro 常数是$10^{23}$量级，所以$1\text{kg}$是$10^{26}$量级.
2. ……

---

接下来讲 instantons. 想象一个时间演化$x_i\to x_f$，这个概率幅是$\braket{x_f|e^{-Ht/t_1}|x_i}$，但是这里和其他算法的不同之处在于，我们擦去了所有的“$i$”，这相当于将时间轴$t$旋转到虚数轴上，是一种解析延拓.

其实我们这样做只是想把时空变成 Euclidean 空间，可以回想一下狭义相对论下的 Mincowsky 空间是如何写的（$\vec{r}=(x_1,x_2,x_3,ict)$）.

这样，对时间积分之后得到
$$
N\int[\text{d}x]e^{-S_E/\hbar}
$$
取$m=1$，则 Hamiltonian 成为$H=p^2/2+V(x)$. 这里“$+$”号的来源是动量也乘上一个$-i$，导致作用量中动能和势能的符号变成一样的. 所以四字上课的时候会说，时间乘上一个$i$相当于在$V$上乘一个$-$号.

我们这样做的目的，源于$\int_0^\infty e^{it}\text{d}t$是不良好定义的，所以我们直接让这个积分作用在一个绝对收敛的围道上.

这个延拓的物理意义在于，在量子力学中的某个隧穿过程（想想氨分子双态系统的势能函数，势能为$V$）的驻点解，等效于一个经典力学中势能为$-V$的运动过程. 这种经典力学中的对应效果叫做一个 instanton（瞬子），因为这个过程相当地快.

这种方法实际上算起概率幅来还是比较困难的，因为经典对应解可能有无穷多个，比如直接到终点、往返一次到终点、往返两次到终点、……，这些可能性必须进入积分式中，所以这个方法的用武之地在量子场论.

## 2024-11-23	Heisenberg Model (Bethe Ansatz)

讲一下作业. 上一次作业的第一题第二问英文版答案是和题目无关的. 但是如果真的想要根据题目条件解出$\vec{\sigma}$，可以假设为
$$
\vec{\sigma}=\begin{pmatrix}
c&a-ib\\a+ib&-c
\end{pmatrix}=a\sigma_1+b\sigma_2+c\sigma_3
$$
因为$\vec{\sigma}$是 Hermitian 矩阵，同时根据第一个条件$\vec{\sigma}\times\vec{\sigma}=2i\vec{\sigma}$，能得到矩阵的 trace 是零，所以八个自由度减少到三个，恰好是三个 Pauli 矩阵的组合.

但是$a$、$b$、$c$能够组成一个旋转，只要这样就能满足$\vec{\sigma}\cdot\vec{\sigma}=-3I$.

剩下两个题目都比较简单，第二题是一个简单的三态系统，而最后一题是一个四态系统，只用求 Hamiltonian 的特征值就能够解决.

其中，最后一个题目能够拓展到$N$个原子，会得到能谱还是$E+2A\cos\delta$，其中$\delta=2n\pi/N$，$n=1,\cdots,N-1$.

---

一维 Heisenberg Model 的 Hamiltonian 是
$$
H=-\sum_{i,j}J_{ij}\vec{s}_i\cdot\vec{s}_j=-\frac{A}{2}\sum_n\vec{\sigma}_n\cdot\vec{\sigma}_{n+1}
$$
其中前面一个式子是任意维度的通式. 同时，书中还引入了自旋交换算符：
$$
S_{mn}=\frac{1}{2}(\vec{\sigma}_m\cdot\vec{\sigma}_n+1)
$$
若做一个能量零点的 shift，Hamiltonian 能够写成
$$
H=-A\sum_n(S_{n,n+1}-1)
$$
这里再引入升降算符，为
$$
\sigma_+=\frac{\sigma_x+i\sigma_y}{2}\,,\quad\sigma_-=\frac{\sigma_x-i\sigma_y}{2}
$$
其作用是$\sigma_+\ket{-}=\ket{+}$，$\sigma_-\ket{+}=\ket{-}$，对任意的量子系统都能定义这样的算符. 当自旋为同向时，系统为真空态（能量最低），因为$S_{n,n+1}$的本征值只能是$\pm1$（考虑这个东西的平方）. 之后我们能够将 Hilbert 空间分类，按照自旋向下的粒子数目将各个态分类，对于单粒子态的第$n$个态（第$n$个粒子自旋向下，其他粒子自旋向上），有$\ket{n}=\sigma_{n-}\ket{\text{vac}}$. 本征态：
$$
\ket{\psi}=\sum_{n=1}^Na(n)\ket{n}=\sum_{n=1}^Ne^{ikn}\ket{n}
$$
（这里将格点之间的间距直接取为$1$.）其能量是 Hamiltonian 对本征态作用的结果，有
$$
E=2A(1-\cos k)\,,\quad kN=2m\pi\,,\quad m=0,1,\cdots,N-1
$$
这里用到循环边界条件. 这个解像一个平面波.

上面是课堂上已经讲过的内容，现在我们来研究双粒子态，这种情况的维数是$C^2_N$，任意一个态是$\ket{n_1,n_2}$. 本征态是
$$
\ket{\psi}=\sum_{n_1,n_2}a(n_1,n_2)\ket{n_1,n_2}
$$
这个系数如何求解？这就要用到今天讲到的 Bethe Ansatz.

> 原来 ansatz 这个德语词是“坐在前面”的意思……

课上讲过，单粒子态能够看作一个准粒子，双粒子看作两个准粒子的叠加，为$e^{ikn_1}e^{ikn_2}$，但是这样做的后果是忽略了系统中间的相互作用，这不是一个好的 ansatz. 我们想在我们的 ansatz 中加入这个修正，对于两个粒子的相互作用，动量和能量都是守恒的，但是这里有一个对称性，所以唯一可能的情况是两者的动量和能量相互交换，所以 Bethe 的 ansatz 写成一个交换项：
$$
a(n_1,n_2)=c_1e^{i(k_1n_1+k_2n_2)}+c_2e^{i(k_2n_1+k_1n_2)}
$$
将这个 ansatz 代入本征方程，有两种情况：

1.$n_2>n_1+1$，两者不相邻，方程为
  $$
   \begin{aligned}
   Ea(n_1,n_2)&=-A[a(n_1-1,n_2)+a(n_1+1,n_2)+a(n_1,n_2-1)\\\\
   &\quad+a(n_1,n_2+1)-4a(n_1,n_2)]
   \end{aligned}
  $$

2. 两粒子相邻（$n_2=n_1+1$），为
  $$
   \begin{aligned}
   Ea(n_1,n_1+1)&=-A[a(n_1-1,n_1+1)+a(n_1,n_1+2)\\\\
   &\quad-2a(n_1,n_1+1)]
   \end{aligned}
  $$

如果定义一个没有物理意义的事实：$a(n,n)+a(n+1,n+1)=2a(n,n+1)$，则第一个方程实际上已经包含了第二个方程.

将 ansatz 代入解第一个方程，得到
$$
\frac{c_1}{c_2}=-\frac{1+e^{i(k_1+k_2)}-2e^{ik_1}}{1+e^{i(k_1+k_2)}-2e^{ik_2}}=\frac{\cos(k_1+k_2)/2-e^{i(k_1+k_2)/2}}{\cos(k_1+k_2)/2-e^{-i(k_1+k_2)/2}}
$$
这里能够发现$c_1$和$c_2$互为共轭，只相差一个幅角$\phi$，有$2\cot\phi/2=\cot k_1/2-\cot k_2/2$.

现在，Bethe Ansatz 能够写成：
$$
a(n_1,n_2)=e^{i(k_1n_1+k_2n_2+\frac{\phi}{2})}+e^{i(k_2n_1+k_1n_2-\frac{\phi}{2})}
$$
现在代入周期性边界条件：$a(n_1,n_2)=a(n_1,n_2+N)$，得到$k_1$和$k_2$应该满足的条件为
$$
\left\{\begin{array}{lr}
Nk_1=2\pi m_1+\phi\\
Nk_2=2\pi m_2-\phi
\end{array}\right.
$$
这里态的个数已经超过$C_N^2$了，需要排除一些情况. 首先，$m_1,m_2=0,\cdots,N-1$，同时$k_1\leq k_2$；当$k_1=k_2$时，$\phi=\pm\pi$，所以$m_1=m_2\pm1$或者$m_2$，若是前者就会导致$a=0$，解是 trivial 的，应该全部舍去，……（<s>助教说忘记为什么要舍去其他一些解了</s>）

最后我们剩下$m_1=0,1,\cdots,m_2-2$个态，一共$C_{N-1}^2$个，还少了$N-1$个态——这是束缚态，这里的$k_1$和$k_2$不一定是实数.

仍然成立的是
$$
e^{i\phi}=\frac{c_1}{c_2}=-\frac{1+e^{i(k_1+k_2)}-2e^{ik_1}}{1+e^{i(k_1+k_2)}-2e^{ik_2}}
$$
周期性边界条件还是成立，现在我们假设$k_1=u+iv$，$k_2=u-iv$（这里不是真的认为两者共轭，因为$u$、$v$都有可能是复数！但是这个形式我们很喜欢）代入循环条件得到
$$
u=\frac{\pi}{N}(m_1+m_2)\,,\quad\phi=\pi(m_2-m_1)+iNv
$$
$u$是一个实数. 回代有
$$
e^{i\pi(m_2-m_1)}e^{-Nv}=-\frac{\cos u-e^{-v}}{\cos u-e^{v}}
$$
在$N$很大的情况下，LHS 为$0$，近似下$v$也是实数，因为$e^{-v}\approx\cos u$.（这里我们用到$v$的实部是大于零的，当然如果小于零就是反过来而已）

最终得到 ansatz 是
$$
a(n_1,n_2)=\left\{\begin{array}{lr}
e^{i(n_1+n_2)k/2}\cosh v(\frac{N}{2}+n_1-n_2)\,,\quad m_1+m_2\text{ is even}\\\\
e^{i(n_1+n_2)k/2}\sinh v(\frac{N}{2}+n_1-n_2)\,,\quad m_1+m_2\text{ is odd}
\end{array}\right.
$$
（$k=2u$）束缚态的个数刚好是$N-1$个，束缚态在$n_1=n_2$时取最高值，获得一个峰，这是典型的束缚行为.

束缚态的能量是：
$$
\begin{aligned}
E&=2A(2-\cos k_1-\cos k_2)\\\\
&=2A(2-\cos(u+iv)-\cos(u-iv))\\\\
&=A(1-\cos(k_1+k_2))
\end{aligned}
$$
束缚能就是上面的能量与两个自由粒子能量的差值.

下面考虑$r$粒子态. 将两粒子态的 Bethe Ansatz 推广，得到：
$$
\ket{\psi}=\sum_{n_1<\cdots<n_r}a(n_1,\cdots,n_r)\ket{n_1,\cdots,n_r}\\
a(n_1,\cdots,n_r)=\sum_p\exp(i\sum_{j=1}^rk_{p_j}n_j+\frac{i}{2}\sum_{j<l}\phi p_jp_l)
$$
其中外面的求和号下面的$p$是 permutation 之意，每两个粒子交换都带来一个交换项.

其实这种情况的解和二粒子情况没有本质区别，能谱$E=2A\underset{i=1}{\overset{r}{\sum}}(1-\cos k_i)$. 最终得到$C_{N-r+1}^r$种散射态和$C_N^r-C_{N-r+1}^r$个束缚态.

## 2024-12-07	Wigner 定理

助教生病，平移一周习题课. 先讲一讲作业.

上上次作业：作业第一题，主要问题是大家可能不清楚$\mu_e$、$\mu_p$的值，实际上，
$$
\mu_e=-\frac{e\hbar}{2m_e}g_e\,,\quad\mu_p=\frac{e\hbar}{2m_p}g_p
$$
其中$g_e$可以用量子场论计算，$g_e\sim1$；$g_p$难以计算，因为质子并不是基本粒子，但是实验测量的结果是$g_p\sim2.79$，这两个量被称为“反常磁矩”.

第二题与课堂上的例子不同的地方在于，这里每个位置有两个能级，所以应该能写出两组方程. 之后求和做计算即可.

第三题和课上讲过的情况类似，也是有三个方程和其他位置的方程不同，猜解即可.

上一次作业：第一题很神奇，虽然不知道为什么能写成四态系统，但是按照题目的提示来写就行.

第二题和第三题是简单地解 Schrodinger 方程. 注意第三题，势能$V(x)$是奇函数还是偶函数需要分类讨论，这影响了波函数的奇偶性；之后数值求解的时候进行无量纲化.

---

对称变换大多是“unitary”的，或者说“酉”的. unitary 算符的条件是$\braket{U\psi|U\varphi}=\braket{\psi|\varphi}$.

一个特例是时间反演算符，它的定义是$\Theta^{-1}e^{-iHt/\hbar}\Theta=e^{iHt/\hbar}$. 将这个定义式展开到一阶，会得到：
$$
\Theta^{-1}(-iH)\Theta=iH
$$
中间保留$i$是因为我们提前知道$i$不能被简单地提出来. 推导得到
$$
-iH\Theta=\Theta iH\Longrightarrow-H\Theta=\Theta H
$$
作用到某一个能量本征态上会产生负的能量：
$$
H\Theta\ket{E}=-\Theta H\ket{E}=-\Theta E
$$
任意大的能量都能对应某一个任意负的能量，能量没有下限，这是不物理的. 所以我们要求$\Theta$反线性，也就是满足这样的条件：
$$
U(\alpha\ket{\psi}+\beta\ket{\varphi})=\alpha^*U\ket{\psi}+\beta^*U\ket{\varphi}
$$
但是如果一个算符反线性，就一定不是酉的，理由是如果一个算符既是反线性又是酉的，会有
$$
\alpha^*\braket{\psi|\varphi}=\braket{\psi|U\alpha\varphi}=\alpha\braket{\psi|\varphi}
$$
这不成立，假设于是也不成立.

如果我们想让时间反演还是对称变换的话，它就必须是反酉的，也就是$\braket{U\psi|U\varphi}=\braket{\psi|\varphi}^*$.

Wigner 定理说：对于任何一个对称变换，我们总能在 Hilbert 空间中找到一个变换，它要么是线性的（linear）、酉的（unitary），要么是反线性的（anti-linear）、反酉的（anti-unitary）.

首先我们需要知道什么叫做对称变换. 在物理世界中，描述某一个物体的状态，用的是 Hilbert 空间中的一条射线$R[\psi]=\{c\ket{\psi}||c|=1,c\in\mathbb{C}\}$（注意不是态矢量，因为相差一个幅角的态矢量是等价的）.

某一个变换$T:R\to TR$，满足将某两个状态$\ket{\psi_1}$、$\ket{\psi_2}$从$R_1$、$R_2$映射到$TR_1$、$TR_2$中之后，有$|\braket{\psi_1|\psi_2}|^2=|\braket{\psi_1'|\psi_2'}|^2$成立. 对称变换$U$保证射线上的某一个点（态矢量）会映射到对应的那一条射线上. 实际上我们的任务就是将这样的变换构造成线性酉变换和反线性反酉变换的形式.

在$R_\alpha$和$TR_\alpha$空间中分别取正交归一基，$|\braket{\psi_\alpha|\psi_\beta}|^2=\delta_{\alpha\beta}$，则变换之后的还是正交归一基.

现在取一个新的射线，它上面的一个态矢量是$\gamma_{1\alpha}=\frac{1}{\sqrt2}(\ket{\psi_1}+\ket{\psi_\alpha})\in S_\alpha$，我们同样能在$TS_\alpha$中找到一组正交归一基，$\gamma_{1\alpha}'=\sum c_{\alpha\beta}\ket{\psi_\beta'}$. 这里我们相位的选择是自由的（一条射线上就是不同相位的某一个态矢量），所以我们一开始只知道$|c_{\alpha\alpha}|=|\alpha_{\alpha1}|=\frac{1}{\sqrt2}$，但是现在能得到$c_{\alpha\alpha}=c_{1\alpha}=\frac{1}{\sqrt2}$，现在可以定义酉变换：
$$
U\psi_\alpha=\psi_\alpha'\,,\quad U\gamma_{1\alpha}=\gamma_{1\alpha}'
$$
现在已经确定了$U$作用在基矢量上面的效果，对于任意的一个态矢量射线$R$，都有
$$
U\ket{\psi}=\sum_\alpha c_\alpha U\ket{\psi_\alpha}=\sum_\alpha c_\alpha' U\ket{\psi_\alpha'}
$$
对于任何一个$c_\alpha$和$c_\alpha'$，有$|\braket{\psi_\alpha|\psi}|^2=|c_\alpha|^2=|\braket{\psi_\alpha'|\psi'}|^2=|c_\alpha'|^2$，这就和之前对基矢量的操作是一样的.

对于$\gamma_{1\alpha}$，有
$$
|\braket{\gamma_{1\alpha}|\psi}|^2=|\braket{U\gamma_{1\alpha}|\psi'}|^2\\
\Longrightarrow|c_\alpha+c_1|^2=|c'_\alpha+c_1'|^2
$$
最后一个式子等价于说：
$$
\frac{c_\alpha}{c_1}=\frac{c_\alpha'}{c_1'}\text{ or }\frac{c_\alpha}{c_1}=(\frac{c_\alpha'}{c_1'})^*
$$
下面证明了如果选择前者，所有基矢量都必须选前者；反之亦然.

> 真没看懂

于是对称变换只能有两种定义. 若取第一种情况，则$c_1=c_1'$，$c_\alpha=c_\alpha'$，有
$$
U\ket{\psi}=U(\sum_\alpha c_\alpha\ket{\psi_\alpha})=\sum_\alpha c_\alpha\ket{\psi_\alpha}
$$
取第二种情况，$c_1=c_1^*$，$c_\alpha=c_\alpha^*$，有
$$
U\ket{\psi}=U(\sum_\alpha c_\alpha\ket{\psi_\alpha})=\sum_\alpha c_\alpha^*\ket{\psi_\alpha}
$$
证明这个变换是酉的：
$$
\begin{aligned}
\braket{U\psi|U\varphi}&=\sum_\alpha\sum_\beta A_\alpha^*B_\beta\braket{U\psi_\alpha|U\psi_\beta}\\
&=\sum_\alpha\sum_\beta A_\alpha^*B_\beta\delta_{\alpha\beta}\\
&=\sum_\alpha A_\alpha^*B_\alpha=\braket{\psi|\varphi}\\\\
\braket{U\psi|U\varphi}&=\sum_\alpha\sum_\beta A_\alpha B_\beta^*\braket{U\psi_\alpha|U\psi_\beta}\\
&=\sum_\alpha\sum_\beta A_\alpha B_\beta^*\delta_{\alpha\beta}\\
&=\sum_\alpha A_\alpha B_\alpha^*=\braket{\psi|\varphi}
\end{aligned}
$$
实际上，这只是说，所有的对称变换都能找到线性酉变换、反线性反酉变换的表示，不代表其他表示是不行的，但是这已经够了，因为我们从此没必要去寻找其他的表示.

## 2024-12-14	Wigner - Eckart 定理

第十次作业比较简单. 第一题是纯粹的计算题. 第二题是自由粒子的 Gauss 波包，其实之前计算过，这里只是再使用 Schrodinger 方程计算一遍，直接将解代入方程，并要求$x$的同幂次项系数相同，得到一个关于$a(t)$和$c(t)$的微分方程组，最后得解. 之后做 Fourier 变换时，记住要求系数关系.

---

今天的内容：Wigner - Eckart 定理

从角动量算符开始说起. 一般来说，量子力学中的算符是把经典力学中的对应物理量算出来，然后将动量算符$\hat{p}$和坐标算符$\hat{x}$的形式代入就得到算符.

角动量是$\hat{J}_i=\varepsilon_{ijk}\hat{x}_j\hat{p}_k$，其中$\hat{x}_j=x_j$，$\hat{p}_k=-\text{i}\hbar\partial_k$，其对易子是$[x_i,p_j]=\text{i}\hbar$. 所以我们能计算角动量算符的对易子：
$$
[J_i,J_j]=\text{i}\hbar\varepsilon_{ijk}J_k\,,\quad[J^2,J_z]=0
$$
（这里参考的是 Weinberg 的量子场论书，所以以下将记号$\ket{j,m}$写成$\psi_j^m$.）

我们想到能够用角动量算符构造一个升降算符：
$$
[J_3,J_1\pm\text{i}J_2]=\text{i}\hbar J_2\pm\text{i}(-\text{i}\hbar )J_1=\pm\hbar(J_1\pm\text{i}J_2)
$$
所以
$$
J_3(J_1\pm\text{i}J_2)\psi_j^m=(m\pm1)\hbar(J_1\pm\text{i}J_2)\psi_j^m
$$
这相当于升降某一个态. 有
$$
(J_1\pm\text{i}J_2)\psi_j^m=\hbar\sqrt{j(j+1)-m^2\mp m}\psi_j^{m\pm1}
$$
更普遍地来说，从$m$变到$m'$的算符应该是
$$
\vec{J}\psi_j^m=\hbar\sum_{m'}\vec{J}_{m',m}^{(j)}\psi_j^{m'}
$$
在这里，$[J_3^{(j)}]_{m',m}=mS_{m',m}$，对易子
$$
[J_1^{(j)}\pm\text{i}J_2^{(j)}]_{m',m}=\sqrt{j(j+1)-m^2\mp m}\cdot\delta_{m',m\pm1}
$$
实际上这给出$2j+1$维的一个群表示. 现在定义算符$O_j^m$为
$$
\begin{aligned}
&[J_3,O_j^m]=\hbar mO_j^m\\\\
&[J_1\pm\text{i}J_2,O_j^m]=\hbar\sqrt{j(j+1)-m^2\mp m}\cdot O_j^{m\pm1}\\\\
&[\vec{J},O_j^m]=\hbar\sum_{m'}\vec{J}_{m',m}^{(j)}O_j^{m'}
\end{aligned}
$$
计算是自然的，但是问题在于为什么要这样定义算符. 实际上，这里的算符定义有一种等价的表述，更为直观：
$$
P(\alpha\beta\gamma)O_j^mP^\dagger(\alpha\beta\gamma)=\sum_{m'}D_{m',m}^{(j)}(\alpha\beta\gamma)O_j^{m'}
$$
题外话：为什么有一个 dagger？

> 这是幺正变换作用到算符上面的固定表达，想想其实是：
>$$
> O\ket{\psi}\longrightarrow(POP^\dagger)(P\ket{\psi})=P(O\ket{\psi})
>$$

下面的定义在意思上就像：这个算符像自旋 -$j$一样旋转.

下面讲讲这个算符可以干什么. 一个简单的情况是这个算符就是一个标量，它和其他算符的对易子是$[J_i,S]=0$.

更复杂一点的例子是矢量算符，
$$
\begin{aligned}
&[J_3,V^m]=\hbar mV^m\\\\
&[J_1\pm\text{i}J_2,V^m]=\hbar\sqrt{2-m^2\mp m}\cdot V^{m\pm1}
\end{aligned}
$$
如果看不出这是什么，可以用下面的坐标变换变到 Descartes 坐标下进行理解，
$$
V^{+1}=-\frac{V_1+\text{i}V_2}{\sqrt2}\,,\quad V^{-1}=\frac{V_1-\text{i}V_2}{\sqrt2}\,,\quad V^0=V_3
$$
（想想自旋 - 1 的旋转矩阵！）

另一个常见的矢量算符是球谐函数的第一阶$Y_{l=1}^m(\hat{x})$，对于张量算符，可以通过把变量换成一个任意矢量算符得到.

/Theorem/ （Wigner - Eckart 定理）

>$$
> (\Phi_{j''}^{m''},O_j^m\Psi_{j'}^{m'})=c_{j,j'}(j'',m'';m, m')(\Phi\parallel O\parallel\Psi)
>$$
>
> 小括号表示内积，$c_{j,j'}(j'',m'';m, m')$是 Clebsch - Gordan 系数，在我之前的笔记中写成$C^{j,m}_{j',m';j'',m''}$. 后面一串$\parallel$的意思后面会提到，现在只需知道这和$m$无关.
>
> > 这是 Weinberg 的记号规定，大师和正常人可能不太一样.

Weinberg 给出了一个“独家证明”，方法很有意思，虽然并不一定很严谨. 现在定义
$$
\Omega_{j,j'}^{m,m'}=O_j^m\Psi_{j'}^{m'}
$$
那么会有
$$
\begin{aligned}
J_i\Omega_{j,j'}^{m,m'}&=[J_i,O_j^m]\Psi_{j'}^{m'}+O_j^mJ_i\Psi_{j'}^{m'}\\\\
&=\hbar\sum_{m''}[J_i^{(j)}]_{m''m}\Omega_{j,j'}^{m,m'}+\hbar\sum_{m''}[J_i^{(j)}]_{m''m'}\Omega_{j,j'}^{m,m'}
\end{aligned}
$$
证明实际上已经完成了，因为这里定义的新的态，被角动量算符作用之后表现就像两个粒子组成的二粒子态，$\Omega_{j,j'}^{m,m'}\sim\ket{j,m}\otimes\ket{j',m'}$，这就是上面 C - G 系数的来由.

但是我们还需要说明为什么后面的东西和$m$无关. 这里再定义$\Omega_{j,j';j''}^{m''}$，意思是由$j$、$j'$两个总角动量的粒子合成的、总角动量为$j''$、$z$分量为$m''$的一个态，那么
$$
O_j^m\Psi_{j'}^{m'}=\sum_{j'',m''}c_{j,j'}(j'',m'';m,m'')\Omega_{j,j';j''}^{m''}
$$
得到
$$
\begin{aligned}
&\hbar\sqrt{j(j+1)-m^2\mp m}(\phi_j^{m\pm1},\psi_j^{m\pm1})\\\\
&=(\phi_j^{m\pm1},(J_1\pm\text{i}J_2)\psi_j^m)\\\\
&=((J_1\mp\text{i}J_2)\phi_j^{m\pm1},\psi_j^m)\\\\
&=\hbar\sqrt{j(j+1)-m^2\mp m}(\phi_j^m,\psi_j^m)
\end{aligned}
$$
这证明这个内积和$m$无关. 最后的$(\Phi\parallel O\parallel\Psi)=(\Phi_j^m,\Psi_j^m)$，与$m$无关.

---

下面是一个简单的应用——光的吸收和发射.

首先知道跃迁概率是
$$
\Gamma(a\to b)=\frac{4(E_a-E_b)^3}{c^3\hbar^4}|(b|D|a)|^2
$$
这个证明与本课无关，按下不表. 其中$D=\sum_n e_n\hat{x}_n$，$D_x=\frac{1}{\sqrt2}(-D^{+1}+D^{-1})$，$D_y=\frac{\text{i}}{\sqrt2}(D^{+1}+D^{-1})$，$D_z=D^0$.

所以$(b|D^m|a)\propto c_{j_a,1}(j_b,m_b;m_a,m)$，显然会有一些要求，比如$|j_a-j_b|\le1$，$j_a+j_b\ge1$，$|m_a-m_b|\le1$.

则
$$
\begin{aligned}
\braket{O_j^m}&=\frac{1}{2j'+1}\sum_{m'}(\psi_{j'}^{m'},O_j^m\psi_{j'}^{m'})\\
&=\frac{1}{2j'+1}[\sum_{m'}c_{j,j'}(j',m';m,m')](\psi\parallel O\parallel\psi)
\end{aligned}
$$
所以
$$
\sum_{m',m''}c_{j,j''}(j',m';m,m'')c_{\bar{j},j''}(j',m';\bar{m},m'')=\frac{2j'+1}{2j+1}\delta_{j\bar{j}}\delta_{m\bar{m}}
$$
同时还有一个更简单的结论，是
$$
\begin{aligned}
c_{0,j''}(j',m';0,m'')&=\delta_{j'j''}\delta_{m'm''}\\\\
\sum_{m'}c_{j,j'}(j',m';m,m')&=(2j'+1)\delta_{j0}\delta_{m0}
\end{aligned}
$$

## 2024-12-21   氢原子的 SO(4) 对称性

作业讲评：三个题都是 Feynman 书中第十八章的内容. 84.1 题按照书中的记号应该记作
$$
a\braket{+|R_y(\theta)|0}=\frac{1}{\sqrt2}a\sin\theta
$$
即得到答案.

84.3 题，光子自旋为 1，质子自旋为$\pm\frac{1}{2}$，总角动量取值只能有两种，释放之后的状态也只能有两种. 第二问中，使用自旋$\frac{3}{2}$的旋转矩阵，得到总的概率：
$$
\begin{aligned}
P(\theta)&=|a|^2|c|^2|\braket{\frac{1}{2}|R_y^{3/2}(\theta)|\frac{1}{2}}|^2+|a|^2|d|^2|\braket{-\frac{1}{2}|R_y^{3/2}(\theta)|\frac{1}{2}}|^2\\
&\quad+|b|^2|c|^2|\braket{\frac{1}{2}|R_y^{3/2}(\theta)|\frac{3}{2}}|^2+|b|^2|d|^2|\braket{-\frac{1}{2}|R_y^{3/2}(\theta)|\frac{3}{2}}|^2
\end{aligned}
$$
化简即可.

问题：角动量守恒吗？

> 实际上是指的激发态的质子的总角动量旋转$\theta$角得到的$\frac{1}{2}$的那一个分量才能释放$\pi^0$，在这个方向上角动量是守恒的.
>
> 和上面 84.1 一样，原子自旋为$0$，旋转$\theta$角方向的那个$+$的分量才有能力释放光子.

84.5 题，原子释放右旋光$a\braket{+|R_y(\theta)|+}$，左旋光$a\braket{-|R_y(\theta)|+}$. 第一问中不区分自旋，所以两者是概率相加，左旋光前面的宇称系数正负号不重要，所以无法区分；而第二问是$x$-$y$方向偏振，末态概率幅是：
$$
a\braket{+|R_y(\theta)|+}+Pa\braket{-|R_y(\theta)|+}
$$
这里测量的是一个纯态，$P$的正负对总概率的分布有影响.

问题：宇称变换的作用？

> ……无结果

---

讲氢原子的 SO(4) 对称性. 能级$n$的简并度应当是：
$$
\sum_{l=0}^{n-1}(2l+1)=n^2
$$
旋转矩阵的维数应该是$2l+1$维的，因为矩阵元应该是$\braket{m|j}$，$m$的取值有$2l+1$种. 可以看出，能级的简并度和角动量的简并度差距很大.

如果一个群$G\ket{\psi}=\sum R\ket{\psi}$，$G$称为群的一个表示. 不可约表示指的是和 Hamiltonian 对易的群表示. 可以看出，每一个不可约表示都确定了一个能级，$H=IE$，所以不可约表示的维数一定小于等于能级的简并度.

但是在氢原子中，则不仅仅是小于，而是远远小于，这个差距太大、要求太松以至于我们认为还有更强的对称性，也就是所谓的 SO(4) 对称性 —— Laplace-Runge-Lenz 矢量.

在经典力学中，这个守恒量意味着轨道闭合. 在量子力学中我们应该要能找到对应，量子力学中的对应版本是
$$
\vec{M}=\frac{\vec{p}\times\vec{L}}{m}-\frac{Ze^2}{r}\vec{r}
$$
但是量子力学中的守恒量应该要是 Hermitian，所以要改写成：
$$
\vec{M}=\frac{\vec{p}\times\vec{L}-\vec{L}\times\vec{p}}{2m}-\frac{Ze^2}{r}\vec{r}
$$
为验证它是 Hermitian，需要计算它和 Hamiltonian 的对易子，这个计算相当复杂，在这里可能要略去. 几个非常重要的性质：
$$
[AB,C]=A[B,C]+[A,C]B\\
[x,f(p)]=\text{i}\hbar\frac{\text{d}f}{\text{d}p}\\
[f(x),p]=\text{i}\hbar\frac{\text{d}f}{\text{d}x}\\
[A\times B,C]=A\times[B,C]+[A,C]\times B
$$
经过恐怖的计算，得到$[\vec{M},H]=0$. 更加恐怖的计算表明：
$$
M^2=\frac{2}{m}H(L^2+\hbar^2)+Z^2e^4
$$
可以计算$[M_i,L_j]$，记住，一个矢量和转动的对易，都是$\text{i}\hbar\varepsilon_{ijk}M_k$；同时也能计算$[M_i,M_j]$的计算，$[M_i,M_j]=-\text{i}\hbar\varepsilon_{ijk}\cdot\frac{2}{m}HL_k$，$M$自己无法构成一个闭合的代数；所以我们考虑$[L_i,L_j]=\text{i}\hbar\varepsilon_{ijk}L_k$，闭合.

如果引入算符$\vec{N}=(-\frac{m}{2H})^{1/2}\vec{M}$，则$H$能够被消去，构成一个闭合的代数. 其中$1/2$指数是合理的，因为束缚态的$H$正定$\Longrightarrow$$H$的逆正定$\Longrightarrow$$H$的逆有平方根（线性代数课上讲过）.

这个新构成的群有六个自由度，它的代数有六个生成元$[N_i,L_j]=\text{i}\hbar\varepsilon_{ijk}N_k$，刚好就==对应==着 4 维空间中的角动量：在 3 维的角动量上加上$L_{14}=x_1p_4-x_4p_1$、$L_{24}=x_2p_4-x_4p_2$、$L_{34}=x_3p_4-x_4p_3$三个分量，得到一个四维的转动群，这个转动群的生成元就是这六个角动量的分量，所以两个群代数上相同，群同构，所以这个群就是 SO(4) 群.

> 注意：这里并没有所谓的第四个坐标，只是我们用$\vec{N}$、$\vec{L}$构造出来的这个李代数和 SO(4) 完全同构而已，$x_4$是为了说清楚 SO(4) 的六个生成元才提到的.

如果引入
$$
\vec{I}=\frac{\vec{L}+\vec{N}}{2}\,,\quad\vec{K}=\frac{\vec{L}-\vec{N}}{2}
$$
那么它们分别和自己构成一个闭合的代数，$[I_i,I_j]=\text{i}\hbar\varepsilon_{ijk}I_k$，$[K_i,K_j]=\text{i}\hbar\varepsilon_{ijk}K_k$，这是 SO(3) 的代数，所以我们说 SO(4) 是两个 SO(3) 的直积.

同时$\vec{I}$、$\vec{K}$也有关系，$\vec{I}^2-\vec{K}^2=\vec{L}\cdot\vec{N}=0$，两者的本征值是一样的，记为$i=k$.

为什么要做上面这么多计算？因为就像谐振子的产生湮灭算符一样，我们用这种方法可以代数上的看出能级量子化这一事实，避免复杂的微分方程计算.

在这里，
$$
\vec{I}^2+\vec{K}^2=\frac{1}{2}(L^2-\frac{m}{2H}M^2)=\frac{1}{2}(-\hbar^2-\frac{Z^2e^4m}{2H})
$$
而
$$
H=-\frac{Ze^2m}{2}\frac{1}{2(i^2+k^2)+\hbar^2}=-\frac{Ze^2m}{2\hbar^2(2j+1)^2}
$$
$2j+1=1,2,\cdots,n$，在这个对称性下，我们讲到的不可约表示的维数和能级的简并度之间的空缺全部被填满，所以系统所有的对称性都被找到.

## 2024-12-28  Bell 不等式

作业：只有一个小问题，为什么不同能级发出的辐射强度是相同的？

> 因为所有的跃迁都一定会到基态去，而选择定则对跃迁做出了限制，所以跃迁的过程只能是 3d $\to$ 2p $\to$ 1s，这两个过程的原子数是一样的（甚至是相同的原子），所以发出的光子数是一样多，光强自然一样.

另外一题直接套公式就做完了.

---

接下来讲 Bell 不等式. 它来源于人们对于“测量”的一些思考.

考虑一个总自旋$\ket{0,0}$的纠缠态（两个态的合成），分解为下面的纠缠：
$$
\ket{\psi}=\frac{1}{\sqrt2}(\ket{+_1-_2}-\ket{-_1+_2})
$$
如果我们把这两个粒子 1 和 2 移开，使它们距离非常遥远，那么测量 1 粒子就能知道 2 粒子的态 —— 这本身并不离奇，因为经典中也能实现：用一黑一白两个棋子也能做到.

但是量子力学说，测量导致“塌缩”，那么这里的表述就变成：测量 1 粒子的状态，2 粒子的状态立即被塌缩. 这是超距作用，是不可接受的.

如果坚持局域性，假定测量 1 的时候，2 的波包一定不塌缩，那么这就要求分开两个粒子的一瞬间，2 的状态（$z$方向自旋）就已经被确定；但是如果是这样，我们就能再测量 1 的$x$方向自旋分量，从而精确地推知 2 的$x$方向自旋 —— 这违背了不同方向角动量分量算符不对易的基本原理. 这是 EPRB paradox.

最简单的解释当然是测量 1 时 2 的波包同时塌缩，但是一开始人们并不想接受这个“超距作用”的事实. 所以出现了很多对于量子力学的修正，其中一个就是讲义中的局域隐变量理论：考虑一个概率$\rho(\lambda)$，其中$\lambda$是隐变量，这里$\rho(\lambda)\geq0$，$\int\rho(\lambda)\text{d}\lambda=1$.

隐变量理论认为，纠缠态不是两个态的叠加，而是很多态的叠加：
$$
1\to\frac{\hbar}{2}S(\hat{a},\lambda)\,,\quad2\to-\frac{\hbar}{2}S(\hat{a},\lambda)
$$
其中每一个自旋依赖于$\lambda$，$\hat{a}$是$a$方向的自旋. 在这里，如果取$\hat{a}$是$z$方向，那么 2 确实应该相反；但是测量$x$分量并不会导致 2 的$x$方向自旋也被得知，因为还有很多种可能，2 只要是$-\frac{\hbar}{2}S(\hat{z},\lambda)$就行了.

为了证明这个理论正确，需要用它预言一些可观测的实验现象. 在隐变量理论下，期望值：
$$
\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{b})}=-\frac{\hbar}{4}\int\rho(\lambda)S(\hat{a},\lambda)S(\hat{b},\lambda)\text{d}\lambda
$$
在经典量子力学理论中，上面的期望应该这样计算：
$$
-(s_1\cdot\hat{a})(s_1\cdot\hat{b})=-\frac{\hbar^2}{4}\hat{a}\cdot\hat{b}-\text{i}\frac{\hbar}{2}(\hat{a}\times\hat{b})\cdot s_1
$$
（这是算符的性质，我们只是用$s_1$做计算，之后再将$s_2=-s_1$代入）后一项为零，所以如果要让隐变量理论符合当前的量子力学，这里必须有等式：
$$
\frac{\hbar}{4}\int\rho(\lambda)S(\hat{a},\lambda)S(\hat{b},\lambda)\text{d}\lambda=\frac{\hbar^2}{4}\hat{a}\cdot\hat{b}
$$
Bell 发现，如果从这个结果出发构造一个更复杂的情况，可以证明隐变量理论一定得出与当前量子力学不符的结果.

Bell 考虑引入一个新的方向$\hat{c}$，则
$$
\begin{aligned}
&\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{b})}-\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{c})}\\\\
&=\frac{\hbar^2}{4}\int\rho(\lambda)\text{d}\lambda\cdot S(\hat{a},\lambda)S(\hat{b},\lambda)[1-S(\hat{b},\lambda)S(\hat{c},\lambda)]
\end{aligned}
$$
根据绝对值不等式，应有
$$
\begin{aligned}
&|\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{b})}-\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{c})}|\\\\
&\leq\frac{\hbar^2}{4}\int\rho(\lambda)\text{d}\lambda\cdot |S(\hat{a},\lambda)S(\hat{b},\lambda)[1-S(\hat{b},\lambda)S(\hat{c},\lambda)]|
\end{aligned}
$$
同时上面式子中的$S(\hat{a},\lambda)S(\hat{b},\lambda)$可以取最大，直接取$1$是最方便的，这样就得到最初的 Bell 不等式，为
$$
|\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{b})}-\braket{(s_1\cdot\hat{a})(s_2\cdot\hat{c})}|\leq\frac{\hbar^2}{4}+\braket{(s_1\cdot\hat{b})(s_2\cdot\hat{c})}
$$
通过一些很特殊的构造，可以找到违背传统量子力学的结果. 一个例子是取$\hat{a}\cdot\hat{b}=0$，$\hat{c}=\frac{1}{\sqrt2}(\hat{a}+\hat{b})$，这样量子力学能计算得到
$$
\frac{\hbar^2}{4\sqrt2}\leq\frac{\hbar^2}{4}-\frac{\hbar^2}{4\sqrt2}
$$
实验上可以观测，确定实际上隐变量理论正确还是经典的量子力学正确.

但是在历史上，人们做的验证 Bell 不等式的实验是使用 Ca 原子释放两个光子，实际上仍然和上面讲的类似，稍微复杂一些.

依然用隐变量理论刻画这个过程，得到$S(\hat{a},\lambda)=\pm1$（光子是零质量的，只能有两种分量），所以
$$
\braket{S_1(\hat{a})S_2(\hat{b})}=\int\text{d}\lambda\cdot\rho(\lambda)S_1(\hat{a,\lambda})S_2(\hat{b},\lambda)
$$
同样构造 Bell 不等式：
$$
\begin{aligned}
&\braket{S_1(\hat{a})S_2(\hat{b})}-\braket{S_1(\hat{a})S_2(\hat{b'})}+\braket{S_1(\hat{a'})S_2(\hat{b})}+\braket{S_1(\hat{a'})S_2(\hat{b'})}\\\\
&=\int\text{d}\lambda\cdot[S_1(\hat{a},\lambda)S_2(\hat{b},\lambda)-S_1(\hat{a},\lambda)S_2(\hat{b'},\lambda)\\
&\quad+S_1(\hat{a'},\lambda)S_2(\hat{b},\lambda)+S_1(\hat{a'},\lambda)S_2(\hat{b'},\lambda)]
\end{aligned}
$$
上式左边的量因为角动量守恒的限制，会$\leq2$. 而传统量子力学给出：
$$
\braket{S_1(\hat{a})S_2(\hat{b})}=\frac{1}{2}[\cos^2\theta-\sin^2\theta-\sin^2\theta+\cos^2\theta]=\cos2\theta
$$
其中$\theta$为$\hat{a},\hat{b}$之夹角. 同样构造观测量
$$
\begin{aligned}
&\braket{S_1(\hat{a})S_2(\hat{b})}-\braket{S_1(\hat{a})S_2(\hat{b'})}+\braket{S_1(\hat{a'})S_2(\hat{b})}+\braket{S_1(\hat{a'})S_2(\hat{b'})}\\\\
&=\cos2\theta_{ab}-\cos2\theta_{ab'}+\cos2\theta_{a'b}+\cos2\theta_{a'b'}\leq2\sqrt2
\end{aligned}
$$
实验上测量得到的结果更加接近传统量子力学的结果，所以这种隐变量理论被排除. 当然还有很多其他的隐变量理论，这里不详细讨论.

---

课后问题：

$a$、$b$、$a'$、$b'$需要有关系吗？

> 我们只是想要一个尽可能大的结果以方便实验，所以这是一个多元函数极值和几何问题，不等式确实是任意时候都成立的，但是我们想要最显著的结果.