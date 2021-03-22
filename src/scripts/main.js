
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {

  // set starting positions
  gsap.set(".beebly-container", { top: 0, left: 120 });
  gsap.set(".beebly-cursor", { top: -50, right: 200 });
  gsap.set("#the-box", { width: 310, transformOrigin: "100% 0", right: 130 });
  gsap.set(".bjf-1", { opacity: 1 });
  gsap.set(".bjf-2", { opacity: 0 });
  gsap.set(".bjf-3", { opacity: 0 });
  gsap.set(".bjf-1 mark", { background: "none", color: "inherit", duration: 0.1 });
  gsap.set(".beebly-text-cursor", { opacity: 0 });

  var fontChange = new TimelineMax();
  fontChange.timeScale(0.5);
  fontChange.to(".bjf-1", 0, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })
            .to(".bjf-1", 1, { background: 'rgba(68,68,68,.7)', color: 'rgba(170,170,170,.7)' })
            .to(".bjf-1", 0, { opacity: 0 })
            .to(".bjf-2", 0, { opacity: 1 })
            .to(".bjf-2", 1, { opacity: 1 })
            .to(".bjf-2", 0, { opacity: 0 })
            .to(".bjf-3", 0, { opacity: 1 })
            .to(".bjf-3", 1, { opacity: 1 })
            .to(".bjf-3 mark", 0, { background: "none", color: "inherit" });

  var beeTimeline = new TimelineMax({
    scrollTrigger: {
      trigger: "#section-beebly",
      smoothChildTiming: true,
      start: "top top",
      pin: true,
      scrub: true,
      end: "+=15400"
    }});

  beeTimeline
    .to("#the-cursor",    1, { top: 469, right: 418 })
    .to("#the-box",       1, { width: 110 })
    .to("#the-cursor",    1, { top: 285, right: 218 }, "-=1")
    .to("#the-cursor",    1, { top: -65 })
    .to("#the-box",       1, { top: -120 }, "-=1")
    .to(".beebly-ground", 4, { top: 700 }, "-=1")
    .to("#the-cursor",    2, { right: 630, top: 536 })
    .to("#the-text-cursor",  0.1, { opacity: 1 })
    .to("#the-cursor",  0.1, { opacity: 0 }, "-=0.1")
    .to("#the-text-cursor",  0.5, { opacity: 1 })
    .add(fontChange)
    .to("#the-text-cursor",  0.1, { opacity: 0 }, "-=0.1")
    .to("#the-cursor",  0.1, { opacity: 1 }, "-=0.1")
    .to("#the-cursor",    2, { top: -65, right: 218 })
    .to("#the-box",       2, { right: 544, top: 570 }, "+=1")
    .to("#the-cursor",    2, { right: 599, top: 625 }, "-=2")
    .to("#the-box span",  0.1, { opacity: 0 }, "+=1")
    .to("#the-cursor", 0.1, { opacity: 0 }, "-=0.1")
    .to("#the-box",  0.1, { borderColor: "transparent" }, "-=0.2")
    .to("#the-box",  10, { borderColor: "transparent" });


  // LIKE

  var likeHeight = $('#section-like').height();
  var originalLikeHeight = $('.like-layered-wrapper').height();
  tshirtLikeHeight = originalLikeHeight * .5;
  socialLikeHeight = originalLikeHeight * .35;
  likeHeight = likeHeight * 2.5;
  
  gsap.set(".like-layered-wrapper", { yPercent: -65, xPercent: -50 });
  gsap.set(".like-layered", { strokeWidth: 2 });

  var likeBouncing = new TimelineMax({ defaults: {stagger: -5}});
  //likeBouncing.timeScale(2);
  likeBouncing.repeat(2);
  likeBouncing
    .to('.like-l', 10, { yPercent: 40, delay: -20 }, "-=2")
    .to('.like-i', 10, { yPercent: 40, delay: -20 }, "-=2")
    .to('.like-k', 10, { yPercent: 40, delay: -20 }, "-=2")
    .to('.like-e', 10, { yPercent: 40, delay: -20 }, "-=2")
    .to('.like-l', 10, { yPercent: 0, delay: -20 }, "-=2")
    .to('.like-i', 10, { yPercent: 0, delay: -20 }, "-=2")
    .to('.like-k', 10, { yPercent: 0, delay: -20 }, "-=2")
    .to('.like-e', 10, { yPercent: 0, delay: -20 }, "-=2");

  var slides = document.querySelectorAll(".like-panel");
  
  var likeAction = new TimelineMax({
    scrollTrigger: {
      trigger: "#section-like",
      start: "top top",
      pin: true,
      scrub: true,
      end: "+=28400"
    }});
  
  likeAction
    .from('.like-container', 2, { y: 200 })
    .from('.like-container *', 1, { opacity: 0, stagger: .5 }, "-=2.5")
    .from('.bg-shape', 4, { top: 0, stagger: 2, scrub: 1 })
    .to(slides, 4, {xPercent: -100, ease: "none", stagger: 3 }, "+=10")
    .to('.like-colors-bg', 18, { xPercent: -180 }, '-=9')
    .to('.like-layered-wrapper', 30, { height: likeHeight, xPercent: 0, yPercent: -100, top: 0, left: 0 }, '+=6')
    .to('.t-shirt-bg', .01, { opacity: 1 }, '-=2')
    .to('.like-layered-wrapper', 10, { height: tshirtLikeHeight, xPercent: -50, yPercent: -65, top: "50%", left: "50%"})
    .to('.like-layered', 0.1, { strokeWidth: 1 }, "-=2")
    .to('.like-layered-wrapper', 10, { height: tshirtLikeHeight })
    .to('.like-layered-wrapper', 30, { height: likeHeight, xPercent: 0, yPercent: -100, top: 0, left: 0 }, '+=6')
    .to('.like-layered', 0.1, { strokeWidth: 2 }, "-=2")
    .to('.t-shirt-bg', .01, { opacity: 0 })
    .to('.like-layered-wrapper', 20, { xPercent: -80})
    .to('.social-post', .01,  { opacity: 1 })
    .to('.like-layered-wrapper', 10, { height: socialLikeHeight, xPercent: -85, yPercent: -65, top: "50%", left: "50%"})
    .to('.like-layered', 0.1, { strokeWidth: 1 }, "-=2")
    .to('.like-l.color-layer', 10, { y: 0, stagger: -1, duration: 2 })
    .to('.like-i.color-layer', 10, { y: 0, stagger: -1, duration: 2 }, "-=2")
    .to('.like-k.color-layer', 10, { y: 0, stagger: -1, duration: 2 }, "-=2")
    .to('.like-e.color-layer', 10, { y: 0, stagger: -1, duration: 2 }, "-=2")
    .add(likeBouncing)
    .to('.like-red', 0.1, { fill: "#7a45ff" })
    .to('.like-orange', 0.1, { fill: "#00c3e8" })
    .to('.like-cyan', 0.1, { fill: "#ffba00" })
    .to('.like-blue', 0.1, { fill: "#fd344f" })
    .to('.like-red', 2, { yPercent: 10, stagger: -1 })
    .to('.like-orange', 2, { yPercent: 20, stagger: -1 })
    .to('.like-cyan', 2, { yPercent: 30, stagger: -1 })
    .to('.like-blue', 2, { yPercent: 40, stagger: -1 })
    .to('.social-post', 20,  { opacity: 0 }, "+=4")
    .to('.like-layered-wrapper', 50, { height: likeHeight, xPercent: -80, yPercent: -100, top: 0, left: 0 }, '-=30')
    .to('.like-final-container', { opacity: 1, duration: 12 })
};