let img1,img2;
let img3; let images=[];
let index=0
let nextIndex=1;
let transition=0
let inversement=true; 

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
    images[i].resize(width,height)
  }
}

function draw() {
  if (inversement) {
    background(0,10)
  } else {
    fill(0,5)
      rect(0,0,width,height)


  }

  
  
  
  
  for (let i=0; i < 150; i++) {
    let x=random(width)
       let y=random(height)
    let s=random(15,60);




    let imgChangementimg=random(images);

    let frag=imgChangementimg.get(random(imgChangementimg.width),random(imgChangementimg.height),s,s);
    let offset=inversement ?random(-3,3) :random(-5,5)

    push();
    translate(x+offset, y+offset)
    rotate(random(-0.6,0.6));
         tint(random(200,255),random(180,255),random(200,255), 200)
   
   
         image(frag,-s/2,-s/2)
    pop()

    noTint()
  }

  if (inversement) transition++

  if (transition > 120) {
    transition=0;
    index=(index+1)%images.length;
  }

  loadPixels();
  for (let i=0; i< pixels.length; i+=4) {
    let n=random(-6,6)
    
    
    pixels[i]+=n
    pixels[i+1]+=n*0.6
    pixels[i+2]+=n*0.8
  }
  updatePixels();
}

function mousePressed() {
  inversement=!inversement; 
}