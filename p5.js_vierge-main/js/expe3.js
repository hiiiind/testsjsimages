let img;let imgRose;









function preload() {
  img=loadImage('image/corpus/3.jpeg'); 
}


function setup() {

  noCursor();
  
  createCanvas(windowWidth,windowHeight);
        img.resize(width,0)
  altererImg(img,200)

  
}





function draw() {
  background(0)
  noCursor()

  
  let seuil= map(mouseY,0,height,0,1); 
  let imgRose=img.get();
  imgRose.filter(THRESHOLD,seuil)

  
let xMouvementsouris1=map(mouseX,200,width,0,200)
  let yMouvementsouris1 = map(mouseY,0,height,0,200)

       let xMouvementsouris2=map(mouseX,400,width,0,400)
  let yMouvementsouris2=map(mouseY,0,height,0,400)

      let xMouvementsouris3= map(mouseX,600,width,0,600)
  let yMouvementsouris3=map(mouseY,0,height,0,600)

  
  img.get()




  tint(110,150,110);
  image(imgRose,xMouvementsouris1,yMouvementsouris1)
   tint(255,0,125);
     image(imgRose,xMouvementsouris2,yMouvementsouris2)
  tint(50,125,125);
  image(imgRose,xMouvementsouris3,yMouvementsouris3)
}

function altererImg(img,treshold) {
  img.loadPixels();
  for (let i=0; i < img.pixels.length; i += 20) {
    let r=img.pixels[i];
    let g=img.pixels[i + 1]
    let b=img.pixels[i + 2]
    let a=img.pixels[i + 3]

    if ((r + g + b) / 3 < treshold) {
      img.pixels[i + 3]=0;
    }
  }
  img.updatePixels();
}










function mousePressed() {
  frameCount= 0
}

// 3 bandes qui se déplacent = permet de voir des formes , bouger la souris 