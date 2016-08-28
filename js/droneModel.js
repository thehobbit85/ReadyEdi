var controller = new ScrollMagic.Controller()

var fullOpacity = function(triggerElement) {
  animationDuration = {duration: "fast", ease: "easeOutSine"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battey_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 1}, animationDuration))
}

$(function () {

  // Pin drone in place
  var triggerElement = {triggerElement: "#moto", triggerHook: 0, duration: "750%"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#top_screws"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#top_plate"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#front_polls"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#camera_holder"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#camera"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#battery_plastic"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#battey_plate"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#battery"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#back_polls"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#motors"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#main_plate"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#antenna"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#bottom_plastic"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#electronics"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#down_plate"))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setPin("#bottom_screws"))

  // Move drone to side and minimize
  var animation = {translateX: "20vw", width: "65vw", translateY: "2vh"}
  var animationDuration = { duration: 1500, ease: "easeInSine"}
  triggerElement = {triggerElement: "#hardware_data", triggerHook: 0.8}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battey_plate", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", animation, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", animation, animationDuration))

  // Hardware scene
  animationDuration = {duration: "fast", ease: "easeInSine"}
  triggerElement = {triggerElement: "#battery_chamber_data", triggerHook: 0.7}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battey_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 1}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)
  // Battery Chamber scene
  animationDuration = {duration: "fast", ease: "easeInSine"}
  triggerElement = {triggerElement: "#battery_data", triggerHook: 0.7}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battey_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)
  // Battery scene
  triggerElement = {triggerElement: "#camera_mount_data", triggerHook: 0.7}
  animationDuration = {duration: "fast", ease: "easeInSine"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battey_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)
  // Camera Mount scene
  triggerElement = {triggerElement: "#main_plate_data", triggerHook: 0.7}
  animationDuration = {duration: "fast", ease: "easeInSine"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)
  // Main Plate scene
  triggerElement = {triggerElement: "#bottom_chamber_data", triggerHook: 0.7}
  animationDuration = {duration: "fast", ease: "easeInSine"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)
  // Bottom Chamber scene
  triggerElement = {triggerElement: "#end", triggerHook: 0.7}
  animationDuration = {duration: "fast", ease: "easeInSine"}

  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_screws", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#top_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#front_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera_holder", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#camera", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#battery", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#back_polls", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#motors", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#main_plate", {opacity: 0.3}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#antenna", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_plastic", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#electronics", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#down_plate", {opacity: 1}, animationDuration))
  controller.addScene(new ScrollMagic.Scene(triggerElement).setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration))

  triggerElement.triggerHook = 0.5
  fullOpacity(triggerElement)

})
