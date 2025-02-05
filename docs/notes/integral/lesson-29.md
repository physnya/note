---
title: Lesson 29
createTime: 2024/12/27 14:04:26
permalink: /integral/integral/gx8v19r3/
---
# 高等微积分 Lesson 29

## 换元公式

/Theorem/

> 设$\varphi:J\to I$是$C^1$的，设$f\in C(I)$，则$\forall a,b\in I$，$A,B\in J$满足（端点对齐）$\varphi(A)=a$，$\varphi(B)=b$，有
> $$
> \int_a^bf(x)\text{d}x=\int_A^Bf(\varphi(t))\varphi'(t)\text{d}t
> $$

此版本的换元公式对于$f$要求比较多，必须连续；而对$\varphi$的要求很少，只要求$C^1$（甚至允许$\varphi$不单）. 之后在高维版本的换元公式中，对$\varphi$的要求会变高，要求$\varphi$是双射，且$C^1$；而对于$f$的要求降低为要求可积.

我们这个一维版本的证明中用到了 Newton - Leibiniz 公式，绕开了$f$中间细致的内容，只需要端点对齐就可以换元.

下面来看一些应用.

/Claim/ （奇函数和偶函数的积分化简）

> 1. 奇函数在对称区间上的积分消失.
>
>    设$f(-x)=-f(x)$，$\forall x$，$I=I_+\cup I_-$且$I_-=-I_+$. 则有
>    $$
>    \int_{I_+}f+\int_{I_-}f=0
>    $$
>
> 2. 偶函数在对称区间上的积分是单侧的两倍.
>
>    设$f(-x)=f(x)$，$\forall x$，则
>    $$
>    \int_{I_-}f=\int_{I_+}f
>    $$

从几何上看这个命题是显然的，当然也可以使用换元公式给出一个证明：

/Proof/

> 记$I_+=[a,b]$，$I_-=[-b,-a]$. 对奇函数有
> $$
> \int_{I_-}f=\int_{-b}^{-a}f(x)\text{d}x\overset{x=-y}{=}\int_a^bf(-y)\text{d}y=-\int_a^bf(y)\text{d}y=-\int_{I_+}f
> $$
> 得证. 偶函数反之.

可以发现，在一维下的对称性是很容易看出来的，但是等到我们学习高维的积分时，会发现对称性难以看出来，这时候就需要利用换元公式来计算. 观察积分的对称性时，用换元公式更易实现，也更加机械化.

/Claim/ （周期函数积分）

> 周期函数在一个周期内的积分不依赖于起点的位置.
>
> 假设$f$的周期为$T$，也即$f(x+T)=f(x)$，$\forall x$. 则
> $$
> \int_a^{a+T}f(x)\text{d}x=\int_0^Tf(x)\text{d}x
> $$

/Proof/

> 几乎是显然的. 有
> $$
> \begin{aligned}
> \text{LHS}&=\int_a^Tf+\int_T^{a+T}f\overset{x=T+y}{=}\int_a^Tf+\int_0^af(T+y)\text{d}y\\
> &=\int_a^Tf+\int_0^af(y)\text{d}y=\int_0^Tf(x)\text{d}x=\text{RHS}
> \end{aligned}
> $$

证毕.

一个更加奇怪的例子：

/Example/

> 设$f$是偶函数，证明：
> $$
> \int_{-a}^a(\frac{f(x)}{1+e^x})\text{d}x=\int_0^af(x)\text{d}x
> $$

/Proof/

> $$
> \begin{aligned}
> \text{LHS}&=\int_{-a}^0\frac{f(x)}{1+e^x}\text{d}x+\int_0^a\frac{f(x)}{1+e^x}\text{d}x\\\\
> &\overset{x=-y}{=}\int_a^0\frac{f(-y)}{1+e^{-y}}(-\text{d}y)+\int_0^a\frac{f(x)}{1+e^x}\text{d}x\\\\
> &=\int_0^a\frac{e^yf(y)}{1+e^y}\text{d}y+\int_0^a\frac{f(x)}{1+e^x}\text{d}x\\\\
> &=\int_0^af(x)\text{d}x=\text{RHS}
> \end{aligned}
> $$

