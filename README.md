This is my CV, made with ❤️ and web technologies.
Check it out!

> **Alejandro Avilés' CV:** [cv.pdf](cv.pdf)

Why did I go this way?
I started adjusting [Adrien Friggeri's LaTeX template](https://www.latextemplates.com/template/friggeri-resume-cv), but as soon as I tried to incorporate new visual decorations and more responsive styles I run into very hard to debug problems.
Since one of my guilty pleasures is solving UI puzzles with web technologies, I challenged myself with building my CV with [Nunjucks](https://mozilla.github.io/nunjucks/), a templating engine, [Sass](https://sass-lang.com), a CSS preprocessor, and finally printing it from a headless browser.
This is the happy result.

## Printing

To print this CV make sure you have the following software installed in your machine:
- [yarn](https://yarnpkg.com/en/)
- [Google Chrome](https://www.google.com/chrome/)

Then, from a terminal, run the following command to produce the `cv.pdf` file:

```console
make print
```

Note that the print script is currently macOS only.
If you are running this from a Linux machine you can try the experimental printing from Docker.
To do so, make sure that you also have [Docker](https://www.docker.com/) installed in your machine and then run the following command:

```console
make print-docker
```

## Forking

Feel free to fork this repo and adapt my CV if you would like to use it as a template for yours!
If you do so, these are the files you probably want to change:
- [The picture](assets/pic.jpg)
- [The header text](html/partials/header.njk)
- [The sidebar text](html/partials/sidebar.njk)
- [The main body text](html/partials/main.njk)
