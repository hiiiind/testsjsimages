let img,img2;
let bandeImage
let temps=0;

function preload() {
  img=loadImage('image/corpus/5.jpeg')
  img2=loadImage('image/corpus/3.jpeg');
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

  background(0)

  noCursor();
}

function draw() {
  
  
  //background(0, random(5,60))

  let largeur=int(random(5,70))
  let mixValue=(1-cos(frameCount*random(0.01,0.07)* 180/PI)) / 2;

    for (let i=0; i < img.width; i += largeur) {
    let frag1=img.get(i,0,largeur,img.height);
    let frag2=img2.get(i,0,largeur,img2.height);

    push();
    let oscillation=sin(i *random(0.05,0.6)+frameCount *random(0.5,5))*random(-800,800)
    let angle=random(-45,45)
    let scaleX=random(0.2,3)
    let scaleY=random(0.3,1)
   
    translate(i,oscillation)
    
    rotate(angle)
    scale(scaleX, scaleY)
    
       tint(random(255),random(255),random(255),random(50,255))
    image(random()<0.5?frag1:frag2,0,0,largeur *random(0.3,3),height*random(0.3,3))
    
    pop();
  }

  bandeImage.loadPixels();
  for (let x=0;x< width;x+= 1) { 
    for (let y=0; y< height;y+= 1) {
      let c=color(random(255),random(255),random(255),random(10,150))
      bandeImage.set(x,y,c);
    }
  }
  bandeImage.updatePixels()
  blendMode(DIFFERENCE)
  image(bandeImage,0,0)



 // ajout de filtre à modifier = vori résultat 
  if (frameCount%int(random(1,10))==0) {
    let changementimgage=int(random(6))
   
    switch (changementimgage) {
      case 0:filter(INVERT);break;
      case 1:filter(THRESHOLD,random(0.05,0.95));break;
      case 2:filter(GRAY);break;
     case 3:filter(ERODE);break;
      case 4:filter(DILATE);break;
      case 5:filter(POSTERIZE,int(random(2,16)));break;
    }
  }

  blendMode(ADD)
}

function mousePressed() {


  for(let i=0;i<random(5,30);i++){
    push();
    translate(mouseX +
      random(-500,500),mouseY + random(-500,500));
    rotate(random(-360,360));
    scale(random(0.1,4));
    tint(random(255),random(255),random(255),random(50,255))
    image(random([img,img2]),random(-400,400),random(-400,400),random(50,600),random(50,600))
    pop();
  }

  
  
  
  
  if(random()<0.2){
    filter(INVERT)
  } else {
    filter(POSTERIZE,int(random(2,12)))
  }
}