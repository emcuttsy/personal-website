---
title: "Convert pandas Dataframe to presence-absence"
subtitle: "A quick way to convert a pandas DataFrame of numerical values to a presence/absence (1/0) table"
date: 2021-02-08T17:39:18-07:00
lastmod: 2021-02-08T17:39:18-07:00
draft: false
author: ""
authorLink: ""
description: ""

tags: [python, R, bioinformatics]
categories: [Code Drabbles, Bioinformatics]

hiddenFromHomePage: false
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

It's not uncommon in statistical analysis of sequence data to think in terms of presence-absence instead of quantity. In this quick little post, I walk through how to convert a pandas DataFrame of numerical values to one containing 1s and 0s representing presence/absence. I also show how to do this in R, for all you R people.

<!--more-->

But first, why convert a numerical dataset to a binary presence-absence table?

Sometimes, numerical values are misleading or not well supported enough to safely incorperate into an analysis. For instance, gene abundance in metagenome-assembled genomes (MAGs) is often misleading and therefore presence-absence comparisons are often favored in analyses of MAGs. Another common reason is that certain distance/dissimilarity metrics used in ordination methods such as PCoA often require or work best on binary data. Jaccard dissimilarity, for instance, is frequently used to quantify dissimilarity between binary datasets. 

I've been parsing the outputs of somegene annotation tools and ended up with a pandas DataFrame of gene counts that I wanted to convert into a presence-absence table with 0s and 1s representing absence and presence, respectively. And I wanted to try and do it without loops, because even though they make a ton of sense to my novice brain, I know they're not "vectorized" or "pythonic" or whatever.

So, how to convert a pandas DataFrame of numbers to presence-absence?

Doing this is pretty easy in R:

```R
df[df > 0] <- 1 
```

And here it is in Python:

```python
df[df > 0] = 1
```

So, pretty much the same. This could easily be adapted to set thresholds for presence/absence—say, only values of 0.5 and higher might be considered "presence" or all nonzero values including negative numbers could be considered "presence." Just change up the conditional to fit your needs.

## Excluding certain DataFrame columns from an operation

That's all nice and simple, but sometimes you might have a column or two of additional data (like genome names, etc.) that you don't want to binarize. If that's the case, then use `df.loc[]` to exclude the columns you don't want to change. 

For instance, let's say I had a DataFrame with the genome name in the first column. Here's how you'd ignore the first column using `df.loc[]`

```python
df.iloc[0:,1:][df != 0] = 1
```

## Example: Convert a DataFrame of gene count to gene presence-absence

Imagine that you had a dataset of gene counts (columns) for a number of species (rows) stored in a pandas DataFrame and wanted to convert to presence-absence. Here's how that might look:

```python
df = pd.DataFrame({'Gene A':[3,10,0, 0,1], 'Gene B':[2,3,4,0,0], 'Gene C':[0,1,7,13,2]},
                  index=['species_1', 'species_2', 'species_3', 'species_4', 'species_5'])

>>>            Gene A  Gene B  Gene C
species_1       3       2       0
species_2      10       3       1
species_3       0       4       7
species_4       0       0      13
species_5       1       0       2

df[df > 0 ] = 1

>>>            Gene A  Gene B  Gene C
species_1       1       1       0
species_2       1       1       1
species_3       0       1       1
species_4       0       0       1
species_5       1       0       1

```

Simple! That's how to convert a numeric pandas DataFrame to binary presence-absence in Python. Happy number crunching!