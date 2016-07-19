var controller = new ScrollMagic.Controller();

$('video').click(function () {
  this.volume == 0 ? this.volume = 1 : this.volume -= 0.25
})

$(function () {
    // build scene

    var scene = new ScrollMagic.Scene({triggerElement: "#step", triggerHook: 0, duration: "1100%"})
    .setPin("#cd-vertical-nav")
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#step", triggerHook: 0, duration: "100%"})
    .setPin("#data_num1")
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#top_plate", triggerHook: 0, duration: "100%"})
    .setPin("#data_num2")
    .addTo(controller);

    var scene4 = new ScrollMagic.Scene({triggerElement: "#screws", triggerHook: 0, duration: "100%"})
    .setPin("#data_num3")
    .addTo(controller);

    var scene5 = new ScrollMagic.Scene({triggerElement: "#pdb", triggerHook: 0, duration: "100%"})
    .setPin("#data_num4")
    .addTo(controller);

    var scene6 = new ScrollMagic.Scene({triggerElement: "#bottom_plate", triggerHook: 0, duration: "100%"})
    .setPin("#data_num5")
    .addTo(controller);

    var scene7 = new ScrollMagic.Scene({triggerElement: "#end_model", triggerHook: 0, duration: "100%"})
    .setPin("#data_num6")
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
