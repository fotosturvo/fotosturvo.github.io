$(function() {
  $("nav a:not(.button)").click(function(event) {
    event.preventDefault(event);
    var session = $(this).attr('href');
    var sessionPosition = $(session).offset().top - 40;

    console.log(sessionPosition);

    $('body,html').animate({ scrollTop: sessionPosition }, 500, function() {
        window.location.hash = session;
    });
  });

  $("div.lazy").lazyload({
    effect : "fadeIn"
  });
});
