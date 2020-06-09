gsap.registerPlugin(ScrollTrigger);

const ps = (function () {
  const self = this;
  //const counter = 0;
  let tlTransform, tlBrushes, tlBrushesContent, tlRetouch, tlWhatsNew, tliPadContent; //gsap timelines
  let canvidTransform, canvidRetouch;

  let curCanvas, curContext, curConfig, curPath; //for drawing image frames
  let $retouch, $slide, $body, $fishMaskVid, $retouchSequence, $brushesVideo, $ipadVideo; //dom references
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
    videos: {
      fishMaskVid: {
        directory: "fish",
        frames: 53, //ffprobe -v error -select_streams v:0 -show_entries stream=nb_frames -of default=nokey=1:noprint_wrappers=1 [filename].mp4
        selector: ".transform-sequence.t4",
        duration: 3.637, //ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp4
        sequence: "assets/images/transform/sequence-transform.jpg"
      },
      retouch: {
        frames: 103,
        selector: '.retouch-sequence',
        sequence: 'assets/images/retouch/sequence-retouch.jpg'
      }
    },
  };

  let appState = {
    curSceneIndex: 0,
    screenDims: {},
  };

  getScreenDims = function () {
    appState.screenDims.width = window.innerWidth;
    appState.screenDims.height = window.innerHeight;
  };

  addDomReferences = function () {
    $retouch = document.querySelector("#section-retouch");
    $slide = document.querySelector(".retouch-2");
    $body = document.getElementsByTagName("body")[0];
    $fishMaskVid = document.querySelector(".transform-sequence.t4");
    $retouchSequence = document.querySelector(".retouch-sequence");
    $brushesVideo = document.querySelector('.brushes-video');
    $ipadVideo = document.querySelector('.ipad-video');
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

  onTransformMaskVideoEnded = function () {
    //gsap.to(".transform-sequence.t5", { autoAlpha: 1, duration: 0.3 });
  };

  onTransformEnter = function () {
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector(".intro-video"));
  };

  onTransformLeaveBack = function () {
    appState.curSceneIndex = 0;

    //resetVideo(document.querySelector(".transform-sequence.t4"));
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

  onBrushesVideoEnded = function(){
    tlBrushesContent.play();
  }

  onRetouchEnter = function () {
    appState.curSceneIndex = 2;
    resetVideo(document.querySelector(".brushes-video"));
  };

  onRetouchLeaveBack = function () {
    appState.curSceneIndex = 3;
    playVideo(document.querySelector(".brushes-video"));
  };

  oniPadEnter = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
  };

  oniPadLeaveBack = function () {
    appState.curSceneIndex = 3;
    resetVideo(document.querySelector(".ipad-video"));
  };

  oniPadVideoEnded = function(){
    tliPadContent.play();
  }

  onWhatsNewEnter = function () {
    appState.curSceneIndex = 5;
  };

  onWhatsNewLeaveBack = function () {
    appState.curSceneIndex = 4;
    playVideo(document.querySelector(".ipad-video"));
  };

  initCanvid = function () {
    canvidTransform = canvid({
      selector: sceneConfig.videos.fishMaskVid.selector,
      width: sceneConfig.nativeWidth,
      height: sceneConfig.nativeHeight,
      videos: {
        clip1: {
          src: sceneConfig.videos.fishMaskVid.sequence,
          frames: sceneConfig.videos.fishMaskVid.frames,
          cols: 6,
          loops: 1,
        },
      },
      loaded: function () {
        canvidTransform.play("clip1");
        canvidTransform.pause();
      },
    });

    canvidRetouch = canvid({
      selector: sceneConfig.videos.retouch.selector,
      width: sceneConfig.nativeWidth,
      height: sceneConfig.nativeHeight,
      videos: {
        clip1: {
          src: sceneConfig.videos.retouch.sequence,
          frames: sceneConfig.videos.retouch.frames,
          cols: 6,
          loops: 1,
        },
      },
      loaded: function () {
        console.log(canvidRetouch);
        canvidRetouch.play("clip1"); //necessary to initialize frame by frame playback
        canvidRetouch.pause();
      },
    });

  };

  initTimelines = function () {
    initTimelineTransform();
    initTimelineBrushes();
    initTimelineBrushesContent();
    initTimelineRetouch();
    initTimelineiPad();
    initTimelineiPadContent();
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
            canvidTransform.setCurrentFrame(0); //make sure our video is at the start
          },
        },
        "t4"
      )
      .to(
        ".transform-sequence.t3",
        {
          autoAlpha: 0,
        },
        "t3Out"
      )
      .to(
        ".null",
        {
          scale: 0,
          duration: 2,
          onUpdate: function () {
            const thisProgress = this.progress();
            const currentFrame =
              Math.ceil(sceneConfig.videos.fishMaskVid.frames * thisProgress);
              canvidTransform.setCurrentFrame(currentFrame); 
          },
        },
        "spacer4"
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
      .to(".null", { opacity: 0 }, "spacer5")
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
      .from(".transform-sequence.t5", { autoAlpha: 0 }, "l5")
      .to(".null", { scale: 0.5, duration: 1 }, "spacer3")
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
            canvidTransform.setCurrentFrame(sceneConfig.videos.fishMaskVid.frames); //make sure our video is at the end
          },
        },
        "spacer6"
      )
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

  initTimelineiPadContent = function(){
    tliPadContent = gsap.timeline({
      paused: true,
    });

    tliPadContent.from(".ipad-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(".ipad-intro", { autoAlpha: 0, translateY: 20 }, "ipadIntroIn")
      .from(".ipad-button-container", { autoAlpha: 0 }, "ipadButtonIn");
  }

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
      .to(".null", { scale: 1, duration: 5 }, "spacer1")
      // .from(".brushes-title", { autoAlpha: 0, translateY: 20 }, "start")
      // .from(
      //   ".brushes-intro",
      //   { autoAlpha: 0, translateY: 20 },
      //   "brushesIntroIn"
      // )
      // .from(".brushes-button-container", { autoAlpha: 0 }, "brushesButtonIn")
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
          sceneConfig.scenes.retouch.sceneDuration * appState.screenDims.height
        }`,
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        onEnter: onRetouchEnter,
        onLeaveBack: onRetouchLeaveBack,
      },
    });

    tlRetouch
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
          canvidRetouch.setCurrentFrame(0);
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
          const currentFrame =
            Math.ceil(sceneConfig.videos.retouch.frames * thisProgress);
            canvidRetouch.setCurrentFrame(currentFrame);
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
      .to(".retouch-sequence", { scale: 1.25 }, "spacer2+=3.9")
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

      .to(".retouch-sequence", { scale: 1 }, "spacer2+=4.9")
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
      .to(".null", { scale: .5, duration: 2 }, "spacer2")
      .addLabel("end");
  };

  onBeforeUnload = function (e) {
    //http://sandbox-666666.webflow.io/on-page-refresh-start-from-top-of-page
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = "";
    $body.style.display = "none";
    window.scrollTo(0, 0);
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

  onReady = function () {
    setTimeout(() => {
      //MH - temp: set some minimum time that the loader displays - may want to remove if loading is guaranteed to take a few seconds or more
      gsap.to(".loader-inner", {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          console.log("ready");
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
    initCanvid();
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
