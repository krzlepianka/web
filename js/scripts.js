//ViewPort detection
$( document ).ready(function() {
    function scrollDetection() {
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
    scrollDetection();
});

