
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// SECTION: BEEBLY --------

// ---- variables

var beeSection     = document.getElementById('section-beebly');
var beeSectionPos  = beeSection.getBoundingClientRect().top + document.documentElement.scrollTop;

// ---- gsap settings

gsap.set(".bjf-1", { opacity: 1 });
gsap.set(".bjf-2", { opacity: 0 });
gsap.set(".bjf-3", { opacity: 0 });
gsap.set(".bjf-1 mark", { background: "none", color: "inherit", duration: 0.1 });
gsap.set(".bjf-0", { opacity: 0, background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })

// ---- ANIM: Flower stem sway

var path = document.getElementById('curve');
var path2 = document.getElementById('curve2');
//var flowerA = document.getElementById('flowerA');

/* I'm using tween.js a simple JavaScript tweening engine for tweens */
var tween;
function animateCurve() {
  // sway goes left
  tween = new TWEEN.Tween({ x: 60 })
  .to({ x: 200 }, 4000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath(this.x);
  }).onComplete(function() {
    // sway goes right
    tween = new TWEEN.Tween({ x: 200 })
    .to({ x: 60 }, 4000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath(this.x);
    }).onComplete(function() {
      animateCurve();
    }).start();
  }).start();
}

function updatePath(x) {
  // update SVG path control point
  path.setAttribute('d', 'M130,540 Q130,270 '+x+', 10');
  path2.setAttribute('d', 'M130,240 Q130,120 '+x+', 10');
}

function animate(time) {
  // this just keeps the tween engine ticking
  requestAnimationFrame( animate );
  TWEEN.update(time);
}

animate();
animateCurve(); 



// ---- ANIM: Build the bee from pieces

var beeBuild = new TimelineMax({
  defaults: {
    duration: 0.5 }
  });
beeBuild
  .from('.bee-head', { opacity: 0, y: 20, x: 20 })
  .from('.bee-wing', { opacity: 0, y: 20 })
  .from('.bee-body', { opacity: 0, y: 20, x: -20 })
  .from('.bee-stripe-top', { opacity: 0, y: 20, x: -20 })
  .from('.bee-stripe-bottom', { opacity: 0, y: 20, x: -20 })
  .from('.bee-butt', { opacity: 0, x: -20 })
  .from('.bounding-box', { borderColor: 'transparent' })
  .from('.bounding-box span', { opacity: 0 }, '-=.5')

// ---- ANIM: Shrink the bee

var beeShrink = new TimelineMax({
  defaults: {
    duration: 1 }
  });
beeShrink
  .from('.beebly-cursor', { opacity: 0 })
  .to('.beebly-cursor', { top: "100%", right: "100%" }, '-=1')
  .to('.bounding-box', { width: 110, marginBottom: -284  })
  .to('.beebly-cursor', 0.5, { opacity: 0 })

// ---- ANIM: Move flowers in

var beeGroundRise = new TimelineMax();
beeGroundRise
  .to('.beebly-ground', 2, { bottom: -400 })

// ---- ANIM: Move ground to final position

var beeGround = new TimelineMax();
beeGround
  .to('.beebly-ground', 4, { bottom: 268 })

// ---- ANIM: Move bee to jar

var beePlaceOnJar = new TimelineMax({
  defaults: {
    duration: 1 }
  });
beePlaceOnJar
  .to('.beebly-cursor', { opacity: 1, y: -50, x: 55 })
  .to('.bounding-box', { right: 518, bottom: 580 })
  .to('.bounding-box span', 0.5, { opacity: 0 })
  .to('.bounding-box', 0.5, { borderColor: "transparent" }, '-=0.5')
  .to('.beebly-cursor', 0.5, { opacity: 0 }, '-=1')

  // ---- ANIM: Bee font flip

var beeFontFlip = new TimelineMax({
  defaults: {
    duration: 1 }
  });
beeFontFlip
  .to(".bjf-1", 0, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)', delay: -.5 })
  .to(".bjf-1", 1, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })
  .to(".bjf-1", 0, { opacity: 0 })
  .to(".bjf-2", 0, { opacity: 1 })
  .to(".bjf-2", 1, { opacity: 1 })
  .to(".bjf-2", 0, { opacity: 0 })
  .to(".bjf-3", 0, { opacity: 1 })
  .to(".bjf-3", 1, { opacity: 1 })
  .to(".bjf-3 mark", 1, { background: "none", color: "inherit" })
  .to(".bjf-3", 2, { opacity: 1 })

// ---- ANIM: Bee master index

var beeIndex = new TimelineMax({
    paused: true,
    defaults: {
      ease: "none"
    }
  });
beeIndex
  .add(beeGroundRise)
  .add(beeBuild, '-=1')
  .add(beeShrink)
  .add(beeGround, '-=1')
  .add(beePlaceOnJar)
  .add(beeFontFlip, '+=1')
  .addLabel('the-end')


// ---- TRIG: LIKE start

var beeTrigger = ScrollTrigger.create({
  trigger: "#section-beebly",
  start: "top top",
  pin: true,
  scrub: 3,
  end: "+=12400",
  onUpdate: ({progress}) => beeIndex.progress() < progress ? beeIndex.progress(progress) : null,
  onEnterBack: () => window.scrollTo(0, beeSectionPos)
});

// ---- TRIG: LIKE reset when scroll back past section

ScrollTrigger.create({
  trigger: "#section-beebly",
  start: "top bottom",
  onLeaveBack: () => beeIndex.progress(0)
});


//beeIndex.seek('the-end')

// SECTION: LIKE --------

// ---- variables

// like section height + large LIKE height
var likeHeight = $('#section-like').height();
likeHeight = likeHeight * 2.5;
// starting LIKE height
var originalLikeHeight = $('.like-layered-wrapper').height();
// LIKE height for social view
socialLikeHeight = originalLikeHeight * .35;
// yop of LIKE section position
var likeSection     = document.getElementById('section-like');
var likeSectionPos  = likeSection.getBoundingClientRect().top + document.documentElement.scrollTop;

// ---- gsap settings

// set LIKE position
gsap.set(".like-layered-wrapper", { yPercent: -65, xPercent: -50 });
// set LIKE stroke
gsap.set(".like-layered", { strokeWidth: 2 });
// adjust first slide position so LIKE is partially visible
gsap.set(".first-like", { xPercent: -60 });
// set title
gsap.set(".like-title", { width: "50%" });

// ---- ANIM: Slide LIKE in

var likeSlideIn = new TimelineMax();
likeSlideIn
  .to('.like-colors-bg', 2, { xPercent: -180 })
  .to('.first-like', 2, { xPercent: -100 }, "-=2")
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
  .set('.social-post', { opacity: 1 })

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
  
// ---- ANIM: Stack LIKE layers

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

// ---- ANIM: Bouncing LIKE layers

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

// ---- ANIM: Unstack LIKE layers

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

// ----- ANIM: LIKE master index

var likeIndex = new TimelineMax({
    paused: true,
    defaults: {
      ease: "none"
    }
  });
likeIndex
  .add(likeSlideIn, '+=1')
  .add(likeScaleLarge, '-=1')
  .add(likeScaleSmall, '+=1')
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
    onUpdate: ({progress}) => likeIndex.progress() < progress ? likeIndex.progress(progress) : null,
    onEnterBack: () => window.scrollTo(0, likeSectionPos)
  });

// ---- TRIG: LIKE reset when scroll back past section

ScrollTrigger.create({
    trigger: "#section-like",
    start: "top bottom",
    onLeaveBack: () => likeIndex.progress(0)
  });

