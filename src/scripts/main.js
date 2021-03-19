
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CSSRulePlugin);

const ps = (function () {

  //gsap timelines
  let tlIntro, tlTransform, tlBrushes, tlBrushesContent, tlBrushesContentOut, tlRetouch, tlWhatsNew, tliPad, tliPadContent, tliPadContentOut;

  //animated image sequences
  let retouchImg, retouchContext, $retouchCanvas;
  let transformImg, transformContext, $transformCanvas

  //dom references
  let $retouch, $slide, $body, $retouchSequence, $transformSequence, $introVideo, $brushesVideo, $ipadVideo;

  const appState = {
    curSceneIndex: 0,
    screenDims: {},
    scrollDirection: 0,
  };

  const transformSection = {
    animationComplete: false, // animation complete state
    autoScrollDown: false, // toggled boolean to prevent the scrollTrigger onUpdate event firing when forcing window.scrollTo
    autoScrollUp: false // toggled boolean to prevent the scrollTrigger onUpdate event firing when forcing window.scrollTo
  }

  const retouchSection = {
    animationComplete: false, // animation complete state
    autoScrollDown: false, // toggled boolean to prevent the scrollTrigger onUpdate event firing when forcing window.scrollTo
    autoScrollUp: false // toggled boolean to prevent the scrollTrigger onUpdate event firing when forcing window.scrollTo
  }

  //INITIALIZATION

  initSubmodules = function () {
    ps.whatsNewModule.init();
    ps.navModule.init();
  };

  initStickyNav = function(){
    const header = document.querySelector('.headroom');
    const headerOptions = {
      offset: 0, //px before header is first unpinned
    }
    const headroom = new Headroom(header, headerOptions);
    headroom.init({});
  }

  addDomReferences = function () {
    $retouch = document.querySelector("#section-retouch");
    $slide = document.querySelector(".retouch-2");
    $body = document.getElementsByTagName("body")[0];
    $transformSequence = document.querySelector(".transform-sequence.t4");
    $retouchSequence = document.querySelector(".retouch-sequence");
    $retouchContentContainer = document.querySelector('.retouch-content-container');
    $introVideo = document.querySelector('.intro-video');
    $brushesVideo = document.querySelector('.brushes-video');
    $ipadVideo = document.querySelector('.ipad-video');
    $retouchCanvas = document.querySelector('.retouch-canvas');
    $transformCanvas = document.querySelector('.transform-canvas');
    $scrollDownLink = document.querySelector('.scroll-down-link');
  };

  addListeners = function () {
    addUnloadListener();
    addVideoListeners();
    addResizeListeners();
    addScrollDownListener();
  };

  addResizeListeners = function(){
    window.addEventListener('resize', onWindowResize);
  }

  addVideoListeners = function(){
    $brushesVideo.addEventListener('ended',onBrushesVideoEnded);
    $ipadVideo.addEventListener('ended',oniPadVideoEnded);
  }

  addUnloadListener = function () {
    window.addEventListener("beforeunload", onBeforeUnload);
  };

  addScrollDownListener = function(){
    $scrollDownLink.addEventListener('click',onScrollDownLinkClick);
  }

  //EVENT-RELATED

  resetTimeline = function(timelineRef){
    timelineRef.progress(0).pause();
  }

  resetVideo = function ($video) {
    $video.pause();
    $video.currentTime = 0;
  };

  playVideo = function ($video) {
    $video.play();
  };

  conditionallyPlayIntro = function(){

    const isVideoPlaying = checkIfVideoPlaying($introVideo);
    if (!isVideoPlaying){
      $introVideo.play();
    }
  }

  playIntroSequence = function(){
    tlIntro.restart();
  }

  //CANVAS ANIMATIONS

  initCanvas = function () {
    const transformConfig = sceneConfig.videos.transform;
    $transformCanvas.width = transformConfig.width;
    $transformCanvas.height = transformConfig.height;
    transformContext = $transformCanvas.getContext('2d');
    transformImg = new Image();
    transformImg.src = getCurrentImagePath(transformConfig.framesPath,0,'.jpg',transformConfig.pad);
    transformImg.onload = function(){
      transformContext.drawImage(transformImg, 0, 0);
    }

    preloadFrames(transformConfig);

    const vidConfig = sceneConfig.videos.retouch;
    $retouchCanvas.width = vidConfig.width;
    $retouchCanvas.height = vidConfig.height;
    retouchContext = $retouchCanvas.getContext('2d');
    retouchImg = new Image();
    retouchImg.src = getCurrentImagePath(vidConfig.framesPath,0);
    retouchImg.onload = function(){
      retouchContext.drawImage(retouchImg, 0, 0);
    }

    preloadFrames(vidConfig);

  };

  preloadFrames = function(vidConfig){
    for (let i = 1; i < vidConfig.frames; i++) {
      const img = new Image();
      const imgSrc = getCurrentImagePath(vidConfig.framesPath,i,'.jpg',vidConfig.pad);
      img.src = imgSrc
    }
  }

  getCurrentImagePath = function(framesPath, frame, extension='.jpg',pad=3){
    return `${framesPath}${frame.toString().padStart(pad,'0')}${extension}`;
  }

  drawImageToCanvas = function(thisContext,thisPath,thisImage){
    thisImage.src = thisPath;
    thisContext.drawImage(thisImage, 0, 0);
  }

  //TIMELINES

  initTimelines = function () {
    initTimelineIntro();
    initTimelineTransform();
    initTimelineBrushes();
    initTimelineBrushesContent();
    initTimelineBrushesContentOut();
    initTimelineRetouch();
    initTimelineiPad();
    initTimelineiPadContent();
    initTimelineiPadContentOut();
    initTimelineWhatsNew();
    initTimelineBeebly();
    initTimelineLike();
  };

  initTimelineIntro = function(){
    tlIntro = gsap.timeline({
      paused: true
    });
    tlIntro
      .from(".intro-ps-logo", { autoAlpha: 0, scale: .9, duration: .5, ease: "back.out(1.1)"}, "titleIn")
      .from(".intro-title-line.l1", { autoAlpha: 0, translateY: 20, duration: 1}, "titleIn")
      .from(".intro-title-line.l2", { autoAlpha: 0, translateY: 20, duration: 1}, "titleIn+=.5")
      .from(".intro-title-line.l3", { autoAlpha: 0, translateY: 20, duration: 1}, "titleIn+=1")
      .from(".intro-p", { autoAlpha: 0}, "introBodyIn")
      .from(".intro-buttons", { autoAlpha: 0, duration: .5}, "introBodyIn")
      .from(".intro-subtext", { autoAlpha: 0, duration: .5}, "introBodyIn+=.25")
  }

  initTimelineTransform = function () {

    tlTransform = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-transform",
        pin: ".transform-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onTransformEnter,
        onEnterBack: onTransformEnterBack,
        onLeave: onTransformLeave,
        end: `+=${
          sceneConfig.scenes.transform.sceneDuration * appState.screenDims.height
        }`,
        onUpdate: (scroll) => {
          if(scroll.direction === 1 && transformSection.animationComplete && transformSection.autoScrollDown && window.scrollY > getOffsetTop(document.getElementById('section-transform')) + appState.screenDims.height) {
            // scroll direction down | animation has completed | user can scroll down to initiate auto scroll | checks to make sure its at the full start of the section 
            transformSection.autoScrollDown = false; // prevent autoscroll down
            transformSection.autoScrollUp = true; // enable autoscroll up
            const offsetTop = getOffsetTop(document.getElementById('section-transform')) + document.getElementById('section-transform').offsetHeight - appState.screenDims.height;
            window.scrollTo(0, offsetTop);
          }
            
          if(scroll.direction === -1 && transformSection.animationComplete && transformSection.autoScrollUp) {
            // scroll direction up | animation has completed | user can scroll up to initiate auto scroll
            transformSection.autoScrollDown = true; // enable autoscroll down
            transformSection.autoScrollUp = false; // prevent autoscroll up
            const offsetTop = getOffsetTop(document.getElementById('section-transform')) + appState.screenDims.height;
            window.scrollTo(0, offsetTop);
          }
          
        }
      },
    });
    let progress = 0;
    tlTransform
      .to(".null", { opacity: 0, duration: 7,
        onUpdate: function() {
          const thisProgress = this.progress();
          if (thisProgress.toFixed(2) == 0.00) {
            progress = 0;
          }
          if (progress !== 1 && !transformSection.animationComplete) {
            const vidConfig = sceneConfig.videos.transform;
            const currentFrame = Math.ceil(vidConfig.frames * thisProgress);
            if(currentFrame != sceneConfig.videos.transform.frames) transformSection.animationComplete = false;
            const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame,'.jpg',vidConfig.pad);
            drawImageToCanvas(transformContext,currentImagePath,transformImg);
          }
        },
      }, "spacer")
      .from(".transform-title-line.rt1", { autoAlpha: 0, repeatRefresh: true,
        onUpdate: function() {
          if (progress === 1) {
            this.progress(1, true);
          }
        }
      }, "spacer+=.5")
      .to('.intro-container',{ translateY: '-100vh', duration: 1}, "spacer")
      .from(".transform-title-line.rt2", { autoAlpha: 0,ease: "none", repeatRefresh: true,
        onUpdate: function() {
          if (progress === 1) {
            this.progress(1, true);
          }
        }
    }, "spacer+=3.5")
      .to(".null", { opacity: 0.5, duration: 1.5, repeatRefresh: true,
        onUpdate: function() {
          if (progress === 1) {
            this.progress(1, true);
          }
        }
      },'spacer2')
      .from(".transform-copy-container", { autoAlpha: 0, repeatRefresh: true,
        onUpdate: function () {
          if (progress === 1) {
            this.progress(1, true);
          }
        }
      }, "spacer2")
      .to(".transform-title-container", { autoAlpha: 0 }, "spacer2+=2")
      .to(".transform-sequence", { autoAlpha: 0, duration: 1,
        onUpdate: function () {
          const thisProgress = this.progress();
          if (thisProgress === 1) {
            progress = 1;
          }
        }
      }, "spacer2+=2")
      .addLabel("end")
  };

  initTimelineBrushesContent = function(){
    tlBrushesContent = gsap.timeline({
      paused: true,
    });

    tlBrushesContent
      .from(".brushes-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(".brushes-intro",{ autoAlpha: 0, translateY: 20 }, "start+=.5")
      .from(".brushes-button-container", { autoAlpha: 0 }, "start+=1")
      .addLabel("end");
  }

  initTimelineBrushesContentOut = function(){
    tlBrushesContentOut = gsap.timeline({paused: true})
      .to(".brushes-title", { autoAlpha: 0, translateY: -20 }, "brushesContentOut")
      .to(".brushes-intro", { autoAlpha: 0, translateY: -20}, "brushesContentOut+=.5")
      .to(".brushes-button-container", { autoAlpha: 0 }, "brushesContentOut+=1")
      .addLabel("end");
  }

  initTimelineBrushes = function () {

    tlBrushes = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-brushes",
        pin: ".brushes-container",
        start: "top 100%", // when the top of the trigger hits the top of the viewport + 100% browser height
        end: `+=${sceneConfig.scenes.brushes.sceneDuration * appState.screenDims.height}`,
        anticipatePin: 1, //triggers the pin slightly early due to fact that pinning seems to happen a bit after top of this section disappears before it is re-pinned to top
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onBrushesEnter,
        // onLeave: onBrushesLeave,
        onEnterBack: onBrushesEnterBack,
        onLeaveBack: onBrushesLeaveBack,
      },
      paused: true,
    });
 
    tlBrushes
      .to("#section-transform", { autoAlpha: 0, duration: 1}, "spacer1")
      .from(".brushes-video", { autoAlpha: 0, duration: 1}, "spacer1")
      .to(".null", { opacity: 0, duration: 2}, "spacer2")
      .addLabel("end");
  };

  checkIfVideoPlaying = (video)=>{
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
  }

  initTimelineRetouch = function () {
    let progress = 0;
    tlRetouch = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-retouch",
        pin: ".retouch-container",
        start: "top top+=100%",
        end: `+=${
          sceneConfig.scenes.retouch.sceneDuration * appState.screenDims.height
        }`,
        scrub: true,
        onEnter: onRetouchEnter,
        onEnterBack: onRetouchEnterBack,
        onLeave: onRetouchLeave,
        onLeaveBack: onRetouchLeaveBack,
        onUpdate: function(scroll) {
          if (progress === 0 ) {
            const curProgress = tlRetouch.progress();
            const translateYVal = mapValue(curProgress,0,1,-18,0);
            $retouchContentContainer.style.transform = `translateY(${-translateYVal}vh)`;
          }

          if(scroll.direction === 1 && retouchSection.animationComplete && retouchSection.autoScrollDown && window.scrollY > getOffsetTop(document.getElementById('section-retouch')) + appState.screenDims.height) {
            // scroll direction down | animation has completed | user can scroll down to initiate auto scroll | checks to make sure its at the full start of the section 
            retouchSection.autoScrollDown = false; // prevent autoscroll down
            retouchSection.autoScrollUp = true; // enable autoscroll up
            const offsetTop = getOffsetTop(document.getElementById('section-retouch')) + document.getElementById('section-retouch').offsetHeight - appState.screenDims.height;
            window.scrollTo(0, offsetTop);
          }
            
          if(scroll.direction === -1 && retouchSection.animationComplete && retouchSection.autoScrollUp) {
            // scroll direction up | animation has completed | user can scroll up to initiate auto scroll
            retouchSection.autoScrollDown = true; // enable autoscroll down
            retouchSection.autoScrollUp = false; // prevent autoscroll up
            const offsetTop = getOffsetTop(document.getElementById('section-retouch')) + appState.screenDims.height;
            window.scrollTo(0, offsetTop);
          }
        },
      },
    });

    tlRetouch
      .from(".fixed-section.retouch",
        { autoAlpha: 0, duration: 2, repeatRefresh: true,
          onUpdate: function() {
            if (this.progress() === 0 ) {
              progress = 0;
            }
            if (progress === 1) {
              this.progress(1, true);
            }
          },
        }, "retouchIn")
      .from(".retouch-1",
        {scale: 1.2, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }
        }, "retouchIn")
      .to(".retouch-2",
        {width: `100vw`, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }
        }, "sliderIn"
      )
      .from(".retouch-title-line.l1",
        {autoAlpha: 0, translateY: 20, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }
        }, "sliderIn"
      )
      .to(".null",
        {opacity: 1, duration: 1, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          } },
        "spacer1"
      )
      .from(".retouch-title-line.l2",
        {autoAlpha: 0, translateY: 20, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }},
        "remixIn"
      )
      .to(".retouch-image-2",
        {autoAlpha: 0, duration: .5, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          },
        },
        "retouch2Out"
      )
      .to(".null",
      { opacity: 0, duration: 5, repeatRefresh: true,
        onUpdate: function () {
          const thisProgress = this.progress();
          const vidConfig = sceneConfig.videos.retouch;
          let currentFrame = Math.ceil(vidConfig.frames * thisProgress);
          const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame);
          if (progress !== 1 ) {
            drawImageToCanvas(retouchContext,currentImagePath,retouchImg);
          }
        }
      }, "spacer2")
      .from(".retouch-title-line.l3",
        {autoAlpha: 0, translateY: 20, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }
        }, "spacer2+=5.1"
      )
      .from(".retouch-intro",
        {autoAlpha: 0, repeatRefresh: true,
        onUpdate: function() {
          if (progress === 1) {
            this.progress(1, true);
          }
        }
      }, "retouchIntroIn")
      .from(".retouch-button",
        {autoAlpha: 0, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(1, true);
            }
          }
        }, "retouchIntroButtonIn")
      .to(".null",
        {opacity: 1, duration: 2, repeatRefresh: true,
          onUpdate: function() {
            if (progress === 1) {
              this.progress(0, true);
            }
          }
        }, "spacer7")
      .to(".retouch-content-container",
        {opacity: 0, duration: 1, repeatRefresh: true,
          onUpdate: function() {
            const thisProgress = this.progress();
            if (progress === 1) {
              // Show text container on scroll up
              this.progress(0, true);
            }
            if (thisProgress === 1) {
              progress = 1;
            }
          },
        }, "retouchContentOut")
      .addLabel("end");
  };

  initTimelineiPadContent = function(){
    tliPadContent = gsap.timeline({paused: true,})
      .from(".ipad-title", { autoAlpha: 0, translateY: 20, duration: 1 }, "start")
      .from(".ipad-intro", { autoAlpha: 0, translateY: 20, duration: 1 }, "start+=.5")
      .from(".ipad-button-container", { autoAlpha: 0, duration: 1 }, "start+=1")
      .addLabel("end");
  }

  initTimelineiPadContentOut = function(){
    tliPadContentOut = gsap.timeline({paused: true})
      .to(".ipad-title", { autoAlpha: 0, translateY: -20, duration: 1 }, "ipadTitleOut")
      .to(".ipad-intro", { autoAlpha: 0, translateY: -40, duration: 1 }, "ipadTitleOut+=.5")
      .to(".ipad-button-container", { autoAlpha: 0, duration: 1 }, "ipadTitleOut+=1")
      .addLabel("end");
  }

  initTimelineiPad = function () {
    tliPad = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-ipad",
        pin: ".ipad-container",
        start: "top top",
        scrub: true,
        onEnter: oniPadEnter,
        onEnterBack: oniPadEnterBack,
        onLeave: oniPadLeave,
        onLeaveBack: oniPadLeaveBack,
        end: `+=${
          sceneConfig.scenes.ipad.sceneDuration * appState.screenDims.height
        }`,
      },
    });
    tliPad
      .to(".null", { opacity: 0, duration: 2}, "spacer1")
      .to(".null", { scale: .5, duration: 2}, "spacer2")
      .addLabel("end");
  };


  initTimelineWhatsNew = function () {
    tlWhatsNew = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-whatsnew",
        pin: false,
        start: "top top",
        scrub: true,
        onEnter: onWhatsNewEnter,
        onLeaveBack: onWhatsNewLeaveBack,
      },
    });
  };


  // BeeBly

  initTimelineBeebly = function () {

    // set starting positions
    gsap.set(".beebly-container", { top: 0, left: 120 });
    gsap.set(".beebly-cursor", { top: -50, right: 200 });
    gsap.set("#the-box", { width: 310, transformOrigin: "100% 0", right: 130 });
    gsap.set(".bjf-1", { opacity: 1 });
    gsap.set(".bjf-2", { opacity: 0 });
    gsap.set(".bjf-3", { opacity: 0 });
    gsap.set(".bjf-1 mark", { background: "none", color: "inherit", duration: 0.1 });

    var fontChange = new TimelineMax();
    fontChange.timeScale(0.5);
    fontChange.to(".bjf-1", 0, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })
              .to(".bjf-1", 1, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })
              .to(".bjf-1", 0, { opacity: 0 })
              .to(".bjf-2", 0, { opacity: 1 })
              .to(".bjf-2", 1, { opacity: 1 })
              .to(".bjf-2", 0, { opacity: 0 })
              .to(".bjf-3", 0, { opacity: 1 })
              .to(".bjf-3", 1, { opacity: 1 })
              .to(".bjf-3 mark", 0, { background: "none", color: "inherit" })
              .to(".bjf-3 mark", 1, { background: "none", color: "inherit" });

    var beeTimeline = new TimelineMax({
      scrollTrigger: {
        trigger: "#section-beebly",
        smoothChildTiming: true,
        start: "top top",
        pin: true,
        scrub: true,
        end: "+=8400"
      }});

    beeTimeline
      .to("#the-cursor",    1, { top: 469, right: 418 })
      .to("#the-box",       1, { width: 110  })
      .to("#the-cursor",    1, { top: 285, right: 218 }, "-=1")
      .to("#the-cursor",    1, { top: 785, right: 358 })
      .to("#the-box",       1, { top: -120 })
      .to("#the-cursor",    1, { right: 458, top: 715 })
      .to(".beebly-ground", 4, { top: 700 }, "-=1")
      .to("#the-cursor",    1, { right: 660, top: 530 })
      .add(fontChange)
      .to("#the-cursor",    2, { right: 620, top: 660 }, "-=7")
      .to("#the-cursor",    1, { right: 185, top: -65 })
      .to("#the-box",       2, { right: 544, top: 570 }, "+=1")
      .to("#the-cursor",    2, { right: 599, top: 625 }, "-=2")
      .to("#the-box span",  0.1, { opacity: 0 }, "+=1")
      .to( CSSRulePlugin.getRule("::before"), {duration: 0.1, cssRule: {opacity: 0}}, "-=0.1")
      .to( CSSRulePlugin.getRule("::after"), {duration: 0.1, cssRule: {opacity: 0}}, "-=0.2")
      .to("#the-cursor", 0.1, { opacity: 0 }, "-=0.3")
      .to("#the-box",  0.1, { borderColor: "transparent" }, "-=0.4")
      .to("#the-box",  2, { borderColor: "transparent" });
  }

  initTimelineLike = function () {

    var slides = document.querySelectorAll(".like-panel");

    var bgLayers = new TimelineMax();
    bgLayers.to();

    var likeAction = new TimelineMax({
      scrollTrigger: {
        trigger: "#section-like",
        start: "top top",
        pin: true,
        scrub: true,
        markers: true,
        end: "+=8400"
      }});
    
    likeAction
      .from('.like-container', 2, { y: 200 })
      .from('.like-container *', 1, { opacity: 0, stagger: .5 }, "-=2.5")
      .from('.bg-shape', 4, { top: 0, stagger: 2, scrub: 1 })
      .to(slides, 4, {xPercent: -100, ease: "none", stagger: 3 })
      .to('.like-colors-bg', 18, { xPercent: -180 }, '-=9');
  };




  //HELPER FUNCTIONS

  mapValue = function (value, low1, high1, low2, high2) { //take a value between a high and low range and convert it to a value between another high and low range
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  };

  toggleAssetLoading = function (isLoading = true) {
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("loading", isLoading);
  };

  getScreenDims = function () {
    appState.screenDims.width = window.innerWidth;
    appState.screenDims.height = window.innerHeight;
  };


  debounce = function(func, wait, immediate) { //https://davidwalsh.name/javascript-debounce-function
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  //CALLBACKS

  onWindowResize = debounce(function() { //calls after x ms of no resize events firing
    getScreenDims();
    ScrollTrigger.refresh(true); //safe refresh - waits at least one raf and up to 200ms for positions to recalculate (https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.refresh())
  }, 250);

  onScrollDownLinkClick = function(){
    window.scroll({
      top: appState.screenDims.height*2,
      left: 0,
      behavior: 'smooth'
    });
  }

  onTransformEnter = function () { //intro video stuff should happen in separate intro timeline?
    transformSection.animationComplete = false;
    appState.curSceneIndex = 1;
    const vidConfig = sceneConfig.videos.transform;
    drawImageToCanvas(transformContext,getCurrentImagePath(vidConfig.framesPath,0,'.jpg',vidConfig.pad),transformImg);

    gsap.set('.transform-title-line.rt1', { opacity: 0});
    gsap.set('.transform-title-line.rt2', { opacity: 0});
    gsap.set('.transform-copy-container', { opacity: 0});
  };

  onTransformEnterBack = function(){ //fires before brushesLeaveBack
    transformSection.autoScrollDown = true;
    const elemOffset = getOffsetTop(document.getElementById('section-transform')) + (appState.screenDims.height);
    window.scrollTo(0, elemOffset); // SM - reduce amount needed to scroll up
    tlBrushesContentOut.restart();
    gsap.from('.transform-animate-1', 1, { opacity: 0, y: 20, delay: 0.0 });
    gsap.from('.transform-animate-2', 1, { opacity: 0, y: 20, delay: 0.3 });
    gsap.from('.transform-animate-3', 1, { opacity: 0, y: 20, delay: 0.6 });
    gsap.from('.transform-animate-4', 1, { opacity: 0, y: 20, delay: 0.9 });
  }

  onTransformLeave = () => {
    transformSection.animationComplete = true;
  }

  onBrushesEnter = function () {
    appState.curSceneIndex = 2;
    playVideo($brushesVideo);
    tlBrushesContent.restart();
  };

  onBrushesVideoIn = function(){
    //
  }

  onBrushesLeave = function(){
  }

  onBrushesEnterBack = function() {
    const elemOffset = getOffsetTop(document.getElementById('section-brushes')) + appState.screenDims.height;
    window.scrollTo(0, elemOffset);
  }

  onBrushesLeaveBack = function () {
    appState.curSceneIndex = 1;
    resetTimeline(tlBrushes);
    //resetVideo($brushesVideo);
  };

  onBrushesVideoEnded = function(){
  }

  onRetouchEnter = function (self) {
    appState.curSceneIndex = 3;
    retouchSection.animationComplete = false;
    const vidConfig = sceneConfig.videos.retouch;
    const currentImagePath = getCurrentImagePath(vidConfig.framesPath,0,'.jpg',vidConfig.pad);
    drawImageToCanvas(retouchContext,currentImagePath,retouchImg);
    tlBrushesContentOut.restart();
  };

  onRetouchEnterBack = function(){
    retouchSection.autoScrollDown = true;
    const elemOffset = getOffsetTop(document.getElementById('section-retouch'));
    window.scrollTo(0, elemOffset);
    resetTimeline(tliPadContent);
    gsap.from('.retouch-animate-1', 1, { opacity: 0, y: 20, delay: 0.0 });
    gsap.from('.retouch-animate-2', 1, { opacity: 0, y: 20, delay: 0.3 });
    gsap.from('.retouch-animate-3', 1, { opacity: 0, y: 20, delay: 0.6 });
    gsap.from('.retouch-animate-4', 1, { opacity: 0, y: 20, delay: 0.9 });
    gsap.from('.retouch-animate-5', 1, { opacity: 0, y: 20, delay: 1.2 });
  }

  onRetouchLeave = function(){
    retouchSection.animationComplete = true;
    gsap.from(".ipad-video", { scale: 1.2, duration: 2 });
  }

  onRetouchLeaveBack = function () {
    gsap.to('.brushes-video',{
      opacity: 1,
    });
    tlBrushesContent.restart();
    appState.curSceneIndex = 2;
    // Reset all tweens to beginning state
    tlRetouch.getChildren().forEach(child => child.progress(0));
  };

  oniPadEnter = function () {
    appState.curSceneIndex = 4;
    playVideo($ipadVideo);
    tliPadContent.restart();
    gsap.to(".ipad-video", { scale: 1, duration: 2 })
  };

  onTriggerIpadContentOut = function(){
    tliPadContentOut.restart();
  }

  oniPadEnterBack = function () {
    tliPadContent.restart();
    const elemOffset = getOffsetTop(document.getElementById('section-ipad'));
    // window.scrollTo(0, elemOffset);
  }

  oniPadLeave = function () {
    tliPadContentOut.restart();
  }

  oniPadLeaveBack = function () {
    appState.curSceneIndex = 3;
    resetVideo($ipadVideo);
    gsap.to(".ipad-video", { scale: 1.2, duration: 2 });
    tliPadContentOut.restart();

    resetTimeline(tliPad);
  };

  oniPadVideoEnded = function(){
    //
  }

  onWhatsNewEnter = function () {
    appState.curSceneIndex = 5;
  };

  onWhatsNewLeaveBack = function () {
    appState.curSceneIndex = 4;
    playVideo($ipadVideo);
    tliPadContent.restart();
  };

  // Get element offset for scroll positioning on return to top
  var getOffsetTop = function (elem) {
    // Set our distance placeholder
    var distance = 0;
    // Loop up the DOM
    if (elem.offsetParent) {
      do {
        distance += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    // Return our distance
    return distance < 0 ? 0 : distance;
  };

  //INITIALIZATION

  onReady = function () {
    setTimeout(() => {
      //MH - set some minimum time that the loader displays - may want to remove if loading is guaranteed to take a few seconds or more
      gsap.to(".loader-inner", {
        opacity: 0,
        duration: 0.3,
        onStart: function(){
          conditionallyPlayIntro();
        },
        onComplete: function () {
          $body.classList.toggle("loading", false);
          playIntroSequence();
        },
      });
    }, 1000);
  };

  init = function () {
    toggleAssetLoading(true);
    getScreenDims();
    addDomReferences();
    addListeners();
    initStickyNav();
    initCanvas();
    initTimelines();
    initSubmodules();
  };

  //SHUTDOWN
  onBeforeUnload = function (e) {
    //http://sandbox-666666.webflow.io/on-page-refresh-start-from-top-of-page
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set //MH - not sure that's true?
    //e.returnValue = "";
    $body.style.display = "none";
    window.scrollTo(0, 0);
  };

  return {
    init: init,
    onReady: onReady,
  };
})();

document.addEventListener("DOMContentLoaded", (event) => {
  ps.init();
});

window.onload = function () {
  //MH wait for all initial assets to load before allowing scrolling (not counting scrolling video frames - may want to wait for those too)
  ps.onReady();
};