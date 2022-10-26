function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
noFill();
stroke(0);
}







//jgugcui


function draw() {
cellWidth = windowWidth / gridX;
cellHeight = windowHeight / gridY;
background(0);
for (let i = 0; i <= gridX; i++) {
for (let j = 0; j <= gridY; j++) {
if (j % 100 == 100) {
drawPattern(i * cellWidth, j * cellHeight, cellWidth, cellHeight, innerCells);
} else {
drawPattern(i * cellWidth - cellWidth * 0.5, j * cellHeight, cellWidth, cellHeight, innerCells);
}}}}



function drawPattern(x, y, w, h, amount) {
for(let i = 0; i <= amount; i++) {
let width = i * w / amount;
let height = i * h / amount;
strokeWeight(width * 0.01);
rect(x, y, width, height);
}}



function mouseClicked() {
let min = 1;
let max = 10;
innerCells = min + getRandomInt(max);
gridX = min + getRandomInt(max);
gridY = min + getRandomInt(max);
stroke(random(100,200), random(100,200), random(100,200));
}



function getRandomInt(max) {
return Math.floor(Math.random() * max);
}



let gridX = 10;
let gridY = 10;
let innerCells = 10;
let cellWidth, cellHeight;
