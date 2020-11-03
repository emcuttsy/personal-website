---
title: "Conditional Formatting Anki Cards Based on Field Contents"
subtitle: "An easy trick I used to automatically color-code my German flashcards based on noun gender"
date: 2020-10-31T05:03:42-04:00
lastmod: 2020-10-31T05:03:42-04:00
draft: false
author: ""
authorLink: ""
description: ""

tags: [german flashcards, anki tricks, solo language learning]
categories: [German, Anki, Code Drabbles]
hiddenFromHomePage:false
hiddenFromSearch: false

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: false
math:
  enable: false
lightgallery: false
license: ""
---

Anki allows conditoinal formatting based on whether or not fields are empty, but you'll need to use a bit of code to change your cards based on field *content.* Luckily, it's not that hard, and using this trick you can conditionally display text as well.

<!--more-->

I wrote a bit about Anki in my last post, since I used it to make my [1000-word German flashcard deck]({{<ref "2020-10-11-1000-word-german-flashcard-deck/">}}). For those who don't already know, Anki is a popular open-source flashcard program that's built on the spaced repetition method.

As I mentioned above, Anki provides an easy way to conditionally format based on whether fields are empty or not. But since I wanted to color-code my German noun flashcards based on gender, using the built-in system wasn't going to work elegantly. So, I did some looking around and was eventually able to figure out how to achieve conditional formatting using a little JavaScript and HTML/CSS. You can use a similar trick both to change CSS styling and to display text (which can be different than the text in your field).

---

## Conditional formatting and text display based on field content

**How it works:** The area to be formatted is defined in HTML with `<span>`. Javascript checks if some condition (I use `==` in the example below but you could use something else) is met based on the contents of your note's field. If the condition is satisfied, the CSS class of the span is changed to a class of your choosing defined in the Styling shared between cards using `document.getElementById().classList.add()`. Conditional input of text works in a similar way, but instead of changing the class of the `<span>` it uses `document.getElementById().innerHTML` to place the desired text within it.

**Card Front/Back Template**

    <!-- conditional formatting-->
    <span id = 'formatted_area'>
        <!-- content to be formatted here -->
    </span>
    
    <!-- conditional text-->
    <span id = 'conditional_text'></span>
    
    <script>
        if('{{conditioning_field1}}' == 'condition1'){
          document.getElementByID('formatted_area').classList.add('style')
        };
        if('{{conditioning_field2}}' == 'condition2'){
          document.getElementById('conditional_text').innerHTML = 'new text'
        };
    </script>
**Styling (shared between cards)**

    .card{
    /* card style */
    }
    
    .condition{
       /* condition style */
    }
## Example: German noun article and highlight color conditioned by gender (and number)

This is a simplified version of one the card templates I use with my 'German noun' note type. It displays the noun with its color-coded article and its plural, if it has one and isn't plural-only. The conditions are based on a field called 'Gender', which I set as either 'm', 'f', 'n', or 'p' for masculine, feminine, neuter, and plural-only nouns. 

**Card Front**

```html
<big>
    <span id='gender'>
        <span id='article'></span>
    </span>
    {{German}}
</big>

<br>

{{#Plural}}
<small>die {{Plural}}</small>
{{/Plural}}

<script>
    if('{{Gender}}' == 'm'){
        document.getElementById('gender').classList.add('m')
		document.getElementById('article').innerHTML= 'der'	
    };
    
    if('{{Gender}}' == 'n'){
        document.getElementById('gender').classList.add('n')
		document.getElementById('article').innerHTML= 'das'	
    };
    
    if('{{Gender}}' == 'f'){
        document.getElementById('gender').classList.add('f')
		document.getElementById('article').innerHTML= 'die'	
    };
    
    if('{{Gender}}' == 'p'){
        document.getElementById('gender').classList.add('p')
		document.getElementById('article').innerHTML= 'die'	
    };
</script>
```

**Styling (shared between cards)**

```css
.m {
color: royalblue;
}

.f {
color: palevioletred;
}

.n{
color: goldenrod
}

.p{
color: black
}
```

