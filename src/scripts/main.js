
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

// ---- ANIM: Flower sway

var path1 = document.getElementById('curve1');
var path2 = document.getElementById('curve2');
var path3 = document.getElementById('curve3');
var path4 = document.getElementById('curve4');
var path5 = document.getElementById('curve5');
var stem1 = $('.stem-1 .flower');
var stem2 = $('.stem-2 .flower');
var stem3 = $('.stem-3 .flower');
var stem4 = $('.stem-4 .flower');
var stem5 = $('.stem-5 .flower');

var flowerSway = new TimelineMax({
  defaults: {
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut" }
});
flowerSway
  .to(stem1, 4, { left: 140})
  .fromTo(stem2, 5, { left: 40 }, { left: 100}, '-=4')
  .to(stem3, { left: 140}, '-=11')
  .fromTo(stem4, { left: 30 }, { left: 110}, '-=15')
  .fromTo(stem5, { left: 40 }, { left: 100}, '-=23')



 
var tween1;
function animateCurve1() {
  // sway goes left
  tween1 = new TWEEN.Tween({ x: 0 })
  .to({ x: 140 }, 4000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath1(this.x);
  }).onComplete(function() {
    // sway goes right
    tween1 = new TWEEN.Tween({ x: 140 })
    .to({ x: 0 }, 4000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath1(this.x);
    }).onComplete(function() {
      animateCurve1();
    }).start();
  }).start();
}
function updatePath1(x) {
  path1.setAttribute('d', 'M70,540 Q70,270 '+x+', 10');
}
function animate1(time) {
  requestAnimationFrame( animate1 );
  TWEEN.update(time);
}
animate1();
animateCurve1(); 


 
var tween2;
function animateCurve2() {
  // sway goes left
  tween2 = new TWEEN.Tween({ x: 40 })
  .to({ x: 100 }, 5000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath2(this.x);
  }).onComplete(function() {
    // sway goes right
    tween2 = new TWEEN.Tween({ x: 100 })
    .to({ x: 40 }, 5000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath2(this.x);
    }).onComplete(function() {
      animateCurve2();
    }).start();
  }).start();
}
function updatePath2(x) {
  path2.setAttribute('d', 'M70,240 Q70,120 '+x+', 10');
}
function animate2(time) {
  requestAnimationFrame( animate2 );
  TWEEN.update(time);
}
animate2();
animateCurve2(); 


 
var tween3;
function animateCurve3() {
  // sway goes left
  tween3 = new TWEEN.Tween({ x: 0 })
  .to({ x: 140 }, 3000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath3(this.x);
  }).onComplete(function() {
    // sway goes right
    tween3 = new TWEEN.Tween({ x: 140 })
    .to({ x: 0 }, 3000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath3(this.x);
    }).onComplete(function() {
      animateCurve3();
    }).start();
  }).start();
}
function updatePath3(x) {
  path3.setAttribute('d', 'M70,500 Q70,250 '+x+', 10');
}
function animate3(time) {
  requestAnimationFrame( animate3 );
  TWEEN.update(time);
}
animate3();
animateCurve3(); 


 
var tween4;
function animateCurve4() {
  // sway goes left
  tween4 = new TWEEN.Tween({ x: 30 })
  .to({ x: 110 }, 3000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath4(this.x);
  }).onComplete(function() {
    // sway goes right
    tween4 = new TWEEN.Tween({ x: 110 })
    .to({ x: 30 }, 3000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath4(this.x);
    }).onComplete(function() {
      animateCurve4();
    }).start();
  }).start();
}
function updatePath4(x) {
  path4.setAttribute('d', 'M70,310 Q70,155 '+x+', 10');
}
function animate4(time) {
  requestAnimationFrame( animate4 );
  TWEEN.update(time);
}
animate4();
animateCurve4(); 


 
var tween5;
function animateCurve5() {
  // sway goes left
  tween5 = new TWEEN.Tween({ x: 40 })
  .to({ x: 100 }, 3000)
  .easing( TWEEN.Easing.Cubic.InOut )
  .onUpdate( function () {
    updatePath5(this.x);
  }).onComplete(function() {
    // sway goes right
    tween5 = new TWEEN.Tween({ x: 100 })
    .to({ x: 40 }, 3000)
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( function () {
      updatePath5(this.x);
    }).onComplete(function() {
      animateCurve5();
    }).start();
  }).start();
}
function updatePath5(x) {
  path5.setAttribute('d', 'M70,180 Q70,90 '+x+', 10');
}
function animate5(time) {
  requestAnimationFrame( animate5 );
  TWEEN.update(time);
}
animate5();
animateCurve5(); 

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
  .to('.bounding-box', { right: 516, bottom: 576 })
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
  onLeaveBack: () => location.reload()
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
  .add(likeScaleLarge)
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

//window.onresize = function(){ location.reload(); }