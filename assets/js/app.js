let varCookies = "cookies-112233";
var $grid = $('.grid').masonry({
  // options...
});
$(document).ready(function () {
  $('.slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,

  });

  $('.imagesSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
  });

  $('.centerSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  });

  $('.slick1').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    dots: false,
  });

  $('.slick-multy').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    dots: false,

    variableWidth: true
  });


  $('.home-1').slick({
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    // fade: true,
    // dots: false,
    // cssEase: 'linear',
    // nextArrow: '.homeNext',
    // prevArrow: '.homePrevious'
  });

  var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>' + item.el.attr('content') + '</small>';
      }
    }
  });


  if (localStorage.getItem(varCookies) == "1") {
    $("#popup-cookies").fadeOut("show");
  }

  $("#isApprove").on("click", function () {
    $("#popup-cookies").fadeOut("show");
    localStorage.setItem(varCookies, "1");
  });



  $(".fnCategory").on("click", function () {
    console.log($(this).data("id"));
    let id = $(this).data("id");
    $('.fnCategory').removeClass('btn-dark').addClass("btn-outline-dark");
    $(this).removeClass('btn-outline-dark').addClass("btn-dark");
    if (id == "*") {
      $(".allCategory").fadeIn();
    } else {
      $(".allCategory").hide();
      $(".category_" + id).fadeIn();
    }

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
      $grid.masonry('layout');
    });
  });

 
});

$(window).on('load', function () {
  $("#loader").fadeOut("slow");
  console.log("loading");
  mansory();
});


function mansory() {
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
