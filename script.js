//Canvas setup

var cnv = document.getElementById("drawing");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;

//grass

//background variables
let moonColour = "white";
let skyColour = "black";

//sky
skyRed = 0;
skyGreen = 0;
skyBlue = 0;

//moon elements
let moonY = 25;
let moonX = 690;

let sunY = 600;
let sunX = 25;

let starY1 = 40;
let starY2 = 70;
let starY3 = 50;
let starY4 = 80;
let starY5 = 80;
let starY6 = 120;
let starY7 = 130;
let starY8 = 150;
let starY9 = 20;

let starX = 400;
let starX2 = 50;
let starX3 = 200;
let starX4 = 280;
let starX5 = 490;
let starX6 = 130;
let starX7 = 370;
let starX8 = 560;
let starX9 = 560;

requestAnimationFrame(draw);
function draw() {
  //sky(night)
  ctx.fillStyle = `rgb(${skyRed},${skyGreen},${skyBlue})`;
  ctx.fillRect(0, 0, 700, 375);

  //Rising Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(sunX, sunY, 70, 0, 2 * Math.PI);
  ctx.fill();

  //grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 375, 700, 600);

  //moon
  ctx.fillStyle = "white ";
  ctx.beginPath();
  ctx.arc(moonX, moonY, 70, 0, 2 * Math.PI);
  ctx.fill();

  //tree body(s)
  ctx.fillStyle = "brown";
  ctx.fillRect(75, 250, 30, 205);

  ctx.fillStyle = "brown";
  ctx.fillRect(200, 270, 20, 165);

  ctx.fillStyle = "brown";
  ctx.fillRect(350, 270, 35, 195);

  ctx.fillStyle = "brown";
  ctx.fillRect(600, 270, 20, 155);

  //Tree tops
  //Tree 1
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(90, 250, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(120, 265, 35, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(60, 265, 35, 0, 2 * Math.PI);
  ctx.fill();

  //tree 2
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(210, 270, 35, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(230, 280, 25, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(190, 280, 25, 0, 2 * Math.PI);
  ctx.fill();

  //tree 3
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(368, 270, 70, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(415, 290, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(325, 290, 50, 0, 2 * Math.PI);
  ctx.fill();

  //tree 4
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(610, 290, 40, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(640, 300, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(580, 300, 30, 0, 2 * Math.PI);
  ctx.fill();

  //branches
  ctx.lineWidth = 5;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(210, 340);
  ctx.lineTo(260, 330);
  ctx.stroke();

  ctx.lineWidth = 5;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(210, 370);
  ctx.lineTo(170, 350);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(80, 330);
  ctx.lineTo(160, 300);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(40, 360);
  ctx.lineTo(80, 370);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(380, 360);
  ctx.lineTo(450, 340);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(370, 400);
  ctx.lineTo(290, 390);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(610, 340);
  ctx.lineTo(560, 360);
  ctx.stroke();

  ctx.lineWidth = 8;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(650, 370);
  ctx.lineTo(610, 360);
  ctx.stroke();

  //stars
  let star = document.getElementById("star");
  ctx.drawImage(star, starX, starY1, 25, 25);
  ctx.drawImage(star, starX2, starY2, 25, 25);
  ctx.drawImage(star, starX3, starY3, 25, 25);
  ctx.drawImage(star, starX4, starY4, 25, 25);
  ctx.drawImage(star, starX5, starY5, 25, 25);
  ctx.drawImage(star, starX6, starY6, 25, 25);
  ctx.drawImage(star, starX7, starY7, 25, 25);
  ctx.drawImage(star, starX8, starY8, 25, 25);
  ctx.drawImage(star, starX9, starY9, 25, 25);

  //title
  ctx.fillStyle = "rgb(220. 13, 190)";
  ctx.font = "20px Arial";
  ctx.fillText("Night time forest", 20, 20);

  //sky change
  skyRed += 0.25;
  if (skyRed >= 135) {
    skyRed = 135;
  }
  console.log(skyRed);

  skyGreen += 0.25;
  if (skyGreen >= 206) {
    skyGreen = 206;
  }

  skyBlue += 0.3;
  if (skyBlue >= 235) {
    skyBlue = 235;
  }

  //moon drop
  moonY += 0.5;
  if (moonY >= 300) {
    moonY == 300;
  }

  moonX += 0.12;
  if (moonX >= 750) {
    moonX == 750;
  }

  //sun rise
  sunY -= 1;
  if (sunY <= 20) {
    sunY = 20;
  }

  //stars go away
  starY1 -= 0.2;
  if (starY1 < -25) {
    starY1 = -30;
  }

  starY2 -= 0.5;
  if (starY2 < -25) {
    starY2 = -30;
  }

  starY3 -= 0.5;
  if (starY3 < -25) {
    starY3 = -30;
  }

  starY1 -= 0.4;
  if (starY1 < -25) {
    starY1 = -30;
  }

  starY4 -= 0.4;
  if (starY4 < -25) {
    starY4 = -30;
  }

  starY5 -= 0.4;
  if (starY5 < -25) {
    starY5 = -30;
  }

  starY6 -= 0.4;
  if (starY6 < -25) {
    starY6 = -30;
  }

  starY7 -= 0.5;
  if (starY7 < -25) {
    starY7 = -30;
  }

  starY8 -= 0.4;
  if (starY8 < -25) {
    starY8 = -30;
  }

  starY9 -= 0.4;
  if (starY9 < -25) {
    starY9 = -30;
  }
  requestAnimationFrame(draw);
}
