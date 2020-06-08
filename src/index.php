<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Photoshop Reimagine</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles/main.css?v=<?php echo filemtime('styles/main.css'); ?>" />

    <link rel="stylesheet" href="https://use.typekit.net/opx6jbj.css?v=18">
  </head>
  <body class="loading">
    <main id="main" class="main">
      <div class="null"></div>
      <div class="scroll-sequence">
        <div class="sequence-container">
          <div class="image-sequence">
            <div class="canvas-container">
              <div class="canvas-wrapper">
                <!--<canvas></canvas>-->
                <img
                  class="canvas transform-sequence t1"
                  src="assets/images/transform/01.jpg"
                  alt="transform"
                />
                <img
                  class="canvas transform-sequence t2"
                  src="assets/images/transform/02.jpg"
                  alt="transform"
                />
                <img
                  class="canvas transform-sequence t3"
                  src="assets/images/transform/03.gif"
                  alt="transform"
                />
                <div
                  class="transform-sequence t4 canvid"
                ></div>
                <img
                  class="canvas transform-sequence t5"
                  src="assets/images/transform/fish-blend.png"
                  alt="transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="section-intro">
        <div class="intro-container">
          <video
            class="intro-video"
            preload="metadata"
            loop
            muted
            poster="assets/images/intro/intro-poster.jpg"
            autoplay
          >
            <source src="assets/videos/intro/intro.webm" type="video/webm" />
            <source src="assets/videos/intro/intro.mp4" type="video/mp4" />
          </video>
          <div class="header-container">
            <img
              src="assets/images/header.jpg"
              alt="Adobe Header"
              class="header-image"
            />
          </div>
          <div class="intro-content-container">
            <img
              src="assets/images/intro/ps-logo.png"
              alt="Photoshop Logo"
              class="intro-ps-logo"
            />
            <h1 class="intro-title">Make.<br />Believe.<br />Photoshop.</h1>
            <p class="intro-p">
              From photo editing and compositing to digital painting, animation,
              and graphic design — whatever you can imagine, you can create it
              in Photoshop.
            </p>
            <div class="intro-buttons">
              <button class="intro-button trial">Free Trial</button>
              <button class="intro-button buy">Buy Now</button>
            </div>
            <p class="intro-subtext">Starting at $20.99/mo</p>
          </div>
        </div>
      </section>
      <section id="section-transform" class="section">
        <div class="transform-container">
          <div class="transform-title-container">
            <h2 class="transform-title section-title">
              Transform photos into fantasy
            </h2>
            <div class="transform-copy-container">
              <p class="section-intro transform-copy-p p1">
                Combine photos, graphics, effects, and typography to create what
                your camera can’t capture.
              </p>
              <ul class="transform-feature-list">
                <li class="transform-feature p2">
                  Create with unlimited layers
                </li>
                <li class="transform-feature p3">Easy automatic selections</li>
                <li class="transform-feature p4">Show and hide with masks</li>
                <li class="transform-feature p5">
                  Merge and remix with blend modes
                </li>
              </ul>
            </div>
            <div class="transform-panel-container">
              <img
                src="assets/images/transform/transform-panel.jpg"
                alt="Transform Panel"
                class="transform-panel"
              />
            </div>
          </div>
          <div class="transform-tools-container">
            <img
              src="assets/images/transform/transform-tools.jpg"
              alt="Transform Tools"
              class="transform-tools"
            />
          </div>
          <div class="transform-masks-panel-container">
            <img
              src="assets/images/transform/masks-panel.jpg"
              alt="Masks Panel"
              class="transform-masks-panel"
            />
          </div>
          <div class="transform-blend-panel-container">
            <img
              src="assets/images/transform/blend-panel.jpg"
              alt="Blend Panel"
              class="transform-blend-panel"
            />
          </div>
        </div>
      </section>
      <section id="section-brushes">
        <div class="brushes-container">
          <video
            class="brushes-video"
            preload="metadata"
            muted
            loop
            poster="assets/images/brushes/brushes-poster.jpg"
          >
            <source
              src="assets/videos/brushes/brushes-vid.webm"
              type="video/webm"
            />
            <source
              src="assets/videos/brushes/brushes-vid.mp4"
              type="video/mp4"
            />
          </video>
          <div class="brushes-content-container">
            <h2 class="section-title brushes-title">
              A thousand brushes<br />with greatness.
            </h2>
            <p class="section-intro brushes-intro">
              Paint and draw with thousands of custom brushes or create your own
              — Photoshop puts the world’s largest collection at your fingertips
            </p>
            <div class="brushes-button-container">
              <button class="brushes-button button-sm">Get started with brushes</button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-retouch">
        <div class="retouch-container">
          <div class="retouch-slider-container">
            <div class="retouch-slider-image-container retouch-1">
              <img src="assets/images/retouch/retouch-1.jpg" alt="Retouch Before Image" class="retouch-slider-image retouch-image-1"/>
            </div>
            <div class="retouch-slider-image-container retouch-2">
              <img src="assets/images/retouch/retouch-2.jpg" alt="Retouch After Image" class="retouch-slider-image retouch-image-2"/>
            </div>
            <div class="retouch-slide-handle-container">
              <div class="retouch-slide-handle"></div>
            </div>
          </div>
          <div class="retouch-content-container">
            <h2 class="retouch-title section-title">
              <span class="retouch-title-line l1">Retouch.</span>
              <span class="retouch-title-line l2">Remix.</span>
              <span class="retouch-title-line l3">Reimagine.</span>
            </h2>
            <p class="section-intro retouch-intro">Make portraits pop and expressions more expressive. Remove objects, retouch, remix, and recolor. With powerful editing and effects tools, you can turn imagery into artistry.</p>
            <button class="button-sm button-lt retouch-button">Try it yourself</button>
          </div>
          <div class="retouch-tools-container">
            <img
              src="assets/images/transform/transform-tools.jpg"
              alt="Retouch Tools"
              class="retouch-tools"
            />
          </div>
          <div class="retouch-brushes-container">
            <img
              src="assets/images/retouch/retouch-brushes.jpg"
              alt="Retouch Brushes"
              class="retouch-tools"
            />
          </div>
          <div class="retouch-masks-container">
            <img
              src="assets/images/retouch/retouch-masks.jpg"
              alt="Retouch Masks"
              class="retouch-masks"
            />
          </div>
          <div class="retouch-tools-container-2">
            <img
              src="assets/images/transform/transform-tools.jpg"
              alt="Retouch Tools Zoomed In"
              class="retouch-tools-2"
            />
          </div>
          <div class="retouch-pen-tools-container">
            <img
              src="assets/images/retouch/retouch-pen-tools.jpg"
              alt="Retouch Pen Tools"
              class="retouch-pen-tools"
            />
          </div>
          <div class="retouch-pen-options-container">
            <img
              src="assets/images/retouch/retouch-pen-options.jpg"
              alt="Retouch Pen options"
              class="retouch-pen-options"
            />
          </div>
        </div>
      </section>
      <section id="section-ipad">
        <div class="ipad-container">
          <video
            class="ipad-video"
            preload
            loop
            muted
            poster="assets/images/ipad/ipad-poster.jpg"
            autoplay
          >
            <source src="assets/videos/ipad/ipad.webm" type="video/webm" />
            <source src="assets/videos/ipad/ipad.mp4" type="video/mp4" />
          </video>
          <div class="ipad-content-container">
            <h2 class="section-title ipad-title">
              Powerful meets portable
            </h2>
            <p class="section-intro ipad-intro">
              The creative power of Photoshop is now on your iPad. Open full-size PSDs, create sophisticated composites, retouch images, and control brushes with your finger or Apple Pencil. 
            </p>
            <div class="ipad-button-container">
              <a href="#" class="ipad-app-store-link">
                <img src="assets/images/ipad/app-store-logo.png" alt="Download Photoshop for the iPad" class="ipad-app-store-logo">
              </a>
              <a href="#" class="ipad-learn-more-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section id="section-whatsnew">
        <div class="whatsnew-container">
          <div class="whatsnew-container-inner">
            <img src="assets/images/whatsnew/whatsnew.jpg" alt="What's New Placeholder Image" class="whatsnew-image">
          </div>
        </div>
      </section>
    </main>

    <div class="loader-container">
      <div class="loader-inner">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
    </div>

    <script src="scripts/libs/gsap/gsap.min.js"></script>
    <script src="scripts/libs/gsap/CSSRulePlugin.min.js"></script>
    <script src="scripts/libs/gsap/ScrollTrigger.min.js"></script>
    <script src="scripts/libs/gsap/EasePack.min.js"></script>
    <script src="scripts/libs/imagesloaded.pkgd.min.js"></script>
    <script src="scripts/libs/canvid.min.js"></script>
    
    <script src="scripts/main.js?v=<?php echo filemtime('scripts/main.js'); ?>"></script>
    <script src="scripts/whatsnew.js?v=<?php echo filemtime('scripts/whatsnew.js'); ?>"></script>
    
  </body>
</html>
