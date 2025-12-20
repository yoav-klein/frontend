# Layout
---

In this project I want to demonstrate an example of a website layout. 

The layout has a header in the top of the page, spreading all over the page horizontally from left to right.
Then we have a sidebar on the left, and the main content to the right of the sidebar.

The layout is enclosed within a `.box` div so that things are super clear to understand what's going on.

The way we achieve this is with grids. The `header` and `.content` blocks are in one grid with 2 rows (each in a row).
then, the `.content` is also a grid with 2 columns - one for the sidebar and one for the main content.

The layout is responsive so that on small screens, the sidebar is a collapsable sidebar, opened and closed using the menu button.
When the screen is small, the sidebar is `absolute` positioned, relative to the `.content` container.