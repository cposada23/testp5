var video;
var button;
function setup() {
  createCanvas(320,240);
  background(0);
  video = createCapture(VIDEO);
  video.size(320,240);
  button = createButton('snap');
  
  button.mousePressed(shot);
  
}

function shot(){
  image(video,0,0);
}

function draw() {

}