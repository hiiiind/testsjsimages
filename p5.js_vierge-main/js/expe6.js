let img;
let pixelsData= []
let filtreN =0.3;
let modfiltreN=0.3

function preload() {
  img=loadImage('image/corpus/1.jpeg');
}

function setup() {
  noCursor()
  createCanvas(windowWidth,windowHeight)
  img.resize(width,0)
  altererImg(img,150)



  // modif img
  img.loadPixels();
  for (let y=0;y< img.height;y += 2) {
    
    
    for (let x=0; x< img.width;x +=2) {
      let index=(x+y* img.width) * 4;
      
      let r=img.pixels[index]
      let g=img.pixels[index+1]
        let b=img.pixels[index+2]
        let a=img.pixels[index+3]
      pixelsData.push({x, y, r, g, b, a})
    }
  }
 
 
  
    img.updatePixels()
  background(0)
  noStroke ()
  rectMode(CENTER);

}

function draw() {
  let speed=dist(pmouseX, pmouseY, mouseX, mouseY);
  modfiltreN=map(speed, 0, 50, 0.1, 0.8);
  modfiltreN=constrain(modfiltreN, 0.1, 0.8);
  filtreN=lerp(filtreN, modfiltreN, 0.05);





  for (let i=0; i < pixelsData.length; i += 2) {
    let p=pixelsData[i]
    let gray=(p.r+p.g+p.b)/3
    let finalGray=gray* filtreN;
    stroke(finalGray,finalGray,finalGray, p.a * 0.8)
    point(p.x,p.y);
  }








  let nbrRepetitions=40;
  for (let i=0; i < nbrRepetitions; i++) {
    let x=random(width)
    let y=random(height)
    let size=random(20, 80)
    let fragment=get(x,y,size,size)

    push();
    translate(x+random(-5,5), y+random(-5,5))
    rotate(radians(random(-15,15)))
    tint(
      255*map(mouseX,0,width,0.5,1), 
      255*map(mouseY,0,height,0.5,1), 
      255, 
      150
    ); 
   
   
    image(fragment,0,0,size, size)
    pop();
  }




  blendMode(ADD);
}

function mousePressed() {
  if (isLooping()) {
    
    noLoop()
  } else {
           loop();
  }
}

function altererImg(img, threshold) {
  img.loadPixels();
  for (let i=0; i < img.pixels.length; i+= 4) {
    let r=img.pixels[i]
    let g=img.pixels[i+1]
    let b=img.pixels[i+2]
    
    
    
    
    if ((r+g+b) / 3 <threshold) {
      img.pixels[i+3]=0;
    }
  }


  img.updatePixels();
}