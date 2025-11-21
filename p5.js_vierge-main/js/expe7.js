let img,img2;
let bandeImage
let temps=0;

function preload() {
  img=loadImage('image/corpus/1.jpeg')
  img2=loadImage('image/corpus/2.jpeg');
}

function setup() {

  noCursor()

    
    noStroke();

    createCanvas(windowWidth,windowHeight)
  pixelDensity(1)
  angleMode(DEGREES)
  
  
  
  
  img.resize(width,0)
  img2.resize(width,0)
  
  bandeImage=createGraphics(width,height);
}

function draw() {
  background(0,random(10,40))

  let largeur=int(random(5,50));
  let mixValue=(1 - cos(frameCount * random(0.02,0.05) * 180 / PI)) / 2;

  for (let i=0; i < img.width; i += largeur) {
    let frag1=img.get(i,0,largeur,img.height);
    let frag2=img2.get(i,0,largeur,img2.height);



    push();
    let oscillation=sin(i *random(0.1,0.4)+frameCount *random(0.5,3))*random(-400,400)
    let angle=random(-10,10)
   
    translate(i,oscillation)
   
    rotate(angle)
    //tint(100,random(55,100)) test
    tint(255,random(100,255))
    image(random()<0.5 ?frag1:frag2,0,0,largeur *random(0.5,2),height*random(0.5,1.5))
    
    pop();
  }




  bandeImage.loadPixels();
  
  
  for (let x=0;x< width;x+= 3) {
   
   
   
    for (let y=0; y< height;y+= 3) {
      let c=color(random(255),random(255),random(255),random(25,100))
      bandeImage.set(x,y,c);
    }
  }
  
  bandeImage.updatePixels();
  blendMode(ADD);
  image(bandeImage,0,0);



  if (frameCount%int(random(5,20)) == 0) {
    let changementimgage=int(random(6));
   
    switch (changementimgage) {
      case 0:filter(INVERT);break;
      case 1:filter(THRESHOLD,random(0.2,0.8));break;
      case 2:filter(GRAY);break;
     case 3:filter(ERODE);break;
      case 4:filter(DILATE);break;
      case 5:filter(POSTERIZE,int(random(2,8)));break;
    }
  }

  blendMode(BLEND);
}





function mousePressed() {
  push();
  translate(mouseX,mouseY);
  
  rotate(random(360));
      scale(random(0.5,2));
 
 
 
  tint(random(255),random(255),random(255),random(100,255))
  image(random([img,img2]),random(-200,200),random(-200,200),random(100,400),random(100,400))
  pop();

  if (random() < 0.5) {
    filter(INVERT);
  }
  
  else {
    filter(POSTERIZE,int(random(2,6)));
  }
}

// bandes mouv ++ x interaction