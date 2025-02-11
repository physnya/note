---
title: 计算专题2 Joule-Thomson系数的计算与有关问题
createTime: 2024/06/18 22:19:56
tags:
  - Physics
permalink: /posts/0ny2z6xr/
---
## 前言

高考已经结束了，我也有更多时间来回顾一下竞赛时遇到的很多问题，所以现在先从比较简单的开始，回顾一下热力学中的一个重要的偏导数计算问题——Joule-Thomson系数有关问题.

众所周知，热力学是研究多变量函数之间的关系的一门学科. 因此，偏导数的运算在这些问题的计算中必不可少，这也是这个专题关注的重点（因为之前经常因偏导数关系推导方向错了而消耗大量时间，所以一定的“物理直觉”在这类问题中非常重要）.

接下来开始进行讨论和计算.

## 问题描述

1852年，Joule和Thomson（即Kelvin勋爵）用多孔塞进行了气体节流实验，发现了节流降温效应. 在节流过程中，多孔塞的作用是维持两侧的压强差不变. 我们来分析这个过程中的一些能量变化，如图所示：

::: center
![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocyod3mi4jkxjDIYxAIFxDda1DGxPDwUzAa==.jpg)
:::

左侧气体内能$U_1$，被压缩后受到外界做正功$p_1V_1$；之后在右侧膨胀为内能$U_2$的气体，对外界做功$p_2V_2$，由能量守恒，就得到：$U_1+p_1V_1=U_2+p_2V_2$.

，故，节流过程是一个等焓过程，节流前后压强变化，而焓不变（$H_1=H_2$）.

为了分析压强差造成的温度变化，引入Joule-Thomson系数$\mu=(\frac{\partial T}{\partial p})_H$对依赖关系进行描述. 接下来尝试计算$\mu$.

## 偏导数运算

一般而言，$\mu=\mu(T,V)$，以此为目标将系数化为二元函数. 整个化简过程的重点在于把难以从物态方程和状态函数求出的偏导数化为易得到的偏导数.
$$
\begin{aligned}
\mu&=(\frac{\partial T}{\partial p})_H=-\frac{1}{(\frac{\partial H}{\partial T})_p(\frac{\partial p}{\partial H})_T}=-\frac{(\frac{\partial H}{\partial p})_T}{(\frac{\partial H}{\partial T})_p}\\\\
&=-\frac{(\frac{\partial H}{\partial p})_S+(\frac{\partial H}{\partial S})_p(\frac{\partial S}{\partial p})_T}{(\frac{\partial H}{\partial T})_p}\\\\&=-\frac{V+T(\frac{\partial S}{\partial p})_T}{(\frac{\partial H}{\partial T})_p}\\\\
\end{aligned}
$$
接下来先证引理（Maxwell关系）. 对于Gibbs自由焓，其对应的基本方程为$dG=-SdT+Vdp$. 可以得到，$(\frac{\partial S}{\partial p})_T=-(\frac{\partial V}{\partial T})_p$.

代入上面的式子，得到
$$
\begin{aligned}
\mu&=\frac{T(\frac{\partial V}{\partial T})_p-V}{(\frac{\partial H}{\partial T})_p}=\frac{T(\frac{\partial V}{\partial T})_p-V}{(\frac{\partial H}{\partial T})_V+(\frac{\partial H}{\partial V})_T(\frac{\partial V}{\partial T})_p}\\\\&=\frac{-T\frac{1}{(\frac{\partial p}{\partial V})_T(\frac{\partial T}{\partial p})_V}-V}{(\frac{\partial H}{\partial T})_V-(\frac{\partial H}{\partial V})_T\frac{1}{(\frac{\partial p}{\partial V})_T(\frac{\partial T}{\partial p})_V}}=\frac{-T\frac{(\frac{\partial p}{\partial T})_V}{(\frac{\partial p}{\partial V})_T}-V}{(\frac{\partial H}{\partial T})_V-(\frac{\partial H}{\partial V})_T\frac{(\frac{\partial p}{\partial T})_V}{(\frac{\partial p}{\partial V})_T}}\\\\&=\frac{T(\frac{\partial p}{\partial T})_V+V(\frac{\partial p}{\partial V})_T}{(\frac{\partial H}{\partial V})_T(\frac{\partial p}{\partial T})_V-(\frac{\partial H}{\partial T})_V(\frac{\partial p}{\partial V})_T}\\\\
\end{aligned}
$$
至此，我们已经得到了一个便于计算的偏导数表达式，剩下的就是应用了.

