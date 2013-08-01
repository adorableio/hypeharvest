# Man, don't be clickin' and workin'
class Main
  constructor: ->
    $('li').find('a:first').click (event) ->
      event.preventDefault()

window.main = new Main()
