---
title: Lesson 27
createTime: 2024/12/20 16:31:26
permalink: /integral/integral/lj9gfkk4/
---
# 高等微积分 Lesson 27

## 分部积分（integration by parts）

在知乎上，有一个数学家分享了一个帖子，说有人在不同场合分别问著名的分析学家 Peter Lax 和几何学家 Nirenberg，问分析学中最重要的是什么，他们在不同场合没有沟通过的情况下均回答是分部积分.

另一个有关的小故事是 Harvard 的几何学家 Taubes，在台湾访问时，台湾教授刘和平对他进行了采访，问的是相同的问题，Taubes 回答是两个方面：一是分部积分和 Newton - Leibiniz 公式，二是最大模原理（这会在复变函数中学到）.

于品也分享了一个故事，说他的导师对前来求学的学生说，如果你会分部积分，就能开始进行研究了.

::: tip -

不定积分的重要性怎么强调都不为过.
——艾神

:::

Leibiniz 法则：$(fg)'=f'g+fg'$. 从左至右读，就得到
$$
\int f'g+fg'=fg+C
$$
移项就获得分部积分公式：
$$
\int f'(x)g(x)\text{d}x=f(x)g(x)-\int f(x)g'(x)\text{d}x
$$
这是分析学的重要积分，适用于$g$复杂但是$g'$简单的情况.

/Example/

> $$
> \begin{aligned}
> \int x^k\ln x\text{d}x=\int(\frac{x^{k+1}}{k+1})'\ln x\text{d}x\,,\quad k\ne-1
> \end{aligned}
> $$
>
> 同时知道$\ln x$的原函数是$x\ln x-x+C$.
>
> 所以得到
> $$
> \begin{aligned}
> \int x^k\ln x\text{d}x&=\frac{x^{k+1}}{k+1}-\int\frac{x^k}{k+1}\text{d}x\\
> &=\frac{x^{k+1}}{k+1}-\frac{x^{k+1}}{(k+1)^2}+C
> \end{aligned}
> $$
> 当然对于$k=-1$要特别讨论，得到
> $$
> \int\frac{1}{x}\ln x\text{d}x=\int\ln x\text{d}\ln x=\frac{1}{2}\ln^2x+C
> $$
> 解毕.

/Example/

> 计算
> $$
> \int x^ne^x\text{d}x
> $$
> 这里把$x^n$或者$e^x$视为$g$，会得到两种方法，分别得到
> $$
> \begin{aligned}
> F_n&=\int(\frac{x^{n+1}}{n+1})'e^x\text{d}x=\frac{x^{n+1}e^x}{n+1}-\int\frac{x^{n+1}e^x}{n+1}\text{d}x\\
> F_n&=\int x^n(e^x)'\text{d}x=x^ne^x-\int nx^{n-1}e^x\text{d}x
> \end{aligned}
> $$
> 事实上两个递推式等价. 为计算方便，我们使用第二个进行具体的计算，得到
> $$
> F_n=x^ne^x-nF_{n-1}
> $$
> 而$F_0=e^x$，所以
> $$
> F_n=x^ne^x-nx^{n-1}e^x+n(n-1)x^{n-2}e^x+\cdots+(-1)^nn!F_0+C
> $$
> 这是最终结果（满足于写一个求和式）.

/Example/

> 考虑积分
> $$
> \begin{aligned}
> \int\arctan x\text{d}x&=\int x'\arctan x\text{d}x\\
> &=x\arctan x-\int\frac{x}{1+x^2}\text{d}x\\
> &=x\arctan x-\frac{1}{2}\int\frac{\text{d}x^2}{1+x^2}\\
> &=x\arctan x-\frac{1}{2}\ln(1+x^2)+C
> \end{aligned}
> $$
> 完美符合我们所说的$g$复杂但$f$简单的情况.
>
> 同理计算：
> $$
> \begin{aligned}
> \int\arcsin x\text{d}x&=\int x'\arcsin x\text{d}x\\
> &=x\arcsin x-\int \frac{x\text{d}x}{\sqrt{1-x^2}}\\
> &=x\arcsin x+\sqrt{1-x^2}+C
> \end{aligned}
> $$

