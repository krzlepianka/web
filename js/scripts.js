//ViewPort detection
window.addEventListener('DOMContentLoaded', (event) => {
    /*function scrollDetection() {
        let aboutMeSection = document.querySelector('.about-me');
        let projectsSection = document.querySelector('.projects')
        let footerSection = document.querySelector('footer');
        $(window).on('scroll', function(e) {
            let OffsetY = this.pageYOffset + 400;
            if(OffsetY >= aboutMeSection.offsetTop && OffsetY <= (aboutMeSection.offsetTop + aboutMeSection.offsetHeight)) {
                $('.about-me').stop().animate({
                    marginLeft: "0px",
                    opacity: "1"
                }, "fast")
                }
            else {
                $('.about-me').stop().animate({
                    marginLeft: "-300px",
                    opacity: "0"
                }, "fast")
            }
            if(OffsetY >= projectsSection.offsetTop && OffsetY <= (projectsSection.offsetTop + projectsSection.offsetHeight)) {
                $('.projects').stop().animate({
                    marginLeft: "0px",
                    opacity: "1"
                }, "fast")
                }
            else {
                $('.projects').stop().animate({
                    marginLeft: "-300px",
                    opacity: "0"
                }, "fast")
            }
            if(OffsetY >= footerSection.offsetTop && OffsetY <= (footerSection.offsetTop + footerSection.offsetHeight)) {
                $('.footer').stop().animate({
                    marginLeft: "0px",
                    opacity: "1"
                }, "fast")
                }
            else {
                $('.footer').stop().animate({
                    marginLeft: "-300px",
                    opacity: "0"
                }, "fast")
            }
        })
    }
    scrollDetection();*/

function checkInitialWidth() {
    let navigationForLargeScreens = document.querySelector('.navigation');
    let navigationForSmallScreens = document.querySelector('.navigation__mobile');
    let currentWidth = window.innerWidth;
    if(currentWidth <= 900) {
        navigationForSmallScreens.style.display= 'block';
        navigationForLargeScreens.style.display= 'none';
    }
    else {
    navigationForSmallScreens.style.display= 'none';
    navigationForLargeScreens.style.display= 'block';
    }
} 
checkInitialWidth();


function checkResize() { 
    let navigationForLargeScreens = document.querySelector('.navigation');
    let navigationForSmallScreens = document.querySelector('.navigation__mobile');
    window.addEventListener('resize', function(e) {
       let currentWidth = e.currentTarget.innerWidth;
       if(currentWidth <= 900) {
        navigationForSmallScreens.style.display= 'block';
        navigationForLargeScreens.style.display= 'none';
       }
       else {
        navigationForSmallScreens.style.display= 'none';
        navigationForLargeScreens.style.display= 'block';
       }
   })
}
checkResize();


function openMobileMenu() {
    //const menu = document.querySelector('.navigation__menu');
    const menu = document.querySelector('.navigation__container-btn');
    const links = document.querySelector('.navigation__links-mobile');
    let menuOpen = false;
    menu.addEventListener('click', function() {
        if(!menuOpen) {
            menu.classList.add('open');
            links.style.display ="block";
            menuOpen = true;
        }
        else {
            menu.classList.remove('open');
            links.style.display = "none";
            menuOpen = false;
        }
    })
}

openMobileMenu();



});

