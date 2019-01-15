# [React 16.6 - The Complete Guide (incl. React Router & Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/)

Udemy course.
Dive in and learn React from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
BESTSELLER
4.7 (27,970 ratings)
95,486 students enrolled
Created by Academind by Maximilian Schwarzmüller,
Last updated 1/2019
English, Italian and 4 more

Note: we are not going to upload all the lessons, because it's not a free course.

### commit: check readme

The using-Array branch, is from this question:

I think we don't need to use spread operator that seems unnecessary solution for the problem
Mehmet · Lecture 120 · a month ago
Array(size) and new Array(size) is the same thing for creating NEW array, I think [Array(props.ingredients[igKey])] would be sufficient implementation for that case.

I think nested map functions are hard to understand. For code readiblity for loops would be more cleaner.

Guys, What Do you think about it?

... check answer in Burger

Extra comments from [Q&A](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/5823946):

Thank you David for your response

I understand the logic why instructor coded logic with spread(...) operator

For Example:

let firstArray = [Array(5)];

// Length of array is 1 because there is no element to asign when defining array

firstArray.map( () => console.log('Hello'));

// Will Print Just One Hello because map function runs iteratively and call its callback function which defined in it and return the result as array

let secondArray [...Array(5)];

secondArray.map(() => {console.log('Hello');})

//Will Print Hello 5 times

let a = [Array(1)];

let b = [...Array(1)];

//On Google Chrome Version 70.0.3538.110 (Official Build) (64-bit)

console.log(a[0]); // Will Return Empty but c[1] will return undefined

console.log(b[0]); // Will return undefined

So, I think asigning undefined to array indexes is just for increasing array counter and make it happen with assigning meaningless values

Instructor just created undefined valued arrays with specified sizes

Thank you very much David.

Thank you for your helpful comments.