/Example/

> 下面这个例子我们用两种方法来做.
>
> 方法 1（第二换元法）：
>
> > $$
> > \begin{aligned}
> > I&=\int\sqrt{a^2-x^2}\text{d}x\\
> > &=\int\sqrt{a^2-a^2\cos^2\theta}(a\sin\theta)\text{d}\theta\\
> > &=\int -a^2\sin^2\theta\text{d}\theta
> > =-a^2\int\frac{1-\cos2\theta}{2}\text{d}\theta\\
> > &=-a^2(\frac{1}{2}\theta-\int\cos(2\theta)\frac{\text{d}(2\theta)}{4})\\
> > &=-\frac{1}{2}a^2\theta+\frac{1}{4}a^2\sin(2\theta)+C\\
> > &=-\frac{1}{2}a^2\arccos\frac{x}{a}+\frac{1}{4}a^2\cdot2\sin\theta\cos\theta+C\\
> > &=-\frac{1}{2}a^2\arccos\frac{x}{a}+\frac{1}{2}x\sqrt{a^2-x^2}+C
> > \end{aligned}
> > $$
>
> 方法 2（分部积分）：
>
> > $$
> > \begin{aligned}
> > I&=\int x'\sqrt{a^2-x^2}\text{d}x\\
> > &=x\sqrt{a^2-x^2}-\int x\cdot\frac{1}{2}(a^2-x^2)^{-\frac{1}{2}}(-2x)\text{d}x\\
> > &=x\sqrt{a^2-x^2}+\int\frac{x^2}{\sqrt{a^2-x^2}}\text{d}x\\
> > &=x\sqrt{a^2-x^2}+\int\frac{x^2-a^2}{\sqrt{a^2-x^2}}\text{d}x+\int\frac{a^2}{\sqrt{a^2-x^2}}\text{d}x\\
> > &=x\sqrt{a^2-x^2}-\int\sqrt{a^2-x^2}\text{d}x+a^2\int\frac{\text{d}(\frac{x}{a})}{\sqrt{1-(\frac{x}{a})^2}}\\
> > &=x\sqrt{a^2-x^2}-I+a^2\arcsin\frac{x}{a}+C
> > \end{aligned}
> > $$
> >
> > 至此得到关于$I$的方程，最后有
> > $$
> > I=\frac{1}{2}x\sqrt{a^2-x^2}+\frac{1}{2}a^2\arcsin\frac{x}{a}+C
> > $$
> > 回忆$\arcsin x+\arccos x=\frac{\pi}{2}$，知以上两个结果一致.

/Example/ （这个结果在以后的解 ODE 中常用）

> 令
> $$
> I_1=\int e^{ax}\cos bx\text{d}x\,,\quad I_2=\int e^{ax}\sin bx\text{d}x
> $$
> 方法 1（两次分部积分）：
>
> > $$
> > \begin{aligned}
> > I_1&=\int(\frac{e^{ax}}{a})'\cos bx\text{d}x\\
> > &=\frac{e^{ax}}{a}\cos bx+\int\frac{be^{ax}}{a}\sin bx\text{d}x\\
> > &=\frac{e^{ax}}{a}\cos bx+\frac{b}{a}I_2
> > \end{aligned}
> > $$
> >
> > 这是$I_1$和$I_2$的关系式，但是还需要一次分部积分.
> > $$
> > \begin{aligned}
> > &=\frac{e^{ax}}{a}\cos bx+\frac{b}{a}e^{ax}\sin bx-\frac{b^2}{a^2}I_1
> > \end{aligned}
> > $$
> > 最后得到
> > $$
> > I_1=\frac{a\cos bx+b\sin bx}{a^2+b^2}e^{ax}+C
> > $$
> > 代回原来的关系式得到
> > $$
> > I_2=\frac{-b\cos bx+a\sin bx}{a^2+b^2}e^{ax}+C
> > $$
>
> 方法 2（Euler 公式）：
>
> > 我们知道 Euler 公式，所以将积分化为实变量复值函数的积分，令
> > $$
> > f(x)=u(x)+\text{i}v(x)\,,\quad f'(x)=u'(x)+\text{i}v(x)
> > $$
> > 积分也是一样. 同时复指数的求导和实指数求导形式一样：
> > $$
> > (e^{\text{i}x})'=(\cos x+\text{i}\sin x)'=-\sin x+\text{i}\cos x=\text{i}e^{\text{i}x}
> > $$
> > 所以
> > $$
> > I=I_1+I_2=\int e^{x(a+\text{i}b)}\text{d}x
> > $$
> > 可以直接用指数函数的积分公式，最后得到：
> > $$
> > \begin{aligned}
> > I&=\frac{(a-\text{i}b)e^{(a+\text{i}b)x}}{a^2+b^2}
> > \end{aligned}
> > $$
> > 取实部和虚部就能得到
> > $$
> > \begin{aligned}
> > I_1&=\Re(I)=\frac{a\cos bx+b\sin bx}{a^2+b^2}e^{ax}+C\\
> > I_2&=\Im(I)=\frac{a\sin bx-b\cos bx}{a^2+b^2}e^{ax}+C
> > \end{aligned}
> > $$

