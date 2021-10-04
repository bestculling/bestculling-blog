---
title: '6 ใช้กรณีของการแพร่กระจายกับอาร์เรย์ใน JavaScript'
date: '2021-10-03'
---

```js
// lib/docs.js

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const docsDirectory = join(process.cwd(), 'docs');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
```


ต่อไปนี้คือ 6 วิธีในการใช้ตัวดำเนินการ Spread กับ Array ใน JavaScript คุณสามารถใช้เพื่อผสานหรือโคลนอาร์เรย์ หรือใช้เพื่อแปลง iterables เป็นอาร์เรย์

```javascript
// Merge Array
[...array1, ...array2]

// Clone Array
[...array]

// String → Array
[...'string']

// Set  → Array
[...new Set([1,2,3])]

// Node List → Array
[...nodeList]

// Arguments → Array
[...arguments]
```
**Array Manipulation**

The best thing about the Spread syntax is to use it for array manipulation 👏

***1. Use Spread for Merging Array***
- Let's say we have 2 arrays.

```js
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
```

- Let's see what happens when we try to merge the array without the spread syntax.

```js
    const attemptToMerge = [array1, array];

    attemptToMerge;
    // [ [1, 2, 3],  [4, 5, 6] ] 👈 😱
```

- 👆 When you try to merge an array without the spread syntax, you wind up with a nested or multi-dimensional array.

    So let's use the Spread syntax to "erase" the brackets.

```js
    const mergedArray = [
        ...array1,
        ...array2
    ];

    mergedArray;
    // [ 1, 2, 3, 4, 5, 6 ] 👈 ✅ Nice flattened array
```

***2. Clone Array***

Cloning array in JavaScript isn't as straight forward. So let's see it done in 2 paths - the wrong way and the right way 🛣

```js
    const original = ['zero', 'one'];
    const newArray = original;

    original; // ['zero', 'one']
    newArray; // ['zero', 'one']
```

👆So everything looks okay so far, but let's see what happens if we change the element.

```js
    newArray[1] = '💩';

    newArray;
    // ['zero', '💩']

    original;
    // ['zero', '💩']  👈 😱 Our original array is affected
```

OH yikes 😱 Changing the newArray will mutate the original array 👎

Think of references as addresses. When we create a copy of an array using =, we've only copied the address. We have NOT copied the underlying array, which is what we want. To do that, we need to copy the array at a new address. That way, when we make changes to our new array, it won't affect the original array -- because they're at different addresses.

Cloning Array the Right Way
const original = ['zero', 'one'];
const newArray = [...original];

original; // ['zero', 'one']
newArray; // ['zero', 'one']
So if we did this correctly, our original array shouldn't be affected if we changed the newArray. Alright, let's give this a try 💪

newArray[1] = '💩';

newArray;
// ['zero', '💩']

original;
// ['zero', 'one']  ✅ original array is NOT affected
#Iterables to Array
With Spread, converting different data types to an Array has never been easier 👏

#3. String to Array
When we spread a string, it will return an array of individual substrings.

const string = 'hi';

const array = [...string];

array;
// [ 'h' , 'i' ]
#4. Set to Array
Let's create a new set object:

const set = new Set([1, 2, 3]);

set;
// Set(3) {1, 2, 3}
Using Spread, we can convert the set into an array:

const array = [...set];

array;
// [1, 2, 3]
#5. Node List to Array
Let's create a node list:

const nodeList = document.querySelectorAll('p');

nodeList;
// [p, p, p]
Now we can use Spread to convert our node list into an array:

const array = [...nodeList];

array;
#6. Arguments to Array
Before we begin, let's take some time to understand what the arguments objects is.

MDN: arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

👆 Notice the key there, array-like -- So it looks like an array, but it isn't (oh JS, always making things so fun for us to understand you 😅). The benefit of converting the arguments object to an array means we have access to all the awesome array methods (ie. map, filter, find) 👍

function names() {
  arguments;
  // Arguments(4)['samantha', 'sam']

  arguments.map(name => `hi ${name}`);
  // ❌ TypeError: arguments.map is not a function
}

names('samantha', 'sam');
Alright, let's convert our arguments into an array so we can apply array methods on it 🙌

function names() {
  const argumentsArray = [...arguments];

  argumentsArray.map(name => `hi ${name}`);
  // ✅ ['hi samantha', 'hi sam']
}

names('samantha', 'sam');