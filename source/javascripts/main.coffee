# Man, don't be clickin' and workin'
class Main
  constructor: ->
    $('li').find('a:first').click (event) ->
      event.preventDefault() if $(this).parents('.break').length > 0

    $(document).foundation {
      index : 0,
      stickyClass : 'sticky',
      custom_back_text: true,
      back_text: 'Back',
      init : true
    }

window.main = new Main()
