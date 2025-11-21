let img 
let img2
let listeFiltre =[];
 let imageChoisie;



function preload(){
img= loadImage('image/pande.JPG'); ///corriger URL
    

}

function setup() {
   createCanvas(windowWidth,windowHeight)
   
      for (let i = 0; i <7; i++) {
         let copie = img.get()
         listeFiltre[i] = copie;
      }

      listeFiltre[0].filter(GRAY)
      listeFiltre[1].filter(INVERT)
      listeFiltre[2].filter(THRESHOLD,0.5)
      listeFiltre[3].filter(POSTERIZE,2)
      listeFiltre[4].filter(BLUR,8)
      listeFiltre[5].filter(ERODE)
      listeFiltre[6].filter(DILATE)

      imageChoisie =random(listeFiltre);
}


function  draw(){
   
 }


 function mouseDragged(){
   
   let frag = imageChoisie.get(mouseX,mouseY,50,50)
   image(frag,mouseX,mouseY)



   if (frameCount%20==0) {
      imageChoisie =random(listeFiltre);
   }
 }
 
jblkj: 
 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



