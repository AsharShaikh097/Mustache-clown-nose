nosex=0;
nosey=0;
mustachex=0;
mustachey=0;
function preload() {
clown_nose=loadImage('https://i.postimg.cc/3JKN5kWh/nose.png');
clown_mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose,nosex,nosey,20,20);
    image(clown_mustache,mustachex,mustachey,50,50);
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        mustachex=results[0].pose.nose.x-28;
        mustachey=results[0].pose.nose.y;    
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}