证毕.

要想看出对称性，基本上都使用换元公式.

/Example/

> $$
> \begin{aligned}
> \int_{-r}^r(r^2-x^2)^{\frac{n}{2}}\text{d}x&\overset{x=r\cos\theta}{=}\int_\pi^0(r^2-r^2\cos^2\theta)^{\frac{n}{2}}(-r\sin\theta)\text{d}\theta\\
> &=\int_0^\pi r^n\sin^n\theta\cdot r\sin\theta\text{d}\theta\\
> &=r^{n+1}\int_0^\pi\sin^{n+1}\theta\text{d}\theta\\
> &=r^{n+1}\int_0^\frac{\pi}{2}\sin^{n+1}\theta\text{d}\theta+r^{n+1}\int_\frac{\pi}{2}^\pi\sin^{n+1}\theta\text{d}\theta\\
> &\overset{\theta=\pi-\alpha}{=}^{n+1}\int_0^\frac{\pi}{2}\sin^{n+1}\theta\text{d}\theta+r^{n+1}\int_\frac{\pi}{2}^\pi\sin^{n+1}(\pi-\alpha)(-\text{d}\alpha)\\
> &=2r^{n+1}I_{n+1}
> \end{aligned}
> $$
>
> 回忆之前的递推公式，$I_m=\frac{m-1}{m}I_{m-2}$，$\forall m\geq2$. 得到结果.

/Example/ （Gauss）

> 电荷分布均匀的球面产生的电场$\vec{E}$. 考虑球面$S^2=\{(x,y,z)|x^2+y^2+z^2=1\}$，所以$\vec{z}$轴上$(0,0,a)$点处的电场是
> $$
> \vec{E}\propto\iint_{S^2}\frac{\text{d}S}{(u^2+v^2+(w-a)^2)}\frac{\vec{r}}{r}=\iint_{S^2}\frac{(-u,-v,a-w)}{(u^2+v^2+(w-a)^2)^{3/2}}\text{d}S
> $$
> 因为$x$、$y$方向是奇函数，积分区间是对称区间，所以这两个方向的分量消失；考虑对$z$方向的分量的一维积分，应该有
> $$
> \begin{aligned}
> (\vec{E})_z&\propto\int_0^\pi\frac{(\cos x-a)\sin x}{(1+a^2-2a\cos x)^{3/2}}\text{d}x=\int_{-1}^1\frac{(u-a)\text{d}u}{(1+a^2-2au)^{3/2}}
> \end{aligned}
> $$
> ::: tip -
>
> 如果我假装我笨一点的话……哦根本不用假装.
> ——艾神
> 
> :::
>
> 考虑把分子上的$u$用完，写成
> $$
> \begin{aligned}
> &=\int_{-1}^1\frac{\frac{-2au+1+a^2}{-2a}+\frac{1-a^2}{2a}}{(1+a^2-2au)^{3/2}}\text{d}u\\\\
> &=\int_{-1}^1\frac{1}{-2a}(1+a^2-2au)^{-1/2}\text{d}u+\int_{-1}^1\frac{1-a^2}{2a}(1+a^2-2au)^{-3/2}\text{d}u\\\\
> &=-\frac{1}{2a}\frac{(1+a^2-2au)^{1/2}}{\frac{1}{2}(-2a)}|^1_{-1}+\frac{1-a^2}{2a}\frac{(1+a^2-2au)^{-1/2}}{-\frac{1}{2}(-2a)}|^1_{-1}\\\\
> &=\cdots
> \end{aligned}
> $$
> 这里一定要小心计算，不能算错，因为在考试的时候没有时间检查.
>
> ::: tip -
>
> 你能做完就不错了！
> ——艾神
>
> :::
>
> ::: danger -
>
> 我们来看看有没有算错……这看起来几乎是对的，我们就满足于此. 我漏抄了一个$1-a^2$？那这没办法，我抄漏了.
> ——艾神
>
> :::

## 反常积分

