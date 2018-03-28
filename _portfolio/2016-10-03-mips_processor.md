---
layout: post
title: "Mips Processor"
categories: portfolio imperial
image: /assets/img/mips_processor/cpu.jpg
date: 2016-10-03
permalink: /portfolio/mips_processor/
---

The best way to understand how a processor works in detail is to create one or,
in my case, write a software simulation of one. For this I chose a Mips I
processor, as it is not too complex, but does implement the fundemental ideas
of what a processor is.

Nowadays processors have become extremely complex and very hard to understand,
such as the current intel and Arm processors. However, at their core, the basic
ideas inside the processor have been the same for the past ~20 years and can be
implemented in the Mips I processor.

What is a processor?
====================

![Mips processor](/assets/img/mips_processor/mips_processor_layout.png)

A processor is a digital circuit that receives instructions and exectues them
sequentially. These instructions can be anything from branching instructions,
that go to a different location in the code, to arithmetic instructions that
can add two numbers together. Instructions are normally stored in memory and
are produced by a higher level language such as C or C++ using a compiler. The
image above shows a possible basic setup for a processor, which in this case is
the Mips I processor.

A processor also has to be able to store information to be able to execute
these instructions. Normally, processors have a small number of registers that
are suited for this purpose. This number varies between architectures such as
Arm, Mips and intel, but in this case the Mips processor has 32 registers.
These registers are 32 bit wide, which means they can store an integer 
