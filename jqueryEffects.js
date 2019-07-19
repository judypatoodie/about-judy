$(document).ready(function() {
window.onload = function() {
  $('.overlay').hide().fadeIn(2000);
  $('#subOverlay').hide().fadeIn(5000);
}
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$(window).scroll(function() {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if($(this).scrollTop() > 200) {
      $('.navbar')
      .addClass('navbar-dark bg-dark')
      .removeClass('navbar-light');
  } else {
      $('.navbar').removeClass('navbar-dark bg-dark')
      .addClass('navbar-light');
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
