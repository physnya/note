---
title: Lesson 22
createTime: 2024/12/06 12:20:28
permalink: /integral/integral/e2ifaauu/
---
# 高等微积分 Lesson 22

接着上节课讲过的题目开始.

/Example/

> 设$f''$连续，$M=\underset{[0,1]}{\max}|f''|$，设$f(0)=f(1)=0$，证明$|f(x)|\leq\frac{1}{8}M$，$\forall x\in[0,1]$.

/Proof/

> 证法 1：
>
> > 考虑$f$的最值点$x_0$，不妨设$x_0\in(0,1)$，可知$x_0$是极值点 $\Longrightarrow$ $f'(x_0)=0$.
> >
> > 在这种情况下，Taylor 公式变得极其简单，得到
> > $$
> > \begin{aligned}
> > f(0)&=f(x_0)+\frac{1}{2}f''(\xi)x_0^2\\
> > f(1)&=f(x_0)+\frac{1}{2}f''(\eta)(1-x_0)^2\\
> > \Longrightarrow|f(x_0)|&=\frac{1}{2}f''(\xi)x_0^2=\frac{1}{2}f''(\eta)(1-x_0)^2\\
> > &\leq\min(\frac{M}{2}x_0^2,\frac{M}{2}(1-x_0)^2)\\
> > &\leq\frac{M}{8}
> > \end{aligned}
> > $$
> > 得证.
>
> 总结起来上面的方法给我们一个启示：要证明$f(x)\leq A$，$\forall x\in D$，等价于求$\underset{D}{\max}f(x)\leq A$，所以这时能够取出最大值点$x_0$，在$x_0$附近的 Taylor 展开会有$f'(x_0)=0$，能够简化式子.
>
> 证法 2：这是去年考试时同学们的做法，更为直接.
>
> > 来考虑一般的$x\in[0,1]$，利用$f(0)=f(1)=0$，得到
> > $$
> > \begin{aligned}
> > f(0)&=f(x)+f'(x)(0-x)+\frac{1}{2}f''(\xi)x^2=0\\
> > f(1)&=f(x)+f'(x)(1-x)+\frac{1}{2}f''(\eta)(1-x)^2=0
> > \end{aligned}
> > $$
> > 消去$f'(x)$，获得
> > $$
> > \begin{aligned}
> > 0&=f(x)+\frac{1}{2}f''(\xi)x^2(1-x)+\frac{1}{2}f''(\eta)x(1-x)^2\\
> > \Longrightarrow|f(x)|&=|\frac{1}{2}f''(\xi)x^2(1-x)+\frac{1}{2}f''(\eta)(1-x)^2x|\\
> > &\leq\frac{1}{2}Mx^2(1-x)+\frac{1}{2}M(1-x)^2x\\
> > &=\frac{1}{2}Mx(1-x)\leq\frac{1}{2}M(\frac{x+(1-x)}{2})^2=\frac{1}{8}M
> > \end{aligned}
> > $$
> > 得证.

证毕.

继续来讲微分学的更多应用.

### 判断单调性

/Claim/

> 设$f$在$I$上可导，则
>
> * 若$f'$恒正，则$f$在$I$上严格单调递增.
> * $f$在$I$上不减 $\Longrightarrow$ $f'$在$I$上处处非负.

/Example/ （幂平均不等式）

> 设$a_1,\cdots,a_n>0$，定义
> $$
> G(x)=(\frac{a_1^x+\cdots+a_n^x}{n})^{1/x}
> $$
> /Theorem/
>
> > $G(x)$关于$x$是递增的（未必严格）.

/Proof/

