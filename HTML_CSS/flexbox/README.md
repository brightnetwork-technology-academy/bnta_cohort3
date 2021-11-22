<img src="images/BNTA_simple.png" alt="BNTA logo" height=50px/>

# BNTA Course Notes

## Flex Container Notes

### Introduction

Flex containers are marvellous and are used by many web developers to lay out the content of webpages. Flex allows us to create responsive designs with apparent two-dimensional organisation and has been a cornerstone advancement for web development within the last decade. Understanding how to use flex containers is a fantastic step towards creating clean and modern websites.

### CSS Flex

Back in the dark days of the web, everything was built on one axis—the one you scroll along. Horizontal layouts were possible through the use of `tables` and the `display: inline-block` property however effects such as consistent sizings of grouped content was difficult to achieve. Collections of elements within `<span>` elements, a myriad of `float` properties and jumbles of interlocking JavaScript code was the accepted means to bringing interesting layout to your site—and it was fickle at best, unmaintainable at worst. *Hacks* therefore provided the main means to creating exciting layouts.

However, with the beginning of the 2010s, the web began to see a shift in how webpage content was encoded. CSS FlexBox, which later inspired `flex`, provided a complete means to creating interesting and responsive designs, or certainly encompassed what was already possible in far fewer lines of code. Dictating simply the parent container of multiple elements as a *flex* container with `display: flex`, it was now possible to create grid-style layouts with ease.

