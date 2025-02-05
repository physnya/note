---
title: Lesson 26
createTime: 2024/12/18 15:06:44
permalink: /integral/integral/fopt6uxl/
---
# 高等微积分 Lesson 26

## 微积分基本定理

我们只叙述了我们可能会用到的部分：

* （变上限积分求导）设$f\in C([a,b])$，令$F(x)=\int_a^xf$，则$F'(x)=f(x)$，$\forall(a,b)$；在边界上，$F'(a+)=f(a)$，$F'(b-)=f(b)$.
  连续函数的变上限积分是其原函数.

可证明积分中值定理的另一个版本：

/Proof/ （积分中值定理）

> 由以上定理知，$F\in C([a,b])$，且在$(a,b)$中可导，对$F$使用 Lagrange 中值，$\exist\xi\in(a,b)$使得
> $$
> F'(\xi)=\frac{F(b)-F(a)}{b-a}=\frac{\int_a^bf}{b-a}=f(\xi)
> $$
> 所以$f$的积分的平均是$(a,b)$内某点处$f$的实际值.

证毕. 这个版本强于之前叙述（$\exist\xi\in[a,b]$使得式子成立），因为$(a,b)$比$[a,b]$范围小.

微积分基本定理的另一个部分是 Newton - Leibiniz 公式：

* （Newton - Leibiniz 公式）设$f\in\mathcal{R}([a,b])$，设$F'(x)=f(x)$，$\forall x\in(a,b)$，且==$F$在$[a,b]$上连续==，则
  $$
  \int_a^bf(x)\text{d}x=F|_a^b=F(b)-F(a)
  $$
  注：一定要求$F$在$a,b$处连续，否则这个$F$可以在这两个点处被修改，$F(b)-F(a)$失去跟踪.

上述版本是最强的版本，一个更弱但更常用的版本是：

* 设$f\in\mathcal{R}([a,b])$且$F'(x)=f(x)$，$\forall x\in[a,b]$，从而有
  $$
  \int_a^bf=F|_a^b
  $$

为什么这两个部分合起来才叫做微积分基本定理？

> $f\longrightarrow$ 积分$\int_a^bf$ $\longrightarrow$ 求导$f$；
>
> $F\longrightarrow$ 求导$f$ $\longrightarrow$ 积分$F(b)-F(a)$.
>
> 因为第一部分告诉我们，先积分再求导会得到自己；第二部分告诉我们，先求导再积分会得到自己，这看起来就像在一个好的环境下，积分 & 求导是一对“互逆”的运算，当然还需要一些适当的条件.

进而，计算某一个积分就变成寻找$f$的原函数.

## 计算不定积分

有两个额外的方法：换元公式、分部积分公式.

根据求导的 Chain Rule：$(F(\alpha(x)))'=F'(\alpha(x))\alpha'(x)$，可以写出
$$
\int F'(\alpha(x))\alpha'(x)\text{d}x=F(\alpha(x))+C
$$
Zurich 的书中写到这里就停下来了，说上面公式就是换元公式$(*)$. 我们在上面公式中甚至找不到“换元体现在何处”，所以在一些中文的书籍中为了体现换元，进行了进一步的细分，称为第一换元和第二换元，但是这增加了理解难度.

/Theorem/ （第一换元）

> 若有
> $$
> \int f(x)\text{d}x=\int g(\alpha(x))\alpha'(x)\text{d}x
> $$
> 找到$g$的原函数$G'=g$，就会得到
> $$
> \int G'(\alpha(x))\alpha'(x)\text{d}x=G(\alpha(x))+C
> $$
> 这两步就是第一换元. 一些书中会做形式化的改写，下面我们就来做这一操作：
>
> 看出$f(x)=g(\alpha(x))\alpha'(x)$之后，我们联想到$\alpha'(x)\text{d}x$就像是$\alpha(x)$的微分，能够写成$\text{d}(\alpha(x))$，用一个新的变量就能写成$\text{d}t$. 所以换元$t=\alpha(x)$写出
> $$
> \int f(x)\text{d}x=\int g(t)\text{d}t
> $$
> 可以发现，这里的换元$t=\alpha(x)$一步等价于上面两步，最后写成上面这种形式化的写法.
>
> 所以第一换元法可以总体写成：
> $$
> \int f(x)\text{d}x=\int g(\alpha(x))\alpha'(x)\text{d}x
> \overset{t=\alpha(x)}=\int g(t)\text{d}t
> $$
> 其实后面一步单独来看意义不是很明晰.

