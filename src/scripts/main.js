
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// BEEBLY ----


// LIKE ----

// ---- variables

// like section height + large LIKE type height
var likeHeight = $('#section-like').height();
likeHeight = likeHeight * 2.5;
// starting LIKE type height
var originalLikeHeight = $('.like-layered-wrapper').height();
// LIKE type height for social view
socialLikeHeight = originalLikeHeight * .35;
// Top of LIKE section position
var likeSection     = document.getElementById('section-like');
var likeSectionPos  = likeSection.getBoundingClientRect().top + document.documentElement.scrollTop
console.log(likeSectionPos);

// ---- gsap settings

// Set LIKE type position
gsap.set(".like-layered-wrapper", { yPercent: -65, xPercent: -50 });
// Set LIKE type stroke
gsap.set(".like-layered", { strokeWidth: 2 });
// Adjust first slide position so LIKE is partially visible
gsap.set(".first-like", { xPercent: -60 });
// Set title
gsap.set(".like-title", { width: "50%" });

// ---- ANIM: Slide LIKE in

var likeSlideIn = new TimelineMax();
likeSlideIn
  .to('.like-colors-bg', 1, { xPercent: -180 })
  .to('.first-like', 2, { xPercent: -100 }, "-=1")
  .set('.like-colors-bg', { opacity: 0, xPercent: 0, zIndex: 11 })
  .set('.like-colors-bg svg', { opacity: 0 })
  .set(".like-title", { width: "100%", marginTop: "115px"  })
  .set(".like-container", { alignItems: "center", textAlign: "center" })

// ---- ANIM: Scale LIKE to large

var likeScaleLarge = new TimelineMax();
likeScaleLarge
  .to('.like-layered-wrapper', 2, { 
    height: likeHeight, 
    xPercent: 0, 
    yPercent: -100, 
    top: 0, 
    left: 0 
  })
  .to('.like-layered-wrapper', 1, { xPercent: -80 })
  .to('.social-post', .01,  { opacity: 1 })

// ---- ANIM: Scale LIKE to small for instagram

var likeScaleSmall = new TimelineMax();
likeScaleSmall
  .to('.like-layered-wrapper', 1, { 
    height: socialLikeHeight, 
    xPercent: -85, 
    yPercent: -65, 
    top: "50%", 
    left: "50%"
  })
  .to('.like-layered', 0.1, { strokeWidth: 1 }, "-=0.5")
  
// ---- ANIM: Stack like layers

var likeLayersStack = new TimelineMax({ 
  defaults: {
    duration: 5, 
    stagger: -2, 
    delay: -.5}
  });
likeLayersStack
  .timeScale(12)
  .to('.like-l.color-layer', { y: 0 })
  .to('.like-i.color-layer', { y: 0 }, "-=5")
  .to('.like-k.color-layer', { y: 0 }, "-=5")
  .to('.like-e.color-layer', { y: 0 }, "-=5");

// ---- ANIM: Bouncing like layers

var likeBouncing = new TimelineMax({ 
  duration: 1,
  defaults: {
    duration: 1, 
    stagger: -0.5, 
    delay: -2.3}
  });
likeBouncing
  .timeScale(4)
  .to('.like-l', { yPercent: 40 })
  .to('.like-i', { yPercent: 40 })
  .to('.like-k', { yPercent: 40 })
  .to('.like-e', { yPercent: 40 })
  .to('.like-l', { yPercent: 0 })
  .to('.like-i', { yPercent: 0 })
  .to('.like-k', { yPercent: 0 })
  .to('.like-e', { yPercent: 0 });

// ---- ANIM: Change layer colors

var likeLayersColorChange = new TimelineMax();
likeLayersColorChange
  .set('.like-red', { fill: "#7a45ff" })
  .set('.like-orange', { fill: "#00c3e8" })
  .set('.like-cyan', { fill: "#ffba00" })
  .set('.like-blue', { fill: "#fd344f" })

// ---- ANIM: Unstack like layers

var likeLayersUnstack = new TimelineMax({ 
  defaults: {
    duration: .1, 
    stagger: -0.05 }
  });
likeLayersUnstack
  .to('.like-red', { yPercent: 10 })
  .to('.like-orange', { yPercent: 20 })
  .to('.like-cyan', { yPercent: 30 })
  .to('.like-blue', { yPercent: 40 })
  .to('.social-post', 2, { opacity: 0, scale: 3 }, '-=1')

// ---- ANIM: LIKE scale final

var likeScaleFinal = new TimelineMax();
likeScaleFinal
  .to('.like-layered-wrapper', 3, { 
    height: likeHeight, 
    xPercent: -80, 
    yPercent: -100, 
    top: 0, 
    left: 0 
  })
  .to('.like-colors-bg', 1, { opacity: 1 })

// ----- ANIM: LIKE index
var likeIndex = new TimelineMax({
    paused: true,
    defaults: {
      ease: "none"
    }
  });
likeIndex
  .add(likeSlideIn)
  .add(likeScaleLarge, '-=1')
  .add(likeScaleSmall)
  .add(likeLayersStack)
  .add(likeBouncing)
  .add(likeLayersColorChange)
  .add(likeLayersUnstack)
  .add(likeScaleFinal, '-=2')

// ---- TRIG: LIKE start

var likeTrigger = ScrollTrigger.create({
    trigger: "#section-like",
    id: "likeStart",
    start: "top top",
    pin: true,
    scrub: 3,
    end: "+=8400",
    pinType: "fixed"
    //onUpdate: ({progress}) => likeIndex.progress() < progress ? likeIndex.progress(progress) : null,
    //onEnter: () => likeTrigger.enable(),
    //onLeave: () => console.log("onLeave"),
    //onEnterBack: () => window.scrollTo(0, likeSectionPos)
    //onLeaveBack: () => likeIndex.disable()
    //onScrubComplete: () => likeTrigger.disable()
  });

// ---- TRIG: LIKE pause when complete

