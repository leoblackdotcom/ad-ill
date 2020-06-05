gsap.registerPlugin(ScrollTrigger);

const ps = (function () {
  const self = this;
  //const counter = 0;
  let tlTransform, tlBrushes, tlRetouch;
  let curCanvas, curContext, curConfig, curPath; //for drawing image frames
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
        sceneDuration: 3,
      }
    },
    videoBasePath: 'assets/videos',
    videos: [
      {
        directory: 'fish',
        frames: 53, //ffprobe -v error -select_streams v:0 -show_entries stream=nb_frames -of default=nokey=1:noprint_wrappers=1 [filename].mp4
        selector: '.transform-sequence.t4',
        scrollStart: .76,
        scrollEnd: .84,
        duration: 3.637, //ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp4
        fps: 30,
      }
    ]
  };

  let appState = {
    curVidIndex: 0,
    loadedIndex: 0,
    curSceneIndex: 0,
    screenDims: {},
  }
  
  let fishVid = document.querySelector(".transform-sequence.t4");

  getScreenDims = function () {
    appState.screenDims.width = window.innerWidth;
    appState.screenDims.height = window.innerHeight;
  };

  addListeners = function(){
    //
  }

  onScrollUpdate = (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity(),
    );
  };

  resetVideo = function($video){
    $video.pause();
    $video.currentTime = 0;
  }

  playVideo = function($video){
    $video.play();
  }

  onTransformEnter = function(){
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector('.intro-video'));
  }

  onTransformLeaveBack = function(){
    appState.curSceneIndex = 0;
    resetVideo(document.querySelector('.transform-sequence.t4'));
    playVideo(document.querySelector('.intro-video'));
  }

  onBrushesEnter = function(){
    appState.curSceneIndex = 2;
    playVideo(document.querySelector('.brushes-video'));
  }

  onBrushesLeaveBack = function(){
    appState.curSceneIndex = 1;
    resetVideo(document.querySelector('.brushes-video'));
  }

  onRetouchEnter = function(){
    appState.curSceneIndex = 2;
    resetVideo(document.querySelector('.brushes-video'));
  }

  onRetouchLeaveBack = function(){
    appState.curSceneIndex = 3;
    playVideo(document.querySelector('.brushes-video'));
  }

  initTimelines = function(){
    initTimelineTransform();
    initTimelineBrushes();
    initTimelineRetouch();
  }

  initTimelineTransform = function () {
    tlTransform = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-transform",
        pin: '.transform-container', // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        //endTrigger: "#section-brushes",
        end: `+=${sceneConfig.scenes.transform.sceneDuration * appState.screenDims.height}`, // end after scrolling this distance
        //end: `top top`, // end after scrolling this distance
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        //onUpdate: onScrollUpdate,
        onEnter: onTransformEnter,
        onLeaveBack: onTransformLeaveBack,
      },
    });
    
    tlTransform.from(".transform-title", { autoAlpha: 0, translateY: 20 }, "start")
      //.from(".transform-sequence-01", { autoAlpha: 0 }, "start")
      .from(".transform-copy-p", { autoAlpha: 0 }, "l1")
      .from(".transform-panel-container", { translateY: "10vh", autoAlpha: 0 }, "panelIn")
      .from(".transform-feature.p2", { autoAlpha: 0 }, "l2")
      .from(".transform-sequence.t2", { autoAlpha: 0 }, "t2")
      .to('.null',{opacity: 0}, "spacer")
      .to(".transform-panel-container", { translateY: "-10vh", autoAlpha: 0  }, "panelOut")
      .from(".transform-feature.p3", { autoAlpha: 0 }, "l3")
      .from(".transform-tools-container", { translateY: "10vh", autoAlpha: 0 }, "l3")
      .from(".transform-sequence.t3", { autoAlpha: 0 }, "l3")
      .to(".transform-sequence.t2", { autoAlpha: 0 }, "t2Out")
      .to(".transform-sequence.t1", { autoAlpha: 0 }, "t2Out")
      .to('.null',{opacity: 1}, "spacer2")
      .to(".transform-tools-container", { translateY: "-10vh", autoAlpha: 0 }, "toolsOut")
      
      .from(".transform-sequence.t4", { autoAlpha: 0, onStart: function(){
        document.querySelector('.transform-sequence.t4').currentTime = 0;
      }}, "t4")
      .to(".transform-sequence.t3", { autoAlpha: 0, onComplete: function(){
        document.querySelector('.transform-sequence.t4').play();
      }  }, "t3Out")
      .from(
        ".transform-masks-panel-container",
        {
          translateY: "10vh",
          autoAlpha: 0,
        },
        "masksPanelIn"  
      )
      .from( ".transform-feature.p4", { autoAlpha: 0 }, "l4" )
      .to('.null',{opacity: 0}, "spacer3")
      .to(".transform-masks-panel-container", { translateY: "-10vh", autoAlpha: 0 }, "masksPanelOut")
      .from( ".transform-blend-panel-container", { translateY: "10vh",autoAlpha: 0 }, "blendPanelIn" )
      .to(".transform-tools-container", { translateY: "0vh", autoAlpha: 1 }, "blendPanelIn")
      .from( ".transform-feature.p5", { autoAlpha: 0 }, "l5" )
      .to( ".transform-blend-panel-container", { translateY: "-10vh",autoAlpha: 0 }, "blendPanelOut" )
      .to(".transform-tools-container", { translateY: "10vh", autoAlpha: 0 }, "blendPanelOut")
      .to('.null',{opacity: 1, duration: 3, onComplete: function(){
        document.querySelector('.transform-sequence.t4').currentTime = sceneConfig.videos[appState.curVidIndex].duration; //set fish video to the end
      }}, "spacer4")
      .addLabel("end");
  };

  initTimelineBrushes = function(){
    tlBrushes = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-brushes",
        pin: '.brushes-container', // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        //endTrigger: "#section-brushes",
        end: `+=${sceneConfig.scenes.brushes.sceneDuration * appState.screenDims.height}`, // end after scrolling this distance
        //end: `top top`, // end after scrolling this distance
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        //onUpdate: onScrollUpdate,
        onEnter: onBrushesEnter,
        onLeaveBack: onBrushesLeaveBack
      },
    });

    tlBrushes.from(".brushes-title", { autoAlpha: 0, translateY: 20 }, "start")
      .from(".brushes-intro", { autoAlpha: 0, translateY: 20 }, "brushesIntroIn")
      .from(".brushes-button-container", { autoAlpha: 0 }, "brushesButtonIn")
      .to('.null',{opacity: 0}, "spacer3")
      .addLabel("end");
  }

  initTimelineRetouch = function(){
    tlRetouch = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-retouch",
        pin: '.retouch-container', // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        //endTrigger: "#section-brushes",
        end: `+=${sceneConfig.scenes.retouch.sceneDuration * appState.screenDims.height}`, // end after scrolling this distance
        //end: `top top`, // end after scrolling this distance
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        //onUpdate: onScrollUpdate,
        onEnter: onRetouchEnter,
        onLeaveBack: onRetouchLeaveBack
      },
    });

    tlRetouch.to(".retouch-2", { width: '50%' }, "sliderIn")
      .from(".retouch-title-line.l1", { autoAlpha: 0, translateY: 20 }, "sliderIn")
      .from(".retouch-title-line.l2", { autoAlpha: 0, translateY: 20 }, "remixIn")
      .from(".retouch-title-line.l3", { autoAlpha: 0, translateY: 20 }, "reimagineIn")
      .from(".retouch-intro", { autoAlpha: 0 }, "retouchIntroIn")
      .from(".retouch-button", { autoAlpha: 0 }, "retouchIntroButtonIn")
      .to('.null',{opacity: 1}, "spacer1")
      .addLabel("end");
  }

  mapValue = function(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  init = function () {
    getScreenDims();
    addListeners();
    initTimelines();
  };

  return {
    init: init,
  };
})();

ps.init();
