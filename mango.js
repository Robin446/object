img2

function preload(){
    img2 = loadImage("mango.jpeg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    obj_detected = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects"

}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
    obj_detected.detect(img,gotresults);
}
function gotresults(result,error){
    if (error){
        console.log(error);
    }
    console.log(result);
}

function draw(){
    image(img2,0,0,640,420);
    fill("lime");
    text("pen" , 330,35);
    noFill();
    stroke("tomato");
    rect(50,10,520,450);
}