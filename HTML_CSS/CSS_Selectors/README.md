<img src="images/BNTA_simple.png" alt="BNTA logo" height=50px/>

# BNTA Course Notes

## CSS Selector Notes

### Introduction

At the heart of every webpage, you have HTML markup defining the *"What?"* and CSS defining the *"How?"*. With the combination of the two, many great things are possible and so understanding how the two interlink is a great step towards becoming a proficient web developer. CSS Selector types is a topic which is often glossed over by beginner web developers who then proceed to become tangled in a web of classes, ids and specificity. Balancing each of these topics, while ensuring that your code is *DRY*, is true testament to a web developers frontend proficiency and thus it is worth starting your learning early.

[w3schools - Interact CSS Selector Site](https://www.w3schools.com/cssref/trysel.asp)

### A Note on Specificity & Organisation

[https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity]()

*Specificity* is the measure of how specific a CSS selector statement is—which in turn defines what set of CSS properties are applied to the specified element(s) when multiple values are set. In a growing webpage, with a growing list of CSS classes and declarations, you may find that you start running into problems with seemingly automatically applying styles or with styles not appearing where you'd expect them to. The latter is usually caused due to a conflict in specificity (or a typo!), while the former is from poor organisation of your classes and/or CSS declarations. To avoid these two common issues, we hence recommend following these guidelines:

- When starting out, give everything a class, make each selector unique. This is especially true during any team projects where many people are working on one site. Your intuition for knowing when and where a class should be applied (especially once you begin using more generalised classes) will increase with experience

- As with above, avoid using general element selectors (*e.g.* `div` or `p`) unless as a descendant of a specified class or part of a reset block (see next)

- Avoid applying any global styling. Page resets (*e.g.* [Piccalilli - A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)) can be incredibly useful and many devs use them, but make sure you know what you are applying and where!

- Make your class names meaningful. Consider using a naming convention (*e.g.* BEM - [http://getbem.com/naming/]()) across your site to organise your classes and make them accessible to someone new to your code

- Make the location of your CSS code make sense. If you are working on a project with multiple CSS files, make sure that each file is clearly labelled so that they can be understood by both your teammates and people who are new to your code. This is especially important later when you look at React and begin component-based webpage construction


## CSS Selectors

*But what is a CSS Selector?* A CSS Selector is simply the means by which you specify a piece of HTML markup to be styled. You will mostly likely have already encountered the `.class` and `#id` selector types in your earlier learning. There are however many other selector types and means of combining them. This document aims to outline many of the common selector types and use cases so that you may produce *DRY-er* code and hopefully avoid that next specificity hole.

There are more selectors than you will find in the following lists, however these are the selector types which you will find most commonly used. Find some resources below if you wish to view a complete guide.

[MDN - CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

[w3schools - CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)

### Selectors

- `*` (wildcard)

	The wildcard selector can be used to select ***everything*** within a document
	
- `element`

	The element selector is used to select ***all*** elements of the specified type (*e.g.* p, div, section)
	
- `.class`

	The class selector is used to select ***all*** elements with the specified class attached
	
- `#id`

	The ID selector is used to select the ***single*** element with the specified ID. Remember that ID's are unique and thus single-use, unlike classes
	
- `[attribute]`

	The attribute selector is used to select all HTML elements which hold the specified attribute. An example of this may be when you have a retractable menu component which you assign the `data-active` attribute to, to track whether the menu is to be visible or not
	
- `[attribute=value]`

	By specifying the value of the attribute, you can gain further control on what elements you are selecting. This is again incredibly useful for when you are using custom HTML attributes. You could, using the same example as before, make your retractable menu switch between `visibility: hidden` and `visibility: visible` by selecting only when `data-active="true"`—a key detail when coding for accessibility

### Combinations

- `element.class`

	This combination of selectors targets all elements of the type specified which also house the class specified
	
- `element,element`

	Two selectors of any type adjoined by a comma selects ***all of both*** types specified

- `.class1.class2`

	The combined class selector type is used to select an element which has ***both*** classes applied
	
- `.class1 .class2`

	Stating two (or more) classes brings in about structural considerations to your selection. This example selects all elements with the class `class2` which are descendants of an element with class `class1`
	
- `element1 > element2`

	The direct descendant selector allows you greater fidelity for what elements you are selecting. It will allow you to select only the elements `element2` which are direct descendants of `element1`
	
- `element1 + element2`

	The addition symbol is used to select the elements of type `element2` which occur directly after each of type `element1`
	

### Pseudo-classes

[MDN - Pseudo-Classes and Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

[https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes]()

All CSS pseudo-classes start with a single colon `:`. You can think of these as context selectors which select a special state of the specified element. (*e.g.* `a:visited` selects all anchor elements which have previously been visited by the user agent)

- `:hover`

	Is active when the item is targeted by the mouse

- `:focus`

	Is active when the user-agent targets the element (usually achieved by [tab]-ing)
	
- `:focus-within`

	Activates as `:focus` for the parent element along with any descendants which have `:focus` stylings applied

- `:active`

	Is active when the element has been activated by the user agent (*e.g.* clicked on)

- `:link`

	Is active if the associated link **has not** been visited previously

- `:visited` 

	Is active if the associated link **has** been visited previously
	
- `:root`

	Targets the element that is at the root of the webpage document (*e.g.* the starting `html` tag). Can be used to select the entire document to set up default stylings

- `:nth-child(#)`

	Selects the n-th child of an element in index `#`. Formulae can be used to select a pattern of children elements (*e.g.* `2n` can be used to select every even-indexed child)

- `:first-child`

	Selects the first child of an element
	
- `:last-child`

	Selects the last child of an element
	
There are more pseudo-classes than in the list above, we have simply highlighted those which we believe are most commonly used. A group of pseudo-classes which I have not listed above but that may be worth being aware of all relate to `form` elements. The MDN documentation linked above is a great resource to view an exhaustive list of pseudo-classes.

### Pseudo-elements

[https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements]()

All CSS pseudo-elements start with a double colon `::` and represent a specific region within an established element. They act as if they have added in a new HTML element to your markup. There are around 16 pseudo-elements listed in the MDN documentation, many of which are experimental. Each have their own niche use, and some may find themselves at home within certain designs, however we are only going to cover two of the most important pseudo-elements here: `::before` and `::after`:

- `::before`

	As you may be able to guess, the `::before` pseudo-element selects the region just before the associated element. This can be incredibly powerful for *e.g.* assigning regions which grow to fill the space provided, hence positioning the element a specific way, or; for applying a background colour or image which are later unaffected by an applied `filter` property.
	
- `::after`

	Reflection of the `::before` element, the `::after` pseudo-element selects the region immediately following the specified element.
	
Pseudo-elements are incredibly powerful when used correctly, and can often help tidy up your markup. Their use-case, however, isn't always the most obvious. The below CSS Tricks article outlines seven ways you may use pseudo-elements:

[https://css-tricks.com/7-practical-uses-for-the-before-and-after-pseudo-elements-in-css/]()

