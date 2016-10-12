try {
    var filter = new WebGLImageFilter();
}
catch( err ) {
    // Handle browsers that don't support WebGL
    console.error("No WebGL", err);
}


filter.addFilter('negative');
var img = document.getElementById("image");
img.onload = (e) => {
    console.log("image loaded", e, img);
    var canvas = createCanvas(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);


    var filteredImage = filter.apply(canvas);
    console.log("filtered image", filteredImage);
    img.parentNode.appendChild(filteredImage);
}


function createCanvas(width, height) {
    let canvas = document.getElementById("filter-canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

// The 'filteredImage' is a canvas element. You can draw it on a 2D canvas
// or just add it to your DOM

// Use .reset() to clear the current filter chain. This is faster than creating a new
// WebGLImageFilter instance
// filter.reset();