## 在各种物态方程中的应用

### 理想气体

理想气体的物态方程是$pV=nRT$，众所周知. 内能的表达式是$U=U_0+nC_VT$，焓的表达式是$H=H_0+nC_VT+pV$. 计算各个公式中出现的偏导数：
$$
\begin{aligned}
(\frac{\partial p}{\partial T})_V&=\frac{nR}{V}\\
(\frac{\partial p}{\partial V})_T&=-\frac{nRT}{V^2}\\
(\frac{\partial H}{\partial V})_T&=0\\
(\frac{\partial H}{\partial T})_V&=nC_V+nR\\\\
\end{aligned}
$$
此时已经可以看出，理想气体的$\mu=0$，没有节流效应. 这也从侧面说明了理想气体模型的局限性.

### Van der Waals气体

物态方程是$(p+\frac{n^2a}{V^2})(V-nb)=nRT$. 观察这个方程可以发现，$(\frac{\partial p}{\partial V})_T$和$(\frac{\partial p}{\partial T})_V$比其他几个偏导数要好算一些，这也是上面化简时留下这两个量而非其他量的原因.

立即可以得到：
$$
\begin{aligned}
p&=\frac{nRT}{V-nb}-\frac{n^2a}{V^2}\\
\Longrightarrow\quad&(\frac{\partial p}{\partial T})_V=\frac{nR}{V-nb}\\&(\frac{\partial p}{\partial V})_T=-\frac{nRT}{(V-nb)^2}+\frac{2n^2a}{V^3}\\\\
\end{aligned}
$$
接下来先计算Van der Waals气体的内能与焓. 由能态方程可以得到
$$
\begin{aligned}
(\frac{\partial U}{\partial V})_T&=T(\frac{\partial p}{\partial T})_V-p\\&=T\cdot\frac{nR}{V-nb}-(\frac{nRT}{V-nb}-\frac{n^2a}{V^2})\\&=\frac{n^2a}{V^2}\\\\
\end{aligned}
$$
积分便得
$$
\begin{aligned}
U&=U_0+nC_VT-\frac{n^2a}{V}\\H&=U+pV\\&=H_0+nC_VT-\frac{n^2a}{V}+\frac{nRTV}{V-nb}-\frac{n^2a}{V}\\&=H_0+nC_VT-\frac{2n^2a}{V}+\frac{nRTV}{V-nb}\\\\
\end{aligned}
$$
继续计算剩下的两个偏导数：
$$
\begin{aligned}
(\frac{\partial H}{\partial V})_T&=\frac{2n^2a}{V^2}+\frac{nRT}{V-nb}-\frac{nRTV}{(V-nb)^2}\\
(\frac{\partial H}{\partial T})_V&=nC_V+\frac{nRV}{V-nb}\\\\
\end{aligned}
$$
代入公式：
$$
\begin{aligned}
\mu&=\frac{T\cdot\frac{nR}{V-nb}+V(-\frac{nRT}{(V-nb)^2}+\frac{2n^2a}{V^3})}{(\frac{2n^2a}{V^2}+\frac{nRT}{V-nb}-\frac{nRTV}{(V-nb)^2})\cdot\frac{nR}{V-nb}-(nC_V+\frac{nRV}{V-nb})(-\frac{nRT}{(V-nb)^2}+\frac{2n^2a}{V^3})}\\\\&=\frac{nRTV^3(V-nb)^2-nrTV^4(V-nb)+2n^2aV(V-nb)^3}{2n^3aRV(V-nb)^2+n^2R^2TV^3(V-nb)-n^2R^2TV^4}\\&\,+n^2RC_VTV^3(V-nb)-2n^3aC_V(V-nb)^3+n^2R^2TV^4-2n^3aRV(V-nb)^2\\\\&=\frac{nRTV^3(V-nb)^2-nRTV^4(V-nb)+2n^2aV(V-nb)^3}{n^2R(R+C_V)TV^3(V-nb)-2n^3aC_V(V-nb)^3}\\\\&=\frac{RTV^3(V-nb)-RTV^4+2naV(V-nb)^2}{nR(R+C_V)TV^3-2n^2aC_V(V-nb)^2}\\\\&=\frac{2naV(V-nb)^2-nRTV^3b}{nR(R+C_V)TV^3-2n^2aC_V(V-nb)^2}\\\\&=\frac{2aV(V-nb)^2-RTV^3b}{R(R+C_V)TV^3-2naC_V(V-nb)^2}\\\\
\end{aligned}
$$
由此得到最终的$\mu(T,V)$表达式. 接下来我们可以就这个结果做一些简单的分析.

