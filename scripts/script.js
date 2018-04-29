$(document).ready(function(){

  $('.community__list').slick({
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.coach-photos__list').slick({
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });
  // $('.community__item').on('click', function(event){
  //   event.preventDefault();
  //   var targetId = $(this).attr('href');
  //   $('.instructor--shown').removeClass('instructor--shown');
  //   $(targetId).addClass('instructor--shown');
  //   $('.instructors__item--active').removeClass('instructors__item--active');
  //   $(this).addClass('instructors__item--active');
  // });


  // $('#burger').on('click', function(){
  //   $('#menu').slideToggle(1200);
  // });

});