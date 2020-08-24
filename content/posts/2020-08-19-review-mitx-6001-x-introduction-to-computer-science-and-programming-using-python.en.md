---
title: 'Review: MITx 6001.x Introduction to Computer Science and Programming using
  Python'
author: Elise Cutts
date: '2020-08-19'
slug: review-mitx-6001-x-introduction-to-computer-science-and-programming-using-python
categories:
  - Reviews
  - Programming
  - Python
tags:
  - review
  - edX
  - MITx
  - edX course review
  - Python
  - scientific programming
  - learn to code
subtitle: 'An excellent first step into general Python literacy, but researchers seeking a science-targeted course should look elsewhere'
lastmod: '2020-08-19T12:18:50+02:00'
authorLink: ''
description: ''
hiddenFromHomePage: no
hiddenFromSearch: no
featuredImage: ''
featuredImagePreview: ''
toc:
  enable: no
math:
  enable: no
lightgallery: no
license: ''
---

I'm going to go out on a limb here and guess that most scientists didn't decide to become reseachers because they dreamed of pouring hours into Matlab scripts and peering at liness of code on a computer screen.

<!--more-->

No. We dreamed of pouring a test tube of blue solution into an Erlenmeyer flask of red solution, or peering through telescopes you actually put your eye up against, or other pursuits equally noble and sholarly.

Alas, most research these days requires or at least seriously benefits from computational work. Models are powerful, datasets are only getting larger and more complicated, and computers are—unfortunately for those of us with red-solution-blue-solution scientific dreams—pretty darn useful.

Still, many researchers never formally learn to program. This was the case for me—as a geobiology major at Caltech, I was required to take physics up through special relativity but was never taught to code.

I was always planning to work on improving my coding chops in graduate school, but COVID-19 definitely accelerated things. Instead of lab work, I'll be starting a work-from-home-friendly phylogeneics project when I begin my PhD. The past few months, I've been taking programming and data science courses online to prepare.

I need to learn Python and R, and the first Python course I chose was *MITx: 6.00.1x Introduction to Computer Science and Programming using Python*.

It's easy to find reviews of 6.00.1x online. Still, I thought I'd throw my hat into the ring here to provide a **review from the perspective of a researcher learning to code for science** since our needs differ in some important ways from those of the typical beginner programmer.

{{< admonition type=abstract title="Basic Information (pacing, grading, credit options, pricing, etc.)" open=false >}}
**Course:** 6.00.1x: Introduction to Computer Science and Programming Using Python <br>
**Platform:** edX<br>
**Institution:** MITx (an online education initiative of MIT) <br>
**Pacing:** Instructor-paced, weekly assignment schedule <br>
**Length:** 9 weeks (lectures/problem sets: 6; exams: 2; bonus content: 1) <br>
**Workload:** Generally considered rigorous in comparison to other online intro CS courses. ~2hrs of lecture and 2+ hrs of problem set weekly. <br>
**Grading:** Finger exercises 10%, problem sets 40%, midterm 25%, final 25%. Lowest problem set grade dropped. Letter grades awarded as A >= 80%, B >= 65%, C >= 55% with a grade of C or better required to pass.<br>
**Certification/Credit** edX verified certificate \$75, undergraduate-level university credit (3 credits) through Charter Oak State College for \$300 <br>
**Available for free:** all course materials *except* midterm and final exam. Archived version of course and assignments accessible after course conclusion only by verified learners<br>
{{< /admonition >}}

{{< admonition type=success title="Overall Rating: 7/10" open=true >}}
6.00.1x offers a fast-paced, solid introduction to computer science in Python emphasizing fundamental concepts. Expect a demanding, rigorous course with somewhat dry lectures and very little treatment of practical programming or applications. Support for students is fantastic, with an optional texbook providing additional explanations and practice problems and an active commnunity of peers and TAs to provide help and pose additional challenges. Verified certificates are fairly priced and it is possible to earn university credit. However, other introductory courses offer better options for continuing into a professional certifications/online micro-degrees.

**For researchers seeking a traditional introduction to computer science or whose application would benefit from an understanding of abstract computer science fundamentals, 6.00.1x is a fantastic choice.** But there are better options if you simply need to learn to program practically in Python or want a more science-targeted experience. 

{{</admonition>}}


## X or no, 6.00.1x is an MIT course

6.00.1x is a MOOC version of MIT's introductory computer science course, and it definitely shows.

This is **not a "computation appreciation" course** introducing the many wonderful things that are possible to do with code. It **doesn't touch on application at all**, and **isn't intended to teach you the ins and outs of the Python language**. 

