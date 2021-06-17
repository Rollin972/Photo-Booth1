nose_x =0;
nose_y =0;


function preload()
{
   mustache = loadImage("Mustache.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_net = ml5.poseNet(video,modelLoaded);
    pose_net.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log("Model Loaded Sucessfully!");
}

function gotPoses(result)
{
    if(result.length>0)
    {
        console.log(result);
        nose_x = result[0].pose.nose.x-20;
        nose_y = result[0].pose.nose.y+6;
        
    }
}
function draw()
{
    image(video,0,0,300,300);
    image(mustache,nose_x,nose_y,50,30);
}

function take_snapshot()
{
    save('Filter.png');
}