[CSS Tricks - A Complete Guide to FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Flex Properties

### display: flex
To use flex containers, you need to first ensure that your HTML markdown is collected together into groups correctly. The parent element, such as a `<section>`, should contain all the content which shares context—such as a collection of images or products, all of which fall under one category. You can then apply the `display: flex` property to the parent element to instantiate the flex container.

### flex-direction
**[ row / column / row-reverse / column-reverse ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction]()

Denotation of whether content is *inline* (horizontal) or *block* (vertical), defines how content is organised along the main axis of your container. Flex containers have their own property `flex-direction` which supersedes the original `display: inline-block` functionality. We've created an example image below showing the most common values:

<img src="images/flexbox-flex-direction.png" alt="Flex direction examples" width=400px/>

- [1A] The default value for `flex-direction` for a flex container is `flex-direction: row` which sets the main axis horizontally, and thus the content in a row. This is converse to traditional HTML layouts, where the default is to align content with the vertical axis

- [1B] `flex-direction: column` will set the main axis vertically, stacking your content upon this axis similar to the default web agent property of `display: block`

- `flex-direction: row-reverse` and `flex-direction: column-reverse` function as you'd expect, organising the content of the flex container either horizontally or vertically but in reverse order with respect to the HTML markup

### justify-content
**[ flex-start / flex-end / center / space-between / space-around / space-evenly ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content]()

`justify-content` allows you to specify how content is organised along the **main** axis of your flex container. Note that the main axis varies in orientation based on the `flex-direction` property (above). Note that for the diagram below, the `flex-direction` property was left at the default value of `row`.

<img src="images/flexbox-justify-content-basics.png" alt="Justify content basic examples" width=400px/>

- [2A] `justify-content: flex-start` is the default value for `justify-content` and sets the content clustered at the beginning of the FlexBox, with respect to the main axis

- [2B] `justify-content: center` places the items flush with each other at the center of the container

- [2C] `justify-content: flex-end` sets the content clustered at the end of the flex container

<img src="images/flexbox-justify-content-cont.png" alt="Justify content continued examples" width=400px/>


- [3A] `justify-content: space-between` places the maximum amount of space between each item in the row/column without any initial indent spacing and hence with items at the containers' maximal bounds

- [3B] `justify-content: space-around` places each item evenly, with the space between each item being equal. The space defined between the bounds of the container and the first flex item is half that of the space between items

- [3C] `justify-content: space-evenly` places each item evenly in the container, with the space between items, and the indent spacing between item and container bounds, being equal

There are other `justify-content` values which you can use such as the seemingly static `left` and `right` values. These work akin to `flex-start` and `flex-end` and hence do not always arrange the content left or right, against what you may expect. `stretch` can be handy if you have content with heights or widths set to `auto` and wish them to grow to fill the container. Lastly, `baseline` can be used to organise content to a shared text baseline.

### align-items
**[ start / end / center / stretch ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/align-items]()

`align-items` is the partner property to `justify-content`. While `justify-content` arranges items along the main axis of the flex container, `align-items` arranges the same along the **cross-axis**. Each following value works akin to how it does for `justify-content`, with slight naming differences.

<img src="images/flexbox-align-items.png" alt="Align items examples" width=400px/>
	
- [4A] `align-items: start` places the items within the flex container at the beginning of the cross-axis (*e.g.* the top of a `flex-direction: row` flex container)

- [4B] `align-items: center` places the flex items at the center of the flex container, relative to the cross-axis

- [4C] `align-items: end` makes the items sit at the end of the flex container, relative to the cross-axis

- `align-items: stretch` causes any flex items with `auto`-sizing properties to stretch to fill the container along the cross-axis

### flex-wrap
**[ nowrap / wrap / wrap-reverse ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap]()

`flex-wrap` is an area where Flexbox particularly shines. Responsive design, the requirement for a single design to function and look good regardless of device, and therefore screen size, was once a matter of JavaScript over HTML and CSS. Now, with flex containers and `flex-wrap`, it is easy to collect together your content to give the impression of a two-dimensional grid which rearranges with changing screen size. Further, it is easy to ensure that your flex items are of the same size, making the entire grid cohesive and clean.

<img src="images/flexbox-wrap.png" alt="Flex wrap examples" width=400px/>

- [5A]`flex-wrap: nowrap` is the default value for flexboxes. `nowrap` means that flex items do not wrap onto another row or column with shrinking content dimensions. This causes the items to either shrink in size, if the item has no strict dimensions, or to overflow the container if they do.

- [5B] `flex-wrap: wrap` causes the flex items to create and populate a new row or column (depending on `flex-direction`) at the onset of where content would begin shrinking or overflowing. The order of the items which flow to the next container follows standard Western reading order: left-to-right, top-to-bottom.

- [5C] `flex-wrap: wrap-reverse` is akin to `wrap` where the content is allowed to create further rows or columns to maintain item sizing and bounds. The order of the items however is different and follows left-to-right, bottom-to-top, where the last item in the HTML markup is situated top-right instead of bottom-right. Combining this with `flex-direction: row-reverse` creates a reversed timeline for your HTML markup.

It should be noted that while wrapping flex items *can* give the impression of two-dimensional organisation of content, it is not, and is inherently **one-dimensional**. This causes little issue for many responsive, modern designs until vertical *and* horizontal alignment are present in the design. An example where you may encounter this is if the design calls for a true grid-style component with a varying but strict number of columns with changing screen size. The nuance is difficult to communicate through text, however just know that this is when you should look at using CSS Grid—when you need a truly two-dimensional component layout.

### flex-grow

**[ # ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow]()

The free space within a flex container is distributed between all flex-items which do not have defined dimensions. `flex-grow` sets the flex-grow factor of a flex-item's main size and hence the claim of each item on this free space. It is applied to each **flex-item** and not the parent. The default value is `flex-grow: 0` and any positive number value is accepted. You can consider it as a weighting factor in the division of free space within a flex container between the flex-items. This means that an item with `flex-grow: 2` gains twice the amount of growth-space proportionally to an item with `flex-grow: 1`. The `flex-grow` values hence form a ratio proportional to the distribution of free space. Note that to better use `flex-grow`, it is best to ensure that your flex container has strict dimensions set which are greater than the accumulation of the flex items' sizings. If you afford yourself extra space between your items, then it is far easier to assign the free space in a meaningful way and create cool effects.

<img src="images/flexbox-flex-grow.png" alt="Flex grow examples" width=400px/>

### flex-shrink

**[ # ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink]()

`flex-shrink` is the counterpart to `flex-grow` and hence defines the amount by which a flex-item shrinks, to satisfy the container, if the additive size of all flex items is greater than the container's bounds. The default value is `flex-shrink: 1` and any positive number value is accepted. Same as `flex-grow`, this property is set on the flex items themselves. This default means that flex-items will automatically shrink to satisfy their container's bounds. Again, `flex-shrink` defines a ratio of space which each item fills within a container, however relate to the *proportional decrease*, not the definite sizings. A flex item with `flex-shrink: 2` hence **shrinks by double** the size of an item with `flex-shrink: 1` when changing size to fit within a flex container. Note that the item with `flex-shrink: 2` is hence ***not half the size*** of that with `flex-shrink: 1`, rather, it has ***shrunk by double the amount***. 

<img src="images/flexbox-flex-shrink.png" alt="Flex shrink examples" width=400px/>

### flex-basis

**[ # / % / content ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis]()

`flex-basis` is the property used to set the initial main size of a flex item. This can be set as either an absolute value, a percentage value of the parent flex container, `content` (sets the size to the minimum space needed to container the flex items' content), or `auto` (defers to the intrinsic size of the flex item). The default value is `auto`. This property is especially useful when defining strict growth and shrink relationships for your flex items.

### flex

[https://developer.mozilla.org/en-US/docs/Web/CSS/flex]()

Another common flexbox property exists which is simply `flex`. It contains all three of the previous properties of `flex-grow`, `flex-shrink` and `flex-basis` into one shortened form. The property accepts the three in the order `grow`, `shrink`, `basis`, *e.g.* `flex: 1 1 220px`.

### gap

**[ # / % ]**

[https://developer.mozilla.org/en-US/docs/Web/CSS/gap]()

`gap` is another of these shorthand properties which combines `row-gap` and `column-gap`, two properties which were originally implemented as part of CSS Grid before being added to Flexbox. As expected, it accepts two absolute or proportional values which define the `row-gap` and `column-gap` properties respectively. If only one value is provided then both values will be set to the provided value. It should be noted that percentage values here are proportional to the size of the *flex-item* and *not the container*. Unlike other Flexbox properties where values exist with respect to the main-axis of the flex container, the *row* and *column* denominations are always with respect to the plane of the page.

<img src="images/flexbox-gap.png" alt="Flex gap examples" width=400px/>

## Practice

Flexbox can be a tricky thing to wrap your head around... especially once you start playing with `flex-wrap`! To practice what you have learned here today, it is best to give it a go yourself. Create or copy a simple website design, thinking about how you can arrange different parts of the page using `display: flex` and its adjoining properties. Online shops with many products often utilise responsive layouts for their products so this is a great place to start!

If you fancy testing your knowledge but don't fancy building a webpage then Flexbox Froggy is a great online resource which we can recommend for testing your knowledge:
[FlexBox Froggy - https://flexboxfroggy.com/](https://flexboxfroggy.com/)

<img src="images/flexbox-froggy.png" alt="Flex froggy"/>

*Image taken from the Flexbox Froggy site.*


## Further Reading

[MDN Documentation - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

[MDN Documentation - Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

[CSS Tricks - A Complete Guide to FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[FreeCodeCamp - Learn CSS Flexbox in 5 minutes](https://www.freecodecamp.org/news/learn-css-flexbox-in-5-minutes-b941f0affc34/)

