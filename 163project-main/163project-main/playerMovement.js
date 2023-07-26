AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
    //add the code to play sound as per selection of arrow keys for movement
    if (
      e.key === "ArrowUp" ||e.key === "ArrowRight" ||e.key === "ArrowLeft" ||e.key === "ArrowDown") {
      var entity = document.querySelector("#sound1");
      entity.components.sound.playSound();



      }
  })
}
})
