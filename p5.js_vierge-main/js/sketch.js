let img 
let img2
let imgBlur


function preload(){
img= loadImage('image/pande.JPG'); ///corriger URL
img2= loadImage('image/meme.png'); ///corriger URL

    

}

function setup() {
   createCanvas(windowWidth,windowHeight)
   
   imgBlur = img.get();
   imgBlur.filter(GRAY,8)
   image(imgBlur,0,0)

}


function  draw(){
    for (let i = 0; i < 30; i++) {
        imgNet(i*100)
        
    }
     let size =300;
     let x = noise(frameCount*0.01)*width
    let y = noise(500+frameCount*0.01)*height
    let frag = imgBlur.get(x,y,size,size)
    image(frag,x,y)
 }
 

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function imgNet(seed){
    let size =5;
     let x = noise(seed+frameCount*0.001)*width
    let y = noise(seed+500+frameCount*0.001)*height
    let frag = img.get(x,y,size,size)
   image(frag,x,y)
}