<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Photoshop Reimagine</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles/main.css?v=<?php echo filemtime('styles/main.css'); ?>" />
    <link rel="icon" href="assets/images/adobe.png"/>
    <link rel="stylesheet" href="https://use.typekit.net/opx6jbj.css?v=18">
  </head>
  <body class="loading">
    <main id="main" class="main">
      <div class="null"></div>
      <section class="fixed-section-container">
        <div class="fixed-section brushes">
          <video
              class="brushes-video"
              preload="metadata"
              muted
              poster="assets/images/brushes/brushes-poster.jpg"
              playsinline
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
              <div class="brushes-content-inner">
                <h2 class="section-title brushes-title">
                  A thousand brushes<br />with greatness.
                </h2>
                <p class="section-intro brushes-intro">
                  Paint and draw with thousands of custom brushes or create your own
                  — Photoshop puts the world’s largest collection at your fingertips
                </p>
                <div class="brushes-button-container">
                  <button class="brushes-button button-sm button-">Get started with brushes</button>
                </div>
              </div>
            </div>
        </div>
        <div class="fixed-section retouch">
        <div class="retouch-slider-container">
            <div class="retouch-slider-image-container retouch-1">
              <img src="assets/images/retouch/retouch-1.jpg" alt="Retouch Before Image" class="retouch-slider-image retouch-image-1"/>
            </div>
            <div class="retouch-slider-image-container retouch-2">
            <div class="retouch-sequence canvid">
              <canvas class="retouch-canvas"></canvas>
            </div>
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
          
          <div class="retouch-pen-options-container">
            <img
              src="assets/images/retouch/retouch-pen-options.jpg"
              alt="Retouch Pen options"
              class="retouch-pen-options"
            />
          </div>
        </div>
      </section>
      <section id="section-intro">
        <div class="intro-container" style="position: fixed; top: 0; width: 100%;">
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
          <div class="intro-video-gradient section-gradient"></div>
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
          <div class="transform-sequence-container">
            <div
              class="transform-sequence t4"
            >
              <canvas class="transform-canvas"></canvas>
            </div>
          </div>
          <div class="transform-title-container">
            
            <div class="transform-rotating-titles-container inactive">
              <h2 class="transform-rotating-title section-title rt1">Create what<br/>your camera<br/>can’t capture.</h2>
              <h2 class="transform-rotating-title section-title rt2">Make quick, automatic selections.</h2>
              <h2 class="transform-rotating-title section-title rt3">Show and hide<br/>with masks.</h2>
              <h2 class="transform-rotating-title section-title rt4">Use unlimited layers.</h2>
              <h2 class="transform-rotating-title section-title rt5">Transform photos into fantasy.</h2>
            </div>
            <div class="transform-copy-container">
              <p class="section-intro transform-copy-p p1">
                Combine photos, graphics, effects, and typography to create any image you can imagine.
              </p>
              <button class="transform-button button-sm button-lt">Try it yourself</button>
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
          <video
            class="ipad-video"
            preload
            muted
            poster="assets/images/ipad/ipad-poster.jpg"
          >
            <source src="assets/videos/ipad/ipad.webm" type="video/webm" />
            <source src="assets/videos/ipad/ipad.mp4" type="video/mp4" />
          </video>
          <div class="ipad-content-container">
            <div class="ipad-content">
              <h2 class="section-title ipad-title">
                Powerful meets portable.
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
        </div>
      </section>
      <section id="section-whatsnew">
        <div class="whatsnew-container">
          <div class="whatsnew-container-inner">
            <div class="wn-cards">
              <h3 class="section-title section-title--sm wn-cards__headline">The creative world runs on Photoshop.</h3>
              
              <div class="wn-cards__grid">
                <div class="wn-cards__card wn-cards__card--hide">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card1.jpg" />
                  <h4 class="wn-cards__subhead">What's New</h4>
                  <p class="wn-cards__copy">Object selection tool</p>
                </div>
                <div class="wn-cards__card wn-cards__card--hide">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card4.jpg" />
                  <h4 class="wn-cards__subhead">Lady Gaga X Adobe</h4>
                  <p class="wn-cards__copy">Discover your Chromatica</p>
                </div>
                
                <div class="wn-cards__card wn-cards__card--hide delay1">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card2.jpg" />
                  <h4 class="wn-cards__subhead">Adobe Live</h4>
                  <p class="wn-cards__copy">Compositing in Photoshop</p>
                </div>
                <div class="wn-cards__card wn-cards__card--hide">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card5.jpg" />
                  <h4 class="wn-cards__subhead">Inspiration</h4>
                  <p class="wn-cards__copy">Maryanne Nguyen</p>
                </div>
                
                <div class="wn-cards__card wn-cards__card--hide delay2">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card3.jpg" />
                  <h4 class="wn-cards__subhead">Creative Challenge</h4>
                  <p class="wn-cards__copy">Play with fire</p>
                </div>
                <div class="wn-cards__card wn-cards__card--hide">
                  <img class="wn-cards__card-img" src="assets/images/whatsnew/wn-card6.jpg" />
                  <h4 class="wn-cards__subhead">Font Giveaway</h4>
                  <p class="wn-cards__copy">Kraken Slab</p>
                </div>
              </div>
            </div>
            
            <div class="wn-grid adobe-article-grid">
              <div class="adobe-article-grid__header">
                <h2 class="adobe-article-grid__title section-title section-title--sm">What do you want to do?</h2>
                
                <div class="adobe-article-grid__filters">
                  <label class="adobe-article-grid__filter"><span>I am</span><select class="adobe-select" id="experience-filter"><option value="experienced">Experienced</option><option selected="" value="beginner">A Beginner</option></select></label>
                  <label class="adobe-article-grid__filter"><span>and I want to</span>
                    <select class="adobe-select" id="category-filter">
                      <!-- Experienced -->                      
                      <option class="filter--experienced" value="remove-objects">Remove objects from photos</option>
                      <option class="filter--experienced" value="editing-techniques">Learn new photo editing techniques</option>
                      <option class="filter--experienced" value="tips-shortcuts">Learn design tips and shortcuts</option>
                      <option class="filter--experienced" value="adjust-colors">Adjust colors</option>
                      <option class="filter--experienced" value="new-effects">Learn new effects</option>
                      
                      <!-- Beginner -->                      
                      <option class="filter--beginner" selected="" value="get-started">Get started with Photoshop</option>
                      <option class="filter--beginner" value="selections">Work with selections</option>
                      <option class="filter--beginner" value="photography">Build my photography skills</option>
                      <option class="filter--beginner" value="add-objects">Add objects and shapes to images</option>
                      <option class="filter--beginner" value="layer-masks">Work with layer masks</option>
                    </select>
                  </label>
                </div>
              </div>
              
              <div class="adobe-article-grid__grid-container"><div class="adobe-article-grid__grid">
                <!-- Experienced/Remove objects from photos -->              
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="remove-objects"><a href="https://helpx.adobe.com/photoshop/how-to/content-aware-hide-objects.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:remove-objects-from-photos/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=P3KMQWK5&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image:url(https://photoshop.com/en/static/images/articles/40.jpg)"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Remove objects with Content-Aware Fill</h3></div></a></div></div>
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="remove-objects"><a href="https://helpx.adobe.com/photoshop/how-to/healing-brush-hide-content.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:remove-objects-from-photos/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=QBWYPN6T&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image:url(https://photoshop.com/en/static/images/articles/38.jpg)"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Clean up imperfections with Spot Healing</h3></div></a></div></div>
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="remove-objects"><a href="https://helpx.adobe.com/photoshop/how-to/clone-stamp-remove-object.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:remove-objects-from-photos/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PGRQQJC2&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image:url(https://photoshop.com/en/static/images/articles/41.jpg)"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Remove objects with Clone Stamp</h3></div></a></div></div>
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="remove-objects"><a href="https://helpx.adobe.com/photoshop/how-to/patch-tool-replace-content.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:remove-objects-from-photos/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=P79NQRT4&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image:url(https://photoshop.com/en/static/images/articles/39.jpg)"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Hide unwanted content with the Patch Tool</h3></div></a></div></div>
                
                <!-- Experienced/Learn new photo editing techniques -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="editing-techniques"><a href="https://helpx.adobe.com/photoshop/how-to/focus-mask-selections.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-photographer/playlist:continuinged/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=R3B5NWSM&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/28.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Make focus-based image selections</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="editing-techniques"><a href="https://helpx.adobe.com/photoshop/how-to/lightroom-to-photoshop.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-photographer/playlist:orientation/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PC1PQN33&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/29.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Use Lightroom and Photoshop together</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="editing-techniques"><a href="https://helpx.adobe.com/photoshop/how-to/selection-masking-space.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-photographer/playlist:orientation/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=STLMM5J5&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/26.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Accurately select image areas</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="editing-techniques"><a href="https://helpx.adobe.com/photoshop/how-to/photoshop-merge-to-hdr.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-photographer/playlist:orientation/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PLHRQDM1&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/27.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Create HDR images</h3></div></a></div></div>
                
                <!-- Experienced/Learn design tips and shortcuts -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="tips-shortcuts"><a href="https://helpx.adobe.com/photoshop/how-to/photoshop-record-action.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-designer/playlist:basictraining/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PQ7SQ8VZ&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/33.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Save time by recording common actions</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="tips-shortcuts"><a href="https://helpx.adobe.com/photoshop/how-to/make-font-variation-photoshop.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-designer/playlist:continuinged/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PTYTQ54Y&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/30.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Create a custom font style on the fly</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="tips-shortcuts"><a href="https://helpx.adobe.com/photoshop/how-to/design-with-artboards.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-designer/playlist:orientation/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=PYPVQ1DX&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/31.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Design for mobile and web using artboards</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="tips-shortcuts"><a href="https://helpx.adobe.com/creative-cloud/how-to/creative-cloud-libraries.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:intermediate-advanced/set-header:ccx-designer/playlist:orientation/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=Q3FWPWNW&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/32.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Manage assets with Libraries</h3></div></a></div></div>
                
                <!-- Experienced/Adjust colors -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="adjust-colors"><a href="https://helpx.adobe.com/photoshop/how-to/brighten-a-photo.html?promoid=Q75XPRXV&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/24.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Shine light on a dark photo</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="adjust-colors"><a href="https://helpx.adobe.com/photoshop/how-to/color-management-basics.html?promoid=QGMZPJGS&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/25.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Work with brushes and color</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="adjust-colors"><a href="https://helpx.adobe.com/photoshop/how-to/make-colors-pop-in-photo.html?promoid=QLD1PDQR&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/23.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Make colors pop</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="adjust-colors"><a href="https://helpx.adobe.com/photoshop/how-to/adjust-vibrance.html?promoid=NYTLR196&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/22.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Adjust color vibrance</h3></div></a></div></div>
                
                <!-- Experienced/Learn new effects -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="new-effects"><a href="https://helpx.adobe.com/photoshop/how-to/stop-motion-photo-animation.html?promoid=QQ42P8ZQ&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/35.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Create a stop motion effect</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="new-effects"><a href="https://helpx.adobe.com/photoshop/how-to/circular-pixel-stretch-effect.html?promoid=QTV3P58P&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/37.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">One-Minute Tutorial</h4><h3 class="adobe-article__title">Create a stretch effect</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="new-effects"><a href="https://helpx.adobe.com/photoshop/how-to/embossed-bevel-effect.html?promoid=QYL4P1JN&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/36.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">One-Minute Tutorial</h4><h3 class="adobe-article__title">Create an embossed effect</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="experienced" category="new-effects"><a href="https://helpx.adobe.com/photoshop/how-to/neon-effect.html?promoid=R726NS2L&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/34.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">One-Minute Tutorial</h4><h3 class="adobe-article__title">Create a neon effect</h3></div></a></div></div>
                
                <!-- Beginner/Get started with Photoshop -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="get-started"><a href="https://helpx.adobe.com/photoshop/how-to/ps-basics-fundamentals.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:get-started/set-header:ccx-designer/playlist:ccl-get-started-1/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RBS7NNBK&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/12.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Get to know Photoshop</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="get-started"><a href="https://helpx.adobe.com/photoshop/how-to/image-resizing-basics.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:get-started/set-header:ccx-designer/playlist:ccl-get-started-1/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RL89NDVH&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/10.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Change image size</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="get-started"><a href="https://helpx.adobe.com/photoshop/how-to/ps-layers-basics.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:get-started/set-header:ccx-designer/playlist:ccl-get-started-1/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RTQCN5DF&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/13.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Work with layers</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="get-started"><a href="https://helpx.adobe.com/photoshop/how-to/combining-images-basics.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:get-started/set-header:ccx-designer/playlist:ccl-get-started-2/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RPZBN94G&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/11.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Combine images and create composites</h3></div></a></div></div>
                
                <!-- Beginner/Work with selections -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="selections"><a href="https://helpx.adobe.com/photoshop/how-to/selection-tools.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:selections/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RYGDN1ND&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/21.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Learn about selections</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="selections"><a href="https://helpx.adobe.com/photoshop/how-to/types-selection-tools.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:selections/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=RGJ8NJLJ&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/20.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Try out simple selection tools</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="selections"><a href="https://helpx.adobe.com/photoshop/how-to/select-subject-one-click.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:selections-more/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=S36FMWXC&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/18.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Select a subject in one click</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="selections"><a href="https://helpx.adobe.com/photoshop/how-to/select-by-color-magic-wand.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:selections/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=S6XGMS6B&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/19.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Select areas with the Magic Wand</h3></div></a></div></div>
                
                <!-- Beginner/Build my photography skills -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="photography"><a href="https://helpx.adobe.com/photoshop/how-to/crop-straighten-to-improve-composition.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:editing-workflow/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=SL4KMDZ7&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/6.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Crop and straighten photos</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="photography"><a href="https://helpx.adobe.com/photoshop/how-to/best-format-to-save-photos.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:editing-workflow-more/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=SPVLM986&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/8.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Save photos in different formats</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="photography"><a href="https://helpx.adobe.com/photoshop/how-to/photoshop-improve-tones-levels.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:editing-workflow/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=SGDJMJQ8&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/7.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Improve contrast and brightness</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="photography"><a href="https://helpx.adobe.com/photoshop/how-to/sharpen-a-photo.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/playlist:topic/set-header:editing-workflow/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=SBNHMNG9&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/9.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Sharpen photos to bring out detail</h3></div></a></div></div>
                
                <!-- Beginner/Add objects and shapes to images -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="add-objects"><a href="https://helpx.adobe.com/photoshop/how-to/add-image-to-layer.html?promoid=T32PLX23&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/3.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Video Tutorial</h4><h3 class="adobe-article__title">Add images to a layered design</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="add-objects"><a href="https://helpx.adobe.com/photoshop/how-to/add-shapes.html?promoid=T6SQLSB2&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/4.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Add vector shapes to your design</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="add-objects"><a href="https://helpx.adobe.com/photoshop/how-to/create-social-media-graphics.html?promoid=SYBNM1S4&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/2.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Add fun graphics for social media</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="add-objects"><a href="https://helpx.adobe.com/photoshop/how-to/custom-shape-tool.html?promoid=TBJRLNL1&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/5.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Work with custom shapes</h3></div></a></div></div>
                
                <!-- Beginner/Work with layer masks -->
                <div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="layer-masks"><a href="https://helpx.adobe.com/photoshop/how-to/layer-mask.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:layer-masking-projects/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=TG8SLJTZ&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/14.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Make my first layer mask</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="layer-masks"><a href="https://helpx.adobe.com/photoshop/how-to/combine-image-layer-mask.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:layer-masking-projects/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=TKZTLF3Y&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/16.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Use layer masks to combine images</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="layer-masks"><a href="https://helpx.adobe.com/photoshop/how-to/make-selection-layer-mask.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:layer-masking-projects/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=NV3KR517&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/17.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Use layer masks with selections</h3></div></a></div></div><div class="adobe-article-grid__grid-cell"><div class="adobe-article" experience="beginner" category="layer-masks"><a href="https://helpx.adobe.com/photoshop/how-to/edit-image-layer-mask.html?playlist=/services/playlist.helpx/products:SG_PHOTOSHOP_1_1/learn-path:key-techniques/set-header:layer-masking-projects/playlist:topic/en_us.json&amp;ref=helpx.adobe.com&amp;promoid=TPQVL9CX&amp;mv=other" class="adobe-article__link"><div class="adobe-article__background-container"><div class="adobe-article__background" style="background-image: url('https://photoshop.com/en/static/images/articles/15.jpg');"></div></div><div class="adobe-article__content"><h4 class="adobe-article__topline">Tutorial</h4><h3 class="adobe-article__title">Use layer masks to adjust parts of a photo</h3></div></a></div></div>
              </div></div>
              
              <div class="adobe-article-grid__actions"><a class="adobe-button adobe-button--is-small" href="https://helpx.adobe.com/photoshop/tutorials.html?promoid=VTC5K5RM&amp;mv=other"><span class="adobe-button__content">More</span></a></div>
            </div>
            
            <div class="wn-inc">
              <div class="wn-inc__ctnr">
                <h3 class="section-title section-title--sm wn-inc__title">What's included with Photoshop?</h3>
                
                <div class="wn-inc__items">
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/apps-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">30+ apps</div>
                      <div class="wn-inc__desc">Explore your creativity with desktop and mobile apps including Photoshop, InDesign, and Premiere Rush.</div>
                    </div>
                  </div>
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/fonts-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">Adobe Fonts</div>
                      <div class="wn-inc__desc">Access thousands of fonts for your projects right within your Creative Cloud apps.</div>
                    </div>
                  </div>
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/behance-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">Behance</div>
                      <div class="wn-inc__desc">Showcase and discover great creative work.</div>
                    </div>
                  </div>
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/cloud-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">Creative Cloud Libraries</div>
                      <div class="wn-inc__desc">Save, browse, and share assets from Libraries right inside your Creative Cloud apps.</div>
                    </div>
                  </div>
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/portfolio-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">Adobe Portfolio</div>
                      <div class="wn-inc__desc">Create and customize your own portfolio website.</div>
                    </div>
                  </div>
                  <div class="wn-inc__item">
                    <img class="wn-inc__icon" src="assets/images/whatsnew/storage-icon.svg" alt="">
                    <div class="wn-inc__copy">
                      <div class="wn-inc__subtitle">Storage</div>
                      <div class="wn-inc__desc">Get 100GB of cloud storage for file sharing and collaboration.</div>
                    </div>
                  </div>
                </div>
                
                <div class="wn-inc__actions">
                  <a href="#">Learn more about online services</a>
                </div>
              </div>
            </div>
            
            <!-- Pulled from the Photoshop website -->
            <div class="wn-plans">
              <h3 class="section-title section-title--sm">Find the plan that's right for you.</h3>
              
              <div class="adobe-plan-grid__grid">
                <div class="adobe-plan-grid__grid-cell">
                  <div class="adobe-plan">
                    <div class="adobe-plan__content">
                      <h3 class="adobe-plan__title">Photography (20GB)</h3>
                      <div class="adobe-auto-paragraph adobe-plan__description">
                        <p>Get Lightroom, Lightroom Classic, and Photoshop on desktop and iPad.</p>
                      </div>
                      
                      <div class="adobe-auto-paragraph adobe-plan__price">
                        <p>US$9.99/mo</p>
                      </div>
                      
                      <div class="adobe-plan__actions">
                        <span>
                          <a href="https://www.adobe.com/creativecloud/photography.html?promoid=695P7PY3&amp;mv=other">Learn more</a>
                          <span class="adobe-plan__action-sep">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        </span>
                        <span>
                          <a href="https://commerce.adobe.com/checkout/email/?cli=adobe_com&amp;co=US&amp;lang=en&amp;items[0][id]=08823B2E8361CE018F9A2C51CF489283&amp;items[0][cs]=0&amp;promoid=51TC8Y9F&amp;mv=other">Buy now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="adobe-plan-grid__grid-cell">
                  <div class="adobe-plan">
                    <div class="adobe-plan__content">
                      <h3 class="adobe-plan__title">Photoshop</h3>
                      <div class="adobe-auto-paragraph adobe-plan__description">
                        <p>Get Photoshop on desktop and iPad as part of Creative Cloud.</p>
                      </div>
                      
                      <div class="adobe-auto-paragraph adobe-plan__price">
                        <p>US$20.99/mo</p>
                      </div>
                      
                      <div class="adobe-plan__actions">
                        <span>
                          <a href="https://commerce.adobe.com/checkout?cli=adobe_com&amp;co=US&amp;lang=en&amp;items[0][id]=30404A88D89A328584307175B8B27616&amp;items[0][cs]=0&amp;promoid=55KD8TKD&amp;mv=other">Buy now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="adobe-plan-grid__grid-cell">
                  <div class="adobe-plan">
                    <div class="adobe-plan__content">
                      <h3 class="adobe-plan__title">All Apps</h3>
                      
                      <div class="adobe-auto-paragraph adobe-plan__description">
                        <p>Get Photoshop on desktop and iPad, plus the entire collection of creative apps.</p>
                      </div>
                      
                      <div class="adobe-auto-paragraph adobe-plan__price">
                        <p>US$52.99/mo</p>
                      </div>
                      
                      <div class="adobe-plan__actions">
                        <span>
                          <a href="https://www.adobe.com/creativecloud/plans.html?promoid=5NHJ8BM8&amp;mv=other">Learn more</a>
                          <span class="adobe-plan__action-sep">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        </span>
                        
                        <span>
                          <a href="https://commerce.adobe.com/checkout?cli=mini_plans&amp;co=US&amp;code=eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LTEuY2VyIn0.eyJqdGkiOiJmOTUwZmNiMC02MjUxLTQzY2EtYTA3ZC05MzI0MTUzYTc3ZDYiLCJpc3MiOiJpbXMtbmExIiwic3ViIjoiMEQ5QzQ4NUU1REE2MTBDQjBBNDk1RkNFQEFkb2JlSUQiLCJhdWQiOiJ1bmlmaWVkX2NoZWNrb3V0X2NsaWVudF9hcHAiLCJpYXQiOjE1NzExODY4OTcsImV4cCI6MTU3MTE4ODY5Nywic2NwIjpbIkFkb2JlSUQiLCJvcGVuaWQiLCJzYW8uc3RvY2siLCJhZGRpdGlvbmFsX2luZm8ucm9sZXMiLCJhZGRpdGlvbmFsX2luZm8udmF0X2lkIiwiYWRkaXRpb25hbF9pbmZvLmRvYiIsInVwZGF0ZV9wcm9maWxlLmNvdW50cnlDb2RlIl0sInNpZCI6IjE1NzExNjQzNjQwMTVfZTBlMGEzNzAtM2VmZi00YTE2LWI4YzctNGNkN2QzZDYzYzMwX3VlMSIsImZnIjoiVDNJM0FYSUVYTE81MkhXNkNPWUxBS1FBSVU9PT09PT0iLCJtb2kiOiI1ZTMzNWZkMSIsInR5cGUiOiJ0YWMifQ.NAqcJFgmohdxdtMOb-MOh6wyxievQMmRv9Y-apVRql2mp11n2ZkxHMBf7YHTXSGJbb_1QTPuH8PwR4dI26r1gO8RYbf_J_B2VUnvvCZk8meYy_Ywtz-pcalGyY83PAs4BiAUV6kJ-hNlzII-TiCgLrq0NyU7y0eHennndXEwOIBvK1k09lNN2z76QKjwRXbbL1oLqRl_d5Azjo-j5PPculR2cSZEwS-gtRU21tiqiTf3tsf2Xz40apD0vekHu3_HjoE4LS3WYV9Hd_mviOaerZ671ckMjE_DKCTby84_orWV4yYH1dsM3ppI6cbhzoE9VMdwWXcBuSN33_sRVC0ckQ&amp;ctx=fp&amp;items%5B0%5D%5Bcs%5D=0&amp;items%5B0%5D%5Bid%5D=632B3ADD940A7FBB7864AA5AD19B8D28&amp;lang=en&amp;promoid=5JRH8GC9&amp;mv=other">Buy now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="adobe-plan-grid__grid-cell">
                  <div class="adobe-plan">
                    <div class="adobe-plan__content">
                      <h3 class="adobe-plan__title">Students and Teachers</h3>
                      
                      <div class="adobe-auto-paragraph adobe-plan__description">
                        <p>Save over 60% on the entire collection of Creative Cloud apps.</p>
                      </div>
                      
                      <div class="adobe-auto-paragraph adobe-plan__price">
                        <p>US$19.99/mo</p>
                      </div>
                      
                      <div class="adobe-plan__actions">
                        <span>
                          <a href="https://www.adobe.com/creativecloud/buy/students.html?promoid=5F1G8L3B&amp;mv=other">Learn more</a>
                          
                          <span class="adobe-plan__action-sep">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        </span>
                        
                        <span>
                          <a href="https://commerce.adobe.com/checkout?cli=mini_plans&amp;co=US&amp;code=eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LTEuY2VyIn0.eyJqdGkiOiI0MmUyYzQwMS00YTk1LTRkN2YtYmM3OS0yNDU0MzUxZWRiMzkiLCJpc3MiOiJpbXMtbmExIiwic3ViIjoiMEQ5QzQ4NUU1REE2MTBDQjBBNDk1RkNFQEFkb2JlSUQiLCJhdWQiOiJ1bmlmaWVkX2NoZWNrb3V0X2NsaWVudF9hcHAiLCJpYXQiOjE1NzExODY3OTUsImV4cCI6MTU3MTE4ODU5NSwic2NwIjpbIkFkb2JlSUQiLCJvcGVuaWQiLCJzYW8uc3RvY2siLCJhZGRpdGlvbmFsX2luZm8ucm9sZXMiLCJhZGRpdGlvbmFsX2luZm8udmF0X2lkIiwiYWRkaXRpb25hbF9pbmZvLmRvYiIsInVwZGF0ZV9wcm9maWxlLmNvdW50cnlDb2RlIl0sInNpZCI6IjE1NzExNjQzNjQwMTVfZTBlMGEzNzAtM2VmZi00YTE2LWI4YzctNGNkN2QzZDYzYzMwX3VlMSIsImZnIjoiVDNJMjRYSUVYTE81MkhXNkNPWUxBS1FBSVU9PT09PT0iLCJtb2kiOiI1NzdkZTRlMiIsInR5cGUiOiJ0YWMifQ.FGpFDt-CfV0cUT6L0dvW9gUPO3cuTlJDxJOGRioTQ1c69iexX6HjZjMRtghaqPQYVmMVrTcvvMi_AqwCe-cNd3l8_pWMgLAru740KLC_upYd7CKvE1XH5PiaggmQ8J0YVfyd22FpXYgzc0rMUeM82Q-0abjPSVvbERLEb4gZiEXpMsTbkBin1ch6jCupegCbKb_p7AzeFUTyeJ15xCxo6DAR3mH4D9p9t19kE7yhjztlUMk-SLW2XVrQ0Mf64A-cdjz9i_tHKMGD48BhZM_Nf7rl38FUPlA_8eottJsY5kPGtcoUMcS4OAaBPu0029NYkLFAdRQA9qYU-kkbP-dAlA&amp;ctx=fp&amp;items%5B0%5D%5Bcs%5D=0&amp;items%5B0%5D%5Bid%5D=29A572E433E1EBD4E4AF659D8F34C3CD&amp;lang=en&amp;promoid=599F8PTC&amp;mv=other">Buy now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
              <div class="adobe-plan-grid__actions"><a class="adobe-button adobe-button--is-raised adobe-button--is-small" href="https://www.adobe.com/creativecloud/plans.html?promoid=5S7K86W7&amp;mv=other"><span class="adobe-button__content">See all plans</span></a></div>
            </div>
            
            <!-- Pulled from the Photoshop website -->
            <div class="wn-products">
              <h3 class="section-title section-title--sm">Also part of the Photoshop family.</h3>
              
              <div class="adobe-card-block__grid"><div class="adobe-card-block__grid-item"><div class="adobe-card"><div class="adobe-card__background" style="background-image:url(https://photoshop.com/en/static/images/family-products/lightroom-cc-small.jpg)"></div><div class="adobe-card__content"><img class="adobe-card__icon" src="https://photoshop.com/en/static/images/apps/lightroom-cc.svg" alt="Lightroom"><div class="adobe-card__caption"><div class="adobe-card__devices"><img class="adobe-card__device" src="https://photoshop.com/en/static/images/device-desktop.png" alt="Lightroom for desktop"><img class="adobe-card__device" src="https://photoshop.com/en/static/images/device-web.png" alt="Lightroom for web"><img class="adobe-card__device" src="https://photoshop.com/en/static/images/device-phone.png" alt="Lightroom for phone"></div><h3 class="adobe-card__title">Lightroom</h3><div class="adobe-auto-paragraph adobe-card__description"><p>Capture amazing photos, anywhere you are.</p></div></div><div class="adobe-card__actions"><a class="adobe-button adobe-button--is-small" href="https://www.adobe.com/products/photoshop-lightroom/free-trial-download.html?promoid=BRLW37J1#mini-plans-web-cta-photoshop-lightroom-car"><span class="adobe-button__content">Learn more</span></a></div></div></div></div><div class="adobe-card-block__grid-item"><div class="adobe-card"><div class="adobe-card__background" style="background-image:url(https://photoshop.com/en/static/images/family-products/ps-express-2-small.jpg)"></div><div class="adobe-card__content"><img class="adobe-card__icon" src="https://photoshop.com/en/static/images/apps/photoshop-express.svg" alt="Photoshop Express"><div class="adobe-card__caption"><div class="adobe-card__devices"><img class="adobe-card__device" src="https://photoshop.com/en/static/images/device-phone.png" alt="Photoshop Express for phone"></div><h3 class="adobe-card__title">Photoshop Express</h3><div class="adobe-auto-paragraph adobe-card__description"><p>Edit and share photos on your mobile device.</p></div></div><div class="adobe-card__actions"><a class="adobe-button adobe-button--is-small" href="https://www.adobe.com/products/photoshop-express.html?promoid=65FN7TP4&amp;mv=other"><span class="adobe-button__content">Learn more</span></a></div></div></div></div><div class="adobe-card-block__grid-item"><div class="adobe-card"><div class="adobe-card__background" style="background-image:url(https://photoshop.com/en/static/images/family-products/ps-camera-small.jpg)"></div><div class="adobe-card__content"><img class="adobe-card__icon" src="https://photoshop.com/en/static/images/apps/photoshop-camera.svg" alt="Photoshop Camera"><div class="adobe-card__caption"><div class="adobe-card__devices"><img class="adobe-card__device" src="https://photoshop.com/en/static/images/device-phone.png" alt="Photoshop Camera for phone"></div><h3 class="adobe-card__title">Photoshop Camera</h3><div class="adobe-auto-paragraph adobe-card__description"><p>Create and share amazing photos with the camera-effects app powered by AI.</p></div></div><div class="adobe-card__actions"><a class="adobe-button adobe-button--is-small" href="https://www.adobe.com/products/photoshop-camera.html?promoid=5WYL8356&amp;mv=other"><span class="adobe-button__content">Learn more</span></a></div></div></div></div></div>
            </div>
            
            <div class="wn-cc">
              <img src="assets/images/whatsnew/cc-rainbow.png" class="wn-cc__icon" alt="">
              <h3 class="section-title section-title--sm wn-cc__title">Creativity for all.</h3>
              
              <p class="wn-cc__desc">Photography. Video. Design. UX. 3D and AR. Creative Cloud has everything you need, wherever your imagination takes you.</p>
              <a href="#">Learn more</a>
            </div>
            
            <img src="assets/images/footer.jpg" class="footer-img" style="display: block;" />
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
    
    <script src="scripts/main.js?v=<?php echo filemtime('scripts/main.js'); ?>"></script>
    <script src="scripts/whatsnew.js?v=<?php echo filemtime('scripts/whatsnew.js'); ?>"></script>
    
  </body>
</html>
