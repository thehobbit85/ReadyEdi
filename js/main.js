var controller = new ScrollMagic.Controller();

$('video').click(function () {
  this.volume == 0 ? this.volume = 1 : this.volume -= 0.25
})

$(function () {
    // build scene

    var scene = new ScrollMagic.Scene({triggerElement: "#step", triggerHook: 0, duration: "1100%"})
    .setPin("#cd-vertical-nav")
    .addTo(controller);

    for (var i = 1; i < 7; i++ ) {
      var precent = 200 * i - 100
      new ScrollMagic.Scene({triggerElement: "#start_model", triggerHook: 0, duration: precent+"%"})
      .setPin("#model"+i)
      .addTo(controller);
    }

})

$('#preorderForm').modal({
    backdrop: 'static',
    keyboard: false
})
