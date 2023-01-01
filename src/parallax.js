document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var xSpeed = move.getAttribute("xSpeed");
        var ySpeed = move.getAttribute("ySpeed");
        var zLayer = move.getAttribute("zLayer");

        

        var xToCenter = e.pageX - window.innerWidth/2;
        var yToCenter = e.pageY - window.innerHeight/2;
        
        var x = (window.innerWidth - xToCenter * xSpeed * zLayer)/100;
        var y = (window.innerHeight - yToCenter * ySpeed * zLayer)/100;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px) ";
        
        // move.style.transform = "translate(50%, 50%)";

        // var x = (e.clientX * moving_value) / 100;
        // var y = (e.clientY * moving_value) / 100;
        
        // var x = (window.innerWidth - e.pageX * moving_value)/100;
        // var y = (window.innerHeight - e.pageY * moving_value)/100;

        // var x = (window.innerWidth - xToCenter * moving_value)/100;
        // var y = (window.innerHeight - yToCenter * moving_value)/100;
    });
}