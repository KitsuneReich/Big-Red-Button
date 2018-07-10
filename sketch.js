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
var clicked = false;
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
    
    if (distance <= 27 && clicked == true) {
        frameRate(2);
        nStars = random() % 5 + 3;
        
        for (var i = 0; i < nStars; i++) {
            push();
            fill(random() * 255, random() * 255, random() * 255);
            star(random() * width, random() * 30, (random() *5 + 1), 10, 5);
            pop();
        }
    }
    else {
        frameRate(20);
    }
    button = ellipse(width/2, height/2, 55, 55);
}
//Star function provided by: https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a+halfAngle) * radius1;
        sy = y + sin(a+halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
function mouseClicked() {
    if(distance <= 27) {
        if (clicked == false) {
            clicked = true;
            fill('green');
        } else {
            clicked = false;
            fill('red');
        }
    }
}
