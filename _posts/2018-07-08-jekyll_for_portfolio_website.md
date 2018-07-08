---
layout: post
title: Jekyll to create a Portfolio website
categories: web imperial
image: /assets/img/jekyll.jpg
---

[Jekyll](https://jekyllrb.com/) is a static site generator written in ruby that
can be used in conjunction with Github Pages to create a great platform for
displaying projects and writing blog posts.

The reason Jekyll is great for portfolio websites, especially if you are writing
blogs at the same time, is because it handles the organisation of the portfolio
projects and blog posts really well, and allows the posts to be written in
markdown. This means that it makes the process of writing blog posts much
easier, and also more readable in text format than using HTML.

In addition to that, Jekyll uses the [liquid templating
language](https://shopify.github.io/liquid/) to make HTML more modular and
reusable, and it means that one does not have to rewrite the same HTML code
multiple times. Jekyll also introduces many variables that can be used with
liquid that contain information about the blog posts or projects, such as images
associated with them, their excerpt or their title. This is very convenient to
produce portfolio pages with previous of the projects, by having all the
information in the project markdown files.

## File Organisation

By default, Jekyll only supports blog posts that get put into a `_posts`
directory, however, it is extensible enough to allow for different types of
posts, which are called __collections__ in Jekyll.

My layout, which supports project descriptions for a portfolio and blog posts,
looks like the following.

```
.
├── assets
│   ├── css
│   ├── fonts
│   ├── img
│   │   └── logos
│   └── js
├── _data
├── _includes
├── _layouts
├── _portfolio
└── _posts
```

## Portfolio Collection

To make Jekyll recognise the `_portfolio` directory, it has to be declared in
Jekyll's configuration file `_config.yml`.

```yaml
collections:
  portfolio:
    output: true
```

Jekyll will now parse and turn the markdown files into HTML. To get a coherent
link to the files, it is a good idea to add a __permalink__ to the YAML front
matter like the following.

```yaml
---
title: FMark
permalink: /portfolio/fmark/
---
```

This means that the file will then be accessible using
`https://www.website.com/portfolio/fmark/`.

## Using Jekyll Parameters

Now that we have generated the portfolio directory, and have written the
descriptions to a few projects, we can see how we can use the Jekyll variables
that are to our disposal in Liquid.

First of all, to generate a great view on the main page of some of the projects
that you have made, you can use a for loop to iterate through the projects, and
even use a limit to limit the projects to a specific number. This can be useful
when showing a few projects on the main page, and also want a page displaying
all the projects.

```liquid
{%- raw -%}
{% assign proj_reverse = site.portfolio | reverse %}
{% for project in proj_reverse limit: 3 %}
{% endraw %}
```

By default, the projects are listed from earliest to latest, so to display the
three latest projects, the list first has to be reversed.

Inside the for loop, variables like

```liquid
{%- raw -%}
{{ project.title }}
{{ project.excerpt }}
{% endraw %}
```

can be used to access the variables declared in the YAML, to generate views of
the projects.

## Conclusion

In conclusion, Jekyll and Liquid make it very easy to organise projects and make
it easy to write the descriptions and blogs using markdown.
