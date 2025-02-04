---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 10
createTime: 2024/12/02 22:35:07
permalink: /Feynman-III/Feynman-III/xtk112gy/
---
## 2024-12-02

### 宇称变换

parity，三维空间里宇称的定义有若干种，比如$(x,y,z)\to(x,y,-z)$. 当然假如摆三个互成直角的镜子，我们可能可以得到$(x,y,z)\to(-x,-y,-z)$，这在三维空间中也是一个好的宇称变换，但是更高维度就不一定了. 所以我们提出了宇称的一个判断标准：
$$
[(\hat{x}\times\hat{y})\cdot\hat{z}]=\varepsilon_{ijk}\hat{x}_i\hat{x}_j\hat{x}_k
$$
也就是赝标量.

可以发现，讨论宇称时，我们往往要引入全反对称张量（$\varepsilon_{i_1i_2\cdots i_d}$），这个量能够辨别宇称变换. 使用这个量，我们能够在$d$维空间构造一个赝标量$\varepsilon_{i_1\cdots i_d}\hat{x}_{i_1}\cdots\hat{x}_{i_d}$. 当赝标量反号就是宇称.

其实宇称的定义是和空间本身的性质有关系的，试想我们如何在一个 Mobius 环上定义宇称？这件事情并不简单. 我们定义的宇称要求空间是“可定向”的（想想可定向流形）.

事实上，宇称的重要性在于只有弱作用中宇称不守恒：$H_{\text{weak}}P\neq PH_{\text{weak}}$. 这应当是常识的一部分，结论由李-杨给出.

---

###$\Lambda^0$的衰变

吴健雄先生的经典实验用的是 Co-60，证明弱相互作用下宇称不守恒，这是为大家所熟知的. 但是今天我们来了解另一个例子，也就是$\Lambda^0$的衰变过程.

$\Lambda^0$由 u、d、s 三个 quark 组成，自旋$-1/2$，$m_{\Lambda^0}=1116\text{MeV}$（在 Feynman 的时代这还不能确定，但是我们现在能够肯定地写出这个数值）.

这个衰变过程写成：$\Lambda^0\to p^++\pi^-$，其中 quark 的变化是 (uds)$\to$(uud) + (d$\bar{u}$)，这是一个弱相互作用的过程.

问题：有一个 s 到哪里去了？

> 只有弱作用里面会出现 quark 种类变化.

问题：逻辑错误，我们已经先验地知道了这些粒子的 quark 组成.

> 这是方便理解的措施. 但是当年大家也能通过简单的计算了解到一个过程由什么作用来主导. 方法是看一个过程的时间长短，越弱的作用其概率幅越小，相应地时间也越长.
>
> 所以如果一个粒子的寿命很长，它可能是通过弱作用衰变的.

现在有两种可能的过程：
$$
\text{uds}\to\left\{\begin{array}{lr}
\text{uud}\quad(p^+)\\
\text{W}^-\to\bar{\text{u}}\text{d}\quad(\pi^-)
\end{array}\right.
$$
和
$$
\text{uds}\to\left\{\begin{array}{lr}
\text{d}\\
\text{u}\\
\text{d}\\
\text{Z}^0\to\left\{\begin{array}{lr}
\bar{\text{u}}\\
\text{u}
\end{array}\right.
\end{array}\right\}\to(\text{uud}+\bar{\text{u}}\text{d})=p^++\pi^-
$$
后者的可能性很低.

只考虑前者，在质心系中角动量守恒：

::: center
<img src="https://p.sda1.dev/20/cf544a3ae0f036f4750db894d2c231eb/image-20241202160216522.png" alt="image-20241202160216522" style="zoom:80%;" />

<img src="https://p.sda1.dev/20/51832df8483eccccc27f0c1f00cad1ab/image-20241202160328822.png" alt="image-20241202160457658" style="zoom:80%;" />
:::

相当于把任意情况下的$\Lambda^0$分解到自旋上下两个态上，然后分析衰变的概率幅.

但是我们现在还是没有提到宇称. 现在我们对$b$所代表的那一个基础态做一次 parity 变换（在宇称变换中，动量反号、角动量不变，这是自然的. 任何一个量的定义里面有一个全反对称张量就会导致其宇称变换下的性质变化一次.），同时再做一次$180\degree$的旋转，我们完全就得到了$a$所代表的态，这是宇称守恒的情况.

如果宇称守恒，那么$|a|=|b|$，所以并没有 Legendre 多项式的那一个一阶项，我们在实验上就能通过出射质子的角度分布来判断宇称是否守恒.

### 守恒定律

对称性$\Longrightarrow$守恒律. 这里对称性体现为和$H$对易，也就是说对称变换$Q$满足$[Q,H]=0$. 取$Q$的本征态$\ket{t_0}$，得到$Q\ket{t_0}=e^{i\delta}\ket{t_0}$，由对易关系得到$[Q,U(t,t_0)]=0$.

故
$$
Q\ket{t}=QU(t,t_0)\ket{t_0}=U(t,t_0)Q\ket{t_0}=e^{i\delta}U(t,t_0)\ket{t_0}=e^{i\delta}\ket{t_0}
$$
也就是$Q$作用在任何一个态上，其相位是固定的，就是本征值的相位. 至此我们找到了一个守恒量$\delta$.

但是这并不是很好的，因为不是所有的态都是$Q$的本征态. 对于一般的动力学态$\ket{\psi}$，考虑$Q$的期望值$\braket{\psi|Q|\psi}$，得到
$$
\begin{aligned}
\braket{\psi(t)|Q|\psi(t)}&=\braket{\psi(t_0)|U^\dagger QU|\psi(t_0)}\\\\
&=\braket{\psi(t_0)|Q|\psi(t_0)}=\braket{Q}_t
\end{aligned}
$$
这也是一个守恒的量.

问题：是否循环论证了？

> 不然. 条件是算符之间的关系，而最后得到了一个数，所以没有循环.
>
> 同时要说明的是，这里的对称性和 Noether 定理里面的对称性不一样.

问题：$\delta$差$2\pi$怎么办？

> 因为时间演化是连续的，如果$\delta$能变到$\delta+2\pi$，那么中间一定会经过一个什么位置，那这就不守恒了.

一个简单的例子是绕$z$轴的转动对称性，看$R_z(\theta)$的本征态$\ket{m}$，有$R_z(\theta)\ket{m}=e^{i\delta(\theta)}\ket{m}$，这里$\delta$必须线性，假设系数是$m$，则有$\delta(\theta)=m\theta$，$m$守恒.

所以角动量守恒.

问题：为什么这就是角动量？

> 我们其实不知道. 这里的逻辑其实来自于我们叫它角动量，然后发现它在某些近似下退化成了我们在经典力学里面定义的角动量.
>
> （想想氢原子基态波函数，球谐函数里面的$m$参数！）

另一个例子是空间平移$x\to x+a$，本征态$T_x(a)\ket{k}=e^{i\delta(a)}\ket{k}$，所以$\delta(a)=ka$（因为线性），这显然是动量守恒. 同时值得注意的是，空间平移是 Abelian 群，因为任意群元可交换.

那么时间平移呢？Hamiltonian 是时间平移变换的生成元，它和自己肯定是对易的，所以这并没有意义. 实际上我们对时间平移对称的描述是 Hamiltonian 不显含时间.