function initialize(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    c.style.border = "none";
    size_canvas();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillStyle = "#00FFFF";
    ctx.fillRect(0, 0, c.width, c.height);
}

function query_window_dimensions(){
    window_w = window.innerWidth || document.body.clientWidth;
    window_h = window.innerHeight || document.body.clientHeight;
}

function size_canvas(){
    query_window_dimensions();
    c.width = window_w;
    c.height = window_h;
}

// takes in x1 < x < x2 and returns a
// linear mapping to y
// y1 < y < y2
function linearMap(x, x1, x2, y1, y2){
    var a = (y2 - y1) / (x2 - x1);
    var y = y1 + a * (x - x1);
    return y;
}


function keyDown(e){
    kc = e.keyCode;
    //alert(e.keyCode);
    console.log(e.keyCode);


    // z
    if (kc == 90){
        /*
         * trying to get a temporary, low-res blowup to show
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, c.width, c.height);
        imageData = ctx.getImageData(
                c.width * 1/4., c.height * 1/4.,
                c.width * 3/4., c.height * 3/4.);

        var newCanvas = document.createElement("canvas");
        newCanvas.width = imageData.width;
        newCanvas.height = imageData.height;

        newCanvas.getContext("2d").putImageData(imageData, 0, 0);

        ctx.scale(2, 2);
        ctx.drawImage(newCanvas, 0, 0);

        //ctx.putImageData(imageData, 0, 0);
        */

        width = c.width * dx;
        height = c.height * dx;

        x_center = x_min + width / 2.;
        y_center = y_min + height / 2.;

        x_min = x_center - width  / 4.;
        y_min = y_center - height / 4.;

        dx = dx / 2.;

        draw_fract();

    }
    
    // x
    if (kc == 88){
        width = c.width * dx;
        height = c.height * dx;

        x_center = x_min + width / 2.;
        y_center = y_min + height / 2.;

        x_min = x_center - width;
        y_min = y_center - height;

        dx = dx * 2;

        draw_fract();
    }

    // i
    if (kc == 73){
        iterations *= 2;
        draw_fract();
    }

    // k
    if (kc == 75){
        iterations /= 2;
        draw_fract();
    }

    keys[kc] = true;
}

function keyUp(e){
    kc = e.keyCode;
    keys[e.keyCode] = false;
}

function mouseMove(e){
    if (mousePressed){
        x = e.clientX - c.offsetLeft;
        y = e.clientY - c.offsetTop;

        delta_i = x - mdownx;
        delta_j = y - mdowny;

        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "rgba(0, 0, 0," + a_min;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.putImageData(imageData, delta_i, delta_j);

        deltax = (x - mdownx)*dx;
        deltay = (y - mdowny)*dx;
    }
}

function mouseDown(e){
    mdownx = e.clientX - c.offsetLeft;
    mdowny = e.clientY - c.offsetTop;

    imageData = ctx.getImageData(0, 0, c.width, c.height);

    mousePressed = true;
}

function mouseUp(e){
    mousePressed = false;
    x_min -= deltax;
    y_min -= deltay;
    draw_fract();
}
