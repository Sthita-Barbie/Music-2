avengers_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    avengers_song = loadSound("Avenge.mp3");
    Harry_potter_theme_song = loadSound("Potter.mp3");
}

function draw(){
    image(video,0,0,600,530);
}