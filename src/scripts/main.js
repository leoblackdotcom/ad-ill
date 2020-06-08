gsap.registerPlugin(ScrollTrigger);

const ps = (function () {
  const self = this;
  //const counter = 0;
  let tlTransform, tlBrushes, tlRetouch;
  let curCanvas, curContext, curConfig, curPath; //for drawing image frames
  let $retouch, $slider, $slide; //dom references
  let sceneConfig = {
    nativeWidth: 1679,
    nativeHeight: 1119,
    scenes: {
      intro: {
        //
      },
      transform: {
        sceneDuration: 7,
      },
      brushes: {
        sceneDuration: 3,
      },
      retouch: {
        sceneDuration: 10,
        sliderCompletePercent: 0.9, //above this value trigger a complete state for slider
      },
      ipad: {
        sceneDuration: 3,
      },
    },
    videoBasePath: "assets/videos",
    videos: [
      {
        directory: "fish",
        frames: 53, //ffprobe -v error -select_streams v:0 -show_entries stream=nb_frames -of default=nokey=1:noprint_wrappers=1 [filename].mp4
        selector: ".transform-sequence.t4",
        scrollStart: 0.76,
        scrollEnd: 0.84,
        duration: 3.637, //ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp4
        fps: 30,
      },
    ],
  };

  let appState = {
    curVidIndex: 0,
    loadedIndex: 0,
    curSceneIndex: 0,
    screenDims: {},
    isDragging: false, //when mouse is down
    slideComplete: false, //when retouch slider has reached its final state
  };

  let fishVid = document.querySelector(".transform-sequence.t4");

  getScreenDims = function () {
    appState.screenDims.width = window.innerWidth;
    appState.screenDims.height = window.innerHeight;
  };

  addDomReferences = function () {
    $retouch = document.querySelector('#section-retouch');
    $slider = document.querySelector(".retouch-slide-handle-container");
    $slide = document.querySelector('.retouch-2');
  };

  addListeners = function () {
    addSliderDownListener();
  };

  addMouseListeners = function () {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  initSubmodules = function(){
    ps.whatsNewModule.init();
  }

  removeMouseListeners = function () {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  handleMouseMove = function (e) {
    if (appState.isDragging) {
      setSliderPos(e.clientX);
    }
  };

  handleMouseUp = function (e) {
    removeMouseListeners();
    if (appState.isDragging) {
      setSliderPos(e.clientX);
      appState.isDragging = false;
      if (e.clientX > sceneConfig.scenes.retouch.sliderCompletePercent* appState.screenDims.width){
        animateSliderComplete();
      }
    }
  };

  onScrollUpdate = (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  };

  resetVideo = function ($video) {
    $video.pause();
    $video.currentTime = 0;
  };

  playVideo = function ($video) {
    $video.play();
  };

  onTransformEnter = function () {
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector(".intro-video"));
  };

  onTransformLeaveBack = function () {
    appState.curSceneIndex = 0;
    resetVideo(document.querySelector(".transform-sequence.t4"));
    playVideo(document.querySelector(".intro-video"));
  };

  onBrushesEnter = function () {
    appState.curSceneIndex = 2;
    playVideo(document.querySelector(".brushes-video"));
  };

  onBrushesLeaveBack = function () {
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector(".brushes-video"));
  };

  onRetouchEnter = function () {
    appState.curSceneIndex = 2;
    resetVideo(document.querySelector(".brushes-video"));
  };

  onRetouchLeaveBack = function () {
    appState.curSceneIndex = 3;
    playVideo(document.querySelector(".brushes-video"));
  };

  onSliderIn = function () {
    $retouch.classList.toggle("slide", true);
  };

  onSliderOut = function () {
    $retouch.classList.toggle("slide", false);
    appState.slideComplete = false;
  };

  setSliderPos = function (curX) {
    $slider.style.transform = `translateX(${curX}px)`;
    $slide.style.width = `${curX}px`;
  };

  onSliderDown = function (e) {
    const curX = e.clientX;
    appState.isDragging = true;
    setSliderPos(curX);
    addMouseListeners();
  };

  addSliderDownListener = function(){
    document
      .querySelector(".retouch-slide-handle-container")
      .addEventListener("mousedown", onSliderDown);
  }

  removeSliderDownListener = function(){
    document
      .querySelector(".retouch-slide-handle-container")
      .removeEventListener("mousedown", onSliderDown);
  }

  checkSliderInteraction = function(){
    if (!appState.isDragging && !appState.slideComplete){
      animateSliderComplete();
    }
  }

  animateSliderComplete = function(){
    //removeSliderDownListener();
    appState.slideComplete = true;
    $retouch.classList.toggle('slide',false);
    gsap.to(".retouch-2", { width: appState.screenDims.width, duration: 0.5 });
    gsap.to(".retouch-slide-handle-container", { translateX: appState.screenDims.width, duration: 0.5 });
  }

  oniPadEnter = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
  };

  oniPadLeaveBack = function () {
    appState.curSceneIndex = 3;
    resetVideo(document.querySelector(".ipad-video"));
  };

  onWhatsNewEnter = function () {
    appState.curSceneIndex = 5;
  };

  onWhatsNewLeaveBack = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
  };

  initTimelines = function () {
    initTimelineTransform();
    initTimelineBrushes();
    initTimelineRetouch();
    initTimelineiPad();
    initTimelineWhatsNew();
  };

  initTimelineTransform = function () {
    tlTransform = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-transform",
        pin: ".transform-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: `+=${
          sceneConfig.scenes.transform.sceneDuration *
          appState.screenDims.height
        }`, // end after scrolling this distance
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        //onUpdate: onScrollUpdate,
        onEnter: onTransformEnter,
        onLeaveBack: onTransformLeaveBack,
      },
    });

    tlTransform
      .from(".transform-title", { autoAlpha: 0, translateY: 20 }, "start")
      //.from(".transform-sequence-01", { autoAlpha: 0 }, "start")
      .from(".transform-copy-p", { autoAlpha: 0 }, "l1")
      .from(
        ".transform-panel-container",
        { translateY: "10vh", autoAlpha: 0 },
        "panelIn"
      )
      .from(".transform-feature.p2", { autoAlpha: 0 }, "l2")
      .from(".transform-sequence.t2", { autoAlpha: 0 }, "t2")
      .to(".null", { opacity: 0 }, "spacer")
      .to(
        ".transform-panel-container",
        { translateY: "-10vh", autoAlpha: 0 },
        "panelOut"
      )
      .from(".transform-feature.p3", { autoAlpha: 0 }, "l3")
      .from(
        ".transform-tools-container",
        { translateY: "10vh", autoAlpha: 0 },
        "l3"
      )
      .from(".transform-sequence.t3", { autoAlpha: 0 }, "l3")
      .to(".transform-sequence.t2", { autoAlpha: 0 }, "t2Out")
      .to(".transform-sequence.t1", { autoAlpha: 0 }, "t2Out")
      .to(".null", { opacity: 1 }, "spacer2")
      .to(
        ".transform-tools-container",
        { translateY: "-10vh", autoAlpha: 0 },
        "toolsOut"
      )

      .from(
        ".transform-sequence.t4",
        {
          autoAlpha: 0,
          onStart: function () {
            document.querySelector(".transform-sequence.t4").currentTime = 0;
          },
        },
        "t4"
      )
      .to(
        ".transform-sequence.t3",
        {
          autoAlpha: 0,
          onComplete: function () {
            document.querySelector(".transform-sequence.t4").play();
          },
        },
        "t3Out"
      )
      .from(
        ".transform-masks-panel-container",
        {
          translateY: "10vh",
          autoAlpha: 0,
        },
        "masksPanelIn"
      )
      .from(".transform-feature.p4", { autoAlpha: 0 }, "l4")
      .to(".null", { opacity: 0 }, "spacer3")
      .to(
        ".transform-masks-panel-container",
        { translateY: "-10vh", autoAlpha: 0 },
        "masksPanelOut"
      )
      .from(
        ".transform-blend-panel-container",
        { translateY: "10vh", autoAlpha: 0 },
        "blendPanelIn"
      )
      .to(
        ".transform-tools-container",
        { translateY: "0vh", autoAlpha: 1 },
        "blendPanelIn"
      )
      .from(".transform-feature.p5", { autoAlpha: 0 }, "l5")
      .to(
        ".transform-blend-panel-container",
        { translateY: "-10vh", autoAlpha: 0 },
        "blendPanelOut"
      )
      .to(
        ".transform-tools-container",
        { translateY: "10vh", autoAlpha: 0 },
        "blendPanelOut"
      )
      .to(
        ".null",
        {
          opacity: 1,
          duration: 3,
          onComplete: function () {
            document.querySelector(".transform-sequence.t4").currentTime =
              sceneConfig.videos[appState.curVidIndex].duration; //set fish video to the end
          },
        },
        "spacer4"
      )
      .addLabel("end");
  };

  initTimelineBrushes = function () {
    tlBrushes = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-brushes",
        pin: ".brushes-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        anticipatePin: 1, //triggers the pin slightly early due to fact that pinning seems to happen a bit after top of this section disappears before it is re-pinned to top
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onBrushesEnter,
        onLeaveBack: onBrushesLeaveBack,
      },
    });

    tlBrushes
      .to(".null", { scale: 0, duration: 2 }, "spacer1")
      .from(".brushes-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(
        ".brushes-intro",
        { autoAlpha: 0, translateY: 20 },
        "brushesIntroIn"
      )
      .from(".brushes-button-container", { autoAlpha: 0 }, "brushesButtonIn")
      .to(".null", { opacity: 0, duration: 5 }, "spacer2")
      .addLabel("end");
  };

  initTimelineRetouch = function () {
    tlRetouch = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-retouch",
        pin: ".retouch-container", // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: `+=${
          sceneConfig.scenes.retouch.sceneDuration *
          appState.screenDims.height
        }`,
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onRetouchEnter,
        onLeaveBack: onRetouchLeaveBack,
      },
    });

    tlRetouch
      .to(".retouch-2", { width: `${appState.screenDims.width/2}px`, 
        onUpdate: function(){
          $slider.style.transform = `translateX(${$slide.style.width})`
        },
        onComplete: onSliderIn }, "sliderIn")
      .from(
        ".retouch-title-line.l1",
        { autoAlpha: 0, translateY: 20 },
        "sliderIn"
        )
      .to(".null", { opacity: 1, duration: 3, onComplete: checkSliderInteraction }, "spacer1")
      .from(
        ".retouch-title-line.l2",
        { autoAlpha: 0, translateY: 20 },
        "remixIn"
      )
      .to(".retouch-2", { width: `${appState.screenDims.width}px`,
        onUpdate: function(){
          $slider.style.transform = `translateX(${$slide.style.width})`
        },
        onComplete: onSliderOut
      }, "remixIn")
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
      .to(".null", { opacity: 0, duration: 2 }, "spacer2")
      .to(
        ".retouch-tools-container",
        { autoAlpha: 0, translateY: -20 },
        "retouchToolsOut"
      )
      .to(
        ".retouch-brushes-container",
        { autoAlpha: 0, translateY: 20 },
        "retouchToolsOut"
      )
      .from(
        ".retouch-masks-container",
        { autoAlpha: 0, translateY: 20 },
        "retouchMasksIn"
      )
      .to(".null", { opacity: 1, duration: 1 }, "spacer3")
      .to(
        ".retouch-masks-container",
        { autoAlpha: 0, translateY: -20 },
        "retouchMasksOut"
      )
      .from(
        ".retouch-tools-container-2",
        { autoAlpha: 0, translateY: 20 },
        "retouchTools2In"
      )
      .to(".null", { opacity: 0 }, "spacer4")
      .from(
        ".retouch-pen-tools-container",
        { autoAlpha: 0 },
        "retouchPenToolsIn"
      )
      .to(
        ".retouch-image-2",
        { scale: 1.5 },
        "retouchPenToolsIn"
      )
      .from(
        ".retouch-pen-options-container",
        { autoAlpha: 0, translateY: -20 },
        "retouchPenOptionsIn"
      )
      .to(".null", { opacity: 1, duration: 1 }, "spacer5") //placeholder for path 
      .to(
        ".retouch-tools-container-2",
        { autoAlpha: 0, translateY: -20 },
        "retouchPenToolsOut"
      )
      .to(
        ".retouch-pen-tools-container",
        { autoAlpha: 0 },
        "retouchPenToolsOut"
      )
      .to(".null", { opacity: 0, duration: 1 }, "spacer6") //placeholder for path tool
      .from(
        ".retouch-title-line.l3",
        { autoAlpha: 0, translateY: 20 },
        "reimagineIn"
      )
      .to(
        ".retouch-image-2",
        { scale: 1 },
        "retouchImageBack"
      )
      .to(
        ".retouch-pen-options-container",
        { autoAlpha: 0, translateY: 20 },
        "retouchImageBack"
      )
      .from(".retouch-intro", { autoAlpha: 0 }, "retouchIntroIn")
      .from(".retouch-button", { autoAlpha: 0 }, "retouchIntroButtonIn")
      .to(".null", { opacity: 0, duration: 2 }, "spacer7")
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
      .from(".ipad-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(
        ".ipad-intro",
        { autoAlpha: 0, translateY: 20 },
        "ipadIntroIn"
      )
      .from(".ipad-button-container", { autoAlpha: 0 }, "ipadButtonIn")
      .to(".null", { opacity: 1 }, "spacer1")
      .addLabel("end");

  };

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

  mapValue = function (value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  };

  init = function () {
    getScreenDims();
    addDomReferences();
    addListeners();
    initTimelines();
    initSubmodules();
  };

  return {
    init: init,
  };
})();


document.addEventListener('DOMContentLoaded', (event) => {
  ps.init();
});
