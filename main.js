function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet' , modelLoded);
}

function modelLoded() {
    console.log(¡Modelo Cargado!);
}

function draw(){

}

function gotResult() {
    
}