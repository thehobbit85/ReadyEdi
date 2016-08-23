var controller = new ScrollMagic.Controller()

$(function () {

  var bk = new ScrollMagic.Scene({triggerElement: "#moto", triggerHook: 0, duration: "700%"})
  .setPin("#modelbk")
  .addTo(controller)

})
