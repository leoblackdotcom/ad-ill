

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
ps.whatsNewModule = (function() {
  let experience, category;

  let tlCards; //gsap timeline for card anims
  const cardWatchingThreshold = .25; //above this percentage scroll value through the section, we won't watch for the card transitions
  
  // Updates the currently displayed articles based on the experience and category select menus
  function changeArticles() {
    // Get experience and category values
    experience = document.getElementById('experience-filter').value;
    category = document.getElementById('category-filter').value;
    
    // Get all articles and the target articles
    let articles = document.querySelectorAll(`.adobe-article[category=${category}][experience=${experience}]`);
    let allArticles = document.querySelectorAll(`.adobe-article-grid__grid-cell`);
    
    // Hide all articles
    allArticles.forEach(function(article) {
      article.style.display = 'none';
    });
    
    // Show current articles
    articles.forEach(function(article) {
      let parentCell = article.parentNode;
      parentCell.style.display = 'block';
    });
  }
  
  // Updates the currently displayed categories based on the experience select menu
  function updateCategories() {
    // Get the current experience
    experience = document.getElementById('experience-filter').value;
    
    // Get all categories and target categories
    let allCategories = document.querySelectorAll(`#category-filter option`);
    let currentCategories = document.querySelectorAll(`#category-filter option.filter--${experience}`);
    
    // Hide all categories
    allCategories.forEach(function(category) {
      category.style.display = 'none';
    });
    
    // Show current categories
    currentCategories.forEach(function(category) {
      category.style.display = 'block';
    });
    
    // Set the selected category to the first option in the dropdown
    document.getElementById('category-filter').value = currentCategories[0].value;
  }

  function onCardsUpdate(thisTrigger){
    const thisDirection = thisTrigger.direction;
    const thisProgress = thisTrigger.progress;
    if (thisProgress < cardWatchingThreshold){
      cardWatcher(thisDirection);
    }
  }
  
  function cardWatcher(thisDirection) {
    // Get all cards which are currently transformed and the current window height
    const isForward = thisDirection === 1 ? true : false;
    const offsetThreshold = .25; //percentage at which we show the card
    let cards = isForward ? document.querySelectorAll('.wn-cards__card--hide') : document.querySelectorAll(".wn-cards__card:not(.wn-cards__card--hide)");
    let windowHeight = window.innerHeight;
    
    cards.forEach(function(card, index) {
      let offset = card.getBoundingClientRect().top;
      let height = card.offsetHeight;
      
      // Cards are transformed 25% down by default, so if the top offset minus the window height is
      //  less than 25% of the height, we should show the card
      
      let toChange = isForward ? 
        (offset - windowHeight - (height * offsetThreshold) < 0) : 
        (offset - windowHeight - (height * offsetThreshold) > -(windowHeight/2));
      
      if(toChange) {
        card.classList.toggle('wn-cards__card--hide', isForward ? false : true);
      }
    });
  }

  function initCardTimeline(){
    tlCards = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-whatsnew",
        start: "top bottom", 
        scrub: true, 
        onUpdate: onCardsUpdate
      },
    });
  }

  function init(){ //called from main.js
    // Update article on init
    changeArticles();
    
    // Watch input change for select menus
    document.addEventListener('input', function(e) {
    	// Only run on experience and category select inputs
    	if(e.target.id === 'experience-filter') {
        // If the experience changes, we have to update the categories first
        updateCategories();
        changeArticles();
      } else if(e.target.id === 'category-filter') {
        changeArticles();
      }
    }, false);
    
    // Watch scroll for when to transition cards in the What's New section
    initCardTimeline();
  }

  return {
    init: init
  }

}());
/*!
 * CSSRulePlugin 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function h(){return"undefined"!=typeof window}function i(){return t||h()&&(t=window.gsap)&&t.registerPlugin&&t}function j(){return n||(s(),o||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),n}var t,n,c,o,s=function _initCore(e){t=e||i(),h()&&(c=document),t&&(o=t.plugins.css)&&(n=1)},r={version:"3.6.0",name:"cssRule",init:function init(e,t,n,i,s){if(!j()||void 0===e.cssText)return!1;var r=e._gsProxy=e._gsProxy||c.createElement("div");this.ss=e,this.style=r.style,r.style.cssText=e.cssText,o.prototype.init.call(this,r,t,n,i,s)},render:function render(e,t){for(var n,i=t._pt,s=t.style,r=t.ss;i;)i.r(e,i.d),i=i._next;for(n=s.length;-1<--n;)r[s[n]]=s[s[n]]},getRule:function getRule(e){j();var t,n,i,s,r=c.all?"rules":"cssRules",o=c.styleSheets,l=o.length,u=":"===e.charAt(0);for(e=(u?"":",")+e.split("::").join(":").toLowerCase()+",",u&&(s=[]);l--;){try{if(!(n=o[l][r]))continue;t=n.length}catch(e){console.warn(e);continue}for(;-1<--t;)if((i=n[t]).selectorText&&-1!==(","+i.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!u)return i.style;s.push(i.style)}}return s},register:s};i()&&t.registerPlugin(r),e.CSSRulePlugin=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * GSAP 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&ae}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(Tt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||F,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||j)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>j)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-j}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=ca(r+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ja(t){return t instanceof Bt?ta(t):Ia(t,t._dur)}function La(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=U?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?La(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function Ma(t,e){return t||0===t?e(t):e}function Oa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ra(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ua(t){return t.sort(function(){return.5-Math.random()})}function Va(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Et(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ua(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Oa(_.amount||_.each)||0,m=m&&d<0?It(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Wa(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Oa(t))}}function Xa(u,t){var h,l,e=K(u);return!e&&s(u)&&(h=e=u.radius||U,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Wa(u.increment)),Ma(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=U,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Oa(t)}:Wa(u))}function Ya(t,e,r,i){return Ma(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function ab(e,r,t){return Ma(t,function(t){return e[~~r(t)]})}function db(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+Ya(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function gb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ib(t){return sa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function nb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ot+.5|0}function ob(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&Ot,t&Ot]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&Ot,c&Ot,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&Ot,t&Ot]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=nb(s+1/3,i,n),c[1]=nb(s,i,n),c[2]=nb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/Ot,n=c[1]/Ot,a=c[2]/Ot,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function pb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function qb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ob(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=pb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function tb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ct.test(r),t[1]=qb(t[1],e),t[0]=qb(t[0],e,pb(t[1])),!0}function Cb(t){var e=(t+"").split("("),r=St[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):St._CE&&Dt.test(t)?St._CE("",t):r}function Eb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Eb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Eb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Gb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in St[t]=ot[t]=a,St[n=t.toLowerCase()]=r,a)St[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=St[t+"."+e]=a[e]}),a}function Hb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ib(r,t,e){function Cl(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?Cl:"in"===r?function(t){return 1-Cl(1-t)}:Hb(Cl);return n=X/n,s.config=function(t,e){return Ib(r,t,e)},s}function Jb(e,r){function Kl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Kl:"in"===e?function(t){return 1-Kl(1-t)}:Hb(Kl);return t.config=function(t){return Jb(e,t)},t}var L,F,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,I,E,R,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},B={duration:.5,overwrite:!1,delay:0},U=1e8,j=1/U,X=2*Math.PI,G=X/4,V=0,J=Math.sqrt,W=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[#\-+.]*\b[a-z\d-=+%.]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:Q},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?K(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ra(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Ra(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ma(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},Ot=255,Mt={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,Pt=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){yk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,yk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),At()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),At=function _wake(){return!c&&Pt.wake()},St={},Dt=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,It=function _invertEase(e){return function(t){return 1-e(1-t)}},Et=function _parseEase(t,e){return t&&(p(t)?t:St[t]||Cb(t))||e};function yk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(yk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function _l(t){return t<R?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Gb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,Gb("Elastic",Ib("in"),Ib("out"),Ib()),E=7.5625,R=1/2.75,Gb("Bounce",function(t){return 1-_l(1-t)},_l),Gb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Gb("Circ",function(t){return-(J(1-t*t)-1)}),Gb("Sine",function(t){return 1===t?1:1-W(t*G)}),Gb("Back",Jb("in"),Jb("out"),Jb()),St.SteppedEase=St.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},B.ease=St["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=V++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Wt},Ft=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===j||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-j?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-j?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=j)&&Math.abs(this._zTime)!==j))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ja(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(La(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-j:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-j,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-j))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function rn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?rn():i._prom=rn})},Rt.kill=function kill(){ib(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||Pt.wake(),r&&Ca(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ja(Ft.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-j,_prom:0,_ps:!1,_rts:1});var Bt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Ba(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Gt(t,ea(arguments,0,this),La(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Gt(t,ea(arguments,1,this),La(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Gt(t,ea(arguments,2,this),La(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,La(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Gt.delayedCall(0,t,e),La(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,La(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-j<t&&0<=t?m:t<j?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Eb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),_||!(i||!g&&0<=t)||e||xt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-j);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-j:j);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-j)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=La(this,e)),!(t instanceof Ft)){if(K(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Gt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(Pt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=La(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,La(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=La(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Gt?da(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=La(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Gt.to(r,ja({ease:"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||j,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ia(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:La(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+j)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===F&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ga(F,ya(t,F)),f=Pt.frame),Pt.frame>=ct){ct+=Y.autoSleep||120;var e=F._first;if((!e||!e._ts)&&Y.autoSleep&&Pt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Pt.sleep()}}},Timeline}(Ft);ja(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Qb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Ut(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||K(t)||Z(t))return o(t)?Ut(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Ut(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Jt:Qt:Vt;if(o(i)&&(~i.indexOf("random(")&&(i=db(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Oa(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=db(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Nt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!L,R=e.timeline;if(!R||C&&v||(v="none"),e._ease=Et(v,B.ease),e._yEase=k?It(Et(!0===k?v:k,B.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),!R){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&S.render(-1,!0).kill(),y){if(sa(e._startAt=Gt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),b)if(0<r)P||(e._startAt=0);else if(A&&!(r<0&&S))return void(r&&(e._zTime=r))}else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),sa(e._startAt=Gt.set(D,a)),b){if(!r)return}else _initTween(e._startAt,j);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Qb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(qt=e,F.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,qt=0),e._pt&&T&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!R&&!!g.runBackwards,e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Ut=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?db(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Gt=function(A){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=A.call(this,n?r:oa(r),i)||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=a.parent,P=(K(e)||Z(e)?q(e[0]):"length"in r)?[e]:Tt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ja(o.vars.defaults,{ease:"none"}),w.forEach(function(t){return o.to(P,t,">")});else{if(l=P.length,c=b?Va(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Xt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=P[u],h.duration=+Ut(m,_assertThisInitialized(a),u,d,P),h.delay=(+Ut(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,P))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||L||(qt=_assertThisInitialized(a),F.killTweensOf(P),qt=0),C&&Ba(C,_assertThisInitialized(a)),(y||!m&&!w&&a._start===ca(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-j,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,A);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-j<t&&0<=t?c:t<j?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Eb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-j:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(xt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data)?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=yt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===j||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?j:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||xt(t,"onStart"),n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(xt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?ib(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||ib(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?Tt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),ib(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&ib(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ea(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ea(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Ft);ja(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Bt,e=bt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function _b(t,e,r){return t.setAttribute(e,r)}function hc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Vt=function _setterPlain(t,e,r){return t[e]=r},Qt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Wt=function _getSetter(t,e){return p(t[e])?Qt:r(t[e])&&t.setAttribute?_b:Vt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=hc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Vt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:B,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=tb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Wt,aliases:{},register:0};if(At(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=Tt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Tt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&Kt(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Et(t.ease,B.ease)),ma(B,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(Tt(t),ja(e||{},a),r)},r&&(Bt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){St[t]=Et(e)},parseEase:function parseEase(t,e){return arguments.length?Et(t,e):St},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Bt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),F.remove(a),a._dp=0,a._time=a._tTime=F._time,i=F._first;i;)n=i._next,!r&&!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(F,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return K(e)?ab(e,wrap(0,e.length),t):Ma(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return K(e)?ab(e,wrapYoyo(0,e.length-1),t):Ma(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Va,random:Ya,snap:Xa,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Oa,clamp:function clamp(e,r,t){return Ma(t,function(t){return yt(e,r,t)})},splitColor:ob,toArray:Tt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Oa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(K(e)&&!K(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(K(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ma(t,n)},shuffle:Ua},install:M,effects:dt,ticker:Pt,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:F,core:{PropTween:ie,globals:P,Tween:Gt,Timeline:Bt,Animation:Ft,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return L=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Gt[t]}),Pt.add(Bt.updateRoot),d=ne.to({},{duration:0});function lc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function nc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=lc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},nc("roundProps",Wa),nc("modifiers"),nc("snap",Xa))||ne;Gt.version=Bt.version=ae.version="3.6.0",l=1,u()&&At();function Yc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function $c(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function _c(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function bd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function cd(t,e,r){return t.style[e]=r}function dd(t,e,r){return t.style.setProperty(e,r)}function ed(t,e,r){return t._gsap[e]=r}function fd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function gd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function hd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ld(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function md(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Le,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&md(t,je(e)||e,1)||""}function pd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=ld("div")||{style:{}},fe=ld("div"),Ye=je(Ye),Ne=Ye+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!je("perspective"),he=1)}function qd(t){var e,r=ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=qd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function rd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function sd(e){var r;try{r=e.getBBox()}catch(t){r=qd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===qd||(r=qd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}}function td(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!sd(t))}function ud(t,e){if(e){var r=t.style;e in ze&&e!==Ne&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Le,"-$1").toLowerCase())):r.removeAttribute(e)}}function vd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?bd:ad);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function xd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Fe.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||Xe[i]||Xe[h]?u:("px"===h||p||(u=xd(t,e,r,"px")),o=t.getCTM&&td(t),!m&&"%"!==h||!ze[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&m&&s.width&&f&&s.time===Pt.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=md(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[c],a.removeChild(le),l.position="absolute",f&&m&&((s=_(a)).time=Pt.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function yd(t,e,r,i){var n;return he||pd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=We(t,i),n="transformOrigin"!==e?n[e]:He(md(t,Ne))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ve[e]&&Ve[e](t,e,r)||md(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?xd(t,e,n,r)+r:n}function zd(t,e,r,i){if(!r||"none"===r){var n=je(e,t,1),a=n&&md(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=md(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ie(this._pt,t.style,e,0,1,Zt),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=md(t,e)||i,t.style[e]=r),tb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=xd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?bd:ad;return nt.test(i)&&(v.e=0),this._pt=v}function Bd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ge[r]||r,e[1]=Ge[i]||i,e.join(" ")}function Cd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ne:Ye),ud(a,r);i&&(ud(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),We(a,1),u.uncache=1))}}function Gd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Hd(t){var e=md(t,Ye);return Gd(e)?Qe:e.substr(7).match(et).map(ca)}function Id(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Hd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Qe:u:(u!==Qe||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Hd(t),n?o.display=n:ud(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Jd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Id(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Qe&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=sd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ne]="0px 0px",a&&(vd(a,h,"xOrigin",f,w),vd(a,h,"yOrigin",d,x),vd(a,h,"xOffset",c,h.xOffset),vd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Md(t,e,r){var i=Oa(e);return ca(parseFloat(e)+parseFloat(xd(t,"x",r+"px",i)))+i}function Td(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ie:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Zc),u.e=c,u.u="deg",t._props.push(r),u}function Ud(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ye]=e,oe.body.appendChild(fe),i=We(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Oa(a)!==(h=Oa(s))?xd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Yc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,ce,pe=St.Power0,_e=St.Power1,me=St.Power2,ge=St.Power3,ve=St.Power4,ye=St.Linear,be=St.Quad,Te=St.Cubic,we=St.Quart,xe=St.Quint,Oe=St.Strong,Me=St.Elastic,ke=St.Back,Ce=St.SteppedEase,Pe=St.Bounce,Ae=St.Sine,Se=St.Expo,De=St.Circ,ze={},Ie=180/Math.PI,Ee=Math.PI/180,Re=Math.atan2,Le=/([A-Z])/g,Fe=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Ne=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),je=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},Xe={deg:1,rad:1,turn:1},Ge={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,Cd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Qe=[1,0,0,1,0,0],Je={},We=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,S,D,z,I,E,R=t.style,L=r.scaleX<0,F="deg",B=md(t,Ne)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!td(t)),m=Id(t,r.svg),r.svg&&(k=!r.uncache&&t.getAttribute("data-svg-origin"),Jd(t,k||B,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Qe&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Ie:0,(f=w||x?Re(w,x)*Ie+u:0)&&(o*=Math.cos(f*Ee)),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],A=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(E,D))*Ie,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=E*v+D*y,A=O*-y+A*v,S=M*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,M=C,E=P),l=(g=Re(-w,D))*Ie,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-A*y,T=C=T*v-S*y,w=P=w*v-D*y),u=(g=Re(T,b))*Ie,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Re(O,M),f=2e-4<Math.abs(g)?g*Ie:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Gd(md(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+F,r.rotationX=ca(h)+F,r.rotationY=ca(l)+F,r.skewX=f+F,r.skewY=d+F,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(R[Ne]=He(B)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?rr:ce?er:$e,r.uncache=0,r},He=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},$e=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},Ze="0deg",Ke="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ze||h!==Ze)){var T,w=parseFloat(h)*Ee,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Ee,T=Math.cos(w),a=Md(g,a,x*T*-v),s=Md(g,s,-Math.sin(w)*-v),o=Md(g,o,O*T*-v+v)}_!==Ke&&(y+="perspective("+_+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===Ke&&s===Ke&&o===Ke||(y+=o!==Ke||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==Ze&&(y+="rotate("+u+tr),h!==Ze&&(y+="rotateY("+h+tr),l!==Ze&&(y+="rotateX("+l+tr),f===Ze&&d===Ze||(y+="skew("+f+", "+d+tr),1===c&&1===p||(y+="scale("+c+", "+p+tr),g.style[Ye]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Ee,c*=Ee,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Ee,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=xd(g,"x",l,"px"),O=xd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:pd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in he||pd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Qb(f,e,r,i,t,n)))if(h=typeof s,l=Ve[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=db(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",d=Oa(a),(c=Oa(s))?d!==c&&(a=xd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Oa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=yd(t,f))):a=yd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===yd(t,"visibility")&&o&&(u=0),vd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in ze)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||We(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Bd(s),g.svg?Jd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&vd(this,g,"zOrigin",g.zOrigin,c),vd(this,T,f,He(a),He(s)));continue}if("svgOrigin"===f){Jd(t,s,1,v,0,this);continue}if(f in Je){Td(this,g,f,u,s,p);continue}if("smoothOrigin"===f){vd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Ud(this,s,t);continue}}else f in T||(f=je(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Oa(s)||(f in Y.units?Y.units[f]:d))&&(u=xd(t,f,a,c)),this._pt=new ie(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?Yc:_c),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=$c);else if(f in T)zd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,t[f],s,i,n)}b.push(f)}y&&re(this)},get:yd,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in ze&&e!==Ne&&(t._gsap.x||yd(t,"x"))?i&&de===i?"scale"===e?fd:ed:(de=i||{})&&("scale"===e?gd:hd):t.style&&!r(t.style[e])?cd:~e.indexOf("-")?dd:Wt(t,e)},core:{_removeProperty:ud,_getMatrix:Id}};ae.utils.checkPrefix=je,ar=ba((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),ba(nr,function(t){Y.units[t]="deg",Je[t]=1}),qe[ar[13]]=ir+","+nr,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ar[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=ke,e.Bounce=Pe,e.CSSPlugin=sr,e.Circ=De,e.Cubic=Te,e.Elastic=Me,e.Expo=Se,e.Linear=ye,e.Power0=pe,e.Power1=_e,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=be,e.Quart=we,e.Quint=xe,e.Sine=Ae,e.SteppedEase=Ce,e.Strong=Oe,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Gt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * MotionPathPlugin 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t){return Math.round(1e10*t)/1e10||0}function y(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function B(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,T=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,F=Math.PI/180,s=180/Math.PI,U=Math.sin,H=Math.cos,Q=Math.abs,W=Math.sqrt,S=Math.atan2,A=1e8,l=function _isNumber(t){return"number"==typeof t},N={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+A)%1*e)/e||(t<0?0:1)},C=function _round(t){return Math.round(t*e)/e||0},O=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):l(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var j={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,x,P,y,w,b,M,L=t.tagName.toLowerCase(),R=.552284749831;return"path"!==L&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,j[L]),"rect"===L?(o=M.rx,i=M.ry||o,r=M.x,a=M.y,g=M.width-2*o,f=M.height-2*i,n=o||i?"M"+(v=(d=(p=r+o)+g)+o)+","+(P=a+i)+" V"+(y=P+f)+" C"+[v,w=y+i*R,m=d+o*R,b=y+i,d,b,d-(d-p)/3,b,p+(d-p)/3,b,p,b,c=r+o*(1-R),b,r,w,r,y,r,y-(y-P)/3,r,P+(y-P)/3,r,P,r,x=a+i*(1-R),c,a,p,a,p+(d-p)/3,a,d-(d-p)/3,a,d,a,m,a,v,x,v,P].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===L||"ellipse"===L?(h="circle"===L?(o=i=M.r)*R:(o=M.rx,(i=M.ry)*R),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*R),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===L?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==L&&"polygon"!==L||(n="M"+(r=(u=(t.getAttribute("points")+"").match(T)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===L&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,C(S(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){n=function _isUndefined(t){return void 0===t}(n)?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(Q(n-e)-1e-8)),a=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=O(t[n],t[n].slice(0));return O(t,e)}(t);if(n<e&&(e=1-e,n=1-n,function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||cacheRawPathMeasurements(a);var i,s,l,h,u,g,f,c,p=1<n,d=getProgressData(a,e,N,!0),m=getProgressData(a,n,_),v=m.segment,P=d.segment,w=m.segIndex,b=d.segIndex,M=m.i,L=d.i,R=b===w,T=M===L&&R;if(p||r){for(i=w<b||R&&M<L||T&&m.t<d.t,y(a,b,L,d.t)&&(b++,i||(w++,T?(m.t=(m.t-d.t)/(1-d.t),M=0):R&&(M-=L))),1-(n-e)<1e-5?w=b-1:!m.t&&w?w--:y(a,w,M,m.t)&&i&&b++,1===d.t&&(b=(b+1)%a.length),u=[],f=1+(g=a.length)*r,f+=(g-(c=b)+w)%g,h=0;h<f;h++)B(u,a[c++%g]);a=u}else if(l=1===m.t?6:subdivideSegment(v,M,m.t),e!==n)for(s=subdivideSegment(P,L,T?d.t/m.t:d.t),R&&(l+=s),v.splice(M+l+2),(s||L)&&P.splice(0,L+s),h=a.length;h--;)(h<b||w<h)&&a.splice(h,1);else v.angle=getRotationAtBezierT(v,M+l,0),d=v[M+=l],m=v[M+1],v.length=v.totalLength=0,v.totalPoints=a.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return a.totalLength=0,a}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,x,P,y=~~t.resolution||12,w=1/y,b=n?e+6*n+1:t.length,M=t[e],L=t[e+1],R=e?e/6*y:0,T=t.samples,S=t.lookup,N=(e?t.minLength:A)||A,_=T[R+n*y-1],C=e?T[R-1]:0;for(T.length=S.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-L,g=t[a+3]-L,f=t[a+1]-L,l=h=c=p=0,Q(o)<1e-5&&Q(u)<1e-5&&Q(s)+Q(f)<1e-5)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=y;r++)l=h-(h=((m=w*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),c=p-(p=(m*m*u+3*d*(m*g+d*f))*m),(x=W(c*c+l*l))<N&&(N=x),C+=x,T[R++]=C;M+=o,L+=u}if(_)for(_-=C;R<T.length;R++)T[R]+=_;if(T.length&&N)for(t.totalLength=P=T[T.length-1]||0,t.minLength=N,x=v=0,r=0;r<P;r+=N)S[x++]=T[v]<r?++v:v;else t.totalLength=T[0]=0;return e?C-T[e/2-1]:C}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,c=h+(u-h)*n,p=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,C(h),C(g),C(c),C(p),C(c+(u-c)*n),C(p+(f-p)*n),C(u),C(f),C(d),C(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,g=0,f=t[0];if(e)if(1===e)u=1,h=(f=t[g=t.length-1]).length-8;else{if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)g=h;e=(i-(s=l-(f=t[g]).totalLength))/(l-s)||0}a=f.samples,o=f.resolution,i=f.totalLength*e,s=(h=f.lookup[~~(i/f.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<f.length?(h+=6,u=0):g+1<t.length&&(h=u=0,f=t[++g]))}else u=h=g=0,f=t[0];return n.t=u,n.i=h,n.path=t,n.segment=f,n.segIndex=g,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,c=t[0],p=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)c=t[h];e=(i-(s=l-c.totalLength))/(l-s)||0}return a=c.samples,o=c.resolution,i=c.totalLength*e,s=(h=c.lookup[e<1?~~(i/c.minLength):c.lookup.length-1]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=c[h=6*~~(h/o)],p.x=C((u*u*(c[h+6]-g)+3*f*(u*(c[h+4]-g)+f*(c[h+2]-g)))*u+g),p.y=C((u*u*(c[h+7]-(g=c[h+1]))+3*f*(u*(c[h+5]-g)+f*(c[h+3]-g)))*u+g),n&&(p.angle=c.totalLength?getRotationAtBezierT(c,h,1<=u?1-1e-9:u||1e-9):c.angle||0),p}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=Q(n),r=Q(r);var h=a%360*F,u=H(h),g=U(h),f=Math.PI,c=2*f,p=(t-s)/2,d=(e-l)/2,m=u*p+g*d,v=-g*p+u*d,x=m*m,P=v*v,y=x/(n*n)+P/(r*r);1<y&&(n=W(y)*n,r=W(y)*r);var w=n*n,b=r*r,M=(w*b-w*P-b*x)/(w*P+b*x);M<0&&(M=0);var L=(o===i?-1:1)*W(M),R=n*v/r*L,T=-r*m/n*L,S=u*R-g*T+(t+s)/2,N=g*R+u*T+(e+l)/2,_=(m-R)/n,C=(v-T)/r,A=(-m-R)/n,B=(-v-T)/r,O=_*_+C*C,j=(C<0?-1:1)*Math.acos(_/W(O)),I=(_*B-C*A<0?-1:1)*Math.acos((_*A+C*B)/W(O*(A*A+B*B)));isNaN(I)&&(I=f),!i&&0<I?I-=c:i&&I<0&&(I+=c),j%=c,I%=c;var X,E=Math.ceil(Q(I)/(c/4)),G=[],V=I/E,D=4/3*U(V/2)/(1+H(V/2)),k=u*n,z=g*n,Y=g*-r,q=u*r;for(X=0;X<E;X++)m=H(a=j+X*V),v=U(a),_=H(a+=V),C=U(a),G.push(m-D*v,v+D*m,_+D*C,C-D*_,_,C);for(X=0;X<G.length;X+=2)m=G[X],v=G[X+1],G[X]=m*k+v*Y+S,G[X+1]=m*z+v*q+N;return G[X-2]=s,G[X-1]=l,G}}function stringToRawPath(t){function sf(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,c,p,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],x=0,P=0,y=m.length,w=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<y;e++)if(c=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=x,a+=P),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:w+=s.length),x=l=r,P=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(x=P=0),(s=s||[0,0]).push(r,a,x+1*m[e+3],P+1*m[e+4],x+=1*m[e+5],P+=1*m[e+6]),e+=6;else if("S"===o)u=x,g=P,"C"!==c&&"S"!==c||(u+=x-s[s.length-4],g+=P-s[s.length-3]),i||(x=P=0),s.push(u,g,r,a,x+=1*m[e+3],P+=1*m[e+4]),e+=4;else if("Q"===o)u=x+2/3*(r-x),g=P+2/3*(a-P),i||(x=P=0),x+=1*m[e+3],P+=1*m[e+4],s.push(u,g,x+2/3*(r-x),P+2/3*(a-P),x,P),e+=4;else if("T"===o)u=x-s[s.length-4],g=P-s[s.length-3],s.push(x+u,P+g,r+2/3*(x+1.5*u-r),a+2/3*(P+1.5*g-a),x=r,P=a),e+=2;else if("H"===o)sf(x,P,x=r,P),e+=1;else if("V"===o)sf(x,P,x,P=r+(i?P-x:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<Q(x-r)||.5<Q(P-a))&&(sf(x,P,r,a),"L"===o&&(e+=2)),x=r,P=a;else if("A"===o){if(p=m[e+4],d=m[e+5],u=m[e+6],g=m[e+7],n=7,1<p.length&&(p.length<3?(g=u,u=d,n--):(g=d,u=p.substr(2),n-=2),d=p.charAt(1),p=p.charAt(0)),f=arcToSegment(x,P,+m[e+1],+m[e+2],+m[e+3],+p,+d,(i?x:0)+1*u,(i?P:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);x=s[s.length-2],P=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=w+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e,n){Q(t[0]-t[2])<1e-4&&Q(t[1]-t[3])<1e-4&&(t=t.slice(2));var r,a,o,i,s,l,h,u,g,f,c,p,d,m,v=t.length-2,x=+t[0],P=+t[1],y=+t[2],w=+t[3],b=[x,P,x,P],M=y-x,L=w-P,R=Math.abs(t[v]-x)<.001&&Math.abs(t[v+1]-P)<.001;for(isNaN(n)&&(n=Math.PI/10),R&&(t.push(y,w),y=x,w=P,x=t[v-2],P=t[v-1],t.unshift(x,P),v+=4),e=e||0===e?+e:1,s=2;s<v;s+=2)r=x,a=P,x=y,P=w,y=+t[s+2],w=+t[s+3],x===y&&P===w||(p=(l=M)*l+(u=L)*u,d=(M=y-x)*M+(L=w-P)*L,m=(h=y-r)*h+(g=w-a)*g,c=(o=Math.acos((p+d-m)/W(4*p*d)))/Math.PI*e,f=W(p)*c,c*=W(d),x===r&&P===a||(n<o?(i=S(g,h),b.push(C(x-H(i)*f),C(P-U(i)*f),C(x),C(P),C(x+H(i)*c),C(P+U(i)*c))):(i=S(u,l),b.push(C(x-H(i)*f),C(P-U(i)*f)),i=S(L,M),b.push(C(x),C(P),C(x+H(i)*c),C(P+U(i)*c)))));return x!==y||P!==w||b.length<4?b.push(C(y),C(w),C(y),C(w)):b.length-=2,R&&(b.splice(0,6),b.length=b.length-6),b}function rawPathToString(t){l(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+C(a[0])+","+C(a[1])+" C",e=a.length,r=2;r<e;r++)o+=C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r])+" ";a.closed&&(o+="z")}return o}function P(t){var e=t.ownerDocument||t;!(E in t.style)&&"msTransform"in t.style&&(G=(E="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(m=window,R=new z,e){v=(c=e).documentElement,w=e.body;var n=e.createElement("div"),r=e.createElement("div");w.appendChild(n),n.appendChild(r),n.style.position="static",n.style[E]="translate3d(0,0,1px)",I=r.offsetParent!==n,w.removeChild(n)}return e}function V(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function X(t,e){if(t.parentNode&&(c||P(t))){var n=V(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=c.createElementNS?c.createElementNS(r.replace(/^https/,"http"),a):c.createElement(a);return e&&(n?(b=b||X(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),b.appendChild(l)):(f||((f=X(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",f.appendChild(l))),l}throw"Need document and parent."}function Z(t,e){var n,r,a,o,i,s,l=V(t),h=t===l,u=l?D:k,g=t.parentNode;if(t===m)return t;if(u.length||u.push(X(t,1),X(t,2),X(t,3)),n=l?b:f,l)a=h?{x:0,y:0}:t.getBBox(),i=(r=t.transform?t.transform.baseVal:{}).numberOfItems?(o=(r=1<r.numberOfItems?function _consolidate(t){for(var e=new z,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix).a*a.x+r.c*a.y,r.b*a.x+r.d*a.y):(r=R,o=a.x,a.y),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")"),(h?l:g).appendChild(n);else{if(o=i=0,I)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(m.getComputedStyle(a)[E]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);if("absolute"!==(s=m.getComputedStyle(t)).position)for(r=t.offsetParent;g!==r;)o+=g.scrollLeft||0,i+=g.scrollTop||0,g=g.parentNode;(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",a[E]=s[E],a[G]=s[G],a.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function $(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var c,m,v,w,f,b,R,I,n,E="transform",G=E+"Origin",D=[],k=[],z=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n||1e-10;return $(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return $(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),$(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n,r){if(!t||!t.parentNode||(c||P(t)).documentElement===t)return new z;var a=function _forceNonZeroScale(t){for(var e,n;t&&t!==w;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),o=V(t)?D:k,i=Z(t,n),s=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=i.parentNode,g=!r&&function _isFixed(t){return"fixed"===m.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),f=new z((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(g?0:function _getDocScrollLeft(){return m.pageXOffset||c.scrollLeft||v.scrollLeft||w.scrollLeft||0}()),s.top+(g?0:function _getDocScrollTop(){return m.pageYOffset||c.scrollTop||v.scrollTop||w.scrollTop||0}()));if(u.removeChild(i),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?f.inverse():f}function ia(t,e,n,r){for(var a=e.length,o=2===r?0:r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),2===r&&(t[o+1]=0),o+=2;return t}function ja(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function ka(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function la(t,e,n,r,a,o,i,s,l){return e="cubic"===i.type?[e]:(e.unshift(ja(n,r,s),a?ja(n,a,l):0),i.relative&&ka(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(nt(e,n,i)),rt(t,n,r,e,"x",s),a&&rt(t,n,a,e,"y",l),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ma(t){return t}function oa(t,e,n){var r,a,o,i=getGlobalMatrix(t);return"svg"===(t.tagName+"").toLowerCase()?(a=(r=t.viewBox.baseVal).x,o=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),a=o=0),e&&"auto"!==e&&(a+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,o+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(a||o?i.apply({x:a,y:o}):{x:i.e,y:i.f})}function pa(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=oa(t,n,o),l=oa(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(et)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),(a||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var Y,g,q,J,K="x,translateX,left,marginLeft,xPercent".split(","),tt="y,translateY,top,marginTop,yPercent".split(","),o=Math.PI/180,et=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,nt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,g=t[0][0],f=t[0][1],c=ja(e,"x"),p=ja(e,"y");return t&&t.length?(i&&("self"===i||(r=J(i)[0]||e)===e?transformRawPath(t,1,0,0,1,c-g,p-f):(u&&!1!==u[2]?Y.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[ja(e,"xPercent")/-100,ja(e,"yPercent")/-100],o=(a=pa(e,r,u,"auto")).apply({x:g,y:f}),transformRawPath(t,a.a,a.b,a.c,a.d,c+a.e-(o.x-a.e),p+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},rt=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new g(t._pt,e,h,0,0,ma,0,i.set(e,h,t));u.u=q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.6.0",name:"motionPath",register:function register(t,e,n){q=(Y=t).utils.getUnit,J=Y.utils.toArray,g=n},init:function init(t,e){if(!Y)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,a=[],o=e.path,i=e.autoRotate,s=e.unitX,l=e.unitY,h=e.x,u=e.y,g=o[0],f=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=a,this.target=t,(this.rotate=i||0===i)&&(this.rOffset=parseFloat(i)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=q(t._gsap.get(t,this.rProp))||0),!Array.isArray(o)||"closed"in o||"number"==typeof g)cacheRawPathMeasurements(n=f(nt(getRawPath(e.path),t,e)),e.resolution),a.push(n),rt(this,t,e.x||"x",n,"x",e.unitX||"px"),rt(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in g)!h&&~K.indexOf(r)?h=r:!u&&~tt.indexOf(r)&&(u=r);for(r in h&&u?a.push(la(this,ia(ia([],o,h,0),o,u,1),t,h,u,f,e,s||q(o[0][h]),l||q(o[0][u]))):h=u=0,g)r!==h&&r!==u&&a.push(la(this,ia([],o,r,2),t,r,0,f,e,q(o[0][r])))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?o:1)+e.rOffset+e.ru,e,t)},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return J(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:pa,getRelativePosition:function getRelativePosition(t,e,n,r){var a=pa(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=ia(ia([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&ka(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return Y||"undefined"!=typeof window&&(Y=window.gsap)&&Y.registerPlugin&&Y}()||Y.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});


/*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function J(e){return e}function K(){return"undefined"!=typeof window}function L(){return Ce||K()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function M(e){return!!~o.indexOf(e)}function N(e,t){return~Ve.indexOf(e)&&Ve[Ve.indexOf(e)+1][t]}function O(t,e){var r=e.s,n=e.sc,o=g.indexOf(t),i=n===nt.sc?1:2;return~o||(o=g.push(t)-1),g[o+i]||(g[o+i]=N(t,r)||(M(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function P(e){return N(e,"getBoundingClientRect")||(M(e)?function(){return ft.width=Oe.innerWidth,ft.height=Oe.innerHeight,ft}:function(){return ot(e)})}function S(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=N(e,r))?i()-P(e)()[o]:M(e)?Math.max(_e[r],Pe[r])-(Oe["inner"+n]||_e["client"+n]||Pe["client"+n]):e[r]-e["offset"+n]}function T(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function U(e){return"string"==typeof e}function V(e){return"function"==typeof e}function W(e){return"number"==typeof e}function X(e){return"object"==typeof e}function Y(e){return V(e)&&e()}function Z(r,n){return function(){var e=Y(r),t=Y(n);return function(){Y(e),Y(t)}}}function sa(e){return Oe.getComputedStyle(e)}function ua(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function wa(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function xa(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function Aa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function Ba(e,t,r){return e.addEventListener(t,r,{passive:!0})}function Ca(e,t,r){return e.removeEventListener(t,r)}function Ga(e,t){if(U(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in w?w[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Ha(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,p=ke.createElement("div"),d=M(r)||"fixed"===N(r,"pinType"),h=-1!==e.indexOf("scroller"),g=d?Pe:r,v=-1!==e.indexOf("start"),m=v?s:l,b="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(h&&d?"fixed;":"absolute;"),!h&&d||(b+=(n===nt?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],C(p,0,n,v),p}function La(){return l=l||s(H)}function Ma(){l||(l=s(H),Ye||E("scrollStart"),Ye=He())}function Na(){return!Le&&!r&&!ke.fullscreenElement&&a.restart(!0)}function Ta(e){var t,r=Ce.ticker.frame,n=[],o=0;if(h!==r||We){for(R();o<B.length;o+=4)(t=Oe.matchMedia(B[o]).matches)!==B[o+3]&&((B[o+3]=t)?n.push(o):R(1,B[o])||V(B[o+2])&&B[o+2]());for(z(),o=0;o<n.length;o++)t=n[o],Ie=B[t],B[t+2]=B[t+1](e);Ie=0,i&&F(0,1),h=r,E("matchMedia")}}function Ua(){return Ca($,"scrollEnd",Ua)||F(!0)}function eb(e,t,r,n){if(e.parentNode!==t){for(var o,i=D.length,a=t.style,s=e.style;i--;)a[o=D[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Ge]=wa(e,rt)+tt,a[Je]=wa(e,nt)+tt,a[$e]=s[Qe]=s.top=s[m]="0",ut(n),s[Ge]=s.maxWidth=r[Ge],s[Je]=s.maxHeight=r[Je],s[$e]=r[$e],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function hb(e){for(var t=G.length,r=e.style,n=[],o=0;o<t;o++)n.push(G[o],r[G[o]]);return n.t=e,n}function kb(e,t,r,n,o,i,a,s,l,c,u,f){if(V(e)&&(e=e(s)),U(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ga("0"+e.substr(3),r):0)),W(e))a&&C(a,r,n,!0);else{V(t)&&(t=t(s));var p,d,h,g=Be(t)[0]||Pe,v=ot(g)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==sa(g).display||(h=g.style.display,g.style.display="block",v=ot(g),h?g.style.display=h:g.style.removeProperty("display")),p=Ga(m[0],v[n.d]),d=Ga(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&C(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var b=e+r,x=i._isStart;f="scroll"+n.d2,C(i,b,n,x&&20<b||!x&&(u?Math.max(Pe[f],_e[f]):i.parentNode[f])<=b+1),u&&(l=ot(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+tt))}return Math.round(e)}function mb(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Pe){for(o in e._stOrig=a.cssText,i=sa(e))+o||j.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}}function nb(l,e){function Se(e,t,r,n,o){var i=Se.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[p]=e,(t.modifiers=s)[p]=function(e){return(e=Math.round(f()))!==c&&e!==u&&2<Math.abs(e-c)?(i.kill(),Se.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onComplete=function(){Se.tween=0,a&&a.call(i)},i=Se.tween=Ce.to(l,t)}var c,u,f=O(l,e),p="_scroll"+e.p2;return l[p]=f,l.addEventListener("mousewheel",function(){return Se.tween&&Se.tween.kill()&&(Se.tween=0)}),Se}var Ce,i,Oe,ke,_e,Pe,o,a,s,l,Be,Ee,Ne,c,Le,Ae,u,ze,f,p,d,Re,Ue,r,Fe,Ie,h,We=1,Ve=[],g=[],He=Date.now,v=He(),Ye=0,De=1,Xe=Math.abs,t="scrollLeft",n="scrollTop",m="left",x="right",y="bottom",Ge="width",Je="height",qe="Right",Ze="Left",je="Top",Ke="Bottom",$e="padding",Qe="margin",et="Width",b="Height",tt="px",rt={s:t,p:m,p2:Ze,os:x,os2:qe,d:Ge,d2:et,a:"x",sc:function sc(e){return arguments.length?Oe.scrollTo(e,nt.sc()):Oe.pageXOffset||ke[t]||_e[t]||Pe[t]||0}},nt={s:n,p:"top",p2:je,os:y,os2:Ke,d:Je,d2:b,a:"y",op:rt,sc:function sc(e){return arguments.length?Oe.scrollTo(rt.sc(),e):Oe.pageYOffset||ke[n]||_e[n]||Pe[n]||0}},ot=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==sa(e)[u]&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},it={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},at={toggleActions:"play",anticipatePin:0},w={top:0,left:0,center:.5,bottom:1,right:1},C=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+et]=1,o["border"+a+et]=0,o[r.p]=t+"px",Ce.set(e,o)},st=[],lt={},k={},_=[],B=[],E=function _dispatch(e){return k[e]&&k[e].map(function(e){return e()})||_},A=[],z=function _revertRecorded(e){for(var t=0;t<A.length;t+=4)e&&A[t+3]!==e||(A[t].style.cssText=A[t+1],A[t+2].uncache=1)},R=function _revertAll(e,t){var r;for(ze=0;ze<st.length;ze++)r=st[ze],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));z(t),t||E("revert")},F=function _refreshAll(e,t){if(!Ye||e){var r=E("refreshInit");for(Re&&$.sort(),t||R(),ze=0;ze<st.length;ze++)st[ze].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze=st.length;ze--;)st[ze].scroll.rec=0;a.pause(),E("refresh")}else Ba($,"scrollEnd",Ua)},I=0,ct=1,H=function _updateAll(){var e=st.length,t=He(),r=50<=t-v,n=e&&st[0].scroll();if(ct=n<I?-1:1,I=n,r&&(Ye&&!Ae&&200<t-Ye&&(Ye=0,E("scrollEnd")),Ne=v,v=t),ct<0){for(ze=e;ze--;)st[ze]&&st[ze].update(0,r);ct=1}else for(ze=0;ze<e;ze++)st[ze]&&st[ze].update(0,r);l=0},D=[m,"top",y,x,Qe+Ke,Qe+qe,Qe+je,Qe+Ze,"display","flexShrink","float","zIndex"],G=D.concat([Ge,Je,"boxSizing","max"+et,"max"+b,"position",Qe,$e,$e+je,$e+qe,$e+Ke,$e+Ze]),q=/([A-Z])/g,ut=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(q,"-$1").toLowerCase())}},ft={left:0,top:0},j=/(?:webkit|moz|length|cssText|inset)/i;rt.op=nt;var $=(ScrollTrigger.prototype.init=function init(y,w){if(this.progress=this.start=0,this.vars&&this.kill(1),De){var d,n,l,T,C,k,_,B,E,L,A,z,e,R,F,I,H,Y,t,D,h,G,q,g,Z,v,m,r,b,x,j,o,c,K,$,Q,ee,te=(y=ua(U(y)||W(y)||y.nodeType?{trigger:y}:y,at)).horizontal?rt:nt,re=y.onUpdate,ne=y.toggleClass,i=y.id,oe=y.onToggle,ie=y.onRefresh,a=y.scrub,ae=y.trigger,se=y.pin,le=y.pinSpacing,ce=y.invalidateOnRefresh,ue=y.anticipatePin,s=y.onScrubComplete,u=y.onSnapComplete,fe=y.once,pe=y.snap,de=y.pinReparent,he=!a&&0!==a,ge=Be(y.scroller||Oe)[0],f=Ce.core.getCache(ge),ve=M(ge),me="pinType"in y?"fixed"===y.pinType:ve||"fixed"===N(ge,"pinType"),be=[y.onEnter,y.onLeave,y.onEnterBack,y.onLeaveBack],xe=he&&y.toggleActions.split(" "),p="markers"in y?y.markers:at.markers,ye=ve?0:parseFloat(sa(ge)["border"+te.p2+et])||0,Se=this,we=y.onRefreshInit&&function(){return y.onRefreshInit(Se)},Te=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=N(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Oe["inner"+o]:e["client"+o])||0}}(ge,ve,te),Me=function _getOffsetsFunc(e,t){return!t||~Ve.indexOf(e)?P(e):function(){return ft}}(ge,ve);Se.media=Ie,ue*=45,st.push(Se),Se.scroller=ge,Se.scroll=O(ge,te),C=Se.scroll(),Se.vars=y,w=w||y.animation,"refreshPriority"in y&&(Re=1),f.tweenScroll=f.tweenScroll||{top:nb(ge,nt),left:nb(ge,rt)},Se.tweenTo=d=f.tweenScroll[te.p],w&&(w.vars.lazy=!1,w._initted||!1!==w.vars.immediateRender&&!1!==y.immediateRender&&w.render(0,!0,!0),Se.animation=w.pause(),w.scrollTrigger=Se,(o=W(a)&&a)&&(j=Ce.to(w,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(Se)}})),b=0,i=i||w.vars.id),pe&&(X(pe)||(pe={snapTo:pe}),"scrollBehavior"in Pe.style&&Ce.set(ve?[Pe,_e]:ge,{scrollBehavior:"auto"}),l=V(pe.snapTo)?pe.snapTo:"labels"===pe.snapTo?function _getClosestLabel(t){return function(e){return Ce.utils.snap(xa(t),e)}}(w):"labelsDirectional"===pe.snapTo?function _getLabelAtDirection(o){return function(e,t){var r,n=xa(o);if(n.sort(function(e,t){return e-t}),0<t.direction){for(r=0;r<n.length;r++)if(n[r]>=e)return n[r];return n.pop()}for(r=n.length;r--;)if(n[r]<=e)return n[r];return n[0]}}(w):Ce.utils.snap(pe.snapTo),c=pe.duration||{min:.1,max:2},c=X(c)?Ee(c.min,c.max):Ee(c,c),K=Ce.delayedCall(pe.delay||o/2||.1,function(){if(Math.abs(Se.getVelocity())<10&&!Ae){var e=w&&!he?w.totalProgress():Se.progress,t=(e-x)/(He()-Ne)*1e3||0,r=Xe(t/2)*t/.185,n=e+r,o=Ee(0,1,l(n,Se)),i=Se.scroll(),a=Math.round(_+o*R),s=d.tween;if(i<=B&&_<=i&&a!==i){if(s&&!s._initted&&s.data<=Math.abs(a-i))return;d(a,{duration:c(Xe(.185*Math.max(Xe(n-e),Xe(o-e))/t/.05||0)),ease:pe.ease||"power3",data:Math.abs(a-i),onComplete:function onComplete(){b=x=w&&!he?w.totalProgress():Se.progress,u&&u(Se)}},i,r*R,a-i-r*R)}}else Se.isActive&&K.restart(!0)}).pause()),i&&(lt[i]=Se),ae=Se.trigger=Be(ae||se)[0],se=!0===se?ae:Be(se)[0],U(ne)&&(ne={targets:ae,className:ne}),se&&(!1===le||le===Qe||(le=!(!le&&"flex"===sa(se.parentNode).display)&&$e),Se.pin=se,!1!==y.force3D&&Ce.set(se,{force3D:!0}),(n=Ce.core.getCache(se)).spacer?F=n.pinState:(n.spacer=Y=ke.createElement("div"),Y.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=F=hb(se)),Se.spacer=Y=n.spacer,r=sa(se),g=r[le+te.os2],D=Ce.getProperty(se),h=Ce.quickSetter(se,te.a,tt),eb(se,Y,r),H=hb(se)),p&&(e=X(p)?ua(p,it):it,A=Ha("scroller-start",i,ge,te,e,0),z=Ha("scroller-end",i,ge,te,e,0,A),t=A["offset"+te.op.d2],E=Ha("start",i,ge,te,e,t),L=Ha("end",i,ge,te,e,t),me||(function _makePositionable(e){e.style.position="absolute"===sa(e).position?"absolute":"relative"}(ve?Pe:ge),Ce.set([A,z],{force3D:!0}),v=Ce.quickSetter(A,te.a,tt),m=Ce.quickSetter(z,te.a,tt))),Se.revert=function(e){var t=!1!==e||!Se.enabled,r=Le;t!==T&&(t&&(Q=Math.max(Se.scroll(),Se.scroll.rec||0),$=Se.progress,ee=w&&w.progress()),E&&[E,L,A,z].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Le=1),Se.update(t),Le=r,se&&(t?function _swapPinOut(e,t,r){if(ut(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(se,Y,F):de&&Se.isActive||eb(se,Y,sa(se),Z)),T=t)},Se.refresh=function(e){if(!Le&&Se.enabled)if(se&&e&&Ye)Ba(ScrollTrigger,"scrollEnd",Ua);else{Le=1,j&&j.pause(),ce&&w&&w.progress(0).invalidate(),T||Se.revert();for(var t,r,n,o,i,a,s,l,c,u=Te(),f=Me(),p=S(ge,te),d=0,h=0,g=y.end,v=y.endTrigger||ae,m=y.start||(0!==y.start&&ae?se?"0 0":"0 100%":0),b=ae&&Math.max(0,st.indexOf(Se))||0,x=b;x--;)!(s=st[x].pin)||s!==ae&&s!==se||st[x].revert();for(_=kb(m,ae,u,te,Se.scroll(),E,A,Se,f,ye,me,p)||(se?-.001:0),V(g)&&(g=g(Se)),U(g)&&!g.indexOf("+=")&&(~g.indexOf(" ")?g=(U(m)?m.split(" ")[0]:"")+g:(d=Ga(g.substr(2),u),g=U(m)?m:_+d,v=ae)),B=Math.max(_,kb(g||(v?"100% 0":p),v,u,te,Se.scroll()+d,L,z,Se,f,ye,me,p))||-.001,R=B-_||(_-=.01)&&.001,d=0,x=b;x--;)(s=(a=st[x]).pin)&&a.start-a._pinPush<_&&(t=a.end-a.start,s===ae&&(d+=t),s===se&&(h+=t));if(_+=d,B+=d,Se._pinPush=h,E&&d&&((t={})[te.a]="+="+d,Ce.set([E,L],t)),se)t=sa(se),o=te===nt,n=Se.scroll(),G=parseFloat(D(te.a))+h,!p&&1<B&&((ve?Pe:ge).style["overflow-"+te.a]="scroll"),eb(se,Y,t),H=hb(se),r=ot(se,!0),l=me&&O(ge,o?rt:nt)(),le&&((Z=[le+te.os2,R+h+tt]).t=Y,(x=le===$e?wa(se,te)+R+h:0)&&Z.push(te.d,x+tt),ut(Z),me&&Se.scroll(Q)),me&&((i={top:r.top+(o?n-_:l)+tt,left:r.left+(o?l:n-_)+tt,boxSizing:"border-box",position:"fixed"})[Ge]=i.maxWidth=Math.ceil(r.width)+tt,i[Je]=i.maxHeight=Math.ceil(r.height)+tt,i[Qe]=i[Qe+je]=i[Qe+qe]=i[Qe+Ke]=i[Qe+Ze]="0",i[$e]=t[$e],i[$e+je]=t[$e+je],i[$e+qe]=t[$e+qe],i[$e+Ke]=t[$e+Ke],i[$e+Ze]=t[$e+Ze],I=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(F,i,de)),w?(c=w._initted,Ue(1),w.progress(1,!0),q=D(te.a)-G+R+h,R!==q&&I.splice(I.length-2,2),w.progress(0,!0),c||w.invalidate(),Ue(0)):q=R;else if(ae&&Se.scroll())for(r=ae.parentNode;r&&r!==Pe;)r._pinOffset&&(_-=r._pinOffset,B-=r._pinOffset),r=r.parentNode;for(x=0;x<b;x++)!(a=st[x].pin)||a!==ae&&a!==se||st[x].revert(!1);Se.start=_,Se.end=B,(C=k=Se.scroll())<Q&&Se.scroll(Q),Se.revert(!1),Le=0,w&&he&&w._initted&&w.progress(ee,!0).render(w.time(),!0,!0),$!==Se.progress&&(j&&w.totalProgress($,!0),Se.progress=$,Se.update()),se&&le&&(Y._pinOffset=Math.round(Se.progress*q)),ie&&ie(Se)}},Se.getVelocity=function(){return(Se.scroll()-k)/(He()-Ne)*1e3||0},Se.update=function(e,t){var r,n,o,i,a,s=Se.scroll(),l=e?0:(s-_)/R,c=l<0?0:1<l?1:l||0,u=Se.progress;if(t&&(k=C,C=s,pe&&(x=b,b=w&&!he?w.totalProgress():c)),ue&&!c&&se&&!Le&&!We&&Ye&&_<s+(s-k)/(He()-Ne)*ue&&(c=1e-4),c!==u&&Se.enabled){if(i=(a=(r=Se.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,Se.direction=u<c?1:-1,Se.progress=c,he||(!j||Le||We?w&&w.totalProgress(c,!!Le):(j.vars.totalProgress=c,j.invalidate().restart())),se)if(e&&le&&(Y.style[le+te.os2]=g),me){if(i){if(o=!e&&u<c&&s<B+1&&s+1>=S(ge,te),de)if(e||!r&&!o)mb(se,Y);else{var f=ot(se,!0),p=s-_;mb(se,Pe,f.top+(te===nt?p:0)+tt,f.left+(te===nt?0:p)+tt)}ut(r||o?I:H),q!==R&&c<1&&r||h(G+(1!==c||o?0:q))}}else h(G+q*c);!pe||d.tween||Le||We||K.restart(!0),ne&&(a||fe&&c&&(c<1||!Fe))&&Be(ne.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](ne.className)}),!re||he||e||re(Se),i&&!Le?(n=c&&!u?0:1===c?1:1===u?2:3,he&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],w&&("complete"===o||"reset"===o||o in w)&&("complete"===o?w.pause().totalProgress(1):"reset"===o?w.restart(!0).pause():w[o]()),re&&re(Se)),!a&&Fe||(oe&&a&&oe(Se),be[n]&&be[n](Se),fe&&(1===c?Se.kill(!1,1):be[n]=0),a||be[n=1===c?1:3]&&be[n](Se))):he&&re&&!Le&&re(Se)}m&&(v(s+(A._isFlipped?1:0)),m(s))},Se.enable=function(){Se.enabled||(Se.enabled=!0,Ba(ge,"resize",Na),Ba(ge,"scroll",Ma),we&&Ba(ScrollTrigger,"refreshInit",we),w&&w.add?Ce.delayedCall(.01,function(){return _||B||Se.refresh()})&&(R=.01)&&(_=B=0):Se.refresh())},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(),Se.enabled=Se.isActive=!1,t||j&&j.pause(),Q=0,n&&(n.uncache=1),we&&Ca(ScrollTrigger,"refreshInit",we),K&&(K.pause(),d.tween&&d.tween.kill()&&(d.tween=0)),!ve)){for(var r=st.length;r--;)if(st[r].scroller===ge&&st[r]!==Se)return;Ca(ge,"resize",Na),Ca(ge,"scroll",Ma)}},Se.kill=function(e,t){Se.disable(e,t),i&&delete lt[i];var r=st.indexOf(Se);st.splice(r,1),r===ze&&0<ct&&ze--,w&&(w.scrollTrigger=null,e&&w.render(-1),t||w.kill()),E&&[E,L,A,z].forEach(function(e){return e.parentNode.removeChild(e)}),se&&(n&&(n.uncache=1),r=0,st.forEach(function(e){return e.pin===se&&r++}),r||(n.spacer=0))},Se.enable()}else this.update=this.refresh=this.kill=J},ScrollTrigger.register=function register(e){if(!i&&(Ce=e||L(),K()&&window.document&&(Oe=window,ke=document,_e=ke.documentElement,Pe=ke.body),Ce&&(Be=Ce.utils.toArray,Ee=Ce.utils.clamp,Ue=Ce.core.suppressOverwrites||J,Ce.core.globals("ScrollTrigger",ScrollTrigger),Pe))){s=Oe.requestAnimationFrame||function(e){return setTimeout(e,16)},Ba(Oe,"mousewheel",Ma),o=[Oe,ke,_e,Pe],Ba(ke,"scroll",Ma);var t,r=Pe.style,n=r.borderTop;r.borderTop="1px solid #000",t=ot(Pe),nt.m=Math.round(t.top+nt.sc())||0,rt.m=Math.round(t.left+rt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(La,200),Ce.delayedCall(.5,function(){return We=0}),Ba(ke,"touchcancel",J),Ba(Pe,"touchstart",J),Aa(Ba,ke,"pointerdown,touchstart,mousedown",function(){return Ae=1}),Aa(Ba,ke,"pointerup,touchend,mouseup",function(){return Ae=0}),u=Ce.utils.checkPrefix("transform"),G.push(u),i=He(),a=Ce.delayedCall(.2,F).pause(),d=[ke,"visibilitychange",function(){var e=Oe.innerWidth,t=Oe.innerHeight;ke.hidden?(f=e,p=t):f===e&&p===t||Na()},ke,"DOMContentLoaded",F,Oe,"load",function(){return Ye||F()},Oe,"resize",Na],T(Ba)}return i},ScrollTrigger.defaults=function defaults(e){for(var t in e)at[t]=e[t]},ScrollTrigger.kill=function kill(){De=0,st.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(Fe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(La,t),"autoRefreshEvents"in e&&(T(Ca)||T(Ba,e.autoRefreshEvents||"none"),r=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Be(e)[0],n=g.indexOf(r),o=M(r);~n&&g.splice(n,o?6:2),o?Ve.unshift(Oe,t,Pe,t,_e,t):Ve.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=B.indexOf(r),o=e[r],"all"===(Ie=r)?o():(t=Oe.matchMedia(r))&&(t.matches&&(i=o()),~n?(B[n+1]=Z(B[n+1],o),B[n+2]=Z(B[n+2],i)):(n=B.length,B.push(r,o,i),t.addListener?t.addListener(Ta):t.addEventListener("change",Ta)),B[n+3]=t.matches),Ie=0;return B},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(B.length=0),0<=(e=B.indexOf(e))&&B.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){i||ScrollTrigger.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}$.version="3.6.0",$.saveStyles=function(e){return e?Be(e).forEach(function(e){if(e&&e.style){var t=A.indexOf(e);0<=t&&A.splice(t,4),A.push(e,e.style.cssText,Ce.core.getCache(e),Ie)}}):A},$.revert=function(e,t){return R(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Na():F(!0)},$.update=H,$.maxScroll=function(e,t){return S(e,t?rt:nt)},$.getScrollFunc=function(e,t){return O(Be(e)[0],t?rt:nt)},$.getById=function(e){return lt[e]},$.getAll=function(){return st.slice(0)},$.isScrolling=function(){return!!Ye},$.addEventListener=function(e,t){var r=k[e]||(k[e]=[]);~r.indexOf(t)||r.push(t)},$.removeEventListener=function(e,t){var r=k[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},$.batch=function(e,t){function ri(e,t){var r=[],n=[],o=Ce.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&V(t[r])&&"onRefreshInit"!==r?ri(0,t[r]):t[r];return V(a)&&(a=a(),Ba($,"refresh",function(){return a=t.batchMax()})),Be(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push($.create(t))}),n},$.sort=function(e){return st.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},L()&&Ce.registerPlugin($),e.ScrollTrigger=$,e.default=$;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * TextPlugin 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(D){"use strict";var B=/(^\s+|\s+$)/g,i=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function splitInnerHTML(D,u,F){for(var C=D.firstChild,E=[];C;)3===C.nodeType?E.push.apply(E,emojiSafeSplit((C.nodeValue+"").replace(/^\n+/g,"").replace(/\s+/g," "),u,F)):"br"===(C.nodeName+"").toLowerCase()?E[E.length-1]+="<br>":E.push(C.outerHTML),C=C.nextSibling;return E}function emojiSafeSplit(D,u,F){if(D+="",F&&(D=D.replace(B,"")),u&&""!==u)return D.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(u);for(var C,E,e=[],t=D.length,n=0;n<t;n++)(55296<=(E=D.charAt(n)).charCodeAt(0)&&E.charCodeAt(0)<=56319||65024<=D.charCodeAt(n+1)&&D.charCodeAt(n+1)<=65039)&&(C=((D.substr(n,12).split(i)||[])[1]||"").length||2,E=D.substr(n,C),n+=C-(e.emoji=1)),e.push(">"===E?"&gt;":"<"===E?"&lt;":E);return e}var u,l,F={version:"3.6.0",name:"text",init:function init(D,u,F){var C,E,e,t,n,B,i,A,r=D.nodeName.toUpperCase(),s=this;if(s.svg=D.getBBox&&("TEXT"===r||"TSPAN"===r),!("innerHTML"in D||s.svg))return!1;if(s.target=D,"object"!=typeof u&&(u={value:u}),"value"in u){for(s.delimiter=u.delimiter||"",e=splitInnerHTML(D,s.delimiter),(l=l||document.createElement("div")).innerHTML=u.value,E=splitInnerHTML(l,s.delimiter),s.from=F._from,s.from&&(r=e,e=E,E=r),s.hasClass=!(!u.newClass&&!u.oldClass),s.newClass=u.newClass,s.oldClass=u.oldClass,C=(r=e.length-E.length)<0?e:E,s.fillChar=u.fillChar||(u.padSpace?"&nbsp;":""),r<0&&(r=-r);-1<--r;)C.push(s.fillChar);if("diff"===u.type){for(n=[],B=[],i="",r=t=0;r<E.length;r++)(A=E[r])===e[r]?i+=A:(n[t]=i+A,B[t++]=i+e[r],i="");E=n,e=B,i&&(E.push(i),e.push(i))}u.speed&&F.duration(Math.min(.05/u.speed*C.length,u.maxDuration||9999)),this.original=e,this.text=E,this._props.push("text")}else s.text=s.original=[""]},render:function render(D,u){1<D?D=1:D<0&&(D=0),u.from&&(D=1-D);var F,C,E,e=u.text,t=u.hasClass,n=u.newClass,B=u.oldClass,i=u.delimiter,A=u.target,r=u.fillChar,s=u.original,l=e.length,o=D*l+.5|0;E=t?(C=B&&o!==l,((F=n&&o)?"<span class='"+n+"'>":"")+e.slice(0,o).join(i)+(F?"</span>":"")+(C?"<span class='"+B+"'>":"")+i+s.slice(o).join(i)+(C?"</span>":"")):e.slice(0,o).join(i)+i+s.slice(o).join(i),u.svg?A.textContent=E:A.innerHTML="&nbsp;"===r&&~E.indexOf("  ")?E.split("  ").join("&nbsp;&nbsp;"):E}};F.splitInnerHTML=splitInnerHTML,F.emojiSafeSplit=emojiSafeSplit,F.getText=function getText(D){var u=D.nodeType,F="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)F+=getText(D)}else if(3===u||4===u)return D.nodeValue;return F},function _getGSAP(){return u||"undefined"!=typeof window&&(u=window.gsap)&&u.registerPlugin&&u}()&&u.registerPlugin(F),D.TextPlugin=F,D.default=F;if (typeof(window)==="undefined"||window!==D){Object.defineProperty(D,"__esModule",{value:!0})} else {delete D.default}});

