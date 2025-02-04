---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 15
createTime: 2024/12/18 17:10:12
permalink: /Feynman-III/Feynman-III/ncje8ocq/
---
## 2024-12-18

### 氢原子（标准的解法）

我们现在能直接讲如何解氢原子. Feynman 在其他专题里面都使用自己的方法，但是在这里他使用了最正统的方法，想必是他想不出更好的主意.

神奇的是，氢原子的 Schrodinger 方程是可以解析求解的，这样的偏微分方程极其少见，所以格外重要.

我们取坐标表象，也就是取$\bra{\vec{r}}$作为$\ket{\psi}$的基，$\psi(t,\vec{r})=\braket{\vec{r}|\psi}$.

将$\vec{r}$、$\vec{p}$写成算符：$\hat{\vec{r}}$、$-i\hbar\nabla$. Hamilton 算符是$\hat{H}=\frac{\hat{\vec{p}}^2}{2m}+V(\hat{\vec{r}})$. 约化质量是$m$，
$$
m=\frac{m_em_p}{m_e+m_p}
$$
在质量相差悬殊时，约化质量被小质量所控制.

球坐标系下，$\nabla^2$的形式要求被记下来（松神的数理方程课）：
$$
\nabla^2\psi=\frac{1}{r}\frac{\partial^2}{\partial r^2}(r\psi)+\frac{1}{r^2}[\frac{1}{\sin^2\theta}\frac{\partial}{\partial\theta}(\sin\theta\frac{\partial\psi}{\partial\theta})+\frac{1}{\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}]
$$
它等于：
$$
\nabla^2\psi=-\frac{2\mu}{\hbar^2}(E+\frac{e^2}{r})\psi(\vec{r})
$$
实际上写到这里就已经决定了它是一个定态，波函数并不含时间，实际上$\psi(t,\vec{r})=e^{-iEt/\hbar}\psi(\vec{r})$；同时因为是束缚态，所以我们只考虑$E<0$的情形.

大家可能听说过这个方程的解是 Laguerre 多项式，实际上它不是一个“特殊函数”，而是简单函数的组合.

解应当是球对称的，$\psi(\vec{r})=\psi(r,\theta,\phi)$.
$$
\frac{1}{r}\frac{\partial^2}{\partial r^2}(r\psi)=-\frac{2m}{\hbar^2}(E+\frac{e^2}{r})\psi
$$
下面的每一步都是有意义的，必须要掌握这种技术.

#### Step 1 无量纲化

首先是无量纲化，所有的能量都用 Rydberg 常量去除，所有的长度都用 Bohr 半径去除，有
$$
E=\frac{me^4}{2\hbar^2}\epsilon\,,\quad r=\frac{\hbar^2}{m_e^2}\rho
$$
实际上我们的变量是$f=r\psi$. 无量纲化的方程是
$$
\frac{\text{d}^2f}{\text{d}\rho^2}=-(\epsilon+\frac{2}{\rho})f
$$

#### Step 2 渐进行为

在$\rho\to\infty$时，得到一个可以口算的方程：
$$
\frac{\text{d}^2f}{\text{d}\rho^2}=-\epsilon f\Longrightarrow f\sim e^{\pm\sqrt{-\epsilon}\rho}
$$
当然应该衰减，所以取负号，$f\sim e^{-\sqrt{-\epsilon}\rho}$. 在近处，解应该对指数有所偏离，但是偏离的程度一定不会太大，因为在远处一定近似为一个指数衰减. 我们将这种偏离参数化为$g(\rho)$，得到$f(\rho)=e^{-\alpha\rho}g(\rho)$，其中$\alpha=\sqrt{-\epsilon}$.

现在的主要矛盾变成$g(\rho)$的求解，满足方程
$$
\frac{\text{d}^2g}{\text{d}\rho^2}-2\alpha\frac{\text{d}g}{\text{d}\rho}+\frac{2}{\rho}g=0
$$
虽然上面的做法看起来非常随机，一会猜指数、一会找级数，但是有经验了就会发现这是解偏微分方程的一些标准的操作，化为级数之后可解的程度和原来的函数是一样的，这就是“做辅助线”的地方（或者叫做，critical point）.

#### Step 3 级数求解

我们考虑$g(\rho)=\underset{k=1}{\overset{\infty}{\sum}}g_k\rho^k$，将第$k$次代入方程：
$$
\sum_{k}[g_{k+1}(k+1)k-2\alpha g_kk+2g_k]\rho^{k-1}=0
$$
（这是平庸的计算，但是就像骑自行车，如果不自己试一试就永远不会.）

递推式是：
$$
g_{k+1}=\frac{2\alpha k-2}{(k+1)k}g_k
$$
当$k\to\infty$，上式的渐进行为是
$$
g_k\sim\frac{(2\alpha)^k}{k!}\Longrightarrow g(\rho)\sim\sum_{k=1}^\infty\frac{(2\alpha)^k}{k!}\rho^k\sim e^{2\alpha\rho}
$$
竟然回到了我们一开始想要去掉的指数增长解. 所以递推式一定在某一个位置出现截断，才能得到指数衰减解.

