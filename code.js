function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  triangle(30, 75, 58, 20, 86, 75);

  triangle(30, 75, 58, 20, 86, 75);

  triangle(30, 75, 58, 20, 86, 75);

  triangle(30, 75, 58, 20, 86, 75);

  fill(0, 128, 0);
  stroke(56,64,90);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('student_name.png');
}
