var controller = new ScrollMagic.Controller();

$(function () {

  var vertical_nav_bar_pin = new ScrollMagic.Scene({triggerElement: "#moto", triggerHook: 0, duration: "700%"})
  .setPin("#cd-vertical-nav")
  .addTo(controller)

  var vertical_nav_bar_fadein = new ScrollMagic.Scene({triggerElement: "#hardware_data", triggerHook: 0.25})
  .setVelocity("#cd-vertical-nav", {opacity: 1}, "easeInSine")
  .addTo(controller)

})
