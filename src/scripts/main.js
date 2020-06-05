const ps = (function () {
  //const counter = 0;
  const screenDims = {};
  let tl, tl2;
  let curCanvas, curContext, curConfig, curPath; //for drawing image frames
  let sceneConfig = {
    nativeWidth: 1679,
    nativeHeight: 1119,
    scenes: {
      transform: {
        sceneDuration: 7,
      },
      brushes: {
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
  }
  
  let fishVid = document.querySelector(".transform-sequence.t4");

  getScreenDims = function () {
    screenDims.width = window.innerWidth;
    screenDims.height = window.innerHeight;
  };

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

  onBrushesEnter = function(){
    appState.curSceneIndex++;
  }

  initTimeline = function () {
    tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-transform",
        pin: true, // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        //endTrigger: "#section-brushes",
        end: `+=${sceneConfig.scenes.transform.sceneDuration * screenDims.height}`, // end after scrolling this distance
        //end: `top top`, // end after scrolling this distance
        scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        //onUpdate: onScrollUpdate,
      },
    });
    
    tl.from(".transform-title", { autoAlpha: 0, translateY: 20 }, "start")
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

      tl2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: "#section-brushes",
          pin: true, // pin the trigger element while active?
          start: "top top", // when the top of the trigger hits the top of the viewport
          //endTrigger: "#section-brushes",
          end: `+=${sceneConfig.scenes.brushes.sceneDuration * screenDims.height}`, // end after scrolling this distance
          //end: `top top`, // end after scrolling this distance
          scrub: true, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
          //onUpdate: onScrollUpdate,
          onEnter: onBrushesEnter
        },
      });
  };

  mapValue = function(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  init = function () {
    getScreenDims();
    initTimeline();
  };

  return {
    init: init,
  };
})();

ps.init();
