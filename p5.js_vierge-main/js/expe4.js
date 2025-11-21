let img,imgBlur;
let listeFiltre =[];
 let imageChoisie;
 let tailleCarre;
 let vitesseSouris;



 function preload(){
img= loadImage('image/corpus/5.jpeg'); //corriger URL

    

}

function setup() {

   

   createCanvas(windowWidth,windowHeight,WEBGL)

   noCursor()
   img.resize(width,0);
   
   
      for (let i = 0; i <7; i++) {
         let copie = img.get()
         listeFiltre[i] = copie;
      }

      listeFiltre[0].filter(GRAY)
      listeFiltre[1].filter(INVERT)
      listeFiltre[3].filter(POSTERIZE,6)
      listeFiltre[4].filter(BLUR,8)
      listeFiltre[5].filter(ERODE)
      listeFiltre[6].filter(DILATE)

      imageChoisie =random(listeFiltre);
    tailleCarre = random(20,200); // aléatoire des c , penser à faire test à voir ou à enlever 
    
}





 function draw(){

    background(0)
   
   let frag=imageChoisie.get(mouseX,mouseY,tailleCarre,tailleCarre)
   image(frag, mouseX-width/2,mouseY -height/2)

   vitesseSouris = dist(mouseX,mouseY,pmouseX,pmouseY)
   tailleCarre = map(vitesseSouris,0,100,45,200,true)




   if (frameCount%20==0) {
      imageChoisie =random(listeFiltre);
     // tailleCarre = random(20, 100) // nouvelle taille aléatoire à chaque changement
   }
 }
 

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//ajout fonction let tailleCarre


