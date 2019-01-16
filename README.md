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

### npm run eject

First we want to enable CSS Modules, so we run 'npm run eject'
in order to get access to the config file.

CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.

But, because we are in the future, we don't need to eject anymore,
in order to use CSS Modules.
We can instead do this:
[Adding a CSS Modules Stylesheet](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
In a few words:
"CSS Modules are turned on for files ending with the .module.css extension".

### commit: basic configuration

We just set up the project. That is we created all the necessary folders and files.
We also:

- started the basic implementation of the Burger Builder Container.
- added a dynamic ingredient component.
- added Prop Type Validation.

### commmit: outputting ingredients dynamically

We just:

- started the Burger Component, and
- output ingredients dynamically

Then in the Q&A section, we found a very interesting modification of the code.
The first version is simple. It just outputs the ingredients one after the other.
The second version gives the ability to arrange the ingredients however you want.
For the second version, we are going to create an other branch, called 'relative positioning'

### commit: update readme

So we made a commit in the new 'relative positioning' branch after we updated this read me file. And it works! We now have two different branches with different readme files. So next we're going to work (on relative positioning) and add and commit and push our second version in the 'relative positioning' branch. Then we're going to come back on the master and go on from where we left it, without the changes of the second version.

### update readme

So we are finished with the relative positioning and we may go on with our course.

### commit (in simpler solution branch): simpler solution added

We found a simpler solution in Q&A and we added it to the project in the according branch.

### commit: using every

In this case, we paused the video, and we tried to find a solution, for if there are no ingredients selected. So in the Burger.js we used the every method, instead of the reduce.

### commit: using reduce

### commit: added buildControls

Lecture 123.

### commit: added handlers

In BurgerBuilder we added two funcs which hanlde the adding and removing of ingredients (L. 124).

### commit: case less -b

In L. 125, before the instructor handled the error we had, if the customer
tried to subtruct an ingredient while there where no ingredients, we tried to find a way on our own. We passed through props the state to BuildControl.js. And then we just disabled the Less button, in case there are no ingredients. But that only worked if all the ingredients values where 0. So we tried to hack it in the BuildControls.js. But there we get an error. We are about to post the error. And go on with the instructors way. We saved our code in the case-less branch.
