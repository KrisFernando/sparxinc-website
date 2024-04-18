(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    /** Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });
    */

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });

    $('.menu-home').click(function () {
        $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
        return false;
    });

    $('.menu-about').click(function () {
        var off = $('#about').offset().top-90;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });

    $('.menu-services').click(function () {
        var off = $('#services').offset().top-90;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });

    $('.menu-projects').click(function () {
        var off = $('#projects').offset().top-95;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });

    $('.menu-contact').click(function () {
        var off = $('#contact').offset().top-95;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });    

    $('.menu-why').click(function () {
        var off = $('#why').offset().top-95;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });    

    $('.menu-faq').click(function () {
        var off = $('#faq').offset().top-95;
        $('html, body').animate({scrollTop: off}, 200, 'easeInOutExpo');
        return false;
    });    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
        return [...document.querySelectorAll(el)]
        } else {
        return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 95;
        navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header');
        let offset = -100;
        let elementPos = select(el).offsetTop
        console.log('scroll');
        window.scrollTo({
        top: elementPos + offset,
        behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
        if (window.scrollY > 150) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    
})(jQuery);

