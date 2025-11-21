let img1,img2;
let img3; 

let images=[];

let fragments=[] 
let inversement=true; 
let maxFragments =150

function preload() {
  img1=loadImage('image/corpus/6.jpeg');
  img2=loadImage('image/corpus/2.jpeg')
  img3=loadImage('image/corpus/4.jpeg')
}

function setup() {
  
  noCursor()

  
 
  createCanvas(windowWidth,windowHeight)
  noCursor();

  images=[img1,img2,img3]

  for (let i=0;i < images.length; i++) {
    images[i].resize(width,height)
  }
}

function draw() {
  background(0);



  if (inversement && fragments.length < maxFragments) {
    let x=random(width)
    let y=random(height)
    
    let s=random(15, 60)
    let imgChoice=random(images)
    let frag=imgChoice.get(random(imgChoice.width),random(imgChoice.height), s,s)
    fragments.push({frag,x,y,s})
  }







  for (let i=0; i<fragments.length; i++) {
    let f=fragments[i];
   
    
    push();
    translate(f.x + random(-2,2), f.y + random(-2,2))
    rotate(random(-0.2,0.2))
     tint(random(180,255),random(180,255),random(180,255), 200)
    image(f.frag,-f.s/2,-f.s/2)
    pop();
  }

  if (!inversement && fragments.length > 0) {
    fragments.shift();
  }

  loadPixels()
  for (let i=0; i < pixels.length; i+=4) {
    let n=random(-4,4)
    pixels[i]+=n;
     pixels[i+1]+=n*0.6
    
     pixels[i+2]+=n*0.8
  }
  updatePixels();
}

function mousePressed() {
  inversement=!inversement; 
}