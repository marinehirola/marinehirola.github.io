gsap.utils.toArray(".color").forEach(function(elem) {

  var color = elem.getAttribute('data-color');
  
  ScrollTrigger.create({
    trigger: elem,
    start:'top 50%',
    end:'bottom 50%',
    onEnter: () => gsap.to('body', {backgroundColor:color}), 
    onLeave: () => gsap.to('body', {backgroundColor:'white'}), 
    onLeaveBack: () => gsap.to('body', {backgroundColor:'white'}), 
    onEnterBack: () => gsap.to('body', {backgroundColor:color}), 
    markers:true
  });
});