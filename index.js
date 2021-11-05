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


particlesJS("particles-js", 
{"particles":
{"number":
{"value":38,"density":
{"enable":true,"value_area":800}},
"color":{"value":"#ffffff"},
"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":5},"image":{"src":"/assets/images/Vector 58.png","width":100,"height":100}},
"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":44.09383167380184,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.09620472365193128,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;