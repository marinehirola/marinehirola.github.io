//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
    markers:false
  });

  ScrollTrigger.create({
    trigger: '#home-journal',
    start:'top 50%',
    end:'bottom 50%',
    toggleClass:  'dark-mode',
   
    
  });
  ScrollTrigger.create({
    trigger: '#tiger-other',
    start:'top 50%',
    end:'bottom 50%',
    toggleClass:  'dark-mode',
   
    
  });
});