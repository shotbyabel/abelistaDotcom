//PHOTO GALLERY CONTROLS

$(document).ready(function() {
  $('section#screenshots a').on('click', function(){
      $('div#modal img').attr('src', $(this).attr('data-image-url')
        );
  })
});


// ABOUT ME INTRO
// jQuery EASING ANIMATION
// $('#ready').animate({left:'46%'},750, 'easeInOutQuad');
// $('#ready').fadeOut({top:-150},3000, 'easeInOutQuad');

// $('#willing').fadeTo(1000, 1.0);
// $('#willing').animate({right:'46%'},1000, 'easeInOutQuad');
// $('#willing').fadeOut({top:-150},3500, 'easeInOutQuad');

// $('#and').fadeTo(1750, 1.0);
// $('#and').animate({left:'46%'},1500, 'easeInOutQuad');
// $('#and').fadeOut({top:-150},1900, 'easeInOutQuad');

// $('#abel').fadeTo(2250, 1.0);
// $('#abel').animate({left:'46%'},2000, 'easeInOutElastic');


// $('#fswd').fadeTo(3500, 1.0);
// $('#fswd').animate({top:145},2000,'easeOutBounce');


// GSAP ANIMATIONS


TweenMax.to('.stacks1 ', 1.75, {marginTop:150, ease:Bounce.easeOut});
TweenMax.to('.stacks2 ', 2.00, {marginTop:150, ease:Bounce.easeOut});

//hide photo gallery

// on page LOAD .hide gallery section.
// on CLICK of photo-title id .show gallery section
$(document).ready(function() {
  $('#screenshots, #musics').hide();
  $('#photo-title').click(function () {
  $('#screenshots').toggle();
  
})

  
  $('#sound-music').click(function () {
    $('#musics').toggle();
  })

});


// #sound-music
// #musics



