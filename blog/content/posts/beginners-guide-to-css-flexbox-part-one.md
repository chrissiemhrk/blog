---
title: Beginners guide to css flexbox - part one
date: 2020-10-07
---

CSS flexible layout module or flexbox for short is a web layout model that helps in designing a flexible layout. It allows items inside a container to be aligned automatically according to the screen size.

<p>&nbsp;</p>
In this article, I'll be giving you the main properties of flexbox and showing you how they work. The first part will be about properties that affect the flex container and the second part about properties that affect the flex items.

<p>&nbsp;</p>

When using flexbox, items will be displayed following two axes, the main axis, and the cross axis.

<p>&nbsp;</p>
The main axis as the name implies is the main axis where items will be displayed. By default, the main axis is horizontal.
<p>&nbsp;</p>
The cross axis is perpendicular to the main axis and its direction depends on the direction of the main axis. By default, the cross axis is vertical.

<p>&nbsp;</p>

![Diagram of flexbox container with flex items and lines showing the main and cross axis](https://dev-to-uploads.s3.amazonaws.com/i/xzp1g1gazk80wvagnal0.png)

<p>&nbsp;</p>

To start using flexbox you have to first declare a container and inside it, we'll add a few divs that'll we'll use as an example.

<p>&nbsp;</p>

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

<p>&nbsp;</p>

To make the container flexible, you have to set the container display to flex. We'll also add some styling to the items inside the container.

<p>&nbsp;</p>

```css
.container {
  display: flex;
}

.item {
  background-color: #f5f;
  border: 2px solid #0000;
  padding: 2rem;
  font-size: 2rem;
}
```

<p>&nbsp;</p>

![container display set to flex](https://dev-to-uploads.s3.amazonaws.com/i/6ghmkhz6jy2ec7p30ku3.png)

<ul class="list-disc list-inside mt-5">
The main properties of flexbox are:

<li class="ml-5 mt-2">flex-direction</li>

<li class="ml-5 mt-2">flex-wrap</li>

<li class="ml-5 mt-2">flex-flow</li>
 
<li class="ml-5 mt-2">justify-content</li>

<li class="ml-5 mt-2">align-items</li>

<li class="ml-5 mt-2">align-content</li>
 
  </ul>

<ol class="list-decimal list-inside mt-5">

<li class="text-2xl my-5 capitalize">Flex-direction</li>
The flex-direction property indicates the direction in which the items inside the flexbox container will be laid out in.

It has four value:

- row
- row-reverse
- column
- column-reverse

  1.Row

The row value is the default value and it will align the items horizontally from left to right.

```scss
.container {
  display: flex;
  flex-direction: row;
}
```

![flex direction set to row](https://dev-to-uploads.s3.amazonaws.com/i/6ghmkhz6jy2ec7p30ku3.png)

2.Row-reverse

The row-reverse value will align the items horizontally from right to left.

```scss
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

![Flex direction is set to row reverse](https://dev-to-uploads.s3.amazonaws.com/i/l76pzzf3nqn606gryppd.png)

3.Column

The column value will align the items vertically from top to bottom.

```scss
.container {
  display: flex;
  flex-direction: column;
}
```

![Flex direction is set to column reverse](https://dev-to-uploads.s3.amazonaws.com/i/78k1dw6c7mjgoupjhp7r.png)

4.Column-reverse

The column-reverse value will align items vertically from bottom to top.

```scss
.container {
  display: flex;
  flex-direction: column-reverse;
}
```

![Flex direction is set to column reverse](https://dev-to-uploads.s3.amazonaws.com/i/9nj7bv6erc9mv1734h0j.png)

<li class="text-2xl my-5 capitalize">Flex-wrap</li>

In case you have a lot of items and they all appear on the same line overflowing of the container, you'll use the flex-wrap property to specify whether a container should wrap or not.

1.Wrap

The wrap value specifies that the items should be broken down into multiple rows so as to prevent any overflow. Any element that would cause an overflow will then be fitted into a new line.

```scss
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

![Flex wrap is set to wrap](https://dev-to-uploads.s3.amazonaws.com/i/7zm37oybrga9iegdtpyk.png)

2.Nowrap

This is the default value and if used will leave the items as is in a single line.

```scss
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
```

![Flex wrap is set to no wrap](https://dev-to-uploads.s3.amazonaws.com/i/fomdz8b9thkpdoedai0e.png)

<li class="text-2xl my-5 capitalize">Flex-flow</li>

The flex-flow property is a shorthand property for flex-direction and flex-wrap.

```scss
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

Instead of writing the above, the code will be the following

```scss
.container {
  display: flex;
  flex-flow: row wrap;
}
```

<li class="text-2xl my-5 capitalize">justify content</li>

This property is used to align the items of the flex container along the direction that was previously specified using flex-direction.

1.Flex-start

This is the default value and will align the items at the beginning of the container.

```scss
.container {
  display: flex;
  justify-content: flex-start;
}
```

![Justify content is set to flex start](https://dev-to-uploads.s3.amazonaws.com/i/esa1w7xur4detg2qw4ie.png)

2.Flex-end

This value will align the items at the end of the container.

```scss
.container {
  display: flex;
  justify-content: flex-end;
}
```

![Justify content is set to flex end](https://dev-to-uploads.s3.amazonaws.com/i/a2nm73kulscmecj90ay1.png)

3.Center

This value will align the items at the center of the container.

```scss
.container {
  display: flex;
  justify-content: center;
}
```

![Justify content is set to center](https://dev-to-uploads.s3.amazonaws.com/i/c4b8xceq8wga97vo2xzh.png)

4.Space-around

This value will distribute the items evenly in the line with spaces around the items.

```scss
.container {
  display: flex;
  justify-content: space-around;
}
```

![Justify content is set to space around](https://dev-to-uploads.s3.amazonaws.com/i/0qxy4ctrfy3byu2yu8c0.png)

5.Space-evenly

This value will add equal spacing between two items.

```scss
.container {
  display: flex;
  justify-content: space-evenly;
}
```

![Justif content is set to space evenly](https://dev-to-uploads.s3.amazonaws.com/i/0qxy4ctrfy3byu2yu8c0.png)

6.Space-between

This value will display the items evenly along the line. The first element will be at the start and the last element will be at the end of the line.

```scss
.container {
  display: flex;
  justify-content: space-between;
}
```

![Jusitfy content is set to  space between](https://dev-to-uploads.s3.amazonaws.com/i/elvv6d7pzrjmd2qsq0oz.png)

<li class="text-2xl my-5 capitalize">align items</li>

This property is used to align the flex items along the cross axis which is perpendicular to the main axis.

_To better demonstrate this property, I set the container height to 200px and background color to black._

1.Stretch

This is the default value and will stretch the items to fill the container.

```scss
.container {
  display: flex;
  align-items: stretch;
}
```

![Align items is set to stretch](https://dev-to-uploads.s3.amazonaws.com/i/i960kj1tl0ydhtaoh4i9.png)

2.Flex-start

This value will align the items at the top of the container.

```scss
.container {
  display: flex;
  align-items: flex-start;
}
```

![Align items is set to flex start](https://dev-to-uploads.s3.amazonaws.com/i/pbsevgev7d8fmgltjmzu.png)

3.Flex-end

This value will align the items at the bottom of the container.

```scss
.container {
  display: flex;
  align-items: flex-end;
}
```

![Align items is set to flex end](https://dev-to-uploads.s3.amazonaws.com/i/lrs2r8sreefzflrs1j5u.png)

4.Center

This value will align the items at the center of the container.

```scss
.container {
  display: flex;
  align-items: center;
}
```

![Align items is set to center](https://dev-to-uploads.s3.amazonaws.com/i/780zbjefnh439003dz0r.png)

<li class="text-2xl my-5 capitalize">align content</li>

This property is used to align the flex lines. This only applies if you have set your container to wrap _flex-wrap: wrap_ and if you have more than one row of flex items.

_To better demonstrate this property, I have set the height to 500px and flex-wrap property to wrap._

1.Stretch

This is the default value. It will stretch the existing lines to take up the remaining space.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}
```

![Align content is set to stretch](https://dev-to-uploads.s3.amazonaws.com/i/92yx4c0dgea38rz0dnpk.png)

2.Flex-start

This value will display the flex lines at the start of the container.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

![Align content is set to flex start](https://dev-to-uploads.s3.amazonaws.com/i/g0zl7p89zogr0udaltjm.png)

3.Flex-end

This value will display the lines at the bottom of the container.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}
```

![Align content is set to flex end](https://dev-to-uploads.s3.amazonaws.com/i/6qjwl3q87e5m8lm1yfbx.png)

4.Center

This value will display the lines at the center of the container.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

![Align content is set to center](https://dev-to-uploads.s3.amazonaws.com/i/wpwzht50ahe7f3o8g77o.png)

5.Space-around

This value will distribute the lines evenly with space around the lines.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
```

![Align content set to space around](https://dev-to-uploads.s3.amazonaws.com/i/68pbp19n9kbp9tta8xai.png)

6.Space-between

This value will distribute the lines equally in the container. The first line is at the start of the container while the last one is at the end.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

![Align content is set to space between](https://dev-to-uploads.s3.amazonaws.com/i/7ifsx646phqzdqhzx1gd.png)

</ol>

This is the first part of a two-post series that I plan to write about CSS flexbox. If you have anything to add or any questions do so in the comments.

Thanks for reading!