有时候我们想要在一个无穷的区间中做一个积分，那么这时就需要先积分再取极限. 或者有时在某点处被积函数无界，需要做截断，之后取极限.

这里我们就讲到了几种积分：
$$
\begin{aligned}
&\text{Riemann integral}=\int_{\text{bounded}}\text{bounded function}\\\\
&\text{infinite integral}=\int_{\text{unbounded}}\text{unbounded function}\\\\
&\text{improper integral}=\int_{\text{bounded}}\text{unbounded functiom}
\end{aligned}
$$
其中后面两种被称为反常积分，或者广义积分.

### 无穷积分

先截断、再取极限：

/Definition/

> 1. $$
>    \int_a^{+\infty}f(x)\text{d}x=\lim_{b\to+\infty}\int_a^bf(x)\text{d}x
>    $$
>
>    称无穷积分收敛 / 发散 $\iff$ 上述极限存在 / 不存在.
>
> 2. $$
>    \int_{-\infty}^bf(x)\text{d}x=\lim_{a\to-\infty}\int_a^bf(x)\text{d}x
>    $$
>
>    同理.
>
> 3. $\R$上的无穷积分：
>    $$
>    \int_\R f=\int_{-\infty}^\infty f(x)\text{d}x\overset{\text{defined as}}{=}\int_{-\infty}^0f+\int_0^\infty f
>    $$
>    称积分收敛 $\iff$ 两个积分均收敛；积分发散 $\iff$ 至少有一个积分发散.

如果每一次判断都需要用定义，未免太麻烦，所以我们写下一些命题方便判断.

/Claim/

> 若$\R$上无穷积分收敛，则可用对称截断计算：即
> $$
> \int_{-\infty}^\infty f=\lim_{R\to+\infty}\int_{-R}^Rf
> $$
> 证明：求和即可

注：从$\underset{R\to+\infty}{\lim}\int_{-R}^Rf$无法得到$\int_\R f$收敛，比如对任意奇函数都有极限值为$0$，但是$f(x)=x$的无穷积分在单侧不收敛，所以整体也不收敛.

/Example/

> $$
> \int_0^\infty e^{-x}\text{d}x=\lim_{b\to+\infty}\int_0^be^{-x}\text{d}x=\lim_{b\to\infty}-e^{-x}|^b_0=1
> $$

/Example/

