// Making sure document is loaded
document.addEventListener("DOMContentLoaded", function() {

// Getting Mobile Menu Button
var mobileBtn =  document.querySelector(".spotify-mobile__btn");
var overlay = document.querySelector(".mobile-menu__overlay");
var mobileMenu = document.querySelector(".mobile-menu");

// Opening & Closing Menu When Button Is Clicked
mobileBtn.addEventListener("click", (e)=>{
    e.currentTarget.classList.toggle("open");
    overlay.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.querySelector("body").classList.toggle("mobile-menu__open");

    // Closing Menu When Outside Is Clicked
    if(mobileMenu.classList.contains("open")){
        document.addEventListener("click",(e)=>{
            if(e.target !== mobileMenu && !mobileMenu.contains(e.target) && mobileBtn !== e.target){
                mobileBtn.classList.remove("open");
                overlay.classList.remove("open");
                mobileMenu.classList.remove("open");
                document.querySelector("body").classList.remove("mobile-menu__open");
            }
        })
    }



});



});