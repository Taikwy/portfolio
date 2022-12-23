
let eyes = $(".eye");

$("body").mousemove(function(event) {

  for(let i = 0; i < eyes.length; i++){
    eyeTracking($(eyes[i]));
  }
});

function eyeTracking(eye){
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;

  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
}




let mybutton = document.getElementById("myBtn");
mybutton.onclick = topFunction;

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    console.log("scrolling top");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}