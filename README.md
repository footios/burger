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

### git commit -m 'half job'

1. The backdrop doesn't show up again and again as the sideDrawer
2. The sideDrawer is not removed when backdrop is clicked.

### git commit -m 'fix sideDrawer'

After we saw Max, we are now going to try again.
I remembered the steps, but it didn't work, so I had to copy everything from
Layout and SideDrawer

### git commit -m 'fixed'

It seems like we had a problem with the code in master. The backdrop would saw at first load of the page. Check [Q&A](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4639408)

From Q&A:
So the question is not why here bakcdrop show up in first load, but why it didn't already because of Modal.

Sorry I got it! When clicking the ORDER button to purchase, the purchasing in state is reset to true (L. 129).

So when the Modal goes open, then the backdrop shows.

So here the showSideDrawer in the state of Layout should go to true, when the SideDrawer goes open. This happens when min-width is under 500px (see SideDrawer.css). So is there a way to reset the state according to the css info?

Now it's fixed with an eventListener and by checking the innerWidth.
Check Layout.js
