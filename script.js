$(document).ready(function () {

    $('.owl-theme').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })

    
  });

  $(document).ready(function () {

    $('.cuisine-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })

    
  });
  $(document).ready(function () {

   var owl= $('.dish-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
  // Custom Navigation Events
  $('#customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('#customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
    
  });

 

