---
author:
  name: physnya
  url: https://physnya.top/
title: 札记 12
createTime: 2024/12/09 17:02:36
permalink: /Feynman-III/Feynman-III/0eyebknq/
---
## 2024-12-09

上节课讲过，SO(3) 的幺正正交表示可以用角动量$j$分类，$j=0,1/2,1,\cdots$表示的维数是$2j+1$. 不证明唯一性和存在性，这是数学家的工作.

找$D^{(j)}[R(\gamma,\beta,\alpha)]_{(2j+1)\times(2j+1)}$：

1. 找到一组基础态$\ket{j,m}$，其中$m$是沿$z$轴角动量的分量，显然$m=-j,\cdots,j$，总共是$2j+1$个.
2. 将旋转写成三个 Euler 角旋转的符合，$R(\gamma,\beta,\alpha)=R_z(\gamma)R_y(\beta)R_z(\alpha)$.

这是我们的步骤. 现在开始来找基础态，对于第一个态，$\ket{j,j}=\ket{+\cdots+}$，这是最高权态. 剩下的态势是对称组合：
$$
\prod(\ket{+}^u\ket{-}^v)=\frac{1}{C_{u+v}^u}(\ket{+}^u\ket{-}^v\times\text{number of permutation})
$$
其中除掉的系数只是为了在之后计算方便（矩阵能自由地进出$\prod$），如果要使得这个态归一化的话，我们应该除以$\sqrt{C_{u+v}^u}$. 将$\prod$看作某一种产生这样作用的算符即可.

> 这里的$\prod$是什么？
>
> 以$\ket{+++}$为例，假设变换$D\ket{+}=a\ket{+}+b\ket{-}$，那么可以记$D\ket{+++}$为
>$$
> \begin{aligned}
> D\ket{+++}&=D\prod\ket{+++}\\\\
> &=\bigotimes_3(a\ket{+}+b\ket{-})\\\\
> &=a^3\ket{+++}+3a^2b\ket{++-}+3ab^2\ket{+--}+b^3\ket{---}
> \end{aligned}
>$$
> 使用$\prod$这个符号让张量积变得像二项式展开一样，这是因为我们的出发点就是全对称的态，所以中间得到的所有项都会是全对称的（它们的张量积可以交换，本来不等价的$\ket{+-+}$和$\ket{++-}$之类的东西自动合起来了）.
>
> 全对称是封闭的.

