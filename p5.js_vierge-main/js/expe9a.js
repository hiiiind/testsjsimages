let img1,
img2;

function preload() {
  img1 = loadImage('image/corpus/2.jpeg')
  img2 = loadImage('image/corpus/5 2.jpeg')
}

function setup() {
  
  noCursor()
  
    createCanvas(windowWidth,windowHeight)
  noSmooth()
   imageMode(CENTER)
}

function windowResized() {
  
    resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background(0)
     //background(0,55,250);


  let scaleFactor = map(sin(frameCount*0.01),-10,14,0.9,12.1)
   let imgW = width*scaleFactor
  let imgH = img1.height* (imgW/img1.width)

  
  
  if (imgH<height) {
    imgH = height*scaleFactor;
    imgW = img1.width* (imgH/img1.height)
  }

  push();
  translate(width/2,height/2);
  image(img1,0,0,imgW,imgH);
  pop();

  for (let i = 0; i < 25; i++) {
    let y = int(random(img2.height));

    let h = int(random(5,120));
    
    let offsetX = random(-120,120)
    let offsetY = random(-30,30)

    let slice = img2.get(0,y,img2.width,h);

    
    tint(random(0,255),random(0,255),random(0,255),180);
    image(slice,width/2+offsetX,height/2-img2.height/2 +y+offsetY)
  }



  if (frameCount % 7 === 0) {
    
    
    
     // strokeWeight(random(45,80)) lignes a
      stroke(random(200,255),random(0,255),random(255))

       line(random(width),random(height),random(width),random(height))
  }





  if (frameCount % 120 === 0) {
    
    
    
    loadPixels();
    for (let i = 0; i < 10; i++) {
      let x = int(random(width));
      let y = int(random(height));
      let idx = 2* (y* width+x);
      pixels[idx] = random(25);
      pixels[idx] = random(105);
      pixels[idx+1 ] = random(90);
    }
    updatePixels()
  }






  filter(POSTERIZE) 
}