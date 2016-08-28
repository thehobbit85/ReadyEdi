var isMuted = false;

$(document).ready(function() {

  $('#volume').click(function () {
    var video = document.getElementById('racingVideo')
    if (isMuted) {
      $('#volume').attr('src','./img/volume.svg')
      video.volume = 1
      isMuted = false
    } else {
      $('#volume').attr('src','./img/volume-mute.svg')
      video.volume = 0
      isMuted = true
    }
  })

  $('#preorderForm').modal({
    backdrop: 'static',
    keyboard: false
  })

  $('#logo').click(function () {
    var body = document.body
    var html = document.documentElement
    var height = Math.max(body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight)
    var pagePosition = body.scrollTop
    var time = 6000
    var speed = (pagePosition / height ) * time

    console.log(height, pagePosition)
    $('body,html').animate({
      scrollTop: 0
    }, speed)
    return false
  })

})
