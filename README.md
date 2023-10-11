# What is this website for?
This is the website for the Mr. Ben Merch store forum in the Computer Science club at Allen High School. All funds go to the Computer Science Club.

Join our [discord server](https://discord.gg/E8NzVDaAS9)!

View the website here: https://mr-ben-merch-store.github.io/Website/

# Want to contribute?
Make sure to keep a consistent color scheme throughout the website. RGB values for the background are 22, 23, 23. RGB values for font are 99, 210, 151.

When creating any new pages, make sure to use h1 for the main title/text (like "About" on the about page), this will also give it the bouncing animation.

Also make sure any new pages are added to topnav.html (this excludes individual merch pages).

Make sure that these lines are always after <title>:

    <link rel="icon" type="image/x-icon" href="/Website/favicon.ico">
    <link rel="stylesheet" href="assets/css/index.css">
    <script src="assets/scripts/index.js" defer></script>
    <script src="loadHtml.js"></script>

The first actual piece of code should always be the topbar, which has it's own file. You can insert it by pasting this right after <body>:

    <div id="topnav"></div>
    <script>loadHtml('topnav', 'topnav.html');</script>

Remember, you can ask anyone listed as a contributor for help with anything, although it's pretty easy to just copy the layout and theme from other pages.

This utilizes the MIT License, so you can practically do anything with this code.