> $$
> \begin{aligned}
> \int_1^\infty x^p\text{d}x&=\lim_{b\to\infty}\int_1^bx^p\text{d}x\\\\
> &=\left\{\begin{array}{lr}
> \underset{b\to\infty}{\lim}\frac{x^{p+1}}{p+1}|^b_1=\underset{b\to\infty}{\lim}\frac{b^{p+1}-1}{p+1}=\left\{\begin{array}{lr}
> \text{divergent}\,,\quad p+1>0\\\\
> \text{convergent}\,,\quad p+1<1
> \end{array}\right.\,,p\ne-1\\\\
> \underset{b\to\infty}{\lim}\ln x|^b_1=\underset{b\to\infty}{\lim}\ln b=\text{divergent}\,,\quad p=-1
> \end{array}\right.
> \end{aligned}
> $$

### 瑕积分

/Definition/

> 1. 右端点$b$是瑕点（$f$在$b$点无界）
>    $$
>    \int_a^bf=\lim_{\varepsilon\to0+}\int_a^{b-\varepsilon}f=\lim_{c\to b-}\int_a^cf
>    $$
>
> 2. 左端点$a$是瑕点（$f$在$a$点无界）
>    $$
>    \int_a^bf=\lim_{\varepsilon\to0+}\int_{a+\varepsilon}^bf
>    $$
>
> 3. 内部一点$c$为瑕点.
>    $$
>    \int_a^bf=\int_a^cf+\int_c^bf
>    $$

一个标准的例子是下面的：

/Example/

> $$
> \int_a^b\frac{1}{(b-x)^q}\text{d}x=\left\{\begin{array}{lr}
> \text{divergent}\,,\quad q\geq1\\\\
> \text{convergent}\,,\quad q<1
> \end{array}\right.
> $$

## 判断无穷积分的收敛性

区分非负函数的无穷积分对应的方法和一般函数对应的方法.

### 非负函数无穷积分收敛性

也就是$f\ge0$，在$[a,+\infty)$上. 则
$$
\int_a^{+\infty}f\text{ is convergent}\iff\lim_{b\to\infty}F(b)
$$
同时根据一致收敛原理，等价于$\{F(b)|b\geq a\}$有上界.

/Claim/

> 设$f$非负，则
> $$
> \int_a^\infty f\text{ is convergent}\iff\{F(b)=\int_a^bf|b\ge a\}\text{ has sup}
> $$

根据上面的命题，我们可以提出一个极为重要的定理，

/Theorem/ （比较定理）

> 设$0\leq f\leq g$，则
>
> 1. 若$\int_a^\infty g$收敛，则$\int_a^\infty f$收敛；
> 2. （上面的逆否命题）若$\int_a^\infty f$发散，则$\int_a^\infty g$发散.

/Proof/

> 只证明第 1 条即可.
>
> $\int_a^\infty g$收敛 $\Longrightarrow$ $\{G(b)=\int_a^bg\}$有上界$K$，所以$F(b)\leq G(b)\leq K$，$\forall b$，因此$F(b)$有上界，所以$\int_a^\infty f$收敛.

构建不等式难于计算极限，所以我们考虑使用算极限的方式给出比较定理的另外一个形式：

> 设$f,g\geq0$，且$\underset{x\to\infty}{\lim}\frac{f(x)}{g(x)}=L\in\R_{\geq0}\cup\{$符号$+\infty\}$.
>
> 1. 若$\int_a^\infty g$收敛，且$L\in\R_{\geq0}$，则$\int_a^\infty f$收敛；
> 2. 若$\int_a^\infty g$发散且$L\neq0$，则$\int_a^\infty f$发散；
> 3. 若$L\in\R_+$，则两个积分收敛性一致.

/Proof/

> 只证明第 1 条：设$\lim\frac{f}{g}=L<+\infty$，则$\exist M$使得$\forall x\geq M$有$\frac{f(x)}{g(x)}<L+1$.
>
> 此时$f(x)\leq g(x)(L+1)$，由比较定理知道，因为$\int_M^\infty(L+1) g$收敛，所以$\int_M^\infty f$收敛.

/Example/

> 分析下面积分的收敛性：
> $$
> I=\int_2^{+\infty}\frac{\text{d}x}{x^k\ln x}
> $$
>
> 1. 若$k>1$，则
>    $$
>    \frac{1}{x^k\ln x}\leq\frac{1}{x^k\ln2}
>    $$
>    回忆$1/x^k$的收敛性，由比较定理知道积分收敛.
>
> 2. 若$k<1$，则
>    $$
>    \lim_{x\to+\infty}\frac{\frac{1}{x^k\ln x}}{\frac{1}{x^k x^\varepsilon}}=\lim_{x\to+\infty}\frac{x^\varepsilon}{\ln x}=+\infty
>    $$
>    取$0<\varepsilon\leq1-k$，$I$发散.
>
> 3. 若$k=1$，就是$\ln(\ln x)$，发散.

### 一般函数的无穷积分

$\int_a^\infty f$收敛 $\iff$ $\underset{b\to\infty}{\lim}F(b)$存在，可以类比数列的 Cauchy 准则，得到前面的表述等价于$\forall\varepsilon>0$，$\exist K>0$使得$\forall b_2>b_1\geq K$有$|F(b_2)-F(b_1)|<\varepsilon$.

/Theorem/ （Cauchy 准则）

> $\int_a^\infty f$收敛 $\iff$ $\forall\varepsilon>0$，$\exist K>0$使得$\forall b_2>b_1\geq K$有$|F(b_2)-F(b_1)|<\varepsilon$.

推论：若$\int_a^\infty|f|$收敛，则$\int_a^\infty f$收敛.

/Proof/ （推论的证明）

> 已知$\int_a^\infty|f|$收敛，由 Cauchy 准则知$\forall\varepsilon>0$，$\exist K>0$使得$\forall b_2>b_1\geq K$有$\int_{b_1}^{b_2}|f|<\varepsilon$，所以
> $$
> |\int_{b_1}^{b_2}f|\leq\int_{b_1}^{b_2}|f|<\varepsilon
> $$
> 再用 Cauchy 准则知道$\int_a^\infty f$收敛.

由上面的推论可以给出一个新的概念：

/Definition/ （绝对收敛）

> 称$\int_a^\infty f$绝对收敛，若$\int_a^\infty|f|$收敛；条件收敛，若$\int_a^\infty f$收敛且$\int_a^\infty|f|$发散.
>
> 绝对收敛显然强于收敛.

无穷积分收敛有可能是绝对收敛，也有可能是条件收敛，一个条件收敛的例子：

/Example/

> 考虑
> $$
> \int_1^\infty\frac{\sin x}{x}\text{d}x
> $$
> 首先证明收敛：对于复杂的广义积分，只能分部计算.
> $$
> \begin{aligned}
> \int_1^b\frac{\sin x}{x}\text{d}x&=\int_1^b\frac{(-\cos x)'}{x}\text{d}x=-\frac{\cos x}{x}|^b_1-\int_1^b(-\cos x)(-1)x^{-2}\text{d}x
> \end{aligned}
> $$
> 所以
> $$
> \int_1^\infty\frac{\sin x}{x}\text{d}x=\cos 1-\int_1^\infty\frac{\cos x}{x^2}\text{d}x
> $$
> 因为$\int_1^\infty|\frac{\cos x}{x^2}|\text{d}x$收敛，所以去掉绝对值也收敛，因此要证明的积分也收敛.
>
> 其次证明绝对值积分发散：反证法，设收敛，而
> $$
> \frac{|\sin x|}{x}\geq\frac{\sin^2x}{x}
> $$
> 因此 RHS 收敛，但是
> $$
> \int\frac{\sin^2x}{x}\text{d}x=\int\frac{1-\cos2x}{2x}\text{d}x
> $$
> 拆分成两项，后一项可证明收敛，所以$\int_1^\infty\frac{1}{2x}\text{d}x$收敛，这不成立，所以假设不成立，绝对值积分发散.

## 瑕积分收敛性判断

艾神：建议大家看去年的课程回放.

<s>$\uparrow$显然是讲不完了</s>

## 计算广义积分

/Theorem/ （分部积分）

> $$
> \int_0^\infty f'g=fg|^\infty_0-\int_0^\infty fg'
> $$

/Proof/

> $$
> \text{LHS}=\lim_{b\to\infty}(\int_a^bf'g)=\lim_{b\to\infty}(fg|^b_a-\int_a^bfg')=\text{RHS}
> $$
>
> 得证.

证毕.

/Example/ （Gauss 积分）

> 实际上我们还不会计算，因为要用到二维的积分（唉这个实在是刻在 DNA 里面了，我觉着也没必要讲），将其作为已知条件：
> $$
> \int_{-\infty}^\infty e^{-x^2}\text{d}x=\sqrt{\pi}
> $$
> 在此基础上，求：
> $$
> \int_{-\infty}^\infty e^{-ax^2-bx-c}\text{d}x\,,\quad(a>0)
> $$
> 上式得到
> $$
> \begin{aligned}
> &=\int_{-\infty}^\infty e^{-a(x+\frac{b}{2a})^2+\frac{b^2-4ac}{4a}}\text{d}x\\
> &=e^{\frac{b^2-4ac}{4a}}\int_{-\infty}^\infty e^{-(\sqrt{a}(x+\frac{b}{2a}))^2}\frac{\text{d}(\sqrt{a}(x+\frac{b}{2a}))}{\sqrt{a}}\\
> &=e^{\frac{b^2-4ac}{4a}}\int_{-\infty}^\infty e^{-y^2}\text{d}y/\sqrt{a}\\
> &=e^{\frac{b^2-4ac}{4a}}\sqrt{\frac{\pi}{a}}
> \end{aligned}
> $$

