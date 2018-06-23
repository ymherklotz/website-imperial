---
layout: post
title: "Mips Processor"
categories: portfolio imperial
image: assets/img/processor.jpg
date: 2016-10-03
github: MipsCPU
permalink: /portfolio/mips_processor/
---

The best way to understand how a processor works in detail is to create one from
scratch or, in my case, write a software simulation of one. This was one of our
assignments for our Computer Architecture course, and required us to to
implement a Mips I processor, as it was not too complex, but did implement the
fundemental ideas of a processor and how it operates.

## Quick introduction to processors

### What is a processor?

A processor is a digital circuit that receives instructions and exectues them
sequentially. These instructions can be anything from branching instructions,
that go to a different location in the code, to arithmetic instructions that can
add two numbers together. Instructions are normally stored in memory and are
produced by a higher level language such as C or C++ using a compiler. However,
other languages exist as well, such as python, that run using an interpreter,
which compiles the files on the fly and runs them. The image above shows a
possible basic setup for a processor, which in this case is the Mips I
processor.

![Mips processor](/assets/img/mips_processor/mips_processor_layout.png)

A processor also has to be able to store information to be able to execute these
instructions. Normally, processors have a small number of registers that are
suited for this purpose. This number varies between architectures such as Arm,
Mips and intel, but in this case the Mips processor has 32 registers. These
registers are 32 bit wide, which means they can store an integer or an address
to a location in memory, which can then be used to load data from.

### Types of Processors

There are two main types of processor architectures, RISC and CISC processors.
RISC processors are designed around the principle that the actual circuit should
be as simple as possible, which means that the instructions have to be fairly
simple too. The advantage of this is that the circuit and the actual processor
gets simpler to build and optimise, however, it also means that the compiler
that will eventually turn a program into instructions, will have to be clever
about optimisations it makes, so as to minimize the amount of
instructions. Examples of a RISC processor is an Arm process or a MIPS
processor.

In contrast to this, a CISC processor is much more complex when looking at the
architecture and has many more instructions than a RISC processor, that will
often do multiple things at once. The advantage of this is that the compiler
does not have to be as clever anymore, as there are many instructions that
correspond directly with something that a programmer wants to do in the code, however, it means that the complexity of the hardware increases by a lot.

## MIPS important choices
