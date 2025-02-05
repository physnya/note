---
title: Lesson 28
createTime: 2024/12/25 17:25:32
permalink: /integral/integral/gpu4r2m9/
---
# 高等微积分 Lesson 28

## 分部积分公式

/Theorem/

> 设$f',g'$在$[a,b]$上可积，则有
> $$
> \int_a^bf'g=fg|_a^b-\int_a^bfg'
> $$
> 每次判断可积比较麻烦，所以写一个弱化版本：考虑连续必可积，有
>
> /Definition/
>
> > 称$f$在区间$I$上是$C^k$光滑函数，记为$f\in C^k(I)=C^{(k)}(I)$，如果$f$在$I$上的$1$阶至$k$阶导皆存在且连续.
> >
> > 其中$f$是$C^\infty$光滑，或者称$f$光滑，若$f$的各阶导数皆存在且连续.
>
> /Claim/
>
> > 设$f,g\in C^1([a,b])$，则
> > $$
> > \int_a^bf'g=fg|_a^b-\int_a^bfg'
> > $$
> > 这一般称为一次分部积分，还有多次的分部积分，在使用时逐次分部即可. 但是为了连贯性，这里用表达式的方式具体写出来：
> >
> > 设$f,g\in C^n([a,b])$，逐次分部积分得到：
> > $$
> > \begin{aligned}
> > \int_a^bf^{(n)}g&=\int_a^b(f^{(n-1)})'g=f^{(n-1)}g|_a^b-\int_a^bf^{(n-1)}g'\\
> > &=f^{(n-1)}g|_a^b-f^{(n-2)}g'|_a^b+\int_a^bf^{(n-2)}g''\\
> > &=\sum_{i=0}^{n-1}(-1)^if^{(n-1-i)}g^{(i)}|_a^b+(-1)^n\int_a^bfg^{(n)}
> > \end{aligned}
> > $$

下面这一例子希望大家记住，因为三角换元会常用.

/Example/

> 记
> $$
> I_n=\int_0^\frac{\pi}{2}\sin^nx\text{d}x
> $$
> 显然换成$\cos x$也是等价的，因为换元. 在这里提一下不定积分的分部和定积分分部的区别，记$J_n=\int\sin^nx\text{d}x$，为不定积分. 如果计算不定积分，将得到
> $$
> \begin{aligned}
> J_n&=\int\sin^nx\text{d}x=\int(-\cos x)'\sin^{n-1}x\text{d}x\\
> &=-\cos x\sin^{n-1}x-\int(-\cos x)(n-1)\sin^{n-2}x\cos x\text{d}x\\
> &=-\cos x\sin^{n-1}x+\int(n-1)\sin^{n-2}x(1-\sin^2x)\text{d}x\\
> &=-\cos x\sin^{n-1}x+(n-1)J_{n-2}-(n-1)J_n
> \end{aligned}
> $$
> 得到递推关系
> $$
> J_n=\frac{n-1}{n}J_{n-2}-\frac{1}{n}\cos x\sin^{n-1}x
> $$
> 之后迭代，跟踪尾项. 这说明，不定积分的分部会导致一长串的多项式叠加，而定积分的分部全部是数字，相比之下更好计算. 在定积分中，
> $$
> \begin{aligned}
> I_n&=\int_0^\frac{\pi}{2}(-\cos x)'\sin^{n-1}\text{d}x\\
> &=-\cos x\sin^{n-1}x|_0^\frac{\pi}{2}-\int_0^\frac{\pi}{2}(-\cos x)(n-1)\sin^{n-2}x\cos x\text{d}x\\
> &\overset{\forall n-1\geq1}{=}0+(n-1)(I_{n-2}-I_n)
> \end{aligned}
> $$
> 可知$\forall n\ge2$有$I_n=\frac{n-1}{n}I_{n-2}$，分别得到：
> $$
> I_{2m}=\frac{\pi}{2}\frac{(2m-1)!!}{(2m)!!}\,,\quad I_{2m-1}=\frac{(2m-2)!!}{(2m-1)!!}
> $$
> 实际上我们在下学期可能会计算$n$维球体的体积，会用到这个积分.
>
> （舒老师千古）
> $$
> \int\cdots\int_{x_1^2+\cdots+x_n^2\leq R^2}\text{d}x_1\cdots\text{d}x_n
> $$
> 转化为上面积分.

/Example/

