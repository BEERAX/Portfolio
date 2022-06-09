$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // Slide up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTo: 0 });
  });

  //  toggle menu/navbar script //check
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  //typing animation script
  var typed = new Typed('.typing', {
    strings: [
      'Web Developer',
      'Web Design',
      'React or Next JS Developer',
      'Front-End Developer',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: [
      'Front-End Developer',
      'React JS Developer',
      'Next JS Developer',
      'Web Developer',
      'Web Design',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
