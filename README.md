### git commit -m 'Adding a Sidedrawer Toggle Button'

Section 8, Lecture 141
Try first alone in branch sidedrawer-toggle-button

### git commit -m 'through toolbar'

We tried to pass the toggleSidrawer through toobar, but it wasn't working.
It opend only the backdrop, and that was obvius because of SideDrawers @media
query restriction to 'display: none' when above of 500 width.  
So we used the window.innerWidth with an if statement. See Layout.
Also note that we used React.createContext but it's not really needed.

### git commit -m 'fixed'