> 令
> $$
> f(x)=\ln G(x)=\frac{1}{x}\ln(\frac{a_1^x+\cdots+a_n^x}{n})
> $$
> 则定理等价于$f'(x)\geq0$，$\forall x$.
> $$
> \begin{aligned}
> f'(x)&=\frac{x\cdot\frac{n}{a_1^x+\cdots+a_n^x}\cdot\frac{a_1^x\ln a_1+\cdots+a_n^x\ln a_n^x}{n}-\ln\frac{a_1^x+\cdots+a_n^x}{n}}{x^2}\geq0\\\\
> \Longrightarrow\quad&\frac{a_1^x\ln a_1+\cdots+a_n^x\ln a_n}{a_1^x+\cdots+a_n^x}x\geq\ln(\frac{a_1^x+\cdots+a_n^x}{n})
> \end{aligned}
> $$
> 发现无法继续往下证明. 我们需要有关凸性的 Jensen 不等式，之后会讲.

### 最值问题

问：给定$D$，求$\underset{D}{\max}f$.（$\min$是对称的）

这时候的解法需要下面的步骤：

1. 存在性（未必容易）

   * $D=[a,b]$，那么由最值定理就能证明存在$\max$.
   * $D=\R$，若$\underset{x\to\infty}{\lim}f=-\infty$，连续函数$f$在$\R$上面有$\max$.

2. 设已经建立了$\underset{D}{\max}f$的存在性，可来确定$f$的最大值点$x_0$.

   * 若$x_0\in\partial D$，枚举.

     > 对于高维问题，用 Lagrange 乘子法.

   * 若$x_0\notin\partial D$，即$x_0$在$D$内部，则由 Fermat 的结论，$x_0\in\text{Crit}(f)=\{x|f'(x)=0\}$（临界点集）.

总结：如果已经建立了最值的存在性，则
$$
\underset{D}{\max}f=\max\{f(x_0)|x_0\in\partial D\cup\text{Crit}(f)\}
$$
下面来看一个来自于 Optics 的例子.

/Example/ （Fermat's Principle）

> 光程最短.
>
> 以 Snell's law 为例，假设光的出射点$A(0,a)$，终止点$B(d,-b)$，在$(x,0)$位置发生折射（分界面$y=0$）. 则总时长为
> $$
> T(x)=\frac{\sqrt{x^2+a^2}}{v_1}+\frac{\sqrt{(d-x)^2+b^2}}{v_2}
> $$
> 求$\underset{x\in\R}{\min}T(x)$.

/Solution/

> 首先判断存在性，容易得到
> $$
> \begin{aligned}
> \underset{x\to+\infty}{\lim}T(x)&=\underset{x\to+\infty}{\lim}(\frac{\sqrt{x^2+a^2}}{v_1}+\frac{\sqrt{(d-x)^2+b^2}}{v_2})=+\infty\\
> \underset{x\to-\infty}{\lim}T(x)&=\underset{x\to-\infty}{\lim}(\frac{\sqrt{x^2+a^2}}{v_1}+\frac{\sqrt{(d-x)^2+b^2}}{v_2})=+\infty\\
> \end{aligned}
> $$
> 由上面的结论，知道$\underset{x\in\R}{\min}f$存在.
>
> 现在求解$x_0=\underset{x\in\R}{\min}f$，得到$T'(x_0)=0$，即$x_0$满足$T(x)$的临界点方程：
> $$
> 0=T'(x)=\frac{x}{v_1\sqrt{x^2+a^2}}-\frac{d-x}{v_2\sqrt{(d-x)^2+b^2}}
> $$
> 这个方程不好处理，我们甚至难以知道它是否有解和有几个解. 于是转而考虑$T''(x)$，以及已经知道的$\underset{x\to+\infty}{\lim}T'(x)=\frac{1}{v_1}+\frac{1}{v_2}>0$，$\underset{x\to-\infty}{\lim}T'(x)=-\frac{1}{v_1}-\frac{1}{v_2}<0$.
>
> 由介值定理，知道$T'$有零点，也就是$T$有临界点. 但是我们不知道有几个零点，任意奇数个看起来都是有可能的.
> $$
> \begin{aligned}
> T''(x)&=\frac{\sqrt{x^2+a^2}-x\cdot\frac{x}{\sqrt{x^2+a^2}}}{x^2+a^2}\cdot\frac{1}{v_1}\\&\quad-\frac{-\sqrt{(d-x)^2+b^2}+(d-x)\cdot\frac{d-x}{\sqrt{(d-x)^2+b^2}}}{(d-x)^2+b^2}\cdot\frac{1}{v_2}\\\\
> &=\frac{a^2}{v_1(x^2+a^2)^{3/2}}+\frac{b^2}{v_2((d-x)^2+b^2)^{3/2}}>0
> \end{aligned}
> $$
> 所以$T'(x)$在$\R$上严格单调递增，$T$有唯一的临界点.
>
> 总结：$T(x)$有且仅有一个最小值点$x_0$，且$x_0$是$T$的唯一临界点，$x_0$满足下面的方程
> $$
> \frac{x/\sqrt{x^2+a^2}}{v_1}=\frac{(d-x)/\sqrt{(d-x)^2+b^2}}{v_2}
> $$
> 从几何上来看，这就是 Snell's law，$\sin\alpha/v_1=\sin\beta/v_2$.

In Physics，可以通过最小作用量原理推出动力学方程（Euler - Lagrange Equation），甚至 Hamilton 方程.

Fermat 对于可导的$f$有$\{$极值点$\}\subseteq\text{Crit}(f)$，问：判别$x_0\in\text{Crit}(f)$是否是$f$的极值点？

等价于比较$f(x_0)$与附近的$f(x)$大小，也就是$f(x_0)$与$f(x_0+h)$比较大小，这就要用到 Taylor 展开.
$$
\begin{aligned}
f(x_0+h)&=f(x_0)+f'(x_0)h+\frac{1}{2}f''(x_0)h^2+o(h^2)\\
&=f(x_0)+\frac{1}{2}f''(x_0)h^2+o(h^2)
\end{aligned}
$$
/Claim/

> 设$x_0$是$f$的临界点且$f$在$x_0$处有二阶导，则
>
> * 若$f''(x_0)>0$，则$x_0$是$f$的极小值点.
> * 若$f''(x_0)<0$，则$x_0$是$f$的极大值点.
> * 若$f''(x_0)=0$，需要更高阶的 Taylor 展开.

更加一般的命题是：

/Claim/

> 设$f^{(1)}(x_0)=\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0)\neq0$（其中$n\geq2$）.
>
> * 若$n$是偶数且$f^{(n)}(x_0)>0$，则$x_0$是$f$的极小值点.
> * 若$n$是偶数且$f^{(n)}(x_0)<0$，则$x_0$是$f$的极大值点.
> * 若$n$是奇数，则$x_0$不是极值点.

