const TimeLine = gsap.timeline({

    defaults:{
      autoAlpha:0, 
      duration:0.8
    },
    paused:true
})

setTimeout(() => TimeLine.play(), 800);

TimeLine
.from('.logo', { x:-20})
.from('.nav-list', { x:-20, duration:0.5, stagger:0.1}, "<")
.from('.title', { y:20, duration:0.5}, "+=0.3")
.from('.tagline', { y:20, duration:0.6})
.from('.desc', { y:20}, "<")
.from('.beer', { y:-300, ease:"power4.in",duration:0.6})