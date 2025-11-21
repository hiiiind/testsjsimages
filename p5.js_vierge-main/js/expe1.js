let aleatoire,imgCopy;
let img,img2; 

function preload() {
  img= loadImage('image/corpus/1.jpeg');
  img2= loadImage('image/corpus/2.jpeg');


}




function setup() {
  noCursor();
    angleMode(DEGREES)
    createCanvas(windowWidth,windowHeight);
   //background(0) //background(237,240,211,155)
    background(154,170,186)
  img.resize(width,0)
  img2.resize(width,0)
}



let x=0



function draw() {
  
  let largeur= 19; // mettre entre 10 et 25 

  
  let mixValue= (1-cos(frameCount*0.02*180/ PI))/ 2;

  for (let i= 0; i < img.width; i += largeur) {
    let frag1= img.get(i,0,largeur,img.height)
    let frag2= img2.get(i,0,largeur,img2.height)

    push();
    
    let changementimg= (noise(i*12+frameCount*0.001)-0.5)*height; // penser à changer la valeur de height pour que ca ne prenne pas tout l'ecran 
    
    tint(255,(1-mixValue)*255)
    image(frag1,i,changementimg,largeur,height)
    
     tint(255,mixValue*255)
     image(frag2,i,changementimg,largeur,height)
       pop()
  }

  
}
// X manipulation juste observation: bandes qui bougent 