对于$\ket{j,m}$态，$u=j+m$，$v=j-m$，如果带上正确的归一化因子，那么所谓的正确基础态是
$$
\ket{j,m}=\sqrt{C_{2j}^{j+m}}\prod(\ket{+}^u\ket{-}^v)
$$
现在将$R_z^{(j)}(\phi)$作用到某一个基础态上，会得到
$$
\begin{aligned}
R_z^{(j)}(\phi)\ket{j,m}&=\sqrt{C_{2j}^{j+m}}\prod\{[R_z^{(1/2)}(\phi)\ket{+}]^{j+m}[R_z^{(1/2)}(\phi)\ket{-}]^{j-m}\}\\\\
&=\sqrt{C_{2j}^{j+m}}\prod\{(e^{i\phi/2}\ket{+})^{j+m}(e^{-i\phi/2}\ket{+})^{j-m}\}\\\\
&=\sqrt{C_{2j}^{j+m}}(e^{i\phi/2})^{j+m}(e^{-i\phi/2})^{j-m}\prod\{(\ket{+})^{j+m}(\ket{+})^{j-m}\}\\\\
&=e^{im\phi}\ket{j,m}
\end{aligned}
$$
所以$R_z^{(j)}(\phi)$的矩阵元：
$$
\braket{j,m'|R_z^{(j)}(\phi)|j+m}=e^{im\phi}\delta_{m,m'}
$$
现在已经完成了一半，之后要计算绕$y$轴的旋转. 还是一样进行作用，首先有
$$
R_y^{(1/2)}(\theta)\ket{+}=c\ket{+}-s\ket{-}\,,\quad R_y^{(1/2)}(\theta)\ket{-}=c\ket{-}+s\ket{+}
$$
其中$s=\sin\theta$，$c=\cos\theta$，简记. 和上面一样，二项式展开：
$$
\begin{aligned}
R_y^{(j)}(\theta)\ket{j,m}&=\sqrt{C_{2j}^{j+m}}\prod\{[R_y^{(1/2)}(\theta)\ket{+}]^{j+m}[R_y^{(1/2)}(\theta)\ket{-}]^{j-m}\}\\\\
&=\sqrt{C_{2j}^{j+m}}\prod\{[c\ket{+}-s\ket{-}]^{j+m}[c\ket{-}+s\ket{+}]^{j-m}\}
\end{aligned}
$$
对上面这个式子“二项式展开”，我们会得到一大堆不能合并的项——但是这是我们想要的吗？我们想要的是被投影到$\bra{j,m'}$上的结果. 所以我们试图进行正交归一基的分解：
$$
\begin{aligned}
&=\sum_{u'=0}^{2j}A_{u'}\prod(\ket{+}^{u'}\ket{-}^{v'})\\\\
&=\sum_{m'=-j}^{j}\frac{A_{j+m'}}{\sqrt{C_{2j}^{j+m'}}}\ket{j,m'}
\end{aligned}
$$
当这个东西被投影到上面讲到的左矢$\bra{j,m'}$上时，得到的就是前面的系数，这组基正交归一.

上面的结果是定性的，我们没有具体计算$A_{j+m'}$的值，现在就要来计算它——这是无聊的高中数学.
$$
\begin{aligned}
&[c\ket{+}-s\ket{-}]^{j+m}[c\ket{-}+s\ket{+}]^{j-m}\\\\
=&\sum_{l=0}^{j+m}\sum_{k=0}^{j-m}[C_{j+m}^lc^l(-s)^{j+m-l}]\times[C_{j-m}^ks^kc^{j-m-k}]\ket{+}^{l+k}\ket{-}^{2j-l-k}
\end{aligned}
$$
可以改写哑指标，$j+m'=l+k$，换掉一个哑指标，只剩下另一个（不可能同时换掉两个，因为总是有两重求和，这是不可改变的事实.）

为了弄清楚求和的范围，可以想象我们是在对一个长为$j+m$、宽为$j-m$的矩形内部的所有整数格点求和. 换哑指标等价于做一条倾角$135\degree$的斜线做边界进行这个求和，这导致最终的求和范围会是一个需要分类讨论的变量.

最后的矩阵元是
$$
\begin{aligned}
&\braket{j,m'|R_y^{(j)}(\theta)|j,m}\\\\
=&\sqrt{(j+m')!(j-m')!(j+m)!(j-m)!}\\\\
&\times\sum_{k=k_{\min}}^{k_{\max}}\frac{(-1)^{m-m'+k}(\cos\frac{\theta}{2})^{2j-m+m'-2k}(\sin\frac{\theta}{2})^{m-m'+2k}}{k!(m-m'+k)!(j-m-k)!(j+m'-k)!}
\end{aligned}
$$
其中，$k_{\min}=\max\{0,m'-m\}$，$k_{\max}=\min\{j-m,j+m'\}$.

上面的式子叫做 Wigner$d$-矩阵，记作$d_{m',m}^j(\theta)$；如果将绕$z$方向的矩阵也乘进来，得到 Euler 角的函数，称为 Wigner$D$-矩阵：
$$
D_{m',m}^j(\phi,\theta,\psi)=e^{im'\phi}d_{m',m}^j(\theta)e^{im\psi}
$$
实际上，如果从特殊函数的角度考虑，$d_{m',m}^j(\theta)$是 Jacobi 多项式$P_k^{(a,b)}(\cos\theta)$；如果取$m'=0$，会得到 Associate Legendre 多项式$P_j^m(\cos\theta)$；如果再取$m=0$也成立，就是 Legendre 函数$d_{0,0}^j(\theta)=P_j(\cos\theta)$.

---

简单讲一讲张量的记号问题. 实际上，张量积的语言也可以用指标的语言来描述，而且这会方便计算.

考虑$\ket{a_1}\otimes\cdots\otimes\ket{a_{2j}}$，$a_i=\pm$，$i=1,\cdots,2j$. 将这个张量记作$\Psi_{a_1\cdots a_{2j}}$，这和我们平时研究的三维、四维空间中的张量不一样，这些地方的张量，每个指标都生活在不同的空间，但是这里的指标生活在旋量空间，只能取正和负.
$$
\Psi_{(a_1\cdots a_{2j})}=\prod(\Psi_{a_1\cdots a_{2j}}\times\text{ number of permutation})
$$
全对称的张量旋转之后仍然是全对称的. 为证明这件事，我们考虑一个只有两个指标的张量（取更多指标只是一种无赖的自我惩罚）：
$$
\begin{aligned}
\Psi'_{a_1a_2}&=R_{a_1b_1}R_{a_2b_2}\Psi_{b_1b_2}\\\\
&\overset{\psi_{b_1b_2}=\psi_{b_2b_1}}{=}R_{a_1b_1}R_{a_2b_2}\Psi_{b_2b_1}\\\\
&=R_{a_2b_2}R_{a_1b_1}\Psi_{b_2b_1}=\Psi'_{a_1a_2}
\end{aligned}
$$
这就证明了对于任何一个全对称的旋转，都会得到一个全对称. 其中交换旋转矩阵是因为我们的等式是分量的等式（同时用了 Einstein 求和记号）.

张量记号的另外的一个好处是可以进行张量的收缩.