---
title: Lesson 21
createTime: 2024/12/04 17:39:00
permalink: /integral/integral/3ocedf8u/
---
# 高等微积分 Lesson 21

## Taylor 公式的应用

设$f$在$I$处处有$n$阶导，则
$$
f(b)=\sum_{i=0}^{n-1}\frac{f^{(i)}(a)}{i!}(b-a)^i+R_n
$$
其中$R_n$可以表示为

* Lagrange 余项，$\exist\xi$介于$a,b$之间使得
  $$
  R_n=\frac{f^{(n)}(\xi)}{n!}(b-a)^n
  $$

* Cauchy 余项，$\exist\xi$介于$a,b$之间使得
  $$
  R_n=\frac{f^{(n)}(\xi)}{(n-1)!}(b-\xi)^{n-1}(b-a)
  $$

记忆方法：对于多项式$P$，$\deg P\leq n-1$，可以推出
$$
P(b)=\sum_{i=0}^{n-1}\frac{P^{(i)}(a)}{i!}(b-a)^i
$$
此亦为 Taylor 公式，对一般的$f(x)$，可以定义
$$
F(x)=\sum_{i=0}^{n-1}\frac{f^{(i)}(x)}{i!}(b-x)^i
$$
对$F$和任意的一个$g(x)$，可以用 Cauchy 中值定理，产生
$$
\begin{aligned}
\frac{F(b)-F(a)}{g(b)-g(a)}&=\frac{F'(\xi)}{g'(\xi)}\\\\
\Longrightarrow f(b)-\sum_{i=0}^{n-1}\frac{f^{(i)}(a)}{i!}(b-a)^i&=\frac{g(b)-g(a)}{g'(\xi)}\frac{f^{(n)}(\xi)}{(n-1)!}(b-\xi)^{n-1}
\end{aligned}
$$
得到任何一种余项. 对于 Cauchy 余项，就是取$g(x)=x$.

为了更好的应用 Taylor 公式，我们从不同角度解读公式的含义，有以下几点解释：

1. 把$f$近似为多项式；
2. 用$f$的高阶导数信息刻画 / 描述$f$.（微分学的任务）

下面讲讲应用.

/Claim/

> $\forall x\in\R$，有
> $$
> e^x=\sum_{n=0}^\infty\frac{x^n}{n!}=\lim_{n\to\infty}(1+\frac{x^1}{1!}+\cdots+\frac{x^n}{n!}+\cdots)
> $$

/Claim/

> $\forall x\in\R$，有
> $$
> \begin{aligned}
> \sin x&=x-\frac{x^3}{3!}+\cdots=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{(2n+1)!}\\
> \cos x&=1-\frac{x^2}{2!}+\cdots=\sum_{n=0}^\infty(-1)^n\frac{x^{2n}}{(2n)!}
> \end{aligned}
> $$
> 实际上有的偏代数书籍中会用上面的式子定义三角函数，但是这样比较缺乏几何含义.

/Proof/

> 对称，只证明$\sin x$的结论. 导函数是周期变化的，有
> $$
> f^{(1)}=\cos x\,,\quad f^{(2)}=-\sin x\,,\quad f^{(3)}=-\cos x\,,\quad f^{(4)}=\sin x
> $$
> 用 Taylor 公式，但是注意到展开至$2n$阶和$2n+1$阶，多项式部分并无区别，但是余项的阶数相差一阶，所以展开至$2n+1$阶比较划算.
>
> 由 Lagrange 余项得：
> $$
> R_{2n+1}(x)=\frac{f^{(2n+1)}(\xi)}{(2n+1)!}x^{2n+1}=\frac{\pm\cos\xi}{(2n+1)!}x^{2n+1}
> $$
> 注意$\xi$依赖于$x$和$n$. 只需证明上式在$n\to\infty$时趋于$0$，理由是
> $$
> 0\leq|R_{2n+1}(x)|\leq\frac{1}{(2n+1)!}|x|^{2n+1}=b_n
> $$
> 然后考虑到$\underset{n\to\infty}{\lim}b_{n+1}/b_n=0$，所以$\underset{n\to\infty}{\lim}b_n=0$，根据夹逼定理证明余项趋于$0$. 得证.

证毕.

/Example/

> 求$\sin x$的近似表达式，要求$\forall|x|<1$，误差$<10^{-3}$.

/Solution/

> 用$f(x)=\sin x$的 Taylor 公式，得到
> $$
> \sin x=\underset{P(x)}{\underline{x-\frac{x^3}{3!}+\cdots+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}}}+\frac{f^{(2n+1)}(\xi_x)}{(2n+1)!}x^{2n+1}
> $$
> ::: tip -
> Feynman 在 Manhattan 计划期间，觉得非常无聊，于是挑战计划中的各种数学家，要他们出题测试自己，然后有一位数学家让他在 1 分钟内算出$2^{1/3}$，Feynman 发现这可以用$(1.728+0.272)^{1/3}$来算，因为他熟知$1728=12^3$，并估算$0.272/1.728\sim0.1$.
> 
> 但是当有人问他 $\tan10^{1000}$时，他无法回答了. 这位问倒 Feynman 的数学家曾经还用钢尺反复抽出打自己的手，并装作不痛，诱骗 Feynman 做同样的事（？）
> 
> 为什么 Feynman 会熟知$1728=12^3$呢？因为 Ramanujan 的老师曾经生病，住在编号为$1729$的房间里，向他抱怨说这个房间号并没有什么特点. 但是 Ramanujan 在 1 分钟之内向他说明这个数字相当有特点，它是“最小的能被表达为两种不同立方和的数”（因为$1729=10^3+9^3$或者$1729=12^3+1^3$. 这个故事被很多人熟知.
> :::

