const ps = (function () {
  //const counter = 0;
  const screenDims = {};
  let tl;
  let curCanvas; //for drawing image frames
  let sceneConfig = {
    nativeWidth: 1679,
    nativeHeight: 1119,
    transform: {
      sceneDuration: 4,
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
  }
  
  let fishVid = document.querySelector(".transform-sequence.t4");

  getScreenDims = function () {
    screenDims.width = window.innerWidth;
    screenDims.height = window.innerHeight;
  };

  onScrollUpdate = (self) => {
    let curLabel = tl.currentLabel();
    if (curLabel === 'masksPanelIn'){
      const labelProgress = tl.getTweensOf('.transform-masks-panel-container')[0].progress();
      const vidDuration = sceneConfig.videos[0].duration;
      const vidTime = labelProgress * vidDuration;
      console.log(labelProgress,vidTime,fishVid);
      fishVid.currentTime = vidTime;
    }
    //console.log(tl.currentLabel())
    //console.log(self.getTweensOf('.transform-masks-panel-container').progress())
    // console.log(
    //   "progress:",
    //   self.progress.toFixed(3),
    //   "direction:",
    //   self.direction,
    //   "velocity",
    //   self.getVelocity(),
    // );
  };

  initTimeline = function () {
    tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-transform",
        pin: false, // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: `+=${sceneConfig.transform.sceneDuration * screenDims.height}`, // end after scrolling this distance
        scrub: 1, // smooth scrubbing, e.g. '1' takes 1 second to "catch up" to the scrollbar. `true` is a direct 1:1 between scrollbar and anim
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 1, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        onUpdate: onScrollUpdate,
      },
    });
    
    tl.from(".transform-title", { autoAlpha: 0, translateY: 20 }, "start")
      //.from(".transform-sequence-01", { autoAlpha: 0 }, "start")
      .from(".transform-copy-p.p1", { autoAlpha: 0 }, "l1")
      .from(".transform-panel-container", { translateY: "50vh" }, "panelIn")
      .from(".transform-copy-p.p2", { autoAlpha: 0 }, "l2")
      .from(".transform-sequence.t2", { autoAlpha: 0 }, "t2")
      .to('.null',{opacity: 0}, "spacer")
      .to(".transform-panel-container", { translateY: "-200vh" }, "panelOut")
      .from(".transform-copy-p.p3", { autoAlpha: 0 }, "l3")
      .from(".transform-tools-container", { translateY: "100vh" }, "l3")
      .from(".transform-sequence.t3", { autoAlpha: 0 }, "l3")
      .to('.null',{opacity: 1}, "spacer")
      .to(".transform-tools-container", { translateY: "-200vh" }, "toolsOut")
      .to(".transform-sequence.t3", { autoAlpha: 0 }, "t4")
      .from(".transform-sequence.t4", { autoAlpha: 0}, "t4")
      .from(
        ".transform-masks-panel-container",
        {
          translateY: "100vh",
        },
        "masksPanelIn"
      )
      .from( ".transform-copy-p.p4", { autoAlpha: 0, onComplete: () => {
        
        //document.querySelector(".transform-sequence.t4").play();
      }, }, "l4" )
      .to(".transform-masks-panel-container", { translateY: "-150vh" }, "masksPanelOut")
      .addLabel("end");
  };

  initVideo = function(){
    
    curCanvas = document.querySelector(sceneConfig.videos[appState.curVidIndex].selector);

    const configRef = sceneConfig.videos[appState.curVidIndex];

    curPath = `${sceneConfig.videoBasePath}/${configRef.directory}/frames/${configRef.directory}`; 

    curCanvas.width = sceneConfig.nativeWidth;
    curCanvas.height = sceneConfig.nativeHeight;
    const context = curCanvas.getContext('2d');

    
    const curImagePath = `${curPath}01.jpg`;
    const curImage = new Image();
    curImage.src=curImagePath;
    context.drawImage(curImage, 0, 0);

  }

  mapValue = function(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  init = function () {
    getScreenDims();
    //initVideo();
    initTimeline();
  };

  return {
    init: init,
  };
})();

ps.init();
