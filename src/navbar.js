
window.addEventListener('scroll', navScrollFunction);
let navBar = document.getElementById("nav");
let navAppear = 700;
let navDissapear = 250;


function navScrollFunction() {
    // console.log(document.body.scrollTop);
    
    if (document.body.scrollTop > navAppear || document.documentElement.scrollTop > navAppear){
        navScrollAppear();
        // console.log("hide");
    }
    else if (document.body.scrollTop > navDissapear || document.documentElement.scrollTop > navDissapear){
        navScrollDissapear();
        // console.log("show");
    }
    else{
        navDefault();
    }
}

function navDefault(){
    navBar.style.transitionDuration = "0s";
    navBar.style.top = "30px";
    navBar.style.position = 'absolute';
    navBar.style.backdropFilter = 'none';
    
    
    navBar.style.backgroundColor = "transparent";
}
function navScrollAppear(){
    navBar.style.transitionDuration = "0.4s";
    navBar.style.top = "0";
    navBar.style.position = 'fixed';
    navBar.style.backdropFilter = 'blur(5px)';

    navBar.style.backgroundColor = "rgb(0 0 0 / 0.7)";
}
function navScrollDissapear(){
    navBar.style.top = "-100";
}