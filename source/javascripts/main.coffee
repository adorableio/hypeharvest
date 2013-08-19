# Man, don't be clickin' and workin'
class Main
  constructor: ->
    $('a.hover').click (event) ->
      event.preventDefault()

    $('.top-bar-section').find('li a').click (event) ->
      $('.top-bar.expanded').removeClass('expanded')

    $(document).foundation {
      index : 0,
      stickyClass : 'sticky',
      custom_back_text: true,
      back_text: 'Back',
      init : true
    }

window.main = new Main()
