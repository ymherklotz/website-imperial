---
layout: post
title: "C to MIPS32 Compiler"
categories: portfolio imperial
image: /assets/dot/compiler_flow.svg
---
### What is a compiler?
A Compiler is a program that transforms code written in one language into
another language. This is normally done to transform a higher level language
such as C, into a lower level language such as assembly.

![Compiler Workflow]({{ site.url }}/assets/dot/compiler_flow.svg)

### Project
The project was separated into three parts: lexer, parser and the actual
compiler. The lexer was written in [flex][flex_main], which then got passed to the parser
that we wrote in [bison][bison_main]. The AST ([Abstract Syntax Tree][wiki-AST]) that was
output by bison was then traversed in the compiler and the corresponding
assembly code was output by the compiler.

In our second year we were given a coursework to write a compiler that would
take in C89 code and compile it to MIPS32 assembly. We then used the gcc
assembler to compile that to a binary and used qemu to simulate a MIPS
processor and run the binary.

## Lexer
TODO Part about lexer

## Parser
TODO Part about parser

## Compiler
TODO Part about compiler

[bison_main]: https://www.gnu.org/software/bison
[flex_main]: https://github.com/westes/flex
[wiki-AST]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
