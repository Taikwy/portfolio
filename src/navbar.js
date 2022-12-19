$(document).ready(function() {

    // .scroll() creates an event when the user scrolls
    $(window).scroll(function() {
  
        // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
        var scroll = $(window).scrollTop();
    
        if (scroll > 400) {
            $('navbar').addClass('displayNav');
            console.log("adding");
        } else {
            $('navbar').removeClass('displayNav');
            console.log("not");
        }
    });
});