## 有理式不定积分

统一形式是
$$
\int\frac{P(x)}{Q(x)}\text{d}x
$$
其中$P(x)$、$Q(x)$是多项式.

这一类积分的积分方法是将被积函数写成最简单的有理式的代数和，具体形式由$Q(x)$的分解式决定，
$$
Q(x)=A\prod_{i=1}^n(x-x_i)
$$
这是代数基本定理所决定的，其中$x_i$为$Q$的全部复根，同时可以不妨假设$A=1$.

$Q$的根可以分为两种，实根$a_i$，重数$m_i$；共轭虚根$\beta_j\pm\text{i}\gamma_j$，重数都是$n_j$. 在这种分类下，$Q$能进一步分解为
$$
\begin{aligned}
Q(x)&=\prod(x-a_i)^{m_i}\prod(x-\beta_j+\text{i}\gamma_j)^{n_j}(x-\beta_j-\text{i}\gamma_j)^{n_j}\\\\
&=\prod(x-a_i)^{m_i}\prod((x-\beta_j)^2+\gamma_j^2)^{n_j}
\end{aligned}
$$
即$Q$分解为一些一次因子（前面）和一些二次因子（后面），二次因子也能写成$x^2+p_jx+q_j$，其中$\Delta=p_j^2-4q_j<0$.

/Claim/

> $\frac{P}{Q}$有如下表示：
> $$
> \begin{aligned}
> \frac{P(x)}{Q(x)}&=(\text{polynomial }W(x))+\sum_i(\frac{A_{i,1}}{x-a_i}+\cdots+\frac{A_{i,m_i}}{x-a_i})\\
> &\quad+\sum_j(\frac{B_{j,1}x+C_{j,1}}{x^2+p_jx+q_j}+\cdots+\frac{B_{j,n_j}x+C_{j,n_j}}{(x^2+p_jx+q_j)^{n_j}})
> \end{aligned}
> $$
> 其中$A$、$B$、$C$的值可以通过通分之后比较系数得到，多项式$W$使用带余长除法得到.

我们略去命题的证明，因为比较复杂.

/Example/

> $(x^3+1)^{-1}$的最简表示：
>
> 由命题知道，
> $$
> \frac{1}{x^3+1}=\frac{A}{x+1}+\frac{Bx+C}{x^2-x+1}
> $$
> 通分比较得到，$A=\frac{1}{3}$，$B=-\frac{1}{3}$，$C=\frac{2}{3}$.

同理可以算$(x^4+1)^{-1}$. 同时为了找到这里$Q(x)=x^4+1$的根，可以使用配方：
$$
x^4+1=(x^2+1)^2-2x^2=(x^2-\sqrt2x+1)(x^2+\sqrt2x+1)
$$
另一方法是$x^4=-1=e^{\text{i}\pi}$，求根等价于分割单位圆，$e^{\text{i}\cdot4\theta}=e^{\text{i}\pi}$.

