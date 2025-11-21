let aleatoire,imgFlower
let direction='vertical'
let img,img2;      
let currentImg;      




function preload() {
    
  img= loadImage('image/corpus/6.jpeg')
  img2= loadImage('image/corpus/4.jpeg') 


}

function setup() {
  
  

  angleMode(DEGREES)
   createCanvas(windowWidth,windowHeight,WEBGL);
   noCursor();

  background(0)
  img.resize(width,0)
  img2.resize(width,0)
  aleatoire=random(8000)
    currentImg=img 

    
}

let size=200

function mousePressed() {
  noStroke();
  let sx=constrain(floor(mouseX-size/2),0,max(0,currentImg.width-size))
  let sy=constrain(floor(mouseY-size/2),0,max(0,currentImg.height-size))
      imgFlower=currentImg.get(sx,sy,size,size)
  imgFlowerX=mouseX
   imgFlowerY=mouseY

  if (direction==='vertical') {
    direction='horizontal';
  } 
  else {
    direction='vertical';
  }
  currentImg=(currentImg===img) ?img2: img;

  filter(POSTERIZE,3);
}

function draw() {
  translate(-width/2,-height/2)






  if (imgFlower) {
    push()
    texture(imgFlower)
    beginShape()
    vertex(
      imgFlowerX,                   
      imgFlowerY-size/4,         
      0,                          
      0                             
    )

    vertex(
      imgFlowerX-size/4,
      
      imgFlowerY+ size/4,
      0,
      imgFlower.height
    );

    vertex(
      imgFlowerX+size/4,
      imgFlowerY +size/4,
       imgFlower.width,
      imgFlower.height
    );
    endShape()
    pop()

    
    if (direction==='vertical') {
      imgFlowerY+= 1 
    } 
    else if (direction==='horizontal') {
      imgFlowerX += 1
    }
  }
}

// clic pour faire apparaitre les triangles = new tissages 