/Example/

> 求$\tan x$的不定积分.
> $$
> \begin{aligned}
> \int\tan x\text{d}x=\int\frac{\sin x}{\cos x}\text{d}x=\int\frac{-\text{d}(\cos x)}{\cos x}\overset{t=\cos x}{=}\int-\frac{\text{d}t}{t}=-\ln|t|+C
> \end{aligned}
> $$
> 所以答案是$-\ln|\tan x|+C$.

/Example/

> $$
> \int\frac{\text{d}x}{\sin x}
> $$
>
> 这一个看起来并不好处理. 考虑前例用到了$\text{d}(\cos x)=-\sin x\text{d}x$，$\text{d}(\sin x)=\cos x\text{d}x$. 所以上下同时乘$-\sin x$，得到：
> $$
> \begin{aligned}
> \int\frac{\text{d}x}{\sin x}&=\int\frac{-\sin x\text{d}x}{-\sin^2x}=\int\frac{\text{d}(\cos x)}{\cos^2x-1}\overset{t=\cos x}{=}\int\frac{\text{d}t}{t^2-1}\\\\
> &=\int\frac{\text{d}t}{(t-1)(t+1)}=\frac{1}{2}\int(\frac{1}{t-1}-\frac{1}{t+1})\text{d}t\\\\
> &=\frac{1}{2}\ln\frac{1-t}{1+t}+C=\frac{1}{2}\ln\frac{1-\cos x}{1+\cos x}+C
> \end{aligned}
> $$
> 为结果.
>
> 如果是计算正割的积分，类似地得到
> $$
> \int\frac{\text{d}x}{\cos x}=-\frac{1}{2}\ln\frac{1-\sin x}{1+\sin x}+C
> $$

/Example/ （下面几个例子最好记下来）

> $$
> \begin{aligned}
> \int\frac{1}{x^2-a^2}\text{d}x&=\int(\frac{1}{x-a}-\frac{1}{x+a})\text{d}x=\frac{1}{2a}\int(\frac{1}{x-a}-\frac{1}{x+a})\text{d}x\\\\
> &=\frac{1}{2a}\ln|\frac{x-a}{x+a}|+C
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> \int\frac{1}{x^2+a^2}\text{d}x&=\int\frac{\text{d}(\frac{x}{a})}{a((\frac{x}{a})^2+1)}=\frac{1}{a}\arctan\frac{x}{a}+C
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> \int\frac{1}{\sqrt{-x^2+a^2}}\text{d}x&=\int\frac{a\text{d}(\frac{x}{a})}{a\sqrt{1-(\frac{x}{a})^2}}=\arcsin\frac{x}{a}+C
> \end{aligned}
> $$

从上面的例子我们发现，第一换元法极度依赖于看出$f(x)=g(\alpha(x))\alpha'(x)$，若看不出来，如何处理？

使用第二换元法.

第二换元法是从换元需求出发，我们希望令$t=\alpha(x)$，回到$x$，要把$x$用$t$表示，也就是$x=\beta(t)$. 合并这两个需求，就是找到两个函数$\alpha,\beta$满足$x=\beta(\alpha(x))$，$\forall x\in I$（$I$是计算不定积分的区间），也即$\exist\beta\circ\alpha=\text{id}_I$，称$\beta$是$\alpha$的左逆，$\alpha$是$\beta$的右逆.

设已经有$\beta(\alpha(x))=x$，恒等式求导得到$1=\beta'(\alpha(x))\alpha'(x)$，$\forall x$. 利用这个“$1$”能够得到
$$
f(x)\cdot1=f(\beta(\alpha(x)))\beta'(\alpha(x))\alpha'(x)
$$
令$g(t)=f(\beta(t))\beta(t)$，则有
$$
\int f(x)\text{d}x=\int f(\beta(\alpha(x)))\beta'(\alpha(x))\alpha'(x)\text{d}x=\int g(\alpha(x))\alpha'(x)\text{d}x=\int g(t)\text{d}t
$$
形式化的写法是：

/Theorem/ （第二换元）

> 设已经找出$\beta(\alpha(x))=x$，记作$(*)$. 则
> $$
> \int f(x)\text{d}x\overset{t=\alpha(x)}{\underset{x=\beta(t)}{=}}\int f(\beta(t))\beta'(t)\text{d}t
> $$
> 这一个换元就完成了上面的所有步骤，虽然看起来并无意义，是形式化的写法.

