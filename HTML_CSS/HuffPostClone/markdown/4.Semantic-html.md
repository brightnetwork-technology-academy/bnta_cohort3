<img src="../images/BNTA_simple.png" alt="BNTA logo" height=50px/>

# Use The Right HTML Elements - Semantic HTML

## Objectives

- Bad example with screen reader
- Introduce accessibility tree
- Introduce accessibility 

## Table of contents

- [Built in Elements & Semantic Elements](#semantic-elements)
- [Generic Elements](#generic-elements)
- [Use the Right HTML for the Job](#use-the-right-html)

## Built in Elements & Semantic Elements

[Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

- Built in elements, semantic elements have rich semantics - in other words they carry a lot of meaning
- Examples: button, a, header, footer
- That's why you should use them where possible
- Why is not using them bad?

## Generic Elements


- A div is a generic grouping element, it's just a container that's used for grouping things together
- Generic elements have generic semantics

```
<div class="btn btn-primary" tabindex="0">
  Sign Up
</div>
```

- With styling, for a sighted user there doesn't seem like there is any difference
- For a none-sighted user when they land on this Sign Up button, all they're going to hear is "Sign Up, Empty Group"
- So let's see this in action: screen reader & accessibility tree example

## Use the Right HTML for the Job

### Why is this a problem?

- "Empty Group" doesn't tell the user that they are focused on something that they can take action on. 
- Do you click on a group? You wouldn't know because it conveys no meaning to how it should be used.
- This is a big problem because the user might just keep on moving and never be able to checkout their shopping or log in to their bank

### Better Example

```
<button class="btn btn-primary" tabindex="0">
  Sign Up
</button>
```


