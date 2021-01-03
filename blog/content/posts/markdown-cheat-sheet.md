---
title: Markdown cheat sheet
date: 2020-08-18
---

Markdown is a markup language that is used to add formatting elements to plain text. It is easy to learn and use. In my opinion, markdown is a must, not only if you want to start posting here on Dev but also for writing readme. I'm sure by now you've noticed that readme files have the .md extension, that is the markdown file extension and while you can write a readme in plaintext, to make our readme more appealing and comprehensive you should definitely use markdown.

<p>&nbsp;</p>

Here's a list of basic Markdown syntax to get you started:

<ul>

<li class="text-3xl my-8">Heading</li>

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

<h1 class="text-4xl mt-5">Heading 1</h1>

<h2 class="text-3xl">Heading 2</h2>

<h3 class="text-2xl">Heading 3</h3>

<h4 class="text-xl">Heading 4</h4>

<li class="text-3xl my-8">Bold and Italic</li>

```
**Bold** *Italic*
or
__Bold__ _Italic_
```

**Bold** _Italic_

**Bold** _Italic_

<li class="text-3xl my-8">Link</li>

```
[Example](https://example.com)
```

[Example](https://example.com)

<li class="text-3xl my-8">Blockquote</li>

```
> Lorem Ipsum
```

> Lorem Ipsum

<li class="text-3xl my-8 capitalize">image</li>

```
![alt text](image.jpg)

```

![alt text](image.jpg)

<li class="text-3xl my-8 capitalize">list</li>

```
1. One
2. Two
3. Three

- List
- List
- List
```

<ol class="list-decimal list-inside my-5">
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
<ul class="list-disc list-inside">
<li>List</li>
<li>List</li>
<li>List</li>
</ul>
<li class="text-3xl my-8 capitalize">code</li>

````
`Inline` code
{```}
    console.log(a)
{```}
````

<p>&nbsp;</p>

`Inline` code

<p>&nbsp;</p>

```
console.log(a)

// Without the curly braces
```

<li class="text-3xl my-8 capitalize">horizontal rule</li>

```
Lorem Ispum

---

```

Lorem Ispum

---

<p class="my-8">Remember to put a blank line before and after the dashes, without those, the text will appear as a heading.
</p>
</ul>

A lot of markdown applications accept the use of HTML tags so if you are more comfortable using HTML tags over markdown syntax you can use them provided that they are supported by the application.
