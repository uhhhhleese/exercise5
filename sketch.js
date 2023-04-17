let days = [];

let options, destroy, feeling;

let  frame1, frame2, frame3, frame4, frame5, frame6, frame7;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);





}

function draw() {

  options = document.getElementById('options').value;
  destroy = document.getElementById('destroy').value;
  feeling = document.getElementById('feeling').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  if (options == "tomatoes"){
    frame1 = createImg("images/frame6.png");
    frame1.position(700, 100);
    frame1.size(200,200);
  } else if ( options == "men"){
    frame2 = createImg("images/frame2 copy.png");
    frame2.position(800, 300);
    frame2.size(280,400);
  }
  // noStroke();
  // rect(350+spacex, 400+spacey, 100, 100)
  if (destroy == 'mmen'){
    frame3 = createImg("images/frame1 copy.png");
    frame3.position(800, 300);
    frame3.size(400,400);
  } else if (destroy == 'ttomatoes'){
    frame4 = createImg("images/frame6.png");
    frame4.position(400, 100);
    frame4.size(200,200);
  }
  // noStroke();
  // ellipse(300+spacex, 400+spacey, 100, 100)
  if(feeling == "angry"){
    frame5 = createImg("images/frame4 copy.png");
    frame5.position(300, 300);
    frame5.size(400,400);
  }else if (feeling == "restless"){
    frame6 = createImg("images/frame5 copy.png");
    frame6.position(100, 300);
    frame6.size(400,500);
  } else if(feeling =="whatever"){
    frame7 = createImg("images/frame3 copy.png");
    frame7.position(20, 300);
    frame7.size(400,500);
  }
  // strokeWeight(10);
  // line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  // spacex += 200;
  // if(spacex > 1000){
  //   spacex = 0;
  //   spacey += 200;
  }



// }

function add() {
  days.push({
    date: Date(),
    options: options,
    destroy: destroy,
    feeling: feeling
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}