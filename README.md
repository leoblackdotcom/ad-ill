# Adobe Photoshop Reimagine Prototype

[Pre-Beebly Staging Link](http://photoshop.whoisowenjones.com/src/)

### Get Started

Install dependencies:

`npm install`

Run server and watch php, scss:

`gulp`

**CSS (Old)**:

Styling is handled in Sass. You should run the Sass CLI to watch for changes in the `scss` files.

Install: `npm install -g sass`

Watch for changes:

From the `src/styles` directory: `sass --watch main.scss:main.css`

optionally, compress and include sourcemaps:

`sass --watch main.scss:main.css --style=compressed --source-map`

`main.scss` imports all other relevant scss files in its compilation.

**JS**

The site relies heavily on the GSAP animation platform:

* [Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
* [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

The site uses a javascript module / submodule pattern, where all submodules are initiated via an `init` method on DOMContentLoaded from `main.js`.

The site nav utilizes [headroom](https://wicky.nillia.ms/headroom.js/) for the sticky / collapsing nav

### Image Sequences

The image sequences are built in Adobe After Effects. They match the XD dimensions at 1691x1101, but we export the images at a width of 1280px with an FPS of 15, and optimize at 80% compression with image optim. 

### Imports from Adobe.com

The `nav` and `whatsnew` sections pull a lot of static code from [the Adobe Photoshop Website](https://www.adobe.com/products/photoshop.html). They will not remain current, nor will they update any imagery. They are also not inted to be fully functional recreations of their counterparts, only to convey the basic functionality of the Photoshop website.

