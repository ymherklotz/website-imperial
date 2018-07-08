---
layout: post
title: Sprite Batching for Faster 2D Graphics
image: /assets/img/sprite_batch.jpg
categories: yage graphics
---

Even 2D graphics can be expensive if used to draw large tile maps that use many
different textures, as each time a new tile is drawn, the texture has to be
reloaded onto the graphics card every time.

However, there are ways to minimise.

## Sprite Batching

Sprite batching can reduce the effects of reloading textures over and over by
sorting the objects that will be rendered first, before displaying them. This
sorting is done by height

## Other Methods

There exist other methods to
