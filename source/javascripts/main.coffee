#= require "./topbar"

# Man, don't be clickin' and workin'
class Main
  constructor: ->
    $('a.hover').click (event) -> event.preventDefault()

    @topBar = new TopBar()
    @setupEvents()

  setupEvents: ->

    $("a[href^='#!']").on "click", (e) =>
      e.preventDefault()
      $("sticky").addClass("fixed") if ($('body').scrollTop() > 0)

    $("a[href^='#']").on "click", (e) =>
      console.log "anchor"
      e.preventDefault()
      $el = $(e.currentTarget)
      @scrawlTo($el.attr("href"))


  scrawlTo: (destHref) ->
    if (destHref == "#!")
      return
    else if (destHref == "#")
      destPos = 0
    else
      $el = $(destHref)
      destPos = $el.offset().top

    if destPos?
      console.log "animate"
      $('html, body').animate({
        scrollTop: destPos
      }, 400 )

$ ->
  window.main = new Main()
