//Cantora Beyoncé
const imagemAudioBeyounce = document.querySelector(".artista-beyonce");
const audioBeyonce = document.querySelector("#audioBeyonce");
//---------------------------------------------------------------

//Michael Jackson
const artistaMichael = document.querySelector(".artista-michael");
const audioMichael = document.querySelector("#audioMichael");
//---------------------------------------------------------------

//Elton Jonh
const eltonJonh = document.querySelector(".elton-jonh");
const audioElton = document.querySelector("#audioElton");
//---------------------------------------------------------------

//Adele
const adele = document.querySelector(".adele");
const audioAdele = document.querySelector("#audioAdele");
//---------------------------------------------------------------


//Programação audio Beyounce
imagemAudioBeyounce.addEventListener("mouseover", function () {
  audioBeyonce.play();
});

imagemAudioBeyounce.addEventListener("mouseout", function () {
  audioBeyonce.pause();
  audioBeyonce.currentTime = 0; //reinicia o áudio para o começo
});
//---------------------------------------------------------------


//Programação audio Michael Jackson
artistaMichael.addEventListener("mouseover", function () {
    audioMichael.play();
});

artistaMichael.addEventListener("mouseout", function() {
    audioMichael.pause();
    audioMichael.currentTime = 0; //reinicia o áudio para o começo
});
//---------------------------------------------------------------

//Programação audio Elton Jonh
eltonJonh.addEventListener("mouseover", function () {
  audioElton.play();
});

eltonJonh.addEventListener("mouseout", function() {
  audioElton.pause();
  audioElton.currentTime = 0; //reinicia o áudio para o começo
});
//---------------------------------------------------------------

//Programação audio Elton Jonh
adele.addEventListener("mouseover", function () {
  audioAdele.play();
});

adele.addEventListener("mouseout", function() {
  audioAdele.pause();
  audioAdele.currentTime = 0; //reinicia o áudio para o começo
});
//---------------------------------------------------------------