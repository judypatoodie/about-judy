$(document).ready(function() {
window.onload = function() {
  $('.overlay').hide().fadeIn(2000);
  $('#subOverlay').hide().fadeIn(5000);
}

$(window).scroll(function() {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if($(this).scrollTop() > 200) {
      $('.navbar')
      .addClass('navbar-dark bg-dark')
      .removeClass('navbar-light');
  } else {
      $('.navbar').removeClass('navbar-dark bg-dark');
  }
});

});


/*
var i = 0;
var txt = 'WEB DEVELOPER FROM SAN FRANCISCO';

function intervalSet(){
 setInterval(function typeWriter() {
    if (i < txt.length) {
      document.getElementById("subOverlay").innerHTML += txt.charAt(i);
      i++;
    }

  },150);
}
*/
