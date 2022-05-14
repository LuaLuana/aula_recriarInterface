$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$( "#ative-p" ).click(function() {
    $( "p" ).toggle( "slow" );
  });


  $( "#ative-v" ).click(function() { 
    $( " .video iframe" ).toggle( "slow" );
  }); 