计算的第二步骤是对最简式计算不定积分，首先对于多项式$W$是简单的，可以直接计算；对于$A$部分式子，有
$$
\int\frac{\text{d}x}{(x-a)^m}=\left\{\begin{array}{lr}
\frac{(x-a)^{-m+1}}{-m+1}+C\,,\quad m\ne1\\\\
\ln|x-a|+C\,,\quad m=1
\end{array}\right.
$$
对于$Bx+C$部分式子，首先我们想要“用光”分子的一次项，得到
$$
\begin{aligned}
&\int\frac{Bx+C}{(x^2+px+q)^n}\text{d}x=\int\frac{\frac{B}{2}(2x+p)+C-\frac{B}{2}p}{(x^2+px+q)^n}\text{d}x\\\\
&=\frac{B}{2}\int\frac{\text{d}(x^2+px+q)}{(x^2+px+q)^n}+(C-\frac{B}{2}p)\int\frac{\text{d}x}{(x^2+px+q)^n}\\\\
&=\frac{B}{2}\frac{(x^2+px+q)^{-n+1}}{-n+1}+(C-\frac{B}{2}p)\int\frac{\text{d}x}{(x^2+px+q)^n}
\end{aligned}
$$
剩下的部分做分母配方，得到
$$
\int\frac{\text{d}x}{(x^2+px+q)^n}=\int\frac{\text{d}(x+\frac{p}{2})}{((x+\frac{p}{2})^2+a^2)^n}=\int\frac{\text{d}u}{(u^2+a^2)^n}
$$
这里使用分部积分，令上面的积分值为$I_n$，则
$$
\begin{aligned}
I_n&=\int u'\cdot\frac{1}{(u^2+a^2)^n}\text{d}u\\
&=\frac{u}{(u^2+a^2)^n}-\int u(-n)\frac{1}{(u^2+a^2)^{n+1}}\cdot2u\text{d}u\\
&=\frac{u}{(u^2+a^2)^n}+2n(I_n-a^2I_{n+1})
\end{aligned}
$$
所以递推关系是
$$
I_{n+1}\cdot2na^2=(2n-1)I_n+\frac{u}{(u^2+a^2)^n}
$$
这个递推式并不一定要记住，可以在使用的时候现场算一遍，毕竟它比较复杂.

/Example/

> $$
> \begin{aligned}
> &\int\frac{\text{d}x}{x^3+1}=\int(\frac{\frac{1}{3}}{x+1}+\frac{-\frac{1}{3}x+\frac{2}{3}}{x^2-x+1})\\
> &=\frac{1}{3}\ln|x+1|+\int\frac{-\frac{1}{6}\text{d}(x^2-x+1)+\frac{1}{2}\text{d}x}{x^2-x+1}\\
> &=\frac{1}{3}\ln|x+1|-\frac{1}{6}\ln|x^2-x+1|+\frac{1}{2}\int\frac{\text{d}x}{x^2-x+1}\\
> &=\frac{1}{3}\ln|x+1|-\frac{1}{6}\ln|x^2-x+1|+\frac{1}{2}\int\frac{\text{d}(x-\frac{1}{2})}{(x-\frac{1}{2})^2+\frac{3}{4}}\\
> &=\frac{1}{3}\ln|x+1|-\frac{1}{6}\ln|x^2-x+1|+\frac{1}{\sqrt3}\arctan\frac{2x-1}{\sqrt3}
> \end{aligned}
> $$

## 万能代换

实际上我们在去掉根号的过程中会大量遇到三角函数，考虑这样形式的积分：
$$
\int R(\cos x,\sin x)\text{d}x
$$
其中$R(a,b)$是一个二元函数. 用所谓的万能代换，即$\tan\frac{x}{2}=t$，这是第二换元法.

具体来说，回忆三角函数的一些计算，知道
$$
\cos^2\frac{x}{2}=\frac{1}{1+t^2}\,,\quad\cos x=2\cos^2\frac{x}{2}-1=\frac{1-t^2}{1+t^2}\\
\sin x=2\sin\frac{x}{2}\cos\frac{x}{2}=\frac{2t}{1+t^2}
$$
所以代换为
$$
\int R(\frac{1-t^2}{1+t^2},\frac{2t}{1+t^2})\frac{2}{1+t^2}\text{d}t
$$
变为$t$的有理式的积分.

/Example/

> $$
> \int\frac{\text{d}x}{a+\sin x}
> $$
>
> 其中$a>1$，保证分母为正.
> $$
> \begin{aligned}
> &\int\frac{\text{d}x}{a+\sin x}=\int\frac{1}{a+\frac{2t}{1+t^2}}\cdot\frac{2}{1+t^2}\text{d}t\\
> &=\int\frac{2}{a(1+t^2)+2t}\text{d}t=\int\frac{2\text{d}(t+\frac{1}{2})}{a((t+\frac{1}{a})^2+\frac{a-\frac{1}{a}}{a})}\\
> &=\frac{2}{\sqrt{a^2-1}}\arctan\frac{a\tan\frac{x}{2}+1}{\sqrt{a^2-1}}+C
> \end{aligned}
> $$
> 最好记住其中用到的：
> $$
> \int\frac{\text{d}u}{u^2+c^2}=\frac{1}{c}\arctan\frac{u}{c}
> $$
>
> > 拓展一点：我们来做一个定积分. 考虑$0\sim2\pi$，则
> > $$
> > \begin{aligned}
> > &\int_0^{2\pi}\frac{\text{d}x}{a+\sin x}=\frac{2}{\sqrt{a^2-1}}\arctan\frac{a\tan\frac{x}{2}+1}{\sqrt{a^2-1}}|^{2\pi}_0\\
> > &=\frac{2}{\sqrt{a^2-1}}(\arctan\frac{1}{\sqrt{a^2-1}}-\arctan\frac{1}{\sqrt{a^2-1}})\\\\
> > &=0
> > \end{aligned}
> > $$
> > 一个连续的正值函数积分结果为$0$是不可能的. 一定有什么地方出现问题，观察发现$\tan$在$\pi/2$位置无定义，所以积分应该分段，并将函数连续延拓到$x=\pi$的位置.
> > $$
> > \lim_{x\to\pi-}F(x)=\frac{\pi}{\sqrt{a^2-1}}\,,\quad\lim_{x\to\pi+}F(x)=-\frac{\pi}{\sqrt{a^2-1}}
> > $$
> > 所以在这一点我们定义$\tilde F(\pi)=\frac{\pi}{\sqrt{a^2-1}}$，前半段积分是
> > $$
> > \int_0^\pi f(x)\text{d}x=\tilde F(x)|^\pi_0
> > $$
> > 后半段积分定义的$\tilde F(\pi)=-\frac{\pi}{\sqrt{a^2-1}}$，后半段积分也能计算. 最后的积分应该是两段积分值之和：
> > $$
> > \int_0^{2\pi}\frac{\text{d}x}{a+\sin x}=\frac{2\pi}{\sqrt{a^2-1}}
> > $$
>
> 注记：使用 Newton - Leibiniz 公式计算定积分时，需要看不定积分得到的原函数是否有奇异点，若有则必须分段处理.

## 定积分计算

直接使用分部积分公式 & 换元公式，好处是：

* 更早地代入数值简化计算，数值计算简单于函数叠加.
* 去根号无模糊之处，因为已经选定了区间.
* 定积分的换元公式所需条件更少（这是一维积分特有的性质）.

现在来叙述定积分的分部积分公式 & 换元公式.

/Theorem/

> 设$f$、$g$在$(a,b)$上可导，$f'$、$g'$在$(a,b)$上可积，则
> $$
> \int_a^b f'(x)g(x)\text{d}x=f(x)g(x)|^b_a-\int_a^bf(x)g'(x)\text{d}x
> $$

/Proof/

> 由$f$、$g$可导知连续，所以可积，同时可积函数的乘积和和可积，所以$fg'+f'g$可积，其原函数为$fg$.
>
> 得证.

证毕.