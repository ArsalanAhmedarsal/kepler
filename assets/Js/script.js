const preIcon = '<img src="assets/Img/Preview.svg" alt="">';
const nextIcon = '<img src="assets/Img/next.svg" alt="">';


$('.hero-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoHeight: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },

        1000: {
            items: 1
        },

        1440: {
            items: 1
        }
    }
});


$('.Popular-goods').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 1
        },

        430: {
            items: 2
        },

        500: {
            items: 2
        },
        600: {
            items: 3
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        },

        1024: {
            items: 4
        },

        1440: {
            items: 5
        },

        1600: {
            items: 6
        }
    }
})


$('.Testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        },

        1440: {
            items: 2
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});
// DOMContentLoaded  end


var btn = $('#back-top-top-btn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});





$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});



//html rang Js
$(document).ready(function () {
    //wRunner plugin initialization in jQuery
    $('.my-jquery-slider').wRunner({
        type: 'range',
        rangeValue: {
            minValue: 30,
            maxValue: 100,
        },
        step: 1,
    })
})

//html rang Js END


//Sidebar offcanvas Js start

$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })


    // document ready  
});


window.onload = function () {
    // executes when complete page is fully loaded, including all frames, objects and images
    console.log("window is loaded");


    // window load  
};


//Sidebar offcanvas Js end

/*outside click offcanvas*/


// var a = document.querySelector(".offcanvas-collapse").classList.length;
// console.log(a);



// if (document.querySelector(".navbar-collapse").classList.contains("open"))
//     console.log('Class present');
// else
//     console.log('Class not present');

//listing page sidebar apppar on 992

jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww > 990) {
            $('.navbar-collapse').addClass('open');
        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});







//detail page counter js

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});








// detail page product slider











