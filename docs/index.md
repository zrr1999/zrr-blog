---
blog: true
home: true
icon: home
title: 六个骨头的博客
heroImage: /logo.svg
heroText: 六个骨头的博客
tagline: You can put your slogan here
actionText: Get Started
actionLink: /guide/
project:
  - type: project
    name: project name
    desc: project detailed description
    link: your project link

  - type: link
    name: link name
    desc: link detailed description
    link: link address

  - type: book
    name: book name
    desc: Detailed description of the book
    link: link to your book

  - type: article
    name: article name
    desc: Detailed description of the article
    link: link to your article

footer: customize your footer text
---
[Home](/)
[bar - three](../bar/three)
:tada: :100:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


```js{2-3}
export default {
  name: 'MyComponent',
  // ...
}{{ 1 + 1 }}
```
::: v-pre
{{ This will be displayed as-is }}
:::

<span v-for="i in [3,4,5]">{{ i }} </span>
