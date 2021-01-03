---
title: How to build a responsive website
date: 2020-08-07
---

Making your website responsive is a must nowadays, nearly 53% of people all around the world use their phone to access the internet and that number is growing each day.

You want your website to be accessible to everyone no matter their device be it small or large screens. In this article, I'll be sharing what methods I use to make my websites responsive.

<p>&nbsp;</p>

<ol class="list-decimal list-inside">
<li class="text-xl mb-5">Mobile first design</li>

Mobile First means designing for mobile before designing for desktop. It will also make the page load faster on a smaller screen.

<p>&nbsp;</p>
When you're starting a new project make sure to always design it for mobile screen first and to do that, I usually size my browser to 320px wide (the screen size of an iPhone 5/SE).

<p>&nbsp;</p>
Personally, I found that expanding my design to fit bigger screens is much easier than trying to compress the design to fit smaller screens.

<li class="text-xl my-5">Set the viewport</li>

The viewport is the area of the screen that the browser can render content to, to make a website responsive it has to be set properly, and to do that we use a meta tag.

<p>&nbsp;</p>

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

<p>&nbsp;</p>

- width=device-width tells the browser to match the dip (device independent pixels can determine the size that elements will appear on the user's device, regardless of the user's screen resolution. ) and thus the page can reflow to allow content to resize to match the width of the browser
  <p>&nbsp;</p>
- initial scale 1 set the dip to CSS pixel ratio to one, CSS pixels are the ones we work with most of the time and without initial scale set to one, the width of some browser would stay the same when you rotate your phone or tablet to landscape mode.

<li class="text-xl my-5">Use relative units</li>

To avoid fixed images, use a relative unit like % instead of px.

<p>&nbsp;</p>

```css
img,
embed,
object,
video {
  max-width: 100%;
}

// I always put this in my CSS file just to be safe
```

<li class="text-xl my-5">Tap target should be wide enough</li>

Tap targets (buttons, input field, anything the user will touch, tap, click) must be at least 40px wide and tall. The recommended height and width are 48px.

<p>&nbsp;</p>
This isn't much of a problem for large screens since a mouse can be pretty accurate but on mobile, it can be a big problem when the tap target is too small to be able to accurately tap on the button/input field. The same problem may occur with navigation links so make sure to also adjust them accordingly.
<p>&nbsp;</p>

```css
button,
input {
  min-width: 48px;
  min-height: 48px;
}

// Again, I always put this in my CSS file just to be safe
```

<li class="text-xl my-5">Use flexbox</li>

Flexbox makes designing for all types of screens easier. Its a layout model that allows responsive elements within a container to be automatically arranged depending on the screen size.

<p>&nbsp;</p>
Trust me using flexbox will make your life easier.

<li class="text-xl my-5">Use media queries</li>

Media queries are used to rearrange your design to fit different screens. The most commonly used are max-width and min-width.

<p>&nbsp;</p>
max-width viewport width is less than the value specified whereas min-width viewport width is greater than the value specified.
<p>&nbsp;</p>
When I'm done working on the 320px screen, I use media queries to apply styles depending on the screen breakpoint.

<p>&nbsp;</p>

```css
@media screen and (max-width: 500px) {
changes will apply when the viewport width
is less than 500px;
}


@media screen and (min-width: 500px){
changes will apply when the viewport width
is greater than 500px;
}
// If you started mobile-first, I recommend using min-width
```

<li class="text-xl my-5">Determine breakpoints</li>

By breakpoints I mean the width you'll be using with media queries to change the layout accordingly. There are two types of breakpoints:

<ul class="list-disc ml-8 mt-3">
    <li>Major breakpoints were layout changes significantly</li>
    <li>Minor breakpoints to make small changes like setting the margin, padding, or font size</li>
</ul>
<p>&nbsp;</p>
When setting breakpoints use the content, after coding with a mobile-first approach adjust the browser and see where your content needs a breakpoint. This is a much better approach than following devices sizes that are given by default by the dev tools since they change and vary widely from brand to brand.

</ol>
