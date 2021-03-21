var music;
function preload() {
  music = loadSound("bensound-ukulele.mp3")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("red");
  textSize = 100;
  text("Just a test!",200,300);
  if(!music.isPlaying()) {
    music.play();
  }
  
  drawSprites();
}

