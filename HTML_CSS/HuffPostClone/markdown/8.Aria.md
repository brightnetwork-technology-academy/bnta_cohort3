<img src="../images/BNTA_simple.png" alt="BNTA logo" height=50px/>

# ARIA

## Table of contents

- [What is it?](#what-is-it)
- [Why is it useful?](#why-is-it-useful)
- [When to use it?](#when-to-use-it)

## What is it?

- ARIA or Accessible Rich Internet Applications is a set of attributes that can be used to modify and enhance the semantic meaning of elements in the DOM.
- Important thing to know about ARIA is: - all it does is add meaning or change semantics, it does not change behaviour.

## Why is it useful?

- We've seen previously that if a non-sighted user is navigating your webpage even when we use the most semantic html element, it still falls short of providing enough information.
- This is where ARIA is useful, it helps to provide ways in which we can make the web more accessible.

## When to use it?

- In the previous example of an accessible hamburger, the better version was still not great, yes it told us that we were on something that was actionable - a button - but it didn't tell us what clicking that button would do.

This is where ARIA attributes are useful:

In our good example we had:
```
<button id="hamburger" class="hamburger" aria-expanded="false" aria-label="Main Menu">
```

- aria-label is used to define a string to label the current element since not all elements can be labelled with the label html tag this becomes incredibly useful to a user navigating your page with a screen reader.

- aria-exampded="false": We used this to indicate that the "Main Menu" which came from the aria-label was collapsed. This is to indicate to a non-sighted user that if they click the button the "Main Menu" will become expanded.

Later on we'll see:

- aria-hidden: when set to true, e.g. aria-hidden="true", will remove an element and all of it's children from the accessibility tree. This is commonly used alongside tabindex="-1" which stops the element being focusable when you use tab to go through a webpage. Sometimes we don't want a screen reader to go to a certain element, maybe it contains information that has already been shared with the user.

- role: The role attribute is used to identify to parsing software the exact function of an element.



We will see the use of the above attributes later on, there are also many more and you can look here if you would like to read more about aria: [ARIA](https://w3c.github.io/using-aria/)