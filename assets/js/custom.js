jQuery(document).ready(function ($) {
    // Logo Carousel Initialization
    const $logoTrack = $('.logo-track');
    if ($logoTrack.length) {
        $logoTrack.slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 10000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    // Brand Ribbon Continuous Scroll
    const $ribbonTrack = $('.ribbon-track');
    if ($ribbonTrack.length) {
        $ribbonTrack.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 18000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            variableWidth: true
        });
    }

    // Services Slider Initialization
    const $serviceSlider = $('.service-slider');
    const $progressBar = $('.slider-progress-bar');

    if ($serviceSlider.length) {
        // Use 'init' and 'beforeChange' events to manage progress bar
        $serviceSlider.on('init', function (event, slick) {
            if (slick.slideCount > 0) {
                let calc = ((slick.currentSlide + 1) / slick.slideCount) * 100;
                $progressBar.css('width', calc + '%');
            }
        });

        $serviceSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (slick.slideCount > 0) {
                let calc = ((nextSlide + 1) / slick.slideCount) * 100;
                $progressBar.css('width', calc + '%');
            }
        });

        $serviceSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            prevArrow: $serviceSlider.closest('.services').find('.arrow-left'),
            nextArrow: $serviceSlider.closest('.services').find('.arrow-right'),
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '40px'
                    }
                }
            ]
        });
    }

    // Testimonials Slider Initialization
    const $testimonialsSlider = $('.testimonials-slider');
    if ($testimonialsSlider.length) {
        $testimonialsSlider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Infinite Gallery - Left to Right
    const $galleryTrackLeft = $('.gallery-track-left');
    if ($galleryTrackLeft.length) {
        $galleryTrackLeft.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 30000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
                { breakpoint: 768, settings: { slidesToShow: 2.2 } },
                { breakpoint: 480, settings: { slidesToShow: 1.3 } }
            ]
        });
    }

    // Infinite Gallery - Right to Left
    const $galleryTrackRight = $('.gallery-track-right');
    if ($galleryTrackRight.length) {
        $galleryTrackRight.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 30000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            rtl: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
                { breakpoint: 768, settings: { slidesToShow: 2.2 } },
                { breakpoint: 480, settings: { slidesToShow: 1.3 } }
            ]
        });
    }
});
