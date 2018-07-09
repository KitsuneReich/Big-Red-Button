//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~     Nichole Boothroyd
//~     Big Red Button
//~
//~     UCSC Summer 2018: CMPM 147
//~
//~     Artwork created by Luis Zuno (@ansimuz)
//~
//~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var button;
var distance;
var img;
function setup() {
    createCanvas(384,224);
    fill('red');
    cursor(HAND);
    frameRate(20);
    img = loadImage('country-platform.png', function(img) {
              image(img, 0, 0);
              });
}
function draw() {
    background(img);
    
    //Getting mouse distance from button and tinting the screen
    distance = abs(sqrt(sq(mouseX - (width/2)) + sq(mouseY - (height/2))));
    tint(distance);
    
    if (distance <= 32) {
        console.log("Push Back");
    }
    button = ellipse(width/2, height/2, 55, 55);
}
