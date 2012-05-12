
$(function() {
  $('.page-link').click(function(e) {
    e.preventDefault();
    return $.scrollTo($(this).attr('href'), 1200);
  });
  return $('h1').fitText(1.2, {
    minFontSize: '20px'
  });
});
