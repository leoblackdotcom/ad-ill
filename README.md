# Adobe Photoshop Reimagine Prototype

### Dependencies

**Server/Build System**

There is currently no build system for this prototype and no server-side languages, so you can run any local server to serve the files. For example, a python http server (`python -m http.server 8000`) will do fine.

**CSS**:

Styling is handled in Sass. You should run the Sass CLI to watch for changes in the `scss` files.

Install: `npm install -g sass`

Watch for changes:

From the `src/styles` directory: `sass --watch main.scss:main.css`

optionally, compress and include sourcemaps:

`sass --watch main.scss:main.css --style=compressed --sourcemap`

`main.scss` imports all other relevant scss files in its compilation.

**JS**

The site relies heavily on the GSAP animation platform:

* [Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
* [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

The site uses a javascript module / submodule pattern, where all submodules are initiated via an `init` method on DOMContentLoaded from `main.js`.
