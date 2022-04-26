var x = document.getElementById("myAudio");
var music = document.querySelector(".music");
music.addEventListener("click", playAudio);

function playAudio() {
 x.play();
}