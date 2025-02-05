---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 4
createTime: 2024/11/14 00:57:18
permalink: /Feynman-III/Feynman-III/1wkgdymv/
---
## 2024-11-13

==记住 Pauli 矩阵!!!!!==

上节课讲到反对易括号，并且说明了，在不引起歧义的情况下，会把$\delta_{ij}I_n$中的单位矩阵略去不写.

真正重要的是“对易子（对易括号，commutation）”，在我们之后的学习中更加常用：
$$
[A,B]=AB-BA
$$
这刻画了矩阵乘法的不交换性，显然具有明确的物理意义，这就能看出为什么这个量如此重要. 而前面讲的反对易括号，可以理解为进行了一种 fermion 的交换作用.

三维空间的旋转具有不可交换性，这也可以用对易括号描述. 一个有关对易括号的重要命题：
$$
[\sigma_i,\sigma_j]=2i\varepsilon_{ijk}\sigma_k
$$
问题：为什么这里有一个$i$？

> 因为$\sigma$是 Hermitian 矩阵，很容易证明 Hermitian 矩阵的对易括号一定不是 Hermitian 矩阵.

课堂练习：求$\sigma_2$、$\sigma_3$的对易子.

>$$
> \sigma_2=\begin{pmatrix}
> 0&-i\\i&0
> \end{pmatrix}\,,\quad\sigma_3=\begin{pmatrix}
> 1&0\\0&-1
> \end{pmatrix}
>$$
>
> 得到
>$$
> \sigma_2\sigma_3=\begin{pmatrix}
> 0&i\\i&0
> \end{pmatrix}\,,\quad\sigma_3\sigma_2=\begin{pmatrix}
> 0&-i\\-i&0
> \end{pmatrix}
>$$
> 最后
>$$
> [\sigma_2,\sigma_3]=2\begin{pmatrix}
> 0&i\\i&0
> \end{pmatrix}
>$$

这是相当重要的. 一个结论是，$\sigma_i\sigma_j=\frac{1}{2}(\{\sigma_i,\sigma_j\}+[\sigma_i,\sigma_j])$，代入前面讲到过的结论，得到$\sigma_i\sigma_j=\delta_{ij}+i\varepsilon_{ijk}\sigma_k$.

对于任意的$\vec{A},\vec{B}\in\R^3$，有
$$
\begin{aligned}
(\vec{A}\cdot\vec{\sigma})(\vec{B}\cdot\vec{\sigma})&=A_i\sigma_iB_j\sigma_j=\delta_{ij}A_iB_j+i\varepsilon_{ijk}A_iB_j\sigma_k\\\\
&=\vec{A}\cdot\vec{B}+i(\vec{A}\times\vec{B})\cdot\vec{\sigma}
\end{aligned}
$$
接下来就能讲讲物理的内容. 考虑空间旋转和角动量$J_i$，显然对易括号$[J_i,J_j]=i\varepsilon_{ijk}J_k$.

问题：为什么对易括号的 RHS 没有系数 2？

> 因为在这里我们定义角动量为$1/2\cdot\sigma$，当然也可以是$\lambda$倍，这只是一种归一化的手段.

你会发现$J$甚至可以用作三维空间矢量的定义：如果一个量和角动量的对易子$[J_i,B_j]$满足$[J_i,B_j]=i\varepsilon_{ijk}B_k$，则这个量$B$是三维空间的矢量.

当然我们在知道如何计算$J$与矢量的对易子之后，我们就能计算它与并矢的对易子.

我们希望对$[\frac{1}{2}\sigma_i,\frac{1}{2}\sigma_j]=i\varepsilon_{ijk}(\frac{1}{2}\sigma_k)$做指数映射之后得到第 6 章中求出的自旋-1/2 粒子在三维空间中旋转的表示矩阵.
$$
D_i^{1/2}(\phi)=e^{[i\phi\sigma_i/2]}
$$
计算：
$$
e^A=\sum_{i=0}^\infty\frac{1}{i!}A^i
$$
所以
$$
\begin{aligned}
e^{i\phi\sigma_1/2}&=\sum_{n=0}^\infty\frac{1}{n!}(i\phi\sigma_1/2)^n\\\\
&=\sum_{i=0}^\infty(\frac{i\phi}{2})^n\frac{1}{n!}\sigma_1^n
\end{aligned}
$$
因为$\sigma_1^{2n+1}=\sigma_1$，$\sigma_1^{2n}=I_2$，最后结果为
$$
\begin{aligned}
D^{1/2}_1(\phi)&=\sum_{n=0}^\infty[(\frac{i\phi}{2})^{2n+1}\frac{\sigma_1}{(2n+1)!}+(\frac{i\phi}{2})^{2n}\frac{I_2}{(2n)!}]\\\\
&=i\sin\frac{\phi}{2}\cdot\sigma_1+\cos\frac{\phi}{2}\cdot I_2\\\\
&=\begin{pmatrix}
\cos\phi/2&i\sin\phi/2\\i\sin\phi/2&\cos\phi/2
\end{pmatrix}
\end{aligned}
$$
其他与这个一样，希望课后大家能去做一下练习.

