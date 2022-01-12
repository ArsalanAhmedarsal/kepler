const preIcondetail = '<img src="assets/Img/Preview.svg" alt="">';
const nextIcondetail = '<img src="assets/Img/next.svg" alt="">';


    $('.new-slider').owlCarousel({
       loop: true,
            items: 1,
            slideSpeed: 2000,
            autoplay: true,
            navText: [
                preIcondetail,
                nextIcondetail
        
            ],
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
       });
  