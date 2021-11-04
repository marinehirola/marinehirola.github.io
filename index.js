//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);


gsap.from("#sun", {opacity:0, duration:4});
gsap.to("#sun", {
  scale:.5,
  duration: 180, 
  repeat:-1,
  yoyo: true,
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: false,
    alignOrigin: [.5, .5],
    start:.1
  }
});


