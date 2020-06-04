const ps = (function () {
  //const counter = 0;
  const screenDims = {};
  let tl;
  let sceneConfig = {
    transform: {
      sceneDuration: 4,
    },
  };

  getScreenDims = function () {
    screenDims.width = window.innerWidth;
    screenDims.height = window.innerHeight;
  };

  onScrollUpdate = (self) => {
    /*console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );*/
  };

  initTimeline = function () {
    tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#section-transform",
        pin: false, // pin the trigger element while active?
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: `+=${sceneConfig.transform.sceneDuration * screenDims.height}`, // end after scrolling this distance
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        onUpdate: onScrollUpdate,
      },
    });
    tl.from(".transform-title", { autoAlpha: 0, translateY: 20 }, "start")
      //.from(".transform-sequence-01", { autoAlpha: 0 }, "start")
      .from(".transform-copy-p.p1", { autoAlpha: 0 }, "l1")
      .from(".transform-panel", { translateY: "50vh" }, "panelIn")
      .from(".transform-copy-p.p2", { autoAlpha: 0 }, "l2")
      .from(".transform-sequence.t2", { autoAlpha: 0 }, "t2")
      .to(".transform-panel", { translateY: "-150vh" }, "panelOut")
      .from(".transform-copy-p.p3", { autoAlpha: 0 }, "l3")
      .from(".transform-tools-container", { translateY: "100vh" }, "l3")
      .from(".transform-sequence.t3", { autoAlpha: 0 }, "t3")
      .from(".transform-sequence.t4", { autoAlpha: 0 }, "toolsOut")
      .to(".transform-tools-container", { translateY: "-200vh" }, "toolsOut")
      .from(
        ".transform-masks-panel",
        {
          translateY: "100vh",
          onComplete: () => {
            document.querySelector(".transform-sequence.t4").play();
          },
        },
        "masksPanelIn"
      )
      .from( ".transform-copy-p.p4", { autoAlpha: 0, }, "l4" )
      .to(".transform-masks-panel", { translateY: "-150vh", delay: 1 }, "masksPanelOut")
      .addLabel("end");
  };

  init = function () {
    getScreenDims();
    initTimeline();
  };

  return {
    init: init,
  };
})();

ps.init();
