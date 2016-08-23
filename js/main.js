$('video').click(function () {
  this.volume == 0 ? this.volume = 1 : this.volume -= 0.25
})

$('#preorderForm').modal({
  backdrop: 'static',
  keyboard: false
})
