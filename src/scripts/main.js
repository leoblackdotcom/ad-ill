gsap.registerPlugin(ScrollTrigger);

const ps = (function () {
  const self = this;
  let tlIntro, tlTransform, tlBrushes, tlBrushesContent, tlBrushesContentOut, tlRetouch, tlWhatsNew, tliPad, tliPadContent, tliPadContentOut; //gsap timelines

  let retouchImg, retouchContext, $retouchCanvas;
  let transformImg, transformContext, $transformCanvas

  let $retouch, $slide, $body, $retouchSequence, $transformSequence, $introVideo, $brushesVideo, $ipadVideo; //dom references
  let sceneConfig = {
    nativeWidth: 1679,
    nativeHeight: 1119,
    scenes: {
      intro: {
        //
      },
      transform: {
        sceneDuration: 15,
      },
      brushes: {
        sceneDuration: 5,
      },
      retouch: {
        sceneDuration: 10,
      },
      ipad: {
        sceneDuration: 7,
      },
    },
    videoBasePath: "assets/videos",
    videos: {
      transform: {
        frames: 83,
        selector: ".transform-sequence.t4",
        framesPath: 'assets/images/transform/frames/transform4-',
        width: 1280, //native size of images for canvas
        height: 991,
        pad: 2, //leading 0s in sequence filenames
      },
      retouch: {
        frames: 129,
        selector: '.retouch-sequence',
        sequence: 'assets/images/retouch/sequence-retouch.jpg',
        framesPath: 'assets/images/retouch/frames/retouch',
        width: 1280,
        height: 843,
        pad: 3,
      }
    },
  };

  let appState = {
    curSceneIndex: 0,
    screenDims: {},
    scrollDirection: 0,
  };

  getScreenDims = function () {
    appState.screenDims.width = window.innerWidth;
    appState.screenDims.height = window.innerHeight;
  };

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
  };

  addListeners = function () {
    addUnloadListener();
    addVideoListeners();
    addResizeListeners();
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

  initSubmodules = function () {
    ps.whatsNewModule.init();
    ps.navModule.init();
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

  onWindowResize = debounce(function() { //calls after x ms of no resize events firing
    console.log('refresh');
    ScrollTrigger.refresh(true); //safe refresh - waits at least one raf and up to 200ms for positions to recalculate (https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.refresh())
  }, 250);

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

  onTransformEnter = function () { //intro video stuff should happen in separate intro timeline?
    appState.curSceneIndex = 1;
    const vidConfig = sceneConfig.videos.transform;
    drawImageToCanvas(transformContext,getCurrentImagePath(vidConfig.framesPath,0,'.jpg',vidConfig.pad),transformImg);
  };

  onTransformEnterBack = function(){ //fires before brushesLeaveBack
    tlBrushesContentOut.restart();
  }

  onBrushesEnter = function () {
    appState.curSceneIndex = 2;
    playVideo($brushesVideo);
    tlBrushesContent.restart();
  };

  onBrushesVideoIn = function(){
    //tlBrushesContent.restart();
  }

  onBrushesLeave = function(){
    tlBrushesContentOut.play();
  }

  onBrushesLeaveBack = function () {
    appState.curSceneIndex = 1;
    resetTimeline(tlBrushes);
    resetVideo($brushesVideo);
  };

  onBrushesVideoEnded = function(){
  }

  onRetouchEnter = function () {
    appState.curSceneIndex = 2;
  };

  onRetouchEnterBack = function(){
    resetTimeline(tliPadContent);
  }

  onRetouchUpdate = function(){
    const curProgress = tlRetouch.progress();
    const translateYVal = mapValue(curProgress,0,1,-18,0);
    $retouchContentContainer.style.transform = `translateY(${-translateYVal}vh)`;
  }

  onRetouchLeave = function(){
    gsap.from(".ipad-video", { scale: 1.2, duration: 2 });
  }

  onRetouchLeaveBack = function () {
    gsap.to('.brushes-video',{
      opacity: 1,
    });
    tlBrushesContent.restart();
    appState.curSceneIndex = 3;
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

  oniPadLeaveBack = function () {
    appState.curSceneIndex = 3;
    resetVideo($ipadVideo);
    gsap.to(".ipad-video", { scale: 1.2, duration: 2 });
    tliPadContentOut.restart();
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
    //retouchImg.src = "assets/images/retouch/retouch-2.jpg"
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
        end: `+=${
          sceneConfig.scenes.transform.sceneDuration * appState.screenDims.height
        }`,
      },
    });

    tlTransform
      .to(".null", { opacity: 0, duration: 7,
        onUpdate: function () {
          const thisProgress = this.progress();

          const vidConfig = sceneConfig.videos.transform;
          const currentFrame =
            Math.ceil(vidConfig.frames * thisProgress);
            const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame,'.jpg',vidConfig.pad);
            drawImageToCanvas(transformContext,currentImagePath,transformImg);
        },
      }, "spacer")
      .from(".transform-title-line.rt1", { autoAlpha: 0}, "spacer+=.5")
      .to('.intro-container',{ translateY: '-100vh', duration: 1, onComplete: function(){
        resetVideo($introVideo);
      }}, "spacer")
      .from(".transform-title-line.rt2", { autoAlpha: 0,ease: "none" }, "spacer+=3.5")
      .to(".null", { opacity: 0.5, duration: 3},'spacer2')
      .from(".transform-copy-container", { autoAlpha: 0 }, "spacer2")
      .to(".transform-title-container", { autoAlpha: 0 }, "spacer2+=2")
      .to(".transform-sequence", { autoAlpha: 0,duration: 1 }, "spacer2+=2")
      .addLabel("end");
  };

  initTimelineBrushesContent = function(){
    tlBrushesContent = gsap.timeline({
      paused: true,
    });

    tlBrushesContent

      .from(".brushes-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(
        ".brushes-intro",
        { autoAlpha: 0, translateY: 20 },
        "start+=.5"
      )
      .from(".brushes-button-container", { autoAlpha: 0 }, "start+=1")
      .addLabel("end");
  }

  initTimelineBrushesContentOut = function(){
    tlBrushesContentOut = gsap.timeline({
      paused: true,
    });

    tlBrushesContentOut
      .to(".brushes-title", { autoAlpha: 0, translateY: -20 }, "brushesContentOut")
      .to(
        ".brushes-intro",
        { autoAlpha: 0, translateY: -20},
        "brushesContentOut+=.5"
      )
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
        onLeave: onBrushesLeave,
        onLeaveBack: onBrushesLeaveBack,
      },
      paused: true,
    });

    tlBrushes
      .from(".brushes-video", { autoAlpha: 0, duration: 2 }, "spacer1")
      .to(".null", { opacity: 0, duration: 2 }, "spacer2")
      .addLabel("end");
  };

  checkIfVideoPlaying = (video)=>{
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
  }

  initTimelineRetouch = function () {
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
        onUpdate: onRetouchUpdate,
      },
    });

    tlRetouch
      .from(".fixed-section.retouch", { autoAlpha: 0, duration: 2 }, "retouchIn")
      //.to('.brushes-content-container',{translateY: -100, duration: 2},'retouchIn')
      .from(
        ".retouch-1",
        {
          scale: 1.2,
        },
        "retouchIn"
      )
      .to(
        ".retouch-2",
        {
          width: `100vw`,
        },
        "sliderIn"
      )
      .from(
        ".retouch-title-line.l1",
        { autoAlpha: 0, translateY: 20 },
        "sliderIn"
      )
      .to(
        ".null",
        { opacity: 1, duration: 1 },
        "spacer1"
      )
      .from(
        ".retouch-title-line.l2",
        { autoAlpha: 0, translateY: 20},
        "remixIn"
      )
      .to(
        ".retouch-image-2",
        { autoAlpha: 0, duration: .5 },
        "retouch2Out"
      )
      .to(".null", { opacity: 0, duration: 5,
        onUpdate: function () {
          const thisProgress = this.progress();
          const vidConfig = sceneConfig.videos.retouch;
          const currentFrame =
            Math.ceil(vidConfig.frames * thisProgress);
          const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame);
          drawImageToCanvas(retouchContext,currentImagePath,retouchImg);
        },
      }, "spacer2")
      .from(
        ".retouch-title-line.l3",
        { autoAlpha: 0, translateY: 20 },
        "spacer2+=5.1"
      )
      .from(".retouch-intro", { autoAlpha: 0 }, "retouchIntroIn")
      .from(".retouch-button", { autoAlpha: 0 }, "retouchIntroButtonIn")
      .to(".null", { opacity: 1, duration: 2 }, "spacer7")
      .to(".retouch-content-container", { opacity: 0, duration: 1 }, "retouchContentOut")
      .addLabel("end");
  };

  initTimelineiPadContent = function(){
    tliPadContent = gsap.timeline({
      paused: true,
    });

    tliPadContent
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
        onLeaveBack: oniPadLeaveBack,
        end: `+=${
          sceneConfig.scenes.ipad.sceneDuration * appState.screenDims.height
        }`,
      },
    });

    tliPad
      .to(".null", { opacity: 0, duration: 2, onComplete: onTriggerIpadContentOut }, "spacer1")
      .to(".null", { scale: .5, duration: 2 }, "spacer2")
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

  onBeforeUnload = function (e) {
    //http://sandbox-666666.webflow.io/on-page-refresh-start-from-top-of-page
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = "";
    $body.style.display = "none";
    window.scrollTo(0, 0);
  };

  mapValue = function (value, low1, high1, low2, high2) { //take a value between a high and low range and convert it to a value between another high and low range
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  };

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

  toggleAssetLoading = function (isLoading = true) {
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("loading", isLoading);
  };

  initStickyNav = function(){
    const header = document.querySelector('.headroom');
    const headroom = new Headroom(header);
    headroom.init();
  }

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
