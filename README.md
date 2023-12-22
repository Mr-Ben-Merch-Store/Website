# What is this website for?

This is the website for the Mr. Ben Merch store forum in the Computer Science club at Allen High School. All funds go to the Computer Science Club.

Join our [discord server](https://discord.gg/E8NzVDaAS9)!

View the [website](https://mr-bens-merch-store.vercel.app/)

## Want to contribute?

Make sure to keep a consistent color scheme throughout the website. The text color in TailwindCSS is `emerald-400` (class will be `text-emerald-400`), and the background is `zinc-900` (`bg-zinc-900`).

When creating any new pages, make sure to use h1 for the main title/text (like "About" on the About page), as this will also give it the bouncing animation.

Remember, you can ask anyone listed as a contributor for help with anything, although it's pretty easy to just copy the layout and theme from other pages.

This utilizes the MIT License, so you can practically do anything with this code.

## Setting up development

### Locally

First of all, you need to install [Node.js](https://nodejs.org/en) from its website. There are instructions for all platforms (Windows, Mac, Linux), and it's easy to find help if necessary.

Next, This repo uses [`pnpm`](https://pnpm.io) for package management. You can use the in-built Node.js `npm` package manager to install `pnpm`, or, more simply, use the new `corepack` tool that comes with your installation of Node.js:
```
corepack enable
```

That will allow you to use `pnpm`.

Once you clone the repo, you need to install the necessary dependencies on your system. Go into the repository root and execute:
```
pnpm install
```

You'll notice the new `node_modules` folder pop up. You're all set up!

## Development process

To start the development server so you can see what changes you are making, run the command:
```
pnpm dev
```

Go to [http://localhost:3000](http://localhost:3000) to see the development server running (or click on the link in the terminal).

## Main technologies used

If contributing looks too daunting because of the technologies used, understand that they are based on HTML, CSS, and JS. The `.tsx` files are similar to HTML files in that they contain the HTML structure, but they also contain code for interactivity and more.

Here are some documentation links if you want to learn more:

-   [Next.js](https://nextjs.org) - This is used for backend and frontend functionalities, and is a metaframework built on React.
    -   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
    -   [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
-   [TailwindCSS](https://tailwindcss.com) - This is used for styling. It uses utility classes within the HTML to style, rather than relying on large CSS files.
