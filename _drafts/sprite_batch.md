---
layout: post
title: "Sprite Batching in OpenGL"
categories: game-engine opengl
image: /assets/img/sp_tiles.jpg
---

Sprite batching is used in two-dimensional game engines to efficiently draw 
sprites to the screen. This can be very useful with drawing a lot of tiles, or
even drawing a many different sprites to the screen at once.

For this article, we'll assume that all the vertices are stored in an array with
their texture that they will be bound to once they are being drawn. Without any
optimization, this means that there will be *n* different texture switches and 
rebindings, assuming we have *n* different groups of vertices that are bound 
to a texture. With this na&iuml;ve method, 


Texture Sorting
===============

Textures in OpenGL are just a unsigned integer handles that are used to refer 
the textures that have been loaded by OpenGL. These handles can then be efficiently
be sorted so that they can be 
