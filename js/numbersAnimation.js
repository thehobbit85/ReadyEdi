var controller = new ScrollMagic.Controller();

$(function () {

  //Pin number tags
  var num1_scene = new ScrollMagic.Scene({triggerElement: "#hardware_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num1")
  .addTo(controller)
  var num2_scene = new ScrollMagic.Scene({triggerElement: "#battery_chamber_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num2")
  .addTo(controller)
  var num3_scene = new ScrollMagic.Scene({triggerElement: "#battery_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num3")
  .addTo(controller)
  var num4_scene = new ScrollMagic.Scene({triggerElement: "#camera_mount_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num4")
  .addTo(controller)
  var num5_scene = new ScrollMagic.Scene({triggerElement: "#main_plate_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num5")
  .addTo(controller)
  var num5_scene = new ScrollMagic.Scene({triggerElement: "#bottom_chamber_data", triggerHook: 0, duration: "50%"})
  .setPin("#data_num6")
  .addTo(controller)

  //Part number Opacity in
  var animationDuration = {duration: 400, ease: "easeInSine"}
  var num1_scene_2 = new ScrollMagic.Scene({triggerElement: "#hardware_data", triggerHook: 0.1})
  .setVelocity("#data_num1", {opacity: 1}, animationDuration)
  .addTo(controller)
  var num2_scene_2 = new ScrollMagic.Scene({triggerElement: "#battery_chamber_data", triggerHook: 0.1})
  .setVelocity("#data_num2", {opacity: 1}, animationDuration)
  .addTo(controller)
  var num3_scene_2 = new ScrollMagic.Scene({triggerElement: "#battery_data", triggerHook: 0.1})
  .setVelocity("#data_num3", {opacity: 1}, animationDuration)
  .addTo(controller)
  var num4_scene_2 = new ScrollMagic.Scene({triggerElement: "#camera_mount_data", triggerHook: 0.1})
  .setVelocity("#data_num4", {opacity: 1}, animationDuration)
  .addTo(controller)
  var num5_scene_2 = new ScrollMagic.Scene({triggerElement: "#main_plate_data", triggerHook: 0.1})
  .setVelocity("#data_num5", {opacity: 1}, animationDuration)
  .addTo(controller)
  var num6_scene_2 = new ScrollMagic.Scene({triggerElement: "#bottom_chamber_data", triggerHook: 0.1})
  .setVelocity("#data_num6", {opacity: 1}, animationDuration)
  .addTo(controller)

  //Part number Opacity out
  var num1_scene_2 = new ScrollMagic.Scene({triggerElement: "#battery_chamber_data", triggerHook: 0.5})
  .setVelocity("#data_num1", {opacity: 0}, animationDuration)
  .addTo(controller)
  var num2_scene_2 = new ScrollMagic.Scene({triggerElement: "#battery_data", triggerHook: 0.5})
  .setVelocity("#data_num2", {opacity: 0}, animationDuration)
  .addTo(controller)
  var num3_scene_2 = new ScrollMagic.Scene({triggerElement: "#camera_mount_data", triggerHook: 0.5})
  .setVelocity("#data_num3", {opacity: 0}, animationDuration)
  .addTo(controller)
  var num4_scene_2 = new ScrollMagic.Scene({triggerElement: "#main_plate_data", triggerHook: 0.5})
  .setVelocity("#data_num4", {opacity: 0}, animationDuration)
  .addTo(controller)
  var num5_scene_2 = new ScrollMagic.Scene({triggerElement: "#bottom_chamber_data", triggerHook: 0.5})
  .setVelocity("#data_num5", {opacity: 0}, animationDuration)
  .addTo(controller)
  var num6_scene_2 = new ScrollMagic.Scene({triggerElement: "#end", triggerHook: 0.5})
  .setVelocity("#data_num6", {opacity: 0}, animationDuration)
  .addTo(controller)
})
