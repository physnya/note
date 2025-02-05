---
title: Lesson 25
createTime: 2024/12/13 12:17:02
permalink: /integral/integral/xa5ndm3u/
---
# 高等微积分 Lesson 25

## Riemann 积分的性质

实际上使用时，一般将 Riemann 积分作为“工具箱”，利用一些性质做推导. 有下面几个性质：

1. 关于被积函数线性

$$
\int_a^b(\lambda f(x)+\mu g(x))\text{d}x=\lambda\int_a^bf\text{d}x+\mu\int_a^bg\text{d}x
$$

这是显然的，因为 Riemann 和是线性的，
$$
\sum(\lambda f+\mu g)(\xi_i)\Delta x_i=\lambda\sum f(\xi_i)\Delta x_i+\mu\sum g(\xi_i)\Delta x_i
$$
取极限上式也是成立的.

2. 关于被积区域是可加的

$$
\int_a^c f(x)\text{d}x=\int_a^bf+\int_b^cf
$$

/Proof/

> 证明可以利用$f$在$[a,b]$、$[b,c]$上可积，使用 Riemann-Lebesgue 定理，得到间断点集$D(f)\cap[a,b]$、$D(f)\cap[b,c]$都是零测的，在$[a,c]$上的间断点集是上述两个集合的并集，也是零测的，所以$f$在$[a,c]$上可积.
>
> 进而，
> $$
> \int_a^cf=\lim_{P=P_1\cup P_2}(\sum_{[a,b]}f(\xi_i)\Delta x_i+\sum_{[b,c]}f(\eta_i)\Delta y_i)
> $$
> 其中$P_1$是$[a,b]$上的剖分，$P_2$是$[b,c]$上的剖分. 所以得到可加性：
> $$
> \int_a^cf=\int_a^bf+\int_b^cf
> $$
> 以上要求$a<b<c$，但是我们实际使用时希望解除掉这一限制，所以我们约定交换上下限就在积分前面加一个负号.
>
> > 上面约定的合理性需要研究积分上限小于积分下限的情况. 假设$a>b$，则现在考虑的剖分是$a=x_0>x_1>\cdots>x_n=b$，得到
> > $$
> > \begin{aligned}
> > \int_a^bf&=\lim_{\lambda(p)\to0}\sum f(\xi_i)\Delta x_i\\
> > &=\lim_{\lambda(p)\to0}\sum-f(\xi_i)|\Delta x_i|\\
> > &=-\int_b^af
> > \end{aligned}
> > $$

::: tip -

关于这一点有一个笑话：一个数学家请一位管道工给自己修水管，发现他一次收费达到了自己工资的三分之一，于是决定转行当管道工.
之后一次管道工公司进行职业技能培训，教大家如何计算圆的面积，数学家站起来积分却发现总是差一个负号，这时他的管道工同事纷纷叫道：“你交换积分上下限就行了.”
——艾神

:::

3. 积分不等式

设$f$、$g$可积，且$f(x)\leq g(x)$，$\forall x\in[a,b]$，则
$$
\int_a^bf\leq\int_a^bg
$$
/Proof/

