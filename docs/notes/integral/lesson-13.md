---
title: Lesson 13
createTime: 2024/10/30 19:13:02
permalink: /integral/integral/11guv16k/
---
# 高等微积分 Lesson 13

## 反函数定理

$f:D\to\R$的反函数？是映射$D\overset{f}{\longrightarrow}f[D]$的逆映射.

这要求$f:D\to f[D]$是满的（自动成立），同时$f:D\to f[D]$是单射.

/Definition/

> 设$f:D\to\R$是单射，定义$f$的反函数为$f:D\to f[D]$的逆映射，记为$f^{-1}:f[D]\to D$.

我们的课程在不同的范畴里不断前进，一开始是 sets，后来到$\R$子集与 continuous map 这一范畴中，之后可能还要到可微空间里面去.

在 sets 这一范畴中，我们只会想反函数是否存在，也就是在问$f$是不是单射. 但是现在我们在$\R$的子集与连续映射构成的范畴中，来考虑$f$的反函数.

问：设$f:D\to\R$单且连续，则$f^{-1}:f[D]\to D$是否连续？

先对一元连续单射进行刻画：决定了单调性之后，就不能回头，否则就会不单. 这产生了如下命题：

/Claim/

> 设$D$是区间（开/闭/半开半闭），则$D$上的连续单射一定是严格单调的.

/Proof/

> 先证明如下引理：
>
> /Claim/
>
> > 设$f$是连续单射，则对于任何$x<y<z$，或者有$f(x)<f(y)<f(z)$，或者有$f(x)>f(y)>f(z)$.
>
> /Proof/
>
> > 不妨设$f(x)<f(z)$（反之考虑$-f$即可），来证明一定是第一种情形（$f(y)\in (f(x),f(z))$）.
> >
> > 反证，有两种情况：
> >
> > 1. 若$f(y)<f(x)$，则$f(y)<f(x)<f(z)$，$f(x)$是$f(y)$与$f(z)$之间的介值，一定存在$u\in(y,z)$使得$f(x)=f(u)$，与$f$是单射矛盾.
> >
> >    这就证明了$f(y)>f(x)$（“$=$”的情况更加不可能了）.
> >
> > 2. 若$f(y)>f(z)$，同理矛盾. 可证明$f(y)<f(z)$.
> >
> > 所以$f(x)<f(y)<f(z)$，另一种情况考虑$-f$即可.
>
> 引理证毕.
>
> 现在就能开始证明我们的命题：任取$D$中两点$a<b$，不妨设$f(a)<f(b)$（另一种情况考虑$-f$），来证明$f$在$D$上严格递增. 为此，$\forall u<v$，讨论$u,v$与$a,b$的位置关系（这里有若干种可能，但是我们仅举一种作为例子）.
>
> 设$a<u<b<v$，对$a,u,b$用引理知$f(a)<f(u)<f(b)$；
>
> 对$a,u,v$用引理知$f(a)<f(u)<f(v)$，表明$f(u)<f(v)$.
>
> 其他情形类似讨论即可.

证毕.

可能有同学觉得上面的分类讨论很繁琐，我们给出一个更加简单的证明方法.

/Proof/

> 若$D=[c,d]$为闭区间，不妨设$f(c)<f(d)$，对任何$x<y\in(c,d)$，对$c,x,d$用引理知$f(c)<f(x)<f(d)$；再对$c,x,y$用引理知$f(c)<f(x)<f(y)$.
>
> 可知$f$在$[c,d]$上严格单调，也就是：闭区间上的连续单射是严格单调的$(*)$.
>
> 对于开区间和半开半闭区间，可用一个“小花招”：对于$D=(a,b)$，令$D_n=[a+1/n,b-1/n]$，$n>2/(b-a)$. 可以知道，$\bigcup D_n=D$，由前述$(*)$知道$f$在$D_n$上严格单调.
>
> 不妨设$f$在$D_{n_0}$上严格递增. 因为$\forall n\geq n_0$，$D_n\supseteq D_{n_0}$，这说明$f$在$D_n$上严格递增（因为$D_n$是闭区间，只能严格单调，又因为$D_{n_0}$上单调递增，所以$D_n$上也必须单调递增）.
>
> 再由$\bigcup D_n=D$，说明$f$在$D$上单调递增.