==Pauli 矩阵是三维旋转的不变量.==

这是不平凡的，因为三维旋转下的不变量一般只有 0 矢量. 这件事成立是因为我们给$\vec{\sigma}$添加了一些内部的结构，这件事情在讲义上有详细证明.

（<s>我现在似乎还并不能理解这件事，等我慢慢看一下讲义罢</s>）

将任何三个二阶矩阵放在一起写成$\vec{A}=(A_1,A_2,A_3)$，都可以叫做一个三维矢量，但是为了说明$\vec{\sigma}$是特殊的，我们至少要做一次这样的计算.

考虑在三维空间中绕着$x$轴的旋转，则
$$
\sigma'_i=R_{ij}\sigma_j\,,\quad R_{ij}=\begin{pmatrix}
1&&\\&\cos\theta&\sin\theta\\&-\sin\theta&\cos\theta
\end{pmatrix}
$$
但是$\vec{\sigma}$是二位旋量空间中间的量，一定也可以使用二维的旋转表示矩阵表达它的旋转，得到
$$
\sigma''_i=D_x^{1/2}(\theta)\sigma_i[D_x^{1/2}(\theta)]^\dagger
$$
经过计算发现$\sigma''_i(-\theta)=\sigma_i'(\theta)$，这说明我们同时做这两个旋转就会得到原来的不变结果.

也就是：
$$
R_{ij}D\sigma_i D^\dagger=\sigma_j
$$
如果将 Pauli 矩阵$\sigma_i$同时 看作三维空间的矢量和二维旋量空间的 2 阶张量，那么$\sigma_i$是空间旋转变换的不变量．

其实$\sigma$还能被拓展为四维协变的形式：$\sigma_\mu=(I_2,\sigma_i)$.

（<s>“这回可是全是之乎者也之类，一些不懂了.”</s>）

中微子振荡：neutrino，不参与强相互作用的基本 fermion，是轻子（lepton）.

三代轻子分别为$e^-$、$\mu^-$、$\tau^-$，这一定对应着三种中微子$\nu_e$、$\nu_\mu$、$\nu_\tau$.

> 注意区分希腊字母$\nu$和英文字母$v$，区别在于其底部的转弯处是否可导.

中微子有质量，我们还不知道是多少，但是上限是$1\text{eV}$，这件事情已经违反了标准模型，说明标准模型一定有什么地方是错误的.

发现中微子是因为在研究中子衰变为电子和质子时，质子能谱不是分离的单值尖峰，而是一个连续谱，Pauli 就认为这里有一个看不见的粒子；但是 Bohr 认为这种解释方法简直是“物理学家之耻”，而是认为能量不守恒（这不是他第一次这样想了[^1]）.

四字：那时的物理学家生活在一个革命的年代，他们不觉得能量不守恒是什么了不起的事情，他们坚信物理学将会一直处于革命的过程中.

中微子振荡：中微子有所谓的“味”（flavour），这是它的一种本征态，但是不是质量的本征态. 振荡的表现是，中微子在传播的过程中会变化（从电子型变成中子型之类）.

中子和质子在某种意义上具有一种对称性，可以这样看：
$$
\begin{aligned}
&\braket{n,\pi^+|p^+}\\\\
&\braket{p^+,\pi^0|p^-}\\\\
&\braket{p^+,\pi^-|n}
\end{aligned}
$$
这看起来就是一个矢量$\begin{pmatrix}p\\n\end{pmatrix}$！这种对称性被称为 isospin（同位旋）.

---

下课之后的讨论：我在下课之后留在教室里和老师聊了一会（同时还有其他几个同学），在这里写一些收获. 当然这已经是晚上的事情了，所以很多东西还是会有偏差. （而且我现在喝了酒）

问题：能不能直接计算磁单极的荷质比？

> 如果是 Dirac 的磁单极子，那想必是不可能的. 虽然刚刚说了磁单极子是一个“孤子”（之前同学问的问题），但是这是在弱-电统一的理论框架下，这里是 SU(2) 对称性；而经典的理论中是 U(1) 对称的.

问题：到底为什么会有 isospin 这种东西？

> 想象一下一个电子，它的状态一开始是$\ket\psi$，之后随着时间演化，显然能变成$e^{i\theta}\ket\psi$，这是一种 U(1) 对称；
>
> 如果我现在有两个零质量、各种特性相同的粒子，它们分别有 U(1) 对称性，那么整体的对称性不是 U(1)$\otimes$U(1)，而是更强的对称性 SU(2)，这相当于我可以将这两个粒子视为某种矢量的分量，然后这两个分量的态不断地混合在一起，不改变整体的性质.
>
> p 和 n 两者也是一样.

附上一张图片，以便自己之后再回忆今天讲到的内容（虽然我不一定能看懂）

::: details 板书
::: demo-wrapper img no-padding
![板书](https://p.sda1.dev/20/b9a1256e624e9706d4a1c34d8f5c2810/1aab30fda862a0665d7ce23543c51d6.jpg)
:::
这图片有 1MB，加载可能会很慢.

---

[^1]: Griffiths 在《粒子物理导论》中说过.