> $$
> \sum f(\xi_i)\Delta x_i\leq\sum g(\xi_i)\Delta x_i
> $$
>
> 取极限就得证. 这时我们需要取等条件，我们希望，如果$f\leq g$，但是积分值相等，就能得到$f=g$.
>
> 这个想法并不切实际. 考虑在一个零测集上面修改$f$的值，将$f$变为$\tilde f$，且已知$f$可积，则
> $$
> \int_a^bf=\int_a^b\tilde f
> $$
> /Proof/
>
> > $$
> > \int_a^b\tilde f=\lim_{\lambda(p)\to0}\sum\tilde f(\xi_i)\Delta x_i=\lim\sum f(\xi_i)\Delta x_i=\int_a^bf
> > $$
>
> 所以改变$f$在有限多个点处的值，不影响可积性，也不改变积分值. 更加严谨的证明是，
>
> /Proof/
>
> > 改$f$为$\tilde f$，只在$E$上不同，$|E|<+\infty$，由$f$有界 $\Longrightarrow$ $\tilde f$有界；又显然$D(\tilde f)\subseteq D(f)\cup E$（因为$\forall x\notin E$，$\exist B_r(x)$与$E$不相交，这是因为$|E|$有限），则在$B_r(x)$中，$f=\tilde f$，可知$D(\tilde f)$零测.
> >
> > 上面的说明不严谨的地方在于没有要求$E$是有限集，如果$E$无限，就可能不存在$B_r(x)$与$E$不相交.
>
> /Claim/ （为了避免可积性的条件）
>
> > 设$f\in\mathcal{R}([a,b])$，设$E\subseteq[a,b]$是一个零测的闭集，设$\tilde f$和$f$只在$E$上不同，且$\tilde f$有界，则$\tilde f\in\mathcal{R}([a,b])$且$\int_a^bf=\int_a^b\tilde f$.
>
> /Proof/
>
> > 来看$D(\tilde f)$，$\forall x\notin E$，即$x\in E^C$（$E$的补集） $\Longrightarrow$ $\exist B_r(x)\in E^C$ $\Longrightarrow$ $B_r(x)$中$f=\tilde f$.
> >
> > 可知，$x\in D(\tilde f)$ $\Longleftrightarrow$ $x\in D(\tilde f)$，从而$D(\tilde f)\cap E^C=D(f)\cap E^C$，
> > $$
> > \begin{aligned}
> > D(\tilde f)&\subseteq(D(\tilde f)\cap E^C)\cup E\\\\
> > &=(D(f)\cap E^C)\cup E\\\\
> > &\subseteq D(f)\cup E
> > \end{aligned}
> > $$
> > 由$D(f)$、$E$零测，知道$D(\tilde f)$零测，再结合$\tilde f$有界可证明$\tilde f$可积.
>
> 回到积分不等式，我们可以发现，从$f\leq g$且$\int_a^bf=\int_a^bg$无法得到$f=g$.
>
> 上面的结果实际上只是一种警示，但是我们还是想得到一些正面的结果方便之后的计算，所以引入下面的命题：
>
> /Claim/
>
> > 设$f$、$g$皆连续，且$f(x)\leq g(x)$，$\forall x$，且
> > $$
> > \int_a^bf(x)\text{d}x=\int_a^bg(x)\text{d}x
> > $$
> > 这里$a<b$. 则在$[a,b]$上有$f=g$.
>
> /Proof/
>
> > 令$h(x)=g(x)-f(x)$，只需要证明$h$恒为零.
> >
> > 反证法，假设不恒为零，那么$\exist h(x_0)>0$，有连续性的定义，对于$\varepsilon=\frac{1}{2}h(x_0)$，$\exist\delta>0$使得$\forall|x-x_0|\leq\delta$有$|h(x)-h(x_0)|<\varepsilon=\frac{1}{2}h(x_0)$，不妨假设$[x_0,x_0+\delta]\subseteq[a,b]$，则上式说$\forall x\in[x_0,x_0+\delta]$有$h(x)>\frac{1}{2}h(x_0)$，进而
> > $$
> > \begin{aligned}
> > \int_a^bh&=\int_{[x_0,x_0+\delta]}h+\int_\text{else}h\\
> > &\geq\int_{[x_0,x_0+\delta]}\frac{1}{2}h(x_0)+\int_\text{else}0\\
> > &=\frac{1}{2}h(x_0)\delta>0
> > \end{aligned}
> > $$
> > 矛盾.
>
> 证毕.

4. 绝对值不等式

   设$a\leq b$且$f$可积，则有
   $$
   |\int_a^bf\text{d}x|\leq\int_a^b|f|\text{d}x
   $$

/Proof/

> $-|f|\leq f\leq|f|$，积分得到$-\int|f|\leq\int f\leq\int|f|$，同时取绝对值得到结果.

5. Cauchy-Schwarz 不等式

   设$f,g\in\mathcal{R}([a,b])$，则
   $$
   (\int_a^bf(x)g(x)\text{d}x)^2\leq(\int_a^bf^2(x)\text{d}x)(\int_a^bg^2(x)\text{d}x)
   $$
   上节课已经证明过这一性质.

