
best_of_me_song = "";
destiny_song = "";

leftWristX = 0
leftWristY = 0

rightWristX = 0
rightWristY = 0


function preload() {
    best_of_me_song = loadSound("Best of Me.mp3");
    destiny_song = loadSound("Destiny.mp3")
}

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 600, 530)
}

function modelLoaded() {
    console.log("Pose Net Is Initialized!!")
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);

    }
}