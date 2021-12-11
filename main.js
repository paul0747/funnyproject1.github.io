let btnMuschi = document.getElementById("btn-muschi");
let btnCaine = document.getElementById("btn-caine");
let btnShrek = document.getElementById("btn-shrek");
let music;

btnMuschi.addEventListener("mouseover", () => {
  music = new Audio("choppa.mp3");
  music.play();
  music.loop = true;
});
btnMuschi.addEventListener("mouseout", () => {
  music.pause();
});

// Caine
btnCaine.addEventListener("mouseover", () => {
  music = new Audio("courage-speak.mp3");
  music.play();
  music.loop = true;
});
btnCaine.addEventListener("mouseout", () => {
  music.pause();
});

//   Shrek
btnShrek.addEventListener("mouseover", () => {
  music = new Audio("shrek.mp3");
  music.play();
  music.loop = true;
});
btnShrek.addEventListener("mouseout", () => {
  music.pause();
});
