$(function() {
  const tally = {
      ending1: 0,
      ending2: 0,
  }

const results = {
    ending1: {
        name: "ending1",
        description: "Congrats, my extroverted furry friend! You like to explore and adventure, taking advantage of everything this great city has to offer!"
    },

    ending2: {
        name: "ending2",
        description: "What a wonderful day in the 6ix. Good eats, good naps, and some introspective time at the beach does a soul good. Enjoy, friend!"
    },

    const smoothScroll = function(target) {
      let $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 800, 'swing', function() {
          window.location.hash = target;
      });
  }
