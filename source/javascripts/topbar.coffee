class TopBar

  get = (props) => @::__defineGetter__ name, getter for name, getter of props
  set = (props) => @::__defineSetter__ name, setter for name, setter of props

  stickyClass: '.sticky'
  menuButtonClass: '.menu-icon'
  $sticky: null
  $topbar: null
  smallSize: 768

  get small: ->
    @_small = ($('body').width() < @smallSize)
    return @_small


  get expanded: -> @_expanded
  set expanded: (val) ->
    @_expanded = val ? true
    if val
      @$topbar.addClass('expanded')
      if @top then @fixed = true
    else
      @$topbar.removeClass('expanded')
      if @top then @fixed = false


  get top: ->
    scrollTop = $("body").scrollTop()
    @_top = (scrollTop < 1)
    return @_top
  set top: (val) -> return @_top = val


  get fixed: -> return @_fixed
  set fixed: (val) ->
    if val
      $('body').addClass('fixered')
      @$sticky.addClass("fixed")
    else
      $('body').removeClass('fixered')
      @$sticky.removeClass("fixed")
    return @_fixed = val



  constructor: ->
    @$sticky = $(@stickyClass)
    @$topbar = $('.top-bar')

    @setupEvents()

  setupEvents: ->
    $window = $(window)
    $menuButton = $(@menuButtonClass)

    @setupScroll($window)
    @setupResize($window)
    @setupMenu($menuButton)

  setupResize: ($window) ->
    $window.on "resize", (e) => @expanded = false if @small

  setupScroll: ($window) ->
    $window.on "scroll", (e) =>
      if not @top
        @fixed = true
      else
        @fixed = false if not @expanded

  setupMenu: ($menuButton) ->
    $menuButton.on "click", (e) => @expanded = !@expanded
    @$topbar.find('.top-bar-section li a').on "click", (e) => @expanded = false



window.TopBar = TopBar