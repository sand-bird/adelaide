# adelaide

Unfinished engine for a text-based adventure game.

Built in js with React-Redux and Webpack, runs cross-platform in an application window using Electron.

The game (which doesn't exist, and probably never will) consists of an image representing the player's location, a block of text up to four lines, and a horizontal action menu. Handles both mouse and keyboard (arrow keys, enter, backspace) interaction. 

Supports scaling, simple component-lifecycle-based CSS transitions (though with Redux containers it's a lot less simple), automatic text-block and action-menu pagination, letter-by-letter text display (the "typewriter effect") with proper handling for things like click-to-skip and exiting to menu mid-paragraph, forced subpixel adjustment for center-aligned action menu items such that the aliased font used does not appear blurry (though it's still not entirely crisp on Windows for some reason) -- *and more!*

All React bits are in Redux-friendly component/container format, with the "dumb" components functional and stateless whenever possible.
