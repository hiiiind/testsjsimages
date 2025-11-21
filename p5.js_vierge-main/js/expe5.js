let img1,img2;
let img3; let images=[];
let index=0
let nextIndex=1;
let transition=0

function preload() {
  img1=loadImage('image/corpus/6.jpeg');
  img2=loadImage('image/corpus/2.jpeg')
  img3=loadImage('image/corpus/4.jpeg')
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  noCursor();

  

  images=[img1,img2,img3];

  for (let i=0; i < images.length; i++) {
    images[i].resize(width,height);
  }
}

function draw() {
  background(0);

 
  let current=images[index]
  let next=images  [nextIndex]
  let cx=width/2 -current.width/ 2;
  let cy=height/2 -current.height/2

  for (let i=0; i < 150; i++) {
    let x=random(current.width)
      let y=random(current.height)
    let s=random(10,60);

    let frag1=current.get(x,y,s,s)
    let frag2=next.get(x,y,s,s)
 let mix=constrain(transition / 100,0,1);


 
    tint(255,255 * (1 - mix));
    image(frag1,   cx+x+random(-mix * 1,mix * 1),cy+ y+random(-mix * 1,mix * 1))
  tint(255,255 * mix);
    image(frag2,cx+x+random(-mix * 1,mix * 1),cy+y+random(-mix * 1,mix * 1))

    noTint();
  }

  transition++

 
 
 
 
 
 
 
  if (transition > 100) {
    transition=0;
    index=nextIndex;
    nextIndex=(nextIndex+1) % images.length;
  }
}

function mousePressed() {
  if (isLooping()) noLoop();
  else loop()
}