证毕.

有了上述前置知识，我们可以引入反函数定理.

/Theorem/ （反函数定理）

> 设$D$是一个区间，设$f:D\to\R$是连续单射，则
>
> 1. $f[D]$是一个区间；
> 2. $f^{-1}:f[D]\to D$是连续的.

/Proof/ （反函数定理 - 1.）

> 记$\inf f[D]=m$，$\sup f[D]=M$. 为保证证明是全面的，要求：若$f[D]$无下界，约定$m=-\infty$（符号负无穷）；若$f[D]$无上界，约定$M=+\infty$（符号正无穷）.
>
> 来证明：$(m,M)\subseteq f[D]$和$f[D]\subseteq[m,M]$（后者肯定成立），这样就能说明$f[D]$是一个区间.
>
> 为此，考虑$\forall m<y<M$. 由$y>m=\inf f[D]$，知$\exist f(x_1)<y$；由$y<M=\sup f[D]$，知$\exist f(x_2)>y$.
>
> 这说明$y$是$f(x_1)$和$f(x_2)$的介值，由介值定理，$\exist f(x)=y$，即$y\in f[D]$.

证毕.

/Proof/ （反函数定理 - 2.）

> 来证明$f^{-1}:f[D]\to D$连续. 需要证明$f^{-1}$在每点$f(x_0)$处连续.
>
> 由于$f$是连续单射，知道$f$严格单调，不妨设$f$严格递增. 这里要分情况讨论：
>
> 1. $x_0$是$D$的边界点（端点），这时我们所取的像将是下面一种情况的$1/2$.
> 2. $x_0$是$D$的内点.
>
> 只证明后一种情况，前面一种情况可以类比. 已知$x_0$是$D$的内点，取$[x_0-r,x_0+r]\subseteq D$，由$f$单调递增，知道$f(x_0-r)<f(x_0)<f(x_0+r)$. 由区间的凸性，对区间中的任意两点$P$，$Q$有$\overset{——}{PQ}\subseteq$区间，这样$[f(x_0-r),f(x_0+r)]\subseteq f[D]$，即证得$f(x_0)$是$f[D]$内点.
>
> 验证$f^{-1}$在$f(x_0)$处的连续性：
>
> > draft：$\forall\varepsilon>0$，要找到$\delta$.
> >
> > 使$\forall|y-f(x_0)|<\delta$，则有$|f^{-1}(y)-f^{-1}(x_0)|<\varepsilon$.
> >
> > 这里$f^{-1}(y)\in(x_0-\varepsilon,x_0+\varepsilon)$，即$y\in(f(x_0-\varepsilon),f(x_0+\varepsilon))$，那么可以取$\delta=\min\{|f(x_0-\varepsilon)-f(x_0)|,|f(x_0+\varepsilon)-f(x_0)|\}$.
> >
> > 但是这里还是有些不好，因为$x_0\pm\varepsilon$可能会超出定义域，需要一些修正.
>
> $\forall\varepsilon>0$，取$0<\varepsilon'<\varepsilon$，使得$(x_0-\varepsilon',x_0+\varepsilon')\subseteq D$，令$\delta=\min\{|f(x_0-\varepsilon)-f(x_0)|,|f(x_0+\varepsilon)-f(x_0)|\}$，这样$\forall|y-f(x_0)|<\delta$，有$f(x_0-\varepsilon')<y<f(x_0+\varepsilon')$.
>
> 用$f^{-1}$作用，得到$f^{-1}(f(x_0-\varepsilon'))<f^{-1}(y)<f^{-1}(f(x_0+\varepsilon'))$，也就是$x_0-\varepsilon'<f^{-1}(y)<x_0+\varepsilon'$.
>
> 这就证明了：$|f^{-1}(y)-f^{-1}(f(x_0))|<\varepsilon'<\varepsilon$，也就是$\underset{y\to f(x_0)}{\lim}f^{-1}(y)=x_0$，$\forall y\in f[D]$，连续性得证.

证毕.

有了反函数定理之后，我们就能得到我们期待已久的一些函数.

/Example/

> 对于正奇数$n$，$f(x)=x^n:\R\to\R$，连续且严格单调递增.
>
> 因为$\forall h>0$，
> $$
> \begin{aligned}
> f(x+h)-f(x-h)&=(x+h)^n-(x-h)^n\\\\
> &=2\sum C_n^{2i+1}\underset{+}{\underline{h^{2i+1}}}\underset{\geq0}{\underline{x^{n-2i-1}}}
> \end{aligned}
> $$
> 会发现偶次幂项全部被抵消.
>
> 得证.
>
> ::: danger -
>
> 哦，我们太傻了！这里是一个奇函数，直接在$\R_{\geq0}$上验证即可.
> ——艾神
>
> :::
>
> 由反函数定理，$f(x)$有连续反函数，记为$f^{-1}(y)=y^{1/n}:\R\to\R$.

/Example/

> 对于正偶数$n$，也可以验证$f(x)=x^n:\R_{\geq 0}\to\R_{\geq0}$是单射，存在连续反函数.

之后可以定义$m$次方根，$m\in\Z_+$，$x^{1/m}:\R_{\geq0}\to\R_{\geq0}$. 进而可以定义有理数次方$x^{n/m}=(x^{1/m})^n:\R_{\geq0}\to\R_{\geq 0}$.

之后可以定义无理数次方：

/Definition/

> $x^\alpha$，$\alpha$为无理数，$x^\alpha=\underset{n\to\infty}{\lim}x^{\alpha_n}$，取有理数数列$\alpha_n$，使得$\underset{n\to\infty}{\lim}\alpha_n=\alpha$.

可以验证$\underset{n\to\infty}{\lim}x^{\alpha_n}$存在且不依赖于$\{\alpha_n\}$的选取.

同时这就定义了$e^x$，也定义了其连续反函数$\ln x$，也是严格递增的.

之后还可以定义反三角函数：

/Example/

> $f(x)=\sin x:[-\pi/2,\pi/2]\to\R$，单调递增.
>
> 由反函数定理得到$f^{-1}(y)=\arcsin y:[-1,1]\to[-\pi/2,\pi/2]$.
>
> $\arccos y$同理.

---

之后再讲解一些术语方面的内容：无穷大和无穷小.

==注意：无穷大和无穷小不是名词，而是形容词！永远不能取一个数为无穷大或者和无穷小，它们只能表示一些趋于极限的过程.==

/Definition/

> 称当$x\to a$时$f(x)$是一个无穷小量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f(x)=0$；
>
> ………………………………正无穷大量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f(x)=+\infty$；
>
> ………………………………负无穷大量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f(x)=-\infty$.

无穷小量之间也可以比较大小级别. $x\to0$时，$x$和$x^2$都是无穷小量，但是$x^2$更小.

/Definition/

> 设当$x\to a$时$f(x)$，$g(x)$皆为无穷小量，称$f(x)$是比$g(x)$更高阶的无穷小量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=0$ $\Longleftrightarrow$ 记$f(x)=o(g(x))$ as $x\to a$.
>
> 称$f(x)$与$g(x)$是同阶小量 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g\in\R|\{0\}$.
>
> 称$f(x)$与$g(x)$是等价的无穷小 $\Longleftrightarrow$ $\underset{x\to a}{\lim}f/g=1$ $\Longleftrightarrow$ 记为$f\sim g$ as $x\to a$.