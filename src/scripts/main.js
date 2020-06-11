gsap.registerPlugin(ScrollTrigger);

const ps = (function () {
  const self = this;
  //const counter = 0;
  let tlTransform, tlBrushes, tlBrushesContent, tlBrushesContentOut, tlRetouch, tlWhatsNew, tliPad, tliPadContent, tliPadContentOut; //gsap timelines

  let retouchImg, retouchContext, $retouchCanvas;
  let transformImg, transformContext, $transformCanvas

  let curCanvas, curContext, curConfig, curPath; //for drawing image frames
  let $retouch, $slide, $body, $retouchSequence, $transformSequence, $brushesVideo, $ipadVideo; //dom references
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
        sceneDuration: 3,
      },
      retouch: {
        sceneDuration: 10,
      },
      ipad: {
        sceneDuration: 3,
      },
    },
    videoBasePath: "assets/videos",
    videos: {
      transform: {
        frames: 72,
        selector: ".transform-sequence.t4",
        framesPath: 'assets/images/transform/frames/transform-v2',
        width: 1280,
        height: 853,
        pad: 2,
      },
      retouch: {
        frames: 91,
        selector: '.retouch-sequence',
        sequence: 'assets/images/retouch/sequence-retouch.jpg',
        framesPath: 'assets/images/retouch/frames/retouch',
        width: 1280, //size of images for canvas
        height: 843,
        pad: 3, //leading 0s in sequence filenames
      }
    },
  };

  let appState = {
    curSceneIndex: 0,
    screenDims: {},
    introHasPlayed: false,
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
    $brushesVideo = document.querySelector('.brushes-video');
    $ipadVideo = document.querySelector('.ipad-video');
    $retouchCanvas = document.querySelector('.retouch-canvas');
    $transformCanvas = document.querySelector('.transform-canvas');
  };

  addListeners = function () {
    addUnloadListener();
    addVideoListeners();
  };

  addVideoListeners = function(){
    $brushesVideo.addEventListener('ended',onBrushesVideoEnded);
    $ipadVideo.addEventListener('ended',oniPadVideoEnded);
  }

  addUnloadListener = function () {
    window.addEventListener("beforeunload", onBeforeUnload);
  };

  initSubmodules = function () {
    ps.whatsNewModule.init();
  };

  /*
  onScrollUpdate = (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  };*/

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

  onTransformEnter = function () {
    const $introVideo = document.querySelector('.intro-video');
    const isVideoPlaying = checkIfVideoPlaying($introVideo);
    if (!isVideoPlaying && !appState.introHasPlayed){
      appState.introHasPlayed = true;
      $introVideo.play();
    }
    appState.curSceneIndex = 1;
    //resetVideo(document.querySelector(".intro-video"));
    const vidConfig = sceneConfig.videos.transform;
    drawImageToCanvas(transformContext,getCurrentImagePath(vidConfig.framesPath,0,'.jpg',vidConfig.pad),transformImg);
  };

  onTransformLeaveBack = function () {
    appState.curSceneIndex = 0;
    playVideo(document.querySelector(".intro-video"));
  };

  onBrushesEnter = function () {
    appState.curSceneIndex = 2;
    playVideo(document.querySelector(".brushes-video"));
  };

  onBrushesLeaveBack = function () {
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector(".brushes-video"));
    resetTimeline(tlBrushesContent);
  };

  onBrushesVideoEnded = function(){
    tlBrushesContent.restart();
  }

  onBrushesLeaveForward = function(){
    tlBrushesContentOut.restart();
  }

  onRetouchEnter = function () {
    appState.curSceneIndex = 2;
    resetVideo(document.querySelector(".brushes-video"));
  };

  onRetouchUpdate = function(){
    const curProgress = tlRetouch.progress();
    const translateYVal = mapValue(curProgress,0,1,-100,100);
    $retouchContentContainer.style.transform = `translateY(${-translateYVal}px)`;
  }

  onRetouchLeave = function(){
    gsap.from(".ipad-video", { scale: 1.2, duration: 2 })
  }

  onRetouchLeaveBack = function () {
    gsap.to('.brushes-video',{
      opacity: 1,
    });
    appState.curSceneIndex = 3;
    playVideo(document.querySelector(".brushes-video"));
  };

  oniPadEnter = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
    gsap.to(".ipad-video", { scale: 1, duration: 2 })
  };

  oniPadLeaveBack = function () {
    appState.curSceneIndex = 3;
    resetVideo(document.querySelector(".ipad-video"));
    resetTimeline(tliPadContent);
    gsap.to(".ipad-video", { scale: 1.2, duration: 2 })
  };

  oniPadLeaveForward = function(){
    tliPadContentOut.restart();
  }

  oniPadVideoEnded = function(){
    tliPadContent.restart();
  }

  onWhatsNewEnter = function () {
    appState.curSceneIndex = 5;
  };

  onWhatsNewLeaveBack = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
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

  initTimelineTransform = function () {
    tlTransform = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-transform",
        pin: ".transform-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onTransformEnter,
        onLeaveBack: onTransformLeaveBack,
        end: `+=${
          sceneConfig.scenes.transform.sceneDuration * appState.screenDims.height
        }`,
      },
    });

    tlTransform
      //.from(".transform-sequence.t4", { autoAlpha: 0 }, "start")
      .to(".null", { opacity: 0, duration: 5,
        onUpdate: function () {
          const thisProgress = this.progress();
          const vidConfig = sceneConfig.videos.transform;
          const currentFrame = 
            Math.ceil(vidConfig.frames * thisProgress);
            //canvidRetouch.setCurrentFrame(currentFrame);
            const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame,'.jpg',vidConfig.pad);
            drawImageToCanvas(transformContext,currentImagePath,transformImg);
        }, 
      }, "spacer")
      .fromTo('.transform-title-container',{translateY: 180}, {translateY: 0, duration: 7}, 'spacer')
      .fromTo('.transform-canvas',{translateY: -100}, {translateY: 100, duration: 7}, 'spacer')
      .from(".transform-title", { autoAlpha: 0, translateY: 20, onStart: function(){
      } }, "spacer")
      .to('.intro-container',{ translateY: -appState.screenDims.height, duration: 1, onComplete: function(){
          console.log('complete');
      }}, "spacer")
      //.from(".transform-sequence-01", { autoAlpha: 0 }, "start")
      .from(".transform-copy-p", { autoAlpha: 0 }, "spacer")
      .from(
        ".transform-panel-container",
        { translateY: "10vh", autoAlpha: 0 },
        "spacer+=.25"
      )
      .from(".transform-feature.p2", { autoAlpha: 0 }, "spacer+=.25")
      .from(".transform-feature.p3", { autoAlpha: 0 }, "spacer+=2")
      .from(".transform-feature.p4", { autoAlpha: 0 }, "spacer+=3")
      .from(".transform-feature.p5", { autoAlpha: 0 }, "spacer+=4")
      //.to('.brushes-container', {translateY: -appState.screenDims.height},'spacer+=5')
      .to(".transform-title-container", { autoAlpha: 0 }, "spacer+=6")
      .to(".transform-sequence", { autoAlpha: 0 }, "spacer+=6")
      .addLabel("end");
  };

  initTimelineBrushes = function () {
    tlBrushes = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-brushes",
        pin: ".brushes-container", // pin the trigger element while active?
        start: "top 100%", // when the top of the trigger hits the top of the viewport
        anticipatePin: 1, //triggers the pin slightly early due to fact that pinning seems to happen a bit after top of this section disappears before it is re-pinned to top
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onBrushesEnter,
        onLeaveBack: onBrushesLeaveBack,
      },
    });

    tlBrushes
      .from(".brushes-video", { autoAlpha: 0, duration: 2 }, "spacer1")
      .to(".null", { scale: 1, duration: 5 }, "spacer1")
      //.to('.brushes-container',{translateY: 0},'spacer1')
      .to(".null", { opacity: 0, duration: 5, onStart: onBrushesLeaveForward }, "spacer2")
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
        "brushesIntroIn"
      )
      .from(".brushes-button-container", { autoAlpha: 0 }, "brushesButtonIn");

  }

  checkIfVideoPlaying = (video)=>{
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
  }

  initTimelineBrushesContentOut = function(){
    tlBrushesContentOut = gsap.timeline({
      paused: true,
    });

    tlBrushesContentOut
      .to(".brushes-title", { autoAlpha: 0, translateY: -20 }, "brushesContentOut")
      .to(
        ".brushes-intro",
        { autoAlpha: 0, translateY: -20, delay: .1 },
        "brushesContentOut"
      )
      .to(".brushes-button-container", { autoAlpha: 0, delay: .2 }, "brushesContentOut");

  }

  initTimelineRetouch = function () {
    tlRetouch = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-retouch",
        pin: ".retouch-container", // pin the trigger element while active?
        start: "top top+=100%", // when the top of the trigger hits the top of the viewport
        end: `+=${
          sceneConfig.scenes.retouch.sceneDuration * appState.screenDims.height
        }`,
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onRetouchEnter,
        onLeave: onRetouchLeave,
        onLeaveBack: onRetouchLeaveBack,
        onUpdate: onRetouchUpdate,
      },
    });

    tlRetouch
      .from(".fixed-section.retouch", { autoAlpha: 0, duration: 2 }, "retouchIn")
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
          width: `${appState.screenDims.width}px`,
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
        { autoAlpha: 0, translateY: 20, onComplete: function(){
          drawImageToCanvas(retouchContext,getCurrentImagePath(sceneConfig.videos.retouch.framesPath,0),retouchImg);
        } },
        "remixIn"
      )
      .from(
        ".retouch-tools-container",
        { autoAlpha: 0, translateY: 20, duration: 1 },
        "retouchToolsIn"
      )
      .from(
        ".retouch-brushes-container",
        { autoAlpha: 0, translateY: -20, duration: 1 },
        "retouchToolsIn"
      )
      .to(".null", { opacity: 0, duration: 5,
        onUpdate: function () {
          const thisProgress = this.progress();
          const vidConfig = sceneConfig.videos.retouch;
          const currentFrame = 
            Math.ceil(vidConfig.frames * thisProgress);
            //canvidRetouch.setCurrentFrame(currentFrame);
          const currentImagePath = getCurrentImagePath(vidConfig.framesPath,currentFrame);
          drawImageToCanvas(retouchContext,currentImagePath,retouchImg);
        }, 
      }, "spacer2")
      .to(
        ".retouch-tools-container",
        { autoAlpha: 0, translateY: -20 },
        "spacer2+=1.45"
      )
      .to(
        ".retouch-brushes-container",
        { autoAlpha: 0, translateY: 20 },
        "spacer2+=1.45"
      )
      .from(
        ".retouch-masks-container",
        { autoAlpha: 0, translateY: 20 },
        "spacer2+=1.7"
      )
      .to(
        ".retouch-masks-container",
        { autoAlpha: 0, translateY: -20 },
        "spacer2+=3.65"
      )
      .from(
        ".retouch-tools-container-2",
        { autoAlpha: 0, translateY: 20 },
        "spacer2+=3.75"
      )
      .from(
        ".retouch-pen-tools-container",
        { autoAlpha: 0 },
        "spacer2+=3.75"
      )
      .from(
        ".retouch-pen-options-container",
        { autoAlpha: 0, translateY: -20 },
        "spacer2+=3.85"
      )
      .to(
        ".retouch-tools-container-2",
        { autoAlpha: 0, translateY: -20 },
        "spacer2+=4.6"
      )
      .to(
        ".retouch-pen-tools-container",
        { autoAlpha: 0 },
        "spacer2+=4.6"
      )
      .to(
        ".retouch-pen-options-container",
        { autoAlpha: 0, translateY: 20 },
        "spacer2+=4.9"
      )
      .from(
        ".retouch-title-line.l3",
        { autoAlpha: 0, translateY: 20 },
        "reimagineIn"
      )
      .from(".retouch-intro", { autoAlpha: 0 }, "retouchIntroIn")
      .from(".retouch-button", { autoAlpha: 0 }, "retouchIntroButtonIn")
      .to(".null", { opacity: 1, duration: 2 }, "spacer7")
      .addLabel("end");
  };

  initTimelineiPad = function () {
    tliPad = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-ipad",
        pin: ".ipad-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: oniPadEnter,
        onLeaveBack: oniPadLeaveBack,
      },
    });

    tliPad
      .to(".null", { opacity: 0, duration: 2 }, "spacer1")
      .to(".null", { scale: .5, duration: 2, onStart: oniPadLeaveForward}, "spacer2")
      .addLabel("end");
  };

  initTimelineiPadContent = function(){
    tliPadContent = gsap.timeline({
      paused: true,
    });

    tliPadContent.from(".ipad-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(".ipad-intro", { autoAlpha: 0, translateY: 20 }, "ipadIntroIn")
      .from(".ipad-button-container", { autoAlpha: 0 }, "ipadButtonIn");
  }

  initTimelineiPadContentOut = function(){
    tliPadContentOut = gsap.timeline({paused: true})
      .to(".ipad-title", { autoAlpha: 0, translateY: -20 }, "ipadTitleOut")
      .to(".ipad-intro", { autoAlpha: 0, translateY: -20, delay: .1 }, "ipadTitleOut")
      .to(".ipad-button-container", { autoAlpha: 0, delay: .2 }, "ipadTitleOut");
  }

  initTimelineWhatsNew = function () {
    tlWhatsNew = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-whatsnew",
        pin: false, // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
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

  mapValue = function (value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  };

  onReady = function () {
    setTimeout(() => {
      //MH - temp: set some minimum time that the loader displays - may want to remove if loading is guaranteed to take a few seconds or more
      gsap.to(".loader-inner", {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          $body.classList.toggle("loading", false);
        },
      });
    }, 1000);
  };

  toggleAssetLoading = function (isLoading = true) {
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("loading", isLoading);
  };

  init = function () {
    toggleAssetLoading(true);
    getScreenDims();
    addDomReferences();
    addListeners();
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
  //MH temp: wait for all assets to load before allowing scrolling
  ps.onReady();
};
