$ ->
  $('.page-link').click (e) ->
    e.preventDefault()
    $.scrollTo($(this).attr('href'), 1200)
  
  $('h1').fitText(1.2, minFontSize: '20px')