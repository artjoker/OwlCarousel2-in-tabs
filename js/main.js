/////////================================START-DOCUMENT-READY==========================*///
$(document).ready(function(){
    /*owl карусель в табах*/
    function car() {
        var owl_pane = $('.tab-pane.active .js_carousel-items');
        owl_pane.owlCarousel({
            loop:false,
            navRewind:false,
            nav:true,
            margin:30,
            responsiveClass:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
    }
    car();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
        var relatedTab = $(event.relatedTarget).attr('href');
        car();
        var $owlTab = $('.js_carousel-items', relatedTab);
        $owlTab.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-theme');
        $owlTab.find('.owl-stage-outer').children().unwrap();
    });   
	
});

/*================================END-DOCUMENT-READY==========================*///
