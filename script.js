$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();

    const $author1 = $('.author1');
    const author1FromTop = $author1.offset().top
    const author1Height = $author1.outerHeight()

    if (scrollValue > author1FromTop + author1Height - windowHeight) {
        $author1.addClass('active');
      }

      if (scrollValue < 100) {
        $('.author1').removeClass('active');
      }
    })