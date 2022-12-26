
let pixeleyes = $(".pixeleye");
for(let i = 0; i < pixeleyes.length; i++){
    pixelEyeInitial($(pixeleyes[i]));
  }

$("body").mousemove(function(event) {

  for(let i = 0; i < pixeleyes.length; i++){
    pixelEyeTracking($(pixeleyes[i]));
  }
});

function pixelEyeTracking(eye){
    // console.log(x + " " + y);
    console.log(eye.offset().left);
    // console.log(eye.offset().top);
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

function pixelEyeInitial(eye){
    var rot = 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });

}


// window.addEventListener('scroll', scrollFunction);