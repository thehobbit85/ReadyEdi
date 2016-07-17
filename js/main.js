var controller = new ScrollMagic.Controller();

$('video').click(function () {
  this.volume == 0 ? this.volume = 1 : this.volume -= 1
})

$(function () {
    // build scene
    var scene = new ScrollMagic.Scene()
    .setPin("#logo")
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene()
    .setPin("#preorder")
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#step", triggerHook: 0, duration: "400%"})
    .setPin("#cd-vertical-nav")
    .addTo(controller);

});
