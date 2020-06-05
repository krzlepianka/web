$(document).ready(function() {
    function scrollDetection(section) {
        const currentSection = document.querySelector(section);
        $(window).on('scroll', function() {
            let offsetY = this.pageYOffset + 400;
            if(offsetY >= currentSection.offsetTop && offsetY <= (currentSection.offsetTop + currentSection.offsetHeight)) {
                $(section).stop().animate({
                    marginLeft: "0px",
                    opacity: "1"
                }, "fast")
                }
            else {
                $(section).stop().animate({
                    marginLeft: "-300px",
                    opacity: "0"
                }, "fast")
            }
    })
}
    scrollDetection('.about-me');
    scrollDetection('.projects');
    
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

function ScrollTopElement() {
    $('a[href^="#"]').on('click', function() {
        const section = $(this.getAttribute('href'));
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000)
    })
}

ScrollTopElement();

});

