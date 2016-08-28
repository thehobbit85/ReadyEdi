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

})