Instead, true to MIT form, **6.00.1x focuses on abstract, language-agnostic concepts** like the core elements of a program, control flow, debugging, exception handling, and computational complexity. 

{{< admonition type=info title="Course content week-by-week" open=false >}}
**Week 1:** short introduction to Python, the Spyder IDE, core elements of a program, strings, bindings, control flow, iteration<br>
**Week 2:** floats and fractions, basic programs incl. bisection search & the Newton-Raphson approximation for square roots, functions, scope, keyword arguments, iteration vs recursion, recursive algorithms incl. Towers of Hanoi and calculation of Fibonacci numbers, file handling <br>
**Week 3:** tuples, lists, mutable vs immutable types, dictionaries, functions as objects, calculating the Fibonacci numbers using dictionaries, more on scope, global variables <br>
**Week 4:** debugging, designing test suites, classes of tests, reading code, exception handling, assertions, exceptions <br>
**Week 5:** classes, inheritance, class methods, object oriented programming, heierarchies, using inherited methods, building a "gradebook" class as an example of classes and inheritance, generators <br>
**Week 6:** computational complexity, program efficiency, Big Oh notation, complexity classes, searching and sorting algorithms incl. linear search, bisection search, bogo and bubble sort, selection sort, merge sort <br>
**Week 7 (optional):** visualizing results, overlapping displays, changing data displays, adding documentation to displays
{{< /admonition >}}

These principles underpin programming in any language and provide an important foundation for computer scientists. And it is very much MIT's style to focus on the more theoretical, abstract side of things and leave application to the imagination of the student.

But I can't help but think it could be a bit too much too fast. Especially for true beginners.

