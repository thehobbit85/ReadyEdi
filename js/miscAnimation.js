var controller = new ScrollMagic.Controller()

$(function () {

  var bk = new ScrollMagic.Scene({triggerElement: "#moto", triggerHook: 0, duration: "750%"})
  .setPin("#modelbk")
  .addTo(controller)

})
