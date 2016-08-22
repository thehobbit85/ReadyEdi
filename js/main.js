var controller = new ScrollMagic.Controller();
var numberOfScenes = "700%"

$('video').click(function () {
  this.volume == 0 ? this.volume = 1 : this.volume -= 0.25
})

$(function () {

    // Pin items in place
    var triggerElement = {triggerElement: "#moto", triggerHook: 0, duration: numberOfScenes}

    var bk = new ScrollMagic.Scene(triggerElement)
    .setPin("#modelbk")
    .addTo(controller);

    var top_screws = new ScrollMagic.Scene(triggerElement)
    .setPin("#top_screws")
    .addTo(controller);

    var top_plate = new ScrollMagic.Scene(triggerElement)
    .setPin("#top_plate")
    .addTo(controller);

    var front_polls = new ScrollMagic.Scene(triggerElement)
    .setPin("#front_polls")
    .addTo(controller);

    var camera_holder = new ScrollMagic.Scene(triggerElement)
    .setPin("#camera_holder")
    .addTo(controller);

    var camera = new ScrollMagic.Scene(triggerElement)
    .setPin("#camera")
    .addTo(controller);

    var battery_plastic = new ScrollMagic.Scene(triggerElement)
    .setPin("#battery_plastic")
    .addTo(controller);

    var battey_plate = new ScrollMagic.Scene(triggerElement)
    .setPin("#battey_plate")
    .addTo(controller);

    var battery = new ScrollMagic.Scene(triggerElement)
    .setPin("#battery")
    .addTo(controller);

    var back_polls = new ScrollMagic.Scene(triggerElement)
    .setPin("#back_polls")
    .addTo(controller);

    var motors = new ScrollMagic.Scene(triggerElement)
    .setPin("#motors")
    .addTo(controller);

    var main_plate = new ScrollMagic.Scene(triggerElement)
    .setPin("#main_plate")
    .addTo(controller);

    var antenna = new ScrollMagic.Scene(triggerElement)
    .setPin("#antenna")
    .addTo(controller);

    var bottom_plastic = new ScrollMagic.Scene(triggerElement)
    .setPin("#bottom_plastic")
    .addTo(controller);

    var electronics = new ScrollMagic.Scene(triggerElement)
    .setPin("#electronics")
    .addTo(controller);

    var down_plate = new ScrollMagic.Scene(triggerElement)
    .setPin("#down_plate")
    .addTo(controller);

    var bottom_screws = new ScrollMagic.Scene(triggerElement)
    .setPin("#bottom_screws")
    .addTo(controller);

    var vertical_nav_bar = new ScrollMagic.Scene({triggerElement: "#start", triggerHook: 0, duration: "600%"})
    .setPin("#cd-vertical-nav")
    .addTo(controller);

    // Start scene
    var animation = {translateX: "20vw", width: "55vw", translateY: "5vh"}
    var animationDuration = "easeInSine"
    triggerElement = {triggerElement: "#start"}

    var start1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", animation, animationDuration)
    .addTo(controller);
    var start2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", animation, animationDuration)
    .addTo(controller);
    var start3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", animation, animationDuration)
    .addTo(controller);
    var start4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", animation, animationDuration)
    .addTo(controller);
    var start5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", animation, animationDuration)
    .addTo(controller);
    var start6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", animation, animationDuration)
    .addTo(controller);
    var start7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battey_plate", animation, animationDuration)
    .addTo(controller);
    var start8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", animation, animationDuration)
    .addTo(controller);
    var start9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", animation, animationDuration)
    .addTo(controller);
    var start10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", animation, animationDuration)
    .addTo(controller);
    var start11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", animation, animationDuration)
    .addTo(controller);
    var start12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", animation, animationDuration)
    .addTo(controller);
    var start13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", animation, animationDuration)
    .addTo(controller);
    var start14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", animation, animationDuration)
    .addTo(controller);
    var start15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", animation, animationDuration)
    .addTo(controller);
    var start16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", animation, animationDuration)
    .addTo(controller);

    // Hardware scene
    triggerElement = {triggerElement: "#hardware_data", triggerHook: 0}
    var hardware1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 1}, animationDuration)
    .addTo(controller);
    var hardware2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 1}, animationDuration)
    .addTo(controller);
    var hardware4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battey_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 1}, animationDuration)
    .addTo(controller);
    var hardware10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var hardware16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 1}, animationDuration)
    .addTo(controller);

    // Battery Chamber scene
    triggerElement = {triggerElement: "#battery_chamber_data", triggerHook: 0}
    var battery_chamber1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battey_plate", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery_chamber12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery_chamber16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);

    // Battery scene
    triggerElement = {triggerElement: "#battery_data", triggerHook: 0}
    var battery1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battey_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 1}, animationDuration)
    .addTo(controller);
    var battery9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var battery16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);

    // Camera Mount scene
    triggerElement = {triggerElement: "#camera_mount_data", triggerHook: 0}
    var camera_mount1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 1}, animationDuration)
    .addTo(controller);
    var camera_mount5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 1}, animationDuration)
    .addTo(controller);
    var camera_mount6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var camera_mount16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);

    // Main Plate scene
    triggerElement = {triggerElement: "#main_plate_data", triggerHook: 0}
    var main_plate1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 1}, animationDuration)
    .addTo(controller);
    var main_plate12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var main_plate16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);

    // Bottom Chamber scene
    triggerElement = {triggerElement: "#bottom_chamber_data", triggerHook: 0}
    var bottom_chamber1 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber2 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#top_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber3 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#front_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber4 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera_holder", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber5 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#camera", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber6 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plastic", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber7 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber8 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#battery", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber9 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#back_polls", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber10 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#motors", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber11 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#main_plate", {opacity: 0.3}, animationDuration)
    .addTo(controller);
    var bottom_chamber12 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#antenna", {opacity: 1}, animationDuration)
    .addTo(controller);
    var bottom_chamber13 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_plastic", {opacity: 1}, animationDuration)
    .addTo(controller);
    var bottom_chamber14 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#electronics", {opacity: 1}, animationDuration)
    .addTo(controller);
    var bottom_chamber15 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#down_plate", {opacity: 1}, animationDuration)
    .addTo(controller);
    var bottom_chamber16 = new ScrollMagic.Scene(triggerElement)
    .setVelocity("#bottom_screws", {opacity: 0.3}, animationDuration)
    .addTo(controller);

})

$('#preorderForm').modal({
    backdrop: 'static',
    keyboard: false
})