首先，可以求出节流过程温度不变的临界温度$T_c$：
$$
\begin{aligned}
\mu&=0\\\Longrightarrow T_c&=\frac{2aV(V-nb)^2}{RV^3b}\\\\
\end{aligned}
$$
另外，我们代入标准状况下空气的相关数据，并且视空气为双原子分子气体：
$$
T=273.15K\,,\quad p=1atm\,,\quad V_{mol}=22.4L/mol\\
a=1.361atm\cdot L^2\cdot mol^{-2}\,,\quad b=0.0385L/mol\\\Longrightarrow\mu=2.8468380841616\times10^{-6}K/Pa\\\\
$$
一定要注意$a$的单位！

## 一个简单的图像分析

本部分Reference：《热学》刘玉鑫；《热力学与统计物理》林宗涵.

推导一个在实际生产工作中更为实用的$\mu$公式：
$$
\begin{aligned}
\mu&=(\frac{\partial T}{\partial p})_H=-(\frac{\partial T}{\partial H})_p(\frac{\partial H}{\partial p})_T=-\frac{1}{C_p}(\frac{\partial H}{\partial p})_T\\&=-\frac{1}{C_p}[(\frac{\partial H}{\partial p})_S+(\frac{\partial H}{\partial S})_p(\frac{\partial S}{\partial p})_T]\\&=-\frac{1}{C_p}[V+T(\frac{\partial S}{\partial p})_T]=-\frac{1}{C_p}[V-T(\frac{\partial V}{\partial T})_p]\\&=\frac{1}{C_p}[T(\frac{\partial V}{\partial T})_p-V]\\\\
\end{aligned}
$$
由热动平衡稳定条件，知$C_p>0$，所以$\mu$的正负完全由后一项决定. 这里将$\mu$表达为$\mu(T,p)$的形式，在$(T,p)$为变量的状态空间中，$\mu(T,p)<0$的区域称为致温区，$\mu(T,p)>0$的区域称为致冷区，$\mu(T,p)=0$所决定的曲线称为反转曲线.

下面以Van der Waals方程为例求反转曲线.
$$
p=\frac{nRT}{V-nb}-\frac{n^2a}{V^2}\\\\
$$
令$\mu=0$，得$(\frac{\partial V}{\partial T})_p=\frac{V}{T}$，同时有$(\frac{\partial V}{\partial T})_p=-(\frac{\partial p}{\partial T})_V(\frac{\partial V}{\partial p})_T$，即
$$
\begin{aligned}
T(\frac{\partial p}{\partial T})_V+V(\frac{\partial p}{\partial V})_T&=0\\\Longrightarrow\frac{2n^2a}{V^2}-\frac{n^2RTb}{(V-nb)^2}&=0\\\Longrightarrow\frac{RTb}{2a}=(1-\frac{n}{V}b)^2&\\\\
\end{aligned}
$$
解得，
$$
V=\frac{nb}{1-\sqrt{\frac{RTb}{2a}}}\\\\
$$
代入物态方程就得到$T$与$p$的关系：
$$
p=\frac{a}{b^2}(1-\sqrt{\frac{RTb}{2a}})(3\sqrt{\frac{RTb}{2a}}-1)\\\Longrightarrow(\frac{b^2p}{a}+\frac{3RTb}{2a}+1)^2-\frac{8RTb}{a}=0\\\\
$$
为抛物线. 用上面的数据画图，如图所示.

::: center
<img src="https://vip.123pan.cn/1845440081/yk6baz03t0n000d6xujp03f9tdxqw1wlDIYxAIFxDda1DGxPDwUzAa==.png" style="zoom:20%;" />
:::

这与实验定性相符，且可以看出存在“最大反转温度”、“最小反转温度”，以及相应于最大压强的温度和最大压强几个重要的参数：
$$
T_{up,max}=\frac{2a}{bR}\,,\quad T_{low,min}=\frac{2a}{9bR}\\T_{max-p}=\frac{8a}{9bR}\,,\quad p_{max}=\frac{a}{3b^2}\\\\
$$

## 总结与反思

总体来说，偏导数的计算毕竟算不上是物理中计算最困难的问题，热力学也是比较完善的板块之一，所以这次的计算专题就当是找回来一些手感，重新体会一下热力学的思考方式，也算是小有收获吧.