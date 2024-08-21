var backgroundIndex = 1;
var backgrounds = ["./images/background1.png", "./images/background2.png"];
var backgroundsBody = ["./images/snow.gif", "./images/stars.gif"]
var extraImageIndex = 0;
var extraImages = ["./images/sc-nobg.png", "./images/sc-nobg3.png"]

function changeBackground() {
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var extraImage = document.querySelector(".extra-image");

  // Aplicar clases de transición
  html.classList.add("transition-background");
  body.classList.add("transition-background");
  extraImage.classList.add("transition-extra-image");

  // Cambiar las imágenes
  html.style.backgroundImage = "url('" + backgrounds[backgroundIndex] + "')";
  body.style.backgroundImage = "url('" + backgroundsBody[backgroundIndex] + "')";
  extraImage.src = extraImages[extraImageIndex];

  // Cambiar el índice para la siguiente vez
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
  extraImageIndex = (extraImageIndex + 1) % extraImages.length;

  var btnImage = document.getElementById("btnImage");
  btnImage.src = (backgroundIndex === 0) ? "./images/moon.gif" : "./images/sun.gif";

  // Eliminar clases de transición después de la animación
  setTimeout(function () {
    html.classList.remove("transition-background");
    body.classList.remove("transition-background");
    extraImage.classList.remove("transition-extra-image");
  }, 500); // Ajusta el tiempo al valor de la transición CSS (0.5s)
}


var audioPlayer = document.getElementById("audioPlayer");
var songs = [
  "./songs/1.mp3", "./songs/2.mp3", "./songs/3.mp3",
  "./songs/4.mp3", "./songs/5.mp3", "./songs/6.mp3",
  "./songs/7.mp3", "./songs/8.mp3", "./songs/9.mp3",
  "./songs/10.mp3", "./songs/11.mp3"
];
var currentSongIndex = 0;

audioPlayer.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;

  audioPlayer.src = songs[currentSongIndex];

  audioPlayer.play();
});

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
}

function redirectToIndex() {
  window.location.href = "main.html";
}

document.addEventListener("DOMContentLoaded", function () {
  playAudio();
});


var modal = document.getElementById("modal1");
var modalTextarea = document.getElementById("modalTextarea");

function openModal() {
  var modal = document.getElementById("modal1");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
  modalTextarea.value = ""; // Limpiar el contenido del textarea al cerrar el modal
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};