::: danger -

我们刚刚在讲什么来着？
——艾神

:::

/Theorem/

> $$
> (1+x)^\alpha=\sum_{n=0}^\infty\begin{pmatrix}
> \alpha\\n
> \end{pmatrix}x^n
> $$

/Proof/

> 我们会发现这个定理无法用 Lagrange 余项证明，因为 Lagrange 余项在这里写成：
> $$
> R_{n+1}=\frac{\alpha(\alpha-1)\cdots(\alpha-n)}{(n+1)!}(1+\xi)^{\alpha-n-1}x^{n+1}
> $$
> 但是
> $$
> (\frac{x}{1+\xi})^{n+1}
> $$
> 可能大于$1$，所以不能解决问题. 我们选择使用 Cauchy 余项，
> $$
> R_{n+1}=\frac{f^{(n+1)}(\xi)}{n!}(x-\xi)^n(x-0)
> $$
> 在叙述 Taylor 公式时，可以用另外一种方式来写出$\xi$，即定比分点的写法（这就是一种无量纲化！）：
> $$
> \xi-a=\theta(b-a)\,,0<\theta<1
> $$
> 用$\theta$改写$\xi$.
>
> 在这里就可以把 Cauchy 余项写成
> $$
> R_{n+1}=\frac{\alpha(\alpha-1)\cdots(\alpha-n)}{n!}(1+\theta x)^{\alpha-n-1}x^{n+1}(1-\theta)^n
> $$
> 改写一下：
> $$
> R_{n+1}=\underset{A}{\underline{\frac{\alpha(\alpha-1)\cdots(\alpha-n)}{n!}x^{n+1}}}\cdot\underset{B}{\underline{(\frac{1-\theta}{1+\theta x})^n}}\cdot\underset{C}{\underline{(1+\theta x)^{\alpha+1}}}
> $$
> 分开考虑$A$、$B$、$C$三个部分，
>
> 1. $A$部分，$\underset{n\to\infty}{\lim}|A_{n+1}|/|A_n|=0$，趋于零.
> 2. $B$部分，因为$0<\theta(1+x)$，$0<\theta<1$，可得$0<1-\theta<1+\theta x$. 这导致$B$部分的底数小于$1$，所以$B$部分也趋于零.
> 3. $C$部分，$(1+\theta x)^{\alpha-1}$有界，它介于$(1-|x|)^{\alpha-1}$和$(1+|x|)^{\alpha-1}$之间.
>
> 所以结合在一起得到$R_{n+1}\to0$.