> 设$f\in C^{(2)}(\R)$且紧致（即$\exist R>0$使得$f(x)=0$，$\forall|x|>R$），求
> $$
> I=\int_{-\infty}^\infty\frac{1}{2}|x|f''(x)\text{d}x
> $$

/Solution/

> 计算$-R\sim R$之间的区间即可，
> $$
> \begin{aligned}
> I&=\int_0^R+\int_{-R}^0\\
> \int_0^R\frac{1}{2}|x|f''(x)\text{d}x&=\int_0^R\frac{1}{2}xf''(x)\text{d}x=\frac{1}{2}xf'(x)|_0^R-\int_0^R\frac{1}{2}f'(x)\text{d}x\\
> &=0-\frac{1}{2}(f(R)-f(0))=\frac{1}{2}f(0)
> \end{aligned}
> $$
> 另一侧同理，所以$I=f(0)$.

多次分部积分还能得到一个 Taylor 公式，在积分中，Taylor 公式几乎是显然的，下面来求带积分余项的 Taylor 公式.

设$f\in C^{(n)}(I)$，则
$$
f(b)=\sum_{i=0}^{n-1}\frac{f^{(i)}(a)}{i!}(b-a)^i=\frac{f^{(n)}(\xi)}{n!}(b-a)^n
$$
我们想要通过积分中值定理找出这个余项，考虑：
$$
\frac{\int_a^bf^{(n)}(x)P(x)\text{d}x}{\int_a^bP(x)\text{d}x}=\text{somewhere }f^{(n)}(\xi)
$$
那么
$$
\int_a^bP(x)f^{(n)}(x)\text{d}x=f^{(n)}(\xi)\int_a^bP(x)\text{d}x=f^{(n)}(\xi)\frac{(b-a)^n}{n!}
$$
所以可以取$P(x)=(x-a)^{n-1}$的积分$\propto(b-a)^n$.

::: tip -

我说的对吗？我们来看一下讲义. 哦，错误.
——艾神

:::

another choice：$(b-x)^{n-1}$的积分，也$\propto(b-a)^n$. 因此得到命题：

/Claim/

> 设$f\in C^{(n)}(I)$，则
> $$
> f(b)=\sum_{i=0}^{n-1}\frac{f^{(i)}(a)}{i!}(b-a)^i+\int_a^bf^{(n)}(x)(b-x)^{n-1}\text{d}x
> $$
> 这就是积分余项的 Taylor 公式.

这个命题的证明是容易的.

/Proof/

> 用$n$次分部积分公式计算，
> $$
> \begin{aligned}
> &\int_a^bf^{(n)}(x)(b-x)^{n-1}\text{d}x\\
> =&\sum_{i=0}^{n-1}(-1)^if^{(n-1-i)}g^{(i)}|_a^b+(-1)^n\int_a^bfg^{(n)}\\
> =&\sum_{i=0}^{n-1}(-1)^if^{(n-1-i)}(x)(-1)^i(n-1)\cdots(n-i)(b-x)^{n-i-1}|_a^b
> \end{aligned}
> $$
> 只有$i=n-1$时，在$x=b$处有值，而$x=a$处一般都有值，得到
> $$
> \begin{aligned}
> &=\sum_{i=0}^{n-1}f^{(n-i-1)}(x)\frac{(n-1)!}{(n-i-1)!}(b-x)(b-x)^{n-i-1}|_a^b\\
> &=(n-1)![f^{(0)}(b)\frac{1}{0!}-\sum_{i=0}^{n-1}\frac{f^{(n-i-1)}(a)}{(n-i-1)!}(b-a)^{n-i-1}]\\
> &=(n-1)!(\text{Taylor remainder }R_n)
> \end{aligned}
> $$
> 其中，
> $$
> R_n=\frac{1}{(n-1)!}\int_a^bf^{(n)}(x)(b-x)^{n-1}\text{d}x
> $$
> 此版本更加容易证明，只需要机械计算分部积分即可.

上式也可直接回到 Lagrange 余项，理由为
$$
\begin{aligned}
R_n&=\frac{1}{(n-1)!}\int_a^bf^{(n)}(x)(b-x)^{n-1}\text{d}x\\
&=\frac{1}{n!}\frac{\int_a^bf^{(n)}(x)(b-x)^{n-1}\text{d}x}{\int_a^b(b-x)^{n-1}\text{d}x}(b-a)^n\\
&=\frac{f^{(n)}(\xi)}{n!}(b-a)^n
\end{aligned}
$$
其中$\xi\in[a,b]$. 用积分中值可以证明.

## 换元公式