6. 积分中值定理

   设$f$在$[a,b]$上连续，$g$在$[a,b]$上恒正且可积，而且$\int_a^bg\neq0$，则$\exist\xi\in[a,b]$使得
   $$
   \frac{\int_a^bf(x)g(x)\text{d}x}{\int_a^bg(x)\text{d}x}=f(\xi)
   $$
   也就是：$f$的加权平均等于某处的$f$值.

/Proof/

> 由$f$连续，利用最值定理知道存在最小值和最大值$m$和$M$. 从而
> $$
> mg(x)\leq f(x)g(x)\leq Mg(x)
> $$
> （用到$g>0$）同时积分：
> $$
> \begin{aligned}
> &\int_a^bmg\leq\int_a^bfg\leq\int_a^bMg\\
> &m\int_a^bg\leq\int_a^bfg\leq M\int_a^bg\\
> &\frac{\int_a^bfg}{\int_a^bg}\in[m,M]
> \end{aligned}
> $$
> 再使用介值定理得到结果.

证毕.

/Example/

> 设$f$在$[a,b]$上可导，且$|f'(x)|\leq M$，$\forall x$，证明
> $$
> \int_a^xf(t)\text{d}t\leq f(a)(x-a)+\frac{M}{2}(x-a)^2
> $$
>
> > 一点题外话是有关于积分哑元的. 有时为了区分上下限和哑元，需要用不同的符号，但是也可以允许$\int_a^xf(x)\text{d}x$的写法，当然如果写$\int_a^xf$甚至可以不用考虑这些问题.

/Proof/

> 用 Lagrange 中值定理，$\forall a\leq t$，
> $$
> \frac{f(t)-f(a)}{t-a}=f'(\xi)\leq M\Longrightarrow f(t)\leq f(a)+M(t-a)
> $$
> 再使用积分不等式得到
> $$
> \begin{aligned}
> \int_a^xf(t)\text{d}t&\leq\int_a^x(f(a)+M(t-a))\text{d}t\\
> &=f(a)(x-a)+\frac{M}{2}(x-a)^2
> \end{aligned}
> $$

证毕.

/Example/

> 设在$[a,b]$上，$f''>0$，证明：
> $$
> \int_a^bf\geq f(\frac{a+b}{2})(b-a)
> $$

/Proof/

> 由$f''\geq0$，得到$f$在$[a,b]$上下凸，从而$f($中点$)\leq f$值的中点. 可知对于$\forall x\in[a,b]$，有
> $$
> f(\frac{a+b}{2})=f(\frac{x+(a+b-x)}{2})\leq\frac{1}{2}(f(x)+f(a+b-x))
> $$
> 积分得到
> $$
> \begin{aligned}
> f(\frac{a+b}{2})(b-a)&\leq\int_a^b\frac{f(x)+f(a+b-x)}{2}\text{d}x\\
> &=\frac{1}{2}\int_a^bf-(-\frac{1}{2})\int_a^bf\\
> &=\int_a^bf
> \end{aligned}
> $$
> 得证. 当然也可以用下凸性证明，考虑中点处的切线即可.

证毕.

## 微积分基本定理

回到我们整个课程的开端，算面积的计算.

/Theorem/ （1，变上限积分的求导）

> 设$f$在$[a,b]$上可积，定义$f$的变上限积分为$F(x)=\int_a^xf(t)\text{d}t$，则有
>
> 1. $F$在$[a,b]$上连续；
> 2. 若$f$在$x_0$处连续，则$F'(x_0)=f(x_0)$.

/Proof/