Generally, it seems that 6.00.1x is considered a tough introduction course. The Reddit threads I went through were positive towards the course. But they also nearly always noted that it was very rigorous, and [perhaps not even suitable for beginners](https://www.reddit.com/r/learnpython/comments/9yvbjk/mit_6001x/ea4e8p2?utm_source=share&utm_medium=web2x&context=3). The "Course Philosophy" page of 6.00.1x suggests that while students with no programming experience can succeed, they should expect to spend up to 15 hrs per week on coursework in order to do so.

This all despite MIT describing the course as "designed to help people with no prior exposure to computer science or programming" with a focus on breadth rather than depth."

### Emphasis on the "Computer Science" not on the "Programming in Python"

The course assignments and examples are all in Python, and you certainly get good practice with Python along the way. In particular, I thought **the course did a great job teaching students to read Python code written by others**, which is a very important skill for scientists since we're often the end-users of programs and not the designers.

But **the course definitely doesn't focus on teaching Python programming**. It teaches programming, period—the material just happens to be in Python. 

This could be good or bad for you, depending on your needs.

If you're looking for an introduction to general computer science concepts, 6.00.1x is a thorough introduction to  those ideas. 

But if you're not, you might be better served by a more practically-oriented course. This is especially true for folks already familiar with fundamental computer science ideas who are just looking to get up to speed on Python—**6.00.1x is *not* a Python crash course.**

### Expect to work hard to keep up

Every week, you can expect to spend **2-3 hours on video lectures**, about **an hour on finger exercises** (little problems you complete between sections of the lectures), and **2+ hours on problem sets.**

Personally, I didn't find the course absurdly hard. I spent about 3.5 hours a week on the class—1.5 hours going through the lectures and finger exercises (many thanks to whoever put a 1.25 speed button on the videos) and about 2 hours on the problem sets. I didn't have any problems with the exams, and didn't need to study or review outside of watching the video lectures to keep up.

However, when I read through the forums I saw that many of my classmates were spending over 10 hours on problem sets each week.

*Do these people just not know about Stack Overflow?*

Facetiousness aside, 6.00.1x is definitely not a casual course. Be prepared for a quick pace and beefy problem sets due each week. 

This isn't to say that the course is too hard for a beginner. Depending on your background, it might not be difficult at all. 

I definitely had some advantages that made things easier for me. While I'm not a programmer by any means, I do have some limited experience writing code. And coming out of Caltech, I'm used to zippy classes. 

{{< admonition type=question title="Is 6.00.1x a good choice for absolute beginners?" open=false >}}

I wrote this review with scientists learning to code in mind—not the typical beginner looking to dip their feet into computer science and programming.

The material covered by 6.00.1x is quite dense, and the course doesn't address applications for programming at all. But researchers often learn to code with a particular application in mind and have STEM backgrounds that prepare them well for abstract thinking. 

So for scientists and grad students, I think 6.00.1x is a fine choice of introductory computer science course. 

But for the typical beginner, I think there are probably better options. One popular choice is the [HarvardX course CS50](http://www.edx.org/course/cs50s-introduction-to-computer-science), which is much broader than 6.00.1x and introduces students to multiple programming languages and applications. 

There's also [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/). This free online textbook aims to help absolute beginners use code in useful ways as quickly as possible. 

{{</admonition>}}

I also didn't try to *perfectly* understand *every* concept, especially the more abstract ones like computational complexity. If I had wanted to do that, I would have needed to put in a lot more time. Which brings me to my next point...

## You get out what you put in

While 6.00.1x is tough, it provides **plenty of support and resources** to get you through. And if you find assignments easy, those same supports and resources offer a great way to enhance and extend your experience with the course.

The instructor-paced format of 6.00.1x definitely contributes to the difficulty of the course, it also leads to a very active, supportive community of peers. If you're struggling, you will easily be able to find people to work with on problem sets. You'll also find plenty of classmates posting little challenges ("code this assignment in one line!") and expansions to the material povided by the course.

{{< admonition type=info title="Optional course textbook" open=true >}}
There's an [optional textbook](https://mitpress.mit.edu/books/introduction-computation-and-programming-using-python-second-edition) written by the instructor that supports the course. I personally didn't use the textbook, but other students seem to have found it a great support.
{{</admonition>}}

The TAs are also quite active and helpful. I frequently saw them answering questions and clarifying ideas in the forums and comments sections. 

I definitely didn't put in maximal effort to the course when I did it. I watched the lectures and solved the problems, but I never went further than that. It's definitely possible to float through some of the material in this course without understanding it. I definitely didn't study hard enough to grasp everything 100%—just well enough to complete the assignments.

I kind of regret my apathy now. There were so many opportunities to engage with other students in a way that would have enhanced my learning.

{{< admonition type=info title="Computational Thinking Using Python XSeries" open=true >}}
6.00.1x is the first course in a two-part "XSeries" offered by MITx called [Computaitonal Thinking Using Python](https://www.edx.org/xseries/mitx-computational-thinking-using-python). The second coure in the series, *[MITx 6.00.2x Introduciton to Computational Thinking and Data Science](https://www.edx.org/course/introduction-to-computational-thinking-and-data-4)*, is more application-focused and introduces tools in Python that are useful for data analysis and visualization.
{{</admonition>}}

## Lectures and problem sets aren't flashy, but they get the job done

6.00.1x isn't going to surprise you or excite you. Thanks to its focus on abstract theory over exciting application, it isn't very inspiring or motivating.

However, the material is very straightforward and usually clearly explained. Problem sets are fair, and relate directly to the content covered in lecture. And you won't need to teach yourself anything beyond what's introduced in the course in order to do well on the sets and exams.

### "Finger exercises" help you stay engaged despite dry lectures

The instructor isn't difficult to understand and usually explains concepts clearly. But his slides are often boring and hard to read—line upon line of code in small font—and he isn't very exciting to watch. In other words, he's the authentic university professor experience.

It was sometimes difficult to stay focused enough to keep from tabbing out to other webpages. However, for the most part, I was able to stay focused thanks to the way 6.00.1x breaks lectures up into 3-15 minute sections. Between each section, students are tasked with solving a set of short problems or "finger exercises" related to the previous lecture section.

I found that this way of presenting material helped me pay better attention than I usually would to a video lecture.

### Problem sets are fair and well-made, but don't expect to build anything from the ground-up

My experience with 6.00.1x problem sets was positive overall. The sets are fair, generally have clear directions, and—best of all—are completely possible to finish correctly without teaching yourself anything that wasn't introduced in lecture.

However, they're not the most exciting or gratifying. For programs more complicated than a few lines, a lot of the code is already written for you and you're simply tasked with modifying it. This makes things easy, but it's tough to feel like you're actually capable of *building* anything yourself based on the course experience.

And as I've said before, the course does not emphasize applied or useful programming. In the problem sets, you won't write code that visualizes data or does a task more useful than calculating Fibonnaci numbers. The most exciting assignment was a "hangman"-style word-guessing game. 

## Options for credit and certification could be better

EdX and other MOOC platforms like Coursera offer all sorts of certification options these days ranging from simple, single-course verifications to entire online degrees. And while 6.00.1x is not a stand-alone course—it is the first in a two-part "XSeries" called Computational Thinking Using Python—it definitely lags behind the competition a bit when it comes to certification options.

If you don't care about earning a more involved certification or were planning to audit anyways, this isn't much of a problem since it doesn't effect the course expience itself in any way. But if it does matter to you, these other introductory Python courses on edX and Coursera might be worth considering instead:

**Computer Science:**

* **NYUx: [Basics of Computing and Programming](https://www.edx.org/course/basics-of-computing-and-programming)** - associated with the [Computer Science Fundamentals](https://www.edx.org/microbachelors/nyux-computer-science-fundamentals) MicroBachelors
* **GTx: [Computing in Python I](https://www.edx.org/course/computing-in-python-i-fundamentals-and-procedural)** - associated with the [Introduction to Python Programming](http://www.edx.org/course/computing-in-python-i-fundamentals-and-procedural) Professional Certificate
* **HarvardX: [CS50's Introduction to Computer Science](http://www.edx.org/course/cs50s-introduction-to-computer-science)** - associated with 4 Professional Professional Certificates: [Computer Science for Web Programming](http://www.edx.org/professional-certificate/harvardx-computer-science-for-web-programming), [Computer Science for Game Development](http://www.edx.org/professional-certificate/harvardx-computer-science-for-game-development), [Computer Science for Mobile Apps](http://www.edx.org/professional-certificate/harvardx-computer-science-and-mobile-apps), and [Computer Science for Artificial Intelligence](http://www.edx.org/professional-certificate/harvardx-computer-science-for-artifical-intelligence)
* **University of Michigan on Coursera: [Python Basics](https://www.coursera.org/learn/python-basics?specialization=python-3-programming#enroll)** - associated with the [Python 3 Programming](https://www.coursera.org/specializations/python-3-programming) Specialization

**Data Science:**

* **IBM: [Python Basics for Data Science](https://www.edx.org/course/python-basics-for-data-science)** - associated with 3 Professional Certificates: [Python Data Science](https://www.edx.org/professional-certificate/python-data-science), [IBM Data Science](https://www.edx.org/professional-certificate/ibm-data-science), and [Applied AI](https://www.edx.org/professional-certificate/ibm-applied-ai)
* **UCSanDiegoX: [Python for Data Science](https://www.edx.org/course/python-for-data-science-2)** (intro-level programming experience expected) - associated with [Data Science](https://www.edx.org/micromasters/uc-san-diegox-data-science) MicroMasters
* **GTx: [Computing for Data Science](https://www.edx.org/course/computing-for-data-analysis)** (intro-level programming experience expected) - associated with [Analytics: Esssential Tools and Methods](https://www.edx.org/micromasters/gtx-analytics-essential-tools-and-methods) MicroMasters
* **University of Michigan on Coursera: [Introduction to Data Science in Python](https://www.coursera.org/learn/python-data-analysis?specialization=data-science-python)** - asssociated with [Applied Data Science with Python](https://www.coursera.org/specializations/data-science-python) Specialization

## Conclusion and personal experience 

6.00.1x was a good experience for me. I was able to get through the lectures and problem sets without difficulty and felt that my comfort level with Python—especially reading Python—improved. I also feel more confident with basic computer science concepts than I did before. 

However, if I could do things over, I might choose to take a more data science targeted introduction to Python course, or at least one that was more applied. 

At least I am planning to continue with the next course in the Computational Thinking Using Python XSeries, so hopefully I'll get some exposure to data applications there. Expect another review after that's done!

I just want to finish off by saying that, for all my critiques of 6.00.1x, it accomplished something really important for me: alleviating my anxiety around programming.

Personally, coding was never really my cup of tea. I chose to major in geobiology in part because I saw it as a sort of last refuge from the tyrrany of screens. Just the thought of programming gave me little panic attacks because I felt so out of my depth with technology and thought there was no way I could catch up to the tech bros who had been taking apart computers with their dads from the age of 3. I never considered myself a computer person, and did my best to avoid programming whenever I could. 

At least I *didn't* consider myself a computer person. Maybe I'm getting there now—the fact that you can, I assume, access this website, indicates that some progress has been made at least. 

Anyways, 6.00.1x got me over thinking "there's no way I can do this." Maybe it's a bit sick, but seeing others struggle in the forums on problems I found easy made me feel a lot better about my ability to keep going with this stuff. And I found myself really enjoying figuring out the problem sets. It felt a bit like doing a crossword or sudok.

I still don't think there's any way I'll become a developer or anything like that. But that's the thing—you don't need to be a developer to use programming to make your life easier. I realize now that thinking otherwise is about as ridiculous as thinking that you need to be mechanic in order to drive a car.

If you're like me and intimidation is your biggest problem, the nice thing is that it doesn't really matter what course you take first: just being guided to the realization that you're capable of coding is enough. 