//answer position
let ansYPos= -10;


//equation functions
let num1 = Math.floor(Math.random() * 15);
let num2 = Math.floor(Math.random() * 10);
let answer = num1 + num2;
let equation = num1+ num2;
let decoyNum = Math.floor(Math.random() * 20);

let ansDis = [200, 600];
let index = Math.floor(Math.random() * 2);

let decoyDis;

if (decoyNum == answer) {
    decoyNum++;
}

//boxes
let width = 150;
//left box
let box1X = 200;
let left1 = box1X - (width / 2);
let right1 = box1X + (width / 2);
//right box
let box2X = 600;
let left2 = box2X - (width / 2);
let right2 = box2X + (width / 2);


let lost = false; 

let button = document.querySelector(".button")

function youLost() {
    console.log("you lost");
    background(255);
    fill(34, 43, 10);
    textSize(50);
    text('You Missed the Answer!', 150, 300);
    text('Please Try Again.', 150, 400);
    
    button.style.display = "block";
}

function setup(){
    createCanvas(800, 800);
    background(0);

    rectMode(CENTER); 
}
 
function mouseClicked() {
    let top = ansYPos - 75;
    let bottom = ansYPos + 75;
    //Check if mouse is inside Box 1 + ans is correct
    if (mouseX > left1 && mouseX < right1 && mouseY > top && mouseY < bottom && index == 0) {
        ansYPos = -75;
        num1 = Math.floor(Math.random() * 15);
        num2 = Math.floor(Math.random() * 10);
        answer = num1 + num2;
        equation = num1+ num2;
        decoyNum = Math.floor(Math.random() * 20);
        ansDis = [200, 600];
        index = Math.floor(Math.random() * 2);
        decoyDis;
    }
    //check box 1 + ans is incorrect
    else if (mouseX > left1 && mouseX < right1 && mouseY > top && mouseY < bottom && index !== 0) {
        lost = true;
        youLost();
    }
    //Check if mouse is inside Box 2 + ans is correct
    else if (mouseX > left2 && mouseX < right2 && mouseY > top && mouseY < bottom && index == 1) {
        ansYPos = -75
        num1 = Math.floor(Math.random() * 15);
        num2 = Math.floor(Math.random() * 10);
        answer = num1 + num2;
        equation = num1+ num2;
        decoyNum = Math.floor(Math.random() * 20);
        ansDis = [200, 600];
        index = Math.floor(Math.random() * 2);
        decoyDis;
    }
    //check box 2 ans + as is incorrect
    else if (mouseX > left2 && mouseX < right2 && mouseY > top && mouseY < bottom && index !== 1) {
        lost = true;
        youLost();
    }
} 

function draw() {
   if (lost) {
    return
   } 
   background(255);

   //box 1
    fill(255, 0, 0);
    rect(box1X, ansYPos, width, width);

   //box 2 
    fill(0, 255, 0); 
    rect(box2X, ansYPos, width, width);


    //answer box
    fill(255);
    rect(400, 100, 200, 80);
    fill(0, 0, 0);
    textSize(30);
    text(answer, ansDis[index], ansYPos);

    if (index == 0) {
        decoyDis = 1;
    }
    else {
        decoyDis = 0;
    }

    textSize(30);
    text(decoyNum, ansDis[decoyDis], ansYPos);
    //equation
    fill(0);
    textSize(30);
    text(num1 + '+' + num2, 365, 110);

    if (ansYPos < 875) {
        ansYPos += 1;
    }
    if (ansYPos > 870) {
        youLost();
    }
 

}

 