/Proof/ （证明更一般的命题）

> 由 Taylor 公式，得到
> $$
> \begin{aligned}
> f(x_0+h)&=f(x_0)+\frac{f^{(n)}(x_0)}{n!}h^n+\alpha(h)\\
> &=f(x_0)+h^n(\frac{f^{(n)}(x_0)}{n!}+\frac{\alpha(h)}{h^n})
> \end{aligned}
> $$
> 对于$\exist\delta>0$，$\forall|h|<\delta$，有$|\frac{\alpha(h)}{h^n}|<|\frac{f^{(n)}(x_0)}{n!}|$，从而对于这些$|h|<\delta$，$f^{(n)}(x_0)$与$\frac{f^{(n)}(x_0)}{n!}+\frac{\alpha(h)}{h^n}$同号.
>
> 分上面几类讨论得到结果.

证毕.

### 函数的凹凸性

回忆初中学到过的二次函数，我们知道所谓的“开口向上”和“开口向下”，这两者显著不同，但是我们并未定义什么是“开口”.

实际上，凹凸性可以通过做一条割线来判断——观察弦 PQ 是否高于 P、Q 间的图像.

/Definition/

> 称函数$f$在区间$I$上是下凸函数，如果对于$\{(x,f(x))|x\in I\}$上任何两点 P、Q，总有 PQ 弦（割线）在 P、Q 间$f$图像的上方（亦即图像在弦下方）.
>
> 类似地，可以定义上凸函数.

