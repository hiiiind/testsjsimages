let img1,img2;
let imgUtilisee; 
let paused=false; 

function preload() {
  img1=loadImage('image/corpus/4.jpeg')
  img2=loadImage('image/corpus/5.jpeg')
}

function setup() {
  noCursor();

  createCanvas(windowWidth,windowHeight)
  noSmooth()
  imageMode(CENTER)


  
  imgUtilisee=img1
}




function draw() {
  if (!paused) {
    background(0);

    let sliceSpacing=map(mouseX,0,width,5,50);
    let maxSliceHeight=map(mouseY,0,height,10,100)

    
    



    for (let i=0;i<height;i 
    += sliceSpacing) {
      let y=int(random(imgUtilisee.height))
      let h=int(random(10,maxSliceHeight));
     
       let slice=imgUtilisee.get(0,y,imgUtilisee.width,h)
      let wScale=random(0.8,1.2) * map(mouseX,0,width,0.5,1.5)
      
      
      
      image(slice,width/2,i,imgUtilisee.width*wScale,h);
    }

    
    
            if (frameCount %int(map(mouseY,0,height,1,10))===0) {
           strokeWeight(random(1,map(mouseX,0,width,1,8)));
      stroke(random(150,255),random(150,255),0);
     
     
      line(random(width),random(height),random(width),random(height));
    }

    filter(THRESHOLD,0.4);
  }
}






function mousePressed() {
  paused=!paused; 



}


//effet noir et b,cliquer pour mettre pose au draw