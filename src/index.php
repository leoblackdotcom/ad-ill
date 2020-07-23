<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Photoshop Reimagine</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="styles/photoshop-localnav.css?v=<?php echo filemtime('styles/photoshop-localnav.css'); ?>" />
  <link rel="stylesheet" href="styles/main.css?v=<?php echo filemtime('styles/main.css'); ?>" />
  <link rel="icon" href="assets/images/adobe.png" />
  <link rel="stylesheet" href="https://use.typekit.net/opx6jbj.css?v=18">
</head>

<body class="loading">
  <header class="header-container headroom">
    <?php require_once('includes/nav.php') ?>
  </header>
  <main id="main" class="main">
    <div class="null"></div>
    <section class="fixed-section-container">
      <div class="fixed-section brushes">
        <video class="brushes-video" preload="metadata" muted poster="assets/images/brushes/brushes-poster.jpg"
          playsinline>
          <source src="assets/videos/brushes/brushes-vid.webm" type="video/webm" />
          <source src="assets/videos/brushes/brushes-vid.mp4" type="video/mp4" />
        </video>
        <div class="brushes-content-container">
          <div class="brushes-content-inner">
            <h2 class="section-title brushes-title">
              A thousand brushes<br />with greatness.
            </h2>
            <p class="section-intro brushes-intro">
              Paint and draw with thousands of custom brushes or create your own
              — Photoshop puts the world’s largest collection at your fingertips.
            </p>
            <div class="brushes-button-container">
              <a href="https://www.adobe.com/products/photoshop/photoshop-brushes.html"
                class="brushes-button button-sm button-">Get started with brushes</a>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-section retouch">
        <div class="retouch-slider-container">
          <div class="retouch-slider-image-container retouch-1">
            <img src="assets/images/retouch/retouch-1.jpg" alt="Retouch Before Image"
              class="retouch-slider-image retouch-image-1" />
          </div>
          <div class="retouch-slider-image-container retouch-2">
            <div class="retouch-sequence">
              <canvas class="retouch-canvas"></canvas>
              <img src="assets/images/retouch/retouch-2.jpg" alt="Retouch After Image"
              class="retouch-slider-image retouch-image-2" />
            </div>
          </div>
        </div>

        <div class="retouch-content-container">
          <h2 class="retouch-title section-title">
            <span class="retouch-title-line l1">Retouch.</span>
            <span class="retouch-title-line l2">Remix.</span>
            <span class="retouch-title-line l3">Reimagine.</span>
          </h2>
          <p class="section-intro retouch-intro">Make portraits pop and expressions more expressive. Remove objects,
            retouch, remix, and recolor. With powerful editing and effects tools, you can turn imagery into artistry.
          </p>
          <a href="https://helpx.adobe.com/photoshop/how-to/face-paint.html"
            class="button-sm button-lt retouch-button">Try it yourself</a>
        </div>
      </div>
    </section>
    <section id="section-intro">
      <div class="intro-container" style="position: fixed; top: 0; width: 100%;">
        <video class="intro-video" preload="metadata" muted poster="assets/images/intro/intro-poster.jpg">
          <source src="assets/videos/intro/intro.webm" type="video/webm" />
          <source src="assets/videos/intro/intro.mp4" type="video/mp4" />
        </video>
        <div class="intro-video-gradient section-gradient"></div>
        <div class="intro-content-container">
          <div class="intro-content-inner">
            <img src="assets/images/intro/ps-logo.png" alt="Photoshop Logo" class="intro-ps-logo" />
            <h1 class="intro-title">
              <span class="intro-title-line l1">Make.</span>
              <span class="intro-title-line l2">Believe.</span>
              <span class="intro-title-line l3">Photoshop.</span>
            </h1>
            <p class="intro-p">
              From photo editing and compositing to digital painting, animation,
              and graphic design — whatever you can imagine, you can create it
              in Photoshop.
            </p>
            <div class="intro-buttons">
              <button class="intro-button trial button-lt">Free Trial</button>
              <button class="intro-button buy">Buy Now</button>
            </div>
            <p class="intro-subtext">Starting at $20.99/mo</p>
          </div>
        </div>
        <div class="intro-scroll-container">
          <a href="#" class="scroll-down-link">
            <img src="assets/images/intro/chevron-down.png" alt="Scroll Down" class="intro-scroll-indicator">
          </a>
        </div>
      </div>
    </section>
    <section id="section-transform" class="section">
      <div class="transform-container">
        <div class="transform-sequence-container">
          <div class="transform-sequence t4">
            <canvas class="transform-canvas"></canvas>
          </div>
        </div>
        <div class="transform-title-container">

          <div class="transform-rotating-titles-container inactive">
            <h2 class="transform-rotating-title section-title">
              <span class="transform-title-line rt1">Transform photos</span>
              <span class="transform-title-line rt2">into flights of pure imagination.</span>
            </h2>
          </div>
          <div class="transform-copy-container">
            <p class="section-intro transform-copy-p p1">
            With one-click selections,<br/>
            easy masking, and unlimited<br/>
            layers, you can turn any<br/>
            photo into fantasy.
            </p>
            <a href="https://create.adobe.com/2019/7/16/how_to_make_a_photo_.html"
              class="transform-button button-sm button-lt">Try it yourself</a>
          </div>
        </div>
      </div>
    </section>
    <section id="section-brushes">
      <div class="brushes-container">
        <div class="spacer" style="height: 100vh;"></div>
      </div>
    </section>
    <section id="section-retouch">
      <div class="retouch-container">
      </div>
    </section>
    <section id="section-ipad">
      <div class="ipad-container">
        <video class="ipad-video" preload muted poster="assets/images/ipad/ipad-poster.jpg">
          <source src="assets/videos/ipad/ipad.webm" type="video/webm" />
          <source src="assets/videos/ipad/ipad.mp4" type="video/mp4" />
        </video>
        <div class="ipad-content-container">
          <div class="ipad-content">
            <h2 class="section-title ipad-title">
              Go where your<br/>imagination<br/>takes you.
            </h2>
            <p class="section-intro ipad-intro">
              The creative power of Photoshop is now on your iPad. Open full-size PSDs, create sophisticated composites,
              retouch images, and control brushes with your finger or Apple Pencil.
            </p>
            <div class="ipad-button-container">
              <a href="#" class="ipad-app-store-link">
                <img src="assets/images/ipad/app-store-logo.png" alt="Download Photoshop for the iPad"
                  class="ipad-app-store-logo">
              </a>
              <a href="https://www.adobe.com/products/photoshop/ipad.html" class="ipad-learn-more-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <?php require_once('includes/whatsnew.php') ?>
  </main>

  <div class="loader-container">
    <div class="loader-inner">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>

  <div class="screensize-container">
    <h2 class="screensize-warning">
      <span class="screensize-warning-line width">You must view this at a browser width of 1024px or greater</span>
      <span class="screensize-warning-line height">You must view this on a browser height of 600px or greater</span>
    </h2>
  </div>

  <script src="scripts/libs/gsap/gsap.min.js?v=2"></script>
  <script src="scripts/libs/gsap/CSSRulePlugin.min.js?v=2"></script>
  <script src="scripts/libs/gsap/ScrollTrigger.min.js?v=2"></script>
  <script src="scripts/libs/gsap/EasePack.min.js?v=2"></script>
  <script src="scripts/libs/imagesloaded.pkgd.min.js"></script>
  <script src="scripts/libs/headroom.min.js"></script>
  <script src="scripts/sceneConfig.js"></script>
  <script src="scripts/main.js?v=<?php echo filemtime('scripts/main.js'); ?>"></script>
  <script src="scripts/nav.js?v=<?php echo filemtime('scripts/nav.js'); ?>"></script>
  <script src="scripts/whatsnew.js?v=<?php echo filemtime('scripts/whatsnew.js'); ?>"></script>
</body>

</html>