证毕.

从上面这个题能够看出，两种不同的余项虽然表达的是同样的含义，但是实际使用时并不相同，在不同情况下应该有选择地应用不同表达式.

下面来看一些更加低阶的例子.

/Example/ （一个流传广泛的例子）

> 设$f$在$\R$上处处有二阶导数，且$|f(x)|\leq A$，$|f''(x)|\leq B$，则$|f'(x)|\leq\sqrt{2AB}$.

/Proof/

> 用$f$和$f^{(2)}$控制$f^{(1)}$，这显然不平凡. 但是注意到这三者均在 Taylor 公式中间出现，考虑二阶 Taylor 公式，得到
> $$
> f(x+h)=f(x)+f'(x)h+\frac{f''(\xi)}{2!}h^2
> $$
> 得到
> $$
> \begin{aligned}
> |f'(x)|&=|\frac{f(x+h)-f(x)-\frac{1}{2}f''(\xi)h^2}{h}|\\\\
> &\leq\frac{2A}{h}+\frac{Bh}{2}\quad\forall h>0\\\\
> \Longrightarrow|f'(x)|&\leq\min(\frac{2A}{h}+\frac{Bh}{2})
> \end{aligned}
> $$
> 这里能用到均值不等式，上式在$h=\sqrt{4A/B}$时取最小值，代回知$|f'(x)|\leq2\sqrt{AB}$.
>
> 但是这个结论不够强，为了强化结论，我们考虑下面的方法：
> $$
> \begin{aligned}
> f(x+h)&=f(x)+f'(x)h+\frac{f''(\xi)}{2}h^2\\
> f(x-h)&=f(x)-f'(x)h+\frac{f''(\eta)}{2}h^2
> \end{aligned}
> $$
> 作差得到
> $$
> |f'(x)|=|\frac{f(x+h)-f(x-h)}{2h}-\frac{f''(\xi)-f''(\eta)}{4}h^2|\leq\frac{A}{h}+\frac{Bh}{2}
> $$
> 获得证明.

证毕.

下面一个例子来自于去年的期末考试.

::: tip -

上次出了这个题之后我意识到同学们的水平是很高的.
——艾神

:::

/Example/

> 设$f$在$\R$上有连续的二阶导，且$f(0)=f(1)=0$. 求证$\forall a\in(0,1)$有$|f(a)|\leq\frac{1}{8}\underset{x\in[0,1]}{\max}|f''(x)|$.

/Proof/

> 证法 1：由$|f''|$连续和最值定理，知道$\underset{[0,1]}{\max}|f''(x)|$存在，记为$M$，目标是证明$-M/8\leq f(a)\leq M/8$，只看$f(a)\leq M/8$.
>
> 考虑最值在何处取到，如果是在端点，那么肯定满足条件，所以只考虑不在端点取到最值的情况. 最值点是极值点，$f'(x_0)=0$，Taylor 公式得到：
> $$
> \begin{aligned}
> f(1)&=f(x_0)+f'(x_0)(1-x_0)+\frac{f''(\xi)}{2}(1-x_0)^2\\
> f(0)&=f(x_0)+f'(x_0)(-x_0)+\frac{f''(\eta)}{2}x_0^2
> \end{aligned}
> $$
> 做差得到
> $$
> f(x_0)=-\frac{f''(\xi)}{2}(1-x_0)^2=-\frac{f''(\eta)}{2}x_0^2
> $$
> 于是
> $$
> f(x_0)\leq\min(\frac{1}{2}(1-x_0)^2M,\frac{1}{2}x_0^2M)
> $$
> 但是$(1-x_0)$和$x_0$必有一项是$\in[0,\frac{1}{2}]$，所以
> $$
> f(x_0)\leq\frac{1}{8}M
> $$

证毕.

---

下节课讲其他证明方法.