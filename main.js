// SET SIZE OF HEADER BACKGROUND IMAGE TO WINDOW SIZE
$(document).ready(function(){
    $('.header').height($(window).height());
  })

// CAROUSEL INTERVAL
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 4000
  })
});

// SMOOTH SCROLLING WHEN ANCHOR LINKS IN NAVBAR ARE CLICKED
var $root = $('html, body');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
