$(document).ready(function(){

    $('.promo__burger').on('click', function() {
    $(this).find('header').addClass('page-header--active');
    $(this).find('header').removeClass('page-header--active');
    $('header').toggle();
    })();
    // $('.promo__burger').on('click', function() {
    // $(this).find('#burgerline').addClass('promo__burgerline-black--active');
    // $(this).find('#burgerline').removeClass('promo__burgerline-black--active');
    // })();

// (function() {
 
//   document.querySelector( ".promo__burgerline-black" )
//   .addEventListener( "click", function() {
//       this.classList.toggle( "active" );
//     });

// });

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






// (function() {
 
//   var toggles = document.querySelectorAll(".promo__burger");
 
//   for (var i = toggles.length - 1; i >= 0; i--) {
//     var toggle = toggles[i];
//     toggleHandler(toggle);
//   };
 
//   function toggleHandler(toggle) {
//     toggle.addEventListener( "click", function(e) {
//       e.preventDefault();
//       (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
//     });
//   }

// })();




})();
