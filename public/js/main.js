$(document).ready(function() {
  $('section#screenshots a').on('click', function(){
      $('div#modal img').attr('src', $(this).attr('data-image-url')
        );
  })
});


// ABOUT ME INTRO
// jQuery EASING ANIMATION
$('#ready').animate({left:'46%'},750, 'easeInOutQuad');
$('#ready').fadeOut({top:-150},3000, 'easeInOutQuad');

$('#willing').fadeTo(1500, 1.0);
$('#willing').animate({right:'46%'},1000, 'easeInOutQuad');
$('#willing').fadeOut({top:-150},3500, 'easeInOutQuad');

// $('#and').fadeTo(5500, 1.0);
// $('#and').animate({right:'46%'},1000, 'easeInOutQuad');
// $('#and').fadeOut({top:-150},1500, 'easeInOutQuad');

$('#abel').fadeTo(2000, 1.0);
$('#abel').animate({left:'46%'},2000, 'easeInOutElastic');


$('#fswd').fadeTo(3000, 1.0);
$('#fswd').animate({top:150},1000,'easeOutBounce');





