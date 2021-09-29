let symmetry = 12;

let angle = 360 / symmetry;
let  ResetButton;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  background(127, 144, 222);

  ResetButton = createButton("Reset");
  ResetButton.mousePressed(ResetScreen);
}

function ResetScreen() {
  background(127,144,222);
}
function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let Xm = mouseX - width / 2;
    let Ym = mouseY - height / 2;
    let Pmx = pmouseX - width / 2;
    let Pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = 4;
        strokeWeight(sw);
        stroke = (110,230,221);
        line(Xm, Ym, Pmx, Pmy);
        push();
        scale(1, -1);
        line(Xm, Ym, Pmx, Pmy);
        stroke = (110,230,221);
        pop();
      }
    }
  }
}