> 对于1.，用$\varepsilon$-$\delta$语言先证明$F$在$x_0$处连续，为此，$\forall\varepsilon>0$，找$\delta>0$使得$\forall x_0<x<x_0+\delta$有$|F(x)-F(x_0)|<\varepsilon$.
>
> 由$f$可积，知道$|f|$在$[a,b]$有上界$K$，取$\delta=\frac{\varepsilon}{K}$，从而$\forall x_0<x<x_0+\delta$，成立.
>
> 对于2.，来证明若$f$在$x_0$处右连续，则$F'(x_0+)=f(x_0)$. 只需证明：
> $$
> \lim_{h\to0+}(\frac{F(x_0+h)-F(x_0)}{h}-f(x_0))=0
> $$
> 为此，$\forall\varepsilon>0$，找$\delta>0$使得$\forall0<h<\delta$，有
> $$
> |\frac{F(x_0+h)-F(x_0)}{h}-f(x_0)|<\varepsilon
> $$
>
> $$
> \begin{aligned}
> \Delta&=|\frac{\int_{x_0}^{x_0+h}f(t)\text{d}t-\int_{x_0}^{x_0+h}f(x_0)\text{d}t}{h}|\\
> &=|\frac{1}{h}\int_{x_0}^{x_0+h}(f(t)-f(x_0))\text{d}t|\\
> &=\frac{1}{h}\int_{x_0}^{x_0+h}|f(t)-f(x_0)|\text{d}t\\
> &\leq\frac{1}{h}\int_{x_0}^{x_0+h}\varepsilon\text{d}t=\varepsilon
> \end{aligned}
> $$
>
> 得证.

总结：连续函数的变上限积分是其原函数，连续函数皆有原函数.

问：如果上下限均变化，如何求导？
$$
H(x)=\int_{\alpha(x)}^{\beta(x)}f(t)\text{d}t
$$
/Claim/

> 设$f$连续，$\alpha(x)$、$\beta(x)$可导，则
> $$
> \frac{\text{d}}{\text{d}x}\int_{\alpha(x)}^{\beta(x)}f(t)\text{d}t=f(\beta(x))\beta'(x)-f(\alpha(x))\alpha'(x)
> $$

/Proof/

> 任取基点$a$，则拆分成两个变上限积分，再使用链式法则即可：
> $$
> F(x)=\int_a^xf
> $$
> 有
> $$
> H(x)=F(\beta(x))-F(\alpha(x))\\
> H'(x)=f(\beta(x))\beta'(x)-f(\alpha(x))\alpha'(x)
> $$

证毕.

微积分基本定理的第二个部分是 Newton-Leibiniz 公式：

/Theorem/ （2，Newton-Leibiniz 公式）

> 设$f\in C([a,b])$，$F\in C([a,b])$，且$F'=f$，则
> $$
> \int_a^bf(x)\text{d}x=F(b)-F(a)
> $$
> 一个更强的形式是，设$f\in\mathcal{R}([a,b])$，$F\in C([a,b])$，且$F'=f$，则
> $$
> \int_a^bf(x)\text{d}x=F(b)-F(a)\overset{\text{marked as}}{=}F|_a^b
> $$

/Proof/

> 先证明弱一点的形式. 令$\tilde F(x)=\int_a^xf$为变上限积分，可知$\tilde F\in C([a,b])$，$\tilde F'=f$.
>
> 令$H(x)=\tilde F(x)-F(x)$，则$H\in C([a,b])$且$H'(x)=0$.
>
> 对$H$用 Lagrange 中值定理，
> $$
> \frac{H(b)-H(a)}{b-a}=H'(\xi)=0\Longrightarrow H(b)=H(a)
> $$
> 所以，$F(b)-F(a)=\tilde F(b)-\tilde F(a)=\int_a^bf-\int_a^af=\int_a^bf$. 得证.
>
> 现在证明更强的部分——这里的证明思路完全不同. $f$只是可积函数，任取剖分$P=\{x_0<\cdots<x_n\}$，想象一个裂项：
> $$
> \begin{aligned}
> F(b)-F(a)&=\sum_{i=1}^n(F(x_i)-F(x_{i-1}))\\
> &\overset{\text{Lagrange}}{=}\sum_{i=1}^n(x_i-x_{i-1})F'(\xi_i)\\
> &=\sum_{i=1}^n\Delta x_i f(\xi_i)
> \end{aligned}
> $$
> 所以对任何一个$F$，都能写成一个$f$的 Riemann 和. 对$\lambda(p)\to0$取极限，得到
> $$
> F(b)-F(a)=\lim_{\lambda(p)\to0}\sum\Delta x_i f(\xi_i)=\int_a^bf
> $$
> 最后一步用到可积性.

证毕.