实际上我们过不了多久就会忘记上面的推导，只会记住形式化的法则，但这些法则才是常用的. 总结一下，是

* 第一换元：
  $$
  \int f(x)\text{d}x\overset{\text{discover}}{=}\int g(\alpha(x))\text{d}(\alpha(x))\overset{t=\alpha(x)}{=}\int g(t)\text{d}t
  $$

* 第二换元：
  $$
  \int f(x)\text{d}x\overset{\text{find }\beta(\alpha(x))=x}{\underset{t=\alpha(x),x=\beta(t)}{=}}\int f(\beta(t))\beta'(t)\text{d}t
  $$

两者的区别：

* 第一换元法基于“看出”（<s>注意到</s>），第二换元法基于需求；
* 第一换元法中$\alpha(x)$是任意的，第二换元法中$\alpha$存在逆$\beta$，几乎是一个双射.

/Example/

> $$
> \int\frac{\text{d}x}{\sqrt{a^2-x^2}}=?
> $$
>
> 我们的需求是去掉根号，回忆常见的去根号换元：
>
> * $\sqrt{a^2-x^2}\overset{x=a\cos\theta}{=}a\sin\theta$；
> * $\sqrt{a^2-x^2}\overset{x=a\sin\theta}{=}a\cos\theta$；
> * $\sqrt{x^2-a^2}\overset{x=a/\cos\theta}{=}a\sqrt{1/\cos^2\theta-1}=a\tan\theta$；
> * $\sqrt{x^2-a^2}\overset{x=a/\sin\theta}{=}a\sqrt{1/\sin^2\theta-1}=a\cot\theta$.
>
> 所以想到取$\beta(\theta)=a/\cos\theta=x$，$\theta=\arccos x/a$，有
> $$
> \begin{aligned}
> \int\frac{\text{d}x}{\sqrt{x^2-a^2}}&=\int\frac{\text{d}(\frac{a}{\cos\theta})}{a\sqrt{\frac{1}{\cos^2\theta}-1}}=\int\frac{\text{d}\theta}{\cos\theta}=\frac{1}{2}\ln\frac{1+\sin\theta}{1-\sin\theta}+C'\\\\
> &=\frac{1}{2}\ln\frac{1+\sqrt{1-(\frac{a}{x})^2}}{1-\sqrt{1-(\frac{a}{x})^2}}+C'=\frac{1}{2}\ln\frac{x+\sqrt{x^2-a^2}}{x-\sqrt{x^2-a^2}}+C'\\\\
> &=\frac{1}{2}\ln\frac{(x+\sqrt{x^2-a^2})^2}{a^2}+C'=\ln(x+\sqrt{x^2-a^2})+C
> \end{aligned}
> $$
> 其中有一步其实存在含糊的地方，即开根号时没有加绝对值，但这是因为不定积分这个任务本身就是含糊的，我们并没有指定在什么区间上找到原函数，所以这里其实不重要，去根号 $\longleftrightarrow$ 选定某一个区间.
>
> 这似乎体现理论本身有含糊的地方，但是仔细想会发现，算不定积分是为了计算定积分，在这种时候区间是确定的，不会有问题；单纯计算不定积分只是一种练习，在这里没必要过多地计较这种问题.

/Example/

> $$
> \begin{aligned}
> \int\frac{\text{d}x}{\sqrt{x^2+a^2}}&\overset{x=a\tan\theta}{\underset{\theta=\arctan x/a}{=}}\int\frac{a\text{d}(\tan\theta)}{\sqrt{a^2\tan\theta+a^2}}=\int\frac{\frac{a}{\cos^2\theta}}{\frac{a}{\cos\theta}}\text{d}\theta=\int\frac{\text{d}\theta}{\cos\theta}\\\\
> &=\frac{1}{2}\ln\frac{1+\sin\theta}{1-\sin\theta}+C'=\frac{1}{2}\ln\frac{\sqrt{x^2+a^2}+x}{\sqrt{x^2+a^2}-x}+C'\\\\
> &=\frac{1}{2}\ln\frac{(\sqrt{x^2+a^2}+x)^2}{a^2}+C'=\ln(\sqrt{x^2+a^2}+x)+C
> \end{aligned}
> $$
>
> 这些积分最好记住，但一定不要记错；建议是当场再快速计算一遍.