假设在某一个位置，分子为$0$，则某处$\alpha k=1$，也就是$\alpha=1/k$量子化，等价于说能量量子化. 如果写成$\alpha=1/n$（$n=1,2,\cdots$），$n$叫做主量子数. 能量可以写成：
$$
\epsilon=-\frac{1}{n^2}\longrightarrow E=-\frac{R}{n^2}
$$

---

讲点题外话：$1/r$势极为特殊，有兴趣者可以思考$1/r^3$势等等，会发现这种系统并没有好的定义，电子会落到原子核上面去.

---

对于非球对称的解（一般解），角动量守恒，有
$$
\vec{L}^2\ket{lm}=l(l+1)\ket{lm}\,,\quad L_z\ket{lm}=m\ket{lm}
$$
球谐函数$Y_{lm}(\vec{r})=\braket{\vec{r}|lm}$，角动量算符是
$$
\vec{L}^2=\hbar^2[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}(\sin\theta\frac{\partial}{\partial\theta})+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}]\,,\quad L_z=-i\hbar\frac{\partial}{\partial\phi}
$$
其实在原来的 Schrodinger 方程里面已经有包含，最后得到
$$
\frac{1}{r}\frac{\partial^2}{\partial r^2}(r\psi)=-\frac{2\mu}{\hbar^2}[E+\frac{e^2}{r}-\frac{\hbar^2l(l+1)}{2\mu r^2}]\psi
$$
角动量不为零的修正是$\psi(\vec{r})=F_{nl}(r)Y_{lm}(\hat{r})$. 其中$l$为角量子数，$m$为磁量子数. 上式中$\mu$是质量.

渐进行为$F(\rho)\sim e^{-\alpha\rho}G(\rho)$，$G(\rho)=\underset{k=1}{\overset{\infty}{\sum}}G_k\rho^k$，递推关系
$$
G_{k+1}=\frac{2\alpha k-2}{k(k+1)-l(l+1)}G_k
$$
为得到指数衰减，分子为零，分母不为零，所以$k>l$，所以
$$
F_{nl}(\rho)\propto e^{-\alpha\rho}\sum_{k=l+1}^nG_k\rho^k
$$
一般解：$\ket{n,l,m}$，主量子数$n=1,2,\cdots$；角量子数$l=1,2,\cdots,n-1$；磁量子数$m=-l,\cdots,l$. 三者分别量度能量、总角动量、角动量$z$方向分量.

所以 Hamiltonian 作用在这个态$\ket{n,l,m}$上，得到的结果只和主量子数有关. 不依赖于磁量子数是容易理解的，因为它甚至依赖于坐标的选取；但是不依赖于角量子数是 untrivial 的，它表明还有一个新的对称性 —— Laplace - Runge - Lenz 矢量.
$$
\vec{R}=\frac{\vec{p}\times\vec{L}+\vec{L}\times\vec{p}}{\mu}-\frac{e^2\vec{r}}{r}
$$
上面已经写成 Hermite 化的形式，因为$\vec{L}$和$\vec{p}$不对易；有$[R_i,H]=0$，$[L_i,R_j]=i\varepsilon_{ijk}R_k$（角动量和任何量的对易关系就是做一个无穷小的旋转，因为角动量控制着旋转变换，而任何一个矢量都是“像矢量一样做旋转变换的量”，所以不用计算就知道$[L_i,R_j]=i\varepsilon_{ijk}R_k$.）

上面两组对易关系表明，能量关于$l$简并 —— 这件事只在平方反比力和线性力下成立. 如果我们想要知道这种对称性生活在什么样的群里面，可以考虑升降算符：
$$
\vec{A}_\pm=\frac{1}{2}(\vec{L}\pm\sqrt{\frac{\mu}{-2H}}\vec{R})
$$
它的对易关系是：
$$
[A_{\pm i},A_{\pm j}]=i\varepsilon_{ijk}A_{\pm k}\,,\quad[A_{\pm i},A_{\mp j}]=0
$$
每个$\vec{A}_+$、$\vec{A}_-$生活在 SO(3) 中，它们的直积恰好是 SO(4). 当$\vec{A}_+$作用在某一个态上，可以将这个态的$l$上升$1$.

---

稍微讲一下宇称. 在这个系统中，宇称变换定义为$\vec{r}\to-\vec{r}$. 显然这不改变$\vec{r}$的大小，所以主量子数不会变，只会改变球谐函数，实际上经过计算能够得到$Y_{lm}(-\hat{r})=(-1)^lY_{lm}(\hat{r})$.

选择定则（selection rule）：当我们学电动力学时，我们知道辐射的领头阶应当是偶极辐射，当$l$为奇数，是奇宇称态；$l$为偶数，是偶宇称态，偶极辐射大致是$e\hat{r}$的一个算符，所以辐射完之后得到的态一定是和之前的态宇称不同.

如果研究辐射之后的幅，应该有内积：
$$
\int(e\hat{r})\psi_{n_1l_1m_1}\psi^*_{n_2l_2m_2}\ne0
$$
偶极辐射算符作用之后，得到的$l_1$变成$l_1\pm1$，所以$l_2$只能是$l_1\pm1$，因为这组基是正交的. 这就将我们刚刚提到的“辐射之后宇称改变”条件加强成为“辐射之后$l$改变$1$”.