假设有一对同桌，同学 1 想要计算自己所经历的时间，需要算一个在时空$I$中的积分，而同桌同学 2 在自己的时空（$J$）中需要帮助他进行积分，问：能否用$J$的数据去算$\int_a^bf(x)\text{d}x$？

两个时空中间存在一个坐标变换，$J\overset{\varphi}{\longleftrightarrow}I$，在$J$看来，积分是$J\overset{\varphi}{\longrightarrow}I\overset{f}{\longrightarrow}\R$，只能见到复合的函数版本$f\circ\varphi$.

将坐标从$J$变到$I$，称为一个 pull back，$\varphi^*(f)=f(\varphi)=f\circ\varphi$. 在$J$中的积分需要写成
$$
\int_a^bf(x)\text{d}x=\int_A^B(f\circ\varphi)\varphi'(t)\text{d}t
$$
需要加一项$\varphi'(t)$.

/Theorem/ （一维特有）

> 设$\varphi:J\to I$是$C^1$的，则对任何$f\in C(I)$，$\forall a,b\in I$，若$A,B\in J$满足$\varphi(A)=a$，$\varphi(B)=b$（==端点对齐==），则有
> $$
> \int_a^bf(x)\text{d}x=\int_A^Bf(\varphi(t))\varphi'(t)\text{d}t
> $$

/Theorem/ （各个维数均成立）

> 设$\varphi:J\to I$是$C^1$的双射，则对任何$f\in\mathcal{R}(I)$，$\forall a,b\in I$，有
> $$
> \int_a^bf(x)\text{d}x=\int_{\varphi^{-1}(a)}^{\varphi^{-1}(b)}f(\varphi(t))\varphi'(t)\text{d}t
> $$

两个定理的区别在于，前者对$\varphi$没有要求，但是要求$f$连续；后者要求$\varphi$是$C^1$双射（坐标变换忠实，也就是同胚，homeomorphic），$f$只要求可积.

/Proof/ （定理 1 的证明）

> 用 Newton - Leibiniz 公式，由$f\in C(I)$，有原函数$F(x)$，令$G(t)=F(\varphi(t))$，由$F$、$\varphi$可导及 Chain Rule，得到
> $$
> G'(t)=F'(\varphi(t))\varphi'(t)=f(\varphi(t))\varphi'(t)
> $$
> 知道$f(\varphi(t))\varphi'(t)\in C^1(J)$且有原函数$G$，由 Newton - Leibiniz 公式得到
> $$
> \begin{aligned}
> \int_A^Bf(\varphi(t))\varphi'(t)\text{d}t&=G(t)|_A^B=F(\varphi(t))|_A^B\\
> &=F(\varphi(B))-F(\varphi(A))\\
> &=F(b)-F(a)
> =\int_a^bf(x)\text{d}x
> \end{aligned}
> $$

证毕. 由证明过程可以看出这个定理很强，因为它用到的只有 Newton - Leibiniz 公式，只用考虑端点值.

/Proof/ （定理 2 的证明）

> 这个证明更为复杂，$f$可积也未必有原函数，只能回到积分的定义，用 Riemann 和证明：
> $$
> \int_a^bf=\lim(f\text{'s Riemann sum})=\lim\sum f(\varphi(\eta_i))(\varphi(t_i)-\varphi(t_{i-1}))
> $$
> $[A,B]$剖分$t_0=A<\cdots<t_n=B$，选点$\eta_i$诱导$[a,b]$剖分$x_i=\varphi(t_i)$，选点$\varphi(\eta_i)$. 因此
> $$
> \begin{aligned}
> &=\lim\sum f(\varphi(\eta_i))\Delta t_i\varphi'(\eta_i)\\
> &=\int_A^Bf(\varphi(t))\varphi'(t)\text{d}t
> \end{aligned}
> $$

证毕.

一元情况下我们常用定理 1，多元时基本用定理 2.

总结：
$$
\int_a^bf(x)\text{d}x\overset{x=\varphi(t)}{\underset{\varphi\in C^1}{=}}\int_A^Bf(\varphi(t))\varphi'(t)\text{d}t
$$
注意端点对齐.

此版本的换元积分公式比不定积分换元更好用，可以直接令$x=\varphi(t)$.

/Example/

> $$
> \int_0^\frac{\pi}{2}\sin^nx\text{d}x=\int_0^\frac{\pi}{2}\cos^nx\text{d}x
> $$
>
> 的证明，可以使用$x=\frac{\pi}{2}-y$换元直接得到.