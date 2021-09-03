let x, y;
let vx, vy;
let ukuran;

function setup() {
  createCanvas(600, 300);
  background(255);
  x = 50; y = 50;
  vx = 5 ; vy = 5;
  ukuran = 50;
}

function draw() {
  background(255);
  x = x + vx ; 
  y = y + vy ; 
  strokeWeight(3);
  fill('#5FD823');
  ellipse(x, y, ukuran, ukuran);
  
  //cek tepi
  if(x < ukuran/2 || x > width-ukuran/2) {vx = vx *  -1 ; }
  if(y < ukuran/2 || y > height-ukuran/2) {vy = vy *  -1 ; }
}