/Claim/ （等价表述）

> $f$在$I$上是下凸函数. $(1)$
>
> $\Longleftrightarrow$ $f(\alpha_1x_1+\alpha_2x_2)\leq\alpha_1f(x_1)+\alpha_2f(x_2)$（$\alpha_1+\alpha_2=1$） $(2)$
>
> $\Longleftrightarrow$ $0\leq\lambda\leq1$，$f((1-\lambda)x_1+\lambda x_2)\leq(1-\lambda)f(x_1)+\lambda f(x_2)$. $(3)$
>
> $\Longleftrightarrow$ 对$I$中任何三点$x_1<x_2<x_3$，总有$k_{12}\leq k_{13}\leq k_{23}$，其中$k_{ij}$为$x_i$、$x_j$之间的割线斜率. $(4)$

/Proof/

> 首先容易知道$(2)$和$(3)$等价，证明略去.
>
> 来证明$(1)$和$(2)$、$(3)$等价. 记$P(x_1,f(x_1))$，$Q(x_2,f(x_2))$（不妨$x_1\leq x_2$）. PQ 弦上的点形如$(x,\frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1))$，$f$图像上的点形如$(x,f(x))$，“在图像上方”这个表述等价于一个不等式：
> $$
> f(x)\leq\frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1)
> $$
> 令$x=x_1+\lambda(x_2-x_1)=(1-\lambda)x_1+\lambda x_2$，得到$(3)$，也就和$(2)$等价.
>
> 现在来证明$(1)$和$(4)$等价. 将之前用到的$x_1$、$x$、$x_2$改述成$x_1$、$x_2$、$x_3$，则
> $$
> f(x_2)\leq\frac{f(x_3)-f(x_1)}{x_3-x_1}(x_2-x_1)+f(x_1)
> $$
> 得到$k_{12}\leq k_{13}$.（所以说实际上这一个式子就能够判断凸性了）而$k_{13}\leq k_{23}$也可以通过恒等变形得到.

证毕.

下凸的斜率表示是相当有用的.

/Claim/

> 开区间上的下凸函数皆连续.（注：如果不是开区间，以上命题并不对，想想在端点处有一个不连续点的$f$）

/Proof/

> 来证明$f$在$I=(a,b)$中的每一点$x_0$处连续. 为此，证明$\forall\varepsilon>0$，找一个$\delta>0$使得$\forall|x-x_0|<\delta$有$|f(x)-f(x_0)|<\varepsilon$.
>
> 因为$I$是开区间，$x_0$一定是一个内点，也就是能找到一个$x_-\in I$和一个$x_+\in I$使得$x_-<x_0<x_+$，由斜率不等式（这里引入新的点$x\in(x_-,x_0)$），
> $$
> \frac{f(x_-)-f(x_0)}{x_--x_0}\leq\frac{f(x)-f(x_0)}{x-x_0}\leq\frac{f(x_+)-f(x_0)}{x_+-x_0}
> $$
> ::: tip -
>
> 我这样写是不是太啰嗦了？不，没关系，我平时就这么啰嗦.
> 
> ——艾神
>
> :::
>
> 对于$x\in(x_0,x_+)$，也有
> $$
> \frac{f(x_-)-f(x_0)}{x_--x_0}\leq\frac{f(x)-f(x_0)}{x-x_0}\leq\frac{f(x_+)-f(x_0)}{x_+-x_0}
> $$
> 没区别. 所以中间的那个斜率一定有界，
> $$
> |\frac{f(x)-f(x_0)}{x-x_0}|\leq\max(|A|,|B|)=K
> $$
> 所以$|f(x)-f(x_0)|\leq K|x-x_0|$，$f$的变化比不过$x$的变化的$K$倍，这被称为 Lipschitz 条件（这是一个比光滑性更强的条件），连续性得证.

证毕.