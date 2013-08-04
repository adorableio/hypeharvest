# Man, don't be clickin' and workin'
class Main
  constructor: ->
    $('li').find('a:first').click (event) ->
      event.preventDefault() if $(this).parents('.header').length < 1

window.main = new Main()
